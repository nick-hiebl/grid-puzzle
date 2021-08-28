import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo, PageProps } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 1, colClues: [1], rowClues: [1] };

const PUZZLE_1 = { n: 2, colClues: [2, 1], rowClues: [2, 1] };
const PUZZLE_2 = { n: 2, colClues: [1, 1], rowClues: [1, 1] };
const PUZZLE_3 = { n: 3, colClues: [1,3,1], rowClues: [2,2,1] };
const PUZZLE_4 = { n: 4, colClues: [3,1,4,1], rowClues: [1,2,3,3] };
const PUZZLE_5 = { n: 4, colClues: [3,3,1,2], rowClues: [1,3,4,1] };
const PUZZLE_6 = { n: 4, colClues: [3,1,3,4], rowClues: [3,4,2,2] };
const PUZZLE_7 = { n: 5, colClues: [2,4,2,2,5], rowClues: [3,4,1,2,5] };
const PUZZLE_8 = { n: 5, colClues: [2,5,4,3,1], rowClues: [4,2,3,1,5] };
const PUZZLE_9 = { n: 5, colClues: [5,1,5,5,3], rowClues: [4,5,3,4,3] };
const PUZZLE_10 = { n: 5, colClues: [4,2,4,3,1], rowClues: [1,5,4,3,1] };

const Puzzles = (props: PageProps) => (
  <Container>
    <Typography variant="h3">
      Introduction to the core mechanic
    </Typography>

    <p>
      Welcome to "grid puzzle game".
    </p>

    <p>
      Left click on squares to mark them as active. You can also right click on squares to mark
      them as inactive, perhaps as a mental note that you've ruled out a square.
    </p>

    <PuzzleWrapper details={PUZZLE_0} />
    <PuzzleWrapper details={PUZZLE_1} />
    <PuzzleWrapper details={PUZZLE_2} />
    <PuzzleWrapper details={PUZZLE_3} />
    <PuzzleWrapper details={PUZZLE_4} />
    <PuzzleWrapper details={PUZZLE_5} />
    <PuzzleWrapper details={PUZZLE_6} />
    <PuzzleWrapper details={PUZZLE_7} />
    <PuzzleWrapper details={PUZZLE_8} />
    <PuzzleWrapper details={PUZZLE_9} />
    <PuzzleWrapper details={PUZZLE_10} />
  </Container>
);

export const Page: PageInfo = {
  title: '',
  description: '',
  link: '/stages/375262364',
  component: Puzzles,
};
