import type { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('h-10 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/75 px-3 text-sm outline-none transition placeholder:text-soft focus:border-[rgb(var(--brand))] focus:ring-2 focus:ring-flow-500/15', props.className)} />;
}
