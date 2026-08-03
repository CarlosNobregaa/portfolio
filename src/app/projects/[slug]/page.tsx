import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { en } from '@/i18n/dictionaries/en'
import { ProjectDetail } from '@/components/sections/ProjectDetail'

/** Next 15 passes route params as a Promise. */
type Props = { params: Promise<{ slug: string }> }

/** Every project id becomes a static route — required by `output: 'export'`. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) return {}

  // English metadata, matching the site-wide default locale.
  const copy = en.projects.items[project.id]
  const title = `${project.name} — ${en.meta.title}`

  return {
    title,
    description: copy.tagline,
    openGraph: { title, description: copy.tagline },
    twitter: { title, description: copy.tagline },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) notFound()

  return <ProjectDetail projectId={project.id} />
}
