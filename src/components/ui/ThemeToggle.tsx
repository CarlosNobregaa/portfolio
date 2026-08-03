'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useT } from '@/i18n/LocaleProvider'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useT()

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={t.a11y.toggleTheme}
      title={t.a11y.toggleTheme}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="border-hairline text-ink-600 dark:text-ink-300 hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-300 relative grid size-9 place-items-center rounded-lg border bg-black/[0.03] transition-colors dark:bg-white/[0.04]"
    >
      {/* Render nothing themed until mounted to avoid a hydration mismatch. */}
      <AnimatePresence initial={false} mode="wait">
        {mounted ? (
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="grid place-items-center"
          >
            {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </motion.span>
        ) : (
          <span className="size-4" />
        )}
      </AnimatePresence>
    </button>
  )
}
