import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PageInfo } from '../../types';
import { PuzzleWrapper } from '../../../components/puzzle/PuzzleComponent';
import { EdgeClue as Ec, forced } from '../../../api/puzzle';

const PUZZLE_0A = { w: 5, h: 1, colClues: Array(5).fill(-1), rowClues: [Ec.SQ_1] };
const PUZZLE_0B = { w: 5, h: 1, colClues: Array(5).fill(-1), rowClues: [Ec.SQ_2] };
const PUZZLE_0C = { w: 5, h: 1, colClues: Array(5).fill(-1), rowClues: [Ec.SQ_3] };

const PUZZLE_1 = { n: 4, colClues: [1,1,3,Ec.SQ_2], rowClues: [2,1,3,0] };
const PUZZLE_2 = { n: 4, colClues: [3,1,4,Ec.SQ_1], rowClues: [2,4,3,2] };
const PUZZLE_3 = { n: 4, colClues: [2,1,Ec.SQ_1,4], rowClues: [2,3,1,1] };
const PUZZLE_4 = { n: 5, colClues: [4,1,Ec.SQ_1,3,3], rowClues: [4,Ec.SQ_2,2,3,3], gridFeatures: [forced(1,1,true),forced(0,3,false)] };
const PUZZLE_5 = { n: 5, colClues: [2,3,3,1,Ec.SQ_2], rowClues: [3,Ec.SQ_1,3,2,1], gridFeatures: [forced(3,4,true),forced(0,1,false)] };
const PUZZLE_6 = { n: 5, colClues: [Ec.SQ_2,Ec.SQ_1,3,3,4], rowClues: [Ec.SQ_1,3,2,4,1], gridFeatures: [forced(1,2,true),forced(4,1,false)] };
const PUZZLE_7 = { n: 5, colClues: [1,4,2,Ec.SQ_2,1], rowClues: [Ec.SQ_3,1,3,2,Ec.SB_1], gridFeatures: [forced(3,1,true),forced(0,1,false)] };
const PUZZLE_8 = { n: 5, colClues: [4,2,1,3,Ec.SQ_1], rowClues: [4,3,Ec.SQ_2,2,Ec.SB_2], totalActive: 12, gridFeatures: [forced(4,3,true)] };
const PUZZLE_9 = { n: 5, colClues: [1,2,-1,3,Ec.SQ_2], rowClues: [Ec.SB_1,3,2,Ec.SQ_2,4], totalActive: 14, gridFeatures: [forced(0,2,true)] };
const PUZZLE_10 = { w: 6, h: 5, colClues: [3,-1,3,3,3,2], rowClues: [5,Ec.SQ_1,1,Ec.SB_1,4], gridFeatures: [forced(5,2,true),forced(4,0,false)] };

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Puzzles A02
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
  title: 'Puzzles A02',
  description: '',
  link: '/stages/2358132134',
  component: Puzzles,
};
