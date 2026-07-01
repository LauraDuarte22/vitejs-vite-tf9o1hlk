import type { User } from '../types/User';
import type { ProgressEntry } from '../types/ProgressEntry';

export function getCurrentWeight(entries: ProgressEntry[]): number {
  if (entries.length === 0) return 0;

  return entries[entries.length - 1].weight;
}

export function getProgress(user: User, entries: ProgressEntry[]): number {
  const currentWeight = getCurrentWeight(entries);

  const totalToLose = user.startWeight - user.goalWeight;
  const lost = user.startWeight - currentWeight;

  return Math.min(100, Math.max(0, (lost / totalToLose) * 100));
}

export function getRemainingWeight(
  user: User,
  entries: ProgressEntry[]
): number {
  const currentWeight = getCurrentWeight(entries);

  return Number((currentWeight - user.goalWeight).toFixed(1));
}

export function getLastWeightChange(entries: ProgressEntry[]): number {
  if (entries.length < 2) return 0;

  const last = entries[entries.length - 1];
  const previous = entries[entries.length - 2];

  return Number((last.weight - previous.weight).toFixed(1));
}
