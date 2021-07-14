import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 3, colCounts: [0,1,0], rowCounts: [0,1,0] };
const PUZZLE_1 = { n: 3, colCounts: [1,3,1], rowCounts: [2,2,1] };
const PUZZLE_2 = { n: 4, colCounts: [2,4,1,1], rowCounts: [3,2,1,2] };
const PUZZLE_3 = { n: 5, colCounts: [3,1,3,3,4], rowCounts: [5,2,4,0,3] };
const PUZZLE_4 = { n: 5, colCounts: [1,1,2,4,4], rowCounts: [2,4,3,0,3] };
const PUZZLE_HARD = { n: 6, colCounts: [1,2,4,1,0,1], rowCounts: [0,4,2,1,1,1] };

const TodaysPage = () => {
  return (
    <Container>
      <Typography variant="h3">Day 1</Typography>
      <p>
        I'm making a grid-based puzzle and going to add a new idea/mechanic to
        the puzzles each day to make them more interesting/challenging or add
        variety etc.
      </p>
      <p>
        Core idea for the puzzle on day 1 is that we have a grid, with a hint
        about how many "active" squares there are in each row/column.
      </p>

      <Typography variant="h4">Intro Puzzle</Typography>
      <PuzzleWrapper details={PUZZLE_0} />
      <p>
        To signify an active square, click twice to draw a big dot in that
        square. A single click will mark a square with grey strokes. This
        counts as the square still being inactive, but can be used as a note
        that the square is definitely not active during working out the puzzle.
      </p>
      <p>
        I hope the solution to this one is straightforward enough. The
        background will turn green once the puzzle is solved.
      </p>

      <Typography variant="h4">Puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_1} />
      <p>
        <strong>Note:</strong> These puzzles do not necessarily have unique
        solutions.
      </p>

      <Typography variant="h4">Puzzle #2</Typography>
      <p>Stepping it up to 4 by 4 now.</p>
      <PuzzleWrapper details={PUZZLE_2} />
      <br />

      <Typography variant="h4">Puzzle #3</Typography>
      <p>And on to 5 by 5 just as quickly.</p>
      <PuzzleWrapper details={PUZZLE_3} />
      <br />

      <Typography variant="h4">Puzzle #4</Typography>
      <PuzzleWrapper details={PUZZLE_4} />
      <br />

      <Typography variant="h4">Final puzzle</Typography>
      <PuzzleWrapper details={PUZZLE_HARD} />
      <br />
    </Container>
  )
};

export default TodaysPage;
