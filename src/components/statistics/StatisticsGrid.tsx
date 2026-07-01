import type { ProgressEntry } from '../../types/ProgressEntry';
import StatisticsCard from './StatisticsCard';

type StatisticsGridProps = {
  currentWeight: number;
  progress: number;
  remaining: number;
  entries: ProgressEntry[];
};

function StatisticsGrid({
  currentWeight,
  progress,
  remaining,
  entries,
}: StatisticsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatisticsCard title="Peso actual" value={`${currentWeight} kg`} />

      <StatisticsCard title="Progreso" value={`${progress.toFixed(0)}%`} />

      <StatisticsCard title="Faltan" value={`${remaining.toFixed(1)} kg`} />

      <StatisticsCard title="Registros" value={entries.length} />
    </div>
  );
}

export default StatisticsGrid;
