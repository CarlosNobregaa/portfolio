/**
 * English dictionary — the source of truth for the `Dictionary` type.
 * Every other locale must satisfy the exact same shape (enforced in ../types.ts).
 */
export const en = {
  meta: {
    title: 'Carlos Nóbrega — Full Stack Engineer',
    description:
      'Full Stack Engineer building multi-tenant SaaS platforms, AI agent systems and production infrastructure with NestJS, React and Kubernetes.',
  },

  nav: {
    about: 'About',
    projects: 'Work',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Close menu',
  },

  a11y: {
    switchLanguage: 'Change language',
    toggleTheme: 'Toggle theme',
    skipToContent: 'Skip to content',
    scrollDown: 'Scroll to next section',
    currentLanguage: 'Current language',
  },

  hero: {
    availability: 'Available for new projects',
    greeting: "Hi, I'm Carlos",
    headlinePrefix: 'I build',
    /** Cycles in the animated headline. */
    rotating: [
      'multi-tenant SaaS platforms',
      'AI agents that ship to production',
      'APIs that survive real load',
      'interfaces people actually enjoy',
    ],
    subheadline:
      'Full Stack Engineer focused on the whole path from database schema to pixel. I design multi-tenant architectures, orchestrate AI agents and take systems all the way to Kubernetes — not just to a demo.',
    primaryCta: 'See selected work',
    secondaryCta: 'Get in touch',
    resumeCta: 'Résumé',
    stats: {
      platforms: 'Production platforms',
      modules: 'Domain modules shipped',
      monorepos: 'Monorepos maintained',
      years: 'Years building SaaS',
    },
  },

  about: {
    eyebrow: 'About',
    title: 'Engineering that survives contact with production',
    lead: 'I am a Full Stack Engineer who prefers depth over breadth-by-checkbox. Most of my work is end-to-end product engineering: I own the Prisma schema, the NestJS domain modules, the React surface, the queue workers and the Helm chart that puts it all on a cluster.',
    paragraphs: [
      'My focus is multi-tenant SaaS. I have designed schema-per-tenant isolation on PostgreSQL, white-label theming, role-based access control and background job pipelines that keep the request path fast — the kind of decisions that are cheap on day one and very expensive to retrofit on day four hundred.',
      'I also build AI systems that are meant to run unattended: agent orchestration with the OpenAI Agents SDK and Claude, retrieval over domain knowledge bases, guardrails, and full observability with OpenTelemetry, Prometheus and Sentry so failures are visible instead of mysterious.',
      'What I care about most is the boring part that makes the interesting part possible: typed contracts between services, independent quality gates in CI, custom lint rules for team-specific conventions, and documentation a new engineer can actually follow.',
    ],
    principlesTitle: 'How I work',
    principles: [
      {
        title: 'Types as contracts',
        body: 'Shared packages and Zod schemas so a breaking change fails in CI, not in production.',
      },
      {
        title: 'Isolation by default',
        body: 'Tenant boundaries, scoped credentials and least-privilege access designed in from the first migration.',
      },
      {
        title: 'Observable or unfinished',
        body: 'Traces, metrics and error reporting ship with the feature — never as a follow-up ticket.',
      },
      {
        title: 'Verified independently',
        body: 'A separate quality gate validates business rules and API contracts without the implementation context.',
      },
    ],
    locationLabel: 'Based in',
    timezoneLabel: 'Timezone',
    focusLabel: 'Current focus',
    focusValue: 'Multi-tenant SaaS + AI agents',
  },

  projects: {
    eyebrow: 'Selected work',
    title: 'Platforms, not prototypes',
    subtitle:
      'Every project below is a real system with a database, a deployment pipeline and users. Expand a card to read the problem it solved and the engineering behind it.',
    filters: {
      all: 'All',
      flagship: 'Flagship',
      feature: 'Products',
      sidecar: 'Focused builds',
    },
    labels: {
      problem: 'Problem',
      solution: 'Solution',
      impact: 'Technical impact',
      stack: 'Technologies',
      viewRepo: 'View repository',
      privateRepo: 'Private repository',
      liveDemo: 'Live',
      expand: 'Read the case study',
      collapse: 'Collapse',
    },
    metrics: {
      modules: 'domain modules',
      portals: 'portals, one API',
      deploy: 'deployment',
      apps: 'apps in monorepo',
      isolation: 'data isolation',
      calendars: 'calendar integrations',
      observability: 'observability',
      services: 'services',
      billing: 'billing',
      surfaces: 'client surfaces',
      payouts: 'payouts',
      uploads: 'uploads',
      layers: 'test layers',
      gate: 'CI behaviour',
      context: 'by design',
      reuse: 'bootstrapped from it',
      baseline: 'baseline included',
      compliance: 'legal pages',
      lighthouse: 'delivery',
    },
    items: {
      aldea: {
        tagline: 'Dual-portal platform for real estate asset management',
        problem:
          'A real estate asset manager was running investor relations on spreadsheets and email threads: unit inventory, commercial proposals and portfolio reporting all lived in files nobody could reconcile. Investors had no way to see their own position, and pricing decisions depended on whoever happened to know the spreadsheet.',
        solution:
          'I designed a single NestJS + Fastify API serving two distinct React portals — an administrative back office and an investor-facing portal — sharing one Prisma schema and a typed workspace package. Nineteen domain modules cover developments, blocks, unit types, units, investors, proposals, audit trails and reporting. A dedicated pricing engine with configurable parameters produces valuations, and a Claude-powered module adds AI-assisted price suggestions per location. BullMQ workers handle spreadsheet imports, transactional email with templating and logs, and Playwright-rendered PDF proposals.',
        impact:
          'Access is split by role with JWT access + refresh tokens and Argon2 hashing, so investors can only ever resolve their own portfolio. Heavy work — imports, PDF generation, email — runs off the request path in Redis-backed queues, keeping the API responsive. The whole stack ships as containers to AWS EKS through ECR and a Helm release driven by GitHub Actions, with health probes and per-component deploys so the API and web can be rolled independently.',
      },
      'apex-crm': {
        tagline: 'Multi-tenant, white-label CRM with AI automation',
        problem:
          'Serving multiple client companies from one CRM codebase creates a hard problem: their data must never touch, their branding must look native, and their sales processes are all different. A shared-table design with a `tenant_id` column would have made every query one forgotten WHERE clause away from a data breach.',
        solution:
          'I built schema-per-tenant isolation on PostgreSQL: each tenant gets its own schema, with a public schema for tenant registry and platform users, plus migration tooling that fans out across every tenant schema. The system is a Turborepo monorepo with four applications — a NestJS API, a React 19 web client, a load-test suite and an MCP server that exposes the CRM to AI assistants. Thirty-three domain modules cover pipelines, leads and sources, a drag-and-drop form builder, lead scoring, task boards, goals, attendance, telephony via api4com, Meta Ads ingestion, webhooks and a visual automation builder on React Flow. An AI agent module built on LangChain and OpenAI works the conversation surface, with Socket.IO delivering real-time updates.',
        impact:
          'Cross-tenant leakage is structurally impossible rather than convention-dependent — the connection resolves to a schema before any query runs. TanStack Query, Table and Virtual keep large pipelines fluid in the browser, and Zustand holds only genuinely global state. I added two custom lint rules with baseline files to enforce team conventions the compiler cannot see, and a separate Quality Gate repository validates contracts independently in CI. Deployment is Helm-based with distinct dev and production values.',
      },
      automed: {
        tagline: 'WhatsApp AI agents for sales recovery and clinical intake',
        problem:
          'Healthcare clinics lose a large share of revenue to two silent leaks: prospects who ask a price and vanish, and patients whose intake questionnaires never get filled in. Both problems are conversational, both happen on WhatsApp, and both are impossible to staff around the clock.',
        solution:
          'I built an agent platform on the OpenAI Agents SDK with a router-planner-executor structure, connected to the WhatsApp Cloud API through Meta embedded signup so each clinic onboards its own number. A knowledge-base module grounds answers in each clinic\'s real procedures, professionals and insurance coverage instead of letting the model improvise. A health-assistant flow drives anamnesis from reusable templates with per-tenant consumption tracking. The genuinely hard part was scheduling: I wrote a calendar-provider abstraction with five concrete implementations — Google Calendar, Feegow, ProDoctor, EasyDental and ClinUp — so the agent can offer real availability regardless of the clinic\'s existing software.',
        impact:
          'Conversation handling is split between a web API and dedicated BullMQ worker processes, so a slow model call or a rate-limited vendor never blocks message ingestion. Token usage and cost are tracked per session, which makes unit economics a measurable number rather than a surprise invoice. Full observability ships with it: OpenTelemetry auto-instrumentation, an OTLP trace exporter, a Prometheus metrics endpoint and Sentry profiling — including in the worker process, which is exactly where undiagnosed failures usually hide.',
      },
      flowmail: {
        tagline: 'AI-assisted email marketing built as a Shopify app',
        problem:
          'Small e-commerce stores need lifecycle email but cannot staff a marketing team. The tooling that exists assumes someone will write the copy, build the segments and read the reports — which is precisely the labour those stores do not have.',
        solution:
          'I built a NestJS platform that installs as a Shopify app, pulls store data through a provider abstraction, and uses OpenAI Agents with Guardrails to draft campaigns from real catalogue and customer data. Twenty-one modules cover threads and messages, templates, forms, tags, plans, alerts and a dashboard. Billing runs through both Shopify Billing and Stripe so the same product can be sold inside the Shopify ecosystem or direct. Alongside it I shipped a separate affiliates API and portal, plus a standalone public form app with i18next for embedded lead capture.',
        impact:
          'Guardrails wrap every generated message, so the agent cannot emit content that violates campaign policy — a requirement, not a nicety, when you send on a merchant\'s behalf. Sending runs entirely through BullMQ with Redis, which is what makes throttling, retries and scheduled campaigns tractable. The five-service split keeps the affiliate program\'s failure domain separate from the core sending path.',
      },
      chatfy: {
        tagline: 'Affiliate and partner platform with automated payouts',
        problem:
          'Growing a SaaS through partners means tracking who referred whom, calculating commission correctly, and paying out on time — while giving affiliates enough self-service visibility that they do not email support for every question.',
        solution:
          'I built a NestJS + TypeORM API with three distinct client surfaces: a public landing and signup flow, an affiliate dashboard for tracking referrals and commissions, and an administrative console for approvals, tier management and payout runs. Stripe handles payouts, S3 presigned URLs handle document uploads without proxying files through the API, and Brazilian tax-ID validation runs at the DTO boundary.',
        impact:
          'Splitting affiliate and admin into separate front-end applications means an administrative bug cannot expose administrative surface area to partners. Sentry instrumentation and a scheduled job layer keep commission calculation auditable, and validation at the boundary keeps malformed registration data out of the database entirely.',
      },
      'quality-gate': {
        tagline: 'An independent CI verifier that does not trust the implementation',
        problem:
          'When the same context writes both the feature and its tests, the tests inherit the author\'s assumptions. AI-assisted development makes this sharper: an agent holding the full application context will happily write a test that passes for the wrong reason.',
        solution:
          'I built a deliberately separate repository that verifies Apex CRM from the outside, with no access to its implementation context. It holds three layers — smoke checks, API behaviour tests and Zod-based contract tests — alongside written documentation of business rules, contracts, critical flows and a traceability matrix. Environment fixtures let the same suite run against local, dev and production targets.',
        impact:
          'It runs as a blocking gate in GitHub Actions, so a contract change cannot merge silently. Because it only knows the public API surface, it catches the class of bug where the implementation and its own tests are consistently wrong together. The business-rules documentation doubles as the specification that both humans and agents work from.',
      },
      'template-api': {
        tagline: 'The service baseline every new API starts from',
        problem:
          'Every new NestJS service was repeating the same two days of setup: auth, Swagger, rate limiting, error reporting, database wiring, migration scripts, Docker. Repeated by hand, those two days also mean the fifth service quietly diverges from the first.',
        solution:
          'I extracted a production-ready NestJS 11 + Fastify 5 template with TypeORM data-source and migration generation, JWT auth, Swagger, throttling, Sentry with profiling, structured logging, mailer support and a Docker setup — all configured, not just installed.',
        impact:
          'Four production services were bootstrapped from it, which means they share the same observability, the same auth semantics and the same migration workflow. Upgrading a cross-cutting concern becomes one reviewed change to propagate rather than four independent archaeology exercises.',
      },
      iacougue: {
        tagline: 'Landing page and compliance surface for a WhatsApp AI product',
        problem:
          'Meta will not approve a WhatsApp Business application without publicly accessible, accurate privacy and terms pages — and getting them wrong blocks the entire product launch, not just the marketing site.',
        solution:
          'I built a Next.js 14 App Router site where the marketing page, privacy policy and terms of use all read from a single typed configuration module, so company data, DPO contact and the support number are defined once. The site is containerised with a Docker build and Kubernetes manifests, deployed by GitHub Actions.',
        impact:
          'Centralising legal data in one typed file removes the failure mode where a policy page and the terms page disagree about the company\'s own details. Static delivery means the compliance URLs Meta reviews stay fast and available independently of any application backend.',
      },
    },
  },

  stack: {
    eyebrow: 'Tech stack',
    title: 'Tools I reach for, and why',
    subtitle:
      'Hover or tap a category to explore it. Proficiency reflects what I have actually shipped and operated in production, not what I have read about.',
    levelLabel: 'Proficiency',
    categories: {
      backend: {
        title: 'Backend',
        blurb: 'Modular APIs with typed boundaries and queue-backed background work.',
      },
      frontend: {
        title: 'Frontend',
        blurb: 'Fast, accessible interfaces with real state management discipline.',
      },
      data: {
        title: 'Data',
        blurb: 'Relational modelling, migrations and tenant isolation done properly.',
      },
      ai: {
        title: 'AI Engineering',
        blurb: 'Agents, retrieval and guardrails built to run without supervision.',
      },
      infra: {
        title: 'Infrastructure',
        blurb: 'Containers, clusters and pipelines that make deploys unremarkable.',
      },
      quality: {
        title: 'Quality & Observability',
        blurb: 'Contracts, independent gates and traces that explain themselves.',
      },
    },
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Professional timeline',
    subtitle: 'Roles and engagements, most recent first.',
    currentBadge: 'Current',
    items: {
      'automy-lead': {
        role: 'Full Stack Engineer & Technical Lead',
        summary:
          'Technical ownership of Automy\'s product portfolio: architecture decisions, the shared service baseline, and delivery from schema to cluster across six production platforms.',
        highlights: [
          'Defined the architecture standard used across every service — NestJS + Fastify, typed shared packages, BullMQ for anything slow.',
          'Took products end to end: Prisma/TypeORM schemas, domain modules, React front ends, Helm charts and GitHub Actions pipelines.',
          'Introduced independent quality gating and custom lint rules so conventions are enforced by CI instead of code review memory.',
          'Built the AI layer across products: OpenAI Agents SDK, Claude, LangChain, retrieval and guardrails, with cost tracked per session.',
        ],
      },
      'platform-multitenant': {
        role: 'Platform Architecture — Multi-tenant SaaS',
        summary:
          'Designed and shipped two multi-tenant platforms: a white-label CRM and a dual-portal real estate investor system.',
        highlights: [
          'Implemented schema-per-tenant isolation on PostgreSQL with migration tooling that fans out across all tenant schemas.',
          'Built a Turborepo monorepo housing four applications behind shared TypeScript, ESLint and config packages.',
          'Deployed to AWS EKS via ECR and Helm with per-component releases, health probes and separate dev/production values.',
        ],
      },
      'ai-agents': {
        role: 'AI Systems Engineering',
        summary:
          'Built conversational agent platforms for healthcare intake and e-commerce lifecycle marketing, running unattended on WhatsApp and email.',
        highlights: [
          'Designed a router-planner-executor agent architecture with retrieval grounded in per-tenant domain knowledge bases.',
          'Abstracted five third-party calendar systems behind one provider interface so agents could offer real availability.',
          'Instrumented everything with OpenTelemetry, Prometheus and Sentry — including worker processes, where failures hide.',
        ],
      },
      'saas-foundations': {
        role: 'Full Stack Product Engineering',
        summary:
          'Delivered affiliate/partner platforms, billing integrations and public-facing product surfaces from zero to production.',
        highlights: [
          'Shipped a three-surface affiliate platform with Stripe payouts and S3 presigned document uploads.',
          'Integrated Shopify Billing and Stripe so the same product could be sold in-ecosystem or direct.',
          'Built Next.js marketing and compliance sites that passed Meta review for WhatsApp Business approval.',
        ],
      },
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's build something that lasts",
    subtitle:
      'Open to full stack roles, platform architecture work and AI engineering engagements. Tell me what you are building and I will tell you honestly whether I am the right fit.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'A few lines about your project, team or role…',
      submit: 'Send message',
      sending: 'Opening your email client…',
      note: 'Submitting opens your email client with the message pre-filled — no third-party form service, no data stored.',
      errors: {
        nameRequired: 'Please tell me your name.',
        emailRequired: 'An email address is required.',
        emailInvalid: 'That does not look like a valid email address.',
        messageRequired: 'Please write a short message.',
        messageShort: 'A little more detail would help — at least 20 characters.',
      },
    },
    direct: {
      title: 'Or reach me directly',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      orgLabel: 'Automy',
      copy: 'Copy',
      copied: 'Copied',
    },
    availability: {
      title: 'Availability',
      body: 'Currently taking on new projects. Typical reply time is under 24 hours on weekdays.',
    },
  },

  footer: {
    tagline: 'Full Stack Engineer — multi-tenant SaaS, AI agents, production infrastructure.',
    builtWith: 'Built with Next.js, Tailwind CSS and Framer Motion.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    sections: 'Sections',
    elsewhere: 'Elsewhere',
  },
} as const
