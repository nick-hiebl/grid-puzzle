import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature, GroupFeature } from '../../api/puzzle/types';
import { forced, group, groupSpec, near, R, SQ, step } from './utils';

function fs(...nums: number[]): GroupFeature[] {
  return nums.map((num, index) => groupSpec(index, num));
}

const PUZZLE_1 = {
  w: 6,
  h: 4,
  rowClues: [Ec.NONO_2_1,Ec.DIV_A_YES,Ec.SQ_2,Ec.SB_3],
  colClues: [Ec.ANTISYMMETRIC,2,Ec.YES_TRIPLES,Ec.NO_TRIPLES,Ec.REFLECTIVE,null],
  gridFeatures: [
    group(1, 2, 0),
    group(2, 2, 0),
    group(3, 2, 0),
    group(4, 2, 0),
    step(0, 3, false),
    near(0, 1, 3),
    forced(5, 0, false),
  ],
  numContinents: 2,
  totalActive: 16,
  globalFeatures: [
    ...fs(2),
    GlobalFeature.STACKED_BOTH,
    GlobalFeature.SOME_SOLID_COLUMN,
    GlobalFeature.SOME_SOLID_ROW,
  ],
};
const PUZZLE_2 = {
  w: 9,
  h: 6,
  rowClues: [null,Ec.SQ_3,Ec.SB_4,Ec.DIV_A_YES,Ec.NONO_2_3_2,Ec.NONO_2_2],
  colClues: [null,Ec.SQ_2,Ec.SQ_1,Ec.YES_TRIPLES,Ec.DIV_A_NO,Ec.SQ_1,1,Ec.REFLECTIVE,3],
  gridFeatures: [
    near(8, 3, 6),
    R(0, 3, -1),
    SQ(0, 2, 0),
  ],
  globalFeatures: [
    GlobalFeature.FLIP_HORIZONTAL,
    GlobalFeature.STACKED_BOTH,
    GlobalFeature.SOME_EMPTY_ROW,
    GlobalFeature.NO_EMPTY_COLUMN,
  ],
};
const PUZZLE_3 = {
  n: 8,
  rowClues: [Ec.NONO_1_2,Ec.NONO_2_3,Ec.NONO_2_1,Ec.NONO_1_1,Ec.NONO_1_3_1,Ec.NONO_1_2_1,7,Ec.NONO_1_4],
  colClues: [Ec.NONO_2_1_1,Ec.SQ_2,Ec.NONO_1_1_1,Ec.NONO_1_1_2,Ec.SB_1,Ec.NONO_2_3,Ec.NONO_1_2,3],
  gridFeatures: [
    forced(3, 2, false),
    forced(4, 2, true),
  ],
  globalFeatures: [
    GlobalFeature.NO_SOLID_COLUMN,
  ],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 30: Putting it all together</Typography>

      <p>
        Time to put all the things you've learned together into some mega-
        puzzles. I am aware that making a kitchen sink puzzle won't make it a
        good puzzle, but it's a fun experiment.
      </p>

      <p>
        Bonus points for identify the unique mechanic that was not included in
        <i>any</i> of today's puzzles.
      </p>

      <Typography variant="h4">Ultimate puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Ultimate puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_2} highlightErrors />
      <br />

      <Typography variant="h4">Ultimate puzzle #3</Typography>
      <PuzzleWrapper details={PUZZLE_3} highlightErrors />
      <br />

      <p>
        If you managed to solve all of these puzzles and all of the previous
        ones, thank you so much. I appreciate the effort you've put in and
        time you've spent.
      </p>

      {props.links}
    </Container>
  );
};

export default TodaysPage;
