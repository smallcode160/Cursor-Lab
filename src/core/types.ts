import type { MotionValue } from "framer-motion";
import type { FC } from "react";

export type CursorState = "idle" | "hover" | "text" | "click";

export interface CursorProps {
  /** Live pointer position in viewport pixels. Not React state, so no re-renders. */
  x: MotionValue<number>;
  y: MotionValue<number>;
  /** Always one of the states the cursor declares in `states` (or 'idle'). */
  state: CursorState;
}

export interface CursorDef {
  id: string;
  name: string;
  description: string;
  /** States this cursor reacts to. 'idle' is implied. Others fall back to idle. */
  states: CursorState[];
  component: FC<CursorProps>;
}
