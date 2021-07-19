import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { forced } from './utils';
import { EdgeClue as Ec } from '../../api/puzzle/types';

const PUZZLE_0 = {
  n: 4,
  colClues: [null,null,null,null],
  rowClues: [null,null,null,null],
  gridFeatures: [forced(1, 1, true)],
  totalActive: 3,
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [1,3,1,2],
  colClues: [2,1,2,2],
  gridFeatures: [forced(3,0,true), forced(1,2,true)],
};
const PUZZLE_2 = {
  n: 5,
  rowClues: [3,2,3,1,2],
  colClues: [1,4,3,2,null],
  gridFeatures: [forced(4,3,true), forced(0,1,true)],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [null,null,3,2,1],
  colClues: [2,null,4,1,3],
  gridFeatures: [forced(3,3,true), forced(1,4,true)],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.SQ_1,4,Ec.SQ_1,2,4],
  colClues: [Ec.SQ_2,4,1,Ec.SQ_2,Ec.SQ_1],
  gridFeatures: [forced(0,3,true), forced(2,2,true)],
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [3,4,Ec.SQ_1,1,2],
  colClues: [4,3,Ec.SQ_1,1,Ec.SQ_2],
  gridFeatures: [forced(4,0,true), forced(3,2,true)],
};

const PUZZLE_HARD_1 = {
  n: 5,
  rowClues: [2,Ec.SQ_2,3,1,Ec.SQ_2],
  colClues: [Ec.YES_TRIPLES,2,null,1,3],
  gridFeatures: [forced(0,4,true), forced(3,3,true)],
};
const PUZZLE_HARD_2 = {
  n: 5,
  rowClues: [null,Ec.YES_TRIPLES,2,Ec.SQ_2,Ec.YES_TRIPLES],
  colClues: [2,1,Ec.SQ_2,Ec.SQ_1,1],
  gridFeatures: [forced(1,1,true), forced(3,0,true)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 9: Time for some force</Typography>

      <p>
        Now that I can put things in the grid, let's explore that for a bit.
      </p>

      <p>
        This mechanic is <i>pretty</i> predictable.
      </p>

      <Typography variant="h4">Intro Puzzle</Typography>
      <p>
        I think you should understand this one easily enough.
      </p>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>
        Let's do some puzzles using this mechanic.
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

      <Typography variant="h4">Final puzzle #1</Typography>
      <p>
        I think today's final puzzles are not too bad.
      </p>
      <PuzzleWrapper details={PUZZLE_HARD_1} />
      <br />

      <Typography variant="h4">Final puzzle #2</Typography>
      <PuzzleWrapper details={PUZZLE_HARD_2} />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
