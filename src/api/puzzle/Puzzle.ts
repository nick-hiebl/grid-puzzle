import countContinents from './countContinents';
import type { PuzzleDetails, PuzzleState } from './types';

function readFallback(value: number | undefined, fallback = -1) {
  if (value === undefined) {
    return fallback;
  }

  return value;
}

export default class Puzzle {
  readonly n: number;

  state: PuzzleState;

  readonly colCounts: number[];
  readonly rowCounts: number[];
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

    this.colCounts = details.colCounts || Array(n).fill(-1);
    this.rowCounts = details.rowCounts || Array(n).fill(-1);
    if (this.colCounts.some(v => v < -1 || v > n)) {
      throw new Error('Invalid requirement forsome column ' + JSON.stringify(this.colCounts));
    }
    if (this.rowCounts.some(v => v < -1 || v > n)) {
      throw new Error('Invalid requirement forsome column ' + JSON.stringify(this.rowCounts));
    }

    this.totalActive = readFallback(details.totalActive);
    this.numContinents = readFallback(details.numContinents);
  }

  isValid(state: PuzzleState): boolean {
    if (this.totalActive >= 0) {
      const numActive = state.enabled.reduce((a, b) => a + +b, 0);

      if (numActive !== this.totalActive) {
        return false;
      }
    }

    const colsValid = this.colCounts.every((count, index) => {
      if (count === -1) return true;

      const inThisCol = state.enabled.filter((_, subIndex) => subIndex % this.n === index);
      const sum = inThisCol.reduce((a, b) => a + +b, 0);

      return sum === count;
    });

    if (!colsValid) {
      return false;
    }

    const rowsValid = this.rowCounts.every((count, index) => {
      if (count === -1) return true;

      const inThisRow = state.enabled.slice(index * this.n, (index + 1) * this.n);
      const sum = inThisRow.reduce((a, b) => a + (+b), 0);

      return sum === count;
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
