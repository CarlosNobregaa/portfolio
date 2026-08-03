import type { en } from './dictionaries/en'

/**
 * Widens the `as const` literal types of the English dictionary into plain
 * `string`/`string[]` so translations can hold arbitrary text while still being
 * structurally checked against the source of truth.
 *
 * Adding a key to `en` immediately makes pt-BR and es fail to compile until they
 * are translated too — which is exactly the guarantee we want.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { -readonly [K in keyof T]: Widen<T[K]> }

export type Dictionary = Widen<typeof en>
