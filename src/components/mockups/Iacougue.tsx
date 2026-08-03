'use client'

import { useState } from 'react'
import { PhoneFrame } from './chrome'
import { cn } from '@/lib/utils'

type Screen = 'home' | 'planos' | 'legal'

const TABS: { id: Screen; label: string }[] = [
  { id: 'home', label: 'Início' },
  { id: 'planos', label: 'Planos' },
  { id: 'legal', label: 'Privacidade' },
]

export function IacougueMockup({ interactive }: { interactive: boolean }) {
  const [screen, setScreen] = useState<Screen>('home')

  return (
    <div className="flex flex-col items-center gap-3">
      <PhoneFrame>
        <div
          className="h-[420px] overflow-y-auto"
          style={{ background: 'var(--surface-raised)' }}
        >
          {/* Nav */}
          <div
            className="sticky top-0 z-10 flex items-center gap-2 px-3 pt-7 pb-2.5 backdrop-blur"
            style={{ background: 'color-mix(in oklab, var(--surface-raised) 88%, transparent)' }}
          >
            <span className="grid size-6 shrink-0 place-items-center rounded bg-gradient-to-br from-red-500 to-amber-500 text-[10px] font-black text-white">
              ia
            </span>
            <span className="text-ink-950 text-[12px] font-bold dark:text-white">iaçougue</span>

            <nav className="ml-auto flex gap-0.5">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={interactive ? () => setScreen(t.id) : undefined}
                  aria-current={screen === t.id ? 'page' : undefined}
                  className={cn(
                    'rounded px-1.5 py-1 text-[9px] font-medium transition-colors',
                    screen === t.id
                      ? 'bg-red-500/12 text-red-600 dark:text-red-400'
                      : 'text-ink-400',
                  )}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </div>

          {screen === 'home' ? <HomeScreen /> : screen === 'planos' ? <PlanosScreen /> : <LegalScreen />}
        </div>
      </PhoneFrame>

      {interactive ? (
        <p className="text-ink-400 text-[11px]">
          As páginas legais são o que a Meta revisa para aprovar o app
        </p>
      ) : null}
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="pb-4">
      <div className="space-y-2 px-3">
        <span className="inline-block rounded-full bg-red-500/12 px-2 py-0.5 text-[8px] font-bold tracking-wide text-red-600 uppercase dark:text-red-400">
          WhatsApp · Inteligência Artificial
        </span>

        <p className="text-ink-950 text-[17px] leading-[1.15] font-bold tracking-tight dark:text-white">
          Sua atendente de IA para açougue
        </p>

        <p className="text-ink-500 dark:text-ink-400 text-[10px] leading-snug">
          Recebe pedidos, tira dúvidas de corte e peso, e fecha venda no WhatsApp — 24 horas,
          sem contratar ninguém.
        </p>

        <div className="flex gap-1.5 pt-1">
          <span className="rounded bg-gradient-to-r from-red-600 to-amber-500 px-2.5 py-1.5 text-[9px] font-bold text-white">
            Falar no WhatsApp
          </span>
          <span className="border-hairline text-ink-600 dark:text-ink-300 rounded border px-2.5 py-1.5 text-[9px] font-semibold">
            Ver planos
          </span>
        </div>
      </div>

      {/* Sample conversation, the way the landing page demonstrates it */}
      <div
        className="mx-3 mt-3 space-y-1.5 rounded-lg border p-2"
        style={{ background: 'var(--surface-sunken)' }}
      >
        <div className="flex justify-start">
          <p className="dark:bg-ink-800 max-w-[85%] rounded-lg bg-white px-2 py-1 text-[9px] leading-snug">
            Boa tarde! Tem picanha hoje?
          </p>
        </div>
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-lg bg-[#DCF8C6] px-2 py-1 text-[9px] leading-snug dark:bg-emerald-900/50">
            Temos sim! Picanha maturada a R$ 89,90/kg. Quer quantos kg? 🥩
          </p>
        </div>
        <div className="flex justify-start">
          <p className="dark:bg-ink-800 max-w-[85%] rounded-lg bg-white px-2 py-1 text-[9px] leading-snug">
            2kg, pode entregar?
          </p>
        </div>
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-lg bg-[#DCF8C6] px-2 py-1 text-[9px] leading-snug dark:bg-emerald-900/50">
            Claro! 2kg = R$ 179,80. Me passa o endereço que calculo a entrega.
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5 px-3">
        {[
          { i: '🥩', t: 'Cardápio por peso', d: 'Picanha, alcatra, costela' },
          { i: '🛵', t: 'Pedido e entrega', d: 'Endereço e taxa automáticos' },
          { i: '⏰', t: 'Atende 24h', d: 'Inclusive domingo' },
          { i: '📊', t: 'Relatório diário', d: 'Vendas no WhatsApp' },
        ].map((f) => (
          <div
            key={f.t}
            className="space-y-0.5 rounded-md border p-2"
            style={{ background: 'var(--surface)' }}
          >
            <span className="text-[11px]">{f.i}</span>
            <p className="text-ink-900 dark:text-ink-100 truncate text-[9px] font-bold">{f.t}</p>
            <p className="text-ink-400 truncate text-[8px]">{f.d}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

function PlanosScreen() {
  const plans = [
    { n: 'Balcão', p: 'R$ 97', d: '/mês', f: ['1 número', 'Até 500 conversas', 'Cardápio por peso'], hl: false },
    { n: 'Açougue', p: 'R$ 197', d: '/mês', f: ['2 números', 'Conversas ilimitadas', 'Entrega e taxa', 'Relatório diário'], hl: true },
    { n: 'Rede', p: 'Sob consulta', d: '', f: ['Multi-loja', 'Integração com PDV', 'Suporte dedicado'], hl: false },
  ]

  return (
    <div className="space-y-2 px-3 pb-4">
      <p className="text-ink-950 pt-1 text-[15px] font-bold tracking-tight dark:text-white">
        Planos
      </p>
      <p className="text-ink-400 text-[9px]">Sem fidelidade. Cancele quando quiser.</p>

      {plans.map((pl) => (
        <div
          key={pl.n}
          className={cn(
            'rounded-lg border p-2.5',
            pl.hl && 'border-red-400/50 bg-red-400/6',
          )}
          style={pl.hl ? undefined : { background: 'var(--surface)' }}
        >
          <div className="flex items-baseline justify-between">
            <span className="text-ink-900 dark:text-ink-100 text-[11px] font-bold">{pl.n}</span>
            {pl.hl ? (
              <span className="rounded bg-red-500 px-1.5 py-0.5 text-[7px] font-bold text-white">
                MAIS ESCOLHIDO
              </span>
            ) : null}
          </div>

          <p className="text-ink-950 mt-1 font-mono text-[15px] font-bold dark:text-white">
            {pl.p}
            <span className="text-ink-400 text-[9px] font-normal">{pl.d}</span>
          </p>

          <ul className="mt-1.5 space-y-0.5">
            {pl.f.map((f) => (
              <li key={f} className="text-ink-500 dark:text-ink-400 flex gap-1 text-[9px]">
                <span className="text-emerald-500">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Footer />
    </div>
  )
}

function LegalScreen() {
  return (
    <div className="space-y-2 px-3 pb-4">
      <p className="text-ink-950 pt-1 text-[14px] font-bold tracking-tight dark:text-white">
        Política de Privacidade
      </p>
      <p className="text-ink-400 text-[8px]">Atualizada em 12/06/2025 · LGPD</p>

      {[
        {
          h: '1. Dados que coletamos',
          b: 'Nome, telefone e o conteúdo das mensagens trocadas com a atendente no WhatsApp, além do endereço quando você solicita entrega.',
        },
        {
          h: '2. Finalidade',
          b: 'Os dados são usados exclusivamente para atender o seu pedido, calcular entrega e enviar a confirmação. Não vendemos nem compartilhamos com terceiros para publicidade.',
        },
        {
          h: '3. Encarregado (DPO)',
          b: 'Dúvidas e solicitações de exclusão: privacidade@iacougue.com.br',
        },
      ].map((s) => (
        <div key={s.h} className="space-y-0.5">
          <p className="text-ink-800 dark:text-ink-100 text-[9.5px] font-semibold">{s.h}</p>
          <p className="text-ink-500 dark:text-ink-400 text-[8.5px] leading-relaxed">{s.b}</p>
        </div>
      ))}

      <div className="rounded-md border border-dashed p-2">
        <p className="text-ink-400 text-[8px] leading-relaxed">
          Empresa, CNPJ, endereço e contato do DPO vêm de um único módulo de configuração
          tipado — a política e os termos leem do mesmo lugar.
        </p>
      </div>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <div className="text-ink-400 mt-3 flex justify-center gap-2 border-t px-3 pt-2 text-[8px]">
      <span>Política de Privacidade</span>
      <span>·</span>
      <span>Termos de Uso</span>
    </div>
  )
}
