import React from 'react';

import { Link } from 'react-router-dom';

import { dayData } from './index';

import { GridFeature, GridFeatureKind } from '../../api/puzzle/types';

export const DayLink = (props: { index: number; children?: React.ReactNode }) => {
  const { index, children } = props;
  const { link, title } = dayData[index];

  if (children) {
    return <Link to={link}>{children}</Link>;
  }

  return <Link to={link}>{title}</Link>;
}

export function near(i: number, j: number, count: number): GridFeature {
  return {
    kind: GridFeatureKind.NEARBY_COUNT,
    i,
    j,
    value: count,
  };
}

export function forced(i: number, j: number, on: boolean): GridFeature {
  return {
    kind: GridFeatureKind.FORCED,
    i,
    j,
    value: +on,
  };
}

export function step(i: number, j: number, up = true): GridFeature {
  return {
    kind: GridFeatureKind.STACKED_STEP,
    i,
    j,
    value: up ? 1 : -1,
  };
}

export function L(i: number, j: number, ori = 0) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_L,
    value: ori,
  };
}

export function J(i: number, j: number, ori = 0) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_J,
    value: ori,
  };
}

export function R(i: number, j: number, ori = 0) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_R,
    value: ori,
  };
}

export function SQ(i: number, j: number, ori = 0) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_SQUARE,
    value: ori,
  };
}

export function T(i: number, j: number, ori = 0) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_T,
    value: ori,
  };
}

export function LONG(i: number, j: number, ori = 0) {
  return {
    i, j,
    kind: GridFeatureKind.SHAPE_LONG,
    value: ori,
  };
}

export function groupSpec(shape: number, count: number) {
  return {
    shape,
    count,
  };
}

export function group(i: number, j: number, shape: number) {
  return {
    i, j,
    kind: GridFeatureKind.GROUP,
    value: shape,
  };
}
