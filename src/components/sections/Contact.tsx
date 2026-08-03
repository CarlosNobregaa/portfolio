'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

type Field = 'name' | 'email' | 'subject' | 'message'
type Errors = Partial<Record<Field, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function Contact() {
  const t = useT()
  const [values, setValues] = useState<Record<Field, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const timers = useRef<number[]>([])

  // One place to clear pending timeouts, so unmounting mid-countdown never
  // fires setState on a dead component, and a rapid second click cannot have
  // the first click's timer reset it early.
  useEffect(() => {
    const pending = timers.current
    return () => {
      pending.forEach(window.clearTimeout)
    }
  }, [])

  function schedule(fn: () => void, ms: number) {
    timers.current.forEach(window.clearTimeout)
    timers.current = [window.setTimeout(fn, ms)]
  }

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate(): Errors {
    const e: Errors = {}
    const err = t.contact.form.errors

    if (!values.name.trim()) e.name = err.nameRequired
    if (!values.email.trim()) e.email = err.emailRequired
    else if (!EMAIL_RE.test(values.email.trim())) e.email = err.emailInvalid
    if (!values.message.trim()) e.message = err.messageRequired
    else if (values.message.trim().length < 20) e.message = err.messageShort

    return e
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate()
    setErrors(found)

    if (Object.keys(found).length > 0) {
      // Send focus to the first offending field: three simultaneous
      // role="alert" nodes are announced inconsistently, and leaving focus on
      // the submit button tells a keyboard user nothing about what failed.
      const order: Field[] = ['name', 'email', 'subject', 'message']
      const firstInvalid = order.find((field) => found[field])
      if (firstInvalid) {
        formRef.current
          ?.querySelector<HTMLElement>(`#${firstInvalid}`)
          ?.focus({ preventScroll: false })
      }
      return
    }

    // No third-party form service: hand the message to the visitor's mail client.
    const subject = values.subject.trim() || `Portfolio contact — ${values.name.trim()}`
    const body = `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    schedule(() => setSubmitted(false), 4000)
    window.location.href = href
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      schedule(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked — the address is visible on screen anyway.
    }
  }

  const channels = [
    {
      icon: Mail,
      label: t.contact.direct.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Github,
      label: t.contact.direct.githubLabel,
      value: `@${profile.githubHandle}`,
      href: profile.links.github,
    },
    {
      icon: Linkedin,
      label: t.contact.direct.linkedinLabel,
      value: profile.name,
      href: profile.links.linkedin,
    },
    {
      icon: Building2,
      label: t.contact.direct.orgLabel,
      value: '@automyai',
      href: profile.links.githubOrg,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          className="mb-14"
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          <Reveal>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="surface-card space-y-5 rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id="name"
                  label={t.contact.form.name}
                  placeholder={t.contact.form.namePlaceholder}
                  value={values.name}
                  error={errors.name}
                  onChange={(v) => update('name', v)}
                />
                <TextField
                  id="email"
                  type="email"
                  label={t.contact.form.email}
                  placeholder={t.contact.form.emailPlaceholder}
                  value={values.email}
                  error={errors.email}
                  onChange={(v) => update('email', v)}
                />
              </div>

              <TextField
                id="subject"
                label={t.contact.form.subject}
                placeholder={t.contact.form.subjectPlaceholder}
                value={values.subject}
                onChange={(v) => update('subject', v)}
              />

              <TextField
                id="message"
                label={t.contact.form.message}
                placeholder={t.contact.form.messagePlaceholder}
                value={values.message}
                error={errors.message}
                onChange={(v) => update('message', v)}
                multiline
              />

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="group from-brand-500 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r via-brand-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  {t.contact.form.submit}
                </button>

                <AnimatePresence>
                  {submitted ? (
                    <motion.span
                      role="status"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-brand-600 dark:text-brand-300 inline-flex items-center gap-1.5 text-sm font-medium"
                    >
                      <Check className="size-4" />
                      {t.contact.form.sending}
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </div>

              <p className="text-ink-400 text-xs leading-relaxed">
                {t.contact.form.note}
              </p>
            </form>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <div className="surface-card rounded-3xl p-6">
                <h3 className="text-ink-400 mb-4 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
                  {t.contact.direct.title}
                </h3>

                <ul className="space-y-1">
                  {channels.map((channel) => (
                    <li key={channel.label}>
                      <div className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.05]">
                        <span
                          className="text-ink-500 dark:text-ink-400 group-hover:text-brand-500 grid size-9 shrink-0 place-items-center rounded-xl border transition-colors"
                        >
                          <channel.icon className="size-4" />
                        </span>

                        <a
                          href={channel.href}
                          target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                          rel="noreferrer noopener"
                          className="min-w-0 flex-1"
                        >
                          <span className="text-ink-400 block text-[11px] tracking-wide uppercase">
                            {channel.label}
                          </span>
                          <span className="text-ink-800 dark:text-ink-100 block truncate text-sm font-medium">
                            {channel.value}
                          </span>
                        </a>

                        {channel.href.startsWith('mailto:') ? (
                          <button
                            type="button"
                            onClick={copyEmail}
                            aria-label={copied ? t.contact.direct.copied : t.contact.direct.copy}
                            title={copied ? t.contact.direct.copied : t.contact.direct.copy}
                            className="text-ink-400 hover:text-brand-500 grid size-8 shrink-0 place-items-center rounded-lg transition-colors"
                          >
                            {copied ? (
                              <Check className="size-3.5" />
                            ) : (
                              <Copy className="size-3.5" />
                            )}
                          </button>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="surface-card relative overflow-hidden rounded-3xl p-6">
                <div className="from-brand-400/60 absolute inset-x-0 top-0 h-px bg-gradient-to-r via-violet-400/60 to-transparent" />
                <div className="mb-2 flex items-center gap-2">
                  <span className="relative grid size-2 place-items-center">
                    <span className="animate-pulse-ring absolute size-2 rounded-full bg-emerald-400" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                  </span>
                  <h3 className="text-ink-950 text-sm font-semibold dark:text-white">
                    {t.contact.availability.title}
                  </h3>
                </div>
                <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed">
                  {t.contact.availability.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function TextField({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = 'text',
  multiline = false,
}: {
  id: string
  label: string
  placeholder: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  multiline?: boolean
}) {
  const errorId = `${id}-error`
  const shared = cn(
    'text-ink-900 dark:text-ink-100 placeholder:text-ink-400 w-full rounded-xl border bg-black/[0.02] px-3.5 py-2.5 text-sm transition-colors outline-none dark:bg-white/[0.03]',
    'focus:border-brand-400/50 focus:bg-brand-400/[0.04]',
    error && 'border-red-400/60',
  )

  return (
    <div className={cn('space-y-1.5', multiline && 'sm:col-span-2')}>
      <label
        htmlFor={id}
        className="text-ink-500 dark:text-ink-400 block text-xs font-medium tracking-wide uppercase"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(shared, 'resize-y')}
          style={{ borderColor: error ? undefined : 'var(--hairline)' }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={shared}
          style={{ borderColor: error ? undefined : 'var(--hairline)' }}
        />
      )}

      {error ? (
        <p id={errorId} role="alert" className="text-xs text-red-500 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  )
}
