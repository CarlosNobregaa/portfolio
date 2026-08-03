'use client'

import { useEffect, useRef, useState } from 'react'
import { BrowserFrame, MOCKUP_BODY_H, MockButton, Pill } from './chrome'
import { cn } from '@/lib/utils'

type Status = 'pass' | 'fail' | 'run' | 'idle'

type Suite = {
  file: string
  layer: string
  detail: string
  ms: string
  status: Status
  output: string[]
}

const FAILING: Suite[] = [
  {
    file: 'smoke/health.spec.ts',
    layer: 'smoke',
    detail: '4 passed',
    ms: '412ms',
    status: 'pass',
    output: [
      '✓ GET /health responde 200',
      '✓ GET /health/db reporta conexão ativa',
      '✓ GET /health/redis reporta conexão ativa',
      '✓ headers de segurança presentes',
    ],
  },
  {
    file: 'api/auth-session.spec.ts',
    layer: 'api',
    detail: '9 passed',
    ms: '860ms',
    status: 'pass',
    output: [
      '✓ login emite access + refresh',
      '✓ refresh rotaciona o token anterior',
      '✓ token de outro tenant é rejeitado (403)',
      '✓ rate limit dispara após 10 tentativas',
    ],
  },
  {
    file: 'contract/lead.contract.ts',
    layer: 'contract',
    detail: '22 passed',
    ms: '1.14s',
    status: 'pass',
    output: [
      '✓ POST /leads respeita LeadCreateSchema',
      '✓ GET /leads respeita Paginated(LeadSchema)',
      '✓ campos extras são rejeitados (strict)',
    ],
  },
  {
    file: 'contract/scoring.contract.ts',
    layer: 'contract',
    detail: '1 failed, 7 passed',
    ms: '980ms',
    status: 'fail',
    output: [
      '✓ POST /scoring/config aceita pesos válidos',
      '✕ GET /leads/:id — lead.score',
      '',
      '  ZodError: expected number, received string',
      '    recebido: "87"',
      '    esperado: 87',
      '    at contract/scoring.contract.ts:41',
      '',
      '  BR-114 · o score precisa ser numérico para ordenar o pipeline',
    ],
  },
  {
    file: 'api/pipeline-rules.spec.ts',
    layer: 'api',
    detail: '14 passed',
    ms: '1.32s',
    status: 'pass',
    output: [
      '✓ negócio não pode pular etapa',
      '✓ etapa fechada exige valor > 0',
      '✓ webhook dispara em mudança de etapa',
    ],
  },
]

export function QualityGateMockup({ interactive }: { interactive: boolean }) {
  const [suites, setSuites] = useState<Suite[]>(FAILING)
  const [open, setOpen] = useState<string | null>('contract/scoring.contract.ts')
  const [running, setRunning] = useState(false)
  const [fixed, setFixed] = useState(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(window.clearTimeout)
  }, [])

  const failing = suites.some((s) => s.status === 'fail')

  function rerun() {
    setRunning(true)
    setSuites((prev) => prev.map((s) => ({ ...s, status: 'idle' as Status })))

    // Walk the suites one at a time, the way a runner reports them.
    suites.forEach((suite, i) => {
      const id = window.setTimeout(
        () => {
          setSuites((prev) =>
            prev.map((s, j) => (j === i ? { ...s, status: 'run' as Status } : s)),
          )
        },
        i * 260,
      )
      timers.current.push(id)

      const done = window.setTimeout(
        () => {
          setSuites((prev) =>
            prev.map((s, j) => {
              if (j !== i) return s
              // The re-run is the "after the fix" state — everything green.
              if (s.file.includes('scoring')) {
                return {
                  ...s,
                  status: 'pass' as Status,
                  detail: '8 passed',
                  output: [
                    '✓ POST /scoring/config aceita pesos válidos',
                    '✓ GET /leads/:id — lead.score é number',
                    '',
                    '  BR-114 · verificada',
                  ],
                }
              }
              return { ...s, status: 'pass' as Status }
            }),
          )
          if (i === suites.length - 1) {
            setRunning(false)
            setFixed(true)
          }
        },
        i * 260 + 220,
      )
      timers.current.push(done)
    })
  }

  return (
    <BrowserFrame url="github.com/automyai/apex-crm-quality-gate/actions/runs/248">
      <div className={cn('flex flex-col gap-3 p-4', MOCKUP_BODY_H)}>
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              'grid size-7 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white',
              running ? 'bg-amber-400' : fixed ? 'bg-emerald-500' : 'bg-red-500',
            )}
          >
            {running ? '•' : fixed ? '✓' : '✕'}
          </span>

          <div className="min-w-0">
            <p className="text-ink-950 truncate text-[14px] font-bold dark:text-white">
              quality-gate · pull_request #412
            </p>
            <p className="text-ink-400 truncate text-[10px]">
              feat/lead-scoring-v2 · CarlosNobregaa · {running ? 'em execução' : '4m 08s'}
            </p>
          </div>

          <Pill tone={running ? 'amber' : fixed ? 'green' : 'red'}>
            {running ? 'Rodando' : fixed ? 'Merge liberado' : 'Merge bloqueado'}
          </Pill>

          {interactive ? (
            <MockButton onClick={rerun} tone="ghost">
              {running ? '…' : '↻ Re-run'}
            </MockButton>
          ) : null}
        </div>

        {/* Suite list */}
        <div
          className="min-h-0 flex-1 space-y-1 overflow-y-auto rounded-lg border p-2 font-mono"
          style={{ background: 'var(--surface-sunken)' }}
        >
          {suites.map((s) => {
            const isOpen = open === s.file
            return (
              <div key={s.file}>
                <button
                  type="button"
                  onClick={interactive ? () => setOpen(isOpen ? null : s.file) : undefined}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-2 rounded px-1.5 py-1.5 text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                >
                  <span
                    className={cn(
                      'grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white',
                      s.status === 'pass' && 'bg-emerald-500',
                      s.status === 'fail' && 'bg-red-500',
                      s.status === 'run' && 'animate-pulse bg-amber-400',
                      s.status === 'idle' && 'bg-ink-300 dark:bg-ink-700',
                    )}
                  >
                    {s.status === 'pass' ? '✓' : s.status === 'fail' ? '✕' : ''}
                  </span>

                  <span
                    className={cn(
                      'truncate text-[11px]',
                      s.status === 'fail'
                        ? 'font-semibold text-red-500'
                        : 'text-ink-700 dark:text-ink-200',
                    )}
                  >
                    {s.file}
                  </span>

                  <span className="text-ink-400 shrink-0 text-[10px]">
                    {s.status === 'run' ? 'rodando…' : s.status === 'idle' ? '' : s.detail}
                  </span>
                  <span className="text-ink-400 ml-auto shrink-0 text-[10px]">
                    {s.status === 'idle' || s.status === 'run' ? '' : s.ms}
                  </span>
                  <span className="text-ink-300 dark:text-ink-600 shrink-0 text-[10px]">
                    {isOpen ? '▾' : '▸'}
                  </span>
                </button>

                {isOpen ? (
                  <div
                    className="mt-1 mb-1 space-y-0.5 rounded border-l-2 py-2 pr-2 pl-3"
                    style={{
                      background: 'var(--surface)',
                      borderLeftColor:
                        s.status === 'fail' ? 'rgb(239 68 68)' : 'rgb(16 185 129)',
                    }}
                  >
                    {s.output.map((line, i) => (
                      <p
                        key={i}
                        className={cn(
                          'text-[10px] leading-relaxed whitespace-pre',
                          line.startsWith('✓') && 'text-emerald-600 dark:text-emerald-400',
                          line.startsWith('✕') && 'font-semibold text-red-500',
                          line.includes('ZodError') && 'font-semibold text-red-500',
                          line.trim().startsWith('BR-') && 'text-ink-400 italic',
                          !line.startsWith('✓') &&
                            !line.startsWith('✕') &&
                            !line.includes('ZodError') &&
                            !line.trim().startsWith('BR-') &&
                            'text-ink-500 dark:text-ink-400',
                        )}
                      >
                        {line || ' '}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['sem contexto da aplicação', '3 camadas de teste', 'matriz de rastreabilidade'].map(
            (chip) => (
              <span
                key={chip}
                className="text-ink-400 border-hairline rounded border px-2 py-0.5 text-[10px]"
              >
                {chip}
              </span>
            ),
          )}
          {failing ? null : (
            <span className="rounded bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              todas as regras verificadas
            </span>
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}
