import type { ProgressEntry } from '../types/ProgressEntry';

export function sortEntriesByDate(entries: ProgressEntry[]) {
  return [...entries].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
