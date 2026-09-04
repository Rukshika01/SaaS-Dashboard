import { Line, LineChart, ResponsiveContainer } from 'recharts';

export function Sparkline({ data }: { data: number[] }) {
  const chartData = data.map((value, index) => ({ index, value }));
  return (
    <div className="h-10 w-24" aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="value" stroke="rgb(var(--brand))" strokeWidth={2.5} dot={false} isAnimationActive />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
