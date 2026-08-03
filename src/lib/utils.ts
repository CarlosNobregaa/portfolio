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
