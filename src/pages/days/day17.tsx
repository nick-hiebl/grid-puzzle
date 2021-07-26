import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';
import { forced } from './utils';

const PUZZLE_0 = {
  w: 5,
  h: 3,
  minTotal: 8,
  rowClues: [Ec.DIV_A_NO,1,null]
};
const PUZZLE_1 = {
  w: 5,
  h: 3,
  rowClues: [Ec.DIV_A_NO,Ec.DIV_A_NO,Ec.DIV_A_NO],
  colClues: [Ec.DIV_A_NO,Ec.DIV_A_NO,Ec.DIV_A_NO,Ec.DIV_A_NO,Ec.DIV_A_NO],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [3,Ec.DIV_A_YES,3,2],
  colClues: [Ec.DIV_A_NO,4,4,1],
};
const PUZZLE_3 = {
  n: 4,
  rowClues: [Ec.DIV_A_YES,3,Ec.DIV_A_YES,Ec.DIV_A_NO],
  colClues: [4,Ec.DIV_A_YES,4,2],
};
const PUZZLE_4 = {
  n: 4,
  totalActive: 10,
  rowClues: [Ec.DIV_A_YES,2,1,3],
  colClues: [2,Ec.DIV_A_NO,Ec.DIV_A_YES,1],
};
const PUZZLE_5 = {
  w: 7,
  h: 4,
  rowClues: [Ec.SQ_2,Ec.SQ_2,Ec.REFLECTIVE,Ec.NONO_1_2],
  colClues: [2,Ec.DIV_A_NO,Ec.SQ_2,1,2,4,1],
};

const FINAL_PUZZLE_1 = {
  w: 7,
  h: 4,
  rowClues: [Ec.NONO_2_1,Ec.REFLECTIVE,Ec.SQ_3,Ec.DIV_A_NO],
  colClues: [Ec.YES_TRIPLES,Ec.DIV_A_YES,Ec.SQ_1,1,Ec.DIV_A_YES,Ec.SQ_2,null],
  gridFeatures: [forced(4,3,false), forced(3,0,true)],
};
const FINAL_PUZZLE_2 = {
  w: 7,
  h: 4,
  rowClues: [Ec.NONO_1_3,Ec.NONO_3_1,Ec.NONO_1_2_1,Ec.NONO_1_2],
  colClues: [Ec.YES_TRIPLES,Ec.NO_TRIPLES,null,Ec.DIV_A_NO,Ec.YES_TRIPLES,Ec.SQ_1,Ec.REFLECTIVE],
  gridFeatures: [forced(5,0,true)],
};
const FINAL_PUZZLE_3 = {
  n: 6,
  rowClues: [Ec.YES_TRIPLES,Ec.DIV_A_NO,Ec.SQ_1,null,Ec.SQ_1,Ec.REFLECTIVE],
  colClues: [Ec.REFLECTIVE,0,1,Ec.SQ_2,Ec.SQ_1,Ec.REFLECTIVE],
  gridFeatures: [forced(2,4,true)],
};
const FINAL_PUZZLE_4 = {
  n: 6,
  rowClues: [Ec.SQ_2,Ec.NO_TRIPLES,1,Ec.REFLECTIVE,Ec.NONO_2_1,Ec.NONO_2_3],
  colClues: [Ec.DIV_A_NO,Ec.NONO_2_1,Ec.SQ_2,5,Ec.SQ_1,Ec.SQ_2],
  gridFeatures: [forced(4,1,true)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 17: Well this is odd</Typography>

      <p>
        A variation on yesterday's mechanic. You should check out yesterday's
        puzzles out if you haven't done so yet.
      </p>

      <Typography variant="h4">Intro Puzzle</Typography>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
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
      <p>I'm not particularly proud of this puzzle.</p>
      <PuzzleWrapper details={PUZZLE_5} highlightErrors />
      <br />

      <Typography variant="h4">Final Puzzle #1</Typography>
      <PuzzleWrapper details={FINAL_PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Final Puzzle #2</Typography>
      <p>The return of Final Puzzle #2.</p>
      <PuzzleWrapper details={FINAL_PUZZLE_2} highlightErrors />
      <br />

      <Typography variant="h4">Final Puzzle #3</Typography>
      <p>Uh oh.</p>
      <PuzzleWrapper details={FINAL_PUZZLE_3} highlightErrors />
      <br />

      <Typography variant="h4">Final Puzzle #4</Typography>
      <p>I guess just everything is a final puzzle today.</p>
      <PuzzleWrapper details={FINAL_PUZZLE_4} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
