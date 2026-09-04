import { useState } from 'react';
import { motion } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { productivityData } from '../../data/dashboard';
import { cn } from '../../utils/cn';

type Range = keyof typeof productivityData;

export function ProductivityChart() {
  const [range, setRange] = useState<Range>('Weekly');

  return (
    <section className="surface-card rounded-2xl p-5 lg:col-span-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Productivity rhythm</h2>
          <p className="text-sm text-muted">Focus score and completed work over time.</p>
        </div>
        <div className="flex rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]/70 p-1">
          {(['Weekly', 'Monthly', 'Yearly'] as Range[]).map((item) => (
            <button
              key={item}
              onClick={() => setRange(item)}
              className={cn('rounded-lg px-3 py-1.5 text-sm font-medium transition', range === item ? 'bg-[rgb(var(--surface))] text-[rgb(var(--text))] shadow-sm' : 'text-muted hover:text-[rgb(var(--text))]')}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={productivityData[range]} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="focus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(var(--brand))" stopOpacity={0.28} />
                <stop offset="95%" stopColor="rgb(var(--brand))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgb(var(--border))" strokeDasharray="4 6" vertical={false} />
            <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: 'rgb(var(--muted))', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgb(var(--muted))', fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid rgb(var(--border))', background: 'rgb(var(--surface))', color: 'rgb(var(--text))' }} />
            <Area type="monotone" dataKey="focus" name="Focus score" stroke="rgb(var(--brand))" strokeWidth={3} fill="url(#focus)" animationDuration={700} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}
