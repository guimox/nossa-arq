import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <div className="flex flex-col gap-3 py-2">{children}</div>;
}
