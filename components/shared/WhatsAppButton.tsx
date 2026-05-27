'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, AlertTriangle, Car } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/lib/data';

interface WhatsAppButtonProps {
  className?: string;
  size?: 'md' | 'lg';
  label?: boolean;
  href?: string;
}

export default function WhatsAppButton({
  className,
  size = 'lg',
  label = false,
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sizeClasses =
    size === 'lg'
      ? 'w-16 h-16 shadow-xl'
      : 'w-14 h-14 shadow-lg';

  return (
    <div ref={ref} className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            <a
              href={site.whatsappTransferLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg ring-1 ring-black/5 transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Car size={18} />
              </span>
              <div className="text-left">
                <div className="text-sm font-medium text-ink-800">Transfer Executivo</div>
                <div className="text-xs text-ink-500">47 99995-9607</div>
              </div>
            </a>
            <a
              href={site.whatsappSOSLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg ring-1 ring-black/5 transition-all hover:bg-red-50 hover:shadow-xl"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-red-100 text-red-600">
                <AlertTriangle size={18} />
              </span>
              <div className="text-left">
                <div className="text-sm font-medium text-ink-800">Assistência SOS</div>
                <div className="text-xs text-ink-500">47 99677-1229</div>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'relative flex items-center justify-center rounded-full bg-[#25D366] text-white transition-shadow hover:shadow-2xl',
          sizeClasses,
          className,
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <MessageCircle className="size-7" />
        )}
      </motion.button>
    </div>
  );
}
