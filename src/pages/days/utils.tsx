import React from 'react';

import { Link } from 'react-router-dom';

import { dayData } from './index';

export const DayLink = (props: { index: number; children?: React.ReactNode }) => {
  const { index, children } = props;
  const { link, title } = dayData[index];

  if (children) {
    return <Link to={link}>{children}</Link>;
  }

  return <Link to={link}>{title}</Link>;
}
