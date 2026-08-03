/**
 * Interactive tech stack. Category labels and the blurb for each item are
 * translated (keyed by `id`); the technology names themselves are not.
 */

import type { Dictionary } from '@/i18n/types'

/** Constrained to the translated categories. */
export type StackCategoryId = keyof Dictionary['stack']['categories']

export type StackItem = {
  id: string
  name: string
  /** 1-5. Drives the proficiency bar. */
  level: number
}

export type StackCategory = {
  id: StackCategoryId
  icon: 'Server' | 'Monitor' | 'Database' | 'Sparkles' | 'Cloud' | 'FlaskConical'
  accent: string
  items: StackItem[]
}

export const stack: StackCategory[] = [
  {
    id: 'backend',
    icon: 'Server',
    accent: 'text-emerald-400',
    items: [
      { id: 'nestjs', name: 'NestJS', level: 5 },
      { id: 'node', name: 'Node.js 22', level: 5 },
      { id: 'fastify', name: 'Fastify', level: 5 },
      { id: 'typescript', name: 'TypeScript', level: 5 },
      { id: 'bullmq', name: 'BullMQ', level: 5 },
      { id: 'socketio', name: 'Socket.IO', level: 4 },
      { id: 'swagger', name: 'OpenAPI / Swagger', level: 4 },
    ],
  },
  {
    id: 'frontend',
    icon: 'Monitor',
    accent: 'text-sky-400',
    items: [
      { id: 'react', name: 'React 19', level: 5 },
      { id: 'nextjs', name: 'Next.js', level: 5 },
      { id: 'tailwind', name: 'Tailwind CSS 4', level: 5 },
      { id: 'tanstack', name: 'TanStack Router / Query', level: 5 },
      { id: 'shadcn', name: 'shadcn/ui + Radix', level: 5 },
      { id: 'vite', name: 'Vite', level: 4 },
      { id: 'framer', name: 'Framer Motion', level: 4 },
    ],
  },
  {
    id: 'data',
    icon: 'Database',
    accent: 'text-violet-400',
    items: [
      { id: 'postgres', name: 'PostgreSQL 16/17', level: 5 },
      { id: 'prisma', name: 'Prisma 6/7', level: 5 },
      { id: 'typeorm', name: 'TypeORM', level: 4 },
      { id: 'redis', name: 'Redis 7', level: 4 },
      { id: 'multitenant', name: 'Multi-tenant schemas', level: 5 },
    ],
  },
  {
    id: 'ai',
    icon: 'Sparkles',
    accent: 'text-fuchsia-400',
    items: [
      { id: 'openai-agents', name: 'OpenAI Agents SDK', level: 5 },
      { id: 'anthropic', name: 'Claude API', level: 4 },
      { id: 'langchain', name: 'LangChain', level: 4 },
      { id: 'guardrails', name: 'Guardrails', level: 4 },
      { id: 'rag', name: 'RAG / knowledge bases', level: 4 },
      { id: 'mcp', name: 'MCP servers', level: 4 },
    ],
  },
  {
    id: 'infra',
    icon: 'Cloud',
    accent: 'text-amber-400',
    items: [
      { id: 'aws', name: 'AWS (EKS, ECR, S3, SES)', level: 4 },
      { id: 'k8s', name: 'Kubernetes + Helm', level: 4 },
      { id: 'docker', name: 'Docker Compose', level: 5 },
      { id: 'actions', name: 'GitHub Actions', level: 5 },
      { id: 'monorepo', name: 'Turborepo / pnpm', level: 5 },
    ],
  },
  {
    id: 'quality',
    icon: 'FlaskConical',
    accent: 'text-lime-400',
    items: [
      { id: 'vitest', name: 'Vitest / Jest', level: 5 },
      { id: 'zod', name: 'Zod contracts', level: 5 },
      { id: 'playwright', name: 'Playwright', level: 4 },
      { id: 'otel', name: 'OpenTelemetry', level: 4 },
      { id: 'sentry', name: 'Sentry', level: 4 },
      { id: 'customlint', name: 'Custom lint rules', level: 4 },
    ],
  },
]
