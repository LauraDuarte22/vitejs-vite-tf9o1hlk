import MainLayout from '../layouts/MainLayout';
import Welcome from '../components/dashboard/Welcome';
import WeightChart from '../components/statistics/WeightChart';
import StatisticsGrid from '../components/statistics/StatisticsGrid';

import { profile } from '../data/profile';
import { useProgress } from '../hooks/useProgress';

function StatisticsPage() {
  const { entries, currentWeight, progress, remaining } = useProgress();

  return (
    <MainLayout>
      <section className="space-y-8">
        <Welcome name={profile.name} />

        <WeightChart entries={entries} />

        <StatisticsGrid
          currentWeight={currentWeight}
          progress={progress}
          remaining={remaining}
          entries={entries}
        />
      </section>
    </MainLayout>
  );
}

export default StatisticsPage;
