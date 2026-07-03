import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import { profile } from '../data/profile';
import { progressEntries } from '../data/progressEntries';

import type { ProgressEntry } from '../types/ProgressEntry';

import {
  loadProgressEntries,
  saveProgressEntries,
} from '../services/progressStorage';

import {
  getCurrentWeight,
  getProgress,
  getRemainingWeight,
  getLastWeightChange,
} from '../utils/progress';

type ProgressContextType = {
  entries: ProgressEntry[];

  currentWeight: number;
  progress: number;
  remaining: number;
  lastWeightChange: number;

  addProgressEntry: (entry: ProgressEntry) => void;
  updateProgressEntry: (entry: ProgressEntry) => void;
  deleteProgressEntry: (id: string) => void;
};

export const ProgressContext = createContext<ProgressContextType>({
  entries: [],
  currentWeight: 0,
  progress: 0,
  remaining: 0,
  lastWeightChange: 0,
  addProgressEntry: () => {},
});

type ProgressProviderProps = {
  children: ReactNode;
};

export function ProgressProvider({ children }: ProgressProviderProps) {
  // ==========================
  // Estado
  // ==========================
  const [entries, setEntries] = useState<ProgressEntry[]>(() => {
    return loadProgressEntries() ?? progressEntries;
  });

  // ==========================
  // Acciones
  // ==========================
  function addProgressEntry(entry: ProgressEntry) {
    setEntries((prev) => [...prev, entry]);
  }

  function updateProgressEntry(updatedEntry: ProgressEntry) {
    setEntries((prev) =>
      prev.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry))
    );
  }

  function deleteProgressEntry(id: string) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }
  // ==========================
  // Datos derivados
  // ==========================
  const currentWeight = getCurrentWeight(entries);

  const progress = getProgress(profile, entries);

  const remaining = getRemainingWeight(profile, entries);

  const lastWeightChange = getLastWeightChange(entries);

  // ==========================
  // Persistencia
  // ==========================
  useEffect(() => {
    saveProgressEntries(entries);
  }, [entries]);

  // ==========================
  // Provider
  // ==========================
  return (
    <ProgressContext.Provider
      value={{
        entries,
        currentWeight,
        progress,
        remaining,
        lastWeightChange,
        addProgressEntry,
        updateProgressEntry,
        deleteProgressEntry,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
