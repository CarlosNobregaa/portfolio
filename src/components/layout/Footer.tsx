'use client'

import { ArrowUp, Building2, Github, Linkedin, Mail } from 'lucide-react'
import { useT } from '@/i18n/LocaleProvider'
import { profile } from '@/data/profile'
import { sections, useNavLabels, useSectionHref } from '@/lib/utils'

export function Footer() {
  const t = useT()
  const navLabels = useNavLabels()
  const hrefFor = useSectionHref()

  const socials = [
    { icon: Github, href: profile.links.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.links.linkedin, label: 'LinkedIn' },
    { icon: Building2, href: profile.links.githubOrg, label: 'Automy' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative border-t" style={{ borderColor: 'var(--hairline)' }}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="from-brand-400 grid size-8 place-items-center rounded-lg bg-gradient-to-br via-brand-500 to-violet-500 font-mono text-[11px] font-bold text-white">
                {profile.initials}
              </span>
              <span className="text-ink-950 text-sm font-semibold dark:text-white">
                {profile.name}
              </span>
            </div>
            <p className="text-ink-500 dark:text-ink-400 max-w-sm text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-ink-400 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
              {t.footer.sections}
            </h3>
            <ul className="space-y-2">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={hrefFor(id)}
                    className="text-ink-500 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300 text-sm transition-colors"
                  >
                    {navLabels[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-ink-400 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
              {t.footer.elsewhere}
            </h3>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  title={social.label}
                  className="text-ink-500 dark:text-ink-400 hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-300 grid size-9 place-items-center rounded-xl border transition-colors"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center"
        >
          <div className="text-ink-400 space-y-1 text-xs">
            {/* `copyrightSince` rather than `new Date()`: the year gets baked
                into the static export, so a live clock guarantees a hydration
                mismatch on 1 January until someone rebuilds. */}
            <p>
              © {profile.copyrightSince} {profile.name}. {t.footer.rights}
            </p>
            <p>{t.footer.builtWith}</p>
          </div>

          <a
            href={hrefFor('top')}
            className="text-ink-500 dark:text-ink-400 hover:border-brand-400/40 hover:text-brand-600 dark:hover:text-brand-300 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-colors"
          >
            <ArrowUp className="size-3.5" />
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
