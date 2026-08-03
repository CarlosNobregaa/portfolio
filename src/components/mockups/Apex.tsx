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

const NAV = ['Dashboard', 'Pipeline', 'Leads', 'Atendimento', 'Automações', 'Relatórios']

type Lead = {
  co: string
  who: string
  val: string
  tag: string
  fone: string
  score: number
  stage: string
}

const COLUMNS: { title: string; tint: string; count: number; cards: Lead[] }[] = [
  {
    title: 'Novo lead',
    tint: 'bg-sky-400',
    count: 12,
    cards: [
      { co: 'Padaria Real', who: 'Ana Beatriz', val: 'R$ 2.400', tag: 'Meta Ads', fone: '(85) 9 8812-4470', score: 42, stage: 'Novo lead' },
      { co: 'Auto Peças MG', who: 'Rogério Lima', val: 'R$ 8.900', tag: 'Site', fone: '(31) 9 9114-8802', score: 58, stage: 'Novo lead' },
    ],
  },
  {
    title: 'Qualificação',
    tint: 'bg-violet-400',
    count: 8,
    cards: [
      { co: 'Clínica Vitale', who: 'Dra. Helena', val: 'R$ 14.200', tag: 'Indicação', fone: '(85) 9 9740-1123', score: 76, stage: 'Qualificação' },
      { co: 'Studio Pilates', who: 'Júlia Martins', val: 'R$ 4.800', tag: 'Site', fone: '(11) 9 8330-5567', score: 61, stage: 'Qualificação' },
    ],
  },
  {
    title: 'Proposta',
    tint: 'bg-amber-400',
    count: 5,
    cards: [
      { co: 'Transportes Sul', who: 'Marcos Vieira', val: 'R$ 31.500', tag: 'WhatsApp', fone: '(51) 9 9226-7781', score: 88, stage: 'Proposta' },
    ],
  },
  {
    title: 'Fechado',
    tint: 'bg-emerald-400',
    count: 3,
    cards: [
      { co: 'Ótica Visão', who: 'Pedro Hernandes', val: 'R$ 9.700', tag: 'Meta Ads', fone: '(62) 9 9008-3341', score: 94, stage: 'Fechado' },
    ],
  },
]

const ALL_LEADS = COLUMNS.flatMap((c) => c.cards)

export function ApexMockup({
  accent,
  interactive,
}: {
  accent: string
  interactive: boolean
}) {
  const [view, setView] = useState(NAV[1])
  const [lead, setLead] = useState<Lead | null>(null)

  return (
    <BrowserFrame url="app.apexcrm.com.br/pipeline/comercial">
      <div className={cn('flex', MOCKUP_BODY_H)}>
        <Sidebar
          accent={accent}
          brand="Apex CRM"
          items={NAV}
          active={view}
          onSelect={interactive ? (item) => { setView(item); setLead(null) } : undefined}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-hidden p-4">
          <PanelHeader
            title={view}
            subtitle={
              view === 'Pipeline'
                ? '28 negócios · R$ 184.300 em aberto'
                : view === 'Atendimento'
                  ? '6 conversas aguardando · agente ativo'
                  : 'Grupo Aurora · plano Business'
            }
            action={
              <div className="flex items-center gap-2">
                <Pill tone="violet">tenant: aurora</Pill>
                <Avatar initials="CN" />
              </div>
            }
          />

          {view === 'Pipeline' ? (
            <PipelineView lead={lead} onSelect={interactive ? setLead : undefined} />
          ) : view === 'Atendimento' ? (
            <AtendimentoView />
          ) : view === 'Leads' ? (
            <LeadsTable onSelect={interactive ? setLead : undefined} selected={lead} />
          ) : (
            <DashboardView />
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}

function PipelineView({
  lead,
  onSelect,
}: {
  lead: Lead | null
  onSelect?: (lead: Lead) => void
}) {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-[1fr_auto] gap-2.5">
      <div className="grid min-w-0 grid-cols-4 gap-2">
        {COLUMNS.map((col) => (
          <div
            key={col.title}
            className="min-w-0 space-y-2 rounded-lg p-2"
            style={{ background: 'var(--surface-sunken)' }}
          >
            <div className="flex items-center gap-1.5">
              <span className={cn('size-2 shrink-0 rounded-full', col.tint)} />
              <span className="text-ink-700 dark:text-ink-200 truncate text-[11px] font-semibold">
                {col.title}
              </span>
              <span className="text-ink-400 ml-auto font-mono text-[10px]">{col.count}</span>
            </div>

            {col.cards.map((card) => (
              <button
                key={card.co}
                type="button"
                onClick={onSelect ? () => onSelect(card) : undefined}
                className={cn(
                  'w-full space-y-1.5 rounded-md border p-2 text-left transition-all',
                  lead?.co === card.co
                    ? 'border-violet-400/60 ring-1 ring-violet-400/40'
                    : 'hover:border-violet-400/40',
                )}
                style={{ background: 'var(--surface)' }}
              >
                <p className="text-ink-900 dark:text-ink-100 truncate text-[11px] font-semibold">
                  {card.co}
                </p>
                <p className="text-ink-400 truncate text-[10px]">{card.who}</p>
                <div className="flex items-center justify-between gap-1 pt-0.5">
                  <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    {card.val}
                  </span>
                  <Avatar
                    initials={card.who[0]}
                    size="size-5 text-[9px]"
                    tint="bg-violet-400/20 text-violet-700 dark:text-violet-300"
                  />
                </div>
                <span className="text-ink-400 border-hairline block w-fit rounded border px-1.5 py-0.5 text-[9px]">
                  {card.tag}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Lead drawer */}
      <div
        className={cn(
          'w-[196px] shrink-0 overflow-hidden rounded-lg border transition-all',
          !lead && 'flex items-center justify-center',
        )}
        style={{ background: 'var(--surface)' }}
      >
        {lead ? (
          <div className="space-y-2.5 p-3">
            <div>
              <p className="text-ink-950 truncate text-[13px] font-bold dark:text-white">
                {lead.co}
              </p>
              <p className="text-ink-400 text-[10px]">{lead.who}</p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-ink-400">Score do lead</span>
                <span className="text-ink-800 dark:text-ink-100 font-mono font-bold">
                  {lead.score}
                </span>
              </div>
              <div className="bg-ink-200/60 dark:bg-ink-800 h-1.5 overflow-hidden rounded-full">
                <span
                  className={cn(
                    'block h-full rounded-full',
                    lead.score >= 75
                      ? 'bg-emerald-500'
                      : lead.score >= 50
                        ? 'bg-amber-400'
                        : 'bg-red-400',
                  )}
                  style={{ width: `${lead.score}%` }}
                />
              </div>
            </div>

            <dl className="space-y-1.5 border-t pt-2">
              {[
                ['Etapa', lead.stage],
                ['Origem', lead.tag],
                ['Telefone', lead.fone],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2 text-[10px]">
                  <dt className="text-ink-400 shrink-0">{k}</dt>
                  <dd className="text-ink-800 dark:text-ink-100 truncate font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="border-t pt-2">
              <p className="text-ink-400 text-[10px]">Valor estimado</p>
              <p className="text-ink-950 font-mono text-[16px] font-bold dark:text-white">
                {lead.val}
              </p>
            </div>

            <div className="flex gap-1.5">
              <MockButton className="flex-1">WhatsApp</MockButton>
              <MockButton tone="ghost">⋯</MockButton>
            </div>
          </div>
        ) : (
          <p className="text-ink-400 px-4 text-center text-[11px] leading-snug">
            Clique em um negócio para abrir os detalhes
          </p>
        )}
      </div>
    </div>
  )
}

function LeadsTable({
  onSelect,
  selected,
}: {
  onSelect?: (lead: Lead) => void
  selected: Lead | null
}) {
  return (
    <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
      <div className="text-ink-400 grid grid-cols-[1.3fr_1.1fr_1fr_0.8fr_0.7fr] gap-2 px-3 py-2 text-[10px] font-semibold tracking-wide uppercase">
        <span>Empresa</span>
        <span>Contato</span>
        <span>Telefone</span>
        <span>Etapa</span>
        <span className="text-right">Score</span>
      </div>

      {ALL_LEADS.map((l) => (
        <button
          key={l.co}
          type="button"
          onClick={onSelect ? () => onSelect(l) : undefined}
          className={cn(
            'grid w-full grid-cols-[1.3fr_1.1fr_1fr_0.8fr_0.7fr] items-center gap-2 border-t px-3 py-2.5 text-left transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.04]',
            selected?.co === l.co && 'bg-violet-400/8',
          )}
        >
          <span className="text-ink-900 dark:text-ink-100 truncate text-[11px] font-medium">
            {l.co}
          </span>
          <span className="text-ink-500 dark:text-ink-400 truncate text-[11px]">{l.who}</span>
          <span className="text-ink-400 truncate font-mono text-[10px]">{l.fone}</span>
          <span className="text-ink-500 dark:text-ink-400 truncate text-[10px]">{l.stage}</span>
          <span
            className={cn(
              'text-right font-mono text-[11px] font-bold',
              l.score >= 75
                ? 'text-emerald-500'
                : l.score >= 50
                  ? 'text-amber-500'
                  : 'text-red-400',
            )}
          >
            {l.score}
          </span>
        </button>
      ))}
    </div>
  )
}

function AtendimentoView() {
  const chats = [
    { who: 'Ana Beatriz', last: 'Vocês entregam em Fortaleza?', time: '2m', ai: true, unread: 2 },
    { who: 'Rogério Lima', last: 'Perfeito, pode mandar a proposta', time: '18m', ai: true, unread: 0 },
    { who: 'Dra. Helena', last: 'Consigo agendar uma call amanhã?', time: '1h', ai: false, unread: 1 },
    { who: 'Marcos Vieira', last: 'Recebi, vou analisar com o time', time: '3h', ai: true, unread: 0 },
  ]

  return (
    <>
      <div className="flex gap-2.5">
        <StatTile label="Conversas hoje" value="34" delta="+9 vs ontem" />
        <StatTile label="Resolvidas pela IA" value="71%" tone="accent" />
        <StatTile label="Tempo médio" value="1m12s" tone="positive" />
      </div>

      <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
        {chats.map((c) => (
          <div key={c.who} className="flex items-center gap-2.5 border-t px-3 py-2.5 first:border-t-0">
            <Avatar
              initials={c.who.split(' ').map((w) => w[0]).join('')}
              tint="bg-ink-400/15 text-ink-600 dark:text-ink-300"
              size="size-7 text-[10px]"
            />
            <div className="min-w-0 flex-1">
              <p className="text-ink-900 dark:text-ink-100 truncate text-[11px] font-semibold">
                {c.who}
              </p>
              <p className="text-ink-400 truncate text-[10px]">{c.last}</p>
            </div>
            {c.ai ? <Pill tone="violet">IA</Pill> : <Pill tone="amber">Humano</Pill>}
            <span className="text-ink-400 w-8 shrink-0 text-right text-[10px]">{c.time}</span>
            {c.unread > 0 ? (
              <span className="bg-brand-500 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white">
                {c.unread}
              </span>
            ) : (
              <span className="size-4 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function DashboardView() {
  const bars = [52, 68, 47, 81, 74, 92, 63]

  return (
    <>
      <div className="flex gap-2.5">
        <StatTile label="Receita no mês" value="R$ 96,4k" delta="+22%" />
        <StatTile label="Negócios abertos" value="28" tone="accent" />
        <StatTile label="Taxa de conversão" value="34%" tone="positive" />
      </div>

      <div className="rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
            Negócios fechados por semana
          </span>
          <span className="text-ink-400 text-[10px]">últimas 7 semanas</span>
        </div>
        <div className="flex h-[86px] items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <span
                className={cn(
                  'w-full rounded-t',
                  i === bars.length - 2 ? 'bg-violet-500' : 'bg-violet-400/40',
                )}
                style={{ height: `${h}%` }}
              />
              <span className="text-ink-400 text-[9px]">S{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2.5 rounded-lg border border-violet-400/30 bg-violet-400/8 px-3 py-2.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-md bg-violet-500 text-[10px] font-bold text-white">
          IA
        </span>
        <div className="min-w-0">
          <p className="text-ink-900 dark:text-ink-100 truncate text-[11px] font-semibold">
            Agente respondeu 34 conversas hoje
          </p>
          <p className="text-ink-400 truncate text-[10px]">
            6 leads qualificados automaticamente · tempo médio de resposta 1m12s
          </p>
        </div>
        <Pill tone="violet">Ativo</Pill>
      </div>
    </>
  )
}
