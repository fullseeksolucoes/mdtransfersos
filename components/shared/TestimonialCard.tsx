'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
  index: number;
}

const isSOS = (s: string) => s.includes('Pneu') || s.includes('Bateria') || s.includes('SOS');

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  service,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="relative h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
        <div className="absolute top-4 right-4 text-primary/10">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-ink-700 mb-6 leading-relaxed">&ldquo;{content}&rdquo;</p>

        <div className={cn(
          'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4',
          isSOS(service)
            ? 'bg-red-50 text-red-600'
            : 'bg-primary/10 text-primary',
        )}>
          {service}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-ink-600 font-medium">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-ink-800">{name}</div>
            <div className="text-sm text-ink-500">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
