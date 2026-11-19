import { useEffect } from "react";
import { useCursor } from "../core/CursorProvider";
import { cursors } from "../cursors/registry";

export function CursorLayer() {
  const { x, y, state, visible, isDesktop, activeId } = useCursor();
  const def = cursors.find((c) => c.id === activeId);
  const active = isDesktop && !!def;

  useEffect(() => {
    document.documentElement.classList.toggle("cursor-hidden", active);
    return () => document.documentElement.classList.remove("cursor-hidden");
  }, [active]);

  if (!def || !isDesktop) return null;

  const Cursor = def.component;
  // A cursor that doesn't support the current state stays in idle.
  const resolved = def.states.includes(state) ? state : "idle";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-9999 transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <Cursor x={x} y={y} state={resolved} />
    </div>
  );
}
