import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
  id?: string;
  fullWidth?: boolean;
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
  id,
  fullWidth = false,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'mx-auto w-full px-6 md:px-12 lg:px-16',
        !fullWidth && 'max-w-7xl',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
