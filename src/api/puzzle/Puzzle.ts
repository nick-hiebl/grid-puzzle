import countContinents from './countContinents';
import type { PuzzleDetails, PuzzleState } from './types';
import { EdgeClue } from './types';

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

export default class Puzzle {
  readonly n: number;

  state: PuzzleState;

  readonly colCounts: number[];
  readonly rowCounts: number[];
  readonly colRules: (EdgeClue | null)[];
  readonly rowRules: (EdgeClue | null)[];
  readonly totalActive: number;
  readonly numContinents: number;

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

    this.totalActive = readFallback(details.totalActive);
    this.numContinents = readFallback(details.numContinents);
  }

  isLineValid(line: boolean[], rule: EdgeClue | null, count: number): boolean {
    if (rule === EdgeClue.NO_TRIPLES) {
      if (hasTriples(line)) {
        return false;
      }
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

  isValid(state: PuzzleState): boolean {
    if (this.totalActive >= 0) {
      const numActive = state.enabled.reduce((a, b) => a + +b, 0);

      if (numActive !== this.totalActive) {
        return false;
      }
    }

    const colsValid = this.colCounts.every((count, index) => {
      const thisLine = state.enabled.filter((_, subIndex) => subIndex % this.n === index);

      return this.isLineValid(thisLine, this.colRules[index], count);
    });

    if (!colsValid) {
      return false;
    }

    const rowsValid = this.rowCounts.every((count, index) => {
      const thisLine = state.enabled.slice(index * this.n, (index + 1) * this.n);

      return this.isLineValid(thisLine, this.rowRules[index], count);
    });

    if (!rowsValid) {
      return false;
    }

    if (this.numContinents !== -1) {
      const continents = countContinents(state);

      if (continents !== this.numContinents) {
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
}
