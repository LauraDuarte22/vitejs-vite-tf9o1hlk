import { useState } from 'react';

import MainLayout from '../layouts/MainLayout';

import { user } from '../data/user';

import type { ProgressEntry } from '../types/ProgressEntry';

import { useProgress } from '../hooks/useProgress';

import Welcome from '../components/dashboard/Welcome';
import ProgressHistory from '../components/progress/ProgressHistory';
import ProgressEntryForm from '../components/progress/ProgressEntryForm';
import Modal from '../components/ui/Modal';

function HistoryPage() {
  const { entries, updateProgressEntry, deleteProgressEntry } = useProgress();

  const [editingEntry, setEditingEntry] = useState<ProgressEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleUpdateProgress(data: Omit<ProgressEntry, 'id'>) {
    if (!editingEntry) return;

    updateProgressEntry({
      ...editingEntry,
      ...data,
    });

    setEditingEntry(null);
    setIsModalOpen(false);
  }

  return (
    <MainLayout>
      <section className="space-y-8">
        <Welcome name={user.name} />

        <ProgressHistory
          entries={entries}
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
