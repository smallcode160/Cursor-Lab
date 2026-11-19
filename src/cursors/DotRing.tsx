import { motion, useSpring, type Variants } from 'framer-motion'
import type { CursorProps } from '../core/types'

const dot: Variants = {
  idle: { scale: 1 },
  hover: { scale: 0 },
  text: { scale: 0 },
  click: { scale: 1.8 },
}

const ring: Variants = {
  idle: { scaleX: 1, scaleY: 1, opacity: 0.7, borderRadius: '999px', backgroundColor: 'rgba(20,33,61,0)' },
  hover: { scaleX: 1.7, scaleY: 1.7, opacity: 1, borderRadius: '999px', backgroundColor: 'rgba(20,33,61,0.12)' },
  text: { scaleX: 0.12, scaleY: 1.3, opacity: 1, borderRadius: '4px', backgroundColor: 'rgba(20,33,61,0.9)' },
  click: { scaleX: 0.6, scaleY: 0.6, opacity: 1, borderRadius: '999px', backgroundColor: 'rgba(20,33,61,0)' },
}

export function DotRing({ x, y, state }: CursorProps) {
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 })

  return (
    <>
      <motion.div className="absolute left-0 top-0" style={{ x: rx, y: ry }}>
        <motion.div
          className="-ml-5 -mt-5 h-10 w-10 border-2 border-ink"
          variants={ring}
          initial="idle"
          animate={state}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        />
      </motion.div>
      <motion.div className="absolute left-0 top-0" style={{ x, y }}>
        <motion.div
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-ink"
          variants={dot}
          initial="idle"
          animate={state}
        />
      </motion.div>
    </>
  )
}
