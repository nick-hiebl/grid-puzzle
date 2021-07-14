import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 3, colCounts: [0,1,0], rowCounts: [0,-1,-1] };
const PUZZLE_0A = { n: 3, colCounts: [0,1,-1], rowCounts: [-1,0,-1], totalActive: 2 };
const PUZZLE_1 = { n: 3, colCounts: [2,0,-1], rowCounts: [1,-1,1] };
const PUZZLE_2 = { n: 3, colCounts: [2,0,-1], rowCounts: [1,-1,1], totalActive: 3 };

const TodaysPage = () => {
  return (
    <Container>
      <Typography variant="h3">Day 2</Typography>
      <p>
        Let's add a little variety to the very simple concept introduced
        yesterday.
      </p>
      <p>
        What if we don't know exactly how many active squares are in some of
        the rows and columns?
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

      <p>
        I haven't had time yet to get to making more interesting puzzles than
        this yet. I may add some later today. (A lot of my time was spent
        making this site)
      </p>
    </Container>
  )
};

export default TodaysPage;
