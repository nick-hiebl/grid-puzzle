import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec, GlobalFeature } from '../../api/puzzle/types';
import { DayLink, near } from './utils';

const common = {
  globalFeatures: [GlobalFeature.STACKED_OU],
};

const PUZZLE_0A = {
  w: 5,
  h: 3,
  rowClues: [2,5,0],
  ...common,
};
const PUZZLE_0B = {
  w: 5,
  h: 3,
  colClues: [Ec.SQ_2,Ec.SQ_2,2,Ec.SQ_2,1],
  rowClues: [null,4,1],
  ...common,
};

const PUZZLE_1 = {
  w: 6,
  h: 5,
  colClues: [1,3,2,1,0,2],
  rowClues: [1,2,Ec.NONO_1_2,2,1],
  ...common,
};
const PUZZLE_2 = {
  w: 7,
  h: 5,
  rowClues: [Ec.SQ_2,Ec.SQ_3,2,Ec.NONO_2_3,1],
  colClues: [1,4,Ec.SQ_2,null,null,null,1],
  ...common,
};
const PUZZLE_3 = {
  w: 7,
  h: 5,
  rowClues: [Ec.SQ_2,Ec.SQ_3,Ec.NONO_2_2,null,null],
  colClues: [null,null,null,null,2,2,0],
  gridFeatures: [near(0,3,6)],
  ...common,
};
const PUZZLE_4 = {
  w: 7,
  h: 5,
  rowClues: [Ec.NONO_1_1,Ec.SQ_3,5,Ec.NONO_2_1_2,Ec.SQ_2],
  colClues: [2,null,null,null,null,3,2],
  ...common,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 18: Above and below</Typography>

      <p>
        An advanced variation on the mechanic from day 15. If you haven't yet,
        make sure to try it out: <DayLink index={14} />
      </p>

      <p>
        To help you narrow down the difference between today's special rule and
        the special rule on day 15 I'll say this:
      </p>

      <p><i>
        All states satisfying the day 15 rule also satisfy today's rule.
        However, most states satisfying today's rule <strong>don't</strong> satisfy
        day 15's rule.
      </i></p>

      <Typography variant="h4">Intro Puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
      <br />

      <Typography variant="h4">Intro Puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_0B} highlightErrors />
      <br />

      <Typography variant="h4">Puzzles</Typography>
      <p>
        All of today's puzzles are completely handcrafted. This is the first
        day that that has been true since: <DayLink index={0} />
      </p>

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

      {props.links}
    </Container>
  );
};

export default TodaysPage;
