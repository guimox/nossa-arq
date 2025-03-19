import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Subtitle({ children, className }: SubtitleProps) {
  return (
    <h3 className={`${className} scroll-m-20 text-lg tracking-tight lg:text-2xl`}>
      {children}
    </h3>
  );
}
