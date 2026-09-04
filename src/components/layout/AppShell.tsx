import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { navItems } from '../../data/dashboard';
import { useFlow } from '../../context/FlowContext';
import type { Page } from '../../types/app';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { CommandPalette } from '../CommandPalette';
import { BottomNav } from './BottomNav';
import { Logo } from '../ui/Logo';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { setPage, setSelectedProjectId } = useFlow();
  return <div className="min-h-screen lg:flex"><Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} /><AnimatePresence>{mobileOpen && <motion.div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)}><motion.div className="h-full w-80 bg-[rgb(var(--surface))] p-4" initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} onClick={(event) => event.stopPropagation()}><div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-3"><Logo /><span className="font-semibold">Flow</span></div><button className="rounded-xl p-2 text-muted" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={20} /></button></div><nav className="space-y-1">{navItems.map((item) => <button key={item.label} onClick={() => { setSelectedProjectId(null); setPage(item.label as Page); setMobileOpen(false); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-black/5 dark:hover:bg-white/10"><item.icon size={19} />{item.label}</button>)}</nav></motion.div></motion.div>}</AnimatePresence><div className="min-w-0 flex-1"><TopNav theme={theme} onThemeToggle={toggleTheme} onMenu={() => setMobileOpen(true)} /><CommandPalette theme={theme} onThemeToggle={toggleTheme} /><main className="px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-8">{children}</main><BottomNav /></div></div>;
}
