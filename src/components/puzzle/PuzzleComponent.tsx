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
import { GlobalFeature, GridFeature, GridFeatureKind } from '../../api/puzzle/types';

const TO_BLACK = 'brightness(0) saturate(100%)';
const TO_WHITE = 'brightness(0%) saturate(100%) invert(100%)';
const GREEN_TO_BLUE = 'brightness(0) saturate(100%) invert(41%) sepia(48%) saturate(4528%) hue-rotate(200deg) brightness(99%) contrast(105%)';
const GREEN_TO_RED = 'brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7155%) hue-rotate(0deg) brightness(101%) contrast(109%)';

const defaultPuzzle = new Puzzle({ n: 1 });

export enum PlaygroundFeatures {
  CONTINENTS,
}

interface PuzzleInfo {
  puzzle: Puzzle;
  isPlayground?: boolean;
  playgroundFeatures?: (PlaygroundFeatures | GridFeature)[];
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
  return useContext(PuzzleContext);
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

function preload(s: string) {
  const img = new Image();
  img.src = s;
}

for (const image of CHECKED_IMAGES.concat(UNCHECKED_IMAGES)) {
  preload(image);
}
preload('check-locked.png');

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

function isGridFeature(feature: GridFeature | PlaygroundFeatures): feature is GridFeature {
  return typeof(feature) !== 'string';
}

interface GFCProps {
  image: string;
  highlight?: boolean;
  whiteOnSuccess?: boolean;
  rotation?: number;
}

function GridFeatureComponent(props: GFCProps) {
  const { highlight, image, rotation, whiteOnSuccess } = props;

  return (
    <div
      style={{
        filter: !highlight ? (whiteOnSuccess ? TO_WHITE : TO_BLACK) : GREEN_TO_RED,
        backgroundImage: `url(${image})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        transform: rotation ? `rotate(${rotation}deg)` : '',
        borderRadius: rotation === undefined ? '' : '50%',
      }}
    />
  );
}

const useGridFeatureDetails = (
  i: number,
  j: number,
  status: boolean,
): React.ReactNode | null => {
  const { puzzle, isPlayground, playgroundFeatures, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  if (isPlayground) {
    const feature = playgroundFeatures?.filter(isGridFeature)
      .find((f: GridFeature) => f.i === i && f.j === j);

    if (!feature) {
      return null;
    }

    if (feature.kind === GridFeatureKind.NEARBY_COUNT) {
      return (
        <span style={{
          color: '#147eff',
          fontSize: '3em',
          fontWeight: 'bolder',
          WebkitTextStroke: status ? '2px white' : undefined,
        }}>
          {puzzle.getAdjacentCount(i, j, state)}
        </span>
      );
    } // No playground for FORCED
  } else {
    const feature = puzzle.getGridFeature(i, j);

    if (!feature) {
      return null;
    }

    const valid = puzzle.gridFeatureValid(i, j, state);
    const highlight = highlightErrors && !valid;

    if (feature.kind === GridFeatureKind.NEARBY_COUNT) {
      return (
        <span style={{
          color: highlight ? 'red' : status ? 'white' : 'black',
          fontSize: '3em',
          fontWeight: 'bolder',
        }}>
          {feature.value}
        </span>
      );
    } else if (feature.kind === GridFeatureKind.FORCED) {
      const img = image(feature.value ? 'counts/is-on.png' : 'counts/is-off.png');

      return (
        <GridFeatureComponent
          image={img}
          highlight={highlight}
        />
      );
    } else if (feature.kind === GridFeatureKind.STACKED_STEP) {
      const img = image(`counts/stacked-step${feature.value < 0 ? '-u' : ''}.png`);

      return (
        <GridFeatureComponent
          image={img}
          highlight={highlight}
        />
      );
    } else if (feature.kind.startsWith('shape')) {
      const rotation = feature.value === -1 ? 30 : 90 * feature.value;
      const img = image(`shapes/${feature.kind}.png`);

      return (
        <GridFeatureComponent
          image={img}
          highlight={highlight}
          rotation={rotation}
          whiteOnSuccess
        />
      );
    }

    return null;
  }
};

const StandardButton = (props: ButtonProps) => {
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

  const featureContent = useGridFeatureDetails(i, j, status);

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
    >
      {featureContent}
    </button>
  );
};

const NewButton = (props: ButtonProps) => {
  const { i, j, status } = props;
  const [locked, setLocked] = useState(false);
  const [onImg] = useState(randomImage(true));
  const [offImg] = useState(randomImage(false));

  const { attemptKey, isPlayground } = usePuzzle();

  const [, { onToggle }] = usePuzzleState();

  useEffect(() => {
    if (attemptKey) {
      setLocked(false);
    }
  }, [attemptKey, setLocked]);

  const onClick = useCallback((event: React.MouseEvent) => {
    if (isRightClick(event)) {
      // Suppress context menu
      event.preventDefault();

      setLocked(current => !current);
    } else {
      if (status) {
        onToggle(i, j, false);
      } else {
        onToggle(i, j, true);
      }
      setLocked(false);
    }
  }, [i, j, onToggle, status]);

  const featureContent = useGridFeatureDetails(i, j, status);
  const img = status
    ? (locked ? image('check-locked.png') : onImg)
    : (locked ? offImg : '');

  return (
    <button
      onClick={onClick}
      onContextMenu={onClick}
      style={{
        border: `2px solid ${isPlayground ? '#147eff' : 'black'}`,
        backgroundImage: img ? `url(${img})` : '',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        padding: '0',
      }}
    >
      {featureContent}
    </button>
  );
};

const newButtonEnabled = localStorage.getItem('new-button') === 'true';

if (newButtonEnabled) {
  console.log("You're enrolled in the new button experiment.");
  console.log("You can run localStorage.removeItem('new-button') and refresh to unenrol");
} else {
  console.log("I'm experimenting with the button UI.");
  console.log(
    "You can run localStorage.setItem('new-button', 'true') and refresh to try the new UI",
  );
}

const Button = newButtonEnabled ? NewButton : StandardButton;

const containerStyle = (w: number, h: number, isPlayground?: boolean): CSSProperties => ({
  display: 'inline-grid',
  gridTemplateColumns: '100px '.repeat(w),
  gridTemplateRows: '100px '.repeat(h),
  border: `4px solid ${isPlayground ? '#147eff' : 'black'}`,
});

interface ButtonContainerProps {
  children: React.ReactElement[];
}

const ButtonContainer = (props: ButtonContainerProps) => {
  const { puzzle, isPlayground } = usePuzzle();
  return (
    <div style={containerStyle(puzzle.w, puzzle.h, isPlayground)}>
      {props.children}
    </div>
  );
};

const clueStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const NONO_RULE_LIST = [
  EdgeClue.NONO_1_1, 
  EdgeClue.NONO_1_1_1, 
  EdgeClue.NONO_1_2, 
  EdgeClue.NONO_1_3, 
  EdgeClue.NONO_2_1, 
  EdgeClue.NONO_2_2, 
  EdgeClue.NONO_2_3, 
  EdgeClue.NONO_3_1, 
  EdgeClue.NONO_3_2,
  EdgeClue.NONO_1_1_2,
  EdgeClue.NONO_1_2_1,
  EdgeClue.NONO_2_1_1,
  EdgeClue.NONO_1_2_2,
  EdgeClue.NONO_2_1_2,
  EdgeClue.NONO_2_2_1,
  EdgeClue.NONO_1_3_1,
  EdgeClue.NONO_1_4,
  EdgeClue.NONO_4_1,
];

function allRuleDetails(): Record<EdgeClue, { image: string; alt: string }> {
  const someRules: Partial<Record<EdgeClue, { image: string; alt: string }>> = {
    [EdgeClue.NO_TRIPLES]: {
      image: image('counts/circle-circle-cross.png'),
      alt: 'Circle circle cross',
    },
    [EdgeClue.YES_TRIPLES]: {
      image: image('counts/cross-ccc.png'),
      alt: 'NOT circle circle cross',
    },
    [EdgeClue.SQ_1]: {
      image: image('counts/square-1.png'),
      alt: 'One square',
    },
    [EdgeClue.SQ_2]: {
      image: image('counts/square-2.png'),
      alt: 'Two squares',
    },
    [EdgeClue.SQ_3]: {
      image: image('counts/square-3.png'),
      alt: 'Three squares',
    },
    [EdgeClue.REFLECTIVE]: {
      image: image('counts/flip-vertical.png'),
      alt: 'Reflective',
    },
    [EdgeClue.ANTISYMMETRIC]: {
      image: image('counts/flip-antisymmetry.png'),
      alt: 'Antisymmetric',
    },
    [EdgeClue.DIV_A_YES]: {
      image: image('counts/16-a.png'),
      alt: 'Two triangles',
    },
    [EdgeClue.DIV_A_NO]: {
      image: image('counts/16-b.png'),
      alt: 'Not two triangles',
    },
  };

  for (const nonoRule of NONO_RULE_LIST) {
    const [, nums] = nonoRule.split('/');
    someRules[nonoRule] = {
      image: image(`counts/${nonoRule}.png`),
      alt: nums.split('-').join(' '),
    };
  }

  return someRules as Record<EdgeClue, { image: string; alt: string }>;
}

const RULE_DETAILS = allRuleDetails();

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

  if (count > 8) {
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
      <div style={clueStyle}>
        <div style={{
          ...coreStyle,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          fontSize: '2em',
          fontWeight: 900,
          display: 'table',
        }}>
          <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            {text}
          </span>
        </div>
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
  flexDirection: 'column',
};

const columnFeatures = [
  PlaygroundFeatures.CONTINENTS,
];

function usePlaygroundDetailsColumnNeeded() {
  const { isPlayground, playgroundFeatures } = usePuzzle();

  if (!isPlayground) {
    return false;
  }

  if (playgroundFeatures?.length) {
    if (columnFeatures.some(f => playgroundFeatures.includes(f))) {
      return true;
    }
  }

  return false;
}

function usePlaygroundBorderNeeded() {
  const columnNeeded = usePlaygroundDetailsColumnNeeded();
  // Add other here if it becomes more complex

  return columnNeeded;
}

const ContinentCount = () => {
  const { puzzle, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  if (puzzle.numContinents <= 0) {
    return null;
  }

  const shouldHighlight = highlightErrors
    // Continent count matters
    && puzzle.numContinents !== -1
    // Continent count is wrong
    && Puzzle.countContinents(state) !== puzzle.numContinents;

  return (
    <Clue
      image={image('counts/continent.png')}
      alt="Number of continents"
      text={puzzle.numContinents.toString()}
      width="60px"
      filter={shouldHighlight ? GREEN_TO_RED : undefined}
    />
  );
};

const Symmetry = () => {
  const { puzzle, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  const hSymmetry = puzzle.globalFeatures.includes(GlobalFeature.FLIP_HORIZONTAL);
  const vSymmetry = puzzle.globalFeatures.includes(GlobalFeature.FLIP_VERTICAL);

  const valid = puzzle.isSymmetryCorrect(state);

  const shouldHighlight = highlightErrors && !valid;

  const imageSrc = hSymmetry && vSymmetry
    ? image('counts/flip-both.png')
    : image('counts/flip-vertical.png');

  if (hSymmetry && vSymmetry) {
    return (
      <Clue
        image={imageSrc}
        alt="Horizonal and vertical mirror"
        width="60px"
        filter={shouldHighlight ? GREEN_TO_RED : undefined}
      />
    );
  } else if (hSymmetry || vSymmetry) {
    return (
      <Clue
        image={imageSrc}
        horizontal={hSymmetry}
        alt={hSymmetry ? 'Horizontal mirror' : 'Vertical mirror'}
        width="60px"
        filter={shouldHighlight ? GREEN_TO_RED : undefined}
      />
    );
  }

  return null;
};

const Stacked = () => {
  const { puzzle, highlightErrors } = usePuzzle();
  const [state] = usePuzzleState();

  const simpleStack = puzzle.globalFeatures.includes(GlobalFeature.STACKED);
  const ouStack = puzzle.globalFeatures.includes(GlobalFeature.STACKED_OU);
  const bothStack = puzzle.globalFeatures.includes(GlobalFeature.STACKED_BOTH);

  if (!simpleStack && !ouStack && !bothStack) {
    return null;
  }

  const valid = puzzle.isStackedCorrectly(state);

  const shouldHighlight = highlightErrors && !valid;

  const src = simpleStack
    ? 'counts/stacked.png'
    : ouStack
      ? 'counts/stacked2.png'
      : 'counts/stacked3.png';

  const alt = simpleStack
    ? 'Stacked'
    : ouStack
      ? 'Over under stack'
      : 'Above and below stack';

  return (
    <Clue
      image={image(src)}
      alt={alt}
      width="60px"
      filter={shouldHighlight ? GREEN_TO_RED : undefined}
    />
  );
};

const DetailsColumn = () => {
  const { puzzle, playgroundFeatures } = usePuzzle();
  const [state] = usePuzzleState();

  const anyDetails = puzzle.numContinents !== -1;

  const enabledForPlayground = usePlaygroundDetailsColumnNeeded();

  if (enabledForPlayground) {
    return (
      <div style={columnStyles}>
        {playgroundFeatures?.includes(PlaygroundFeatures.CONTINENTS) && (
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

  if (!anyDetails && !puzzle.globalFeatures.length) {
    return null;
  }

  return (
    <div style={columnStyles} className="details-column">
      <ContinentCount />
      <Symmetry />
      <Stacked />
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

const edgeStyle = (w: number, h: number): CSSProperties => ({
  display: 'inline-grid',
  gridTemplateRows: `auto ${h * 100 + 8}px`,
  gridTemplateColumns: `auto ${w * 100 + 8}px auto`,
  gridTemplateAreas: '"0 top-clues total-count" "extra-details main-section side-clues"',
});

const EdgeWrapper = (props: { children: React.ReactElement }) => {
  const { children } = props;

  const { puzzle } = usePuzzle();

  const anyEdgeClues = puzzle.colCounts.some(v => v >= 0)
    || puzzle.rowCounts.some(v => v >= 0);

  const anyEdgeRules = puzzle.colRules.some(v => !!v)
    || puzzle.rowRules.some(v => !!v);

  const pgBorderNeeded = usePlaygroundBorderNeeded();
  
  if (!anyEdgeClues && !anyEdgeRules && !puzzle.totalRequirement() && !pgBorderNeeded && !puzzle.globalFeatures.length) {
    return children;
  }

  return (
    <div style={edgeStyle(puzzle.w, puzzle.h)}>
      <DetailsColumn />
      <div style={{
        gridArea: 'top-clues',
        display: 'grid',
        gridTemplateColumns: '100px '.repeat(puzzle.w),
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
        gridTemplateRows: '100px '.repeat(puzzle.h),
        alignContent: 'space-around',
        justifyContent: 'start',
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
              i={index % state.w}
              j={Math.floor(index / state.w)}
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
  playgroundFeatures?: (PlaygroundFeatures | GridFeature)[];
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
