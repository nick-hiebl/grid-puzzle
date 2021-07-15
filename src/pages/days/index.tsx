import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';

interface DayInfo {
  title: string;
  description?: string;
  link: string;
  component: React.ReactNode;
}

export const dayData: DayInfo[] = [
  {
    title: 'Day 1: the beginning',
    description: 'The first day',
    link: '/days/1',
    component: Day1,
  },
  {
    title: 'Day 2: some variation',
    description: 'Adding a little variety/ambiguity',
    link: '/days/2',
    component: Day2,
  },
  {
    title: 'Day 3: more ideas',
    description: 'Something something',
    link: '/days/3',
    component: Day3,
  },
];
