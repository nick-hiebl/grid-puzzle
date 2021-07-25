import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';

const PUZZLE_0 = {
  w: 4,
  h: 2,
  colClues: [null,null,null,null],
  rowClues: [2, 3],
};
const PUZZLE_1 = {
  w: 6,
  h: 3,
  colClues: [Ec.SQ_1,Ec.YES_TRIPLES,3,1,2,Ec.SQ_1],
  rowClues: [5,4,3],
};
const PUZZLE_2 = {
  w: 6,
  h: 3,
  rowClues: [Ec.YES_TRIPLES,3,3],
  colClues: [1,Ec.NONO_1_1,Ec.SQ_1,Ec.SQ_1,Ec.YES_TRIPLES,Ec.NO_TRIPLES],
};
const PUZZLE_3 = {
  w: 6,
  h: 4,
  rowClues: [Ec.SQ_2,2,Ec.SQ_1,Ec.SQ_1],
  colClues: [Ec.SQ_2,4,Ec.NONO_1_1,3,2,Ec.YES_TRIPLES],
};
const PUZZLE_4 = {
  w: 7,
  h: 4,
  rowClues: [Ec.NONO_1_2, Ec.NONO_3_2,Ec.NO_TRIPLES,6],
  colClues: [Ec.NONO_2_1,4,1,0,Ec.SQ_1,Ec.SQ_1,2],
};
const PUZZLE_5 = {
  w: 8,
  h: 3,
  rowClues: [Ec.NONO_2_2,5,Ec.NONO_3_1],
  colClues: [Ec.NO_TRIPLES,1,Ec.NONO_1_1,2,1,2,3,Ec.SQ_2],
};
const PUZZLE_6 = {
  w: 7,
  h: 4,
  rowClues: [Ec.NONO_2_3,Ec.SQ_3,2,3],
  colClues: [1,3,1,Ec.YES_TRIPLES,Ec.SQ_2,Ec.NONO_1_2,null],
};

const FINAL_PUZZLE = {
  w: 7,
  h: 4,
  rowClues: [Ec.SQ_1,Ec.YES_TRIPLES,Ec.SQ_2,4],
  colClues: [Ec.NONO_1_2,2,2,Ec.NONO_1_1,Ec.SQ_1,Ec.NONO_1_1,Ec.YES_TRIPLES],
  numContinents: 2,
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 12: Aspect ratio</Typography>

      <p>
        We all need an easy day or two. Me included. In lieu of some creative
        new idea, I'm adding some simple variety to puzzle shape.
      </p>

      <p>
        I hope that today's new feature will not require any clever explaining.
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
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      <Typography variant="h4">Final puzzle</Typography>
      <p>
        Just one today. And I'm going to leave error highlighting on.
      </p>
      <PuzzleWrapper details={FINAL_PUZZLE} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
