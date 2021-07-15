export interface PuzzleState {
  n: number;
  complete: boolean;
  enabled: boolean[];
}

export interface PuzzleDetails {
  n: number;
  colCounts?: number[];
  rowCounts?: number[];
  totalActive?: number;
  numContinents?: number;
}
