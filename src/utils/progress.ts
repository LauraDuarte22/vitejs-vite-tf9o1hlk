import type { Profile } from '../types/Profile';
import type { ProgressEntry } from '../types/ProgressEntry';

export function getCurrentWeight(entries: ProgressEntry[]): number {
  if (entries.length === 0) return 0;

  return entries[entries.length - 1].weight;
}

export function getProgress(
  profile: Profile,
  entries: ProgressEntry[]
): number {
  const currentWeight = getCurrentWeight(entries);

  const totalToLose = profile.initialWeight - profile.goalWeight;
  const lost = profile.initialWeight - currentWeight;

  return Math.min(100, Math.max(0, (lost / totalToLose) * 100));
}

export function getRemainingWeight(
  profile: Profile,
  entries: ProgressEntry[]
): number {
  const currentWeight = getCurrentWeight(entries);

  if (profile.goalWeight == null) {
    return 0;
  }

  return Number((currentWeight - profile.goalWeight).toFixed(1));
}

export function getLastWeightChange(entries: ProgressEntry[]): number {
  if (entries.length < 2) return 0;

  const last = entries[entries.length - 1];
  const previous = entries[entries.length - 2];

  return Number((last.weight - previous.weight).toFixed(1));
}