/** Hairline rule that fades out at both ends. Decorative only. */
export function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--hairline-strong), transparent)',
        }}
      />
    </div>
  )
}
