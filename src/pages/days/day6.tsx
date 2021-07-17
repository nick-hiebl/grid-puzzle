import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue } from '../../api/puzzle';
import { DayLink } from './utils';

const PUZZLE_0 = {
  n: 5,
  colClues: [0,0,EdgeClue.YES_TRIPLES,0,0],
  rowClues: [null,null,null,null,null],
};
const PUZZLE_1 = {
  n: 4,
  colClues: [EdgeClue.NO_TRIPLES,3,EdgeClue.YES_TRIPLES,0],
  rowClues: [1,EdgeClue.NO_TRIPLES,EdgeClue.NO_TRIPLES,EdgeClue.YES_TRIPLES],
};
const PUZZLE_2 = {
  n: 4,
  colClues: [3,null,1,EdgeClue.YES_TRIPLES],
  rowClues: [1,EdgeClue.YES_TRIPLES,EdgeClue.NO_TRIPLES,3],
};
const PUZZLE_3 = {
  n: 5,
  colClues: [EdgeClue.YES_TRIPLES,3,5,null,1],
  rowClues: [2,EdgeClue.YES_TRIPLES,EdgeClue.NO_TRIPLES,3,EdgeClue.YES_TRIPLES],
  totalActive: 13,
};
const PUZZLE_4 = {
  n: 4,
  colClues: [2,EdgeClue.YES_TRIPLES,2,3],
  rowClues: [2,EdgeClue.NO_TRIPLES,4,null],
  numContinents: 3,
};
const PUZZLE_HARD_1 = {
  n: 5,
  colClues: [1,3,null,3,EdgeClue.YES_TRIPLES],
  rowClues: [1,null,3,2,EdgeClue.YES_TRIPLES],
  numContinents: 1,
  maxTotal: 12,
};
const PUZZLE_HARD_2 = {
  n: 6,
  colClues: [2,2,EdgeClue.NO_TRIPLES,EdgeClue.YES_TRIPLES,2,4],
  rowClues: [3,4,4,1,EdgeClue.YES_TRIPLES,null],
  numContinents: 1,
  totalActive: 15,
}; // 64628

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 6: Not what we saw before</Typography>
      <p>
        This looks a little familiar...
      </p>

      <p>
        It's recommended to have completed <DayLink index={3} /> before working
        on these puzzles.
      </p>

      <Typography variant="h4">Intro Puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>And away we go.</p>
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

      <Typography variant="h4">Final puzzle #1</Typography>
      <PuzzleWrapper details={PUZZLE_HARD_1} />
      <br />

      <Typography variant="h4">Final puzzle #2</Typography>
      <p>
        This puzzle is dedicated to everyone who tells me "You can't have a
        final puzzle number one <i>and</i> number two".
      </p>
      <p>
        You inspire me.
      </p>
      <PuzzleWrapper details={PUZZLE_HARD_2} />
      <br />

      {props.links}
    </Container>
  )
};

export default TodaysPage;
