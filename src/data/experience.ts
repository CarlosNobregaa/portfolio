import type { Dictionary } from '@/i18n/types'

/**
 * Professional timeline. Periods and org names live here; role titles,
 * descriptions and highlight bullets are translated (keyed by `id`).
 */

/** Constrained to the translated entries so the two files cannot drift apart. */
export type ExperienceId = keyof Dictionary['experience']['items']

export type ExperienceEntry = {
  id: ExperienceId
  org: string
  period: string
  current?: boolean
  /** Technologies that defined the work. */
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'automy-dev',
    org: 'Automy',
    period: '2024 — Present',
    current: true,
    stack: ['NestJS', 'React 19', 'PostgreSQL', 'BullMQ', 'OpenAI', 'Claude'],
  },
  {
    id: 'platform-work',
    org: 'Apex CRM · ALDEA',
    period: '2026',
    stack: ['Turborepo', 'Prisma', 'Multi-tenant', 'Helm', 'AWS EKS'],
  },
  {
    id: 'ai-work',
    org: 'Automed AI · Flowmail',
    period: '2025 — 2026',
    stack: ['OpenAI Agents SDK', 'LangChain', 'WhatsApp Cloud API', 'OpenTelemetry'],
  },
  {
    id: 'first-production',
    org: 'Chatfy · iaçougue',
    period: '2025',
    stack: ['NestJS', 'TypeORM', 'Stripe', 'Next.js', 'Docker'],
  },
  {
    id: 'learning',
    org: 'Self-taught · UFC',
    period: '2023 — 2024',
    stack: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL'],
  },
]
