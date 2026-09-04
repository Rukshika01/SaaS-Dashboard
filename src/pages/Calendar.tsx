import { useMemo, useState } from 'react';
import { CalendarDays, Plus } from 'lucide-react';
import { useFlow } from '../context/FlowContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';

export function Calendar() {
  const { events, setEvents, projects } = useFlow();
  const [view, setView] = useState<'Month' | 'Week'>('Month');
  const days = useMemo(() => Array.from({ length: view === 'Month' ? 30 : 7 }, (_, i) => `2026-09-${String(i + 1).padStart(2, '0')}`), [view]);
  return <div className="mx-auto max-w-7xl space-y-6"><div className="flex items-end justify-between"><div><h2 className="text-3xl font-semibold tracking-tight">Calendar</h2><p className="text-muted">Deadlines, meetings, project milestones, and task timing.</p></div><Button variant="primary" onClick={() => setEvents(prev => [{ id: crypto.randomUUID(), title: 'New planning block', date: '2026-09-20', type: 'Meeting' }, ...prev])}><Plus size={17}/>Add event</Button></div><Tabs tabs={['Month','Week']} value={view} onChange={setView}/>{events.length === 0 ? <EmptyState icon={CalendarDays} title="No calendar events" body="Add meetings, milestones, or deadlines." action="Add event"/> : <div className="grid gap-6 lg:grid-cols-[1fr_320px]"><Card><div className="grid grid-cols-7 gap-2">{days.map(day => <button key={day} className="min-h-28 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface-raised))]/40 p-2 text-left transition hover:border-flow-400"><span className="text-sm font-medium">{Number(day.slice(-2))}</span><div className="mt-2 space-y-1">{events.filter(e => e.date === day).map(e => <div key={e.id} className="truncate rounded-lg bg-flow-500/10 px-2 py-1 text-xs text-flow-700 dark:text-flow-300">{e.title}</div>)}</div></button>)}</div></Card><aside className="surface-card rounded-2xl p-5"><h3 className="font-semibold">Upcoming</h3><div className="mt-4 space-y-3">{events.map(e => <div key={e.id} className="rounded-xl border border-[rgb(var(--border))] p-3"><div className="flex justify-between gap-3"><p className="font-medium">{e.title}</p><Badge>{e.type}</Badge></div><p className="mt-1 text-sm text-muted">{e.date} · {projects.find(p => p.id === e.projectId)?.name ?? 'General'}</p></div>)}</div></aside></div>}</div>;
}
