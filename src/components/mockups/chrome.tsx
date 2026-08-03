'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Shared chrome for the interface previews.
 *
 * The real products are private client systems, so these are reconstructions
 * built in plain markup — no screenshots, no image files, and every name,
 * figure and date is invented.
 *
 * Everything is designed at a natural ~11px base so the detail page can render
 * it at full size, and the project cards scale the whole tree down to a
 * thumbnail. Sizes are therefore in fixed px, not responsive units.
 */

/** Design height of every mockup body, so cards can crop predictably. */
export const MOCKUP_BODY_H = 'h-[420px]'

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
        className="flex items-center gap-2.5 border-b px-4 py-2.5"
        style={{ background: 'var(--surface-sunken)' }}
      >
        <div className="flex gap-2">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div
          className="text-ink-400 ml-2 flex-1 truncate rounded-md px-3 py-1 text-center font-mono text-[11px]"
          style={{ background: 'var(--surface)' }}
        >
          {url}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="border-ink-950/85 dark:border-ink-800 mx-auto w-[300px] overflow-hidden rounded-[2.25rem] border-[7px] shadow-2xl shadow-black/25"
      style={{ background: 'var(--surface-raised)' }}
    >
      <div className="relative">
        <div className="bg-ink-950/85 dark:bg-ink-800 absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl" />
        {children}
      </div>
    </div>
  )
}

export function Avatar({
  initials,
  tint = 'bg-brand-400/25 text-brand-700 dark:text-brand-200',
  size = 'size-7 text-[10px]',
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
        tint,
      )}
    >
      {initials}
    </span>
  )
}

/**
 * Left navigation rail. When `onSelect` is supplied the items become real
 * buttons that switch the panel beside them.
 */
export function Sidebar({
  accent,
  brand,
  items,
  active,
  onSelect,
}: {
  accent: string
  brand: string
  items: string[]
  active: string
  onSelect?: (item: string) => void
}) {
  return (
    <div
      className="flex w-[150px] shrink-0 flex-col gap-4 border-r p-3"
      style={{ background: 'var(--surface-sunken)' }}
    >
      <div className="flex items-center gap-2 px-1">
        <span className={cn('size-6 shrink-0 rounded-md bg-gradient-to-br', accent)} />
        <span className="text-ink-900 dark:text-ink-100 truncate text-[13px] font-bold tracking-tight">
          {brand}
        </span>
      </div>

      <nav className="flex flex-col gap-0.5">
        {items.map((item) => {
          const isActive = item === active
          const className = cn(
            'w-full truncate rounded-md px-2.5 py-1.5 text-left text-[11px] transition-colors',
            isActive
              ? 'bg-brand-400/15 text-brand-700 dark:text-brand-200 font-semibold'
              : 'text-ink-500 dark:text-ink-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]',
          )

          return onSelect ? (
            <button
              key={item}
              type="button"
              onClick={() => onSelect(item)}
              aria-current={isActive ? 'page' : undefined}
              className={className}
            >
              {item}
            </button>
          ) : (
            <span key={item} className={className}>
              {item}
            </span>
          )
        })}
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
    <div className="flex-1 rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
      <p className="text-ink-400 mb-1.5 text-[10px] tracking-wide uppercase">{label}</p>
      <p
        className={cn(
          'font-mono text-[19px] leading-none font-semibold',
          tone === 'accent' && 'text-brand-500',
          tone === 'positive' && 'text-emerald-500',
          tone === 'muted' && 'text-ink-900 dark:text-ink-100',
        )}
      >
        {value}
      </p>
      {delta ? (
        <p className="mt-1.5 text-[10px] font-medium text-emerald-500">{delta}</p>
      ) : null}
    </div>
  )
}

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
        'shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap',
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}

/** Header row shared by the dashboard mockups. */
export function PanelHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-ink-950 truncate text-[15px] font-bold tracking-tight dark:text-white">
          {title}
        </p>
        {subtitle ? (
          <p className="text-ink-400 truncate text-[11px]">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  )
}

/** Primary action button inside a mockup. */
export function MockButton({
  children,
  onClick,
  tone = 'solid',
  className,
}: {
  children: ReactNode
  onClick?: () => void
  tone?: 'solid' | 'ghost'
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'shrink-0 rounded-md px-3 py-1.5 text-[11px] font-semibold transition-colors',
        tone === 'solid'
          ? 'bg-brand-500 hover:bg-brand-600 text-white'
          : 'border-hairline text-ink-600 dark:text-ink-300 border hover:bg-black/[0.04] dark:hover:bg-white/[0.06]',
        className,
      )}
    >
      {children}
    </button>
  )
}
