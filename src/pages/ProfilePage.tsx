import MainLayout from '../layouts/MainLayout.tsx';

import { user } from '../data/user.ts';

import Welcome from '../components/dashboard/Welcome.tsx';
function ProfilePage() {
  return (
    <MainLayout>
      <section className="space-y-8">
        <Welcome name={user.name} />
      </section>
    </MainLayout>
  );
}

export default ProfilePage;
