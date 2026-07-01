import type { ProgressEntry } from '../types/ProgressEntry';

const STORAGE_KEY = 'fittrack-progress-entries';

export function loadProgressEntries(): ProgressEntry[] | null {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as ProgressEntry[];
  } catch {
    return null;
  }
}

export function saveProgressEntries(entries: ProgressEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
