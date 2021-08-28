export interface PageProps {
  links: React.ReactNode;
}

export interface PageInfo {
  title: string;
  description?: string;
  link: string;
  component: (props: PageProps) => JSX.Element;
  hidden?: boolean;
}
