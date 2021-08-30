import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';
import { forced } from '../../../api/puzzle';
import type { GridFeature } from '../../../api/puzzle';

function makePuzzle(n: number, colClues: number[], rowClues: number[], gridFeatures: GridFeature[]) {
  return {
    n,
    colClues,
    rowClues,
    gridFeatures,
  }
}

const PUZZLE_0 = makePuzzle(2, [1,1], [1,1], [forced(1,0,true)]);

const PUZZLE_1 = makePuzzle(3, [2,1,1], [1,1,2], [forced(1,0,true)]);
const PUZZLE_2 = makePuzzle(3, [1,3,1], [2,2,1], [forced(0,1,true)]);
const PUZZLE_3 = makePuzzle(4, [4,1,3,1], [2,3,2,2], [forced(1,2,true)]);
const PUZZLE_4 = makePuzzle(4, [2,1,1,3], [1,1,2,3], [forced(2,1,true)]);
const PUZZLE_5 = makePuzzle(4, [3,1,2,1], [2,2,1,2], [forced(3,2,true),forced(1,3,true)]);
const PUZZLE_6 = makePuzzle(5, [1,4,3,2,1], [2,3,2,4,0], [forced(0,0,true)]);
const PUZZLE_7 = makePuzzle(5, [2,-1,1,2,4], [3,-1,4,3,3], [forced(2,0,true),forced(3,3,true)]);
const PUZZLE_8 = makePuzzle(5, [3,4,2,5,3], [5,3,2,4,3], [forced(2,2,true)]);
const PUZZLE_9 = makePuzzle(5, [-1,4,5,2,2], [-1,3,5,2,4], [forced(3,3,true)]);
const PUZZLE_10 = makePuzzle(6, [2,2,6,-1,2,5], [-1,2,2,3,4,6], [forced(1,1,true),forced(4,3,true)]);

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Puzzles 05
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
  title: 'Puzzles 05',
  description: '',
  link: '/stages/56765432',
  component: Puzzles,
};
