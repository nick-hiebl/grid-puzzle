import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';

import type { DayInfo } from './types';

export const dayData: DayInfo[] = [
  {
    title: 'Day 1: The beginning',
    description: 'The first day',
    link: '/days/1',
    component: Day1,
  },
  {
    title: 'Day 2: Some variation',
    description: 'Adding a little variety/ambiguity',
    link: '/days/2',
    component: Day2,
  },
  {
    title: 'Day 3: A fuzzy number',
    description: 'No guidance on an island',
    link: '/days/3',
    component: Day3,
  },
  {
    title: 'Day 4: "Circle circle cross"',
    description: 'Whatever could it mean?',
    link: '/days/4',
    component: Day4,
  },
];
