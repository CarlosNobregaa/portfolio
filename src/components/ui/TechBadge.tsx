'use client'

import { cn } from '@/lib/utils'

export function TechBadge({
  label,
  size = 'sm',
  className,
}: {
  label: string
  size?: 'xs' | 'sm'
  className?: string
}) {
  return (
    <span
      className={cn(
        'border-hairline text-ink-600 dark:text-ink-300 inline-flex items-center rounded-md border bg-black/[0.03] font-mono font-medium whitespace-nowrap transition-colors duration-200 dark:bg-white/[0.04]',
        'hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-400/8',
        size === 'xs' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-1 text-[11px]',
        className,
      )}
      style={{ borderColor: 'var(--hairline)' }}
    >
      {label}
    </span>
  )
}
