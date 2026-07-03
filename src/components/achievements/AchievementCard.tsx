import type { Achievement } from '../../types/Achievement';
import AchievementBadge from './AchievementBadge';
type AchievementCardProps = {
  achievement: Achievement;
};

function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <article
      className={`rounded-3xl border p-5 transition ${
        achievement.unlocked
          ? 'border-pink-200 bg-pink-50'
          : 'border-slate-100 bg-white opacity-70'
      }`}
    >
      <div className="text-4xl">{achievement.icon}</div>

      <h3 className="mt-4 text-lg font-bold text-slate-800">
        {achievement.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {achievement.description}
      </p>

      {achievement.total && (
        <>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-pink-500"
              style={{
                width: `${
                  ((achievement.progress ?? 0) / achievement.total) * 100
                }%`,
              }}
            />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            {achievement.progress}/{achievement.total}
          </p>
        </>
      )}

      {achievement.unlocked && (
       <div className="mt-4">
       <AchievementBadge unlocked={achievement.unlocked} />
     </div>
      )}
    </article>
  );
}

export default AchievementCard;