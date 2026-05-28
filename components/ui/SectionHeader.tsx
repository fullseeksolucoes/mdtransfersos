'use client';

import { cn } from '@/lib/utils';
import Reveal from './Reveal';

type HeaderAccent = 'ocean' | 'executive' | 'emergency' | 'ink' | 'primary';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  dark?: boolean;
  accent?: HeaderAccent;
  className?: string;
  animated?: boolean;
  delay?: number;
}

const accentMap: Record<HeaderAccent, { line: string; text: string }> = {
  ocean: { line: 'bg-ocean-500/60', text: 'text-ocean-600' },
  executive: { line: 'bg-executive/60', text: 'text-executive' },
  emergency: { line: 'bg-emergency/60', text: 'text-emergency' },
  ink: { line: 'bg-ink-300', text: 'text-ink-500' },
  primary: { line: 'bg-primary/40', text: 'text-primary' },
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  accent = 'ocean',
  className = '',
  animated = true,
  delay = 0,
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  const accentColors = accentMap[accent];
  const titleColor = dark ? 'text-foreground' : 'text-ink-800';
  const subtitleColor = dark ? 'text-muted-foreground/80' : 'text-ink-500';

  const content = (
    <header className={cn(isCenter && 'text-center', className)}>
      <div className={cn('flex items-center gap-3 mb-4', isCenter && 'justify-center')}>
        {isCenter && <div className={cn('w-6 h-px', accentColors.line)} />}
        {!isCenter && <div className={cn('w-6 h-px', accentColors.line)} />}
        <span className={cn('text-xs font-medium tracking-[0.3em] uppercase', accentColors.text)}>
          {eyebrow}
        </span>
        {isCenter && <div className={cn('w-6 h-px', accentColors.line)} />}
      </div>
      <h2 className={cn('font-display font-extrabold text-4xl md:text-6xl tracking-tight', titleColor)}>
        {title}
        <br />
        <span className={subtitleColor}>{subtitle}</span>
      </h2>
    </header>
  );

  if (animated) {
    return <Reveal delay={delay}>{content}</Reveal>;
  }

  return content;
}
