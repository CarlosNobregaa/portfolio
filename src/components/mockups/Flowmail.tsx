'use client'

import { useState } from 'react'
import {
  BrowserFrame,
  MOCKUP_BODY_H,
  MockButton,
  PanelHeader,
  Pill,
  Sidebar,
  StatTile,
} from './chrome'
import { cn } from '@/lib/utils'

const NAV = ['Overview', 'Campaigns', 'Templates', 'Segments', 'Billing']

type Campaign = {
  id: string
  name: string
  meta: string
  live: boolean
  subject: string
  body: string
  cta: string
  banner: string
  products: { n: string; p: string }[]
  stats: { sent: string; open: string; revenue: string }
}

const CAMPAIGNS: Campaign[] = [
  {
    id: 'cart',
    name: 'Carrinho abandonado',
    meta: '1.284 enviados · 38% abertura',
    live: true,
    subject: 'Esqueceu algo no carrinho? 🛒',
    body: 'Olá, Juliana! Seus itens ainda estão reservados por 24h. Finalize agora com 10% OFF.',
    cta: 'Finalizar compra',
    banner: 'LOJA VERÃO',
    products: [
      { n: 'Biquíni Sol', p: 'R$ 129' },
      { n: 'Chapéu Palha', p: 'R$ 79' },
      { n: 'Saída de Praia', p: 'R$ 189' },
    ],
    stats: { sent: '1.284', open: '38%', revenue: 'R$ 8,2k' },
  },
  {
    id: 'welcome',
    name: 'Boas-vindas',
    meta: '640 enviados · 52% abertura',
    live: true,
    subject: 'Bem-vinda à Loja Verão ☀️',
    body: 'Que bom ter você aqui! Separamos os looks mais pedidos da estação — e seu cupom de 15% na primeira compra.',
    cta: 'Usar meu cupom',
    banner: 'BEM-VINDA',
    products: [
      { n: 'Kit Praia', p: 'R$ 249' },
      { n: 'Óculos Retrô', p: 'R$ 159' },
      { n: 'Canga Boho', p: 'R$ 89' },
    ],
    stats: { sent: '640', open: '52%', revenue: 'R$ 3,1k' },
  },
  {
    id: 'bf',
    name: 'Black Friday',
    meta: 'Agendada para 27/11 · 09:00',
    live: false,
    subject: 'Black Friday começou 🔥 até 60% OFF',
    body: 'Só até domingo: descontos reais em toda a coleção de verão. Frete grátis acima de R$ 199.',
    cta: 'Ver ofertas',
    banner: 'BLACK FRIDAY',
    products: [
      { n: 'Vestido Longo', p: 'R$ 199' },
      { n: 'Sandália Nó', p: 'R$ 139' },
      { n: 'Bolsa Palha', p: 'R$ 169' },
    ],
    stats: { sent: '—', open: '—', revenue: '—' },
  },
]

export function FlowmailMockup({
  accent,
  interactive,
}: {
  accent: string
  interactive: boolean
}) {
  const [view, setView] = useState(NAV[1])
  const [activeId, setActiveId] = useState(CAMPAIGNS[0].id)
  const [drafting, setDrafting] = useState(false)

  const campaign = CAMPAIGNS.find((c) => c.id === activeId) ?? CAMPAIGNS[0]

  function draftWithAi() {
    setDrafting(true)
    window.setTimeout(() => setDrafting(false), 1400)
  }

  return (
    <BrowserFrame url="app.flowmail.io/campaigns">
      <div className={cn('flex', MOCKUP_BODY_H)}>
        <Sidebar
          accent={accent}
          brand="Flowmail"
          items={NAV}
          active={view}
          onSelect={interactive ? setView : undefined}
        />

        <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-hidden p-4">
          <PanelHeader
            title={view}
            subtitle="Loja Verão BR · Shopify"
            action={<Pill tone="green">Shopify conectada</Pill>}
          />

          {view === 'Billing' ? (
            <BillingView />
          ) : view === 'Overview' ? (
            <OverviewView />
          ) : (
            <div className="grid min-h-0 flex-1 grid-cols-[0.95fr_1.05fr] gap-3">
              {/* Campaign list */}
              <div className="space-y-2">
                {CAMPAIGNS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={interactive ? () => setActiveId(c.id) : undefined}
                    className={cn(
                      'w-full space-y-1 rounded-lg border p-2.5 text-left transition-all',
                      c.id === activeId
                        ? 'border-orange-400/50 bg-orange-400/8'
                        : 'hover:border-orange-400/30',
                    )}
                    style={
                      c.id === activeId ? undefined : { background: 'var(--surface)' }
                    }
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          'size-2 shrink-0 rounded-full',
                          c.live ? 'bg-emerald-400' : 'bg-ink-300 dark:bg-ink-600',
                        )}
                      />
                      <span className="text-ink-900 dark:text-ink-100 truncate text-[11px] font-semibold">
                        {c.name}
                      </span>
                    </div>
                    <p className="text-ink-400 truncate text-[10px]">{c.meta}</p>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={interactive ? draftWithAi : undefined}
                  disabled={drafting}
                  className="w-full rounded-lg bg-gradient-to-r from-orange-400/20 to-rose-400/20 p-2.5 text-left transition-opacity hover:from-orange-400/30 hover:to-rose-400/30 disabled:opacity-70"
                >
                  <p className="text-ink-900 dark:text-ink-100 text-[11px] font-semibold">
                    {drafting ? '✦ Gerando…' : '✦ Draft with AI'}
                  </p>
                  <p className="text-ink-400 text-[10px]">
                    {drafting ? 'Lendo catálogo e pedidos' : 'From your catalogue'}
                  </p>
                </button>

                <div className="flex gap-2">
                  <StatTile label="Revenue" value={campaign.stats.revenue} tone="positive" />
                </div>
              </div>

              {/* Email preview */}
              <div
                className="min-h-0 space-y-2 overflow-hidden rounded-lg border p-3"
                style={{ background: 'var(--surface)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-ink-400 text-[10px]">Preview</span>
                  <Pill tone="green">Guardrails OK</Pill>
                </div>

                <div className="from-brand-400/25 flex h-11 items-center justify-center rounded bg-gradient-to-br to-violet-400/25">
                  <span className="text-ink-700 dark:text-ink-200 text-[12px] font-bold tracking-wider">
                    {campaign.banner}
                  </span>
                </div>

                <p className="text-ink-900 dark:text-ink-100 text-[13px] leading-tight font-bold">
                  {campaign.subject}
                </p>
                <p className="text-ink-500 dark:text-ink-400 text-[10.5px] leading-snug">
                  {campaign.body}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  {campaign.products.map((prod) => (
                    <div key={prod.n} className="space-y-1">
                      <span className="bg-ink-200/60 dark:bg-ink-800 block h-12 rounded" />
                      <p className="text-ink-500 dark:text-ink-400 truncate text-[9px]">
                        {prod.n}
                      </p>
                      <p className="text-ink-900 dark:text-ink-100 text-[9px] font-bold">
                        {prod.p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-500 rounded py-1.5 text-center text-[10px] font-bold text-white">
                  {campaign.cta}
                </div>

                <div className="text-ink-400 flex justify-between border-t pt-2 text-[9px]">
                  <span>Enviados {campaign.stats.sent}</span>
                  <span>Abertura {campaign.stats.open}</span>
                  <span>Receita {campaign.stats.revenue}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}

function OverviewView() {
  const bars = [30, 48, 42, 66, 58, 84, 71, 92]

  return (
    <>
      <div className="flex gap-2.5">
        <StatTile label="Receita atribuída" value="R$ 12,4k" delta="+31%" />
        <StatTile label="Taxa de abertura" value="41%" tone="accent" />
        <StatTile label="Assinantes" value="8.412" tone="positive" />
      </div>

      <div className="rounded-lg border p-3" style={{ background: 'var(--surface)' }}>
        <span className="text-ink-600 dark:text-ink-300 text-[12px] font-semibold">
          Receita por semana
        </span>
        <div className="mt-2 flex h-[110px] items-end gap-2">
          {bars.map((h, i) => (
            <span
              key={i}
              className={cn(
                'flex-1 rounded-t',
                i === bars.length - 1 ? 'bg-orange-500' : 'bg-orange-400/40',
              )}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function BillingView() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2.5">
        <StatTile label="Plano" value="Growth" tone="accent" />
        <StatTile label="Envios no ciclo" value="9.240" />
        <StatTile label="Próxima cobrança" value="12/09" />
      </div>

      {[
        { via: 'Shopify Billing', desc: 'Cobrança dentro da loja', val: 'US$ 49/mês', tone: 'green' },
        { via: 'Stripe', desc: 'Venda direta, fora do ecossistema', val: 'R$ 249/mês', tone: 'blue' },
      ].map((row) => (
        <div
          key={row.via}
          className="flex items-center gap-3 rounded-lg border p-3"
          style={{ background: 'var(--surface)' }}
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-gradient-to-br from-orange-400 to-rose-500 text-[11px] font-bold text-white">
            {row.via[0]}
          </span>
          <div className="min-w-0">
            <p className="text-ink-900 dark:text-ink-100 text-[11px] font-semibold">{row.via}</p>
            <p className="text-ink-400 truncate text-[10px]">{row.desc}</p>
          </div>
          <span className="text-ink-900 dark:text-ink-100 ml-auto font-mono text-[12px] font-bold">
            {row.val}
          </span>
          <Pill tone={row.tone as 'green' | 'blue'}>Ativo</Pill>
        </div>
      ))}

      <div className="flex justify-end">
        <MockButton tone="ghost">Gerenciar assinatura</MockButton>
      </div>
    </div>
  )
}
