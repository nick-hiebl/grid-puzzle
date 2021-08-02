import countContinents from './countContinents';
import { stackedWithBaseline } from './stacking';
import type {
  GridFeature,
  PuzzleDetails,
  PuzzleState,
  SizeLeft,
  SizeRight,
} from './types';
import { EdgeClue, GlobalFeature, GridFeatureKind } from './types';

import { allColumns, allRows } from './utils';

function clueToCount(value: number | EdgeClue | null): number {
  if (typeof(value) == 'number') {
    return value;
  }

  return -1;
}

function clueToClue(value: number | EdgeClue | null): EdgeClue | null {
  if (typeof(value) == 'number' || value == null) {
    return null;
  }

  return value;
}

function hasTriples(seq: boolean[]) {
  let count = 0;
  for (const item of seq) {
    if (item) count++;
    else count = 0;

    if (count === 3) return true;
  }

  return false;
}

function countGaps(seq: boolean[]) {
  let count = 0;
  let inGap = false;
  for (const item of seq) {
    if (item) {
      inGap = false;
    } else {
      if (!inGap) {
        // Entered new gap
        count++;
        inGap = true;
      }
      // Otherwise continuing gap, so no state change needed
    }
  }

  return count;
}

function checkNonos(line: boolean[], clusters: number[]) {
  const foundClusters = line.map(x => +x) // Convert to numbers
    .join('') // Join into big string
    .split('0') // Split on zeros
    .filter(x => x.length > 0) // Exclude "empty" sections
    .map(x => x.length); // Get length

  if (foundClusters.length !== clusters.length) {
    return false;
  }

  return foundClusters.every((cluster, i) => cluster === clusters[i]);
}

function isLineSymmetric(line: boolean[]) {
  return line.every((value, index) => value === line[line.length - index - 1]);
}

function isLineAntiSymmetric(line: boolean[]) {
  return line.every((value, index) => value !== line[line.length - index - 1]);
}

function isSizeLeft(details: SizeLeft | SizeRight): details is SizeLeft {
  return 'n' in details;
}

function getWidthHeight(details: SizeLeft | SizeRight) {
  if (isSizeLeft(details)) {
    return { w: details.n, h: details.n };
  } else {
    return { w: details.w, h: details.h };
  }
}



export default class Puzzle {
  readonly w: number;
  readonly h: number;

  state: PuzzleState;

  readonly colCounts: number[];
  readonly rowCounts: number[];
  readonly colRules: (EdgeClue | null)[];
  readonly rowRules: (EdgeClue | null)[];
  private readonly minTotal: number | undefined;
  private readonly maxTotal: number | undefined;
  readonly numContinents: number;
  readonly gridFeatures: Record<string, GridFeature>;

  readonly globalFeatures: GlobalFeature[];

  constructor(details: PuzzleDetails) {
    const { w, h } = getWidthHeight(details);

    this.w = w;
    this.h = h;

    this.state = {
      enabled: Array(w * h).fill(false),
      complete: false,
      w,
      h,
    };

    this.colCounts = (details.colClues || Array(w).fill(null)).map(clueToCount);
    this.rowCounts = (details.rowClues || Array(h).fill(null)).map(clueToCount);

    this.colRules = (details.colClues || Array(w).fill(null)).map(clueToClue);
    this.rowRules = (details.rowClues || Array(h).fill(null)).map(clueToClue);

    if (this.colCounts.some(v => v < -1 || v > h)) {
      throw new Error('Invalid requirement for some column ' + JSON.stringify(this.colCounts));
    }
    if (this.rowCounts.some(v => v < -1 || v > w)) {
      throw new Error('Invalid requirement for some column ' + JSON.stringify(this.rowCounts));
    }

    if (details.totalActive) {
      this.maxTotal = this.minTotal = details.totalActive;
    } else {
      this.maxTotal = details.maxTotal;
      this.minTotal = details.minTotal;
    }

    this.numContinents = details.numContinents ?? -1;

    this.gridFeatures = {};
    for (const feature of details.gridFeatures || []) {
      const index = feature.i + feature.j * w;

      this.gridFeatures[index] = feature;
    }

    this.globalFeatures = details.globalFeatures ?? [];
  }

  isLineValid(line: boolean[], rule: EdgeClue | null, count: number): boolean {
    const sum = line.reduce((a, b) => a + (+b), 0);

    if (rule === EdgeClue.NO_TRIPLES) {
      if (hasTriples(line)) {
        return false;
      }
    } else if (rule === EdgeClue.YES_TRIPLES) {
      if (!hasTriples(line)) {
        return false;
      }
    } else if (rule === EdgeClue.SQ_1) {
      if (countGaps(line) !== 1) return false;
    } else if (rule === EdgeClue.SQ_2) {
      if (countGaps(line) !== 2) return false;
    } else if (rule === EdgeClue.SQ_3) {
      if (countGaps(line) !== 3) return false;
    } else if (rule === EdgeClue.REFLECTIVE) {
      if (!isLineSymmetric(line)) return false;
    } else if (rule === EdgeClue.ANTISYMMETRIC) {
      if (!isLineAntiSymmetric(line)) return false;
    } else if (rule === EdgeClue.DIV_A_YES) {
      if (sum % 2) return false;
    } else if (rule === EdgeClue.DIV_A_NO) {
      if (!(sum % 2)) return false;
    } else if (rule?.startsWith('nonos/')) {
      const spacing = rule.slice(6).split('-').map(x => parseInt(x, 10));
      if (!checkNonos(line, spacing)) {
        return false;
      }
    }

    if (count === -1) return true;

    return sum === count;
  }

  isRowValid(state: PuzzleState, index: number) {
    const line = state.enabled.slice(index * this.w, (index + 1) * this.w);
    // Lines are read from the right-hand-side for some rules, so we must reverse
    line.reverse();

    return this.isLineValid(line, this.rowRules[index], this.rowCounts[index]);
  }

  isColValid(state: PuzzleState, index: number) {
    const line = state.enabled.filter((_, subIndex) => subIndex % this.w === index);

    return this.isLineValid(line, this.colRules[index], this.colCounts[index]);
  }

  static countContinents(state: PuzzleState) {
    return countContinents(state);
  }

  isSymmetryCorrect(state: PuzzleState) {
    if (this.globalFeatures.includes(GlobalFeature.FLIP_HORIZONTAL)) {
      const allRowsValid = allRows(state).every(row => isLineSymmetric(row));

      if (!allRowsValid) {
        return false;
      }
    }

    if (this.globalFeatures.includes(GlobalFeature.FLIP_VERTICAL)) {
      const allColsValid = allColumns(state).every(col => isLineSymmetric(col));

      if (!allColsValid) {
        return false;
      }
    }

    return true;
  }

  isStackedCorrectly(state: PuzzleState) {
    // Simple stacking
    if (this.globalFeatures.includes(GlobalFeature.STACKED)) {
      if (!stackedWithBaseline(state, Object.values(this.gridFeatures), this.h)) {
        return false;
      }
    }
    // Over-under stacking
    else if (this.globalFeatures.includes(GlobalFeature.STACKED_OU)) {
      const baselines = [];
      for (let i = 0; i <= this.h; i++) {
        baselines.push(i);
      }
      const features = Object.values(this.gridFeatures);
      const someBaselineValid = baselines.some(baseline => stackedWithBaseline(
        state,
        features,
        baseline,
      ));

      if (!someBaselineValid) return false;
    }
    // Double (both) stacking
    else if (this.globalFeatures.includes(GlobalFeature.STACKED_BOTH)) {
      const baselines = [];
      for (let i = 0; i <= this.h; i++) {
        baselines.push(i);
      }
      const features = Object.values(this.gridFeatures);
      const someBaselineValid = baselines.some(baseline => stackedWithBaseline(
        state,
        features,
        baseline,
        true,
      ));

      if (!someBaselineValid) return false;
    }

    return true;
  }

  getGridFeature(i: number, j: number): GridFeature | undefined {
    const index = i + j * this.w;

    return this.gridFeatures[index];
  }

  getAdjacentCount(i: number, j: number, state: PuzzleState): number {
    let count = 0;

    for (let di = -1; di <= 1; di++) {
      if (i + di < 0 || i + di >= this.w) {
        continue;
      }
      for (let dj = -1; dj <= 1; dj++) {
        if (j + dj < 0 || j + dj >= this.h) {
          continue;
        }

        if (state.enabled[i + di + this.w * (j + dj)]) {
          count++;
        }
      }
    }

    return count;
  }

  gridFeatureValid(i: number, j: number, state: PuzzleState): boolean {
    const feature = this.getGridFeature(i, j);

    if (!feature) {
      return true;
    }

    if (feature.kind === GridFeatureKind.NEARBY_COUNT) {
      if (this.getAdjacentCount(i, j, state) !== feature.value) {
        return false;
      }
    } else if (feature.kind === GridFeatureKind.FORCED) {
      if (state.enabled[i + this.w * j] !== !!feature.value) {
        return false;
      }
    } else if (feature.kind === GridFeatureKind.STACKED_STEP) {
      if (!state.enabled[i + this.w * j]) {
        return false;
      }
      // Since value should be 1 or -1
      const beneathIndex = i + this.w * (j + feature.value);
      if (state.enabled[beneathIndex]) {
        return false;
      }
    }

    return true;
  }

  isCountValid(state: PuzzleState) {
    if (!this.maxTotal && !this.minTotal) {
      return true;
    }

    const total = state.enabled.reduce((a, b) => a + (+b), 0);

    if (this.maxTotal && total > this.maxTotal) {
      return false;
    } else if (this.minTotal && total < this.minTotal) {
      return false;
    }

    return true;
  }

  totalRequirement(): string | undefined {
    if (this.minTotal && this.maxTotal) {
      if (this.minTotal === this.maxTotal) {
        return this.minTotal.toString();
      }

      return `${this.minTotal}-${this.maxTotal}`;
    } else if (this.minTotal) {
      return `≥${this.minTotal}`;
    } else if (this.maxTotal) {
      return `≤${this.maxTotal}`;
    }
  }

  isValid(state: PuzzleState): boolean {
    if (!this.isCountValid(state)) return false;

    const someRowWrong = allRows(state).some((row, i) => {
      return !this.isLineValid(row, this.rowRules[i], this.rowCounts[i]);
    });
    if (someRowWrong) {
      return false;
    }

    const someColumnWrong = allColumns(state).some((col, i) => {
      return !this.isLineValid(col, this.colRules[i], this.colCounts[i]);
    });
    if (someColumnWrong) {
      return false;
    }

    if (this.numContinents !== -1) {
      const continents = countContinents(state);

      if (continents !== this.numContinents) {
        return false;
      }
    }

    for (const key of Object.keys(this.gridFeatures)) {
      const feature = this.gridFeatures[key];

      if (!this.gridFeatureValid(feature.i, feature.j, state)) {
        return false;
      }
    }

    if (!this.isSymmetryCorrect(state)) {
      return false;
    }

    if (!this.isStackedCorrectly(state)) {
      return false;
    }

    return true;
  }

  getState(): PuzzleState {
    return this.state;
  }

  read(i: number, j: number): boolean {
    const index = i + j * this.w;

    return this.state.enabled[index];
  }

  toggle(i: number, j: number, status: boolean): PuzzleState {
    const index = i + j * this.w;
    const newState = {
      enabled: this.state.enabled.slice(),
      complete: false,
      w: this.w,
      h: this.h,
    };
    newState.enabled[index] = status;
    newState.complete = this.isValid(newState);

    this.state = newState;

    return this.state;
  }

  reset(): PuzzleState {
    const newState = {
      enabled: Array(this.w * this.h).fill(false),
      complete: false,
      w: this.w,
      h: this.h,
    };
    newState.complete = this.isValid(newState);

    this.state = newState;

    return this.state;
  }
}
