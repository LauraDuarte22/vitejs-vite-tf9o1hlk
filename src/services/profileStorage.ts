import type { Profile } from '../types/Profile';

const STORAGE_KEY = 'fittrack-profile';

export function loadProfile(): Profile | null {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveProfile(profile: Profile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}