import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue } from '../../api/puzzle';

const PUZZLE_0 = { n: 3, colClues: [null,null,null], rowClues: [null,null,null], minTotal: 7 };
const PUZZLE_1 = { n: 5, colClues: [null,3,null,3,4], rowClues: [null,1,null,null,2], minTotal: 17 };
const PUZZLE_2 = { n: 5, colClues: [4,null,4,0,3], rowClues: [3,null,2,2,null], numContinents: 2, minTotal: 6 };
const PUZZLE_3 = { n: 5, colClues: [null,1,null,3,null], rowClues: [2,3,1,null,null], minTotal: 8, maxTotal: 9, numContinents: 1 };
const PUZZLE_4 = { n: 5, colClues: [null,null,1,4,null], rowClues: [EdgeClue.NO_TRIPLES,4,null,EdgeClue.NO_TRIPLES,3], minTotal: 18, numContinents: 3 };

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 5: Time for some leeway</Typography>
      <p>
        Today's feature is hardly the most exciting, but I think that it was
        worth exploring at least.
      </p>

      <Typography variant="h4">Intro Puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>Let's make it a bit more interesting.</p>
      <PuzzleWrapper details={PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_2} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_3} />
      <br />

      <Typography variant="h4">Puzzle #4</Typography>
      <PuzzleWrapper details={PUZZLE_4} />
      <p>
        Bonus points for finding the solution with exactly 19 total.
      </p>
      <br />

      {props.links}
    </Container>
  )
};

export default TodaysPage;
