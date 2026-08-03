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

export const siteUrl = 'https://carlosnobrega.dev'
