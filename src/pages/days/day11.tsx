import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { EdgeClue as Ec } from '../../api/puzzle/types';

const PUZZLE_0 = {
  n: 5,
  colClues: [null,null,null,null,null],
  rowClues: [Ec.NONO_1_2,Ec.NONO_1_1,Ec.NONO_2_1,Ec.NONO_1_1_1,Ec.NONO_1_3],
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [1,Ec.NONO_1_1,4,2],
  colClues: [3,3,1,2],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [3,Ec.NONO_2_1,2,2],
  colClues: [1,Ec.NONO_1_2,2,4],
};
const PUZZLE_3 = {
  n: 5,
  rowClues: [4,2,3,2,Ec.NONO_1_3],
  colClues: [1,3,Ec.NONO_1_1,4,5],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [3,1,Ec.NONO_1_1_1,Ec.NONO_1_1_1,Ec.NONO_2_2],
  colClues: [5,Ec.NONO_1_1,2,Ec.NONO_1_1,3],
};
const PUZZLE_5 = {
  n: 6,
  rowClues: [2,4,Ec.SQ_1,null,Ec.NO_TRIPLES,Ec.NONO_1_2],
  colClues: [Ec.NONO_1_1_1,Ec.SQ_3,Ec.NONO_1_1,Ec.YES_TRIPLES,Ec.NONO_1_2,5],
};
const PUZZLE_6 = {
  n: 6,
  rowClues: [Ec.NO_TRIPLES,Ec.NO_TRIPLES,Ec.NONO_2_2,Ec.NONO_1_2,Ec.NONO_1_3,null],
  colClues: [Ec.NONO_1_1,Ec.SQ_3,2,Ec.NONO_1_2,Ec.NO_TRIPLES,Ec.SQ_1],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 11: A puzzle you may have seen before</Typography>

      <p>
        Today's mechanic is inspired by a puzzle called a "nonogram" or
        "picross". The way this puzzle works is that each row/column is broken
        up into separate clumps of active squares.
      </p>

      <p>
        I'll need to explain how my "funky" art works. Each row is made up of
        separate squares. Each row represents a "clump" of active squares, with
        the number of squares in that row representing the number of active
        squares in that clump.
      </p>

      <Typography variant="h4">Intro Puzzle</Typography>
      <p>
        This is most of the shapes you'll encounter.
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
      <p>
        In lieu of a final puzzle today, I present this.
      </p>
      <PuzzleWrapper details={PUZZLE_6} highlightErrors />
      <br />

      {props.links}
    </Container>
  );
};

export default TodaysPage;
