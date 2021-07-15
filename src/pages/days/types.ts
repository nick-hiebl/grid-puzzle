export interface DayProps {
  links: React.ReactNode;
}

export interface DayInfo {
  title: string;
  description?: string;
  link: string;
  component: (props: DayProps) => JSX.Element;
}
