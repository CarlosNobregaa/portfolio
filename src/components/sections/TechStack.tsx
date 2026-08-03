'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Cloud,
  Database,
  FlaskConical,
  Monitor,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { stack, type StackCategory, type StackCategoryId } from '@/data/stack'
import { cn } from '@/lib/utils'

const ICONS: Record<StackCategory['icon'], LucideIcon> = {
  Server,
  Monitor,
  Database,
  Sparkles,
  Cloud,
  FlaskConical,
}

export function TechStack() {
  const t = useT()
  const [activeId, setActiveId] = useState<StackCategoryId>(stack[0].id)
  const active = stack.find((c) => c.id === activeId) ?? stack[0]

  return (
    <section id="stack" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          subtitle={t.stack.subtitle}
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-8">
          {/* Category rail */}
          <Reveal>
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label={t.stack.eyebrow}
              className="flex gap-2 overflow-x-auto pb-2 edge-fade-x lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {stack.map((category) => {
                const Icon = ICONS[category.icon]
                const isActive = category.id === activeId
                const meta = t.stack.categories[category.id]

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(category.id)}
                    onMouseEnter={() => setActiveId(category.id)}
                    onFocus={() => setActiveId(category.id)}
                    className={cn(
                      'relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 lg:w-full lg:shrink',
                      isActive
                        ? 'border-brand-400/30 bg-brand-400/[0.07]'
                        : 'hover:border-brand-400/20 bg-black/[0.02] dark:bg-white/[0.03]',
                    )}
                    style={{ borderColor: isActive ? undefined : 'var(--hairline)' }}
                  >
                    <span
                      className={cn(
                        'grid size-9 shrink-0 place-items-center rounded-xl border transition-colors',
                        isActive
                          ? 'border-brand-400/30 bg-brand-400/12'
                          : 'bg-black/[0.03] dark:bg-white/[0.05]',
                        category.accent,
                      )}
                      style={{ borderColor: isActive ? undefined : 'var(--hairline)' }}
                    >
                      <Icon className="size-4" />
                    </span>

                    <span className="min-w-0">
                      <span
                        className={cn(
                          'block text-sm font-semibold whitespace-nowrap lg:whitespace-normal',
                          isActive
                            ? 'text-ink-950 dark:text-white'
                            : 'text-ink-700 dark:text-ink-300',
                        )}
                      >
                        {meta.title}
                      </span>
                      <span className="text-ink-400 hidden text-xs leading-snug lg:block">
                        {meta.blurb}
                      </span>
                    </span>

                    <span className="text-ink-400 ml-auto hidden font-mono text-[10px] lg:block">
                      {category.items.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.08}>
            <div className="surface-card relative min-h-[24rem] overflow-hidden rounded-3xl p-6 sm:p-8">
              <div
                className={cn(
                  'absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40',
                  active.accent,
                )}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  role="tabpanel"
                >
                  <div className="mb-6 space-y-1.5">
                    <h3 className="text-ink-950 text-xl font-semibold tracking-tight dark:text-white">
                      {t.stack.categories[active.id].title}
                    </h3>
                    <p className="text-ink-500 dark:text-ink-400 max-w-xl text-sm leading-relaxed">
                      {t.stack.categories[active.id].blurb}
                    </p>
                  </div>

                  <ul className="space-y-3.5">
                    {active.items.map((item, i) => (
                      <li key={item.id} className="space-y-1.5">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-ink-800 dark:text-ink-100 text-sm font-medium">
                            {item.name}
                          </span>
                          <span
                            className="text-ink-400 font-mono text-[10px] tabular-nums"
                            aria-label={`${t.stack.levelLabel}: ${item.level}/5`}
                          >
                            {item.level}/5
                          </span>
                        </div>

                        <div
                          className="h-1 overflow-hidden rounded-full"
                          style={{ background: 'var(--hairline)' }}
                          role="presentation"
                        >
                          <motion.div
                            className={cn(
                              'h-full rounded-full bg-gradient-to-r from-brand-400 to-violet-400',
                            )}
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.level / 5) * 100}%` }}
                            transition={{
                              duration: 0.6,
                              delay: 0.04 * i,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
