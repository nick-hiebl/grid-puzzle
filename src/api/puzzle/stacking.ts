import type { GridFeature, PuzzleState } from './types';
import { GridFeatureKind } from './types';
import { allColumns } from './utils';

function enumerate<T>(list: T[]): [T, number][] {
  return list.map((item, index) => [item, index]);
}

function colCheck(column: boolean[], features: GridFeature[]): { valid: boolean; base: boolean} {
  if (!column.length) {
    return {
      valid: true,
      base: false,
    };
  }

  const baseRequired = column[0];
  let isSolid = baseRequired;

  for (const [square, j] of enumerate(column)) {
    if (square && !isSolid) {
      const feature = !!features.find(f => f.j === j);
      if (feature) {
        isSolid = true;
        continue;
      }

      return {
        valid: false,
        base: baseRequired,
      };
    } else if (!square) {
      isSolid = false;
    }
  }

  return {
    valid: true,
    base: baseRequired,
  }
}

export function stackedWithBaseline(
  state: PuzzleState,
  features: GridFeature[],
  baseline: number,
  allowBoth?: boolean,
): boolean {
  const steps = features.filter(f => f.kind === GridFeatureKind.STACKED_STEP);
  for (const [column, i] of enumerate(allColumns(state))) {
    const columnSteps = steps.filter(f => f.i === i);
    const above = column.slice(0, baseline);
    // Process line baseline-up
    above.reverse();
    const below = column.slice(baseline);

    const { valid: aboveValid, base: aboveBase } = colCheck(
      above,
      columnSteps.filter(f => f.j < baseline).map(f => ({ ...f, j: baseline - f.j - 1 })),
    );

    if (!aboveValid) return false;

    const { valid: belowValid, base: belowBase } = colCheck(
      below,
      columnSteps.filter(f => f.j < baseline).map(f => ({ ...f, j: f.j - baseline })),
    );

    if (!belowValid) return false;

    if (!allowBoth) {
      if (aboveBase && belowBase) {
        return false;
      }
    }
  }

  return true;
}
