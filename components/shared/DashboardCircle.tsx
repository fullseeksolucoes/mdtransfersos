'use client';

import { motion } from 'framer-motion';

export default function DashboardCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.55 }}
      className="relative aspect-square max-w-sm ml-auto"
    >
      <div className="absolute inset-0 rounded-full border border-hairline">
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="absolute inset-8 rounded-full border border-hairline/50">
        <motion.svg
          className="absolute inset-0 w-full h-full -rotate-90"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="8 12"
            className="text-gold/30"
          />
        </motion.svg>
      </div>

      <div className="absolute inset-16 rounded-full bg-surface/60 backdrop-blur-xl border border-hairline flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl font-bold text-gold"
          >
            24/7
          </motion.div>
          <div className="text-xs text-muted-foreground mt-1">Sempre Pronto</div>
        </div>
      </div>

      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-4 right-4 p-3 bg-surface/80 backdrop-blur border border-hairline rounded-xl"
      >
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-8 left-4 p-3 bg-surface/80 backdrop-blur border border-hairline rounded-xl"
      >
        <svg className="w-5 h-5 text-sos" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [-3, 7, -3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 -left-4 p-3 bg-surface/80 backdrop-blur border border-hairline rounded-xl"
      >
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
