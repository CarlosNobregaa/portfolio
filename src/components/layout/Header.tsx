'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useT } from '@/i18n/LocaleProvider'
import { profile } from '@/data/profile'
import { sections, cn, type SectionId } from '@/lib/utils'

export function Header() {
  const t = useT()
  const { scrollY } = useScroll()
  const [condensed, setCondensed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<SectionId | null>(null)

  useMotionValueEvent(scrollY, 'change', (y) => setCondensed(y > 24))

  // Highlight the section currently occupying the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id as SectionId)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.25, 0.5] },
    )

    const nodes = sections
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  const navLabels: Record<SectionId, string> = {
    about: t.nav.about,
    projects: t.nav.projects,
    stack: t.nav.stack,
    experience: t.nav.experience,
    contact: t.nav.contact,
  }

  return (
    <>
      <a
        href="#main"
        className="focus:bg-brand-500 sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          condensed ? 'py-2' : 'py-4',
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={cn(
              'flex items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4',
              condensed
                ? 'surface-card shadow-lg shadow-black/[0.04] dark:shadow-black/30'
                : 'border border-transparent',
            )}
          >
            <a
              href="#top"
              className="group flex items-center gap-2.5"
              aria-label={profile.name}
            >
              <span className="from-brand-400 relative grid size-8 place-items-center overflow-hidden rounded-lg bg-gradient-to-br via-brand-500 to-violet-500 font-mono text-[11px] font-bold text-white shadow-sm">
                {profile.initials}
              </span>
              <span className="text-ink-950 hidden text-sm font-semibold tracking-tight sm:block dark:text-white">
                {profile.name}
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-lg px-3 py-1.5 text-sm transition-colors',
                    active === id
                      ? 'text-ink-950 dark:text-white'
                      : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100',
                  )}
                >
                  {active === id ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-brand-400/12 absolute inset-0 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{navLabels[id]}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label={t.nav.menu}
                className="border-hairline text-ink-600 dark:text-ink-300 grid size-9 place-items-center rounded-lg border bg-black/[0.03] md:hidden dark:bg-white/[0.04]"
                style={{ borderColor: 'var(--hairline)' }}
              >
                <Menu className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
              className="surface-card absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col gap-2 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-ink-400 font-mono text-[11px] tracking-[0.2em] uppercase">
                  {t.nav.menu}
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label={t.nav.closeMenu}
                  className="text-ink-500 hover:text-ink-900 dark:hover:text-white grid size-8 place-items-center rounded-lg"
                >
                  <X className="size-4" />
                </button>
              </div>

              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'rounded-xl px-3 py-2.5 text-base transition-colors',
                    active === id
                      ? 'bg-brand-400/10 text-brand-700 dark:text-brand-200 font-medium'
                      : 'text-ink-600 dark:text-ink-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]',
                  )}
                >
                  {navLabels[id]}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
