type StatisticsCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
};

function StatisticsCard({
  title,
  value,
  subtitle,
}: StatisticsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-slate-800">
        {value}
      </h3>

      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default StatisticsCard;