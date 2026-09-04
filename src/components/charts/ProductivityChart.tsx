import { useState } from 'react';
import { motion } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { productivityData } from '../../data/dashboard';
import { cn } from '../../utils/cn';

type Range = keyof typeof productivityData;

export function ProductivityChart({ className = '' }: { className?: string }) {
  const [range, setRange] = useState<Range>('Weekly');

  return (
    <section className={cn('surface-card relative overflow-hidden rounded-[1.25rem] p-5 sm:p-6', className)}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 aurora-line opacity-80" />
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">Productivity</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">Team rhythm</h2>
          <p className="mt-1 text-sm text-muted">Focus score across planned delivery windows.</p>
        </div>
        <div className="flex rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]/70 p-1">
          {(['Weekly', 'Monthly', 'Yearly'] as Range[]).map((item) => (
            <button key={item} onClick={() => setRange(item)} className={cn('rounded-lg px-3 py-1.5 text-sm font-medium transition duration-200', range === item ? 'bg-[rgb(var(--surface))] text-[rgb(var(--text))] shadow-sm' : 'text-muted hover:text-[rgb(var(--text))]')}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <motion.div key={range} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24 }} className="h-80 sm:h-[22rem]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={productivityData[range]} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="focus" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="rgb(var(--brand))" stopOpacity={0.34} /><stop offset="95%" stopColor="rgb(var(--accent-cyan))" stopOpacity={0.02} /></linearGradient>
            </defs>
            <CartesianGrid stroke="rgb(var(--border) / .75)" strokeDasharray="3 7" vertical={false} />
            <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: 'rgb(var(--muted))', fontSize: 12 }} dy={8} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgb(var(--muted))', fontSize: 12 }} />
            <Tooltip cursor={{ stroke: 'rgb(var(--brand))', strokeOpacity: .22 }} contentStyle={{ borderRadius: 14, border: '1px solid rgb(var(--border))', background: 'rgb(var(--surface))', color: 'rgb(var(--text))', boxShadow: '0 18px 45px rgb(var(--shadow) / .12)' }} />
            <Area type="monotone" dataKey="focus" name="Focus score" stroke="rgb(var(--brand))" strokeWidth={3.25} fill="url(#focus)" animationDuration={650} activeDot={{ r: 5, stroke: 'rgb(var(--surface))', strokeWidth: 3 }} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}
