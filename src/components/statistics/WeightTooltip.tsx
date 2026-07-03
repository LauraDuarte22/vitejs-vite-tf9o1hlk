import type { TooltipProps } from 'recharts';

type ChartData = {
  date: string;
  weight: number;
  waist?: number;
  hips?: number;
  notes?: string;
};

function WeightTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) {
    return null;
  }

  const entry = payload[0].payload as ChartData;

  return (
    <div className="min-w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <div className="mt-3">
        <p className="text-2xl font-bold text-pink-500">
          {entry.weight}
          <span className="ml-1 text-base font-medium text-slate-400">
            kg
          </span>
        </p>
      </div>

      {(entry.waist || entry.hips) && (
        <div className="mt-3 flex gap-2">
          {entry.waist && (
            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
              📏 {entry.waist} cm
            </span>
          )}

          {entry.hips && (
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
              🍑 {entry.hips} cm
            </span>
          )}
        </div>
      )}

      {entry.notes && (
        <div className="mt-3 rounded-xl bg-slate-50 p-3">
          <p className="text-xs italic text-slate-600">
            "{entry.notes}"
          </p>
        </div>
      )}
    </div>
  );
}

export default WeightTooltip;