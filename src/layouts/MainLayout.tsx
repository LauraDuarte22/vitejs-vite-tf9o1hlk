import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { House, ChartColumn, ClipboardList, User,Trophy } from 'lucide-react';

type MainLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { to: '/', icon: House },
  { to: '/progress', icon: ChartColumn },
  { to: '/history', icon: ClipboardList },
  { to: '/achievements', icon: Trophy },
  { to: '/profile', icon: User },
];

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen justify-center bg-slate-100 p-4">
      <div className="flex min-h-screen w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-xl lg:max-w-[30%]">
        {/* Header */}
        <header className="flex h-14 shrink-0 items-center justify-center border-b border-slate-100 bg-white/80 backdrop-blur-sm">
          <h1 className="text-xl font-semibold text-slate-700">FitTrack 🌸</h1>
        </header>

        {/* Contenido */}
        <main className="flex-1 overflow-y-auto p-5">{children}</main>

        {/* Bottom Navigation */}
        <nav className="flex shrink-0 items-center justify-center border-t border-slate-100 bg-white pb-[env(safe-area-inset-bottom)] pt-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-2xl px-4 py-2 transition ${
                  isActive
                    ? 'text-pink-500'
                    : 'text-slate-400 hover:text-slate-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`rounded-xl p-1.5 transition ${
                      isActive ? 'bg-pink-50' : ''
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MainLayout;
