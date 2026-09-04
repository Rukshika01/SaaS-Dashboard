import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'surface';
  children: ReactNode;
};

export function Button({ className, variant = 'surface', children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition active:scale-[0.98]',
        variant === 'primary' && 'brand-gradient text-white shadow-lg shadow-flow-700/20 hover:brightness-105',
        variant === 'ghost' && 'text-muted hover:bg-black/5 hover:text-[rgb(var(--text))] dark:hover:bg-white/8',
        variant === 'surface' && 'border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/80 text-[rgb(var(--text))] hover:bg-[rgb(var(--surface-raised))]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
