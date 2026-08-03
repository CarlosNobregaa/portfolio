import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Shared chrome for the interface previews.
 *
 * The real products are private client systems, so these are reconstructions
 * built in plain markup — no screenshots, no image files, and every name,
 * figure and date is invented. They are decorative illustrations, so the tree
 * is hidden from assistive tech and the caller supplies a text description.
 */

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border shadow-2xl shadow-black/10 dark:shadow-black/40',
        className,
      )}
      style={{ background: 'var(--surface-raised)' }}
    >
      <div
        className="flex items-center gap-2 border-b px-3 py-2"
        style={{ background: 'var(--surface-sunken)' }}
      >
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-red-400/70" />
          <span className="size-2 rounded-full bg-amber-400/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
        </div>
        <div
          className="text-ink-400 ml-2 flex-1 truncate rounded-md px-2 py-0.5 text-center font-mono text-[9px]"
          style={{ background: 'var(--surface)' }}
        >
          {url}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'border-ink-950/85 dark:border-ink-800 mx-auto w-[215px] overflow-hidden rounded-[1.75rem] border-[5px] shadow-2xl shadow-black/25',
        className,
      )}
      style={{ background: 'var(--surface-raised)' }}
    >
      <div className="relative">
        <div className="bg-ink-950/85 dark:bg-ink-800 absolute top-0 left-1/2 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-xl" />
        {children}
      </div>
    </div>
  )
}

/** Small avatar disc showing initials. */
export function Avatar({
  initials,
  tint = 'bg-brand-400/25 text-brand-700 dark:text-brand-200',
  size = 'size-5',
}: {
  initials: string
  tint?: string
  size?: string
}) {
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center rounded-full font-semibold',
        size,
        size === 'size-5' ? 'text-[7px]' : 'text-[8px]',
        tint,
      )}
    >
      {initials}
    </span>
  )
}

/** Left navigation rail with real labels. */
export function Sidebar({
  accent,
  brand,
  items,
  activeIndex = 1,
}: {
  accent: string
  brand: string
  items: string[]
  activeIndex?: number
}) {
  return (
    <div
      className="flex w-[92px] shrink-0 flex-col gap-3 border-r p-2.5"
      style={{ background: 'var(--surface-sunken)' }}
    >
      <div className="flex items-center gap-1.5">
        <span className={cn('size-4 shrink-0 rounded bg-gradient-to-br', accent)} />
        <span className="text-ink-900 dark:text-ink-100 truncate text-[9px] font-bold tracking-tight">
          {brand}
        </span>
      </div>

      <nav className="flex flex-col gap-0.5">
        {items.map((item, i) => (
          <span
            key={item}
            className={cn(
              'truncate rounded px-1.5 py-1 text-[8px]',
              i === activeIndex
                ? 'bg-brand-400/15 text-brand-700 dark:text-brand-200 font-semibold'
                : 'text-ink-500 dark:text-ink-400',
            )}
          >
            {item}
          </span>
        ))}
      </nav>
    </div>
  )
}

export function StatTile({
  label,
  value,
  delta,
  tone = 'muted',
}: {
  label: string
  value: string
  delta?: string
  tone?: 'muted' | 'accent' | 'positive'
}) {
  return (
    <div className="flex-1 rounded-lg border p-2" style={{ background: 'var(--surface)' }}>
      <p className="text-ink-400 mb-1 text-[7px] tracking-wide uppercase">{label}</p>
      <p
        className={cn(
          'font-mono text-[13px] leading-none font-semibold',
          tone === 'accent' && 'text-brand-500',
          tone === 'positive' && 'text-emerald-500',
          tone === 'muted' && 'text-ink-900 dark:text-ink-100',
        )}
      >
        {value}
      </p>
      {delta ? (
        <p className="mt-1 text-[7px] font-medium text-emerald-500">{delta}</p>
      ) : null}
    </div>
  )
}

/** Coloured status pill used across the dashboards. */
export function Pill({
  children,
  tone,
}: {
  children: ReactNode
  tone: 'green' | 'amber' | 'red' | 'blue' | 'violet' | 'neutral'
}) {
  const tones = {
    green: 'bg-emerald-400/20 text-emerald-700 dark:text-emerald-400',
    amber: 'bg-amber-400/20 text-amber-700 dark:text-amber-400',
    red: 'bg-red-400/20 text-red-600 dark:text-red-400',
    blue: 'bg-sky-400/20 text-sky-700 dark:text-sky-400',
    violet: 'bg-violet-400/20 text-violet-700 dark:text-violet-300',
    neutral: 'bg-ink-400/15 text-ink-500 dark:text-ink-400',
  }

  return (
    <span
      className={cn(
        'shrink-0 rounded px-1.5 py-0.5 text-[7px] font-semibold whitespace-nowrap',
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}
