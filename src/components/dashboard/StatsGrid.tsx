type StatsGridProps = {
  goalWeight: number;
  weeklyChange: number;
  remaining: string;
};

function StatsGrid({ goalWeight, weeklyChange, remaining }: StatsGridProps) {
  return (
    <section className="grid grid-cols-3 gap-3">
      <div className="rounded-3xl border border-pink-100 bg-pink-50 p-4">
        <p className="text-xs font-semibold text-pink-500">Objetivo</p>

        <p className="mt-2 text-2xl font-bold text-pink-600">{goalWeight} kg</p>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-4">
        <p className="text-xs font-semibold text-slate-500">Semana</p>

        <p
          className={`mt-2 text-2xl font-bold ${
            weeklyChange < 0 ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {weeklyChange} kg
        </p>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-4">
        <p className="text-xs font-semibold text-slate-500">Restan</p>

        <p className="mt-2 text-2xl font-bold text-slate-800">{remaining} kg</p>
      </div>
    </section>
  );
}

export default StatsGrid;
