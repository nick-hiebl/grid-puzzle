import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';
import { J, L, LONG, R, SQ, T } from './utils';

const PUZZLE_0A = {
  n: 5,
  gridFeatures: [L(0,0,1),L(4,0,2),L(4,4,3),L(0,4,0)],
};
const PUZZLE_0B = {
  n: 5,
  gridFeatures: [L(2,2,-1)],
};
const PUZZLE_1 = {
  n: 5,
  gridFeatures: [L(0,0,1),L(4,0,2),L(4,4,3),L(0,4,0)],
  colClues: [Ec.SQ_1,null,Ec.SQ_3,null,Ec.SQ_1],
  rowClues: [Ec.SQ_1,null,Ec.SQ_3,null,Ec.SQ_1],
};
const PUZZLE_2 = {
  w: 6,
  h: 2,
  rowClues: [Ec.SQ_1,Ec.SQ_2],
  gridFeatures: [J(4,0,-1), T(2,1,-1)],
};
const PUZZLE_3 = {
  n: 5,
  colClues: [4,null,null,4,null],
  rowClues: [null,null,4,null,null],
  gridFeatures: [LONG(0,2,-1),L(2,2,-1),T(3,4,-1)],
};
const PUZZLE_4 = {
  n: 5,
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
  gridFeatures: [T(1,1,-1),R(1,3,-1),R(3,1,-1),SQ(3,3)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 24: Shapes and their orientations</Typography>

      <p>
        A variation on yesterday's mechanic.
      </p>

      <Typography variant="h4">Intro puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #2</Typography>
      <p>
        This is it. This is the variation. What does it mean?
      </p>
      <PuzzleWrapper details={PUZZLE_0B} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>
        This is a cheeky, tricky one. Requires some clever thinking to find the
        solution.
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

      {props.links}
    </Container>
  );
};

export default TodaysPage;
