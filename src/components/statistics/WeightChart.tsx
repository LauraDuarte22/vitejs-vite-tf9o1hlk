import type { ProgressEntry } from '../../types/ProgressEntry';
import WeightTooltip from './WeightTooltip';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

type WeightChartProps = {
  entries: ProgressEntry[];
};

function WeightChart({ entries }: WeightChartProps) {
  const data = [...entries]
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .map((entry) => ({
    date: new Date(entry.date).toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'short',
    }),
    weight: entry.weight,
    waist: entry.waist,
    hips: entry.hips,
    notes: entry.notes,
  }));
 
  if (data.length < 2) {
    return (
      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">
          Evolución del peso
        </h2>

        <div className="mt-6 flex h-64 items-center justify-center rounded-2xl bg-slate-50">
          <p className="text-center text-slate-400">
            Agrega al menos dos registros para visualizar el gráfico.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-800">
          Evolución del peso
        </h2>

        <p className="text-sm text-slate-400">{entries.length} registros</p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              stroke="#f1f5f9"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
            />


            <Tooltip
              cursor={{
                stroke: '#ec4899',
                strokeWidth: 1,
                strokeDasharray: '5 5',
              }}
              content={<WeightTooltip />}
            />

            <Line
              type="monotone"
              dataKey="weight"
              stroke="#ec4899"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: '#ec4899',
                stroke: '#fff',
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: '#ec4899',
                stroke: '#fff',
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default WeightChart;
