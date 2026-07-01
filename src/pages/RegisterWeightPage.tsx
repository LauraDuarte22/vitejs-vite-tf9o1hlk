import MainLayout from '../layouts/MainLayout.tsx';

function RegisterWeightPage() {
  return (
    <MainLayout>
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Registrar peso</h2>

          <p className="mt-2 text-slate-500">Guarda tu progreso de hoy.</p>
        </div>
      </section>
    </MainLayout>
  );
}

export default RegisterWeightPage;
