'use client';

import type { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

/** Faz as animações do framer-motion respeitarem `prefers-reduced-motion`. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
