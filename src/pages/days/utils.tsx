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
  }
}
