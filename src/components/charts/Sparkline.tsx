import { Line, LineChart, ResponsiveContainer } from 'recharts';

export function Sparkline({ data, color = 'rgb(var(--brand))' }: { data: number[]; color?: string }) {
  const chartData = data.map((value, index) => ({ index, value }));
  return (
    <div className="h-10 w-24" aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} dot={false} animationDuration={600} isAnimationActive />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
