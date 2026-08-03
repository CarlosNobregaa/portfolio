import type { Dictionary } from '@/i18n/types'

/** Constrained to the translated entries so the two files cannot drift apart. */
export type EducationId = keyof Dictionary['education']['items']

export type EducationEntry = {
  id: EducationId
  institution: string
  /** Short form shown as a badge, e.g. "UFC". */
  abbreviation: string
  period: string
  /** Still in progress. */
  ongoing?: boolean
}

export const education: EducationEntry[] = [
  {
    id: 'ufc-telecom',
    institution: 'Universidade Federal do Ceará',
    abbreviation: 'UFC',
    period: '2022 — 2027',
    ongoing: true,
  },
]
