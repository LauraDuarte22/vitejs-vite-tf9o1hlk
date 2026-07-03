import type { ReactNode } from 'react';

type ProfileCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
};

function ProfileCard({ icon, label, value }: ProfileCardProps) {
  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-3 text-pink-500">{icon}</div>

      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-slate-800">{value}</h3>
    </article>
  );
}

export default ProfileCard;