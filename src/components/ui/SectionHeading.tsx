'use client'

import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <Reveal>
        <span className="border-brand-400/25 bg-brand-400/8 text-brand-600 dark:text-brand-300 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
          <span className="bg-brand-400 size-1.5 rounded-full" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="text-ink-950 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-[2.75rem] md:leading-[1.1] dark:text-white">
          {title}
        </h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              'text-ink-500 dark:text-ink-400 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
              align === 'center' && 'mx-auto',
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
