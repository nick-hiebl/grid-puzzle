import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { forced } from './utils';
import { EdgeClue as Ec } from '../../api/puzzle/types';

const PUZZLE_0 = {
  n: 4,
  rowClues: [null,null,null,null],
  colClues: [null,3,null,null],
  gridFeatures: [forced(1, 1, false)],
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [null,1,2,2],
  colClues: [null,2,2,3],
  gridFeatures: [forced(1,3,false), forced(3,0,false)],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [null,2,2,2],
  colClues: [1,1,3,null],
  gridFeatures: [forced(1,0,false), forced(2,1,false)],
  totalActive: 9,
};
const PUZZLE_3 = {
  n: 4,
  rowClues: [1,null,2,1],
  colClues: [null,1,1,null],
  gridFeatures: [forced(0,0,false), forced(3,3,false)],
  totalActive: 7,
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [2,3,2,2,null],
  colClues: [1,4,null,3,2],
  gridFeatures: [forced(1,2,false), forced(3,2,false)],
  totalActive: 10,
};
const PUZZLE_5 = {
  n: 5,
  rowClues: [1,Ec.SQ_2,null,4,2],
  colClues: [3,2,4,Ec.SQ_2,Ec.YES_TRIPLES],
  gridFeatures: [forced(2,3,false), forced(3,1,true)],
};
const PUZZLE_6 = {
  n: 5,
  rowClues: [2,3,Ec.SQ_2,1,Ec.SQ_1],
  colClues: [3,Ec.SQ_2,1,2,4],
  gridFeatures: [forced(0,4,false), forced(3,3,true)],
};

const PUZZLE_HARD_1 = {
  n: 6,
  rowClues: [Ec.SQ_3,2,Ec.NO_TRIPLES,Ec.SQ_1,2,5],
  colClues: [Ec.SQ_2,Ec.YES_TRIPLES,1,4,Ec.YES_TRIPLES,1],
  gridFeatures: [forced(0,3,false), forced(5,4,true)],
};
const PUZZLE_HARD_2 = {
  n: 6,
  rowClues: [Ec.SQ_3,1,1,2,2,Ec.SQ_1],
  colClues: [Ec.YES_TRIPLES,2,Ec.SQ_1,Ec.SQ_1,4,1],
  gridFeatures: [forced(4,0,false), forced(5,4,true)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 10: Well that's not it</Typography>

      <p>
        This is perhaps an unsurprising follow-on from yesterday.
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

      <Typography variant="h4">Puzzle #6</Typography>
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      <Typography variant="h4">Final puzzle #1</Typography>
      <p>
        I think today's final puzzles are manageable.
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
