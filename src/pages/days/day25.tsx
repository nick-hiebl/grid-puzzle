import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';

const PUZZLE_0A = {
  n: 5,
  globalFeatures: [GlobalFeature.SOME_SOLID_ROW],
};
const PUZZLE_0B = {
  n: 5,
  rowClues: [4,Ec.NONO_1_3,4,4,4],
  globalFeatures: [GlobalFeature.SOME_EMPTY_COLUMN],
};
const PUZZLE_1 = {
  n: 5,
  rowClues: [Ec.NONO_2_1,Ec.NONO_2_1,null,3,Ec.SQ_2],
  colClues: [null,1,3,5,Ec.NONO_1_1],
  globalFeatures: [GlobalFeature.SOME_SOLID_ROW],
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [1,Ec.NONO_1_1_1,Ec.SQ_2,Ec.NONO_2_1,null],
  colClues: [4,1,3,2,3],
  globalFeatures: [GlobalFeature.SOME_SOLID_ROW],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [2,2,null,Ec.SQ_2,null],
  colClues: [1,Ec.SQ_2,Ec.NONO_1_2,Ec.REFLECTIVE,3],
  globalFeatures: [GlobalFeature.SOME_SOLID_ROW],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.SQ_2,Ec.NONO_1_1_1,3,null,Ec.SQ_2],
  colClues: [4,Ec.NONO_1_1,Ec.YES_TRIPLES,Ec.SQ_1,2],
  globalFeatures: [GlobalFeature.SOME_EMPTY_ROW],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [Ec.SQ_1,2,3,1,Ec.NONO_1_1],
  colClues: [3,Ec.SQ_1,Ec.SQ_2,1,Ec.SQ_1],
  globalFeatures: [GlobalFeature.SOME_EMPTY_ROW],
};
const PUZZLE_6 = {
  n: 5,
  rowClues: [2,4,null,1,3],
  colClues: [1,null,Ec.NONO_2_1,null,Ec.SQ_1],
  globalFeatures: [GlobalFeature.SOME_EMPTY_ROW, GlobalFeature.SOME_EMPTY_COLUMN],
};
const PUZZLE_7 = {
  n: 5,
  rowClues: [Ec.NONO_1_1_1,Ec.SQ_2,null,2,2],
  colClues: [4,2,Ec.NONO_1_1,1,null],
  globalFeatures: [GlobalFeature.SOME_EMPTY_ROW],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 25: Another symbol</Typography>

      <p>
        Another symbol.
      </p>

      <Typography variant="h4">Intro puzzle #1</Typography>
      <p>
        Here's a new symbol.
      </p>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Intro puzzle #2</Typography>
      <p>
        Here's a slightly different new symbol.
      </p>
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

      <Typography variant="h4">Puzzle #6</Typography>
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #7</Typography>
      <PuzzleWrapper details={PUZZLE_7} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
