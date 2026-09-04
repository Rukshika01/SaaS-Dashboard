import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} whileHover={{ y: -4, scale: 1.005 }} transition={{ type: 'spring', stiffness: 360, damping: 30 }} className={cn('surface-card group rounded-2xl p-5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-black/20', className)}>{children}</motion.div>;
}
