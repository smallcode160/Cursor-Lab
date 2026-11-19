import { motion, useSpring } from 'framer-motion'
import type { CursorProps, CursorState } from '../core/types'

const FACE: Record<CursorState, string> = {
  idle: '🐱',
  hover: '😻',
  text: '✏️',
  click: '😾',
}

export function Cat({ x, y, state }: CursorProps) {
  const sx = useSpring(x, { stiffness: 320, damping: 28 })
  const sy = useSpring(y, { stiffness: 320, damping: 28 })

  return (
    <motion.div className="absolute left-0 top-0" style={{ x: sx, y: sy }}>
      <motion.div
        key={state}
        className="-ml-4 -mt-4 select-none text-3xl leading-none"
        initial={{ scale: 0.5, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      >
        {FACE[state]}
      </motion.div>
    </motion.div>
  )
}
