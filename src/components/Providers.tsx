'use client'

import { ThemeProvider } from 'next-themes'
import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { DocumentMeta } from './DocumentMeta'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {/*
        `reducedMotion="user"` disables transform/layout animation across every
        Framer component when the OS asks for it. Doing it here rather than
        per-component means no component has to branch on the preference, which
        is what would otherwise cause server/client hydration mismatches.
      */}
      <MotionConfig reducedMotion="user">
        <LocaleProvider>
          <DocumentMeta />
          {children}
        </LocaleProvider>
      </MotionConfig>
    </ThemeProvider>
  )
}
