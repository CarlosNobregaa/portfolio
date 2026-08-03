'use client'

import { useState } from 'react'
import { BrowserFrame, MOCKUP_BODY_H, MockButton, Pill, Sidebar } from './chrome'
import { cn } from '@/lib/utils'

const NAV = ['Auth', 'Users', 'Health', 'Schemas']

type Route = {
  verb: 'GET' | 'POST' | 'PATCH'
  tint: string
  path: string
  desc: string
  group: string
  auth: boolean
  request?: string
  response: string
  code: string
}

const ROUTES: Route[] = [
  {
    verb: 'POST',
    tint: 'bg-emerald-500',
    path: '/auth/login',
    desc: 'Autentica e emite os tokens',
    group: 'Auth',
    auth: false,
    request: `{
  "email": "ana@empresa.com.br",
  "password": "••••••••"
}`,
    response: `{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 900
}`,
    code: '200',
  },
  {
    verb: 'POST',
    tint: 'bg-emerald-500',
    path: '/auth/refresh',
    desc: 'Rotaciona o refresh token',
    group: 'Auth',
    auth: false,
    request: `{ "refreshToken": "eyJhbGciOiJIUzI1NiIs..." }`,
    response: `{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 900
}`,
    code: '200',
  },
  {
    verb: 'GET',
    tint: 'bg-sky-500',
    path: '/users',
    desc: 'Lista paginada',
    group: 'Users',
    auth: true,
    response: `{
  "data": [
    { "id": "usr_8f2a", "name": "Ana Beatriz", "role": "admin" },
    { "id": "usr_31cd", "name": "Rogério Lima", "role": "member" }
  ],
  "meta": { "page": 1, "perPage": 20, "total": 47 }
}`,
    code: '200',
  },
  {
    verb: 'PATCH',
    tint: 'bg-amber-500',
    path: '/users/{id}',
    desc: 'Atualização parcial',
    group: 'Users',
    auth: true,
    request: `{ "role": "admin" }`,
    response: `{
  "id": "usr_31cd",
  "name": "Rogério Lima",
  "role": "admin",
  "updatedAt": "2026-08-03T14:22:07Z"
}`,
    code: '200',
  },
  {
    verb: 'GET',
    tint: 'bg-sky-500',
    path: '/health',
    desc: 'Liveness e readiness',
    group: 'Health',
    auth: false,
    response: `{
  "status": "ok",
  "uptime": 184203,
  "db": "up",
  "redis": "up"
}`,
    code: '200',
  },
]

export function TemplateApiMockup({
  accent,
  interactive,
}: {
  accent: string
  interactive: boolean
}) {
  const [group, setGroup] = useState(NAV[0])
  const [open, setOpen] = useState<string | null>('POST/auth/login')
  const [sent, setSent] = useState<string | null>(null)

  const visible =
    group === 'Schemas' ? ROUTES : ROUTES.filter((r) => r.group === group)

  return (
    <BrowserFrame url="api.automy.dev/docs">
      <div className={cn('flex', MOCKUP_BODY_H)}>
        <Sidebar
          accent={accent}
          brand="Template API"
          items={NAV}
          active={group}
          onSelect={interactive ? (item) => { setGroup(item); setSent(null) } : undefined}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-2.5 overflow-hidden p-4">
          <div className="flex items-center gap-2">
            <div className="min-w-0">
              <p className="text-ink-950 truncate text-[14px] font-bold dark:text-white">
                Automy Service Template
              </p>
              <p className="text-ink-400 text-[10px]">NestJS 11 · Fastify 5 · v0.0.1</p>
            </div>
            <span className="text-ink-400 border-hairline ml-auto shrink-0 rounded border px-2 py-0.5 font-mono text-[10px]">
              OpenAPI 3.1
            </span>
          </div>

          <div className="min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1">
            {visible.map((r) => {
              const key = r.verb + r.path
              const isOpen = open === key

              return (
                <div
                  key={key}
                  className={cn(
                    'overflow-hidden rounded-md border transition-colors',
                    isOpen && 'border-brand-400/40',
                  )}
                  style={{ background: 'var(--surface)' }}
                >
                  <button
                    type="button"
                    onClick={interactive ? () => { setOpen(isOpen ? null : key); setSent(null) } : undefined}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-2.5 px-2.5 py-2 text-left transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                  >
                    <span
                      className={cn(
                        'w-12 shrink-0 rounded px-1 py-0.5 text-center font-mono text-[10px] font-bold text-white',
                        r.tint,
                      )}
                    >
                      {r.verb}
                    </span>
                    <span className="text-ink-800 dark:text-ink-100 shrink-0 font-mono text-[11px] font-medium">
                      {r.path}
                    </span>
                    <span className="text-ink-400 truncate text-[10px]">{r.desc}</span>
                    {r.auth ? (
                      <span className="text-ink-400 ml-auto shrink-0 text-[11px]" title="Requer JWT">
                        🔒
                      </span>
                    ) : (
                      <span className="ml-auto" />
                    )}
                    <span className="text-ink-300 dark:text-ink-600 shrink-0 text-[10px]">
                      {isOpen ? '▾' : '▸'}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="space-y-2 border-t px-2.5 py-2.5">
                      {r.request ? (
                        <div>
                          <p className="text-ink-400 mb-1 text-[9.5px] font-semibold tracking-wide uppercase">
                            Request body
                          </p>
                          <pre
                            className="text-ink-600 dark:text-ink-300 overflow-x-auto rounded border p-2 font-mono text-[9.5px] leading-relaxed"
                            style={{ background: 'var(--surface-sunken)' }}
                          >
                            {r.request}
                          </pre>
                        </div>
                      ) : null}

                      <div className="flex items-center gap-2">
                        {interactive ? (
                          <MockButton onClick={() => setSent(key)}>Try it out</MockButton>
                        ) : null}
                        {sent === key ? (
                          <Pill tone="green">{r.code} OK · 84ms</Pill>
                        ) : (
                          <span className="text-ink-400 text-[10px]">
                            Resposta {r.code}
                          </span>
                        )}
                      </div>

                      {(!interactive || sent === key) ? (
                        <div>
                          <p className="text-ink-400 mb-1 text-[9.5px] font-semibold tracking-wide uppercase">
                            Response
                          </p>
                          <pre
                            className="overflow-x-auto rounded border p-2 font-mono text-[9.5px] leading-relaxed text-emerald-700 dark:text-emerald-300"
                            style={{ background: 'var(--surface-sunken)' }}
                          >
                            {r.response}
                          </pre>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['JWT + refresh', 'Throttler', 'Sentry', 'TypeORM', 'Docker'].map((chip) => (
              <span
                key={chip}
                className="text-ink-400 border-hairline rounded border px-2 py-0.5 font-mono text-[10px]"
              >
                {chip}
              </span>
            ))}
            <span className="text-ink-400 ml-auto text-[10px]">
              4 serviços em produção iniciados daqui
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
