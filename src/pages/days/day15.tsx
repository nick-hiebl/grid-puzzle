import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';
import { DayLink } from './utils';

const globalFeatures = [GlobalFeature.STACKED];

const PUZZLE_0 = {
  w: 5,
  h: 3,
  minTotal: 6,
  globalFeatures,
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [Ec.SQ_1,Ec.YES_TRIPLES,Ec.SQ_1,Ec.SQ_1],
  colClues: [Ec.NO_TRIPLES,Ec.YES_TRIPLES,Ec.YES_TRIPLES,Ec.SQ_1],
  globalFeatures,
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [Ec.SQ_1,Ec.SQ_1,Ec.YES_TRIPLES,Ec.SQ_1],
  colClues: [Ec.SQ_1,Ec.SQ_1,Ec.SQ_1,Ec.NO_TRIPLES],
  minTotal: 7,
  globalFeatures,
};
const PUZZLE_3 = {
  w: 6,
  h: 4,
  rowClues: [1,Ec.NONO_2_1,Ec.SQ_2,Ec.SQ_1],
  colClues: [3,Ec.REFLECTIVE,2,Ec.SQ_1,3,Ec.REFLECTIVE],
  globalFeatures,
};
const PUZZLE_4 = {
  w: 7,
  h: 4,
  rowClues: [Ec.SQ_2,Ec.NO_TRIPLES,Ec.SQ_3,Ec.SQ_3],
  colClues: [0,Ec.REFLECTIVE,null,2,Ec.SQ_1,Ec.YES_TRIPLES,3],
  globalFeatures,
};

const FINAL_PUZZLE_1 = {
  w: 8,
  h: 6,
  rowClues: [Ec.NO_TRIPLES,Ec.REFLECTIVE,Ec.REFLECTIVE,Ec.SQ_2,Ec.REFLECTIVE,8],
  colClues: [2,Ec.REFLECTIVE,Ec.SQ_1,null,Ec.SQ_1,1,6,Ec.SQ_1],
  globalFeatures,
};
const FINAL_PUZZLE_2 = {
  w: 8,
  h: 6,
  rowClues: [Ec.SQ_3,Ec.NONO_3_2,6,Ec.YES_TRIPLES,6,8],
  colClues: [Ec.SQ_1,6,5,Ec.NO_TRIPLES,Ec.YES_TRIPLES,5,Ec.YES_TRIPLES,1],
  globalFeatures,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 15: Piling up</Typography>

      <p>
        No explanation for today's mechanic. Hopefully it's inferrable.
      </p>

      <p>
        <strong>Note:</strong> For those who have been following along in real
        time, the art for "nonogram clues" has been updated. It's not too
        different, so you may be able to figure out how it works yourself, but
        if you'd like to see the new explanation visit: <DayLink index={10} />
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

      <Typography variant="h4">Final Puzzle #1</Typography>
      <p>Time for some big ones.</p>
      <PuzzleWrapper details={FINAL_PUZZLE_1} highlightErrors />
      <br />

      <Typography variant="h4">Final Puzzle #2</Typography>
      <p>Final puzzle #2 is back!</p>
      <PuzzleWrapper details={FINAL_PUZZLE_2} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
