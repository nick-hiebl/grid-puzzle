import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GroupFeature } from '../../api/puzzle/types';
import { group, groupSpec } from './utils';

function fs(...nums: number[]): GroupFeature[] {
  return nums.map((num, index) => groupSpec(index, num));
}

const PUZZLE_0 = {
  n: 5,
  gridFeatures: [
    group(0, 0, 0),
    group(0, 1, 0),
    group(0, 2, 0),
    group(0, 3, 0),
    group(0, 4, 0),
    group(2, 0, 1),
    group(2, 1, 1),
    group(2, 2, 1),
    group(2, 3, 1),
    group(2, 4, 1),
    group(4, 0, 2),
    group(4, 1, 2),
    group(4, 2, 2),
    group(4, 3, 2),
    group(4, 4, 2),
  ],
  globalFeatures: [
    groupSpec(0, 1),
    groupSpec(1, 2),
    groupSpec(2, 3),
  ],
};

const PUZZLE_1 = {
  n: 5,
  rowClues: [1,1,Ec.NONO_1_1,Ec.NO_TRIPLES,3],
  colClues: [Ec.SB_2,1,null,Ec.YES_TRIPLES,1],
  gridFeatures: [
    group(1, 3, 0),
    group(2, 0, 0),
    group(0, 2, 1),
    group(0, 3, 1),
    group(2, 1, 2),
    group(2, 4, 2),
  ],
  globalFeatures: fs(2,1,2),
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [2,4,Ec.SQ_2,Ec.NONO_1_3,2],
  colClues: [2,Ec.NO_TRIPLES,5,3,Ec.NO_TRIPLES],
  gridFeatures: [
    group(2, 3, 0),
    group(3, 2, 0),
    group(1, 3, 1),
    group(4, 2, 1),
    group(4, 4, 1),
  ],
  globalFeatures: fs(1,2),
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [4,3,Ec.NONO_1_1,2,3],
  colClues: [Ec.NONO_2_1,3,Ec.NONO_2_1,3,Ec.NONO_1_1],
  gridFeatures: [
    group(0, 2, 0),
    group(2, 2, 0),
    group(2, 3, 0),
    group(0, 0, 1),
    group(1, 4, 1),
    group(4, 0, 1),
  ],
  globalFeatures: fs(2,1),
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.YES_TRIPLES,Ec.SQ_2,Ec.NONO_1_1,Ec.SB_1,Ec.REFLECTIVE],
  colClues: [1,Ec.REFLECTIVE,2,Ec.SQ_2,Ec.NONO_1_3],
  gridFeatures: [
    group(0, 2, 0),
    group(0, 4, 0),
    group(1, 1, 0),
    group(0, 1, 2),
    group(1, 2, 2),
    group(2, 1, 2),
    group(2, 2, 2),
  ],
  globalFeatures: [{ count: 2, shape: 0 }, { count: 1, shape: 2 }],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [Ec.REFLECTIVE,Ec.NO_TRIPLES,Ec.NONO_3_1,4,Ec.SB_2],
  colClues: [Ec.SB_1,2,Ec.SQ_1,Ec.YES_TRIPLES,Ec.NONO_1_1_1],
  gridFeatures: [
    group(3, 0, 0),
    group(4, 0, 0),
    group(4, 1, 0),
    group(0, 2, 1),
    group(2, 1, 1),
    group(3, 4, 1),
    group(0, 4, 2),
    group(1, 0, 2),
    group(3, 1, 2),
  ],
  globalFeatures: fs(1,1,2),
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 29: How many here?</Typography>

      <p>
        Match the shapes and the counts. This is not the most inventive or
        thematic, but it's getting very close to 30 days and I'm running out of
        ideas.
      </p>

      <Typography variant="h4">Intro puzzle</Typography>
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
      <PuzzleWrapper details={PUZZLE_5} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
