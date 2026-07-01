type WelcomeProps = {
  name: string;
};

function Welcome({ name }: WelcomeProps) {
  return (
    <header>
      <p className="text-sm text-slate-500">Hola, {name} 👋</p>

      <h1 className="mt-1 text-3xl font-bold text-slate-800">
        Tu transformación
      </h1>

      <p className="mt-2 text-slate-500">Cada pequeño paso cuenta.</p>
    </header>
  );
}

export default Welcome;
