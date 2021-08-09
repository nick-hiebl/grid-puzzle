import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';
import { DayLink, forced } from './utils';

const PUZZLE_0 = {
  n: 5,
  colClues: [Ec.SB_1,Ec.SB_2,Ec.SB_3,Ec.SB_2,Ec.SB_1],
};

const PUZZLE_1 = {
  n: 5,
  rowClues: [Ec.NO_TRIPLES,Ec.SQ_3,Ec.SB_1,Ec.SB_2,null],
  colClues: [Ec.NONO_1_1,2,Ec.NONO_1_3,Ec.SQ_3,Ec.SB_1],
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [4,3,3,Ec.SB_2,Ec.SQ_2],
  colClues: [Ec.NONO_1_1,Ec.SQ_1,Ec.REFLECTIVE,3,Ec.SQ_3],
  gridFeatures: [forced(2,3,false), forced(3,2,false)],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [2,Ec.NO_TRIPLES,5,Ec.SB_1,Ec.NONO_2_1],
  colClues: [Ec.SB_2,Ec.SQ_2,Ec.YES_TRIPLES,4,Ec.NONO_2_1],
  gridFeatures: [forced(2,3,false)],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [1,Ec.SB_2,1,Ec.NONO_1_3,4],
  colClues: [1,Ec.NONO_1_2,Ec.SB_2,Ec.SB_2,Ec.SQ_2],
  gridFeatures: [forced(1,1,false)],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [Ec.NO_TRIPLES,2,Ec.NONO_1_1,Ec.NONO_1_2,Ec.NONO_1_3],
  colClues: [Ec.NONO_2_2,3,1,Ec.SB_1,Ec.NONO_1_2],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 28: A late callback</Typography>

      <p>
        This is a variation on the day 7 mechanic. Make sure you try it out
        here: <DayLink index={6} />
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
