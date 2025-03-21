import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return <p className={`${className} md:text-md text-base leading-7`}>{children}</p>;
}
