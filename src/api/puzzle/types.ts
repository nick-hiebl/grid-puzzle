export interface PuzzleState {
  w: number;
  h: number;
  complete: boolean;
  enabled: boolean[];
}

export enum EdgeClue {
  NO_TRIPLES = 'NO_TRIPLES',
  YES_TRIPLES = 'YES_TRIPLES',
  REFLECTIVE = 'REFLECTIVE',
  SQ_1 = '1_SQUARE',
  SQ_2 = '2_SQUARE',
  SQ_3 = '3_SQUARE',
  NONO_1_1 = 'nonos/1-1',
  NONO_1_1_1 = 'nonos/1-1-1',
  NONO_1_2 = 'nonos/1-2',
  NONO_1_3 = 'nonos/1-3',
  NONO_2_1 = 'nonos/2-1',
  NONO_2_2 = 'nonos/2-2',
  NONO_2_3 = 'nonos/2-3',
  NONO_3_1 = 'nonos/3-1',
  NONO_3_2 = 'nonos/3-2',
  NONO_1_1_2 = 'nonos/1-1-2',
  NONO_1_2_1 = 'nonos/1-2-1',
  NONO_2_1_1 = 'nonos/2-1-1',
  NONO_1_4 = 'nonos/1-4',
  NONO_4_1 = 'nonos/4-1',
}

export interface SizeLeft {
  n: number;
}

export interface SizeRight {
  w: number;
  h: number;
}

type Size = SizeLeft | SizeRight;

interface PuzzleDetailsInner {
  colClues?: (number | EdgeClue | null)[];
  rowClues?: (number | EdgeClue | null)[];
  totalActive?: number;
  minTotal?: number;
  maxTotal?: number;
  numContinents?: number;
  gridFeatures?: GridFeature[];
  globalFeatures?: GlobalFeature[];
}

export type PuzzleDetails = Size & PuzzleDetailsInner;

export enum GridFeatureKind {
  NEARBY_COUNT = 'NEARBY_COUNT',
  FORCED = 'FORCED',
}

export interface GridFeature {
  kind: GridFeatureKind;
  i: number;
  j: number;
  value: number;
}

export enum GlobalFeature {
  FLIP_HORIZONTAL = 'flipHorizontal',
  FLIP_VERTICAL = 'flipVertical',
}
