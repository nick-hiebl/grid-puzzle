export interface PuzzleState {
  n: number;
  complete: boolean;
  enabled: boolean[];
}

export enum EdgeClue {
  NO_TRIPLES = 'NO_TRIPLES',
}

export interface PuzzleDetails {
  n: number;
  colClues?: (number | EdgeClue | null)[];
  rowClues?: (number | EdgeClue | null)[];
  totalActive?: number;
  numContinents?: number;
}
