type HistoryFilter = 'all' | '30days' | '90days';

type HistoryFiltersProps = {
  value: HistoryFilter;
  onChange: (filter: HistoryFilter) => void;
};

function HistoryFilters({ value, onChange }: HistoryFiltersProps) {
  const filters = [
    { value: 'all', label: 'Todos' },
    { value: '30days', label: '30 días' },
    { value: '90days', label: '90 días' },
  ] as const;

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            value === filter.value
              ? 'bg-pink-500 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default HistoryFilters;