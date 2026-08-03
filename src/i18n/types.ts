import type { en } from './dictionaries/en'

/**
 * Widens the `as const` literal types of the English dictionary into plain
 * `string`/`string[]` so translations can hold arbitrary text while still being
 * structurally checked against the source of truth.
 *
 * Adding a key to `en` immediately makes pt-BR and es fail to compile until they
 * are translated too — which is exactly the guarantee we want.
 *
 * Arrays are mapped as tuples rather than widened to `Widen<U>[]`, so length is
 * preserved. That matters: `about.principles` is zipped against a fixed icon
 * array and `experience.items.*.highlights` is sliced by a count declared in
 * src/data/experience.ts, so a locale that drops one bullet would otherwise
 * lose it silently instead of failing the build.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly unknown[]
        ? { readonly [K in keyof T]: Widen<T[K]> }
        : { -readonly [K in keyof T]: Widen<T[K]> }

export type Dictionary = Widen<typeof en>
