import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';

const PUZZLE_0 = {
  w: 5,
  h: 3,
  minTotal: 7,
  rowClues: [Ec.DIV_A_YES,1,null]
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [2,4,2,1],
  colClues: [2,2,Ec.DIV_A_YES,1],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [1,2,2,3],
  colClues: [4,1,Ec.DIV_A_YES,3],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [3,1,2,Ec.DIV_A_YES,1],
  colClues: [Ec.NONO_3_1,Ec.DIV_A_YES,Ec.NONO_1_2,Ec.NONO_1_1,Ec.DIV_A_YES],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.DIV_A_YES,Ec.NONO_1_2,Ec.NONO_2_1,5,4],
  colClues: [4,3,3,5,Ec.NONO_1_3],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [Ec.DIV_A_YES,Ec.NONO_1_1_1,Ec.NONO_2_1,1,Ec.SQ_1],
  colClues: [Ec.NONO_2_1,Ec.NONO_1_1,1,1,4],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 16: Even more puzzles</Typography>

      <p>
        I'm not going to explain what today's mechanic <i>is</i>. But I will
        say that the symbol is "abstract". It's not really a visual
        representation of the rule it represents. The graphic is a placeholder
        and it may be replaced later.
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

      <p>No final puzzles today.</p>

      {props.links}
    </Container>
  );
};

export default TodaysPage;
