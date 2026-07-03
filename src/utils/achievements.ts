import type { Achievement } from '../types/Achievement';
import type { Profile } from '../types/Profile';
import type { ProgressEntry } from '../types/ProgressEntry';

export function getAchievements(
  profile: Profile,
  entries: ProgressEntry[]
): Achievement[] {
  const currentWeight =
    entries.length > 0
      ? entries[entries.length - 1].weight
      : profile.initialWeight;

  const lost = profile.initialWeight - currentWeight;

  return [
    {
      id: 'first-entry',
      title: 'Primer paso',
      description: 'Registra tu primer progreso.',
      icon: '🌱',
      unlocked: entries.length >= 1,
      progress: Math.min(entries.length, 1),
      total: 1,
    },

    {
      id: '10-entries',
      title: 'Constancia',
      description: 'Registra 10 progresos.',
      icon: '📝',
      unlocked: entries.length >= 10,
      progress: Math.min(entries.length, 10),
      total: 10,
    },

    {
      id: '25-entries',
      title: 'Muy constante',
      description: 'Registra 25 progresos.',
      icon: '💪',
      unlocked: entries.length >= 25,
      progress: Math.min(entries.length, 25),
      total: 25,
    },

    {
      id: 'lose-5kg',
      title: '-5 kg',
      description: 'Pierde 5 kg desde el peso inicial.',
      icon: '📉',
      unlocked: lost >= 5,
      progress: Math.max(0, Math.min(lost, 5)),
      total: 5,
    },

    {
      id: 'goal',
      title: 'Objetivo alcanzado',
      description: 'Llega a tu peso objetivo.',
      icon: '🎯',
      unlocked: currentWeight <= profile.goalWeight,
    },

    {
      id: 'week',
      title: 'Una semana',
      description: 'Registra progreso en 7 días distintos.',
      icon: '🔥',
      unlocked: new Set(entries.map((e) => e.date)).size >= 7,
      progress: Math.min(new Set(entries.map((e) => e.date)).size, 7),
      total: 7,
    },
  ];
}