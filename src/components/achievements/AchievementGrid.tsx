import type { Achievement } from '../../types/Achievement';
import AchievementCard from './AchievementCard';

type AchievementGridProps = {
  achievements: Achievement[];
};

function AchievementGrid({ achievements }: AchievementGridProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">
        Logros
      </h2>

      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
}

export default AchievementGrid;