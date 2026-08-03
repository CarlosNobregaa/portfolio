'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Travel distance in px before settling. */
  y?: number
}

/**
 * Scroll-triggered entrance, fired once.
 *
 * There is deliberately no `prefers-reduced-motion` branch here: returning a
 * different element on the client than the server rendered is a hydration
 * mismatch, because Framer serialises `initial` into the static HTML. The
 * preference is handled globally by <MotionConfig reducedMotion="user">.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Parent variants for staggered lists. Pair with <StaggerItem>. */
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={staggerChild} className={cn(className)}>
      {children}
    </motion.div>
  )
}
