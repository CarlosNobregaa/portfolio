'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Github,
  Lightbulb,
  Lock,
  Target,
  TrendingUp,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TechBadge } from '@/components/ui/TechBadge'
import { ProjectMockup } from '@/components/mockups/ProjectMockup'
import { useT } from '@/i18n/LocaleProvider'
import { projects, type Project, type ProjectTier } from '@/data/projects'
import { PROJECT_ICONS } from '@/data/project-icons'
import { cn } from '@/lib/utils'

const TIER_ORDER: ProjectTier[] = ['flagship', 'feature', 'sidecar']
type Filter = 'all' | ProjectTier

export function Projects() {
  const t = useT()
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState<string | null>(null)

  const visible = useMemo(() => {
    const list = filter === 'all' ? projects : projects.filter((p) => p.tier === filter)
    return [...list].sort(
      (a, b) => TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier),
    )
  }, [filter])

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'flagship', label: t.projects.filters.flagship },
    { id: 'feature', label: t.projects.filters.feature },
    { id: 'sidecar', label: t.projects.filters.sidecar },
  ]

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          className="mb-8"
        />

        <Reveal delay={0.1}>
          {/* Plain toggle buttons, not tabs: there is no tabpanel and no
              arrow-key model, so `role="tablist"` would promise a keyboard
              interaction that does not exist. */}
          <div
            role="group"
            aria-label={t.projects.eyebrow}
            className="border-hairline mb-10 inline-flex flex-wrap gap-1 rounded-xl border bg-black/[0.03] p-1 dark:bg-white/[0.04]"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors',
                  filter === f.id
                    ? 'text-ink-950 dark:text-white'
                    : 'text-ink-500 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-200',
                )}
              >
                {filter === f.id ? (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* No `mode="popLayout"`: it silently no-ops unless every child forwards
            a ref to its motion element, and the default mode reflows fine here. */}
        <motion.div layout className="grid gap-5 lg:grid-cols-2">
          <AnimatePresence>
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isOpen={expanded === project.id}
                onToggle={() =>
                  setExpanded((cur) => (cur === project.id ? null : project.id))
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: Project
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const t = useT()
  const copy = t.projects.items[project.id]
  const labels = t.projects.labels
  const Icon = PROJECT_ICONS[project.icon]
  const panelId = `project-panel-${project.id}`

  const blocks = [
    { key: 'problem', icon: Target, label: labels.problem, body: copy.problem },
    { key: 'solution', icon: Lightbulb, label: labels.solution, body: copy.solution },
    { key: 'impact', icon: TrendingUp, label: labels.impact, body: copy.impact },
  ]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className={cn(
        'surface-card group relative flex flex-col overflow-hidden rounded-3xl transition-colors duration-300',
        'hover:border-brand-400/30',
        isOpen && 'lg:col-span-2',
      )}
    >
      {/* Accent bar keyed to the project. */}
      <div
        className={cn(
          'absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60 transition-opacity duration-300 group-hover:opacity-100',
          project.accent,
        )}
      />

      {/*
        Interface preview, scaled down to a thumbnail — the detail page renders
        the same mockup at full size. The fixed height is required: `scale` is a
        transform and does not shrink the layout box, so without it the card
        keeps a ~45px gap underneath.
      */}
      <Link
        href={`/projects/${project.id}`}
        aria-label={`${labels.viewProject}: ${project.name}`}
        className="relative block h-[240px] overflow-hidden"
        style={{ background: 'var(--surface-sunken)' }}
      >
        <div
          aria-hidden
          className="pointer-events-none w-[900px] origin-top-left scale-[0.56] pt-5 pl-5 transition-transform duration-500 group-hover:scale-[0.58]"
        >
          <ProjectMockup id={project.id} accent={project.accent} />
        </div>

        {/* Fade the bottom of the thumbnail into the card body. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              'linear-gradient(to top, var(--surface-raised), transparent)',
          }}
        />
      </Link>

      <div className="flex flex-col gap-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <span
              className={cn(
                'grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-sm transition-transform duration-300 group-hover:scale-105',
                project.accent,
              )}
            >
              <Icon className="size-5" />
            </span>
            <div className="space-y-1">
              <h3 className="text-ink-950 text-lg font-semibold tracking-tight dark:text-white">
                {project.name}
              </h3>
              <p className="text-ink-500 dark:text-ink-400 text-sm leading-snug text-pretty">
                {copy.tagline}
              </p>
            </div>
          </div>

          <span className="text-ink-400 shrink-0 font-mono text-xs">{project.year}</span>
        </div>

        {/* auto-fit rather than a fixed column count: values like
            "schema/tenant" and "Shopify + Stripe" have no break opportunity and
            get clipped in a 1/3-width cell on a 360px viewport. */}
        <dl
          className="grid gap-px overflow-hidden rounded-xl border"
          style={{
            background: 'var(--hairline)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(7.5rem, 1fr))',
          }}
        >
          {project.metrics.map((metric) => (
            <div
              key={metric.key}
              className="flex flex-col gap-0.5 px-3 py-2.5"
              style={{ background: 'var(--surface-raised)' }}
            >
              <dd className="text-ink-950 font-mono text-xs font-semibold sm:text-sm dark:text-white">
                {metric.value}
              </dd>
              <dt className="text-ink-400 text-[10px] leading-tight">
                {t.projects.metrics[metric.key]}
              </dt>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, isOpen ? project.stack.length : 7).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {!isOpen && project.stack.length > 7 ? (
            <span className="text-ink-400 self-center font-mono text-[10px]">
              +{project.stack.length - 7}
            </span>
          ) : null}
        </div>

        {/* The wrapper is always in the DOM so `aria-controls` on the toggle
            always resolves; `hidden` removes the collapsed content from the
            accessibility tree and the tab order. */}
        <div id={panelId} hidden={!isOpen}>
          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-5 pt-2 lg:grid-cols-3">
                  {blocks.map((block) => (
                    <div key={block.key} className="space-y-2">
                      <h4 className="text-ink-400 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase">
                        <block.icon className="size-3.5" />
                        {block.label}
                      </h4>
                      <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed text-pretty">
                        {block.body}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="group/cta from-brand-500 shadow-brand-500/20 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r via-brand-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          {labels.viewProject}
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
          />
        </Link>

        <div
          className="mt-auto flex items-center justify-between gap-3 border-t pt-4"
        >
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="text-brand-600 dark:text-brand-300 hover:text-brand-500 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            {isOpen ? labels.collapse : labels.expand}
            <ChevronDown
              aria-hidden
              className={cn(
                'size-4 transition-transform duration-300',
                isOpen && 'rotate-180',
              )}
            />
          </button>

          <div className="flex items-center gap-2">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-500 hover:text-ink-900 dark:hover:text-white inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
              >
                <ExternalLink className="size-3.5" />
                {labels.liveDemo}
              </a>
            ) : null}

            {/* A private repo is never linked — the URL would 404 for anyone
                without access, which reads as a broken portfolio. */}
            {project.privateRepo || !project.repo ? (
              <span className="text-ink-400 inline-flex items-center gap-1.5 text-xs">
                <Lock className="size-3.5" />
                {labels.privateRepo}
              </span>
            ) : (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                title={labels.viewRepo}
                className="text-ink-500 hover:text-ink-900 dark:hover:text-white inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
              >
                <Github className="size-3.5" />
                {labels.viewRepo}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
