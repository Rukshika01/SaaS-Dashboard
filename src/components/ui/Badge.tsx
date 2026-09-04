import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

const styles = {
  neutral: 'bg-indigo-500/8 text-indigo-700 ring-indigo-500/15 dark:text-indigo-300',
  success: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300',
  warning: 'bg-amber-500/12 text-amber-800 ring-amber-500/22 dark:text-amber-300',
  danger: 'bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:text-rose-300',
};

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: keyof typeof styles }) {
  return <span className={cn('inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1', styles[tone])}>{children}</span>;
}
