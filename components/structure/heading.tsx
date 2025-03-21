import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <div className={`${className} flex flex-col gap-3 py-6 md:py-8`}>{children}</div>
  );
}
