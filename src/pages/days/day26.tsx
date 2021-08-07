import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';

const PUZZLE_0A = {
  n: 5,
  globalFeatures: [GlobalFeature.NO_EMPTY_COLUMN, GlobalFeature.NO_SOLID_ROW],
};
const PUZZLE_0B = {
  n: 5,
  rowClues: [Ec.NONO_3_1,null,null,null,null],
  colClues: [null,null,null,Ec.NONO_3_1,null],
  globalFeatures: [GlobalFeature.NO_SOLID_ROW, GlobalFeature.NO_SOLID_COLUMN],
  totalActive: 20,
};
const PUZZLE_1 = {
  n: 5,
  rowClues: [Ec.NONO_1_2,1,2,null,Ec.NONO_2_2],
  colClues: [Ec.NONO_1_2,null,1,3,null],
  globalFeatures: [GlobalFeature.SOME_SOLID_ROW, GlobalFeature.NO_SOLID_COLUMN],
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [Ec.NONO_1_1,null,Ec.NONO_1_1,null,2],
  colClues: [null,3,1,Ec.SQ_1,Ec.SQ_1],
  globalFeatures: [
    GlobalFeature.NO_SOLID_ROW,
    GlobalFeature.SOME_SOLID_COLUMN,
    GlobalFeature.SOME_EMPTY_COLUMN,
  ],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [Ec.SQ_1,Ec.NONO_1_1,null,Ec.NONO_3_1,2],
  colClues: [Ec.NONO_2_1,null,3,1,3],
  globalFeatures: [GlobalFeature.SOME_EMPTY_ROW, GlobalFeature.SOME_EMPTY_COLUMN],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.SQ_2,1,Ec.SQ_2,Ec.NONO_3_1,Ec.NONO_1_1_1],
  colClues: [null,null,Ec.NONO_1_2,3,Ec.SQ_1],
  globalFeatures: [GlobalFeature.NO_SOLID_COLUMN, GlobalFeature.SOME_EMPTY_COLUMN],
  totalActive: 13,
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [4,null,Ec.SQ_1,null,Ec.SQ_1],
  colClues: [null,Ec.SQ_1,2,3,Ec.NONO_1_3],
  globalFeatures: [
    GlobalFeature.SOME_SOLID_COLUMN,
    GlobalFeature.NO_EMPTY_ROW,
    GlobalFeature.SOME_EMPTY_COLUMN,
  ],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 26: Not another symbol</Typography>

      <p>
        Not what we saw yesterday. This is a variation on yesterday's mechanic,
        make sure to complete and understand that before starting with today.
      </p>

      <Typography variant="h4">Intro puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_0B} highlightErrors />
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

      <Typography variant="h4">Puzzle #5</Typography>
      <PuzzleWrapper details={PUZZLE_5} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
