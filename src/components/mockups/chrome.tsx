import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Shared chrome for the interface previews.
 *
 * The real products are private, so these are reconstructions built in plain
 * markup — no screenshots, no images, nothing to load. They are decorative
 * illustrations of the layout, so the whole tree is hidden from assistive tech
 * and the surrounding component supplies a text description instead.
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
      className={cn('overflow-hidden rounded-xl border shadow-2xl shadow-black/10 dark:shadow-black/40', className)}
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
        'mx-auto w-[190px] overflow-hidden rounded-[1.75rem] border-[5px] border-ink-950/85 shadow-2xl shadow-black/25 dark:border-ink-800',
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

/** A muted placeholder bar standing in for a line of text. */
export function Bar({
  w = 'w-full',
  h = 'h-1.5',
  tone = 'muted',
  className,
}: {
  w?: string
  h?: string
  tone?: 'muted' | 'strong' | 'accent'
  className?: string
}) {
  return (
    <span
      className={cn(
        'block rounded-full',
        h,
        w,
        tone === 'strong' && 'bg-ink-400/60 dark:bg-ink-300/40',
        tone === 'muted' && 'bg-ink-300/45 dark:bg-ink-600/45',
        tone === 'accent' && 'bg-brand-400/60',
        className,
      )}
    />
  )
}

/** Left navigation rail used by the dashboard-shaped mockups. */
export function Sidebar({ accent, items = 6 }: { accent: string; items?: number }) {
  return (
    <div
      className="flex w-[46px] shrink-0 flex-col gap-2.5 border-r p-2.5"
      style={{ background: 'var(--surface-sunken)' }}
    >
      <div className={cn('size-5 rounded-md bg-gradient-to-br', accent)} />
      <div className="mt-1 flex flex-col gap-2">
        {Array.from({ length: items }).map((_, i) => (
          <span
            key={i}
            className={cn(
              'block size-4 rounded',
              i === 1 ? 'bg-brand-400/45' : 'bg-ink-300/35 dark:bg-ink-600/40',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export function StatTile({
  label,
  value,
  tone = 'muted',
}: {
  label: string
  value: string
  tone?: 'muted' | 'accent' | 'positive'
}) {
  return (
    <div
      className="flex-1 rounded-lg border p-2"
      style={{ background: 'var(--surface)' }}
    >
      <p className="text-ink-400 mb-1 text-[7px] tracking-wide uppercase">{label}</p>
      <p
        className={cn(
          'font-mono text-[12px] leading-none font-semibold',
          tone === 'accent' && 'text-brand-500',
          tone === 'positive' && 'text-emerald-500',
          tone === 'muted' && 'text-ink-900 dark:text-ink-100',
        )}
      >
        {value}
      </p>
    </div>
  )
}
