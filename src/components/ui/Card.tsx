import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
      className={cn('surface-card rounded-2xl p-5', className)}
    >
      {children}
    </motion.div>
  );
}
