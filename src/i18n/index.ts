import { en } from './dictionaries/en'
import { ptBR } from './dictionaries/pt-BR'
import { es } from './dictionaries/es'
import type { Locale } from './config'
import type { Dictionary } from './types'

/**
 * All dictionaries are bundled eagerly. They are plain objects totalling a few
 * dozen KB gzipped, and shipping them together is what makes locale switching
 * instant with no loading state.
 */
export const dictionaries: Record<Locale, Dictionary> = {
  en,
  'pt-BR': ptBR,
  es,
}

export { en, ptBR, es }
export type { Dictionary }
