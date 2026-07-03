import { UserRound } from 'lucide-react';

import { useProfile } from '../../hooks/useProfile';

function ProfileHeader() {
  const { profile } = useProfile();

  return (
    <section className="rounded-3xl bg-gradient-to-r from-pink-500 to-pink-400 p-6 text-white shadow-lg">
      <div className="flex items-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
          <UserRound size={40} />
        </div>

        <div>
          <p className="text-sm text-pink-100">Bienvenido</p>

          <h2 className="text-3xl font-bold">{profile.name}</h2>

          <p className="mt-1 text-pink-100">
            Objetivo: {profile.goalWeight} kg
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;