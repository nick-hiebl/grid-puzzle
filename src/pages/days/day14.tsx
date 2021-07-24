import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';

const PUZZLE_0 = {
  w: 5,
  h: 2,
  colClues: [null,null,null,Ec.REFLECTIVE,Ec.REFLECTIVE],
  rowClues: [2, 3],
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [2,1,2,Ec.REFLECTIVE],
  colClues: [3,1,1,Ec.REFLECTIVE],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [2,2,Ec.REFLECTIVE,3],
  colClues: [2,Ec.REFLECTIVE,2,1],
  numContinents: 1,
};
const PUZZLE_3 = {
  w: 6,
  h: 4,
  rowClues: [Ec.SQ_2,Ec.SQ_3,4,Ec.NO_TRIPLES],
  colClues: [Ec.REFLECTIVE,1,null,Ec.NONO_1_2,Ec.NONO_2_1,2],
};
const PUZZLE_4 = {
  w: 6,
  h: 4,
  rowClues: [Ec.NO_TRIPLES,4,Ec.YES_TRIPLES,Ec.REFLECTIVE],
  colClues: [Ec.REFLECTIVE,Ec.YES_TRIPLES,3,Ec.NONO_2_1,Ec.REFLECTIVE,1],
};
const PUZZLE_5 = {
  w: 7,
  h: 5,
  numContinents: 1,
  rowClues: [Ec.REFLECTIVE,Ec.NONO_1_2,6,Ec.REFLECTIVE,6],
  colClues: [Ec.SQ_2,4,Ec.NONO_1_1_1,4,Ec.SQ_1,Ec.SQ_2,3],
};
const FINAL_PUZZLE = {
  n: 6,
  numContinents: 1,
  rowClues: [5,Ec.NONO_2_2,3,Ec.SQ_3,Ec.NONO_1_2,Ec.SQ_2],
  colClues: [1,Ec.REFLECTIVE,5,Ec.NONO_1_1,Ec.SQ_2,2],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 14: Narrower mirrors</Typography>

      <p>
        Similar idea to yesterday.
      </p>

      <p>
        <strong>Note:</strong> stuff on the top and right actually
        {' '}<strong>does</strong> correspond to a particular column or row.
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

      <Typography variant="h4">Final Puzzle</Typography>
      <p>Again, just one final puzzle today.</p>
      <PuzzleWrapper details={FINAL_PUZZLE} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
