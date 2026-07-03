import { useState } from 'react';

import Button from '../ui/Button';

import { useProfile } from '../../hooks/useProfile';

type EditProfileModalProps = {
  onClose: () => void;
};

function EditProfileModal({ onClose }: EditProfileModalProps) {
  const { profile, updateProfile } = useProfile();

  const [name, setName] = useState(profile.name);
  const [height, setHeight] = useState(profile.height.toString());
  const [initialWeight, setInitialWeight] = useState(
    profile.initialWeight.toString()
  );
  const [goalWeight, setGoalWeight] = useState(
    profile.goalWeight.toString()
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    updateProfile({
      name,
      height: Number(height),
      initialWeight: Number(initialWeight),
      goalWeight: Number(goalWeight),
    });

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-1 block text-xs uppercase text-slate-400">
          Nombre
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-pink-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-xs uppercase text-slate-400">
            Altura
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-pink-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase text-slate-400">
            Objetivo
          </label>

          <input
            type="number"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-pink-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs uppercase text-slate-400">
          Peso inicial
        </label>

        <input
          type="number"
          value={initialWeight}
          onChange={(e) => setInitialWeight(e.target.value)}
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-pink-500"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="secondary"
          className="flex-1"
          onClick={onClose}
        >
          Cancelar
        </Button>

        <Button className="flex-1">
          Guardar
        </Button>
      </div>
    </form>
  );
}

export default EditProfileModal;