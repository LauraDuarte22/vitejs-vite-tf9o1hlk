import { useState } from 'react';

import MainLayout from '../layouts/MainLayout';

import type { ProgressEntry } from '../types/ProgressEntry';

import { useProfile } from '../hooks/useProfile';
import { useProgress } from '../hooks/useProgress';

import Welcome from '../components/dashboard/Welcome';
import ProgressHistory from '../components/progress/ProgressHistory';
import ProgressEntryForm from '../components/progress/ProgressEntryForm';
import HistoryFilters, {
  type HistoryFilter,
} from '../components/progress/HistoryFilters';
import Modal from '../components/ui/Modal';

function HistoryPage() {
  const { profile } = useProfile();

  const {
    entries,
    updateProgressEntry,
    deleteProgressEntry,
  } = useProgress();

  const [editingEntry, setEditingEntry] = useState<ProgressEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<HistoryFilter>('all');

  function handleUpdateProgress(data: Omit<ProgressEntry, 'id'>) {
    if (!editingEntry) return;

    updateProgressEntry({
      ...editingEntry,
      ...data,
    });

    setEditingEntry(null);
    setIsModalOpen(false);
  }

  const filteredEntries = entries.filter((entry) => {
    if (filter === 'all') return true;

    const entryDate = new Date(entry.date);
    const today = new Date();

    const diffDays =
      (today.getTime() - entryDate.getTime()) /
      (1000 * 60 * 60 * 24);

    if (filter === '30days') {
      return diffDays <= 30;
    }

    if (filter === '90days') {
      return diffDays <= 90;
    }

    return true;
  });

  return (
    <MainLayout>
      <section className="space-y-8">
        <Welcome name={profile.name} />

        <HistoryFilters
          value={filter}
          onChange={setFilter}
        />

        <ProgressHistory
          entries={filteredEntries}
          onEdit={(entry) => {
            setEditingEntry(entry);
            setIsModalOpen(true);
          }}
          onDelete={deleteProgressEntry}
        />

        <Modal
          isOpen={isModalOpen}
          title="Editar progreso"
          onClose={() => {
            setEditingEntry(null);
            setIsModalOpen(false);
          }}
        >
          <ProgressEntryForm
            initialValues={editingEntry ?? undefined}
            onCancel={() => {
              setEditingEntry(null);
              setIsModalOpen(false);
            }}
            onSubmit={handleUpdateProgress}
          />
        </Modal>
      </section>
    </MainLayout>
  );
}

export default HistoryPage;