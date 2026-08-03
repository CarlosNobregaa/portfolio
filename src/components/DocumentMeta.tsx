'use client'

import { useEffect } from 'react'
import { useT } from '@/i18n/LocaleProvider'

/**
 * Keeps <title> and the meta description in sync with the active locale.
 * The static export ships the English metadata from layout.tsx, which is what
 * crawlers index; this only updates the live document after a locale switch.
 */
export function DocumentMeta() {
  const t = useT()

  useEffect(() => {
    document.title = t.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)
  }, [t])

  return null
}
