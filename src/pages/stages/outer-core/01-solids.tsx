import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';
import { EdgeClue as Ec, forced } from '../../../api/puzzle';

const PUZZLE_0A = { w: 5, h: 1, colClues: Array(5).fill(-1), rowClues: [Ec.SB_1] };
const PUZZLE_0B = { w: 5, h: 1, colClues: Array(5).fill(-1), rowClues: [Ec.SB_2] };
const PUZZLE_0C = { w: 5, h: 1, colClues: Array(5).fill(-1), rowClues: [Ec.SB_3] };

const PUZZLE_1 = { n: 4, colClues: [2,2,Ec.SB_1,4], rowClues: [1,2,2,4] };
const PUZZLE_2 = { n: 4, colClues: [3,4,4,Ec.SB_1], rowClues: [3,4,3,3], gridFeatures: [forced(3,0,false)] };
const PUZZLE_3 = { n: 4, colClues: [1,2,2,3], rowClues: [1,3,Ec.SB_2,2], gridFeatures: [forced(1,2,false),forced(1,0,true)] };
const PUZZLE_4 = { w: 4, h: 3, colClues: [3,Ec.SB_1,1,-1], rowClues: [2,1,4] };
const PUZZLE_5 = { w: 5, h: 4, colClues: [2,3,3,1,Ec.SB_2], rowClues: [2,4,3,2], gridFeatures: [forced(1,2,false),forced(4,0,false)] };
const PUZZLE_6 = { w: 5, h: 4, colClues: [Ec.SB_2,1,2,1,3], rowClues: [Ec.SB_3,1,4,2], gridFeatures: [forced(0,1,true)] };
const PUZZLE_7 = { n: 5, colClues: [1,3,4,4,Ec.SB_1], rowClues: [4,1,3,3,Ec.SB_1], gridFeatures: [forced(0,1,true)] };
const PUZZLE_8 = { n: 5, colClues: [3,Ec.SB_1,4,1,3], rowClues: [Ec.SB_1,4,1,3,3], gridFeatures: [forced(3,2,true)] };
const PUZZLE_9 = { n: 5, colClues: [2,3,Ec.SB_1,5,2], rowClues: [Ec.SB_2,2,1,4,3], gridFeatures: [forced(2,0,true)] };
const PUZZLE_10 = { w: 6, h: 5, colClues: [2,2,1,Ec.SB_2,4,3], rowClues: [2,2,Ec.SB_2,4,3], gridFeatures: [forced(2,0,true),forced(4,3,false),forced(3,4,true)] };

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Puzzles 01-01
    </Typography>

    <PuzzleWrapper details={PUZZLE_0A} highlightErrors />
    <PuzzleWrapper details={PUZZLE_0B} highlightErrors />
    <PuzzleWrapper details={PUZZLE_0C} highlightErrors />

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
  title: 'Puzzles 01',
  description: '',
  link: '/stages/1123581321',
  component: Puzzles,
};
