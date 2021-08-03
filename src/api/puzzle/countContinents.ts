import { PuzzleState } from './types';

function flood(sequence: number[], w: number, h: number , i: number, colour: number) {
  const queue = [i];

  while (queue.length) {
    const [v] = queue.splice(0, 1);
    if (sequence[v] === colour || sequence[v] === 0) {
      continue;
    }

    sequence[v] = colour;

    const x = v % w;
    if (x > 0) queue.push(v - 1);
    if (x < w-1) queue.push(v + 1);
    if (v >= w) queue.push(v - w);
    if (v < w * (h - 1)) queue.push(v + w);
  }
}

// Returns the number of continents
export function colorContinents(sequence: number[], w: number, h: number): number {
  let k = 0;
  sequence.forEach((v, index) => {
    if (v === 1) {
      // Use k+2 to avoid conflicting with 1
      flood(sequence, w, h, index, k + 2);
      k++;
    }
  });

  return k;
}

export function countContinents(state: PuzzleState): number {
  const sequence = state.enabled.map(v => +v);

  const numContinents = colorContinents(sequence, state.w, state.h);

  return numContinents;
}

export default countContinents;
