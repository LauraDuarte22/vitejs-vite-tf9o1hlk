import { useState } from 'react';
import MainLayout from '../layouts/MainLayout.tsx';

import { user } from '../data/user.ts';
import { useProgress } from '../hooks/useProgress';

import Welcome from '../components/dashboard/Welcome.tsx';
import WeightSummary from '../components/dashboard/WeightSummary.tsx';
import StatsGrid from '../components/dashboard/StatsGrid.tsx';
import QuickActions from '../components/dashboard/QuickActions.tsx';
import Modal from '../components/ui/Modal.tsx';
import ProgressEntryForm from '../components/progress/ProgressEntryForm';
function DashboardPage() {
  const {
    currentWeight,
    progress,
    remaining,
    lastWeightChange,
    addProgressEntry,
  } = useProgress();

  function handleAddWeight() {
    setIsModalOpen(true);
  }
  type ProgressFormData = {
    weight: number;
    waist?: number;
    hips?: number;
    notes?: string;
    date: string;
  };

  function handleSubmitWeight(data: ProgressFormData) {
    addProgressEntry({
      id: crypto.randomUUID(),
      ...data,
    });

    setIsModalOpen(false);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainLayout>
      <section className="space-y-8">
        <Welcome name={user.name} />
        <WeightSummary
          currentWeight={currentWeight}
          goalWeight={user.goalWeight}
          progress={progress}
        />
        <StatsGrid
          goalWeight={user.goalWeight}
          weeklyChange={lastWeightChange}
          remaining={remaining}
        />
        <QuickActions onAddWeight={handleAddWeight} />
        <Modal
          isOpen={isModalOpen}
          title="Registrar peso"
          onClose={() => setIsModalOpen(false)}
        >
          <ProgressEntryForm
            onCancel={() => setIsModalOpen(false)}
            onSubmit={handleSubmitWeight}
          />
        </Modal>
      </section>
    </MainLayout>
  );
}

export default DashboardPage;
