import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';
import { DayLink } from './utils';

const PUZZLE_0 = {
  n: 4,
  minTotal: 7,
  rowClues: [null,null,null,1,null],
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [Ec.ANTISYMMETRIC,3,null,2],
  colClues: [3,Ec.ANTISYMMETRIC,4,2],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [Ec.ANTISYMMETRIC,1,3,4],
  colClues: [null,2,4,Ec.ANTISYMMETRIC],
};
const PUZZLE_3 = {
  n: 4,
  rowClues: [Ec.ANTISYMMETRIC,3,1,null],
  colClues: [null,3,1,4],
};
const PUZZLE_4 = {
  w: 6,
  h: 4,
  rowClues: [Ec.ANTISYMMETRIC,1,4,3],
  colClues: [2,1,2,null,3,Ec.NONO_2_1],
};
const PUZZLE_5 = {
  w: 6,
  h: 4,
  rowClues: [Ec.REFLECTIVE,0,Ec.NONO_1_1_1,5],
  colClues: [Ec.ANTISYMMETRIC,2,null,2,1,Ec.ANTISYMMETRIC],
};
const FINAL_PUZZLE_1 = {
  w: 6,
  h: 4,
  rowClues: [4,4,2,Ec.REFLECTIVE],
  colClues: [1,Ec.ANTISYMMETRIC,Ec.REFLECTIVE,0,2,3],
};
const FINAL_PUZZLE_2 = {
  w: 6,
  h: 4,
  rowClues: [4,Ec.REFLECTIVE,3,Ec.NONO_1_1_2],
  colClues: [Ec.ANTISYMMETRIC,4,Ec.ANTISYMMETRIC,1,2,Ec.SQ_1],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 20: Not a normal mirror</Typography>

      <p>
        An additional variation on the mechanic from day 14. If you haven't
        yet, make sure to try it out: <DayLink index={13} />
      </p>

      <Typography variant="h4">Intro Puzzle</Typography>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>
        Time for some proper puzzles.
      </p>
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

      <Typography variant="h4">Final Puzzle #1</Typography>
      <PuzzleWrapper details={FINAL_PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Final Puzzle #2</Typography>
      <PuzzleWrapper details={FINAL_PUZZLE_2} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
