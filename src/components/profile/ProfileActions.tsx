import Button from '../ui/Button';

type ProfileActionsProps = {
  onEditProfile: () => void;

};

function ProfileActions({
  onEditProfile,


}: ProfileActionsProps) {
  return (
    <section className="space-y-3">
      <Button
        className="w-full"
        variant="primary"
        onClick={onEditProfile}
      >
        Editar perfil
      </Button>

  
    
    </section>
  );
}

export default ProfileActions;