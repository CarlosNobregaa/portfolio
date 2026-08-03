'use client'

import { useState } from 'react'
import {
  Avatar,
  BrowserFrame,
  MOCKUP_BODY_H,
  MockButton,
  PanelHeader,
  Pill,
  Sidebar,
  StatTile,
} from './chrome'
import { cn } from '@/lib/utils'

const NAV = ['Painel', 'Indicações', 'Comissões', 'Materiais', 'Meus dados']

const SERIES = {
  '7m': [
    { m: 'set', v: 38 }, { m: 'out', v: 55 }, { m: 'nov', v: 44 }, { m: 'dez', v: 72 },
    { m: 'jan', v: 61 }, { m: 'fev', v: 88 }, { m: 'mar', v: 74 },
  ],
  '12m': [
    { m: 'abr', v: 22 }, { m: 'mai', v: 31 }, { m: 'jun', v: 28 }, { m: 'jul', v: 45 },
    { m: 'ago', v: 41 }, { m: 'set', v: 38 }, { m: 'out', v: 55 }, { m: 'nov', v: 44 },
    { m: 'dez', v: 72 }, { m: 'jan', v: 61 }, { m: 'fev', v: 88 }, { m: 'mar', v: 74 },
  ],
}

const REFERRALS = [
  { who: 'Mercado Bom Preço', plan: 'Business', date: '28/03', com: 'R$ 184,00', st: 'Ativo', tone: 'green' },
  { who: 'Pet Shop Amigo', plan: 'Starter', date: '24/03', com: 'R$ 62,50', st: 'Ativo', tone: 'green' },
  { who: 'Barbearia Nova', plan: 'Starter', date: '19/03', com: 'R$ 62,50', st: 'Trial', tone: 'amber' },
  { who: 'Café da Praça', plan: 'Business', date: '11/03', com: 'R$ 184,00', st: 'Cancelado', tone: 'red' },
] as const

const PAYOUTS = [
  { ref: 'Fev/2026', val: 'R$ 2.184,00', st: 'Pago', tone: 'green', nf: 'NF-2411' },
  { ref: 'Mar/2026', val: 'R$ 1.240,50', st: 'Na fila', tone: 'amber', nf: '—' },
  { ref: 'Jan/2026', val: 'R$ 1.876,00', st: 'Pago', tone: 'green', nf: 'NF-2380' },
] as const

export function ChatfyMockup({
  accent,
  interactive,
}: {
  accent: string
  interactive: boolean
}) {
  const [view, setView] = useState(NAV[0])
  const [range, setRange] = useState<'7m' | '12m'>('7m')
  const [copied, setCopied] = useState(false)

  const bars = SERIES[range]

  return (
    <BrowserFrame url="afiliados.chatfy.com.br/painel">
      <div className={cn('flex', MOCKUP_BODY_H)}>
        <Sidebar
          accent={accent}
          brand="Chatfy"
          items={NAV}
          active={view}
          onSelect={interactive ? setView : undefined}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-hidden p-4">
          <PanelHeader
            title={view === NAV[0] ? 'Olá, Rafael 👋' : view}
            subtitle="chatfy.com.br/r/rafael-m"
            action={
              <div className="flex items-center gap-2">
                <Pill tone="violet">Nível Ouro · 25%</Pill>
                <Avatar initials="RM" />
              </div>
            }
          />

          {view === NAV[1] ? (
            <ReferralsView />
          ) : view === NAV[2] ? (
            <PayoutsView />
          ) : (
            <>
              <div className="flex gap-2.5">
                <StatTile label="Indicações" value="243" delta="+18 no mês" />
                <StatTile label="Comissão total" value="R$ 8.940" tone="positive" />
                <StatTile label="A receber" value="R$ 1.240" tone="accent" />
              </div>

              <div
                className="min-h-0 flex-1 rounded-lg border p-3"
                style={{ background: 'var(--surface)' }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
                    Comissões por mês
                  </span>

                  {/* Working range toggle */}
                  <div
                    role="group"
                    className="border-hairline flex gap-0.5 rounded-md border p-0.5"
                  >
                    {(['7m', '12m'] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={interactive ? () => setRange(r) : undefined}
                        aria-pressed={range === r}
                        className={cn(
                          'rounded px-2 py-0.5 text-[10px] font-medium transition-colors',
                          range === r
                            ? 'bg-pink-500 text-white'
                            : 'text-ink-400 hover:text-ink-700 dark:hover:text-ink-200',
                        )}
                      >
                        {r === '7m' ? '7 meses' : '12 meses'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex h-[120px] items-end gap-1.5">
                  {bars.map((b, i) => (
                    <div key={b.m + i} className="flex flex-1 flex-col items-center gap-1">
                      <span
                        className={cn(
                          'w-full rounded-t transition-all duration-300',
                          i === bars.length - 2 ? 'bg-pink-500' : 'bg-pink-400/40',
                        )}
                        style={{ height: `${b.v}%` }}
                      />
                      <span className="text-ink-400 text-[9px]">{b.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referral link with a working copy button */}
              <div
                className="flex items-center gap-2 rounded-lg border p-2.5"
                style={{ background: 'var(--surface)' }}
              >
                <span className="text-ink-500 dark:text-ink-400 truncate font-mono text-[11px]">
                  chatfy.com.br/r/rafael-m
                </span>
                <MockButton
                  className="ml-auto"
                  tone={copied ? 'ghost' : 'solid'}
                  onClick={
                    interactive
                      ? () => {
                          setCopied(true)
                          window.setTimeout(() => setCopied(false), 1600)
                        }
                      : undefined
                  }
                >
                  {copied ? '✓ Copiado' : 'Copiar link'}
                </MockButton>
              </div>
            </>
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}

function ReferralsView() {
  return (
    <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
      <div className="text-ink-400 grid grid-cols-[1.5fr_0.8fr_0.7fr_0.9fr_0.8fr] gap-2 px-3 py-2 text-[10px] font-semibold tracking-wide uppercase">
        <span>Cliente</span>
        <span>Plano</span>
        <span>Data</span>
        <span className="text-right">Comissão</span>
        <span>Status</span>
      </div>

      {REFERRALS.map((r) => (
        <div
          key={r.who}
          className="grid grid-cols-[1.5fr_0.8fr_0.7fr_0.9fr_0.8fr] items-center gap-2 border-t px-3 py-2.5"
        >
          <span className="text-ink-900 dark:text-ink-100 truncate text-[11px] font-medium">
            {r.who}
          </span>
          <span className="text-ink-500 dark:text-ink-400 text-[11px]">{r.plan}</span>
          <span className="text-ink-400 text-[11px]">{r.date}</span>
          <span className="text-ink-900 dark:text-ink-100 text-right font-mono text-[11px] font-semibold">
            {r.com}
          </span>
          <Pill tone={r.tone}>{r.st}</Pill>
        </div>
      ))}
    </div>
  )
}

function PayoutsView() {
  return (
    <>
      <div className="flex gap-2.5">
        <StatTile label="Pago em 2026" value="R$ 4.060" tone="positive" />
        <StatTile label="Na fila" value="R$ 1.240" tone="accent" />
        <StatTile label="Próximo repasse" value="10/04" />
      </div>

      <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
        {PAYOUTS.map((p) => (
          <div key={p.ref} className="flex items-center gap-2.5 border-t px-3 py-2.5 first:border-t-0">
            <span className="text-ink-900 dark:text-ink-100 text-[11px] font-medium">{p.ref}</span>
            <span className="text-ink-400 text-[10px]">via Stripe · {p.nf}</span>
            <span className="text-ink-900 dark:text-ink-100 ml-auto font-mono text-[12px] font-semibold">
              {p.val}
            </span>
            <Pill tone={p.tone}>{p.st}</Pill>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-2.5 rounded-lg border border-dashed px-3 py-2.5"
        style={{ background: 'var(--surface)' }}
      >
        <span className="text-[14px]">🔒</span>
        <p className="text-ink-500 dark:text-ink-400 text-[11px]">
          Documentos são enviados por URL pré-assinada do S3 — os arquivos não passam pela API.
        </p>
      </div>
    </>
  )
}
