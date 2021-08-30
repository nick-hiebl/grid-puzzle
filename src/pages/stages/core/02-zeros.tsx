import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 2, colClues: [2,0], rowClues: [1,1] };

const PUZZLE_1 = { n: 3, colClues: [2,0,2], rowClues: [2,0,2] };
const PUZZLE_2 = { n: 3, colClues: [2,1,1], rowClues: [3,1,0] };
const PUZZLE_3 = { n: 3, colClues: [0,1,1], rowClues: [1,0,1] };
const PUZZLE_4 = { n: 4, colClues: [0,1,1,2], rowClues: [2,0,0,2] };
const PUZZLE_5 = { n: 4, colClues: [2,4,0,2], rowClues: [3,1,3,1] };
const PUZZLE_6 = { n: 4, colClues: [2,2,3,1], rowClues: [1,4,3,0] };
const PUZZLE_7 = { n: 5, colClues: [5,2,0,3,5], rowClues: [3,2,4,2,4] };
const PUZZLE_8 = { n: 5, colClues: [5,0,1,1,3], rowClues: [3,3,2,1,1] };
const PUZZLE_9 = { n: 5, colClues: [3,1,0,3,3], rowClues: [3,4,0,1,2] };
const PUZZLE_10 = { n: 5, colClues: [5,0,2,3,2], rowClues: [3,4,3,1,1] };

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Puzzles 02
    </Typography>

    <PuzzleWrapper details={PUZZLE_0} highlightErrors />
    <PuzzleWrapper details={PUZZLE_1} highlightErrors />
    <PuzzleWrapper details={PUZZLE_2} highlightErrors />
    <PuzzleWrapper details={PUZZLE_3} highlightErrors />
    <PuzzleWrapper details={PUZZLE_4} highlightErrors />
    <PuzzleWrapper details={PUZZLE_5} highlightErrors />
    <PuzzleWrapper details={PUZZLE_6} highlightErrors />
    <PuzzleWrapper details={PUZZLE_7} highlightErrors />
    <PuzzleWrapper details={PUZZLE_8} highlightErrors />
    <PuzzleWrapper details={PUZZLE_9} highlightErrors />
    <PuzzleWrapper details={PUZZLE_10} highlightErrors />
  </Container>
);

export const Page: PageInfo = {
  title: 'Puzzles 02',
  description: '',
  link: '/stages/812085688',
  component: Puzzles,
};
