'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Globe } from 'lucide-react'
import { locales, localeMeta, type Locale } from '@/i18n/config'
import { useLocale } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/utils'

/**
 * Discreet locale menu. Keyboard-operable (Escape closes, Enter/Space selects),
 * closes on outside click, and announces the active locale to assistive tech.
 */
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function choose(next: Locale) {
    setLocale(next)
    setOpen(false)
  }

  const active = localeMeta[locale]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.a11y.switchLanguage} — ${t.a11y.currentLanguage}: ${active.label}`}
        className={cn(
          'border-hairline text-ink-600 dark:text-ink-300 hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-300 flex h-9 items-center gap-1.5 rounded-lg border bg-black/[0.03] px-2.5 transition-colors dark:bg-white/[0.04]',
          open && 'border-brand-400/40 text-brand-600 dark:text-brand-300',
        )}
        style={{ borderColor: 'var(--hairline)' }}
      >
        <Globe className="size-4 shrink-0" />
        <span className="font-mono text-[11px] font-semibold tracking-wider">
          {active.code}
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            aria-label={t.a11y.switchLanguage}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={cn(
              'surface-card absolute z-50 mt-2 w-52 overflow-hidden rounded-xl p-1 shadow-2xl shadow-black/10 dark:shadow-black/50',
              compact ? 'left-0' : 'right-0',
            )}
          >
            {locales.map((code) => {
              const meta = localeMeta[code]
              const isActive = code === locale
              return (
                <li key={code} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onClick={() => choose(code)}
                    className={cn(
                      'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors',
                      isActive
                        ? 'bg-brand-400/10 text-brand-700 dark:text-brand-200 font-medium'
                        : 'text-ink-600 dark:text-ink-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]',
                    )}
                  >
                    <span aria-hidden className="text-base leading-none">
                      {meta.flag}
                    </span>
                    <span className="flex-1">{meta.label}</span>
                    <span className="text-ink-400 font-mono text-[10px] tracking-wider">
                      {meta.code}
                    </span>
                    {isActive ? (
                      <Check className="text-brand-500 size-3.5 shrink-0" />
                    ) : (
                      <span className="size-3.5 shrink-0" />
                    )}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
