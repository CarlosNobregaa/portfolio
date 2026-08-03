'use client'

/**
 * Fixed ambient background: a subtle grid, three slow-drifting colour glows and
 * a vignette. Purely decorative, so it is hidden from assistive tech and never
 * intercepts pointer events.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-backdrop absolute inset-0 opacity-70" />

      <div
        className="animate-float absolute -top-40 -left-32 size-[38rem] rounded-full blur-[120px]"
        style={{ background: 'var(--glow-a)' }}
      />
      <div
        className="animate-float absolute top-1/3 -right-40 size-[34rem] rounded-full blur-[130px]"
        style={{ background: 'var(--glow-b)', animationDelay: '-3s' }}
      />
      <div
        className="animate-float absolute bottom-0 left-1/3 size-[30rem] rounded-full blur-[120px]"
        style={{ background: 'var(--glow-c)', animationDelay: '-6s' }}
      />

      {/* Vignette keeps text legible over the glows. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, transparent 40%, color-mix(in oklab, var(--surface) 78%, transparent) 100%)',
        }}
      />
    </div>
  )
}
