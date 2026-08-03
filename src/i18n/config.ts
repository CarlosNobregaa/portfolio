export const locales = ['en', 'pt-BR', 'es'] as const

export type Locale = (typeof locales)[number]

/**
 * English is the mandated boot locale. A visitor's stored preference only takes
 * effect after hydration, so the first paint is always EN.
 */
export const defaultLocale: Locale = 'en'

export const STORAGE_KEY = 'portfolio.locale'

type LocaleMeta = {
  /** Shown in the switcher trigger. */
  code: string
  /** Full name, in its own language. */
  label: string
  flag: string
  /** Value for the <html lang> attribute. */
  htmlLang: string
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { code: 'EN', label: 'English', flag: '🇺🇸', htmlLang: 'en' },
  'pt-BR': { code: 'PT', label: 'Português (BR)', flag: '🇧🇷', htmlLang: 'pt-BR' },
  es: { code: 'ES', label: 'Español', flag: '🇪🇸', htmlLang: 'es' },
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}
