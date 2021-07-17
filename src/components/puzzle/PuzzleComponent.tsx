import React, {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Puzzle from '../../api/puzzle';
import type { PuzzleDetails, PuzzleState } from '../../api/puzzle';
import { EdgeClue } from '../../api/puzzle';

const GREEN_TO_BLUE = 'brightness(0) saturate(100%) invert(41%) sepia(48%) saturate(4528%) hue-rotate(200deg) brightness(99%) contrast(105%)';
const GREEN_TO_RED = 'brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7155%) hue-rotate(0deg) brightness(101%) contrast(109%)';

const defaultPuzzle = new Puzzle({ n: 1 });

export enum PlaygroundFeatures {
  CONTINENTS,
}

interface PuzzleInfo {
  puzzle: Puzzle;
  isPlayground?: boolean;
  playgroundFeatures?: PlaygroundFeatures[];
  highlightErrors?: boolean;
  attemptKey: string;
}

const PuzzleContext = React.createContext<PuzzleInfo>({
  puzzle: defaultPuzzle,
  attemptKey: '',
});

type PuzzleStateUpdater = (i: number, j: number, status: boolean) => void;

interface PuzzleStateActions {
  onToggle: PuzzleStateUpdater;
  reset: () => void;
}

const PuzzleStateContext = React.createContext<
  [PuzzleState, PuzzleStateActions]
>([defaultPuzzle.getState(), { onToggle: () => {}, reset: () => {} }]);

const usePuzzle = () => {
  const x = useContext(PuzzleContext);

  useEffect(() => {
    console.warn('Re-rendering puzzle state');
  }, [x]);

  return x;
}
const usePuzzleState = () => useContext(PuzzleStateContext);

interface ButtonProps {
  i: number;
  j: number;
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
  const { i, j, status } = props;
  const [img, setImage] = useState(randomImage(status));
  const [enabled, setEnabled] = useState(false);

  const { attemptKey, isPlayground } = usePuzzle();

  const [, { onToggle }] = usePuzzleState();

  useEffect(() => {
    if (attemptKey) {
      setEnabled(false);
    }
  }, [attemptKey, setEnabled]);

  const onClick = useCallback((event: React.MouseEvent) => {
    if (isRightClick(event)) {
      // Suppress context menu
      event.preventDefault();
      setImage(randomImage(false));
      if (status || !enabled) {
        onToggle(i, j, false);
        setEnabled(true);
      } else {
        setEnabled(false);
      }
    } else {
      if (status) {
        setImage(randomImage(false));
        onToggle(i, j, false);
        setEnabled(false);
      } else {
        setImage(randomImage(true));
        onToggle(i, j, true);
        setEnabled(true);
      }
    }
  }, [enabled, i, j, onToggle, status]);

  return (
    <button
      onClick={onClick}
      onContextMenu={onClick}
      style={{
        border: `2px solid ${isPlayground ? '#147eff' : 'black'}`,
        backgroundImage: enabled ? `url(${img})` : '',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        padding: '0',
      }}
    />
  );
};

const containerStyle = (n: number, isPlayground?: boolean): CSSProperties => ({
  display: 'inline-grid',
  gridTemplateColumns: '100px '.repeat(n),
  gridTemplateRows: '100px '.repeat(n),
  border: `4px solid ${isPlayground ? '#147eff' : 'black'}`,
});

interface ButtonContainerProps {
  children: React.ReactElement[];
}

const ButtonContainer = (props: ButtonContainerProps) => {
  const { puzzle, isPlayground } = usePuzzle();
  return (
    <div style={containerStyle(puzzle.n, isPlayground)}>
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

const RULE_DETAILS: Record<EdgeClue, { image: string; alt: string }> = {
  [EdgeClue.NO_TRIPLES]: {
    image: image('counts/circle-circle-cross.png'),
    alt: 'Circle circle cross',
  },
  [EdgeClue.YES_TRIPLES]: {
    image: image('counts/cross-ccc.png'),
    alt: 'NOT circle circle cross',
  },
};

const useEdgeClueHighlight = (horizontal: boolean, index: number): boolean => {
  const { puzzle, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  if (!highlightErrors) {
    return false;
  }

  if (horizontal) {
    return !puzzle.isRowValid(state, index);
  } else {
    return !puzzle.isColValid(state, index);
  }
};

const EdgeClueComponent = (props: { count: number; rule?: EdgeClue | null; horizontal?: boolean; index: number }) => {
  const { count, horizontal, index, rule } = props;

  const shouldHighlight = useEdgeClueHighlight(!!horizontal, index);

  const filter = shouldHighlight ? GREEN_TO_RED : undefined;

  if (count > 6) {
    return (
      <Clue text={count.toString()} horizontal={horizontal} filter={filter} />
    );
  }

  if (count >= 0) {
    return (
      <Clue
        alt={`${count} in this ${horizontal ? 'row' : 'column'}`}
        image={image(`counts/dot-${count}.png`)}
        horizontal={horizontal}
        filter={filter}
      />
    );
  }

  if (rule) {
    return (
      <Clue
        {...RULE_DETAILS[rule]}
        horizontal={horizontal}
        filter={filter}
      />
    )
  }

  return <div></div>;
};

interface ClueProps {
  horizontal?: boolean;
  image?: string;
  alt?: string;
  text?: string;
  width?: string;
  color?: string;
  filter?: string;
}

const Clue = (props: ClueProps) => {
  const {
    alt,
    text,
    image,
    horizontal,
    width = '45px',
    filter = 'grayscale(100%) brightness(0%)',
    color = 'black',
  } = props;

  const coreStyle: CSSProperties = {
    transform: horizontal ? 'rotate(90deg)' : undefined,
    width,
    height: width,
    filter,
    color,
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

const DetailsColumn = () => {
  const { puzzle, isPlayground, playgroundFeatures, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  const anyDetails = puzzle.numContinents !== -1;

  if (isPlayground && playgroundFeatures?.length) {
    return (
      <div style={columnStyles}>
        {playgroundFeatures.includes(PlaygroundFeatures.CONTINENTS) && (
          <Clue
            image={image('counts/continent.png')}
            alt="Number of continents"
            text={Puzzle.countContinents(state).toString()}
            width="60px"
            color="#007e00"
            filter={GREEN_TO_BLUE}
          />
        )}
      </div>
    );
  }

  if (!anyDetails) {
    return null;
  }

  const shouldHighlight = highlightErrors
    // Continent count matters
    && puzzle.numContinents !== -1
    // Continent count is wrong
    && Puzzle.countContinents(state) !== puzzle.numContinents;

  return (
    <div style={columnStyles}>
      {puzzle.numContinents !== -1 && (
        <Clue
          image={image('counts/continent.png')}
          alt="Number of continents"
          text={puzzle.numContinents.toString()}
          width="60px"
          filter={shouldHighlight ? GREEN_TO_RED : undefined}
        />
      )}
    </div>
  )
};

const ActiveCount = () => {
  const { puzzle, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  const totalRequirement = puzzle.totalRequirement();

  if (!totalRequirement) {
    return null;
  }

  const shouldHighlight = highlightErrors
    && !puzzle.isCountValid(state);

  return (
    <div style={{
      gridArea: 'total-count',
      textAlign: 'center',
      justifyContent: 'center',
    }}>
      <strong style={{ fontSize: '2em', color: shouldHighlight ? 'red' : 'inherit' }}>
        {totalRequirement}
      </strong>
    </div>
  );
}

const EdgeWrapper = (props: { children: React.ReactElement }) => {
  const { children } = props;

  const { puzzle, playgroundFeatures } = usePuzzle();

  const anyEdgeClues = puzzle.colCounts.some(v => v >= 0)
    || puzzle.rowCounts.some(v => v >= 0);
  
  if (!anyEdgeClues && !puzzle.totalRequirement() && !playgroundFeatures?.length) {
    return children;
  }

  return (
    <div style={edgeStyle(puzzle.n)}>
      <DetailsColumn />
      <div style={{
        gridArea: 'top-clues',
        display: 'grid',
        gridTemplateColumns: '100px '.repeat(puzzle.n),
        justifyContent: 'space-around',
      }}>
        {puzzle.colCounts.map((c, index) => (
          <EdgeClueComponent
            key={index}
            index={index}
            count={c}
            rule={puzzle.colRules[index]}
          />
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
          <EdgeClueComponent
            key={index}
            index={index}
            count={c}
            rule={puzzle.rowRules[index]}
            horizontal
          />
        ))}
      </div>
      <ActiveCount />
    </div>
  );
};

const ResetButton = () => {
  const [state, { reset }] = usePuzzleState();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (state) {
      setCount(0);
    }
  }, [state]);

  useEffect(() => {
    if (count === 2) {
      reset();
      setCount(0);
    }
  }, [count, reset]);

  return (
    <div style={{ float: 'right' }}>
      <button onClick={() => setCount(c => c + 1)}>
        {count === 0 && 'Reset'}
        {count !== 0 && 'Are you sure'}
      </button>
    </div>
  )
};

const PuzzleComponent = () => {
  const [state] = usePuzzleState();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <EdgeWrapper>
        <ButtonContainer>
          {state.enabled.map((status, index) => (
            <Button
              key={index}
              status={status}
              i={index % state.n}
              j={Math.floor(index / state.n)}
            />
          ))}
        </ButtonContainer>
      </EdgeWrapper>
      <ResetButton />
    </div>
  );
};

interface Props {
  details: PuzzleDetails;
  isPlayground?: boolean;
  playgroundFeatures?: PlaygroundFeatures[];
  highlightErrors?: boolean;
}

export const PuzzleWrapper = (props: Props) => {
  const { details, highlightErrors, isPlayground, playgroundFeatures } = props;

  const [puzzleContext, setPuzzleContext] = useState<PuzzleInfo>({
    puzzle: new Puzzle(details),
    isPlayground,
    playgroundFeatures,
    highlightErrors,
    attemptKey: Math.random().toString(),
  });

  const { puzzle } = puzzleContext;

  const [state, setState] = useState<PuzzleState>(puzzle.getState());

  const onToggle = useCallback((i: number, j: number, newStatus: boolean) => {
    setState(puzzle.toggle(i, j, newStatus));
  }, [puzzle]);

  const reset = useCallback(() => {
    setState(puzzle.reset());

    setPuzzleContext({
      ...puzzleContext,
      attemptKey: Math.random().toString(),
    })
  }, [puzzle, puzzleContext, setPuzzleContext]);

  const actions = useMemo(() => ({ reset, onToggle }), [onToggle, reset]);

  return (
    <PuzzleContext.Provider value={puzzleContext}>
      <PuzzleStateContext.Provider value={[state, actions]}>
        <div style={{
          backgroundColor: (state.complete && !isPlayground) ? 'hsla(120, 80%, 80%, 50%)' : '',
          padding: '8px',
        }}>
          <PuzzleComponent />
        </div>
      </PuzzleStateContext.Provider>
    </PuzzleContext.Provider>
  )
}
