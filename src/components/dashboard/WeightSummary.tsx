import ProgressBar from '../ui/ProgressBar';

type WeightSummaryProps = {
  currentWeight: number;
  goalWeight: number;
  progress: number;
};

function WeightSummary({
  currentWeight,
  goalWeight,
  progress,
}: WeightSummaryProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-center text-5xl font-extrabold text-slate-800">
          {currentWeight}
        </p>

        <p className="text-center text-sm text-slate-400">kg actuales</p>
      </div>

      <ProgressBar
        progress={progress}
        leftLabel={`${progress.toFixed(0)}% completado`}
        rightLabel={`Meta ${goalWeight} kg`}
      />
    </section>
  );
}

export default WeightSummary;
