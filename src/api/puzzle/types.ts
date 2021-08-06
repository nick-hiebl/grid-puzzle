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
  ANTISYMMETRIC = 'ANTISYMMETRIC',
  DIV_A_YES = 'div-a-yes',
  DIV_A_NO = 'div-a-no',
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
  NONO_1_2_2 = 'nonos/1-2-2',
  NONO_2_1_2 = 'nonos/2-1-2',
  NONO_2_2_1 = 'nonos/2-2-1',
  NONO_1_3_1 = 'nonos/1-3-1',
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
  STACKED_STEP = 'STACKED_STEP',
  SHAPE_SQUARE = 'shape-square',
  SHAPE_J = 'shape-j',
  SHAPE_L = 'shape-l',
  SHAPE_LONG = 'shape-long',
  SHAPE_T = 'shape-t',
  SHAPE_R = 'shape-r',
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
  STACKED = 'stacked',
  STACKED_OU = 'stacked-ou', // Stacked over and under
  STACKED_BOTH = 'stacked-both',
  SOME_SOLID_ROW = 'some-solid/row',
  SOME_SOLID_COLUMN = 'some-solid/column',
  SOME_EMPTY_ROW = 'some-empty/row',
  SOME_EMPTY_COLUMN = 'some-empty/column',
  NO_SOLID_ROW = 'no-solid/row',
  NO_SOLID_COLUMN = 'no-solid/column',
  NO_EMPTY_ROW = 'no-empty/row',
  NO_EMPTY_COLUMN = 'no-empty/column',
}
