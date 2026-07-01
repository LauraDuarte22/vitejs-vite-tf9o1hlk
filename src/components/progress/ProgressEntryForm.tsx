import { useState } from 'react';
import Button from '../ui/Button';
import type { ProgressEntry } from '../../types/ProgressEntry';

type ProgressEntryFormProps = {
  initialValues?: Partial<ProgressEntry>;
  onCancel: () => void;
  onSubmit: (data: Omit<ProgressEntry, 'id'>) => void;
};

function ProgressEntryForm({
  initialValues,
  onCancel,
  onSubmit,
}: ProgressEntryFormProps) {
  const [weight, setWeight] = useState(initialValues?.weight?.toString() ?? '');

  const [waist, setWaist] = useState(initialValues?.waist?.toString() ?? '');

  const [hips, setHips] = useState(initialValues?.hips?.toString() ?? '');

  const [notes, setNotes] = useState(initialValues?.notes ?? '');

  const [date, setDate] = useState(
    initialValues?.date ?? new Date().toISOString().split('T')[0]
  );

  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const weightValue = Number(weight);

    if (!weight.trim()) {
      setError('Ingresa tu peso.');
      return;
    }

    if (Number.isNaN(weightValue) || weightValue <= 0) {
      setError('El peso debe ser mayor que 0 kg.');
      return;
    }

    setError('');

    onSubmit({
      weight: weightValue,
      waist: waist ? Number(waist) : undefined,
      hips: hips ? Number(hips) : undefined,
      notes: notes.trim() || undefined,
      date,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Peso */}
      <div>
        <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
          Peso *
        </label>

        <div
          className={`flex items-end gap-2 border-b-2 pb-2 transition ${
            error
              ? 'border-red-400'
              : 'border-slate-200 focus-within:border-pink-500'
          }`}
        >
          <input
            type="number"
            inputMode="decimal"
            step="0.1"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              if (error) setError('');
            }}
            placeholder="0.0"
            className="w-full bg-transparent text-3xl font-bold text-slate-800 outline-none placeholder:text-slate-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <span className="pb-1 text-base font-medium text-slate-400">kg</span>
        </div>

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>

      {/* Medidas */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
            Cintura
          </label>

          <div className="flex items-end gap-2 border-b-2 border-slate-200 pb-2 transition focus-within:border-pink-500">
            <input
              type="number"
              inputMode="decimal"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder="0"
              className="w-full bg-transparent text-xl font-semibold text-slate-800 outline-none placeholder:text-slate-300"
            />
            <span className="pb-0.5 text-sm text-slate-400">cm</span>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
            Cadera
          </label>

          <div className="flex items-end gap-2 border-b-2 border-slate-200 pb-2 transition focus-within:border-pink-500">
            <input
              type="number"
              inputMode="decimal"
              value={hips}
              onChange={(e) => setHips(e.target.value)}
              placeholder="0"
              className="w-full bg-transparent text-xl font-semibold text-slate-800 outline-none placeholder:text-slate-300"
            />
            <span className="pb-0.5 text-sm text-slate-400">cm</span>
          </div>
        </div>
      </div>

      {/* Fecha */}
      <div>
        <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
          Fecha
        </label>

        <div className="border-b-2 border-slate-200 pb-2 transition focus-within:border-pink-500">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-base text-slate-700 outline-none"
          />
        </div>
      </div>

      {/* Notas */}
      <div>
        <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
          Notas
        </label>

        <div className="border-b-2 border-slate-200 pb-2 transition focus-within:border-pink-500">
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="¿Cómo te sentiste hoy?"
            className="w-full resize-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-300"
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="secondary"
          className="flex-1"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button type="submit" className="flex-1">
          {initialValues ? 'Actualizar' : 'Guardar'}
        </Button>
      </div>
    </form>
  );
}

export default ProgressEntryForm;
