import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl`}
    >
      {children}
    </h1>
  );
}
