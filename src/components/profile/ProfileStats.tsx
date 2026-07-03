import {
    Scale,
    Target,
    Ruler,
    Calculator,
    Calendar,
    ChartColumn,
  } from 'lucide-react';
  
  import ProfileCard from './ProfileCard';
  
  import { useProfile } from '../../hooks/useProfile';
  import { useProgress } from '../../hooks/useProgress';
  
  function ProfileStats() {
    const { profile } = useProfile();
    const { entries } = useProgress();
  
    const bmi = (
      profile.initialWeight /
      Math.pow(profile.height / 100, 2)
    ).toFixed(1);
  
    const firstEntry = entries.length
      ? [...entries]
          .sort(
            (a, b) =>
              new Date(a.date).getTime() -
              new Date(b.date).getTime()
          )[0]
      : null;
  
    return (
      <section className="grid grid-cols-2 gap-4">
        <ProfileCard
          label="Peso inicial"
          value={`${profile.initialWeight} kg`}
          icon={<Scale size={20} />}
        />
  
        <ProfileCard
          label="Objetivo"
          value={`${profile.goalWeight} kg`}
          icon={<Target size={20} />}
        />
  
        <ProfileCard
          label="Altura"
          value={`${profile.height} cm`}
          icon={<Ruler size={20} />}
        />
  
        <ProfileCard
          label="IMC"
          value={bmi}
          icon={<Calculator size={20} />}
        />
  
        <ProfileCard
          label="Registros"
          value={entries.length}
          icon={<ChartColumn size={20} />}
        />
  
        <ProfileCard
          label="Desde"
          value={
            firstEntry
              ? new Date(firstEntry.date).toLocaleDateString('es-CO', {
                  month: 'short',
                  year: 'numeric',
                })
              : '-'
          }
          icon={<Calendar size={20} />}
        />
      </section>
    );
  }
  
  export default ProfileStats;