export interface PuzzleState {
  n: number;
  complete: boolean;
  enabled: boolean[];
}

export enum EdgeClue {
  NO_TRIPLES = 'NO_TRIPLES',
  YES_TRIPLES = 'YES_TRIPLES',
  SQ_1 = '1_SQUARE',
  SQ_2 = '2_SQUARE',
  SQ_3 = '3_SQUARE',
}

export interface PuzzleDetails {
  n: number;
  colClues?: (number | EdgeClue | null)[];
  rowClues?: (number | EdgeClue | null)[];
  totalActive?: number;
  minTotal?: number;
  maxTotal?: number;
  numContinents?: number;
}
