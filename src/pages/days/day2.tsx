import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';

const PUZZLE_0 = { n: 3, colCounts: [0,1,0], rowCounts: [0,-1,-1] };
const PUZZLE_0A = { n: 3, colCounts: [0,1,-1], rowCounts: [-1,0,-1], totalActive: 2 };
const PUZZLE_1 = { n: 3, colCounts: [2,0,-1], rowCounts: [1,-1,1] };
const PUZZLE_2 = { n: 3, colCounts: [2,0,-1], rowCounts: [1,-1,1], totalActive: 3 };
const PUZZLE_3 = { n: 4, colCounts: [1,3,-1,2], rowCounts: [-1,-1,2,1], totalActive: 10 };
const PUZZLE_4 = { n: 4, colCounts: [3,1,-1,4], rowCounts: [4,-1,3,2], totalActive: 11 };
const PUZZLE_HARD_1 = { n: 5, colCounts: [1,-1,-1,3,2], rowCounts: [-1,5,2,-1,2], totalActive: 9 };
const PUZZLE_HARD_2 = { n: 5, colCounts: [1,-1,-1,3,2], rowCounts: [-1,5,2,-1,2], totalActive: 16 };

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 2</Typography>
      <p>
        Let's add a little variety to the very simple concept introduced
        yesterday.
      </p>
      <p>
        What if we don't know exactly how many active squares are in some of
        the rows and columns?
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
      <p>
        <strong>Note:</strong> There is a difference between the empty circle
        and no marking at all.
      </p>
      <p>
        Not too bad yet, I hope.
      </p>

      <Typography variant="h4">Intro Puzzle #2</Typography>
      <p>
        What if we also know how many active squares are in the puzzle <strong>
        in total</strong>?
      </p>
      <PuzzleWrapper details={PUZZLE_0A} />
      <p>
          I guess that adds a bit of interest to the scenario.
      </p>

      <Typography variant="h4">Puzzle #1</Typography>
      <p>Let's do some puzzles now.</p>
      <PuzzleWrapper details={PUZZLE_1} />
      <br />

      <Typography variant="h4">Puzzle #2</Typography>
      <p>Does one more change things?</p>
      <PuzzleWrapper details={PUZZLE_2} />
      <p>
        Interestingly, there are still more solutions to even this puzzle than
        I thought at first.
      </p>

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
      <p>Identical to the puzzle above except for the total count.</p>
      <PuzzleWrapper details={PUZZLE_HARD_2} />
      <br />
      {props.links}
    </Container>
  )
};

export default TodaysPage;
