import type { SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn('h-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/75 px-3 text-sm outline-none focus:border-[rgb(var(--brand))] focus:ring-2 focus:ring-flow-500/15', props.className)} />;
}
