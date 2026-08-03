'use client'

import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { DocumentMeta } from './DocumentMeta'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <LocaleProvider>
        <DocumentMeta />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  )
}
