'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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
  href = site.whatsappLink,
}: WhatsAppButtonProps) {
  const sizeClasses =
    size === 'lg'
      ? 'w-16 h-16 shadow-xl'
      : 'w-14 h-14 shadow-lg';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white transition-shadow hover:shadow-2xl',
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
      {label ? (
        <span className="flex items-center gap-2 px-6">
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm font-medium">WhatsApp</span>
        </span>
      ) : (
        <MessageCircle className="w-7 h-7" />
      )}
    </motion.a>
  );
}
