import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue } from '../../api/puzzle';
import { DayLink } from './utils';

const PUZZLE_0 = {
  n: 5,
  colClues: [0,0,EdgeClue.NO_TRIPLES,0,0],
  rowClues: [null, null, null, null, null],
  totalActive: 3,
};
const PUZZLE_0A = {
  n: 3,
  colClues: [EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES],
  rowClues: [EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES],
  totalActive: 6,
};const PUZZLE_1 = {
  n: 4,
  colClues: [EdgeClue.NO_TRIPLES,1,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES],
  rowClues: [1,3,3,EdgeClue.NO_TRIPLES],
  totalActive: 8,
};
const PUZZLE_2 = {
  n: 4,
  colClues: [EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,2,3],
  rowClues: [1,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,3],
  totalActive: 10,
};
const PUZZLE_3 = {
  n: 5,
  colClues: [EdgeClue.NO_TRIPLES,4,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,5],
  rowClues: [5,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,3,3],
  totalActive: 18,
};
const PUZZLE_4 = {
  n: 5,
  colClues: [4,4,EdgeClue.NO_TRIPLES,4,EdgeClue.NO_TRIPLES],
  rowClues: [5,4,3,5,EdgeClue.NO_TRIPLES],
  totalActive: 20,
};
const PUZZLE_HARD_1 = {
  n: 6,
  colClues: [6,3,5,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES],
  rowClues: [4,EdgeClue.NO_TRIPLES,2,5,4,6],
  numContinents: 1,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 4: Circle circle cross</Typography>

      <Typography variant="h4">Intro Puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <p>
        Make sure to get this one wrong too, don't move on straight away.
      </p>

      <Typography variant="h4">Intro Puzzle #2</Typography>
      <p>
        You can play around here to understand better what the rule is for
        today.
      </p>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>Let's do some puzzles now.</p>
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

      <Typography variant="h4">Final puzzle</Typography>
      <p>
        If you're not familiar with this feature in the top-left, you should
        revisit <DayLink index={2} />
      </p>
      <PuzzleWrapper details={PUZZLE_HARD_1} />
      <br />

      {props.links}
    </Container>
  )
};

export default TodaysPage;
