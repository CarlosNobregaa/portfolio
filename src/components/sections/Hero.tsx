'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, FileText, Github, Mail } from 'lucide-react'
import { useT } from '@/i18n/LocaleProvider'
import { profile } from '@/data/profile'

const ROTATE_MS = 3200

export function Hero() {
  const t = useT()
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const phrases = t.hero.rotating

  // Reset when the locale changes so we never index past a shorter array.
  useEffect(() => {
    setIndex(0)
  }, [phrases])

  // Reading the preference in an effect (never in render output) is safe —
  // the rotation is a content change, not just motion, so MotionConfig cannot
  // suppress it for us.
  useEffect(() => {
    if (reduce || phrases.length < 2) return
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % phrases.length),
      ROTATE_MS,
    )
    return () => window.clearInterval(id)
  }, [reduce, phrases])

  const stats = [
    { value: profile.stats.productionPlatforms, label: t.hero.stats.platforms },
    { value: `${profile.stats.domainModules}+`, label: t.hero.stats.modules },
    { value: profile.stats.monorepos, label: t.hero.stats.monorepos },
    { value: `${profile.stats.yearsFocus}+`, label: t.hero.stats.years },
  ]

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-hairline flex items-center gap-2.5 rounded-full border bg-black/[0.03] py-1.5 pr-3.5 pl-2.5 dark:bg-white/[0.04]"
          >
            <span className="relative grid size-2 place-items-center">
              <span className="animate-pulse-ring absolute size-2 rounded-full bg-emerald-400" />
              <span className="size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-ink-600 dark:text-ink-300 text-xs font-medium">
              {t.hero.availability}
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-ink-500 dark:text-ink-400 font-mono text-sm tracking-tight"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-ink-950 grid max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05] dark:text-white"
            >
              {/*
                Every phrase is rendered invisibly into the same grid cell as
                the visible one. The cell resolves to the tallest of them, so a
                phrase that wraps onto an extra line no longer pushes the
                paragraph below up and down while it rotates. Measuring this way
                rather than hard-coding a height keeps it correct across all
                three locales and every breakpoint.
              */}
              {phrases.map((phrase, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="invisible col-start-1 row-start-1"
                >
                  {t.hero.headlinePrefix} {phrase}
                </span>
              ))}

              <span className="col-start-1 row-start-1">
                {t.hero.headlinePrefix}{' '}
                <span className="relative inline-block align-top">
                  <AnimatePresence mode="wait" initial={false}>
                    {/* No `reduce ?` branch on these props: `useReducedMotion()`
                        is false on the server and true on a reduced-motion
                        client, which is a hydration mismatch. MotionConfig
                        neutralises the animation instead. */}
                    <motion.span
                      key={`${index}-${phrases[index]}`}
                      initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="text-gradient inline-block"
                    >
                      {phrases[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-ink-500 dark:text-ink-400 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
            >
              {t.hero.subheadline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group from-brand-500 relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r via-brand-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <span className="relative">{t.hero.primaryCta}</span>
              <ArrowUpRight className="relative size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="border-hairline text-ink-800 dark:text-ink-100 hover:border-brand-400/40 inline-flex items-center gap-2 rounded-xl border bg-black/[0.03] px-5 py-3 text-sm font-semibold transition-colors dark:bg-white/[0.05]"
            >
              <Mail className="size-4" />
              {t.hero.secondaryCta}
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-500 hover:text-ink-900 dark:hover:text-white inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition-colors"
            >
              <Github className="size-4" />
              GitHub
            </a>

            {profile.links.resume ? (
              <a
                href={profile.links.resume}
                className="text-ink-500 hover:text-ink-900 dark:hover:text-white inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition-colors"
              >
                <FileText className="size-4" />
                {t.hero.resumeCta}
              </a>
            ) : null}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-4 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-4"
            style={{ background: 'var(--hairline)' }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 px-4 py-5"
                style={{ background: 'var(--surface-raised)' }}
              >
                <dt className="text-ink-500 dark:text-ink-400 order-2 text-xs leading-snug">
                  {stat.label}
                </dt>
                <dd className="text-ink-950 order-1 font-mono text-2xl font-semibold tracking-tight dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label={t.a11y.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-ink-400 hover:text-brand-500 absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="grid place-items-center"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
