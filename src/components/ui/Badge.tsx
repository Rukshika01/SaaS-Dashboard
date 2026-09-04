import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

const styles = {
  neutral: 'bg-slate-500/10 text-muted ring-slate-500/15',
  success: 'bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 dark:text-emerald-300',
  warning: 'bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-300',
  danger: 'bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:text-rose-300',
};

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: keyof typeof styles }) {
  return <span className={cn('inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1', styles[tone])}>{children}</span>;
}
