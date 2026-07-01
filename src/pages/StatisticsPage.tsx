import MainLayout from '../layouts/MainLayout';
import Welcome from '../components/dashboard/Welcome';
import WeightChart from '../components/statistics/WeightChart';
import StatisticsGrid from '../components/statistics/StatisticsGrid';

import { user } from '../data/user';
import { useProgress } from '../hooks/useProgress';

function StatisticsPage() {
  const { entries, currentWeight, progress, remaining } = useProgress();

  return (
    <MainLayout>
      <section className="space-y-8">
        <Welcome name={user.name} />

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
