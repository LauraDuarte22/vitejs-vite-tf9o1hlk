type ProgressBarProps = {
  progress: number;
  leftLabel?: string;
  rightLabel?: string;
};

function ProgressBar({ progress, leftLabel, rightLabel }: ProgressBarProps) {
  const percentage = Math.max(0, Math.min(progress, 100));
  console.log(percentage);
  return (
    <div className="space-y-2">
      <div className="w-full h-3 bg-pink-50 rounded-full">
        <div
          className="h-3 rounded-full bg-pink-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-slate-500">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
