import { createContext, useContext, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, Trash2 } from 'lucide-react';

type Toast = { id: string; title: string; tone?: 'success' | 'info' | 'danger' };
type ToastContextValue = { toast: (title: string, tone?: Toast['tone']) => void };
const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Toast[]>([]);
  const value = useMemo(() => ({ toast: (title: string, tone: Toast['tone'] = 'success') => {
    const id = crypto.randomUUID(); setItems((prev) => [...prev, { id, title, tone }]); setTimeout(() => setItems((prev) => prev.filter((t) => t.id !== id)), 2600);
  }}), []);
  return <ToastContext.Provider value={value}>{children}<div className="fixed bottom-4 right-4 z-[100] space-y-2 sm:bottom-6 sm:right-6"><AnimatePresence>{items.map((t) => { const Icon = t.tone === 'danger' ? Trash2 : t.tone === 'info' ? Info : CheckCircle2; return <motion.div key={t.id} initial={{ opacity: 0, y: 18, x: 20, scale: .96 }} animate={{ opacity: 1, y: 0, x: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .96 }} transition={{ type: 'spring', stiffness: 420, damping: 30 }} className="flex min-w-64 items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/95 p-3 text-sm font-medium shadow-2xl shadow-slate-900/15 backdrop-blur-xl"><span className="grid h-8 w-8 place-items-center rounded-xl bg-flow-500/10 text-flow-600"><Icon size={17}/></span>{t.title}</motion.div>; })}</AnimatePresence></div></ToastContext.Provider>;
}
export function useToast() { const ctx = useContext(ToastContext); if (!ctx) throw new Error('useToast must be used inside ToastProvider'); return ctx; }
