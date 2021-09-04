import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { PuzzleWrapper } from '../../components/puzzle/PuzzleComponent';
import { EdgeClue as Ec, forced } from '../../api/puzzle';

const PUZZLE_1 = { w: 7, h: 5, colClues: [1,2,1,Ec.NONO_1_1,2,Ec.NONO_2_2,5], rowClues: [Ec.NONO_2_1_1,Ec.NONO_4_1,Ec.NONO_1_1_1,Ec.NONO_2_1,Ec.SB_1] };
const PUZZLE_2 = { w: 7, h: 3, colClues: [1,0,1,1,1,3,3], rowClues: [Ec.NONO_2_1,Ec.NONO_2_1,Ec.NONO_3_1], gridFeatures: [forced(0,2,true),forced(3,1,false)] };
const PUZZLE_3 = { w: 7, h: 7, colClues: [1,1,Ec.NONO_1_2_1,Ec.SQ_3,5,Ec.NONO_3_2,7], rowClues: [Ec.NONO_1_1,Ec.NONO_2_1_1,Ec.NONO_3_1,5,Ec.NONO_1_1,Ec.NONO_3_1,Ec.NONO_3_1], gridFeatures: [forced(0,6,true)] };
const PUZZLE_4 = { w: 7, h: 4, colClues: [1,1,1,2,2,Ec.NONO_1_2,4], rowClues: [Ec.NONO_2_1,Ec.NONO_1_1_1,Ec.NONO_3_1,Ec.NONO_3_1], gridFeatures: [forced(1,1,true),forced(2,3,false)] };
const PUZZLE_5 = { w: 7, h: 6, colClues: [1,0,1,Ec.NONO_1_2,Ec.NONO_3_1,Ec.NONO_1_4,Ec.SB_1], rowClues: [Ec.NONO_2_1,Ec.NONO_1_1,Ec.NONO_3_1,Ec.NONO_4_1,Ec.NONO_2_1,3], gridFeatures: [forced(2,2,true)] };

const Puzzles = () => (
  <Container>
    <Typography variant="h3">
      Father's Day puzzles
    </Typography>

    <p>
      Happy Father's Day dad, and I thought I'd give you some puzzles to really
      make you work for your gift.
    </p>

    <p>
      Read row by row, figuring out if each cell is either ON or OFF.
    </p>

    <p>
      When interpreting the values, look at all you've got and remember that A
      is 1st, B is 2nd, and so on...
    </p>

    <p>
      These are your favourites after all, so I hope you enjoy the puzzles.
    </p>

    <PuzzleWrapper details={PUZZLE_1} highlightErrors />
    <PuzzleWrapper details={PUZZLE_2} highlightErrors />
    <PuzzleWrapper details={PUZZLE_3} highlightErrors />
    <PuzzleWrapper details={PUZZLE_4} highlightErrors />
    <PuzzleWrapper details={PUZZLE_5} highlightErrors />
  </Container>
);

export default Puzzles;
