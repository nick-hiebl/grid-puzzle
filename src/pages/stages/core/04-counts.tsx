import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 2, colClues: [2,-1], rowClues: [2,-1], totalActive: 4 };

const PUZZLE_1 = { n: 3, colClues: [1,-1,1], rowClues: [1,-1,1], totalActive: 5 };
const PUZZLE_2 = { n: 3, colClues: [-1,1,3], rowClues: [2,2,-1], totalActive: 7 };
const PUZZLE_3 = { n: 3, colClues: [3,-1,2], rowClues: [1,-1,3], totalActive: 6 };
const PUZZLE_4 = { n: 4, colClues: [1,2,2,-1], rowClues: [-1,1,1,3], totalActive: 9 };
const PUZZLE_5 = { n: 4, colClues: [-1,2,4,1], rowClues: [-1,2,1,4], totalActive: 8 };
const PUZZLE_6 = { n: 4, colClues: [-1,2,4,1], rowClues: [-1,2,1,4], totalActive: 10 };
const PUZZLE_7 = { n: 5, colClues: [1,2,-1,4,4], rowClues: [4,-1,2,3,2], totalActive: 11 };
const PUZZLE_8 = { n: 5, colClues: [1,2,-1,4,4], rowClues: [4,-1,2,3,2], totalActive: 16 };
const PUZZLE_9 = { n: 5, colClues: [1,2,3,2,-1], rowClues: [0,4,-1,2,1], totalActive: 12 };
const PUZZLE_10 = { n: 5, colClues: [1,3,4,-1,4], rowClues: [4,3,1,-1,5], totalActive: 14 };

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Puzzles 03
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
  title: '',
  description: '',
  link: '/stages/456765432',
  component: Puzzles,
};
