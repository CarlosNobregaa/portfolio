'use client'

import { useT } from '@/i18n/LocaleProvider'

/** Tiny classname joiner — enough for this codebase, no extra dependency. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const sections = [
  'about',
  'projects',
  'stack',
  'experience',
  'contact',
] as const

export type SectionId = (typeof sections)[number]

/** Section id → translated nav label. Shared by the header and the footer. */
export function useNavLabels(): Record<SectionId, string> {
  const t = useT()
  return {
    about: t.nav.about,
    projects: t.nav.projects,
    stack: t.nav.stack,
    experience: t.nav.experience,
    contact: t.nav.contact,
  }
}
