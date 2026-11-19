import { motion, useSpring, type Variants } from 'framer-motion'
import type { CursorProps } from '../core/types'

const core: Variants = {
  idle: { scaleX: 1, scaleY: 1, borderRadius: '999px', backgroundColor: 'rgba(58,91,255,1)' },
  hover: { scaleX: 2.4, scaleY: 2.4, borderRadius: '999px', backgroundColor: 'rgba(58,91,255,0.15)' },
  text: { scaleX: 0.25, scaleY: 2.4, borderRadius: '3px', backgroundColor: 'rgba(58,91,255,1)' },
  click: { scaleX: 0.7, scaleY: 0.7, borderRadius: '999px', backgroundColor: 'rgba(58,91,255,1)' },
}

const reset = { scale: 0.4, opacity: 0, transition: { duration: 0 } }
const wave: Variants = {
  idle: reset,
  hover: reset,
  text: reset,
  click: { scale: [0.4, 3.2], opacity: [0.7, 0], transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Ripple({ x, y, state }: CursorProps) {
  const sx = useSpring(x, { stiffness: 900, damping: 50 })
  const sy = useSpring(y, { stiffness: 900, damping: 50 })

  return (
    <motion.div className="absolute left-0 top-0" style={{ x: sx, y: sy }}>
      <motion.div
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border-2 border-signal"
        variants={wave}
        initial="idle"
        animate={state}
      />
      <motion.div
        className="absolute -ml-1.5 -mt-1.5 h-3 w-3 border-2 border-signal"
        variants={core}
        initial="idle"
        animate={state}
        transition={{ type: 'spring', stiffness: 400, damping: 24 }}
      />
    </motion.div>
  )
}
