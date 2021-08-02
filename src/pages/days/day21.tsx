import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';
import { DayLink } from './utils';

const globalFeatures = [GlobalFeature.STACKED_BOTH];

const PUZZLE_0 = {
  n: 4,
  rowClues: [1,2,4,1],
  colClues: [null,null,2,2],
  globalFeatures,
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [Ec.SQ_2,Ec.NONO_1_2,Ec.NONO_2_1,Ec.SQ_2],
  colClues: [null,null,2,2],
  globalFeatures,
};
const PUZZLE_2 = {
  w: 7,
  h: 5,
  rowClues: [Ec.SQ_2,Ec.NONO_3_2,Ec.NONO_1_2_1,4,Ec.REFLECTIVE],
  colClues: [3,2,null,Ec.SQ_1,3,null,5],
  globalFeatures,
};
const PUZZLE_3 = {
  n: 7,
  rowClues: [Ec.SQ_3,3,Ec.NONO_1_3_1,7,null,null,Ec.SQ_2],
  colClues: [Ec.SQ_1,2,null,null,4,null,null],
  globalFeatures: [...globalFeatures, GlobalFeature.FLIP_HORIZONTAL],
};
const PUZZLE_4 = {
  w: 6,
  h: 5,
  rowClues: [1,Ec.NONO_2_1,Ec.NONO_3_1,Ec.NONO_3_1,1],
  colClues: [Ec.REFLECTIVE,null,1,4,4,Ec.REFLECTIVE],
  globalFeatures,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 21: Above AND below</Typography>

      <p>
        An additional variation on the mechanic from day 15. If you haven't
        yet, make sure to try it out: <DayLink index={14} />
      </p>

      <p>
        Another relevant day to today's mechanic is day 18, check it out at
        {' '} <DayLink index={17} />. Having now implemented today's mechanic I
        really wish that I'd called that day "over OR under" and saved "over
        and under" for today.
      </p>

      <p>
        As with day 18, today is a day consisting exclusively of hand-crafted
        puzzles. I hope you enjoy them.
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
      <p>
        Bonus points if you can find the solution that looks familiar.
      </p>
      <PuzzleWrapper details={PUZZLE_4} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
