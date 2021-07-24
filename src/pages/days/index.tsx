import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';
import Day5 from './day5';
import Day6 from './day6';
import Day7 from './day7';
import Day8 from './day8';
import Day9 from './day9';
import Day10 from './day10';
import Day11 from './day11';
import Day12 from './day12';
import Day13 from './day13';

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
  {
    title: 'Day 5: Time for some leeway',
    description: 'Does this help or hinder?',
    link: '/days/5',
    component: Day5,
  },
  {
    title: 'Day 6: Not what we saw before',
    description: 'This looks a little familiar',
    link: '/days/6',
    component: Day6,
  },
  {
    title: 'Day 7: Counting... squares?',
    description: 'I thought we already had enough squares',
    link: '/days/7',
    component: Day7,
  },
  {
    title: 'Day 8: Numbers on the board',
    description: 'More counting?',
    link: '/days/8',
    component: Day8,
  },
  {
    title: 'Day 9: Time for some force',
    description: 'Why did I commit to making descriptions for these?',
    link: '/days/9',
    component: Day9,
  },
  {
    title: "Day 10: Well that's not it",
    description: 'Perhaps not this one',
    link: '/days/10',
    component: Day10,
  },
  {
    title: 'Day 11: A puzzle you may have seen before',
    description: 'More like NOTograms',
    link: '/days/11',
    component: Day11,
  },
  {
    title: 'Day 12: Aspect ratio',
    description: 'Who needs squares anyway?',
    link: '/days/12',
    component: Day12,
    hidden: true,
  },
  {
    title: 'Day 13: Looking in the mirror',
    description: 'Time to think',
    link: '/days/13',
    component: Day13,
    hidden: true,
  },
];

if (window.location.host.includes('127')) {
  for (const day of dayData) {
    day.hidden = false;
  }
}
