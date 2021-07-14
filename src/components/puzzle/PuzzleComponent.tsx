import React, { CSSProperties, useCallback, useState, useEffect } from 'react';

import Puzzle, { PuzzleDetails, PuzzleState } from '../../api/puzzle/Puzzle';

interface ButtonProps {
  i: number;
  j: number;
  onToggle: (newStatus: boolean) => void;
  status: boolean;
}

const CHECKED_IMAGES = [
  'checked-1.png',
  'checked-2.png',
  'checked-3.png',
].map(s => `${process.env.PUBLIC_URL}/${s}`);

const UNCHECKED_IMAGES = [
  'unchecked-1.png',
  'unchecked-2.png',
  'unchecked-3.png',
].map(s => `${process.env.PUBLIC_URL}/${s}`);

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

const Button = (props: ButtonProps) => {
  const { status, onToggle } = props;
  const [img, setImage] = useState(randomImage(status));
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setImage(randomImage(status));
  }, [status]);

  const onClick = useCallback(() => {
    if (status) {
      onToggle(false);
      setEnabled(false);
    } else if (enabled) {
      onToggle(true);
    } else {
      setEnabled(true);
    }
  }, [enabled, onToggle, status]);

  return (
    <button
      onClick={onClick}
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
  gridTemplateColumns: `${n * 100 + 8}px 45px`,
  gridTemplateAreas: '"top-clues total-count" "main-section side-clues"',
});

const clueStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const Clue = (props: { horizontal?: boolean; count: number }) => {
  const { count, horizontal } = props;

  const style = horizontal ? {
    transform: 'rotate(90deg)',
    width: '45px',
  } : { width: '45px' };

  return (
    <div style={clueStyle}>
      {(count >= 0 && count < 7) && (
        <img
          alt={`${count} in this ${horizontal ? 'row' : 'column'}`}
          style={style}
          src={`${process.env.PUBLIC_URL}/counts/dot-${count}.png`}
        />
      )}
      {(count >= 7) && `${count}`}
    </div>
  );
}

const EdgeWrapper = (props: { puzzle: Puzzle; children: React.ReactElement }) => {
  const { children, puzzle } = props;

  const anyEdgeClues = puzzle.colCounts.some(v => v >= 0)
    || puzzle.rowCounts.some(v => v >= 0);
  
  if (!anyEdgeClues && puzzle.totalActive === -1) {
    return children;
  }

  return (
    <div style={edgeStyle(puzzle.n)}>
      <div style={{
        gridArea: 'top-clues',
        display: 'grid',
        gridTemplateColumns: '100px '.repeat(puzzle.n),
        justifyContent: 'space-around',
      }}>
        {puzzle.colCounts.map((c, index) => (
          <Clue key={index} count={c} />
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
          <Clue key={index} count={c} horizontal />
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
