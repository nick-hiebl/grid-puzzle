import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';
import { DayLink, step } from './utils';

const globalFeatures = [GlobalFeature.STACKED];

const PUZZLE_0 = {
  n: 5,
  minTotal: 7,
  globalFeatures,
  rowClues: [null,null,null,1,null],
  gridFeatures: [step(1, 2)],
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [Ec.SQ_2,Ec.DIV_A_NO,Ec.SQ_1,Ec.DIV_A_YES],
  colClues: [Ec.DIV_A_NO,4,Ec.DIV_A_NO,Ec.DIV_A_NO],
  globalFeatures,
  gridFeatures: [step(2, 1)],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [Ec.NONO_1_1,Ec.REFLECTIVE,null,Ec.REFLECTIVE],
  colClues: [Ec.DIV_A_YES,Ec.SQ_1,4,Ec.DIV_A_YES],
  globalFeatures,
  gridFeatures: [step(3, 1)]
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [Ec.SQ_1,Ec.SQ_1,Ec.SQ_1,Ec.NO_TRIPLES,Ec.NONO_3_1],
  colClues: [Ec.REFLECTIVE,Ec.SQ_1,Ec.SQ_1,2,2],
  globalFeatures,
  gridFeatures: [step(1, 3)],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.DIV_A_YES,null,3,Ec.SQ_1,Ec.DIV_A_NO],
  colClues: [Ec.DIV_A_NO,Ec.REFLECTIVE,Ec.YES_TRIPLES,Ec.REFLECTIVE,1],
  globalFeatures,
  gridFeatures: [step(2, 2)],
};
const PUZZLE_5 = {
  w: 7,
  h: 5,
  rowClues: [Ec.REFLECTIVE,Ec.NO_TRIPLES,Ec.REFLECTIVE,Ec.NONO_1_2_2,5],
  colClues: [3,Ec.SQ_1,Ec.SQ_1,3,Ec.SQ_1,Ec.SQ_1,Ec.REFLECTIVE],
  globalFeatures,
  gridFeatures: [step(6, 3)],
};
const PUZZLE_6 = {
  w: 7,
  h: 5,
  rowClues: [1,Ec.SQ_2,Ec.NO_TRIPLES,Ec.NONO_4_1,Ec.SQ_1],
  colClues: [Ec.REFLECTIVE,0,Ec.REFLECTIVE,Ec.SQ_1,3,null,1],
  globalFeatures,
  gridFeatures: [step(0, 3)],
};
const PUZZLE_7 = {
  w: 7,
  h: 5,
  rowClues: [Ec.NONO_1_1,3,Ec.NO_TRIPLES,Ec.NO_TRIPLES,Ec.NONO_1_4],
  colClues: [null,Ec.SQ_1,Ec.REFLECTIVE,2,Ec.SQ_1,5,0],
  globalFeatures,
  gridFeatures: [step(0, 2)],
};
const PUZZLE_8 = {
  w: 7,
  h: 5,
  rowClues: [null,Ec.NONO_1_1,Ec.NONO_3_1,Ec.SQ_1,6],
  colClues: [2,3,Ec.REFLECTIVE,null,Ec.SQ_1,3,5],
  globalFeatures,
  gridFeatures: [step(2, 1)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 19: A starting step to build on</Typography>

      <p>
        An additional feature to work with the mechanic from day 15. If you
        haven't yet, make sure to try it out: <DayLink index={14} />
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

      <Typography variant="h4">Puzzle #6</Typography>
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #7</Typography>
      <PuzzleWrapper details={PUZZLE_7} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #8</Typography>
      <PuzzleWrapper details={PUZZLE_8} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
