import {
  MoreVertical,
  Pencil,
  Trash2,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ProgressEntry } from '../../types/ProgressEntry';

type ProgressHistoryItemProps = {
  entry: ProgressEntry;
  previousWeight?: number;
  onEdit: (entry: ProgressEntry) => void;
  onDelete: (id: string) => void;
};

function ProgressHistoryItem({
  entry,
  previousWeight,
  onEdit,
  onDelete,
}: ProgressHistoryItemProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    if (!menuOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuWidth = 144; // w-36, un poco más angosto también

      // Intenta pegar el menú al borde izquierdo del botón (abre hacia la derecha)
      let left = rect.left + window.scrollX;

      // Si no cabe hacia la derecha, lo alinea por el borde derecho del botón
      if (left + menuWidth > window.innerWidth - 8) {
        left = rect.right + window.scrollX - menuWidth;
      }

      // Clamp final por seguridad
      left = Math.max(8, Math.min(left, window.innerWidth - menuWidth - 8));

      setMenuPos({
        top: rect.bottom + window.scrollY + 8,
        left,
      });
    }
    setMenuOpen((prev) => !prev);
  }

  const difference =
    previousWeight !== undefined
      ? Number((entry.weight - previousWeight).toFixed(1))
      : null;

  const formattedDate = new Date(entry.date).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="relative rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="w-full">
          <p className="text-sm font-medium text-slate-400">{formattedDate}</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {entry.weight}
            <span className="ml-1 text-lg font-medium text-slate-400">kg</span>
          </h3>

          {difference !== null && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1">
              {difference < 0 ? (
                <>
                  <TrendingDown size={16} className="text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    {Math.abs(difference)} kg menos
                  </span>
                </>
              ) : difference > 0 ? (
                <>
                  <TrendingUp size={16} className="text-red-500" />
                  <span className="text-sm font-semibold text-red-500">
                    +{difference} kg
                  </span>
                </>
              ) : (
                <span className="text-sm text-slate-500">Sin cambios</span>
              )}
            </div>
          )}

          {(entry.waist || entry.hips) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.waist && (
                <span className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-600">
                  📏 {entry.waist} cm
                </span>
              )}

              {entry.hips && (
                <span className="rounded-full bg-purple-50 px-3 py-1 text-sm text-purple-600">
                  🍑 {entry.hips} cm
                </span>
              )}
            </div>
          )}

          {entry.notes && (
            <div className="mt-4 rounded-2xl bg-slate-50 p-3">
              <p className="text-sm italic text-slate-600">"{entry.notes}"</p>
            </div>
          )}
        </div>

        {/* Menú */}
        <div className="relative ml-4">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="rounded-full p-2 transition hover:bg-slate-100"
          >
            <MoreVertical size={18} className="text-slate-400" />
          </button>

          {menuOpen &&
            createPortal(
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setMenuOpen(false)}
                />
                <div
                  style={{ top: menuPos.top, left: menuPos.left }}
                  className="fixed z-50 w-36 p-12 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl"
                >
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onEdit(entry);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
                  >
                    <Pencil size={16} />
                    Editar
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onDelete(entry.id);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 transition hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                    Eliminar
                  </button>
                </div>
              </>,
              document.body
            )}
        </div>
      </div>
    </article>
  );
}

export default ProgressHistoryItem;
