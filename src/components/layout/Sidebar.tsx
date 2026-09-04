import { ChevronLeft, ChevronsRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../../data/dashboard';
import { useFlow } from '../../context/FlowContext';
import type { Page } from '../../types/app';
import { cn } from '../../utils/cn';

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const { page, setPage, setSelectedProjectId } = useFlow();
  return (
    <motion.aside animate={{ width: collapsed ? 84 : 280 }} transition={{ type: 'spring', stiffness: 260, damping: 32 }} className="sticky top-0 hidden h-screen shrink-0 border-r border-[rgb(var(--border))] bg-[rgb(var(--surface))]/72 p-4 backdrop-blur-xl lg:flex lg:flex-col" aria-label="Main sidebar">
      <div className="flex items-center justify-between gap-3 px-1"><div className="flex items-center gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl brand-gradient text-base font-bold text-white shadow-lg shadow-flow-700/20">F</div><AnimatePresence>{!collapsed && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><p className="font-semibold tracking-tight">Flow</p><p className="text-xs text-muted">Team workspace</p></motion.div>}</AnimatePresence></div><button onClick={onToggle} className="rounded-lg p-2 text-muted transition hover:bg-black/5 hover:text-[rgb(var(--text))] dark:hover:bg-white/10" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? <ChevronsRight size={18} /> : <ChevronLeft size={18} />}</button></div>
      <nav className="mt-8 space-y-1" aria-label="Primary navigation">{navItems.map((item) => { const Icon = item.icon; const active = page === item.label; return <button key={item.label} onClick={() => { setSelectedProjectId(null); setPage(item.label as Page); }} className={cn('group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition', active ? 'bg-indigo-500/8 text-indigo-700 dark:text-indigo-300' : 'text-muted hover:bg-indigo-500/6 hover:text-[rgb(var(--text))] dark:hover:bg-white/8')} title={collapsed ? item.label : undefined}>{active && <motion.span layoutId="active-nav" className="absolute inset-y-1 left-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />}<Icon size={19} className="shrink-0" /><AnimatePresence>{!collapsed && <motion.span initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -4 }}>{item.label}</motion.span>}</AnimatePresence></button>; })}</nav>
      <div className="mt-auto rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]/70 p-3"><div className="flex items-center gap-3"><div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">A<span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[rgb(var(--surface))] bg-emerald-500" /></div><AnimatePresence>{!collapsed && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-w-0"><p className="truncate text-sm font-semibold">Alex Morgan</p><p className="text-xs text-muted">Product Lead</p></motion.div>}</AnimatePresence></div></div>
    </motion.aside>
  );
}
