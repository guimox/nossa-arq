import clsx from 'clsx';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: MainProps) {
  return (
    <h1
      className={clsx(
        'scroll-m-20 text-4xl font-light tracking-tight lg:text-8xl',
        className
      )}
    >
      {children}
    </h1>
  );
}
