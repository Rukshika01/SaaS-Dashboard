import { Bell, Command, Menu, Moon, Search, Sun } from 'lucide-react';
import { Button } from '../ui/Button';

export function TopNav({ theme, onThemeToggle, onMenu }: { theme: 'light' | 'dark'; onThemeToggle: () => void; onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button onClick={onMenu} className="rounded-xl p-2 text-muted hover:bg-black/5 dark:hover:bg-white/10 lg:hidden" aria-label="Open navigation">
          <Menu size={21} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-soft">Workspace</p>
          <h1 className="truncate text-lg font-semibold tracking-tight">Dashboard</h1>
        </div>
        <label className="hidden h-10 w-full max-w-sm items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/72 px-3 text-sm text-muted shadow-sm md:flex">
          <Search size={17} />
          <input className="w-full bg-transparent outline-none placeholder:text-soft" placeholder="Search projects, tasks, people..." />
        </label>
        <Button variant="surface" className="hidden md:inline-flex" aria-label="Open command palette"><Command size={16} />⌘K</Button>
        <Button variant="surface" aria-label="Notifications"><Bell size={17} /></Button>
        <Button variant="surface" onClick={onThemeToggle} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</Button>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-950" aria-label="Alex Morgan avatar">A</div>
      </div>
    </header>
  );
}
