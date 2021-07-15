import { PuzzleState } from './types';

function flood(sequence: number[], n: number, i: number, colour: number) {
  const queue = [i];

  while (queue.length) {
    const [v] = queue.splice(0, 1);
    if (sequence[v] === colour || sequence[v] === 0) {
      continue;
    }

    sequence[v] = colour;

    const x = v % n;
    if (x > 0) queue.push(v - 1);
    if (x < n-1) queue.push(v + 1);
    if (v >= n) queue.push(v - n);
    if (v < n * n - n) queue.push(v + n);
  }
}

export function countContinents(state: PuzzleState): number {
  const sequence = state.enabled.map(v => +v);
  let k = 0;

  sequence.forEach((v, index) => {
    if (v === 1) {
      // Use k+2 to avoid conflicting with 1
      flood(sequence, state.n, index, k + 2);
      k += 1;
    }
  });

  return k;
}

export default countContinents;
