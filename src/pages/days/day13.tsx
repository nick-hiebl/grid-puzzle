import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';

const both = [GlobalFeature.FLIP_HORIZONTAL, GlobalFeature.FLIP_VERTICAL];

const PUZZLE_0 = {
  w: 5,
  h: 2,
  colClues: [null,null,null,null,null],
  rowClues: [2, 3],
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
};
const PUZZLE_1 = {
  n: 5,
  totalActive: 6,
  globalFeatures: both,
};
const PUZZLE_2 = {
  w: 5,
  h: 4,
  globalFeatures: both,
  totalActive: 6,
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [Ec.YES_TRIPLES,3,Ec.SQ_2,Ec.NO_TRIPLES,3],
  colClues: [2,Ec.SQ_1,Ec.SQ_1,Ec.NONO_2_2,2],
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
};
const PUZZLE_4 = {
  w: 4,
  h: 5,
  rowClues: [Ec.NO_TRIPLES,Ec.SQ_1,3,Ec.SQ_1,1],
  colClues: [3,1,Ec.SQ_2,Ec.NO_TRIPLES],
  globalFeatures: [GlobalFeature.FLIP_VERTICAL],
};
const PUZZLE_5 = {
  n: 6,
  numContinents: 3,
  rowClues: [4,Ec.SQ_2,Ec.NO_TRIPLES,Ec.NONO_2_2,Ec.SQ_1,2],
  colClues: [4,null,Ec.SQ_2,2,3,Ec.YES_TRIPLES],
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
};
const PUZZLE_6 = {
  n: 6,
  numContinents: 4,
  rowClues: [4,Ec.NO_TRIPLES,2,null,Ec.NO_TRIPLES,Ec.SQ_1],
  colClues: [null,1,Ec.SQ_2,Ec.YES_TRIPLES,Ec.NO_TRIPLES,5],
  globalFeatures: [GlobalFeature.FLIP_HORIZONTAL],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 13: Looking in the mirror</Typography>

      <p>
        Translation, rotation and... something else.
      </p>

      <p>
        Hopefully that's enough hints, and hopefully the feature speaks for
        itself anyway.
      </p>

      <p>
        <strong>Note:</strong> stuff on the left doesn't correspond to any
        particular row.
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
      <p>No final puzzle today. Just this one.</p>
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
