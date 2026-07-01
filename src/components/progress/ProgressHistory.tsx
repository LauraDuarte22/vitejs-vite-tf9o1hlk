import type { ProgressEntry } from '../../types/ProgressEntry';
import ProgressHistoryItem from './ProgressHistoryItem';

type ProgressHistoryProps = {
  entries: ProgressEntry[];
  onEdit: (entry: ProgressEntry) => void;
  onDelete: (id: string) => void;
};

function ProgressHistory({ entries, onEdit, onDelete }: ProgressHistoryProps) {
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-800">Historial</h3>

      <div className="max-h-80 overflow-y-auto pr-2">
        {sortedEntries.map((entry, index) => (
          <ProgressHistoryItem
            className="mb-3"
            key={entry.id}
            entry={entry}
            previousWeight={sortedEntries[index + 1]?.weight}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default ProgressHistory;
