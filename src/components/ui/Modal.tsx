import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export function Modal({ open, title, children, onClose }: { open: boolean; title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/45 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div role="dialog" aria-modal="true" aria-label={title} className="w-full max-w-lg rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 shadow-2xl" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }}>
          <div className="mb-5 flex items-center justify-between"><h2 className="text-lg font-semibold">{title}</h2><button onClick={onClose} className="rounded-xl p-2 text-muted hover:bg-black/5 dark:hover:bg-white/10" aria-label="Close modal"><X size={18} /></button></div>
          {children}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}
