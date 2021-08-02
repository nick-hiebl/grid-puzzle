import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';
import { DayLink, step } from './utils';

const globalFeatures = [GlobalFeature.STACKED_BOTH];

const PUZZLE_1 = {
  n: 5,
  globalFeatures,
  rowClues: [2,Ec.NONO_2_1,4,1,2],
  colClues: [null,1,1,null,5],
  gridFeatures: [step(1, 1), step(3, 4, false)],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [Ec.SQ_2,3,Ec.SQ_1,Ec.DIV_A_YES],
  colClues: [3,4,3,2],
  globalFeatures,
  gridFeatures: [step(2, 1), step(2, 3, false)],
};
const PUZZLE_3 = {
  w: 6,
  h: 5,
  rowClues: [Ec.NONO_1_1,Ec.REFLECTIVE,null,Ec.REFLECTIVE,Ec.NONO_1_3],
  colClues: [Ec.SQ_1,Ec.SQ_1,4,2,Ec.REFLECTIVE,1],
  globalFeatures,
  gridFeatures: [step(4, 1), step(2, 4, false)],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.SQ_1,Ec.SQ_1,Ec.SQ_1,Ec.NO_TRIPLES,Ec.NONO_3_1],
  colClues: [Ec.REFLECTIVE,Ec.SQ_1,Ec.SQ_1,2,2],
  globalFeatures,
  gridFeatures: [step(1, 1), step(4, 4, false)],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [3,null,3,Ec.SQ_1,Ec.NONO_2_1],
  colClues: [Ec.SQ_1,Ec.REFLECTIVE,Ec.YES_TRIPLES,Ec.REFLECTIVE,1],
  globalFeatures,
  gridFeatures: [step(2, 0), step(0, 4, false)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 22: Steps up and down</Typography>

      <p>
        Today's puzzles build on mechanics introduced in both{' '}
        <DayLink index={18} /> and <DayLink index={20} />.
      </p>

      <p>
        More hand-crafted puzzles because I seem to have given up on my puzzle
        generating script.
      </p>

      <Typography variant="h4">Puzzle #1</Typography>
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

      {props.links}
    </Container>
  );
};

export default TodaysPage;
