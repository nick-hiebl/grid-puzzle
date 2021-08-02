import type { PuzzleState } from './types';

export function allRows(state: PuzzleState) {
  const rows = [];
  for (let i = 0; i < state.h; i++) {
    const line = state.enabled.slice(i * state.w, (i + 1) * state.w);
    // Lines are read from the right-hand-side for some rules, so we must reverse
    line.reverse();

    rows.push(line);
  }

  return rows;
}

export function allColumns(state: PuzzleState) {
  const cols = [];
  for (let i = 0; i < state.w; i++) {
    const line = state.enabled.filter((_, subIndex) => subIndex % state.w === i);

    cols.push(line);
  }

  return cols;
}
