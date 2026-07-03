import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type { Profile } from '../types/Profile';
import { profile as initialProfile } from '../data/profile';
import {
  loadProfile,
  saveProfile,
} from '../services/profileStorage';

type ProfileContextType = {
  profile: Profile;

  updateProfile: (profile: Profile) => void;
};

export const ProfileContext = createContext<ProfileContextType>({
  profile: initialProfile,
  updateProfile: () => {},
});

type ProfileProviderProps = {
  children: ReactNode;
};

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>(() => {
    return loadProfile() ?? initialProfile;
  });

  function updateProfile(changes: Partial<Profile>) {
    setProfile((prev) => ({
      ...prev,
      ...changes,
    }));
  }

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}