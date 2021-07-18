import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle';

const PUZZLE_0A = {
  n: 5,
  colClues: [Ec.SQ_1,0,Ec.SQ_2,0,Ec.SQ_3],
  rowClues: [null,null,null,null,null],
};
const PUZZLE_0B = {
  n: 3,
  colClues: [Ec.SQ_1, 2, 0],
  rowClues: [2, 1, Ec.SQ_2],
};
const PUZZLE_0C = {
  n: 3,
  colClues: [Ec.SQ_1, 2, 2],
  rowClues: [Ec.SQ_1, 1, Ec.SQ_1],
  totalActive: 4,
};
const PUZZLE_0D = {
  n: 3,
  colClues: [Ec.SQ_1, 1, 2],
  rowClues: [1, Ec.SQ_2, 2],
};
const PUZZLE_1 = {
  n: 4,
  colClues: [Ec.SQ_1,1,2,2],
  rowClues: [1,Ec.SQ_2,Ec.SQ_2,Ec.SQ_1],
  totalActive: 8,
};
const PUZZLE_2 = {
  n: 4,
  colClues: [Ec.SQ_1,2,2,Ec.SQ_2],
  rowClues: [3,2,Ec.SQ_1,1],
  totalActive: 6,
};
const PUZZLE_3 = {
  n: 4,
  colClues: [2,2,3,Ec.SQ_1],
  rowClues: [1,3,2,Ec.SQ_1],
  totalActive: 7,
};
const PUZZLE_4 = {
  n: 5,
  colClues: [Ec.SQ_2,Ec.SQ_3,Ec.SQ_2,0,3],
  rowClues: [2,Ec.SQ_1,0,3,Ec.SQ_1],
  minTotal: 10,
};
const PUZZLE_5 = {
  n: 5,
  colClues: [0,3,Ec.SQ_1,3,2],
  rowClues: [Ec.SQ_2,4,1,1,4],
};
const PUZZLE_6 = {
  n: 5,
  colClues: [Ec.SQ_3,1,4,4,Ec.SQ_1],
  rowClues: [2,Ec.SQ_2,Ec.SQ_2,5,2],
};
const PUZZLE_HARD_1 = {
  n: 5,
  colClues: [3,3,2,Ec.SQ_1,4],
  rowClues: [4,Ec.SQ_1,2,Ec.SQ_2,Ec.SQ_1],
  numContinents: 1,
};
const PUZZLE_HARD_2 = {
  n: 5,
  colClues: [3,Ec.SQ_2,4,Ec.SQ_1,3],
  rowClues: [Ec.SQ_1,5,3,Ec.SQ_1,Ec.SQ_1],
  numContinents: 2,
  totalActive: 14,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 7: Counting... squares?</Typography>
      <p>
        I thought we already had enough squares in these puzzles.
      </p>

      <Typography variant="h4">Intro Puzzle #1</Typography>
      <p>
        I'm introducing 3 new symbols today. Try them each out and see what
        makes them happy, and what makes them sad.
      </p>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Intro Puzzle #2</Typography>
      <p>Let's use them in a slightly more substantial puzzle now.</p>
      <PuzzleWrapper details={PUZZLE_0B} highlightErrors />
      <br />

      <Typography variant="h4">Intro Puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_0C} highlightErrors />
      <br />

      <Typography variant="h4">Intro Puzzle #4</Typography>
      <PuzzleWrapper details={PUZZLE_0D} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>Time for some bigger puzzles now.</p>
      <PuzzleWrapper details={PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_2} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_3} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #4</Typography>
      <PuzzleWrapper details={PUZZLE_4} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #5</Typography>
      <PuzzleWrapper details={PUZZLE_5} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #6</Typography>
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      <Typography variant="h4">Final puzzle #1</Typography>
      <p>
        I apologise for these.
      </p>
      <PuzzleWrapper details={PUZZLE_HARD_1} />
      <br />

      <Typography variant="h4">Final puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_HARD_2} />
      <br />

      {props.links}
    </Container>
  )
};

export default TodaysPage;
