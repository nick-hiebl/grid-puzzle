import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 3, colCounts: [0,-1,0], rowCounts: [-1,-1,-1], totalActive: 2, numContinents: 2 };
const PUZZLE_0A = { n: 3, colCounts: [-1,-1,-1], rowCounts: [-1,-1,-1], totalActive: 4, numContinents: 3 };
const PUZZLE_1 = { n: 3, colCounts: [2,1,2], rowCounts: [1,2,2], numContinents: 2 };
const PUZZLE_2 = { n: 3, colCounts: [-1,1,3], rowCounts: [-1,2,2], numContinents: 2 };
const PUZZLE_3 = { n: 4, colCounts: [2,4,2,-1], rowCounts: [2,4,-1,-1], totalActive: 10, numContinents: 2 };
const PUZZLE_4 = { n: 4, colCounts: [3,2,-1,0], rowCounts: [3,1,2,-1], totalActive: 8, numContinents: 2 };
const PUZZLE_HARD_1 = { n: 5, colCounts: [-1,2,2,3,1], rowCounts: [3,2,1,-1,1], totalActive: 9, numContinents: 2 }; // 184867
const PUZZLE_HARD_2 = { n: 5, colCounts: [-1,2,2,3,1], rowCounts: [3,2,1,-1,1], totalActive: 9, numContinents: 8 };

const TodaysPage = () => {
  return (
    <Container>
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

      <Typography variant="h4">Intro Puzzle</Typography>
      <PuzzleWrapper details={PUZZLE_0} />
      <br />

      <Typography variant="h4">Intro Puzzle #2</Typography>
      <p>
        You can play around here to understand better what the rule is for
        today.
      </p>
      <PuzzleWrapper details={PUZZLE_0A} />
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

      <Typography variant="h4">Final puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_HARD_1} />
      <br />

      <Typography variant="h4">Final puzzle #2</Typography>
      <p>Almost identical to the puzzle above.</p>
      <PuzzleWrapper details={PUZZLE_HARD_2} />
      <br />
    </Container>
  )
};

export default TodaysPage;
