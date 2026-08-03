'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { useT } from '@/i18n/LocaleProvider'
import { experience } from '@/data/experience'

export function Experience() {
  const t = useT()

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          className="mb-14"
        />

        {/* The spine lives in a wrapper, not inside the <ol>: an <ol> may only
            contain <li> (plus script/template) children. */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[15px] w-px sm:left-[19px]"
            style={{ background: 'var(--hairline)' }}
          />

          <ol className="space-y-4">
            {experience.map((entry, index) => {
              const copy = t.experience.items[entry.id]

              return (
                <li key={entry.id} className="relative pl-10 sm:pl-14">
                  {/* Outside <Reveal>: a non-`none` transform makes an element the
                      containing block for absolutely positioned descendants, so
                      the dot would sit 40px off until the entrance finished and
                      then snap into place. */}
                  <span
                    aria-hidden
                    className="absolute top-6 left-0 z-10 grid size-8 place-items-center rounded-full border sm:size-10"
                    style={{ background: 'var(--surface-raised)' }}
                  >
                    {entry.current ? (
                      <motion.span
                        className="bg-brand-400 size-2.5 rounded-full"
                        animate={{ scale: [1, 1.25, 1], opacity: [1, 0.65, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                      />
                    ) : (
                      <span className="bg-ink-300 dark:bg-ink-600 size-2 rounded-full" />
                    )}
                  </span>

                  <Reveal delay={index * 0.08}>
                    <div className="surface-card hover:border-brand-400/30 rounded-3xl p-6 transition-colors sm:p-7">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-ink-950 text-lg font-semibold tracking-tight dark:text-white">
                            {copy.role}
                          </h3>
                          {entry.current ? (
                            <span className="border-brand-400/25 bg-brand-400/10 text-brand-600 dark:text-brand-300 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase">
                              {t.experience.currentBadge}
                            </span>
                          ) : null}
                        </div>
                        <p className="text-ink-500 dark:text-ink-400 text-sm font-medium">
                          {entry.org}
                        </p>
                      </div>

                      <span className="text-ink-400 shrink-0 font-mono text-xs whitespace-nowrap">
                        {entry.period}
                      </span>
                    </div>

                    <p className="text-ink-600 dark:text-ink-300 mb-5 text-sm leading-relaxed text-pretty">
                      {copy.summary}
                    </p>

                    <ul className="mb-5 space-y-2.5">
                      {copy.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2.5">
                          <Check
                            aria-hidden
                            className="text-brand-500 mt-0.5 size-4 shrink-0"
                          />
                          <span className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed text-pretty">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {entry.stack.map((tech) => (
                          <TechBadge key={tech} label={tech} />
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
