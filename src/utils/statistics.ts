import type { ProgressEntry } from '../types/ProgressEntry';
export function getWeightLost(entries: ProgressEntry[]) {
  if (entries.length < 2) return 0;

  return Number((entries[0].weight - entries.at(-1)!.weight).toFixed(1));
}
export function getWaistChange(entries: ProgressEntry[]) {
  const first = entries.find((e) => e.waist);
  const last = [...entries].reverse().find((e) => e.waist);

  if (!first || !last) return 0;

  return Number((last.waist! - first.waist!).toFixed(1));
}
export function getHipChange(entries: ProgressEntry[]) {
  const first = entries.find((e) => e.hips);
  const last = [...entries].reverse().find((e) => e.hips);

  if (!first || !last) return 0;

  return Number((last.hips! - first.hips!).toFixed(1));
}
export function getTrackedDays(entries: ProgressEntry[]) {
  if (!entries.length) return 0;

  const first = new Date(entries[0].date);
  const last = new Date(entries.at(-1)!.date);

  const diff =
    Math.abs(last.getTime() - first.getTime()) / (1000 * 60 * 60 * 24);

  return Math.round(diff);
}
export function getWeeklyAverage(entries: ProgressEntry[]) {
  if (entries.length < 2) return 0;

  const first = entries[0];
  const last = entries.at(-1)!;

  const totalLost = first.weight - last.weight;

  const days =
    (new Date(last.date).getTime() - new Date(first.date).getTime()) /
    (1000 * 60 * 60 * 24);

  const weeks = days / 7;

  if (weeks <= 0) return 0;

  return Number((totalLost / weeks).toFixed(2));
}
