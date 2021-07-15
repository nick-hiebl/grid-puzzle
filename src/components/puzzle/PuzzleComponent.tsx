import React, { CSSProperties, useCallback, useState, useEffect } from 'react';

import Puzzle from '../../api/puzzle';
import type { PuzzleDetails, PuzzleState } from '../../api/puzzle';

interface ButtonProps {
  i: number;
  j: number;
  onToggle: (newStatus: boolean) => void;
  status: boolean;
}

function image(path: string) {
  return `${process.env.PUBLIC_URL}/${path}`;
}

const CHECKED_IMAGES = [
  'checked-1.png',
  'checked-2.png',
  'checked-3.png',
].map(image);

const UNCHECKED_IMAGES = [
  'unchecked-1.png',
  'unchecked-2.png',
  'unchecked-3.png',
].map(image);

for (const image of CHECKED_IMAGES.concat(UNCHECKED_IMAGES)) {
  const preload = new Image();
  preload.src = image;
}

const randomImage = (checked: boolean) => {
  if (checked) {
    return CHECKED_IMAGES[Math.floor(Math.random() * CHECKED_IMAGES.length)];
  }

  return UNCHECKED_IMAGES[Math.floor(Math.random() * UNCHECKED_IMAGES.length)];
}

function isRightClick(event: React.MouseEvent) {
  if ('type' in event) {
    if (event.type === 'click') {
      return false;
    } else if (event.type === 'contextmenu') {
      return true;
    }
  }
  if ('which' in event) {
    return event['which'] === 3;
  } else if ('button' in event) {
    return event['button'] === 2;
  }

  return false;
}

const Button = (props: ButtonProps) => {
  const { status, onToggle } = props;
  const [img, setImage] = useState(randomImage(status));
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setImage(randomImage(status));
  }, [status]);

  const onClick = useCallback((event: React.MouseEvent) => {
    if (isRightClick(event)) {
      // Suppress context menu
      event.preventDefault();
      setImage(randomImage(false));
      if (status || !enabled) {
        onToggle(false);
        setEnabled(true);
      } else {
        setEnabled(false);
      }
    } else {
      if (status) {
        setImage(randomImage(false));
        onToggle(false);
        setEnabled(false);
      } else {
        setImage(randomImage(true));
        onToggle(true);
        setEnabled(true);
      }
    }
  }, [enabled, onToggle, status]);

  return (
    <button
      onClick={onClick}
      onContextMenu={onClick}
      style={{
        border: '2px solid black',
        backgroundImage: enabled ? `url(${img})` : '',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        padding: '0',
      }}
    />
  );
};

const containerStyle = (n: number): CSSProperties => ({
  display: 'inline-grid',
  gridTemplateColumns: '100px '.repeat(n),
  gridTemplateRows: '100px '.repeat(n),
  border: '4px solid black',
});

interface ButtonContainerProps {
  n: number;
  children: React.ReactElement[];
}

const ButtonContainer = (props: ButtonContainerProps) => {
  return (
    <div style={containerStyle(props.n)}>
      {props.children}
    </div>
  );
};

const edgeStyle = (n: number): CSSProperties => ({
  display: 'inline-grid',
  gridTemplateRows: `45px ${n * 100 + 8}px`,
  gridTemplateColumns: `auto ${n * 100 + 8}px 45px`,
  gridTemplateAreas: '"extra-details top-clues total-count" "extra-details main-section side-clues"',
});

const clueStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const EdgeClue = (props: { count: number; horizontal?: boolean }) => {
  const { count, horizontal } = props;

  if (count > 6) {
    return (
      <Clue text={count.toString()} horizontal={horizontal} />
    );
  } else if (count >= 0) {
    return (
      <Clue
        alt={`${count} in this ${horizontal ? 'row' : 'column'}`}
        image={image(`counts/dot-${count}.png`)}
        horizontal={horizontal}
      />
    );
  }

  return <div></div>;
};

interface ClueProps {
  horizontal?: boolean;
  image?: string;
  alt?: string;
  text?: string;
  width?: string;
}

const Clue = (props: ClueProps) => {
  const {
    alt,
    text,
    image,
    horizontal,
    width = '45px',
  } = props;

  const coreStyle: CSSProperties = {
    transform: horizontal ? 'rotate(90deg)' : undefined,
    width,
    height: width,
    filter: 'grayscale(100%) brightness(100%)',
  };

  if (image && text) {
    return (
      <div style={{
        ...coreStyle,
        ...clueStyle,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        fontSize: '2em',
        fontWeight: 900,
        WebkitTextStroke: '2px white',
      }}>
        {text}
      </div>
    );
  }

  return (
    <div style={clueStyle}>
      {image && (
        <img
          alt={alt}
          style={coreStyle}
          src={image}
        />
      )}
      {text && text}
    </div>
  );
};

const columnStyles: CSSProperties = {
  width: '100px',
  height: '100%',
  gridArea: 'extra-details',
  display: 'flex',
  alignItems: 'space-evenly',
  justifyContent: 'center',
};

const DetailsColumn = (props: { puzzle: Puzzle }) => {
  const { puzzle } = props;

  const anyDetails = puzzle.numContinents !== -1;

  if (!anyDetails) {
    return null;
  }

  return (
    <div style={columnStyles}>
      {puzzle.numContinents !== -1 && (
        <Clue
          image={image('counts/continent.png')}
          alt="Number of continents"
          text={puzzle.numContinents.toString()}
          width="60px"
        />
      )}
    </div>
  )
};

const EdgeWrapper = (props: { puzzle: Puzzle; children: React.ReactElement }) => {
  const { children, puzzle } = props;

  const anyEdgeClues = puzzle.colCounts.some(v => v >= 0)
    || puzzle.rowCounts.some(v => v >= 0);
  
  if (!anyEdgeClues && puzzle.totalActive === -1) {
    return children;
  }

  return (
    <div style={edgeStyle(puzzle.n)}>
      <DetailsColumn puzzle={puzzle} />
      <div style={{
        gridArea: 'top-clues',
        display: 'grid',
        gridTemplateColumns: '100px '.repeat(puzzle.n),
        justifyContent: 'space-around',
      }}>
        {puzzle.colCounts.map((c, index) => (
          <EdgeClue key={index} count={c} />
        ))}
      </div>
      <div style={{
        gridArea: 'main-section',
      }}>
        {children}
      </div>
      <div style={{
        gridArea: 'side-clues',
        display: 'grid',
        gridTemplateRows: '100px '.repeat(puzzle.n),
        alignContent: 'space-around',
      }}>
        {puzzle.rowCounts.map((c, index) => (
          <EdgeClue key={index} count={c} horizontal />
        ))}
      </div>
      {puzzle.totalActive !== -1 && (
        <div style={{
          gridArea: 'total-count',
          textAlign: 'center',
          justifyContent: 'center',
        }}>
          <strong style={{ fontSize: '2em' }}>
            {puzzle.totalActive}
          </strong>
        </div>
      )}
    </div>
  );
};

interface InnerPuzzleProps {
  onToggle: (i: number, j: number) => (newStatus: boolean) => void;
  puzzle: Puzzle;
  state: PuzzleState;
}

export const PuzzleComponent = (props: InnerPuzzleProps) => {
  const { onToggle, puzzle, state } = props;

  return (
    <EdgeWrapper puzzle={puzzle}>
      <ButtonContainer n={puzzle.n}>
        {state.enabled.map((status, index) => {
          const i = index % puzzle.n,
            j = Math.floor(index / puzzle.n);
          
          return (
            <Button
              key={index}
              status={status}
              onToggle={onToggle(i, j)}
              i={index % puzzle.n}
              j={Math.floor(index / puzzle.n)}
            />
          );
        })}
      </ButtonContainer>
    </EdgeWrapper>
  );
};

interface Props {
  details: PuzzleDetails;
}

export const PuzzleWrapper = (props: Props) => {
  const { details } = props;

  const [puzzle] = useState(new Puzzle(details));

  const [state, setState] = useState<PuzzleState>(puzzle.getState());

  const onToggle = useCallback((i: number, j: number) => (newStatus: boolean) => {
    setState(puzzle.toggle(i, j, newStatus));
  }, [puzzle]);

  return (
    <div style={{
      backgroundColor: state.complete ? 'hsla(120, 80%, 80%, 50%)' : '',
      padding: '8px',
    }}>
      <PuzzleComponent
        puzzle={puzzle}
        onToggle={onToggle}
        state={state}
      />
    </div>
  )
}
