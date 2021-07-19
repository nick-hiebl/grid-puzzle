import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';

import type { DayProps } from './types';
import { near } from './utils';
import { EdgeClue as Ec } from '../../api/puzzle/types';

const PLAYGROUND = { n: 4 };

const PUZZLE_0 = {
  n: 4,
  colClues: [null,null,null,null],
  rowClues: [null,null,null,null],
  gridFeatures: [near(1, 1, 4), near(2, 1, 3)],
};
const PUZZLE_1 = {
  n: 4,
  rowClues: [1,3,2,2],
  colClues: [3,1,1,3],
  gridFeatures: [near(1,1,3), near(3,2,3)],
};
const PUZZLE_2 = {
  n: 4,
  rowClues: [2,1,3,3],
  colClues: [2,2,3,2],
  gridFeatures: [near(1,1,5), near(3,2,5)],
};
const PUZZLE_3 = {
  n: 4,
  rowClues: [null,3,null,1],
  colClues: [2,null,1,2],
  gridFeatures: [near(1,1,4), near(2,2,2)],
};
const PUZZLE_4 = {
  n: 5,
  rowClues: [Ec.NO_TRIPLES,Ec.YES_TRIPLES,3,null,3],
  colClues: [3,4,Ec.YES_TRIPLES,Ec.SQ_2,3],
  gridFeatures: [near(2,1,5), near(1,3,9)],
};

const PUZZLE_HARD_1 = {
  n: 5,
  rowClues: [null,2,4,4,null],
  colClues: [4,null,4,1,3],
  gridFeatures: [near(1,1,7), near(4,2,4), near(2,3,5)],
};
const PUZZLE_HARD_2 = {
  n: 5,
  rowClues: [3,Ec.SQ_1,Ec.SQ_1,Ec.YES_TRIPLES,4],
  colClues: [4,2,Ec.SQ_1,Ec.YES_TRIPLES,2],
  gridFeatures: [near(2,1,6), near(1,3,6)],
};

const TodaysPage = (props: DayProps) => {
  return (
    <Container>
      {props.links}
      <Typography variant="h3">Day 8: Numbers on the board</Typography>

      <p>
        What's that? Symbols <i>in the grid?</i>
      </p>

      <p>
        Today's mechanic is actually one I'm pretty excited about. And it may
        remind some of another very popular grid-based computer puzzle game.
      </p>

      <p>
        As a word of warning, this mechanic allows the creation of some very
        difficult puzzles. These are not puzzles that I was able to get through
        in a quick sitting, I do not expect everyone to be able to solve all of
        these. The puzzles from puzzle #4 onwards are <i>very</i> difficult.
      </p>

      <Typography variant="h4">Playground</Typography>
      <p>
        <strong>Note:</strong> This is a playground, not a regular puzzle.
        There is no "solution", but the puzzle will provide you with feedback
        on the current puzzle state.
      </p>
      <PuzzleWrapper
        details={PLAYGROUND}
        playgroundFeatures={[near(1,1,0)]}
        isPlayground
      />
      <br />

      <Typography variant="h4">Intro Puzzle</Typography>
      <p>
        I think you should understand this one easily enough.
      </p>
      <PuzzleWrapper details={PUZZLE_0} highlightErrors />
      <br />

      <Typography variant="h4">Puzzle #1</Typography>
      <p>
        Let's look at some <i>actual</i> puzzles using this mechanic.
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

      <Typography variant="h4">Final puzzle #1</Typography>
      <p>
        These are tricky ones. Please don't spend all day attempting these.
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
