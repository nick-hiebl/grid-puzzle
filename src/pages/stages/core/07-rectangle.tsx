import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';
import { forced } from '../../../api/puzzle';

const PUZZLE_0 = { w: 3, h: 1, colClues: [1,-1,1], rowClues: [2] };

const PUZZLE_1 = { w: 3, h: 2, colClues: [2,-1,1], rowClues: [2,1] };
const PUZZLE_2 = { w: 4, h: 3, colClues: [2,1,2,3], rowClues: [1,4,3] };
const PUZZLE_3 = { w: 4, h: 3, colClues: [3,1,1,2], rowClues: [1,3,3] };
const PUZZLE_4 = { w: 5, h: 3, colClues: [-1,1,2,2,1], rowClues: [-1,1,4], totalActive: 9 };
const PUZZLE_5 = { w: 5, h: 4, colClues: [-1,1,3,2,1], rowClues: [-1,1,1,3], totalActive: 10 };
const PUZZLE_6 = { w: 6, h: 4, colClues: [3,1,3,-1,2,3], rowClues: [3,5,-1,1], totalActive: 13, gridFeatures: [forced(5,1,false)] };
const PUZZLE_7 = { w: 7, h: 4, colClues: [3,-1,1,3,2,3,4], rowClues: [5,5,-1,5], totalActive: 16, gridFeatures: [forced(2,1,true)] };
const PUZZLE_8 = { w: 6, h: 5, colClues: [-1,2,4,3,4,2], rowClues: [5,5,-1,3,3], totalActive: 16, gridFeatures: [forced(0,4,true)] };
const PUZZLE_9 = { w: 6, h: 5, colClues: [-1,4,3,1,2,2], rowClues: [2,4,2,5,1], gridFeatures: [forced(0,0,true),forced(0,4,true)] };
const PUZZLE_10 = { w: 7, h: 5, colClues: [3,3,5,1,1,2,-1], rowClues: [2,3,5,4,4], gridFeatures: [forced(3,0,true),forced(0,2,false),forced(1,1,true)] };

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Puzzles 07
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
  title: 'Puzzles 07',
  description: '',
  link: '/stages/787654345',
  component: Puzzles,
};
