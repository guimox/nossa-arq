import clsx from 'clsx';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={clsx(
        'scroll-m-20 text-lg font-light tracking-tight lg:text-4xl',
        className
      )}
    >
      {children}
    </h1>
  );
}
