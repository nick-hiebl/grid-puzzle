import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo, PageProps } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';

const PUZZLE_0 = { n: 2, colClues: [2,-1], rowClues: [1,1] };

const PUZZLE_1 = { n: 2, colClues: [2,-1], rowClues: [1,2] };
const PUZZLE_2 = { n: 3, colClues: [2,1,3], rowClues: [3,1,-1] };
const PUZZLE_3 = { n: 4, colClues: [-1,3,3,4], rowClues: [4,2,2,-1] };
const PUZZLE_4 = { n: 4, colClues: [-1,3,0,1], rowClues: [2,-1,3,0] };
const PUZZLE_5 = { n: 4, colClues: [3,-1,4,2], rowClues: [1,4,-1,4] };
const PUZZLE_6 = { n: 4, colClues: [1,1,-1,3], rowClues: [2,4,0,-1] };
const PUZZLE_7 = { n: 5, colClues: [4,3,-1,1,1], rowClues: [4,0,2,-1,1] };
const PUZZLE_8 = { n: 5, colClues: [-1,1,3,4,2], rowClues: [1,0,-1,4,2] };
const PUZZLE_9 = { n: 5, colClues: [1,-1,0,4,5], rowClues: [2,1,-1,2,2] };
const PUZZLE_10 = { n: 5, colClues: [2,3,0,-1,4], rowClues: [4,1,-1,4,3] };

const Puzzles = (props: PageProps) => (
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
  link: '/stages/748267282',
  component: Puzzles,
};
