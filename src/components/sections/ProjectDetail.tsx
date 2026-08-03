'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Lightbulb,
  Lock,
  Target,
  TrendingUp,
  UserRound,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { ProjectMockup } from '@/components/mockups/ProjectMockup'
import { useT } from '@/i18n/LocaleProvider'
import { projects, type ProjectId } from '@/data/projects'
import { PROJECT_ICONS } from '@/data/project-icons'
import { cn } from '@/lib/utils'

export function ProjectDetail({ projectId }: { projectId: ProjectId }) {
  const t = useT()

  const index = projects.findIndex((p) => p.id === projectId)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  const copy = t.projects.items[project.id]
  const labels = t.projects.labels
  const Icon = PROJECT_ICONS[project.icon]

  const blocks = [
    { key: 'problem', icon: Target, label: labels.problem, body: copy.problem },
    { key: 'solution', icon: Lightbulb, label: labels.solution, body: copy.solution },
    { key: 'impact', icon: TrendingUp, label: labels.impact, body: copy.impact },
  ]

  return (
    <article className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <Link
            href="/#projects"
            className="text-ink-500 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300 mb-8 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4" />
            {labels.backToProjects}
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mb-10">
          <Reveal>
            <div className="flex flex-wrap items-start gap-4">
              <span
                aria-hidden
                className={cn(
                  'grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg',
                  project.accent,
                )}
              >
                <Icon className="size-6" />
              </span>

              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-ink-950 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl dark:text-white">
                    {project.name}
                  </h1>
                  <span className="text-ink-400 font-mono text-sm">{project.year}</span>
                </div>
                <p className="text-ink-500 dark:text-ink-400 max-w-2xl text-base text-pretty sm:text-lg">
                  {copy.tagline}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="from-brand-500 shadow-brand-500/20 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r via-brand-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink className="size-4" />
                  {labels.liveDemo}
                </a>
              ) : null}

              {!project.privateRepo && project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-hairline text-ink-800 dark:text-ink-100 hover:border-brand-400/40 inline-flex items-center gap-2 rounded-xl border bg-black/[0.03] px-4 py-2.5 text-sm font-semibold transition-colors dark:bg-white/[0.05]"
                >
                  <Github className="size-4" />
                  {labels.viewRepo}
                </a>
              ) : (
                <span className="border-hairline text-ink-400 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm">
                  <Lock className="size-4" />
                  {labels.privateRepo}
                </span>
              )}
            </div>
          </Reveal>
        </header>

        {/* Interface preview */}
        <Reveal delay={0.12}>
          <section className="mb-12">
            <h2 className="text-ink-400 mb-4 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
              {labels.preview}
            </h2>

            <div
              className="relative overflow-hidden rounded-3xl border p-4 sm:p-8"
              style={{ background: 'var(--surface-sunken)' }}
            >
              <div
                aria-hidden
                className={cn(
                  'absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-70',
                  project.accent,
                )}
              />
              <div aria-hidden className="mx-auto max-w-[560px]">
                <ProjectMockup id={project.id} accent={project.accent} />
              </div>
            </div>

            <p className="text-ink-400 mt-3 max-w-2xl text-xs leading-relaxed">
              {labels.previewNote}
            </p>
          </section>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={0.05}>
          <dl
            className="mb-12 grid gap-px overflow-hidden rounded-2xl border"
            style={{
              background: 'var(--hairline)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))',
            }}
          >
            {project.metrics.map((metric) => (
              <div
                key={metric.key}
                className="flex flex-col gap-1 px-4 py-4"
                style={{ background: 'var(--surface-raised)' }}
              >
                <dd className="text-ink-950 font-mono text-xl font-semibold dark:text-white">
                  {metric.value}
                </dd>
                <dt className="text-ink-400 text-xs leading-tight">
                  {t.projects.metrics[metric.key]}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Case study */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="space-y-9">
            {blocks.map((block, i) => (
              <Reveal key={block.key} delay={i * 0.06}>
                <section>
                  <h2 className="text-ink-400 mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                    <block.icon aria-hidden className="size-4" />
                    {block.label}
                  </h2>
                  <p className="text-ink-600 dark:text-ink-300 leading-relaxed text-pretty">
                    {block.body}
                  </p>
                </section>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-6">
            {/* What I personally worked on */}
            <Reveal delay={0.1}>
              <section className="surface-card rounded-3xl p-5">
                <h2 className="text-brand-600 dark:text-brand-300 mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                  <UserRound aria-hidden className="size-4" />
                  {labels.myRole}
                </h2>
                <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed text-pretty">
                  {copy.contribution}
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.16}>
              <section>
                <h2 className="text-ink-400 mb-3 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                  {labels.stack}
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </section>
            </Reveal>
          </aside>
        </div>

        {/* Next project */}
        <Reveal delay={0.1}>
          <nav
            className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t pt-8"
            aria-label={labels.nextProject}
          >
            <Link
              href="/#projects"
              className="text-ink-500 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300 text-sm font-medium transition-colors"
            >
              {labels.allProjects}
            </Link>

            <Link
              href={`/projects/${next.id}`}
              className="group surface-card hover:border-brand-400/40 flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors"
            >
              <span className="text-right">
                <span className="text-ink-400 block text-[10px] tracking-wider uppercase">
                  {labels.nextProject}
                </span>
                <span className="text-ink-950 block text-sm font-semibold dark:text-white">
                  {next.name}
                </span>
              </span>
              <ArrowRight className="text-brand-500 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>
        </Reveal>
      </div>
    </article>
  )
}
