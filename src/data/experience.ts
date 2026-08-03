/**
 * Professional timeline. Periods and org names live here; role titles,
 * descriptions and highlight bullets are translated (keyed by `id`).
 *
 * NOTE: periods were inferred from repository history in this workspace.
 * Adjust them in this single file if your official dates differ.
 */

import type { Dictionary } from '@/i18n/types'

/** Constrained to the translated entries so the two files cannot drift apart. */
export type ExperienceId = keyof Dictionary['experience']['items']

export type ExperienceEntry = {
  id: ExperienceId
  org: string
  period: string
  current?: boolean
  /** Technologies that defined the role. */
  stack: string[]
  /** Number of translated highlight bullets to render. */
  highlights: number
}

export const experience: ExperienceEntry[] = [
  {
    id: 'automy-lead',
    org: 'Automy',
    period: '2024 — Present',
    current: true,
    stack: ['NestJS', 'React 19', 'PostgreSQL', 'Kubernetes', 'OpenAI', 'Claude'],
    highlights: 4,
  },
  {
    id: 'platform-multitenant',
    org: 'Apex CRM · ALDEA',
    period: '2026',
    stack: ['Turborepo', 'Prisma 7', 'Multi-tenant', 'Helm', 'AWS EKS'],
    highlights: 3,
  },
  {
    id: 'ai-agents',
    org: 'Automed AI · Flowmail',
    period: '2025 — 2026',
    stack: ['OpenAI Agents SDK', 'LangChain', 'WhatsApp Cloud API', 'OpenTelemetry'],
    highlights: 3,
  },
  {
    id: 'saas-foundations',
    org: 'Chatfy · iaçougue',
    period: '2025',
    stack: ['NestJS', 'TypeORM', 'Stripe', 'Next.js', 'Docker'],
    highlights: 3,
  },
]
