'use client';

import type { ElementType } from 'react';
import { cn } from '@/lib/utils';

export type ServiceVariant = 'ocean' | 'alert';

interface ServiceCardProps {
  icon: ElementType;
  title: string;
  description: string;
  tag: string;
  variant: ServiceVariant;
  delay?: number;
}

const variantStyles: Record<ServiceVariant, {
  tag: string;
  iconBox: string;
  iconColor: string;
  accentBar: string;
  hoverBorder: string;
  cornerTri: string;
}> = {
  ocean: {
    tag: 'bg-ocean-50 text-ocean-600 border-ocean-200',
    iconBox: 'bg-ocean-50 border-ocean-200',
    iconColor: 'text-ocean-600',
    accentBar: 'bg-ocean-500',
    hoverBorder: 'hover:border-ocean-500/40',
    cornerTri: 'border-t-ocean-500/10',
  },
  alert: {
    tag: 'bg-alert-50 text-alert-600 border-alert-200',
    iconBox: 'bg-alert-50 border-alert-200',
    iconColor: 'text-alert-600',
    accentBar: 'bg-alert-500',
    hoverBorder: 'hover:border-alert-500/40',
    cornerTri: 'border-t-alert-500/10',
  },
};

const delayMap: Record<number, string> = {
  0: 'reveal-delay-2',
  1: 'reveal-delay-3',
  2: 'reveal-delay-4',
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  tag,
  variant,
  delay = 0,
}: ServiceCardProps) {
  const styles = variantStyles[variant];
  const delayClass = delayMap[delay] || '';

  return (
    <div
      className={cn(
        'reveal card-lift group relative bg-white border border-ink-200 p-8 transition-all duration-500',
        styles.hoverBorder,
        delayClass,
      )}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={cn(
            'absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px]',
            styles.cornerTri,
          )}
        />
      </div>

      {/* Tag */}
      <div
        className={cn(
          'inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-medium tracking-widest uppercase mb-6 border',
          styles.tag,
        )}
      >
        {tag}
      </div>

      {/* Icon */}
      <div className="icon-frame mb-6">
        <div
          className={cn(
            'w-12 h-12 rounded-sm flex items-center justify-center border group-hover:scale-105 transition-transform duration-400',
            styles.iconBox,
          )}
        >
          <Icon
            size={22}
            className={cn(styles.iconColor, 'transition-all duration-300')}
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-ink-800 text-xl mb-3 group-hover:text-ink-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-ink-500 text-sm leading-relaxed group-hover:text-ink-600 transition-colors duration-300">
        {description}
      </p>

      {/* Bottom accent line */}
      <div
        className={cn(
          'mt-8 w-8 h-0.5 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500',
          styles.accentBar,
        )}
      />
    </div>
  );
}
