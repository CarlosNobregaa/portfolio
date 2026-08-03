import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Backdrop } from '@/components/ui/Backdrop'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { en } from '@/i18n/dictionaries/en'
import { defaultLocale, localeMeta } from '@/i18n/config'
import { profile, siteUrl } from '@/data/profile'

// Static metadata is English — the mandated default locale — and is what
// crawlers and link previews see.
export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  metadataBase: new URL(siteUrl),
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  keywords: [
    'Full Stack Engineer',
    'NestJS',
    'React',
    'TypeScript',
    'multi-tenant SaaS',
    'AI agents',
    'Kubernetes',
    'PostgreSQL',
    profile.name,
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'es_ES'],
    url: siteUrl,
    siteName: profile.name,
    title: en.meta.title,
    description: en.meta.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: en.meta.title,
    description: en.meta.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#08090b' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={localeMeta[defaultLocale].htmlLang}
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans">
        <Providers>
          <Backdrop />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
