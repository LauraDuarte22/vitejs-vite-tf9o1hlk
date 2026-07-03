import MainLayout from '../layouts/MainLayout';

import { useProfile } from '../hooks/useProfile';
import { useProgress } from '../hooks/useProgress';

import AchievementGrid from '../components/achievements/AchievementGrid';

import { getAchievements } from '../utils/achievements';

function AchievementsPage() {
  const { profile } = useProfile();
  const { entries } = useProgress();

  const achievements = getAchievements(profile, entries);

  return (
    <MainLayout>
      <AchievementGrid achievements={achievements} />
    </MainLayout>
  );
}

export default AchievementsPage;