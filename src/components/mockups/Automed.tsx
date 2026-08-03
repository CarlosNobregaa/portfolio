'use client'

import { useEffect, useRef, useState } from 'react'
import { PhoneFrame } from './chrome'
import { cn } from '@/lib/utils'

type Message =
  | { kind: 'text'; from: 'them' | 'me'; text: string; time: string }
  | { kind: 'slots'; time: string }
  | { kind: 'booked'; slot: string; time: string }

/**
 * A scripted conversation. Each visitor reply advances a step and the assistant
 * answers after a short "typing" pause, so the flow reads the way the real
 * WhatsApp agent behaves: question → grounded answer → availability → booking.
 */
const SCRIPT: { reply: string; answer: Message[] }[] = [
  {
    reply: 'Quanto custa a limpeza?',
    answer: [
      {
        kind: 'text',
        from: 'them',
        text: 'A limpeza (profilaxia) custa R$ 180. Você tem convênio? 😊',
        time: '09:12',
      },
    ],
  },
  {
    reply: 'Tenho Unimed',
    answer: [
      {
        kind: 'text',
        from: 'them',
        text: 'Pela Unimed a profilaxia é coberta — sem custo pra você. Quer que eu veja horários com a Dra. Helena?',
        time: '09:13',
      },
    ],
  },
  {
    reply: 'Pode ver, sim',
    answer: [
      {
        kind: 'text',
        from: 'them',
        text: 'Consultei a agenda. Estes são os horários livres esta semana:',
        time: '09:13',
      },
      { kind: 'slots', time: '09:13' },
    ],
  },
]

const SLOTS = [
  { label: 'Qua 14:00', free: true },
  { label: 'Qui 09:30', free: true },
  { label: 'Sex 16:00', free: false },
]

const INITIAL: Message[] = [
  { kind: 'text', from: 'me', text: 'Oi, bom dia!', time: '09:11' },
  {
    kind: 'text',
    from: 'them',
    text: 'Bom dia! Aqui é a assistente da Clínica Vitale. Como posso ajudar?',
    time: '09:11',
  },
]

export function AutomedMockup({ interactive }: { interactive: boolean }) {
  const [messages, setMessages] = useState<Message[]>(INITIAL)
  const [step, setStep] = useState(0)
  const [typing, setTyping] = useState(false)
  const [booked, setBooked] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(window.clearTimeout)
  }, [])

  // Keep the newest message in view as the script advances.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing])

  function send(reply: string) {
    const current = SCRIPT[step]
    if (!current) return

    setMessages((m) => [...m, { kind: 'text', from: 'me', text: reply, time: '09:13' }])
    setTyping(true)

    const id = window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, ...current.answer])
      setStep((s) => s + 1)
    }, 900)
    timers.current.push(id)
  }

  function book(slot: string) {
    setBooked(slot)
    setMessages((m) => [...m, { kind: 'booked', slot, time: '09:14' }])
  }

  function reset() {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
    setMessages(INITIAL)
    setStep(0)
    setTyping(false)
    setBooked(null)
  }

  const nextReply = SCRIPT[step]?.reply
  const showSlots = messages.some((m) => m.kind === 'slots') && !booked

  return (
    <div className="flex flex-col items-center gap-3">
      <PhoneFrame>
        <div className="flex h-[420px] flex-col">
          {/* WhatsApp header */}
          <div className="flex items-center gap-2 bg-[#075E54] px-3 pt-7 pb-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/20 text-[11px] font-bold text-white">
              CV
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-white">Clínica Vitale</p>
              <p className="text-[10px] text-white/60">{typing ? 'digitando…' : 'online'}</p>
            </div>
            <span className="ml-auto shrink-0 rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white">
              IA
            </span>
          </div>

          {/* Conversation */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-2 overflow-y-auto p-2.5"
            style={{ background: 'var(--surface-sunken)' }}
          >
            {messages.map((msg, i) => {
              if (msg.kind === 'slots') {
                return (
                  <div key={i} className="flex justify-start">
                    <div className="dark:bg-ink-800 w-[92%] rounded-lg border border-emerald-400/40 bg-white p-2">
                      <p className="mb-1.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                        Horários disponíveis
                      </p>
                      <div className="flex gap-1.5">
                        {SLOTS.map((s) => (
                          <button
                            key={s.label}
                            type="button"
                            disabled={!s.free || !interactive || Boolean(booked)}
                            onClick={() => book(s.label)}
                            className={cn(
                              'flex-1 rounded py-1 text-center text-[9.5px] font-semibold transition-colors',
                              s.free
                                ? 'bg-emerald-400/25 text-emerald-800 hover:bg-emerald-400/45 dark:text-emerald-200'
                                : 'text-ink-400 bg-ink-200/60 dark:bg-ink-800 line-through',
                            )}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                      <p className="text-ink-400 mt-1.5 text-[9px]">
                        via Feegow · agenda em tempo real
                      </p>
                    </div>
                  </div>
                )
              }

              if (msg.kind === 'booked') {
                return (
                  <div key={i} className="flex justify-start">
                    <div className="w-[92%] rounded-lg border border-emerald-500/50 bg-emerald-50 p-2 dark:bg-emerald-950/50">
                      <p className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                        ✓ Consulta agendada
                      </p>
                      <p className="text-ink-600 dark:text-ink-300 mt-1 text-[10px] leading-snug">
                        {msg.slot} com a Dra. Helena. Enviei a confirmação e o lembrete
                        automático pra você.
                      </p>
                      <p className="text-ink-400 mt-1 text-[9px]">
                        Anamnese enviada · responder antes da consulta
                      </p>
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={i}
                  className={cn('flex', msg.from === 'me' ? 'justify-end' : 'justify-start')}
                >
                  <div
                    className={cn(
                      'max-w-[85%] rounded-lg px-2 py-1.5',
                      msg.from === 'me'
                        ? 'bg-[#DCF8C6] dark:bg-emerald-900/50'
                        : 'dark:bg-ink-800 bg-white',
                    )}
                  >
                    <p className="text-ink-800 dark:text-ink-100 text-[10.5px] leading-snug">
                      {msg.text}
                    </p>
                    <p className="text-ink-400 mt-0.5 text-right text-[8px]">{msg.time}</p>
                  </div>
                </div>
              )
            })}

            {typing ? (
              <div className="flex justify-start">
                <div className="dark:bg-ink-800 flex gap-1 rounded-lg bg-white px-2.5 py-2">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="bg-ink-400/60 size-1.5 animate-bounce rounded-full"
                      style={{ animationDelay: `${d * 120}ms` }}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Quick replies drive the script */}
          {interactive && (nextReply || showSlots) ? (
            <div
              className="flex flex-wrap gap-1.5 border-t px-2.5 py-2"
              style={{ background: 'var(--surface-raised)' }}
            >
              {nextReply ? (
                <button
                  type="button"
                  onClick={() => send(nextReply)}
                  disabled={typing}
                  className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-700 transition-colors hover:bg-emerald-500/20 disabled:opacity-40 dark:text-emerald-300"
                >
                  {nextReply}
                </button>
              ) : (
                <span className="text-ink-400 px-1 py-1 text-[10px]">
                  Escolha um horário acima ↑
                </span>
              )}
            </div>
          ) : (
            <div
              className="flex items-center gap-2 border-t px-2.5 py-2"
              style={{ background: 'var(--surface-raised)' }}
            >
              <div className="bg-ink-200/50 dark:bg-ink-800/70 flex h-6 flex-1 items-center rounded-full px-2.5">
                <span className="text-ink-400 text-[9px]">Mensagem</span>
              </div>
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-[9px] text-white">
                ➤
              </span>
            </div>
          )}
        </div>
      </PhoneFrame>

      {interactive && booked ? (
        <button
          type="button"
          onClick={reset}
          className="text-ink-400 hover:text-brand-500 text-[11px] font-medium transition-colors"
        >
          ↺ Reiniciar conversa
        </button>
      ) : null}
    </div>
  )
}
