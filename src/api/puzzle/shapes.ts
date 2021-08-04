import type { GridFeature, PuzzleState } from './types';
import { GridFeatureKind } from './types';

import { colorContinents } from './countContinents';

const ALLOW_LEFTOVERS = false;

type Shape = boolean[][];

const t = true, f = false;

const SHAPE_MAP: Partial<Record<GridFeatureKind, Shape[]>> = {
  [GridFeatureKind.SHAPE_SQUARE]: [[[t,t],[t,t]]],
  [GridFeatureKind.SHAPE_J]: [
    [[f,t],[f,t],[t,t]],
    [[t,f,f],[t,t,t]],
    [[t,t],[t,f],[t,f]],
    [[t,t,t],[f,f,t]],
  ],
  [GridFeatureKind.SHAPE_L]: [
    [[t,f],[t,f],[t,t]],
    [[t,t,t],[t,f,f]],
    [[t,t],[f,t],[f,t]],
    [[f,f,t],[t,t,t]],
  ],
  [GridFeatureKind.SHAPE_LONG]: [
    [[t,t,t,t]],
    [[t],[t],[t],[t]],
  ],
  [GridFeatureKind.SHAPE_T]: [
    [[t,t,t],[f,t,f]],
    [[f,t],[t,t],[f,t]],
    [[f,t,f],[t,t,t]],
    [[t,f],[t,t],[t,f]],
  ],
};

function colorShapes(
  sequence: number[],
  w: number,
  h: number,
  baseColor: number,
  shapes: GridFeature[],
  safeColor: number,
): boolean {
  if (shapes.length === 0) {
    if (ALLOW_LEFTOVERS) {
      return true;
    }

    const leftovers = sequence.some(v => v === baseColor);
    return !leftovers;
  }

  const allShapes: Shape[] = SHAPE_MAP[shapes[0].kind]!;

  if (!allShapes || !allShapes.length) {
    throw Error('Could not find the appropriate shape!');
  }

  const after = shapes.slice(1);

  const orientation = shapes[0].value;
  const shapeOptions: Shape[] = orientation === -1 ? allShapes : [allShapes[orientation]];

  for (const shape of shapeOptions) {
    const shapeW = shape[0].length;
    const shapeH = shape.length;

    for (let i = 0; i <= w - shapeW; i++) {
      for (let j = 0; j <= h - shapeH; j++) {
        let shapeValid = true;
        for (let di = 0; shapeValid && di < shapeW; di++) {
          for (let dj = 0; shapeValid && dj < shapeH; dj++) {
            if (shape[dj][di]) {
              const idx = i + di + (j + dj) * w;
              if (sequence[idx] !== baseColor) {
                shapeValid = false;
                continue;
              }

              sequence[idx] = safeColor;
            }
          }
        }

        if (shapeValid) {
          if (colorShapes(
            sequence,
            w,
            h,
            baseColor,
            after,
            safeColor + 1,
          )) {
            return true;
          }
        }

        // Reset safe colors [safeColor, ...) to baseColor
        for (let iii = 0; iii < sequence.length; iii++) {
          if (sequence[iii] >= safeColor) sequence[iii] = baseColor;
        }
      }
    }
  }

  return false;
}

function checkCluster(
  sequence: number[],
  w: number,
  h: number,
  color: number,
  shapes: GridFeature[],
  safeColor: number,
): boolean {
  return colorShapes(
    sequence,
    w,
    h,
    color,
    shapes,
    safeColor,
  );
}

export function checkShapes(state: PuzzleState, shapes: GridFeature[]): boolean[] {
  const sequence = state.enabled.map(v => +v);
  const safeColor = colorContinents(sequence, state.w, state.h) + 20;

  const results: (boolean | undefined)[] = shapes.map(() => undefined);

  const map: Record<number, GridFeature[]> = {};
  shapes.forEach((shape, index) => {
    const gridIndex = shape.i + shape.j * state.w;
    const color = sequence[gridIndex];

    if (color === 0) {
      results[index] = false;
      return;
    } else if (color === 1) {
      const msg = 'INVALID STATE! Coloring continents somehow ended with uncolored square.';
      throw Error(msg);
    }

    if (color in map) {
      map[color].push(shape);
    } else {
      map[color] = [shape];
    }
  });

  const colors = Object.keys(map).map(x => parseInt(x, 10));
  colors.sort();

  for (const color of colors) {
    if (!map[color]) {
      continue;
    }

    const clusterValid = checkCluster(
      sequence,
      state.w,
      state.h,
      color,
      map[color],
      safeColor + color,
    );

    for (const shape of map[color]) {
      const idx = shapes.findIndex(s => s.i === shape.i && s.j === shape.j);
      if (idx === -1) {
        throw Error('Could not find shape that must have existed previously');
      }

      results[idx] = clusterValid;
    }
  }

  const finalResults: boolean[] = results.map(r => {
    if (r === undefined) {
      throw Error('Did not get result for some subset of the errors');
    }

    return r;
  });

  return finalResults;
}
