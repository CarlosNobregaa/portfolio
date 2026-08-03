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

const NAV = ['Início', 'Meu portfólio', 'Espelho de vendas', 'Propostas', 'Documentos']

type UnitState = 'v' | 'r' | 'd'

type Unit = {
  n: string
  s: UnitState
  tipo: string
  area: string
  valor: string
  vista: string
}

const UNITS: Unit[] = [
  { n: '1204', s: 'd', tipo: '3 suítes', area: '142 m²', valor: 'R$ 1.184.000', vista: 'Mar' },
  { n: '1203', s: 'r', tipo: '3 suítes', area: '138 m²', valor: 'R$ 1.092.000', vista: 'Mar' },
  { n: '1202', s: 'v', tipo: '2 suítes', area: '96 m²', valor: 'R$ 812.000', vista: 'Cidade' },
  { n: '1201', s: 'v', tipo: '2 suítes', area: '96 m²', valor: 'R$ 798.000', vista: 'Cidade' },
  { n: '1104', s: 'd', tipo: '3 suítes', area: '142 m²', valor: 'R$ 1.156.000', vista: 'Mar' },
  { n: '1103', s: 'v', tipo: '3 suítes', area: '138 m²', valor: 'R$ 1.068.000', vista: 'Mar' },
  { n: '1102', s: 'd', tipo: '2 suítes', area: '96 m²', valor: 'R$ 794.000', vista: 'Cidade' },
  { n: '1101', s: 'v', tipo: '2 suítes', area: '96 m²', valor: 'R$ 786.000', vista: 'Cidade' },
  { n: '1004', s: 'v', tipo: '3 suítes', area: '142 m²', valor: 'R$ 1.128.000', vista: 'Mar' },
  { n: '1003', s: 'd', tipo: '3 suítes', area: '138 m²', valor: 'R$ 1.044.000', vista: 'Mar' },
  { n: '1002', s: 'd', tipo: '2 suítes', area: '96 m²', valor: 'R$ 776.000', vista: 'Cidade' },
  { n: '1001', s: 'r', tipo: '2 suítes', area: '96 m²', valor: 'R$ 764.000', vista: 'Cidade' },
]

const UNIT_TONE: Record<UnitState, string> = {
  v: 'bg-emerald-400/25 text-emerald-700 dark:text-emerald-300 border-emerald-400/40',
  r: 'bg-amber-400/25 text-amber-700 dark:text-amber-300 border-amber-400/40',
  d: 'text-ink-500 dark:text-ink-400 border-hairline hover:border-brand-400/50',
}

const UNIT_LABEL: Record<UnitState, string> = {
  v: 'Vendida',
  r: 'Reservada',
  d: 'Disponível',
}

const PROPOSALS = [
  {
    who: 'Marina Souza',
    un: 'Un. 1203',
    val: 'R$ 892.400',
    st: 'Enviada',
    tone: 'blue',
    date: '02/08',
  },
  {
    who: 'Carlos Ferraz',
    un: 'Un. 1001',
    val: 'R$ 745.000',
    st: 'Aceita',
    tone: 'green',
    date: '29/07',
  },
  {
    who: 'Bianca Rocha',
    un: 'Un. 1104',
    val: 'R$ 1.150.000',
    st: 'Em análise',
    tone: 'amber',
    date: '27/07',
  },
] as const

export function AldeaMockup({
  accent,
  interactive,
}: {
  accent: string
  interactive: boolean
}) {
  const [view, setView] = useState(NAV[1])
  const [selected, setSelected] = useState<Unit | null>(null)

  return (
    <BrowserFrame url="portal.aldea.com.br/investidor">
      <div className={cn('flex', MOCKUP_BODY_H)}>
        <Sidebar
          accent={accent}
          brand="ALDEA"
          items={NAV}
          active={view}
          onSelect={interactive ? (item) => { setView(item); setSelected(null) } : undefined}
        />

        <div className="flex-1 space-y-3 overflow-hidden p-4">
          <PanelHeader
            title={view === NAV[3] ? 'Propostas' : view === NAV[2] ? 'Espelho de vendas' : 'Meu portfólio'}
            subtitle="Residencial Vista Aldeia · Torre B"
            action={<Avatar initials="MS" />}
          />

          {view === NAV[3] ? (
            <ProposalsView />
          ) : view === NAV[2] ? (
            <UnitsView
              selected={selected}
              onSelect={interactive ? setSelected : undefined}
            />
          ) : (
            <PortfolioView />
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}

function PortfolioView() {
  return (
    <>
      <div className="flex gap-2.5">
        <StatTile label="Valor investido" value="R$ 4,28M" delta="+12,4% a.a." />
        <StatTile label="Unidades" value="14" tone="accent" />
        <StatTile label="Propostas ativas" value="3" tone="positive" />
      </div>

      <div className="grid grid-cols-[1.3fr_1fr] gap-2.5">
        <div className="rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
              Valorização do portfólio
            </span>
            <span className="font-mono text-[12px] font-bold text-emerald-500">+12,4%</span>
          </div>

          <svg viewBox="0 0 100 46" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aldea-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(20 178 177)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(20 178 177)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 38 L14 33 L28 35 L42 23 L56 26 L70 14 L84 16 L100 5 L100 46 L0 46 Z"
              fill="url(#aldea-fill)"
            />
            <path
              d="M0 38 L14 33 L28 35 L42 23 L56 26 L70 14 L84 16 L100 5"
              fill="none"
              stroke="rgb(20 178 177)"
              strokeWidth="1.5"
            />
          </svg>

          <div className="text-ink-400 mt-1 flex justify-between text-[9px]">
            {['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago'].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="space-y-2 rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
          <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
            Composição
          </span>

          {[
            { label: 'Torre B', pct: 62, tint: 'bg-brand-500' },
            { label: 'Torre A', pct: 26, tint: 'bg-violet-400' },
            { label: 'Lotes', pct: 12, tint: 'bg-amber-400' },
          ].map((row) => (
            <div key={row.label} className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-ink-500 dark:text-ink-400">{row.label}</span>
                <span className="text-ink-800 dark:text-ink-100 font-mono font-semibold">
                  {row.pct}%
                </span>
              </div>
              <div className="bg-ink-200/60 dark:bg-ink-800 h-1.5 overflow-hidden rounded-full">
                <span
                  className={cn('block h-full rounded-full', row.tint)}
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
            Propostas recentes
          </span>
          <span className="text-brand-500 text-[10px] font-medium">Ver todas</span>
        </div>

        {PROPOSALS.slice(0, 2).map((p) => (
          <ProposalRow key={p.who} proposal={p} />
        ))}
      </div>
    </>
  )
}

function UnitsView({
  selected,
  onSelect,
}: {
  selected: Unit | null
  onSelect?: (unit: Unit) => void
}) {
  const counts = {
    v: UNITS.filter((u) => u.s === 'v').length,
    r: UNITS.filter((u) => u.s === 'r').length,
    d: UNITS.filter((u) => u.s === 'd').length,
  }

  return (
    <div className="grid grid-cols-[1.35fr_1fr] gap-2.5">
      <div className="rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
            Torre B · pavimentos 10-12
          </span>
          <span className="text-ink-400 text-[10px]">128 unidades</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {UNITS.map((u) => {
            const isSelected = selected?.n === u.n
            return (
              <button
                key={u.n}
                type="button"
                onClick={onSelect ? () => onSelect(u) : undefined}
                className={cn(
                  'rounded border py-2 text-center font-mono text-[11px] font-semibold transition-all',
                  UNIT_TONE[u.s],
                  isSelected && 'ring-brand-400 scale-[1.04] ring-2',
                )}
              >
                {u.n}
              </button>
            )
          })}
        </div>

        <div className="text-ink-400 mt-3 flex gap-3 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-emerald-400/70" />
            Vendida ({counts.v})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-amber-400/70" />
            Reservada ({counts.r})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="bg-ink-300/50 dark:bg-ink-600 size-2 rounded-sm" />
            Disponível ({counts.d})
          </span>
        </div>
      </div>

      {/* Detail panel driven by the grid selection */}
      <div className="rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
        {selected ? (
          <div className="space-y-2.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-ink-950 font-mono text-[16px] font-bold dark:text-white">
                  Unidade {selected.n}
                </p>
                <p className="text-ink-400 text-[10px]">Torre B</p>
              </div>
              <Pill
                tone={selected.s === 'v' ? 'green' : selected.s === 'r' ? 'amber' : 'neutral'}
              >
                {UNIT_LABEL[selected.s]}
              </Pill>
            </div>

            <dl className="space-y-1.5">
              {[
                ['Tipologia', selected.tipo],
                ['Área privativa', selected.area],
                ['Vista', selected.vista],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-[11px]">
                  <dt className="text-ink-400">{k}</dt>
                  <dd className="text-ink-800 dark:text-ink-100 font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="border-t pt-2">
              <p className="text-ink-400 text-[10px]">Valor de tabela</p>
              <p className="text-ink-950 font-mono text-[17px] font-bold dark:text-white">
                {selected.valor}
              </p>
            </div>

            <MockButton className="w-full">
              {selected.s === 'd' ? 'Gerar proposta' : 'Ver proposta'}
            </MockButton>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <span className="border-hairline text-ink-300 dark:text-ink-600 grid size-10 place-items-center rounded-lg border border-dashed text-[16px]">
              ▦
            </span>
            <p className="text-ink-400 max-w-[150px] text-[11px] leading-snug">
              Selecione uma unidade no espelho para ver os detalhes
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProposalsView() {
  return (
    <>
      <div className="flex gap-2.5">
        <StatTile label="Em aberto" value="R$ 2,78M" />
        <StatTile label="Aceitas no mês" value="4" tone="positive" />
        <StatTile label="Taxa de aceite" value="57%" tone="accent" />
      </div>

      <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
        <div className="text-ink-400 grid grid-cols-[1.4fr_0.8fr_1fr_0.7fr_0.8fr] gap-2 px-3 py-2 text-[10px] font-semibold tracking-wide uppercase">
          <span>Investidor</span>
          <span>Unidade</span>
          <span className="text-right">Valor</span>
          <span>Data</span>
          <span>Status</span>
        </div>

        {PROPOSALS.map((p) => (
          <ProposalRow key={p.who} proposal={p} detailed />
        ))}
      </div>

      <div
        className="flex items-center gap-2.5 rounded-lg border border-dashed px-3 py-2.5"
        style={{ background: 'var(--surface)' }}
      >
        <span className="text-[14px]">📄</span>
        <p className="text-ink-500 dark:text-ink-400 text-[11px]">
          Propostas são geradas em PDF por um worker com Playwright e enviadas por e-mail.
        </p>
      </div>
    </>
  )
}

function ProposalRow({
  proposal,
  detailed = false,
}: {
  proposal: (typeof PROPOSALS)[number]
  detailed?: boolean
}) {
  if (detailed) {
    return (
      <div className="grid grid-cols-[1.4fr_0.8fr_1fr_0.7fr_0.8fr] items-center gap-2 border-t px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <Avatar
            initials={proposal.who.split(' ').map((w) => w[0]).join('')}
            tint="bg-ink-400/15 text-ink-600 dark:text-ink-300"
            size="size-6 text-[9px]"
          />
          <span className="text-ink-800 dark:text-ink-100 truncate text-[11px] font-medium">
            {proposal.who}
          </span>
        </div>
        <span className="text-ink-500 dark:text-ink-400 text-[11px]">{proposal.un}</span>
        <span className="text-ink-900 dark:text-ink-100 text-right font-mono text-[11px] font-semibold">
          {proposal.val}
        </span>
        <span className="text-ink-400 text-[11px]">{proposal.date}</span>
        <Pill tone={proposal.tone}>{proposal.st}</Pill>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2.5 border-t px-3 py-2.5">
      <Avatar
        initials={proposal.who.split(' ').map((w) => w[0]).join('')}
        tint="bg-ink-400/15 text-ink-600 dark:text-ink-300"
        size="size-6 text-[9px]"
      />
      <span className="text-ink-800 dark:text-ink-100 truncate text-[11px] font-medium">
        {proposal.who}
      </span>
      <span className="text-ink-400 text-[10px]">{proposal.un}</span>
      <span className="text-ink-900 dark:text-ink-100 ml-auto font-mono text-[11px] font-semibold">
        {proposal.val}
      </span>
      <Pill tone={proposal.tone}>{proposal.st}</Pill>
    </div>
  )
}
