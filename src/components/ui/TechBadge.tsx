/** Monospace pill for a technology name. */
export function TechBadge({ label }: { label: string }) {
  return (
    <span className="border-hairline text-ink-600 dark:text-ink-300 hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-400/8 inline-flex items-center rounded-md border bg-black/[0.03] px-2 py-1 font-mono text-[11px] font-medium whitespace-nowrap transition-colors duration-200 dark:bg-white/[0.04]">
      {label}
    </span>
  )
}
