import { BarChart3, FolderKanban, LayoutDashboard, ListTodo, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFlow } from '../../context/FlowContext';
import type { Page } from '../../types/app';

const items: Array<{ label: Page; icon: typeof LayoutDashboard }> = [
  { label: 'Dashboard', icon: LayoutDashboard }, { label: 'Projects', icon: FolderKanban }, { label: 'Tasks', icon: ListTodo }, { label: 'Analytics', icon: BarChart3 }, { label: 'Messages', icon: MessageSquareText },
];
export function BottomNav() { const { page, setPage, setSelectedProjectId } = useFlow(); return <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/92 p-1 shadow-2xl backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">{items.map((it) => { const Icon = it.icon; const active = page === it.label; return <button key={it.label} onClick={() => { setSelectedProjectId(null); setPage(it.label); }} className="relative grid min-h-12 place-items-center rounded-xl text-xs text-muted">{active && <motion.span layoutId="bottom-active" className="absolute inset-0 rounded-xl bg-flow-500/10"/>}<Icon size={19} className={`relative ${active ? 'text-flow-600 dark:text-flow-300' : ''}`}/><span className="sr-only">{it.label}</span></button>; })}</nav>; }
