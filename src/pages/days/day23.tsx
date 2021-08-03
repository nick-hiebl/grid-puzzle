import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature, GridFeatureKind } from '../../api/puzzle/types';
import { forced } from './utils';

function L(i: number, j: number) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_L,
    value: 0,
  };
}

function J(i: number, j: number) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_J,
    value: 0,
  };
}

function SQ(i: number, j: number) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_SQUARE,
    value: 0,
  };
}

const PUZZLE_0A = {
  n: 5,
  gridFeatures: [J(2,2)],
};
const PUZZLE_0B = {
  n: 5,
  gridFeatures: [L(2,2)],
  colClues: [null,null,null,1,1]
};
const PUZZLE_0C = {
  n: 5,
  gridFeatures: [J(2,2), SQ(3,3)],
};
const PUZZLE_0D = {
  n: 4,
  gridFeatures: [J(1,0), SQ(3,2)],
};
const PUZZLE_0E = {
  n: 5,
  rowClues: [0,0,null,null,null],
  colClues: [0,0,null,null,null],
  gridFeatures: [J(2,2), SQ(3,3)],
};
const PUZZLE_1 = {
  n: 5,
  colClues: [4,1,2,2,3],
  rowClues: [2,3,4,1,2],
  gridFeatures: [L(0,2), SQ(4,1)],
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [2,3,null,null,null],
  colClues: [2,3,null,1,4],
  gridFeatures: [L(1,4), J(3,2)],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [Ec.NONO_1_1,null,null,null,null],
  colClues: [1,null,null,null,1],
  totalActive: 9,
  gridFeatures: [L(1,2),SQ(2,2),forced(3,0,true)],
};
const PUZZLE_4 = {
  w: 6,
  h: 4,
  rowClues: [2,null,null,null],
  colClues: [1,null,Ec.SQ_1,Ec.SQ_1,null,1],
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
  gridFeatures: [SQ(2,1),J(4,2),L(4,3)],
  numContinents: 1,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 23: Shapes on the board</Typography>

      <p>
        After quite a few days of "variations" on rules, here's a brand new
        mechanic.
      </p>

      <p>
        Today's mechanic was <i>by far</i> the most technically challenging to
        implement. Nothing else has come even close.
      </p>

      <p>
        And after spending so long working on implementing the mechanic, I
        didn't have so much brain power I have left to actually create the
        puzzles. (Again, all hand-crafted. I think auto-generated puzzles will
        become a thing of the past.)
      </p>

      <Typography variant="h4">Intro puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_0B} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_0C} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #4</Typography>
      <p>How do multiple shapes interact?</p>
      <PuzzleWrapper details={PUZZLE_0D} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #5</Typography>
      <p>
        I hope that this puzzle demonstrates an important nuance about the ways
        that multiple shapes can interact.
      </p>
      <PuzzleWrapper details={PUZZLE_0E} highlightErrors />
      <br />

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

      {props.links}
    </Container>
  );
};

export default TodaysPage;
