import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';

const PUZZLE_0 = { n: 3, colClues: [0,null,0], rowClues: [null,null,null], totalActive: 2, numContinents: 2 };
const PUZZLE_0A = { n: 3, colClues: [null,null,null], rowClues: [null,null,null], totalActive: 4, numContinents: 1 };
const PUZZLE_0B = { n: 3, colClues: [null,null,null], rowClues: [null,null,null], totalActive: 4, numContinents: 2 };
const PUZZLE_0C = { n: 3, colClues: [null,null,null], rowClues: [null,null,null], totalActive: 4, numContinents: 3 };
const PUZZLE_0D = { n: 3, colClues: [null,null,null], rowClues: [null,null,null], totalActive: 4, numContinents: 4 };
const PUZZLE_1 = { n: 3, colClues: [2,1,2], rowClues: [1,2,2], numContinents: 2 };
const PUZZLE_2 = { n: 3, colClues: [null,1,3], rowClues: [null,2,2], numContinents: 2 };
const PUZZLE_3 = { n: 4, colClues: [2,4,2,null], rowClues: [2,4,null,null], totalActive: 10, numContinents: 2 };
const PUZZLE_4 = { n: 4, colClues: [3,2,null,0], rowClues: [3,1,2,null], totalActive: 8, numContinents: 2 };
const PUZZLE_5 = { n: 5, colClues: [null,2,null,2,1], rowClues: [2,null,1,2,1], numContinents: 1 };
const PUZZLE_HARD_1 = { n: 5, colClues: [null,2,2,3,1], rowClues: [3,2,1,null,1], totalActive: 9, numContinents: 2 }; // 184867
const PUZZLE_HARD_2 = { n: 5, colClues: [null,2,2,3,1], rowClues: [3,2,1,null,1], totalActive: 9, numContinents: 8 };

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 3</Typography>
      <p>
        Let's continue adding more features!
      </p>

      <Typography variant="h5">A note on controls</Typography>
      <p>
        To signify an active square, click to draw a big dot in that square. A
        right click will mark a square with grey strokes. This counts as the
        square still being inactive, but can be used as a note-to-self that the
        square is definitely not active while working out the puzzle.
      </p>

      <Typography variant="h4">Intro Puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0} />
      <br />

      <Typography variant="h4">Intro Puzzle #2</Typography>
      <p>
        You can play around here to understand better what the rule is for
        today.
      </p>
      <PuzzleWrapper details={PUZZLE_0A} />
      <br />

      <Typography variant="h4">Intro Puzzle #3</Typography>
      <p>
        It's always worth finding some answers that are <i>wrong</i> as well as
        correct ones. This helps you test your hypothesis.
      </p>
      <PuzzleWrapper details={PUZZLE_0B} />
      <br />

      <Typography variant="h4">Intro Puzzle #4</Typography>
      <p>
        Follow the pattern.
      </p>
      <PuzzleWrapper details={PUZZLE_0C} />
      <br />

      <Typography variant="h4">Intro Puzzle #5</Typography>
      <p>
        Hopefully this one should be understandable at this point.
      </p>
      <PuzzleWrapper details={PUZZLE_0D} />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>Let's do some puzzles now.</p>
      <PuzzleWrapper details={PUZZLE_1} />
      <br />

      <Typography variant="h4">Puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_2} />
      <br />

      <Typography variant="h4">Puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_3} />
      <br />

      <Typography variant="h4">Puzzle #4</Typography>
      <PuzzleWrapper details={PUZZLE_4} />
      <br />

      <Typography variant="h4">Puzzle #5</Typography>
      <PuzzleWrapper details={PUZZLE_5} />
      <br />

      <Typography variant="h4">Final puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_HARD_1} />
      <br />

      <Typography variant="h4">Final puzzle #2</Typography>
      <p>Almost identical to the puzzle above.</p>
      <PuzzleWrapper details={PUZZLE_HARD_2} />
      <br />
      {props.links}
    </Container>
  )
};

export default TodaysPage;
