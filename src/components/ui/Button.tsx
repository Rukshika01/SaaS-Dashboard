import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'surface'; children: ReactNode; loading?: boolean; success?: boolean };

export function Button({ className, variant = 'surface', children, loading, success, disabled, ...props }: ButtonProps) {
  return <button disabled={disabled || loading} className={cn('inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-flow-500/25', variant === 'primary' && 'brand-gradient text-white shadow-lg shadow-flow-700/20 hover:brightness-105', variant === 'ghost' && 'text-muted hover:bg-black/5 hover:text-[rgb(var(--text))] dark:hover:bg-white/8', variant === 'surface' && 'border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/80 text-[rgb(var(--text))] shadow-sm hover:bg-[rgb(var(--surface-raised))] hover:shadow-md', className)} {...props}>{loading ? <Loader2 size={16} className="animate-spin"/> : success ? <Check size={16}/> : null}{children}</button>;
}
