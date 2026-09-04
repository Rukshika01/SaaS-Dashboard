import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: T[]; value: T; onChange: (tab: T) => void }) {
  return <div className="flex flex-wrap gap-1 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]/70 p-1">{tabs.map((tab) => <button key={tab} onClick={() => onChange(tab)} className={cn('relative rounded-lg px-3 py-1.5 text-sm font-medium transition', value === tab ? 'text-[rgb(var(--text))]' : 'text-muted hover:text-[rgb(var(--text))]')}>{value === tab && <motion.span layoutId="tab-active" className="absolute inset-0 rounded-lg bg-[rgb(var(--surface))] shadow-sm" />}<span className="relative">{tab}</span></button>)}</div>;
}
