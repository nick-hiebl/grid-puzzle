import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';

const PUZZLE_0 = { n: 3, colClues: [null,null,null], rowClues: [null,null,null], minTotal: 7 };
const PUZZLE_1 = { n: 5, colClues: [null,3,null,3,4], rowClues: [null,1,null,null,2], minTotal: 17 };
const PUZZLE_2 = { n: 5, colClues: [4,null,4,0,3], rowClues: [3,null,2,2,null], numContinents: 2, minTotal: 6 };
const PUZZLE_3 = { n: 5, colClues: [null,1,null,3,null], rowClues: [2,3,1,null,null], minTotal: 8, maxTotal: 9, numContinents: 1 };
// const PUZZLE_4 = { n: 4, colClues: [3,2,null,0], rowClues: [3,1,2,null], totalActive: 8, numContinents: 2 };
// const PUZZLE_5 = { n: 5, colClues: [null,2,null,2,1], rowClues: [2,null,1,2,1], numContinents: 1 };
// const PUZZLE_HARD_1 = { n: 5, colClues: [null,2,2,3,1], rowClues: [3,2,1,null,1], totalActive: 9, numContinents: 2 }; // 184867
// const PUZZLE_HARD_2 = { n: 5, colClues: [null,2,2,3,1], rowClues: [3,2,1,null,1], totalActive: 9, numContinents: 8 };

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 5</Typography>
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
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>Let's do some puzzles now.</p>
      <PuzzleWrapper details={PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_2} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_3} />
      <br />

      {/* <Typography variant="h4">Puzzle #4</Typography>
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
      <br /> */}

      {props.links}
    </Container>
  )
};

export default TodaysPage;
