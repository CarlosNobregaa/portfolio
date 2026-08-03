import type { ProjectId } from '@/data/projects'
import { Avatar, BrowserFrame, PhoneFrame, Pill, Sidebar, StatTile } from './chrome'
import { cn } from '@/lib/utils'

/**
 * Per-project interface reconstructions.
 *
 * Built in markup rather than screenshotted: the real products are private
 * client systems, and a static export must not ship images of customer data.
 * Every company, person, figure and date below is invented — the layout,
 * terminology and screen structure are what mirror the real product.
 *
 * The Brazilian products are shown in Portuguese because that is the language
 * their real interfaces are in.
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

const CELL = 'flex items-center gap-2 px-2.5 py-1.5 border-t'

/* ---------------------------------------------- ALDEA — investor portal --- */

function AldeaMockup({ accent }: { accent: string }) {
  const units = [
    { n: '1201', s: 'v' }, { n: '1202', s: 'v' }, { n: '1203', s: 'r' }, { n: '1204', s: 'd' },
    { n: '1101', s: 'v' }, { n: '1102', s: 'd' }, { n: '1103', s: 'v' }, { n: '1104', s: 'd' },
    { n: '1001', s: 'r' }, { n: '1002', s: 'd' }, { n: '1003', s: 'd' }, { n: '1004', s: 'v' },
  ] as const

  const tone = {
    v: 'bg-emerald-400/25 text-emerald-700 dark:text-emerald-300 border-emerald-400/30',
    r: 'bg-amber-400/25 text-amber-700 dark:text-amber-300 border-amber-400/30',
    d: 'text-ink-400 border-hairline',
  }

  const proposals = [
    { who: 'Marina Souza', un: 'Un. 1203', val: 'R$ 892.400', st: 'Enviada', tone: 'blue' },
    { who: 'Carlos Ferraz', un: 'Un. 1001', val: 'R$ 745.000', st: 'Aceita', tone: 'green' },
  ] as const

  return (
    <BrowserFrame url="portal.aldea.com.br/investidor/portfolio">
      <div className="flex h-[252px]">
        <Sidebar
          accent={accent}
          brand="ALDEA"
          items={['Início', 'Meu portfólio', 'Empreendimentos', 'Propostas', 'Documentos']}
        />

        <div className="flex-1 space-y-2 overflow-hidden p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-ink-950 text-[11px] font-bold tracking-tight dark:text-white">
                Meu portfólio
              </p>
              <p className="text-ink-400 text-[8px]">Residencial Vista Aldeia · Torre B</p>
            </div>
            <Avatar initials="MS" />
          </div>

          <div className="flex gap-1.5">
            <StatTile label="Valor investido" value="R$ 4,28M" delta="+12,4% a.a." />
            <StatTile label="Unidades" value="14" tone="accent" />
            <StatTile label="Propostas" value="3" tone="positive" />
          </div>

          <div className="grid grid-cols-[1.25fr_1fr] gap-1.5">
            {/* Unit inventory */}
            <div className="rounded-lg border p-1.5" style={{ background: 'var(--surface)' }}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-ink-500 dark:text-ink-400 text-[8px] font-semibold">
                  Espelho de vendas
                </span>
                <span className="text-ink-400 text-[7px]">128 un.</span>
              </div>

              <div className="grid grid-cols-4 gap-1">
                {units.map((u) => (
                  <span
                    key={u.n}
                    className={cn(
                      'rounded border py-1 text-center font-mono text-[7px] font-semibold',
                      tone[u.s],
                    )}
                  >
                    {u.n}
                  </span>
                ))}
              </div>

              <div className="text-ink-400 mt-1.5 flex gap-2 text-[6px]">
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-sm bg-emerald-400/70" />
                  Vendida
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-sm bg-amber-400/70" />
                  Reservada
                </span>
                <span className="flex items-center gap-1">
                  <span className="bg-ink-300/50 dark:bg-ink-600 size-1.5 rounded-sm" />
                  Disponível
                </span>
              </div>
            </div>

            {/* Valuation chart */}
            <div className="rounded-lg border p-1.5" style={{ background: 'var(--surface)' }}>
              <div className="mb-1 flex items-baseline justify-between">
                <span className="text-ink-500 dark:text-ink-400 text-[8px] font-semibold">
                  Valorização
                </span>
                <span className="font-mono text-[8px] font-bold text-emerald-500">+12,4%</span>
              </div>

              <svg viewBox="0 0 100 38" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="aldea-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(20 178 177)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="rgb(20 178 177)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 31 L14 27 L28 29 L42 19 L56 21 L70 11 L84 13 L100 4 L100 38 L0 38 Z"
                  fill="url(#aldea-fill)"
                />
                <path
                  d="M0 31 L14 27 L28 29 L42 19 L56 21 L70 11 L84 13 L100 4"
                  fill="none"
                  stroke="rgb(20 178 177)"
                  strokeWidth="1.5"
                />
              </svg>

              <div className="text-ink-400 mt-0.5 flex justify-between text-[6px]">
                <span>jan</span>
                <span>abr</span>
                <span>ago</span>
              </div>
            </div>
          </div>

          {/* Proposals table */}
          <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
            <div className="flex items-center justify-between px-2.5 py-1.5">
              <span className="text-ink-500 dark:text-ink-400 text-[8px] font-semibold">
                Propostas recentes
              </span>
              <span className="text-brand-500 text-[7px] font-medium">Ver todas</span>
            </div>

            {proposals.map((p) => (
              <div key={p.who} className={CELL}>
                <Avatar
                  initials={p.who.split(' ').map((w) => w[0]).join('')}
                  tint="bg-ink-400/15 text-ink-600 dark:text-ink-300"
                  size="size-4"
                />
                <span className="text-ink-800 dark:text-ink-100 truncate text-[8px] font-medium">
                  {p.who}
                </span>
                <span className="text-ink-400 text-[7px]">{p.un}</span>
                <span className="text-ink-900 dark:text-ink-100 ml-auto font-mono text-[8px] font-semibold">
                  {p.val}
                </span>
                <Pill tone={p.tone}>{p.st}</Pill>
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
    {
      title: 'Novo lead',
      count: 12,
      tint: 'bg-sky-400',
      cards: [
        { co: 'Padaria Real', who: 'Ana Beatriz', val: 'R$ 2.400', tag: 'Meta Ads' },
        { co: 'Auto Peças MG', who: 'Rogério L.', val: 'R$ 8.900', tag: 'Site' },
      ],
    },
    {
      title: 'Qualificação',
      count: 8,
      tint: 'bg-violet-400',
      cards: [{ co: 'Clínica Vitale', who: 'Dra. Helena', val: 'R$ 14.200', tag: 'Indicação' }],
    },
    {
      title: 'Proposta',
      count: 5,
      tint: 'bg-amber-400',
      cards: [
        { co: 'Transportes Sul', who: 'Marcos V.', val: 'R$ 31.500', tag: 'WhatsApp' },
        { co: 'Studio Pilates', who: 'Júlia M.', val: 'R$ 4.800', tag: 'Site' },
      ],
    },
    {
      title: 'Fechado',
      count: 3,
      tint: 'bg-emerald-400',
      cards: [{ co: 'Ótica Visão', who: 'Pedro H.', val: 'R$ 9.700', tag: 'Meta Ads' }],
    },
  ]

  return (
    <BrowserFrame url="app.apexcrm.com.br/pipeline/comercial">
      <div className="flex h-[252px]">
        <Sidebar
          accent={accent}
          brand="Apex CRM"
          items={['Dashboard', 'Pipeline', 'Leads', 'Atendimento', 'Automações', 'Relatórios']}
        />

        <div className="flex-1 space-y-2 overflow-hidden p-2.5">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-ink-950 text-[11px] font-bold tracking-tight dark:text-white">
                Pipeline comercial
              </p>
              <p className="text-ink-400 text-[8px]">28 negócios · R$ 184.300 em aberto</p>
            </div>
            <span className="ml-auto rounded-md bg-violet-500 px-2 py-1 text-[8px] font-semibold text-white">
              + Novo lead
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {columns.map((col) => (
              <div
                key={col.title}
                className="space-y-1.5 rounded-lg p-1.5"
                style={{ background: 'var(--surface-sunken)' }}
              >
                <div className="flex items-center gap-1">
                  <span className={cn('size-1.5 rounded-full', col.tint)} />
                  <span className="text-ink-700 dark:text-ink-200 truncate text-[8px] font-semibold">
                    {col.title}
                  </span>
                  <span className="text-ink-400 ml-auto font-mono text-[7px]">{col.count}</span>
                </div>

                {col.cards.map((card) => (
                  <div
                    key={card.co}
                    className="space-y-1 rounded-md border p-1.5"
                    style={{ background: 'var(--surface)' }}
                  >
                    <p className="text-ink-900 dark:text-ink-100 truncate text-[8px] font-semibold">
                      {card.co}
                    </p>
                    <p className="text-ink-400 truncate text-[7px]">{card.who}</p>
                    <div className="flex items-center justify-between gap-1 pt-0.5">
                      <span className="font-mono text-[7px] font-bold text-emerald-600 dark:text-emerald-400">
                        {card.val}
                      </span>
                      <Avatar
                        initials={card.who[0]}
                        size="size-4"
                        tint="bg-violet-400/20 text-violet-700 dark:text-violet-300"
                      />
                    </div>
                    <span className="text-ink-400 border-hairline block w-fit rounded border px-1 text-[6px]">
                      {card.tag}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* AI agent strip */}
          <div
            className="flex items-center gap-2 rounded-lg border border-violet-400/30 bg-violet-400/8 px-2.5 py-1.5"
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-md bg-violet-500 text-[8px] font-bold text-white">
              IA
            </span>
            <div className="min-w-0">
              <p className="text-ink-900 dark:text-ink-100 truncate text-[8px] font-semibold">
                Agente respondeu 34 conversas hoje
              </p>
              <p className="text-ink-400 truncate text-[7px]">
                6 leads qualificados automaticamente · tempo médio 1m12s
              </p>
            </div>
            <Pill tone="violet">Ativo</Pill>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ------------------------------------------ AUTOMED — WhatsApp assistant --- */

function AutomedMockup() {
  const thread = [
    { from: 'them', text: 'Oi, bom dia! Quanto custa a limpeza dental?', time: '09:12' },
    {
      from: 'me',
      text: 'Bom dia! A profilaxia custa R$ 180. Você tem convênio?',
      time: '09:12',
    },
    { from: 'them', text: 'Tenho Unimed', time: '09:13' },
    {
      from: 'me',
      text: 'Pela Unimed a profilaxia é coberta. Posso ver horários com a Dra. Helena?',
      time: '09:13',
    },
  ] as const

  return (
    <div className="flex h-[252px] items-center justify-center py-1">
      <PhoneFrame>
        <div className="flex h-[244px] flex-col">
          {/* WhatsApp header */}
          <div className="flex items-center gap-1.5 bg-[#075E54] px-2 pt-5 pb-1.5">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/20 text-[8px] font-bold text-white">
              CV
            </span>
            <div className="min-w-0">
              <p className="truncate text-[9px] font-semibold text-white">Clínica Vitale</p>
              <p className="text-[7px] text-white/60">online</p>
            </div>
            <span className="ml-auto shrink-0 rounded bg-white/20 px-1 py-0.5 text-[6px] font-bold text-white">
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
                    'max-w-[85%] rounded-lg px-1.5 py-1',
                    msg.from === 'me'
                      ? 'bg-[#DCF8C6] dark:bg-emerald-900/50'
                      : 'bg-white dark:bg-ink-800',
                  )}
                >
                  <p className="text-ink-800 dark:text-ink-100 text-[7.5px] leading-snug">
                    {msg.text}
                  </p>
                  <p className="text-ink-400 mt-0.5 text-right text-[5.5px]">{msg.time}</p>
                </div>
              </div>
            ))}

            {/* Availability card pulled from the clinic's real calendar */}
            <div className="flex justify-end">
              <div className="w-[88%] rounded-lg border border-emerald-400/40 bg-white p-1.5 dark:bg-emerald-900/40">
                <p className="mb-1 text-[7px] font-semibold text-emerald-700 dark:text-emerald-300">
                  Horários disponíveis
                </p>
                <div className="flex gap-1">
                  <span className="flex-1 rounded bg-emerald-400/25 py-0.5 text-center text-[6px] font-semibold text-emerald-800 dark:text-emerald-200">
                    Qua 14:00
                  </span>
                  <span className="flex-1 rounded bg-emerald-400/25 py-0.5 text-center text-[6px] font-semibold text-emerald-800 dark:text-emerald-200">
                    Qui 09:30
                  </span>
                  <span className="text-ink-400 bg-ink-200/60 dark:bg-ink-800 flex-1 rounded py-0.5 text-center text-[6px] line-through">
                    Sex 16:00
                  </span>
                </div>
                <p className="text-ink-400 mt-1 text-[5.5px]">via Feegow · agenda em tempo real</p>
              </div>
            </div>
          </div>

          {/* Composer */}
          <div
            className="flex items-center gap-1.5 border-t px-2 py-1.5"
            style={{ background: 'var(--surface-raised)' }}
          >
            <div className="bg-ink-200/50 dark:bg-ink-800/70 flex h-4 flex-1 items-center rounded-full px-2">
              <span className="text-ink-400 text-[6px]">Mensagem</span>
            </div>
            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-500 text-[6px] text-white">
              ➤
            </span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}

/* ------------------------------------------- FLOWMAIL — campaign builder --- */

function FlowmailMockup({ accent }: { accent: string }) {
  const campaigns = [
    { name: 'Carrinho abandonado', meta: '1.284 enviados · 38% abertura', live: true },
    { name: 'Boas-vindas', meta: '640 enviados · 52% abertura', live: false },
    { name: 'Black Friday', meta: 'Agendada para 27/11', live: false },
  ]

  return (
    <BrowserFrame url="app.flowmail.io/campaigns/cart-recovery">
      <div className="flex h-[252px]">
        <Sidebar
          accent={accent}
          brand="Flowmail"
          items={['Overview', 'Campaigns', 'Templates', 'Segments', 'Billing']}
        />

        <div className="grid flex-1 grid-cols-[1fr_1.1fr] gap-2 overflow-hidden p-2.5">
          {/* Campaign list */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="text-ink-950 text-[10px] font-bold dark:text-white">Campaigns</p>
              <span className="text-ink-400 text-[7px]">Loja Verão BR</span>
            </div>

            {campaigns.map((c, i) => (
              <div
                key={c.name}
                className={cn(
                  'space-y-0.5 rounded-lg border p-1.5',
                  i === 0 && 'border-orange-400/40 bg-orange-400/8',
                )}
                style={i === 0 ? undefined : { background: 'var(--surface)' }}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      'size-1.5 shrink-0 rounded-full',
                      c.live ? 'bg-emerald-400' : 'bg-ink-300 dark:bg-ink-600',
                    )}
                  />
                  <span className="text-ink-900 dark:text-ink-100 truncate text-[8px] font-semibold">
                    {c.name}
                  </span>
                </div>
                <p className="text-ink-400 truncate text-[7px]">{c.meta}</p>
              </div>
            ))}

            <div className="rounded-lg bg-gradient-to-r from-orange-400/20 to-rose-400/20 p-1.5">
              <p className="text-ink-900 dark:text-ink-100 text-[8px] font-semibold">
                ✦ Draft with AI
              </p>
              <p className="text-ink-400 text-[7px]">From your catalogue</p>
            </div>

            <div className="flex gap-1">
              <StatTile label="Revenue" value="R$ 12,4k" tone="positive" />
            </div>
          </div>

          {/* Email preview */}
          <div
            className="space-y-1.5 rounded-lg border p-2"
            style={{ background: 'var(--surface)' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-ink-400 text-[7px]">Preview</span>
              <Pill tone="green">Guardrails OK</Pill>
            </div>

            <div className="from-brand-400/25 flex h-8 items-center justify-center rounded bg-gradient-to-br to-violet-400/25">
              <span className="text-ink-700 dark:text-ink-200 text-[8px] font-bold tracking-wide">
                LOJA VERÃO
              </span>
            </div>

            <p className="text-ink-900 dark:text-ink-100 text-[9px] leading-tight font-bold">
              Esqueceu algo no carrinho? 🛒
            </p>
            <p className="text-ink-500 dark:text-ink-400 text-[7px] leading-snug">
              Olá, Juliana! Seus itens ainda estão reservados por 24h. Finalize com 10% OFF.
            </p>

            <div className="grid grid-cols-3 gap-1 pt-0.5">
              {[
                { n: 'Biquíni Sol', p: 'R$ 129' },
                { n: 'Chapéu Palha', p: 'R$ 79' },
                { n: 'Saída Praia', p: 'R$ 189' },
              ].map((prod) => (
                <div key={prod.n} className="space-y-0.5">
                  <span className="bg-ink-200/60 dark:bg-ink-800 block h-7 rounded" />
                  <p className="text-ink-500 dark:text-ink-400 truncate text-[6px]">{prod.n}</p>
                  <p className="text-ink-900 dark:text-ink-100 text-[6px] font-bold">{prod.p}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-500 mt-1 rounded py-1 text-center text-[7px] font-bold text-white">
              Finalizar compra
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ----------------------------------------- CHATFY — affiliate dashboard --- */

function ChatfyMockup({ accent }: { accent: string }) {
  const bars = [
    { m: 'set', h: 38 }, { m: 'out', h: 55 }, { m: 'nov', h: 44 }, { m: 'dez', h: 72 },
    { m: 'jan', h: 61 }, { m: 'fev', h: 88 }, { m: 'mar', h: 74 },
  ]

  const payouts = [
    { ref: 'Fev/2026', val: 'R$ 2.184,00', st: 'Pago', tone: 'green' },
    { ref: 'Mar/2026', val: 'R$ 1.240,50', st: 'Na fila', tone: 'amber' },
  ] as const

  return (
    <BrowserFrame url="afiliados.chatfy.com.br/dashboard">
      <div className="flex h-[252px]">
        <Sidebar
          accent={accent}
          brand="Chatfy"
          items={['Painel', 'Indicações', 'Comissões', 'Materiais', 'Meus dados']}
        />

        <div className="flex-1 space-y-2 overflow-hidden p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-ink-950 text-[11px] font-bold tracking-tight dark:text-white">
                Olá, Rafael 👋
              </p>
              <p className="text-ink-400 text-[8px]">chatfy.com.br/r/rafael-m</p>
            </div>
            <Pill tone="violet">Nível Ouro · 25%</Pill>
          </div>

          <div className="flex gap-1.5">
            <StatTile label="Indicações" value="243" delta="+18 no mês" />
            <StatTile label="Comissão total" value="R$ 8.940" tone="positive" />
            <StatTile label="A receber" value="R$ 1.240" tone="accent" />
          </div>

          <div className="rounded-lg border p-1.5" style={{ background: 'var(--surface)' }}>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-ink-500 dark:text-ink-400 text-[8px] font-semibold">
                Comissões por mês
              </span>
              <span className="text-ink-400 text-[7px]">últimos 7 meses</span>
            </div>

            <div className="flex h-11 items-end gap-1">
              {bars.map((b, i) => (
                <div key={b.m} className="flex flex-1 flex-col items-center gap-0.5">
                  <span
                    className={cn(
                      'w-full rounded-t',
                      i === bars.length - 2 ? 'bg-pink-500' : 'bg-pink-400/40',
                    )}
                    style={{ height: `${b.h}%` }}
                  />
                  <span className="text-ink-400 text-[5.5px]">{b.m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border" style={{ background: 'var(--surface)' }}>
            <div className="px-2.5 py-1.5">
              <span className="text-ink-500 dark:text-ink-400 text-[8px] font-semibold">
                Repasses
              </span>
            </div>
            {payouts.map((p) => (
              <div key={p.ref} className={CELL}>
                <span className="text-ink-800 dark:text-ink-100 text-[8px] font-medium">
                  {p.ref}
                </span>
                <span className="text-ink-400 text-[7px]">via Stripe</span>
                <span className="text-ink-900 dark:text-ink-100 ml-auto font-mono text-[8px] font-semibold">
                  {p.val}
                </span>
                <Pill tone={p.tone}>{p.st}</Pill>
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
  const suites = [
    { st: 'pass', name: 'smoke/health.spec.ts', detail: '4 passed', ms: '412ms' },
    { st: 'pass', name: 'api/auth-session.spec.ts', detail: '9 passed', ms: '860ms' },
    { st: 'pass', name: 'contract/lead.contract.ts', detail: '22 passed', ms: '1.14s' },
    { st: 'fail', name: 'contract/scoring.contract.ts', detail: '1 failed, 7 passed', ms: '980ms' },
    { st: 'run', name: 'api/pipeline-rules.spec.ts', detail: 'running…', ms: '' },
  ] as const

  return (
    <BrowserFrame url="github.com/automyai/apex-crm-quality-gate/actions/runs/248">
      <div className="h-[252px] space-y-2 p-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-5 place-items-center rounded-full bg-red-500 text-[9px] font-bold text-white">
            ✕
          </span>
          <div className="min-w-0">
            <p className="text-ink-950 truncate text-[10px] font-bold dark:text-white">
              quality-gate · pull_request #412
            </p>
            <p className="text-ink-400 text-[7px]">
              feat/lead-scoring-v2 · 4m 08s · CarlosNobregaa
            </p>
          </div>
          <Pill tone="red">Merge bloqueado</Pill>
        </div>

        <div
          className="space-y-1 rounded-lg border p-2 font-mono"
          style={{ background: 'var(--surface-sunken)' }}
        >
          {suites.map((s) => (
            <div key={s.name} className="flex items-center gap-1.5">
              <span
                className={cn(
                  'grid size-3 shrink-0 place-items-center rounded-full text-[6px] font-bold text-white',
                  s.st === 'pass' && 'bg-emerald-500',
                  s.st === 'fail' && 'bg-red-500',
                  s.st === 'run' && 'bg-amber-400',
                )}
              >
                {s.st === 'pass' ? '✓' : s.st === 'fail' ? '✕' : '•'}
              </span>
              <span
                className={cn(
                  'truncate text-[7.5px]',
                  s.st === 'fail'
                    ? 'font-semibold text-red-500'
                    : 'text-ink-700 dark:text-ink-200',
                )}
              >
                {s.name}
              </span>
              <span className="text-ink-400 shrink-0 text-[7px]">{s.detail}</span>
              <span className="text-ink-400 ml-auto shrink-0 text-[7px]">{s.ms}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-red-400/30 bg-red-400/8 p-2 font-mono">
          <p className="mb-1 text-[7.5px] font-bold text-red-500">
            ZodError: lead.score
          </p>
          <p className="text-ink-600 dark:text-ink-300 text-[7px] leading-relaxed">
            expected <span className="text-emerald-600 dark:text-emerald-400">number</span>,
            received <span className="text-red-500">string</span>
            <br />
            at <span className="text-ink-400">contract/scoring.contract.ts:41</span>
          </p>
          <p className="text-ink-400 mt-1 text-[6.5px]">
            Regra BR-114 · o score deve ser numérico para ordenar o pipeline
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {['sem contexto da app', '3 camadas de teste', 'matriz de rastreabilidade'].map((chip) => (
            <span
              key={chip}
              className="text-ink-400 border-hairline rounded border px-1.5 py-0.5 text-[6.5px]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ---------------------------------------- TEMPLATE API — Swagger surface --- */

function TemplateApiMockup({ accent }: { accent: string }) {
  const routes = [
    { verb: 'POST', tint: 'bg-emerald-500', path: '/auth/login', desc: 'Autentica e emite tokens' },
    { verb: 'POST', tint: 'bg-emerald-500', path: '/auth/refresh', desc: 'Renova o access token' },
    { verb: 'GET', tint: 'bg-sky-500', path: '/users', desc: 'Lista paginada' },
    { verb: 'GET', tint: 'bg-sky-500', path: '/users/{id}', desc: 'Detalhe do usuário' },
    { verb: 'PATCH', tint: 'bg-amber-500', path: '/users/{id}', desc: 'Atualização parcial' },
    { verb: 'GET', tint: 'bg-sky-500', path: '/health', desc: 'Liveness e readiness' },
  ]

  return (
    <BrowserFrame url="api.automy.dev/docs">
      <div className="flex h-[252px]">
        <Sidebar
          accent={accent}
          brand="Template API"
          items={['Auth', 'Users', 'Health', 'Schemas']}
          activeIndex={0}
        />

        <div className="flex-1 space-y-1.5 overflow-hidden p-2.5">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-ink-950 text-[10px] font-bold dark:text-white">
                Automy Service Template
              </p>
              <p className="text-ink-400 text-[7px]">NestJS 11 · Fastify 5 · v0.0.1</p>
            </div>
            <span className="text-ink-400 border-hairline ml-auto rounded border px-1.5 py-0.5 font-mono text-[6.5px]">
              OpenAPI 3.1
            </span>
          </div>

          <div className="space-y-1">
            {routes.map((r) => (
              <div
                key={r.verb + r.path}
                className="flex items-center gap-2 rounded-md border px-2 py-1.5"
                style={{ background: 'var(--surface)' }}
              >
                <span
                  className={cn(
                    'w-10 shrink-0 rounded px-1 py-0.5 text-center font-mono text-[6.5px] font-bold text-white',
                    r.tint,
                  )}
                >
                  {r.verb}
                </span>
                <span className="text-ink-800 dark:text-ink-100 shrink-0 font-mono text-[7.5px] font-medium">
                  {r.path}
                </span>
                <span className="text-ink-400 truncate text-[7px]">{r.desc}</span>
                <span className="text-ink-300 dark:text-ink-600 ml-auto shrink-0 text-[8px]">
                  ⌄
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1 pt-0.5">
            {['JWT + refresh', 'Throttler', 'Sentry', 'TypeORM', 'Docker'].map((chip) => (
              <span
                key={chip}
                className="text-ink-400 border-hairline rounded border px-1.5 py-0.5 font-mono text-[6.5px]"
              >
                {chip}
              </span>
            ))}
          </div>

          <p className="text-ink-400 text-[6.5px]">
            4 serviços em produção iniciados a partir deste template
          </p>
        </div>
      </div>
    </BrowserFrame>
  )
}

/* ------------------------------------------- IAÇOUGUE — mobile landing --- */

function IacougueMockup() {
  return (
    <div className="flex h-[252px] items-center justify-center py-1">
      <PhoneFrame>
        <div
          className="h-[244px] overflow-hidden"
          style={{ background: 'var(--surface-raised)' }}
        >
          {/* Nav */}
          <div className="flex items-center gap-1.5 px-2.5 pt-5 pb-2">
            <span className="grid size-4 shrink-0 place-items-center rounded bg-gradient-to-br from-red-500 to-amber-500 text-[7px] font-black text-white">
              ia
            </span>
            <span className="text-ink-950 text-[9px] font-bold dark:text-white">iaçougue</span>
            <span className="ml-auto rounded bg-emerald-600 px-1.5 py-1 text-[6.5px] font-bold text-white">
              Testar grátis
            </span>
          </div>

          {/* Hero */}
          <div className="space-y-1.5 px-2.5">
            <span className="inline-block rounded-full bg-red-500/12 px-1.5 py-0.5 text-[5.5px] font-bold tracking-wide text-red-600 uppercase dark:text-red-400">
              WhatsApp · Inteligência Artificial
            </span>

            <p className="text-ink-950 text-[12px] leading-[1.15] font-bold tracking-tight dark:text-white">
              Sua atendente de IA para açougue
            </p>

            <p className="text-ink-500 dark:text-ink-400 text-[7px] leading-snug">
              Recebe pedidos, tira dúvidas de corte e peso, e fecha venda no WhatsApp — 24 horas,
              sem contratar ninguém.
            </p>

            <div className="flex gap-1 pt-0.5">
              <span className="rounded bg-gradient-to-r from-red-600 to-amber-500 px-2 py-1 text-[6.5px] font-bold text-white">
                Falar no WhatsApp
              </span>
              <span className="border-hairline text-ink-600 dark:text-ink-300 rounded border px-2 py-1 text-[6.5px] font-semibold">
                Ver planos
              </span>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-2 grid grid-cols-2 gap-1 px-2.5">
            {[
              { i: '🥩', t: 'Cardápio por peso', d: 'Picanha, alcatra, costela' },
              { i: '🛵', t: 'Pedido e entrega', d: 'Endereço e taxa automáticos' },
              { i: '⏰', t: 'Atende 24h', d: 'Inclusive domingo' },
              { i: '📊', t: 'Relatório diário', d: 'Vendas no WhatsApp' },
            ].map((f) => (
              <div
                key={f.t}
                className="space-y-0.5 rounded-md border p-1.5"
                style={{ background: 'var(--surface)' }}
              >
                <span className="text-[8px]">{f.i}</span>
                <p className="text-ink-900 dark:text-ink-100 truncate text-[6.5px] font-bold">
                  {f.t}
                </p>
                <p className="text-ink-400 truncate text-[6px]">{f.d}</p>
              </div>
            ))}
          </div>

          {/* Legal footer — the reason the site exists */}
          <div className="text-ink-400 mt-2 flex justify-center gap-2 border-t px-2.5 pt-1.5 text-[5.5px]">
            <span>Política de Privacidade</span>
            <span>·</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}
