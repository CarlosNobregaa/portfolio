/**
 * Single source of truth for personal + contact data.
 * Everything here is language-agnostic. Translatable copy lives in src/i18n/dictionaries.
 */
export const profile = {
  name: 'Carlos Nóbrega',
  shortName: 'Carlos',
  initials: 'CN',
  email: 'adm.chatfy@gmail.com',
  location: 'Brazil',
  timezone: 'GMT-3',
  company: 'Automy',
  companyUrl: 'https://github.com/automyai',

  /** Footer copyright year. Static on purpose — see Footer.tsx. */
  copyrightSince: '2026',

  githubHandle: 'CarlosNobregaa',

  links: {
    github: 'https://github.com/CarlosNobregaa',
    githubOrg: 'https://github.com/automyai',
    // TODO: replace with your real LinkedIn URL
    linkedin: 'https://www.linkedin.com/in/carlos-nobrega',
    /**
     * TODO: drop a CV at public/carlos-nobrega-cv.pdf and set this to
     * '/carlos-nobrega-cv.pdf'. While empty, the Hero hides the résumé button
     * rather than linking to a 404.
     */
    resume: '',
  },

  /**
   * Structural facts counted directly from the repositories in this workspace —
   * not marketing numbers.
   */
  stats: {
    productionPlatforms: 6,
    domainModules: 95,
    monorepos: 3,
    yearsFocus: 5,
  },
} as const

/**
 * Absolute origin for `metadataBase`, Open Graph, robots.txt and the sitemap.
 * It must be a URL that actually resolves — a dead origin here silently breaks
 * every social preview, because the OG image tag is rendered against it.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project when a custom domain lands.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-two-pied-15.vercel.app'
