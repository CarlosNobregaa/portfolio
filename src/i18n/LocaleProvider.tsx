'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { defaultLocale, isLocale, localeMeta, STORAGE_KEY, type Locale } from './config'
import { dictionaries } from './index'
import type { Dictionary } from './types'

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  /** Dictionary for the active locale. */
  t: Dictionary
  /** False until the stored preference has been applied. */
  ready: boolean
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Always boot in English so the first paint is deterministic and matches the
  // server-rendered HTML. A stored preference is applied in the effect below.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // Private mode / storage disabled — English stays.
    }
    if (isLocale(stored) && stored !== defaultLocale) {
      setLocaleState(stored)
    }
    setReady(true)
  }, [])

  // Keep <html lang> in sync so screen readers and translation tools behave.
  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Preference simply will not persist.
    }
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale], ready }),
    [locale, setLocale, ready],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used inside <LocaleProvider>')
  }
  return ctx
}

/** Shorthand for components that only need the dictionary. */
export function useT(): Dictionary {
  return useLocale().t
}
