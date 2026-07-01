type QuickActionsProps = {
  onAddWeight: () => void;
};

function QuickActions({ onAddWeight }: QuickActionsProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-slate-800">
        Acciones rápidas
      </h3>

      <button
        onClick={onAddWeight}
        className="flex w-full items-center justify-center gap-2 rounded-3xl bg-pink-500 py-4 font-semibold text-white transition hover:bg-pink-600"
      >
        Registrar peso
      </button>
    </div>
  );
}

export default QuickActions;
