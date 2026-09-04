import { motion } from 'framer-motion';

const colors = {
  brand: 'from-indigo-500 to-violet-500',
  blue: 'from-blue-500 to-cyan-400',
  green: 'from-emerald-500 to-teal-400',
  amber: 'from-amber-500 to-orange-400',
  violet: 'from-violet-500 to-fuchsia-400',
};

export function ProgressBar({ value, tone = 'brand' }: { value: number; tone?: keyof typeof colors }) {
  return <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10" aria-label={`Progress ${value}%`}><motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className={`h-full rounded-full bg-gradient-to-r ${colors[tone]}`} /></div>;
}
