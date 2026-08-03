'use client'

import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { education } from '@/data/education'

/** Rendered inside the Experience section, below the timeline. */
export function Education() {
  const t = useT()

  return (
    <div className="mt-14">
      <Reveal>
        <h3 className="text-ink-400 mb-5 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
          {t.education.eyebrow}
        </h3>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((entry, index) => {
          const copy = t.education.items[entry.id]

          return (
            <Reveal key={entry.id} delay={index * 0.08}>
              <div className="surface-card hover:border-brand-400/30 h-full rounded-3xl p-6 transition-colors">
                <div className="mb-3 flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="border-brand-400/20 bg-brand-400/10 text-brand-500 dark:text-brand-300 grid size-10 shrink-0 place-items-center rounded-xl border"
                  >
                    <GraduationCap className="size-5" />
                  </span>

                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-ink-950 text-base font-semibold tracking-tight dark:text-white">
                        {copy.degree}
                      </h4>
                      {entry.ongoing ? (
                        <span className="border-brand-400/25 bg-brand-400/10 text-brand-600 dark:text-brand-300 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase">
                          {t.education.ongoingBadge}
                        </span>
                      ) : null}
                    </div>

                    <p className="text-ink-500 dark:text-ink-400 text-sm">
                      {copy.institution}{' '}
                      <span className="text-ink-400 font-mono text-xs">
                        · {entry.period}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed text-pretty">
                  {copy.note}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
