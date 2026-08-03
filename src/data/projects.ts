/**
 * Language-agnostic project metadata, extracted from the real repositories in
 * the AUTOMY workspace (package.json manifests, module trees, CI workflows).
 *
 * All prose (name context, problem, solution, impact) is translated and lives in
 * src/i18n/dictionaries keyed by the same `id`.
 */

import type { Dictionary } from '@/i18n/types'

export type ProjectTier = 'flagship' | 'feature' | 'sidecar'

/**
 * Ids are constrained to the translated project entries, so adding a project
 * without translating it — or renaming one on only one side — fails to compile.
 */
export type ProjectId = keyof Dictionary['projects']['items']
export type MetricKey = keyof Dictionary['projects']['metrics']

export type Project = {
  id: ProjectId
  /** Product name — not translated. */
  name: string
  year: string
  tier: ProjectTier
  /** Lucide icon name, resolved in the Projects section. */
  icon:
    | 'Building2'
    | 'Users'
    | 'Bot'
    | 'Mail'
    | 'Handshake'
    | 'ShieldCheck'
    | 'Beef'
    | 'Boxes'
  /** Tailwind gradient stops for the card accent. */
  accent: string
  /** Tech badges, grouped so the card can render them in order. */
  stack: string[]
  /** Countable structural metrics — value is a number/short string, label is translated. */
  metrics: { key: MetricKey; value: string }[]
  repo?: string
  demo?: string
  /** Private client work — renders a lock instead of a repo link. */
  privateRepo?: boolean
}

export const projects: Project[] = [
  {
    id: 'aldea',
    name: 'ALDEA Investor Portal',
    year: '2026',
    tier: 'flagship',
    icon: 'Building2',
    accent: 'from-emerald-400 via-teal-400 to-cyan-500',
    stack: [
      'NestJS 11',
      'Fastify 5',
      'Prisma 6',
      'PostgreSQL 17',
      'BullMQ',
      'Redis 7.4',
      'React 19',
      'Vite',
      'Tailwind 4',
      'Claude API',
      'AWS EKS',
      'Helm',
      'Playwright',
      'Argon2',
    ],
    metrics: [
      { key: 'modules', value: '19' },
      { key: 'portals', value: '2' },
      { key: 'deploy', value: 'EKS + Helm' },
    ],
    repo: 'https://github.com/automyai/aldea',
    privateRepo: true,
  },
  {
    id: 'apex-crm',
    name: 'Apex CRM',
    year: '2026',
    tier: 'flagship',
    icon: 'Users',
    accent: 'from-violet-400 via-fuchsia-400 to-indigo-500',
    stack: [
      'Turborepo',
      'NestJS 11',
      'Prisma 7',
      'PostgreSQL 16',
      'Redis',
      'BullMQ',
      'Socket.IO',
      'LangChain',
      'OpenAI',
      'React 19',
      'TanStack Router',
      'React Flow',
      'MCP',
      'Kubernetes',
    ],
    metrics: [
      { key: 'modules', value: '33' },
      { key: 'apps', value: '4' },
      { key: 'isolation', value: 'schema/tenant' },
    ],
    repo: 'https://github.com/automyai/apex-crm',
    privateRepo: true,
  },
  {
    id: 'automed',
    name: 'Automed AI',
    year: '2025',
    tier: 'flagship',
    icon: 'Bot',
    accent: 'from-sky-400 via-blue-400 to-indigo-500',
    stack: [
      'NestJS',
      'TypeORM',
      'OpenAI Agents SDK',
      'LangChain',
      'WhatsApp Cloud API',
      'BullMQ',
      'Redis',
      'PostgreSQL',
      'OpenTelemetry',
      'Prometheus',
      'Sentry',
      'Firebase',
      'React',
    ],
    metrics: [
      { key: 'calendars', value: '5' },
      { key: 'modules', value: '22' },
      { key: 'observability', value: 'OTel + Sentry' },
    ],
    privateRepo: true,
  },
  {
    id: 'flowmail',
    name: 'Flowmail',
    year: '2025',
    tier: 'feature',
    icon: 'Mail',
    accent: 'from-orange-400 via-amber-400 to-rose-500',
    stack: [
      'NestJS',
      'TypeORM',
      'OpenAI Agents',
      'OpenAI Guardrails',
      'Shopify App + Billing',
      'Stripe',
      'BullMQ',
      'Redis',
      'React',
      'i18next',
    ],
    metrics: [
      { key: 'modules', value: '21' },
      { key: 'services', value: '5' },
      { key: 'billing', value: 'Shopify + Stripe' },
    ],
    privateRepo: true,
  },
  {
    id: 'chatfy',
    name: 'Chatfy Affiliates',
    year: '2025',
    tier: 'feature',
    icon: 'Handshake',
    accent: 'from-pink-400 via-rose-400 to-red-500',
    stack: [
      'NestJS 11',
      'TypeORM',
      'PostgreSQL',
      'Stripe',
      'AWS S3',
      'Sentry',
      'React',
      'Vite',
      'shadcn/ui',
      'TanStack Query',
    ],
    metrics: [
      { key: 'surfaces', value: '3' },
      { key: 'payouts', value: 'Stripe' },
      { key: 'uploads', value: 'S3 presigned' },
    ],
    privateRepo: true,
  },
  {
    id: 'quality-gate',
    name: 'Apex Quality Gate',
    year: '2026',
    tier: 'feature',
    icon: 'ShieldCheck',
    accent: 'from-lime-400 via-green-400 to-emerald-500',
    stack: ['Vitest', 'Zod', 'GitHub Actions', 'Contract testing', 'TypeScript'],
    metrics: [
      { key: 'layers', value: '3' },
      { key: 'gate', value: 'CI blocking' },
      { key: 'context', value: 'isolated' },
    ],
    repo: 'https://github.com/automyai/apex-crm-quality-gate',
    privateRepo: true,
  },
  {
    id: 'template-api',
    name: 'Automy Template API',
    year: '2025',
    tier: 'sidecar',
    icon: 'Boxes',
    accent: 'from-slate-400 via-zinc-400 to-neutral-500',
    stack: ['NestJS 11', 'Fastify 5', 'TypeORM', 'Swagger', 'Sentry', 'Throttler', 'Docker'],
    metrics: [
      { key: 'reuse', value: '4 services' },
      { key: 'baseline', value: 'auth + obs' },
    ],
    privateRepo: true,
  },
  {
    id: 'iacougue',
    name: 'iaçougue',
    year: '2025',
    tier: 'sidecar',
    icon: 'Beef',
    accent: 'from-red-400 via-orange-400 to-amber-500',
    stack: ['Next.js 14', 'App Router', 'Tailwind CSS', 'Docker', 'Kubernetes'],
    metrics: [
      { key: 'compliance', value: 'Meta approved' },
      { key: 'lighthouse', value: 'static export' },
    ],
    privateRepo: true,
  },
]
