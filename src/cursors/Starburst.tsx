import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import type { CursorProps } from "../core/types";

function Star({ filled }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-full w-full">
      <path
        d="M12 1.8 15.4 8.6 22.2 12 15.4 15.4 12 22.2 8.6 15.4 1.8 12 8.6 8.6z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.1}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Starburst({ x, y, state }: CursorProps) {
  const rx = useMotionValue(x.get());
  const ry = useMotionValue(y.get());
  const rot = useMotionValue(0);
  const hot = state !== "idle";
  const hotRef = useRef(hot);
  hotRef.current = hot;

  useAnimationFrame(() => {
    rx.set(rx.get() + (x.get() - rx.get()) * 0.22);
    ry.set(ry.get() + (y.get() - ry.get()) * 0.22);
    rot.set(rot.get() + (hotRef.current ? 1.6 : 0.25));
  });

  return (
    <>
      <motion.div className="absolute left-0 top-0" style={{ x: rx, y: ry }}>
        <motion.div
          className="-ml-3.75 -mt-3.75 h-7.5 w-7.5"
          style={{ rotate: rot }}
          initial={false}
          animate={{ scale: hot ? 1.5 : 1, color: hot ? "#3A5BFF" : "#8A93A6" }}
          transition={{ duration: 0.2 }}
        >
          <Star />
        </motion.div>
      </motion.div>
      <motion.div className="absolute left-0 top-0 text-ink" style={{ x, y }}>
        <div className="ml-[-4.5px] mt-[-4.5px] h-2.25 w-2.25">
          <Star filled />
        </div>
      </motion.div>
    </>
  );
}
