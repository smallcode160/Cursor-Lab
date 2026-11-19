import { motion, useSpring, type Variants } from "framer-motion";
import type { CursorProps } from "../core/types";

const COUNT = 10;

function TrailDot({ x, y, state, i }: CursorProps & { i: number }) {
  const stiffness = 700 - i * 55;
  const damping = 1.8 * Math.sqrt(stiffness);
  const sx = useSpring(x, { stiffness, damping });
  const sy = useSpring(y, { stiffness, damping });

  const base = 1 - (i / COUNT) * 0.65;
  const color = `hsl(${190 + i * 16} 95% 52%)`;
  const variants: Variants = {
    idle: { scale: base },
    hover: { scale: base * 1.7 },
    click: { scale: base * 0.5 },
  };

  return (
    <motion.div className="absolute left-0 top-0" style={{ x: sx, y: sy }}>
      <motion.div
        className="-ml-1.5 -mt-1.5 h-3 w-3 rounded-full"
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}`, opacity: 1 - i * 0.07 }}
        variants={variants}
        initial="idle"
        animate={state}
      />
    </motion.div>
  );
}

export function NeonTrail(props: CursorProps) {
  const order = Array.from({ length: COUNT }, (_, n) => COUNT - 1 - n);
  return (
    <>
      {order.map((i) => (
        <TrailDot key={i} i={i} {...props} />
      ))}
    </>
  );
}
