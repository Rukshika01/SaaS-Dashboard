import { motion } from 'framer-motion';
import { CalendarClock, Sparkles } from 'lucide-react';
import { ProductivityChart } from '../components/charts/ProductivityChart';
import { Sparkline } from '../components/charts/Sparkline';
import { AvatarStack } from '../components/ui/AvatarStack';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { activities, deadlines, kpis, projects } from '../data/dashboard';
import { useCountUp } from '../hooks/useCountUp';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

function statusTone(status: string) {
  if (status === 'On track') return 'success';
  if (status === 'At risk') return 'danger';
  if (status === 'Planning') return 'warning';
  return 'neutral';
}

function KpiCard({ kpi }: { kpi: (typeof kpis)[number] }) {
  const Icon = kpi.icon;
  const value = useCountUp(kpi.value);
  return (
    <Card className="overflow-hidden">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-flow-500/10 text-flow-700 dark:text-flow-300"><Icon size={21} /></div>
        <Sparkline data={kpi.spark} />
      </div>
      <div className="mt-5">
        <p className="text-sm font-medium text-muted">{kpi.label}</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight">{value}{kpi.suffix}</p>
        <p className="mt-3 text-sm text-muted"><span className="font-semibold text-emerald-600 dark:text-emerald-300">{kpi.change}</span> {kpi.detail}</p>
      </div>
    </Card>
  );
}

export function Dashboard() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-7xl space-y-6">
      <motion.section variants={item} className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]/74 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8">
        <div className="absolute right-8 top-6 hidden h-32 w-32 rounded-full bg-flow-500/10 blur-3xl sm:block" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface-raised))]/70 px-3 py-1 text-xs font-medium text-muted"><Sparkles size={14} /> Monday planning digest</div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Good morning, Alex 👋</h2>
            <p className="mt-2 max-w-2xl text-muted">Here's what's happening with your projects today.</p>
          </div>
          <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]/70 p-4">
            <p className="text-sm text-muted">Team focus score</p>
            <p className="mt-1 text-2xl font-semibold">87%</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={container} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => <motion.div variants={item} key={kpi.label}><KpiCard kpi={kpi} /></motion.div>)}
      </motion.section>

      <div className="grid gap-6 lg:grid-cols-12">
        <motion.section variants={item} className="surface-card rounded-2xl p-5 lg:col-span-7">
          <div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-semibold">Project overview</h2><p className="text-sm text-muted">Critical initiatives moving this week.</p></div></div>
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface-raised))]/50 p-4 transition hover:bg-[rgb(var(--surface-raised))]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div><h3 className="font-semibold">{project.name}</h3><p className="mt-1 text-sm text-muted">{project.description}</p></div>
                  <Badge tone={statusTone(project.status)}>{project.status}</Badge>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm"><span className="text-muted">Progress</span><span className="font-medium">{project.progress}%</span></div>
                <div className="mt-2"><ProgressBar value={project.progress} /></div>
                <div className="mt-4 flex items-center justify-between"><AvatarStack members={project.members} /><p className="flex items-center gap-1.5 text-sm text-muted"><CalendarClock size={15} />{project.dueDate}</p></div>
              </article>
            ))}
          </div>
        </motion.section>
        <ProductivityChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <motion.section variants={item} className="surface-card rounded-2xl p-5 lg:col-span-5">
          <h2 className="text-lg font-semibold">Recent activity</h2>
          <div className="mt-5 space-y-4">
            {activities.map((activity) => (
              <div key={`${activity.user}-${activity.time}`} className="flex gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">{activity.avatar}</div>
                <p className="text-sm leading-6"><span className="font-semibold">{activity.user}</span> <span className="text-muted">{activity.action}</span> <span className="font-medium">“{activity.item}”</span><br /><span className="text-xs text-soft">{activity.context} · {activity.time}</span></p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="surface-card rounded-2xl p-5 lg:col-span-7">
          <h2 className="text-lg font-semibold">Upcoming deadlines</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-soft"><tr><th className="pb-3 font-medium">Task</th><th className="pb-3 font-medium">Project</th><th className="pb-3 font-medium">Due</th><th className="pb-3 font-medium">Priority</th><th className="pb-3 font-medium">Assignee</th></tr></thead>
              <tbody className="divide-y divide-[rgb(var(--border))]">{deadlines.map((deadline) => <tr key={deadline.task}><td className="py-3 font-medium">{deadline.task}</td><td className="py-3 text-muted">{deadline.project}</td><td className="py-3 text-muted">{deadline.due}</td><td className="py-3"><Badge tone={deadline.priority === 'Urgent' ? 'danger' : deadline.priority === 'High' ? 'warning' : 'neutral'}>{deadline.priority}</Badge></td><td className="py-3 text-muted">{deadline.assignee}</td></tr>)}</tbody>
            </table>
          </div>
        </motion.section>
      </div>

      <motion.section variants={item}>
        <div className="mb-4"><h2 className="text-lg font-semibold">Recent projects</h2><p className="text-sm text-muted">A focused view of current delivery health.</p></div>
        <div className="grid gap-4 md:grid-cols-3">{projects.map((project) => <Card key={project.name}><div className="flex items-start justify-between gap-3"><h3 className="font-semibold">{project.name}</h3><Badge tone={statusTone(project.status)}>{project.status}</Badge></div><p className="mt-2 text-sm text-muted">{project.description}</p><div className="mt-5"><div className="mb-2 flex justify-between text-sm"><span className="text-muted">Completion</span><span className="font-medium">{project.progress}%</span></div><ProgressBar value={project.progress} /></div><div className="mt-5 flex items-center justify-between"><AvatarStack members={project.members} /><span className="text-sm text-muted">Due {project.dueDate}</span></div></Card>)}</div>
      </motion.section>
    </motion.div>
  );
}
