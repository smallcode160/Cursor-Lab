import { motion, useSpring, type Variants } from "framer-motion";
import type { CursorProps } from "../core/types";

const orb: Variants = {
  idle: { scale: 1, opacity: 0.9 },
  hover: { scale: 2.4, opacity: 0.45 },
};

export function Orb({ x, y, state }: CursorProps) {
  const sx = useSpring(x, { stiffness: 360, damping: 32 });
  const sy = useSpring(y, { stiffness: 360, damping: 32 });

  return (
    <motion.div className="absolute left-0 top-0" style={{ x: sx, y: sy }}>
      <motion.div
        className="-ml-4 -mt-4 h-8 w-8 rounded-full bg-linear-to-br from-fuchsia-500 to-amber-300 blur-[2px]"
        variants={orb}
        initial="idle"
        animate={state}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </motion.div>
  );
}
