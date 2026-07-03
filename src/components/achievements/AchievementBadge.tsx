type AchievementBadgeProps = {
    unlocked: boolean;
  };
  
  function AchievementBadge({ unlocked }: AchievementBadgeProps) {
    return (
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
          unlocked
            ? 'bg-green-100 text-green-700'
            : 'bg-slate-100 text-slate-500'
        }`}
      >
        {unlocked ? '🏆 Desbloqueado' : '🔒 Bloqueado'}
      </span>
    );
  }
  
  export default AchievementBadge;