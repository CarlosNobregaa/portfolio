import type { ProjectId } from '@/data/projects'
import { Bar, BrowserFrame, PhoneFrame, Sidebar, StatTile } from './chrome'
import { cn } from '@/lib/utils'

/**
 * Per-project interface reconstructions.
 *
 * These are hand-built in markup rather than screenshotted: the real products
 * are private client systems, and a static export should not ship images of
 * customer data. Each variant reproduces the layout and the primary screen so
 * the shape of the product is legible at a glance.
 *
 * Decorative — `aria-hidden` is applied by the caller, which also renders a
 * text description.
 */
export function ProjectMockup({ id, accent }: { id: ProjectId; accent: string }) {
  switch (id) {
    case 'aldea':
      return <AldeaMockup accent={accent} />
    case 'apex-crm':
      return <ApexMockup accent={accent} />
    case 'automed':
      return <AutomedMockup />
    case 'flowmail':
      return <FlowmailMockup accent={accent} />
    case 'chatfy':
      return <ChatfyMockup accent={accent} />
    case 'quality-gate':
      return <QualityGateMockup />
    case 'template-api':
      return <TemplateApiMockup accent={accent} />
    case 'iacougue':
      return <IacougueMockup />
  }
}

/* ---------------------------------------------- ALDEA — investor portal --- */

function AldeaMockup({ accent }: { accent: string }) {
  const units = [
    'sold', 'sold', 'reserved', 'available', 'available', 'sold',
    'available', 'reserved', 'available', 'sold', 'available', 'available',
  ] as const

  const tone: Record<(typeof units)[number], string> = {
    sold: 'bg-emerald-400/70',
    reserved: 'bg-amber-400/70',
    available: 'bg-ink-300/40 dark:bg-ink-600/50',
  }

  return (
    <BrowserFrame url="portal.aldea.com.br/investidor">
      <div className="flex h-[220px]">
        <Sidebar accent={accent} />
        <div className="flex-1 space-y-2.5 p-3">
          <div className="flex items-center justify-between">
            <Bar w="w-24" h="h-2" tone="strong" />
            <div className="bg-brand-400/25 h-3.5 w-12 rounded-md" />
          </div>

          <div className="flex gap-2">
            <StatTile label="Portfolio" value="R$ 4.2M" />
            <StatTile label="Units" value="128" tone="accent" />
            <StatTile label="Proposals" value="7" tone="positive" />
          </div>

          <div className="grid grid-cols-[1.4fr_1fr] gap-2">
            {/* Unit inventory grid */}
            <div className="rounded-lg border p-2" style={{ background: 'var(--surface)' }}>
              <Bar w="w-14" h="h-1" className="mb-2" />
              <div className="grid grid-cols-6 gap-1">
                {units.map((state, i) => (
                  <span key={i} className={cn('h-4 rounded-sm', tone[state])} />
                ))}
              </div>
            </div>

            {/* Area chart */}
            <div className="rounded-lg border p-2" style={{ background: 'var(--surface)' }}>
              <Bar w="w-10" h="h-1" className="mb-2" />
              <svg viewBox="0 0 100 34" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="aldea-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(20 178 177)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="rgb(20 178 177)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 28 L14 24 L28 26 L42 17 L56 19 L70 10 L84 12 L100 4 L100 34 L0 34 Z"
                  fill="url(#aldea-fill)"
                />
                <path
                  d="M0 28 L14 24 L28 26 L42 17 L56 19 L70 10 L84 12 L100 4"
                  fill="none"
                  stroke="rgb(20 178 177)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          {/* Proposal rows */}
          <div className="space-y-1.5">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border px-2 py-1.5"
                style={{ background: 'var(--surface)' }}
              >
                <span className="bg-brand-400/30 size-3.5 rounded" />
                <Bar w="w-20" h="h-1" />
                <Bar w="w-10" h="h-1" className="ml-auto" />
                <span className="rounded bg-emerald-400/25 px-1.5 py-0.5 text-[6px] font-semibold text-emerald-600 dark:text-emerald-400">
                  SENT
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* --------------------------------------------- APEX CRM — pipeline board --- */

function ApexMockup({ accent }: { accent: string }) {
  const columns = [
    { tint: 'bg-sky-400/70', cards: 3 },
    { tint: 'bg-violet-400/70', cards: 2 },
    { tint: 'bg-amber-400/70', cards: 3 },
    { tint: 'bg-emerald-400/70', cards: 1 },
  ]

  return (
    <BrowserFrame url="app.apexcrm.io/pipeline">
      <div className="flex h-[220px]">
        <Sidebar accent={accent} items={7} />
        <div className="flex-1 space-y-2.5 p-3">
          <div className="flex items-center gap-2">
            <Bar w="w-20" h="h-2" tone="strong" />
            <div className="ml-auto flex gap-1">
              <span className="bg-ink-300/40 dark:bg-ink-600/50 h-3.5 w-8 rounded-md" />
              <span className="bg-brand-400/40 h-3.5 w-10 rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {columns.map((col, c) => (
              <div
                key={c}
                className="space-y-1.5 rounded-lg p-1.5"
                style={{ background: 'var(--surface-sunken)' }}
              >
                <div className="flex items-center gap-1">
                  <span className={cn('size-1.5 rounded-full', col.tint)} />
                  <Bar w="w-8" h="h-1" />
                  <span className="text-ink-400 ml-auto font-mono text-[6px]">
                    {col.cards}
                  </span>
                </div>

                {Array.from({ length: col.cards }).map((_, i) => (
                  <div
                    key={i}
                    className="space-y-1 rounded-md border p-1.5"
                    style={{ background: 'var(--surface)' }}
                  >
                    <Bar w="w-full" h="h-1" tone="strong" />
                    <Bar w="w-2/3" h="h-1" />
                    <div className="flex items-center gap-1 pt-0.5">
                      <span className="bg-brand-400/40 size-2.5 rounded-full" />
                      <span className={cn('h-1 w-4 rounded-full', col.tint)} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-2 rounded-lg border px-2 py-1.5"
            style={{ background: 'var(--surface)' }}
          >
            <span className="bg-violet-400/40 size-3.5 rounded" />
            <Bar w="w-28" h="h-1" />
            <span className="ml-auto rounded bg-violet-400/20 px-1.5 py-0.5 text-[6px] font-semibold text-violet-600 dark:text-violet-300">
              AI AGENT
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ------------------------------------------ AUTOMED — WhatsApp assistant --- */

function AutomedMockup() {
  const thread = [
    { from: 'them', w: 'w-[78%]', lines: 2 },
    { from: 'me', w: 'w-[62%]', lines: 1 },
    { from: 'them', w: 'w-[85%]', lines: 3 },
    { from: 'me', w: 'w-[48%]', lines: 1 },
  ] as const

  return (
    <div className="flex h-[220px] items-center justify-center py-2">
      <PhoneFrame>
        <div className="flex h-[204px] flex-col">
          {/* WhatsApp-style header */}
          <div className="flex items-center gap-1.5 bg-emerald-600 px-2 pt-4 pb-1.5">
            <span className="size-4 rounded-full bg-white/30" />
            <div className="space-y-0.5">
              <span className="block h-1 w-14 rounded-full bg-white/70" />
              <span className="block h-0.5 w-8 rounded-full bg-white/40" />
            </div>
            <span className="ml-auto rounded bg-white/20 px-1 py-0.5 text-[5px] font-bold text-white">
              IA
            </span>
          </div>

          {/* Conversation */}
          <div
            className="flex-1 space-y-1.5 overflow-hidden p-2"
            style={{ background: 'var(--surface-sunken)' }}
          >
            {thread.map((msg, i) => (
              <div
                key={i}
                className={cn('flex', msg.from === 'me' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={cn(
                    'space-y-1 rounded-lg px-1.5 py-1',
                    msg.w,
                    msg.from === 'me'
                      ? 'bg-emerald-400/25'
                      : 'bg-ink-200/50 dark:bg-ink-800/70',
                  )}
                >
                  {Array.from({ length: msg.lines }).map((_, l) => (
                    <Bar key={l} w={l === msg.lines - 1 ? 'w-2/3' : 'w-full'} h="h-1" />
                  ))}
                </div>
              </div>
            ))}

            {/* Appointment slot suggestion */}
            <div className="flex justify-end">
              <div className="w-[70%] space-y-1 rounded-lg border border-emerald-400/40 bg-emerald-400/10 p-1.5">
                <Bar w="w-12" h="h-1" tone="accent" />
                <div className="flex gap-1">
                  <span className="h-2.5 flex-1 rounded bg-emerald-400/35" />
                  <span className="h-2.5 flex-1 rounded bg-emerald-400/35" />
                  <span className="bg-ink-300/40 dark:bg-ink-600/50 h-2.5 flex-1 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Composer */}
          <div
            className="flex items-center gap-1.5 border-t px-2 py-1.5"
            style={{ background: 'var(--surface-raised)' }}
          >
            <div className="bg-ink-200/50 dark:bg-ink-800/70 h-3 flex-1 rounded-full" />
            <span className="size-3 rounded-full bg-emerald-500" />
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}

/* ------------------------------------------- FLOWMAIL — campaign builder --- */

function FlowmailMockup({ accent }: { accent: string }) {
  return (
    <BrowserFrame url="app.flowmail.io/campaigns/new">
      <div className="flex h-[220px]">
        <Sidebar accent={accent} items={5} />
        <div className="grid flex-1 grid-cols-[1fr_1.15fr] gap-2 p-3">
          {/* Left: campaign list + AI draft button */}
          <div className="space-y-2">
            <Bar w="w-16" h="h-2" tone="strong" />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  'space-y-1 rounded-lg border p-1.5',
                  i === 0 && 'border-brand-400/40 bg-brand-400/8',
                )}
                style={i === 0 ? undefined : { background: 'var(--surface)' }}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      'size-1.5 rounded-full',
                      i === 0 ? 'bg-brand-400' : 'bg-ink-300/60 dark:bg-ink-600',
                    )}
                  />
                  <Bar w="w-14" h="h-1" tone={i === 0 ? 'strong' : 'muted'} />
                </div>
                <Bar w="w-full" h="h-1" />
              </div>
            ))}
            <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-orange-400/25 to-rose-400/25 px-2 py-1.5">
              <span className="size-2 rounded-full bg-orange-400" />
              <Bar w="w-16" h="h-1" tone="strong" />
            </div>
          </div>

          {/* Right: email preview */}
          <div
            className="space-y-2 rounded-lg border p-2"
            style={{ background: 'var(--surface)' }}
          >
            <div className="flex items-center justify-between">
              <Bar w="w-10" h="h-1" />
              <span className="rounded bg-emerald-400/20 px-1 py-0.5 text-[5px] font-semibold text-emerald-600 dark:text-emerald-400">
                GUARDRAILS OK
              </span>
            </div>
            <div className="from-brand-400/30 h-8 rounded bg-gradient-to-br to-violet-400/30" />
            <Bar w="w-3/4" h="h-1.5" tone="strong" />
            <div className="space-y-1">
              <Bar w="w-full" h="h-1" />
              <Bar w="w-full" h="h-1" />
              <Bar w="w-2/3" h="h-1" />
            </div>
            <div className="grid grid-cols-3 gap-1 pt-0.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1">
                  <span className="bg-ink-200/60 dark:bg-ink-800 block h-6 rounded" />
                  <Bar w="w-full" h="h-0.5" />
                </div>
              ))}
            </div>
            <div className="bg-brand-500/70 mt-1 h-3.5 w-16 rounded" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ----------------------------------------- CHATFY — affiliate dashboard --- */

function ChatfyMockup({ accent }: { accent: string }) {
  const bars = [40, 62, 48, 78, 66, 92, 74]

  return (
    <BrowserFrame url="afiliados.chatfy.com.br/dashboard">
      <div className="flex h-[220px]">
        <Sidebar accent={accent} items={5} />
        <div className="flex-1 space-y-2.5 p-3">
          <div className="flex items-center justify-between">
            <Bar w="w-20" h="h-2" tone="strong" />
            <span className="rounded-full bg-pink-400/20 px-2 py-0.5 text-[6px] font-semibold text-pink-600 dark:text-pink-300">
              TIER 2
            </span>
          </div>

          <div className="flex gap-2">
            <StatTile label="Referrals" value="243" />
            <StatTile label="Commission" value="R$ 8.940" tone="positive" />
            <StatTile label="Pending" value="R$ 1.2k" tone="accent" />
          </div>

          {/* Monthly bars */}
          <div className="rounded-lg border p-2" style={{ background: 'var(--surface)' }}>
            <Bar w="w-12" h="h-1" className="mb-2" />
            <div className="flex h-10 items-end gap-1.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={cn(
                    'flex-1 rounded-t',
                    i === bars.length - 1 ? 'bg-pink-400/80' : 'bg-pink-400/35',
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Payout rows */}
          <div className="space-y-1">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border px-2 py-1"
                style={{ background: 'var(--surface)' }}
              >
                <span className="bg-ink-300/40 dark:bg-ink-700 size-3 rounded-full" />
                <Bar w="w-16" h="h-1" />
                <Bar w="w-8" h="h-1" className="ml-auto" />
                <span
                  className={cn(
                    'rounded px-1 py-0.5 text-[6px] font-semibold',
                    i === 0
                      ? 'bg-emerald-400/20 text-emerald-600 dark:text-emerald-400'
                      : 'bg-amber-400/20 text-amber-700 dark:text-amber-400',
                  )}
                >
                  {i === 0 ? 'PAID' : 'QUEUED'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* -------------------------------------------- QUALITY GATE — CI output --- */

function QualityGateMockup() {
  const lines = [
    { icon: 'pass', label: 'smoke', detail: 'api reachable · 12 checks', ms: '412ms' },
    { icon: 'pass', label: 'contract', detail: 'zod schemas · 38 checks', ms: '1.2s' },
    { icon: 'pass', label: 'auth', detail: 'session + refresh · 9 checks', ms: '860ms' },
    { icon: 'fail', label: 'contract', detail: 'lead.score → expected number', ms: '—' },
    { icon: 'pending', label: 'business-rules', detail: 'traceability matrix', ms: '' },
  ] as const

  return (
    <BrowserFrame url="github.com/automyai/apex-crm-quality-gate/actions">
      <div className="h-[220px] p-3 font-mono">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded bg-red-400/20 px-1.5 py-0.5 text-[7px] font-bold text-red-600 dark:text-red-400">
            FAILING
          </span>
          <Bar w="w-24" h="h-1.5" tone="strong" />
          <span className="text-ink-400 ml-auto text-[7px]">#248</span>
        </div>

        <div
          className="space-y-1 rounded-lg border p-2"
          style={{ background: 'var(--surface-sunken)' }}
        >
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className={cn(
                  'grid size-3 shrink-0 place-items-center rounded-full text-[6px] font-bold text-white',
                  line.icon === 'pass' && 'bg-emerald-500',
                  line.icon === 'fail' && 'bg-red-500',
                  line.icon === 'pending' && 'bg-ink-300 dark:bg-ink-600',
                )}
              >
                {line.icon === 'pass' ? '✓' : line.icon === 'fail' ? '✕' : ''}
              </span>
              <span
                className={cn(
                  'text-[7px] font-semibold',
                  line.icon === 'fail'
                    ? 'text-red-500'
                    : 'text-ink-700 dark:text-ink-200',
                )}
              >
                {line.label}
              </span>
              <span className="text-ink-400 truncate text-[7px]">{line.detail}</span>
              <span className="text-ink-400 ml-auto shrink-0 text-[7px]">{line.ms}</span>
            </div>
          ))}
        </div>

        <div
          className="mt-2 rounded-lg border border-red-400/30 bg-red-400/8 p-2"
        >
          <p className="mb-1 text-[7px] font-semibold text-red-500">
            Contract violation — blocking merge
          </p>
          <div className="space-y-1">
            <Bar w="w-full" h="h-1" />
            <Bar w="w-4/5" h="h-1" />
          </div>
        </div>

        <div className="mt-2 flex gap-1.5">
          <span className="text-ink-400 rounded border px-1.5 py-0.5 text-[6px]">
            no app context
          </span>
          <span className="text-ink-400 rounded border px-1.5 py-0.5 text-[6px]">
            3 test layers
          </span>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ---------------------------------------- TEMPLATE API — Swagger surface --- */

function TemplateApiMockup({ accent }: { accent: string }) {
  const routes = [
    { verb: 'POST', tint: 'bg-emerald-500', path: '/auth/login' },
    { verb: 'POST', tint: 'bg-emerald-500', path: '/auth/refresh' },
    { verb: 'GET', tint: 'bg-sky-500', path: '/users' },
    { verb: 'GET', tint: 'bg-sky-500', path: '/users/{id}' },
    { verb: 'PATCH', tint: 'bg-amber-500', path: '/users/{id}' },
    { verb: 'GET', tint: 'bg-sky-500', path: '/health' },
  ]

  return (
    <BrowserFrame url="api.automy.dev/docs">
      <div className="flex h-[220px]">
        <Sidebar accent={accent} items={4} />
        <div className="flex-1 space-y-2 p-3">
          <div className="flex items-center gap-2">
            <Bar w="w-20" h="h-2" tone="strong" />
            <span className="text-ink-400 rounded border px-1 py-0.5 font-mono text-[6px]">
              OpenAPI 3.1
            </span>
          </div>

          <div className="space-y-1">
            {routes.map((route, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border px-2 py-1.5"
                style={{ background: 'var(--surface)' }}
              >
                <span
                  className={cn(
                    'w-9 shrink-0 rounded px-1 py-0.5 text-center font-mono text-[6px] font-bold text-white',
                    route.tint,
                  )}
                >
                  {route.verb}
                </span>
                <span className="text-ink-600 dark:text-ink-300 font-mono text-[7px]">
                  {route.path}
                </span>
                <Bar w="w-10" h="h-1" className="ml-auto" />
              </div>
            ))}
          </div>

          <div className="flex gap-1.5 pt-0.5">
            {['JWT', 'Throttler', 'Sentry', 'Swagger'].map((chip) => (
              <span
                key={chip}
                className="text-ink-400 rounded border px-1.5 py-0.5 font-mono text-[6px]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ------------------------------------------- IAÇOUGUE — mobile landing --- */

function IacougueMockup() {
  return (
    <div className="flex h-[220px] items-center justify-center py-2">
      <PhoneFrame>
        <div
          className="h-[204px] overflow-hidden"
          style={{ background: 'var(--surface-raised)' }}
        >
          {/* Nav */}
          <div className="flex items-center gap-1.5 px-2.5 pt-5 pb-2">
            <span className="size-3.5 rounded bg-gradient-to-br from-red-400 to-amber-500" />
            <Bar w="w-10" h="h-1" tone="strong" />
            <span className="ml-auto h-3 w-9 rounded bg-emerald-500/80" />
          </div>

          {/* Hero */}
          <div className="space-y-1.5 px-2.5">
            <span className="inline-block rounded-full bg-red-400/15 px-1.5 py-0.5 text-[5px] font-semibold text-red-600 dark:text-red-400">
              WHATSAPP · IA
            </span>
            <Bar w="w-full" h="h-2" tone="strong" />
            <Bar w="w-3/4" h="h-2" tone="strong" />
            <div className="space-y-1 pt-0.5">
              <Bar w="w-full" h="h-1" />
              <Bar w="w-5/6" h="h-1" />
            </div>
            <div className="flex gap-1 pt-1">
              <span className="h-4 w-16 rounded bg-gradient-to-r from-red-500 to-amber-500" />
              <span className="border-hairline h-4 w-10 rounded border" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-2.5 grid grid-cols-2 gap-1.5 px-2.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="space-y-1 rounded-md border p-1.5"
                style={{ background: 'var(--surface)' }}
              >
                <span className="block size-2.5 rounded bg-amber-400/50" />
                <Bar w="w-full" h="h-0.5" />
                <Bar w="w-2/3" h="h-0.5" />
              </div>
            ))}
          </div>

          {/* Legal footer links — the reason the site exists */}
          <div className="mt-2 flex justify-center gap-2 border-t px-2.5 pt-1.5">
            <span className="text-ink-400 text-[5px]">Privacidade</span>
            <span className="text-ink-400 text-[5px]">Termos</span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}
