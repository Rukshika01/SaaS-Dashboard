import type { LucideIcon } from 'lucide-react';
import { Button } from './Button';

export function EmptyState({ icon: Icon, title, body, action, onAction }: { icon: LucideIcon; title: string; body: string; action?: string; onAction?: () => void }) {
  return <div className="grid place-items-center rounded-2xl border border-dashed border-[rgb(var(--border))] p-10 text-center"><div className="grid h-12 w-12 place-items-center rounded-xl bg-flow-500/10 text-flow-700 dark:text-flow-300"><Icon size={24} /></div><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-1 max-w-sm text-sm text-muted">{body}</p>{action && <Button onClick={onAction} className="mt-5">{action}</Button>}</div>;
}
