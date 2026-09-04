import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FolderPlus, ListPlus, Moon, Search, Settings, Sun } from 'lucide-react';
import { navItems } from '../data/dashboard';
import { useFlow } from '../context/FlowContext';
import type { Page } from '../types/app';

export function CommandPalette({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState('');
  const { setPage, setSelectedProjectId, setProjects, setTasks, projects } = useFlow();
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((v) => !v); } if (e.key === 'Escape') setOpen(false); }; const onOpen = () => setOpen(true); window.addEventListener('keydown', onKey); window.addEventListener('flow:command', onOpen); return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('flow:command', onOpen); }; }, []);
  const actions = useMemo(() => [
    ...navItems.map((n) => ({ label: `Go to ${n.label}`, icon: n.icon, run: () => { setSelectedProjectId(null); setPage(n.label as Page); } })),
    { label: 'Create project', icon: FolderPlus, run: () => { setProjects((p) => [{ id: crypto.randomUUID(), name: 'Untitled project', description: 'New strategic initiative.', status: 'Planning', progress: 0, dueDate: new Date().toISOString().slice(0,10), members: ['alex'], owner: 'alex', budget: '$0' }, ...p]); setPage('Projects'); } },
    { label: 'Create task', icon: ListPlus, run: () => { setTasks((t) => [{ id: crypto.randomUUID(), title: 'Untitled task', projectId: projects[0]?.id ?? '', status: 'Backlog', priority: 'Medium', assignee: 'alex', dueDate: new Date().toISOString().slice(0,10), completed: false }, ...t]); setPage('Tasks'); } },
    { label: 'Open settings', icon: Settings, run: () => setPage('Settings') },
    { label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`, icon: theme === 'dark' ? Sun : Moon, run: onThemeToggle },
  ], [setPage, setProjects, setSelectedProjectId, setTasks, projects, theme, onThemeToggle]);
  const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));
  return <AnimatePresence>{open && <motion.div className="fixed inset-0 z-[90] bg-black/45 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}><motion.div role="dialog" aria-modal="true" aria-label="Command palette" className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] shadow-2xl" initial={{ opacity: 0, y: 18, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .96 }} onClick={(e) => e.stopPropagation()}><label className="flex items-center gap-3 border-b border-[rgb(var(--border))] px-4"><Search size={18} className="text-soft"/><input autoFocus value={query} onChange={e => setQuery(e.target.value)} className="h-14 w-full bg-transparent text-sm outline-none" placeholder="Search commands, pages, actions..."/><kbd className="rounded-md border border-[rgb(var(--border))] px-2 py-1 text-xs text-muted">Esc</kbd></label><div className="max-h-96 overflow-y-auto p-2">{filtered.map((a) => <button key={a.label} onClick={() => { a.run(); setOpen(false); setQuery(''); }} className="flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm transition hover:bg-flow-500/10 focus:bg-flow-500/10"><span className="grid h-9 w-9 place-items-center rounded-xl bg-flow-500/10 text-flow-700 dark:text-flow-300"><a.icon size={17}/></span>{a.label}</button>)}</div></motion.div></motion.div>}</AnimatePresence>;
}
