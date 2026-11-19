import { motion, useSpring, type Variants } from 'framer-motion'
import type { CursorProps } from '../core/types'

const box: Variants = {
  idle: { rotate: 0, scaleX: 1, scaleY: 1, backgroundColor: 'rgba(58,91,255,0)' },
  hover: { rotate: 45, scaleX: 1.5, scaleY: 1.5, backgroundColor: 'rgba(58,91,255,0)' },
  text: { rotate: 0, scaleX: 0.15, scaleY: 1.5, backgroundColor: 'rgba(58,91,255,1)' },
  click: { rotate: 90, scaleX: 0.7, scaleY: 0.7, backgroundColor: 'rgba(58,91,255,0.5)' },
}

export function Square({ x, y, state }: CursorProps) {
  const sx = useSpring(x, { stiffness: 500, damping: 35 })
  const sy = useSpring(y, { stiffness: 500, damping: 35 })

  return (
    <motion.div className="absolute left-0 top-0" style={{ x: sx, y: sy }}>
      <motion.div
        className="-ml-3.5 -mt-3.5 h-7 w-7 border-2 border-signal"
        variants={box}
        initial="idle"
        animate={state}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      />
    </motion.div>
  )
}
