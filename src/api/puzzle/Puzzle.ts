import countContinents from './countContinents';
import type { GridFeature, PuzzleDetails, PuzzleState } from './types';
import { EdgeClue, GridFeatureKind } from './types';

function readFallback(value: number | undefined, fallback = -1) {
  if (value === undefined) {
    return fallback;
  }

  return value;
}

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

export default class Puzzle {
  readonly n: number;

  state: PuzzleState;

  readonly colCounts: number[];
  readonly rowCounts: number[];
  readonly colRules: (EdgeClue | null)[];
  readonly rowRules: (EdgeClue | null)[];
  private readonly minTotal: number | undefined;
  private readonly maxTotal: number | undefined;
  readonly numContinents: number;
  readonly gridFeatures: Record<string, GridFeature>;

  constructor(details: PuzzleDetails) {
    const n = details.n;

    this.n = n;

    this.state = {
      enabled: Array(n * n).fill(false),
      complete: false,
      n,
    };

    this.colCounts = (details.colClues || Array(n).fill(null)).map(clueToCount);
    this.rowCounts = (details.rowClues || Array(n).fill(null)).map(clueToCount);

    this.colRules = (details.colClues || Array(n).fill(null)).map(clueToClue);
    this.rowRules = (details.rowClues || Array(n).fill(null)).map(clueToClue);

    if (this.colCounts.some(v => v < -1 || v > n)) {
      throw new Error('Invalid requirement forsome column ' + JSON.stringify(this.colCounts));
    }
    if (this.rowCounts.some(v => v < -1 || v > n)) {
      throw new Error('Invalid requirement forsome column ' + JSON.stringify(this.rowCounts));
    }

    if (details.totalActive) {
      this.maxTotal = this.minTotal = details.totalActive;
    } else {
      this.maxTotal = details.maxTotal;
      this.minTotal = details.minTotal;
    }

    this.numContinents = readFallback(details.numContinents);

    this.gridFeatures = {};
    for (const feature of details.gridFeatures || []) {
      const index = feature.i + feature.j * n;

      this.gridFeatures[index] = feature;
    }
  }

  isLineValid(line: boolean[], rule: EdgeClue | null, count: number): boolean {
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
    }

    if (count === -1) return true;

    const sum = line.reduce((a, b) => a + (+b), 0);

    return sum === count;
  }

  isRowValid(state: PuzzleState, index: number) {
    const line = state.enabled.slice(index * this.n, (index + 1) * this.n);

    return this.isLineValid(line, this.rowRules[index], this.rowCounts[index]);
  }

  isColValid(state: PuzzleState, index: number) {
    const line = state.enabled.filter((_, subIndex) => subIndex % this.n === index);

    return this.isLineValid(line, this.colRules[index], this.colCounts[index]);
  }

  static countContinents(state: PuzzleState) {
    return countContinents(state);
  }

  getGridFeature(i: number, j: number): GridFeature | undefined {
    const index = i + j * this.n;

    return this.gridFeatures[index];
  }

  getAdjacentCount(i: number, j: number, state: PuzzleState): number {
    let count = 0;

    for (let di = -1; di <= 1; di++) {
      if (i + di < 0 || i + di >= this.n) {
        continue;
      }
      for (let dj = -1; dj <= 1; dj++) {
        if (j + dj < 0 || j + dj >= this.n) {
          continue;
        }

        if (state.enabled[i + di + this.n * (j + dj)]) {
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
      if (state.enabled[i + this.n * j] !== !!feature.value) {
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

    for (let i = 0; i < this.n; i++) {
      if (!this.isRowValid(state, i)) return false;
      if (!this.isColValid(state, i)) return false;
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

    return true;
  }

  getState(): PuzzleState {
    return this.state;
  }

  read(i: number, j: number): boolean {
    const index = i + j * this.n;

    return this.state.enabled[index];
  }

  toggle(i: number, j: number, status: boolean): PuzzleState {
    const index = i + j * this.n;
    const newState = {
      enabled: this.state.enabled.slice(),
      complete: false,
      n: this.n,
    };
    newState.enabled[index] = status;
    newState.complete = this.isValid(newState);

    this.state = newState;

    return this.state;
  }

  reset(): PuzzleState {
    const newState = {
      enabled: Array(this.n * this.n).fill(false),
      complete: false,
      n: this.n,
    };
    newState.complete = this.isValid(newState);

    this.state = newState;

    return this.state;
  }
}
