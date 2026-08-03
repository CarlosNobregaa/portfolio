'use client'

import { Clock, Compass, Eye, Fingerprint, MapPin, ShieldCheck, Type } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { profile } from '@/data/profile'

const PRINCIPLE_ICONS = [Type, Fingerprint, Eye, ShieldCheck] as const

export function About() {
  const t = useT()

  const facts = [
    { icon: MapPin, label: t.about.locationLabel, value: profile.location },
    { icon: Clock, label: t.about.timezoneLabel, value: profile.timezone },
    { icon: Compass, label: t.about.focusLabel, value: t.about.focusValue },
  ]

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          className="mb-14"
        />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div className="space-y-6">
            <Reveal>
              <p className="text-ink-800 dark:text-ink-100 text-lg leading-relaxed text-pretty sm:text-xl">
                {t.about.lead}
              </p>
            </Reveal>

            {t.about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.06 * (i + 1)}>
                <p className="text-ink-500 dark:text-ink-400 leading-relaxed text-pretty">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <dl
                className="mt-8 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3"
                style={{ background: 'var(--hairline)' }}
              >
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-1.5 px-4 py-4"
                    style={{ background: 'var(--surface-raised)' }}
                  >
                    <dt className="text-ink-400 flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase">
                      <fact.icon className="size-3.5" />
                      {fact.label}
                    </dt>
                    <dd className="text-ink-900 dark:text-ink-100 text-sm font-medium">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h3 className="text-ink-400 mb-5 font-mono text-[11px] font-medium tracking-[0.2em] uppercase">
                {t.about.principlesTitle}
              </h3>
            </Reveal>

            <Stagger className="space-y-3">
              {t.about.principles.map((principle, i) => {
                const Icon = PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length]
                return (
                  <StaggerItem key={principle.title}>
                    <div className="surface-card hover:border-brand-400/30 group rounded-2xl p-4 transition-colors">
                      <div className="flex gap-3.5">
                        <span className="border-brand-400/20 bg-brand-400/10 text-brand-500 dark:text-brand-300 grid size-9 shrink-0 place-items-center rounded-xl border transition-transform group-hover:scale-105">
                          <Icon className="size-4" />
                        </span>
                        <div className="space-y-1">
                          <p className="text-ink-950 text-sm font-semibold dark:text-white">
                            {principle.title}
                          </p>
                          <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed">
                            {principle.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
