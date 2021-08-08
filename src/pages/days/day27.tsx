import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';
import { forced } from './utils';

const PUZZLE_0A = {
  w: 5,
  h: 2,
  rowClues: [5,5],
  colClues: [2,2,2,2,1],
  allowableErrors: 1,
};
const PUZZLE_0B = {
  n: 5,
  colClues: [1,1,1,1,1],
  allowableErrors: 1,
};
const PUZZLE_1 = {
  n: 5,
  rowClues: [Ec.NONO_1_1_1,4,4,Ec.YES_TRIPLES,Ec.NO_TRIPLES],
  colClues: [5,Ec.NONO_1_1,Ec.YES_TRIPLES,Ec.NONO_1_1,4],
  allowableErrors: 1,
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [Ec.YES_TRIPLES,Ec.NONO_1_1,Ec.NONO_1_2,Ec.NO_TRIPLES,Ec.SQ_1],
  colClues: [0,Ec.YES_TRIPLES,3,Ec.SQ_2,3],
  allowableErrors: 1,
  gridFeatures: [forced(2,1,false)],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [2,Ec.NONO_1_1,Ec.SQ_1,Ec.SQ_1,Ec.YES_TRIPLES],
  colClues: [1,0,Ec.NONO_1_1,Ec.SQ_1,1],
  allowableErrors: 1,
  gridFeatures: [forced(3,1,true)],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [4,Ec.NONO_2_1,1,Ec.SQ_1,3],
  colClues: [Ec.NONO_3_1,null,1,2,Ec.SQ_1],
  allowableErrors: 1,
  gridFeatures: [forced(4,4,true)],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [2,2,4,Ec.SQ_1,4],
  colClues: [null,Ec.NONO_3_1,Ec.NONO_1_1_1,Ec.NONO_1_1,Ec.YES_TRIPLES],
  allowableErrors: 1,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 27: Something's wrong</Typography>

      <p>
        A potentially thought-provoking mechanic, with puzzles that you will
        solve accidentally whilst ignoring it.
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
