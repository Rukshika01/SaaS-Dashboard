import { Bell, CheckCheck } from 'lucide-react';
import { useFlow } from '../context/FlowContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';

export function Notifications() {
  const { notifications, setNotifications } = useFlow();
  return <div className="mx-auto max-w-4xl space-y-6"><div className="flex items-end justify-between"><div><h2 className="text-3xl font-semibold tracking-tight">Notifications</h2><p className="text-muted">Task updates, mentions, deadlines, and team activity.</p></div><Button onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}><CheckCheck size={17}/>Mark all read</Button></div>{notifications.length === 0 ? <EmptyState icon={Bell} title="No notifications" body="You're all caught up."/> : <section className="surface-card rounded-2xl p-3">{notifications.map(n => <article key={n.id} className={`flex items-start justify-between gap-4 rounded-xl p-4 ${!n.read ? 'bg-flow-500/10' : ''}`}><div><div className="flex items-center gap-2"><h3 className="font-semibold">{n.title}</h3><Badge>{n.type}</Badge></div><p className="mt-1 text-sm text-muted">{n.body}</p><p className="mt-2 text-xs text-soft">{n.time}</p></div><Button variant="ghost" onClick={() => setNotifications(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x))}>{n.read ? 'Read' : 'Mark read'}</Button></article>)}</section>}</div>;
}
