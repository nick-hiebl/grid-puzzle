import { useEffect } from 'react';

function useTitle(title: string) {
  useEffect(() => {
    if (document.URL.includes('localhost')) {
      document.title = `(local) ${title}`;
    } else {
      document.title = title;
    }
  }, [title]);
}

export const Title = (props: { title: string }) => {
  useTitle(props.title || 'Grid puzzle');

  return null;
}
