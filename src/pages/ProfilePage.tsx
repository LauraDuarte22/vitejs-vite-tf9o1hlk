import { useState } from 'react';

import MainLayout from '../layouts/MainLayout';

import Modal from '../components/ui/Modal';

import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileActions from '../components/profile/ProfileActions';
import EditProfileModal from '../components/profile/EditProfileModal';

import { useProfile } from '../hooks/useProfile';
import { useProgress } from '../hooks/useProgress';

function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { profile } = useProfile();
  const { entries } = useProgress();

  

  return (
    <MainLayout>
      <section className="space-y-8">
        <ProfileHeader />

        <ProfileStats />

        <ProfileActions
          onEditProfile={() => setIsEditModalOpen(true)}
       
        />

        <Modal
          isOpen={isEditModalOpen}
          title="Editar perfil"
          onClose={() => setIsEditModalOpen(false)}
        >
          <EditProfileModal
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      </section>
    </MainLayout>
  );
}

export default ProfilePage;