import { useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import type { CursorDef } from "../core/types";

// Shows a cursor in its idle state, drifting slowly so trails and springs are visible.
export function CursorPreview({ def }: { def: CursorDef }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((t) => {
    if (reduceMotion) return;
    x.set(Math.cos(t / 700) * 26);
    y.set(Math.sin(t / 1100) * 10);
  });

  const Cursor = def.component;

  return (
    <span
      aria-hidden
      className="pointer-events-none flex h-20 items-center justify-center overflow-hidden rounded-lg bg-mist"
    >
      <span className="relative block h-0 w-0">
        <Cursor x={x} y={y} state="idle" />
      </span>
    </span>
  );
}

export function SystemPreview() {
  return (
    <span
      aria-hidden
      className="pointer-events-none flex h-20 items-center justify-center rounded-lg bg-mist"
    >
      <svg role="presentation" viewBox="0 0 24 24" className="h-7 w-7">
        <path
          d="M5 3l14 8-6 2-3 6z"
          fill="#14213D"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
