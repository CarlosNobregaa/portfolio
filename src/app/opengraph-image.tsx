import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

// Required under `output: 'export'` — the image is generated at build time.
export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${profile.name} — Full Stack Engineer`

/**
 * Social preview card. Rendered once at build time (the route is static under
 * `output: 'export'`), so LinkedIn/Slack/X shares get a real image instead of
 * an empty `summary_large_image` frame.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#08090b',
          backgroundImage:
            'radial-gradient(900px 500px at 12% -10%, rgba(20,178,177,0.28), transparent), radial-gradient(760px 460px at 105% 60%, rgba(139,92,246,0.24), transparent)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #2fcfcb, #14b2b1 45%, #8b5cf6)',
              color: '#fff',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ color: '#8e99a6', fontSize: 26, letterSpacing: '-0.01em' }}>
            {profile.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              maxWidth: 950,
            }}
          >
            Full Stack Engineer
          </div>
          <div
            style={{
              color: '#b7bfc8',
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            Multi-tenant SaaS platforms, AI agent systems and production
            infrastructure.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['NestJS', 'React 19', 'PostgreSQL', 'Kubernetes', 'OpenAI', 'Claude'].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  padding: '10px 18px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#d9dde2',
                  fontSize: 22,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  )
}
