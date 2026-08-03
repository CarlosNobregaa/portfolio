/**
 * English dictionary — the source of truth for the `Dictionary` type.
 * Every other locale must satisfy the exact same shape (enforced in ../types.ts).
 */
export const en = {
  meta: {
    title: 'Carlos Nóbrega — Full Stack Developer',
    description:
      'Full Stack Developer working on multi-tenant SaaS platforms and AI agent features with NestJS, React and PostgreSQL. Telecommunications Engineering student at UFC.',
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
    availability: 'Open to junior full stack roles',
    greeting: "Hi, I'm Carlos",
    headlinePrefix: 'I work on',
    /** Cycles in the animated headline. */
    rotating: [
      'multi-tenant SaaS platforms',
      'AI agents running in production',
      'APIs that handle real traffic',
      'interfaces people actually use',
    ],
    subheadline:
      'Junior Full Stack Developer at Automy and Telecommunications Engineering student at UFC. I work across the stack — NestJS modules, Prisma schemas, React screens, queue workers — on products that real companies depend on every day.',
    primaryCta: 'See what I have built',
    secondaryCta: 'Get in touch',
    resumeCta: 'Résumé',
    stats: {
      platforms: 'Platforms contributed to',
      modules: 'Domain modules in them',
      monorepos: 'Monorepos worked in',
      years: 'Years writing code',
    },
  },

  about: {
    eyebrow: 'About',
    title: 'Three years in, learning on systems that are actually in use',
    lead: 'I am a junior full stack developer. What I have going for me is not seniority — it is that I got to learn on real production systems instead of tutorials: multi-tenant CRMs, AI agents answering customers on WhatsApp, portals that companies open every morning.',
    paragraphs: [
      'Day to day that means working across the stack. A feature usually starts as a Prisma or TypeORM model, becomes a NestJS module, gets a React screen, and ends up with a BullMQ worker doing whatever part is too slow for the request path. I have shipped in all four of those layers.',
      'The most useful thing I have picked up is why the architecture around me looks the way it does. Working inside a schema-per-tenant PostgreSQL setup taught me more about data isolation than any article would have — you understand the point of it the first time you trace a query and see the schema resolve before anything runs.',
      'I have also spent a lot of time on the AI side: wiring the OpenAI Agents SDK and Claude into existing services, grounding answers in per-tenant knowledge bases so the model stops improvising, and adding OpenTelemetry and Sentry instrumentation so that when something breaks at 2am there is a trace to read.',
      'I am still early, and I would rather say that plainly than oversell it. I ask a lot of questions, I read the code around mine before changing it, and I try to leave things clearer than I found them.',
    ],
    principlesTitle: 'How I work',
    principles: [
      {
        title: 'Read before writing',
        body: 'I follow the conventions already in the codebase instead of inventing my own in the corner I happen to be in.',
      },
      {
        title: 'Let the types catch it',
        body: 'Shared packages and Zod schemas, so a mistake I make fails in CI rather than in front of a user.',
      },
      {
        title: 'Ship it observable',
        body: 'A feature is not done until I can see it working — logs, traces and error reporting go in with the code.',
      },
      {
        title: 'Ask early',
        body: 'A question that takes five minutes beats a day spent confidently building the wrong thing.',
      },
    ],
    locationLabel: 'Based in',
    timezoneLabel: 'Timezone',
    focusLabel: 'Currently',
    focusValue: 'Full stack dev @ Automy · Eng. student @ UFC',
  },

  education: {
    eyebrow: 'Education',
    title: 'Studying alongside the work',
    ongoingBadge: 'In progress',
    items: {
      'ufc-telecom': {
        degree: "Bachelor's in Telecommunications Engineering",
        institution: 'Universidade Federal do Ceará',
        note: 'Signal processing, networks and mathematics — a background that has been unexpectedly useful for reasoning about queues, throughput and failure under load.',
      },
    },
  },

  projects: {
    eyebrow: 'Work',
    title: 'Real systems, not prototypes',
    subtitle:
      'Every project below is in production, with a database, a deployment pipeline and users. Open one to see what it looks like and what I worked on.',
    filters: {
      all: 'All',
      flagship: 'Main',
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
      viewProject: 'View project',
      backToProjects: 'Back to all work',
      preview: 'Interface preview',
      previewNote:
        'A reconstruction of the product interface, rebuilt here in markup — no screenshots. The real systems are private client software, so every company, person and figure shown is invented; the layout, terminology and screen structure are what mirror the actual product.',
      overview: 'Overview',
      myRole: 'What I worked on',
      highlights: 'Highlights',
      nextProject: 'Next project',
      allProjects: 'All projects',
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
        contribution:
          'I built domain modules on the API side and screens on both portals — units and unit types, proposal flows, spreadsheet import. Most of my time went into the BullMQ workers behind the slow paths: the Excel import, the Playwright-rendered PDF proposals and the templated transactional email.',
        problem:
          'A real estate asset manager was running investor relations on spreadsheets and email threads: unit inventory, commercial proposals and portfolio reporting all lived in files nobody could reconcile. Investors had no way to see their own position, and pricing decisions depended on whoever happened to know the spreadsheet.',
        solution:
          'The platform is a single NestJS + Fastify API serving two distinct React portals — an administrative back office and an investor-facing portal — sharing one Prisma schema and a typed workspace package. Nineteen domain modules cover developments, blocks, unit types, units, investors, proposals, audit trails and reporting. A dedicated pricing engine with configurable parameters produces valuations, and a Claude-powered module adds AI-assisted price suggestions per location. BullMQ workers handle spreadsheet imports, transactional email with templating and logs, and Playwright-rendered PDF proposals.',
        impact:
          'Access is split by role with JWT access + refresh tokens and Argon2 hashing, so investors can only ever resolve their own portfolio. Heavy work — imports, PDF generation, email — runs off the request path in Redis-backed queues, keeping the API responsive. The whole stack ships as containers to AWS EKS through ECR and a Helm release driven by GitHub Actions, with health probes and per-component deploys so the API and web can be rolled independently.',
      },
      'apex-crm': {
        tagline: 'Multi-tenant, white-label CRM with AI automation',
        contribution:
          'I worked on domain modules and the React client: pipeline and lead screens, the form builder, task boards. Getting comfortable inside the schema-per-tenant setup was the steepest part — every query resolves through a tenant schema first, and that changes how you write everything.',
        problem:
          'Serving multiple client companies from one CRM codebase creates a hard problem: their data must never touch, their branding must look native, and their sales processes are all different. A shared-table design with a `tenant_id` column would have made every query one forgotten WHERE clause away from a data breach.',
        solution:
          'The system uses schema-per-tenant isolation on PostgreSQL: each tenant gets its own schema, with a public schema for tenant registry and platform users, plus migration tooling that fans out across every tenant schema. The system is a Turborepo monorepo with four applications — a NestJS API, a React 19 web client, a load-test suite and an MCP server that exposes the CRM to AI assistants. Thirty-three domain modules cover pipelines, leads and sources, a drag-and-drop form builder, lead scoring, task boards, goals, attendance, telephony via api4com, Meta Ads ingestion, webhooks and a visual automation builder on React Flow. An AI agent module built on LangChain and OpenAI works the conversation surface, with Socket.IO delivering real-time updates.',
        impact:
          'Cross-tenant leakage is structurally impossible rather than convention-dependent — the connection resolves to a schema before any query runs. TanStack Query, Table and Virtual keep large pipelines fluid in the browser, and Zustand holds only genuinely global state. Two custom lint rules with baseline files enforce team conventions the compiler cannot see, and a separate Quality Gate repository validates contracts independently in CI. Deployment is Helm-based with distinct dev and production values.',
      },
      automed: {
        tagline: 'WhatsApp AI agents for sales recovery and clinical intake',
        contribution:
          'I implemented several of the calendar provider integrations behind the shared interface, and worked on the knowledge-base grounding so the agent answers from the clinic\'s real procedures. I also added the OpenTelemetry and Sentry instrumentation to the worker process.',
        problem:
          'Healthcare clinics lose a large share of revenue to two silent leaks: prospects who ask a price and vanish, and patients whose intake questionnaires never get filled in. Both problems are conversational, both happen on WhatsApp, and both are impossible to staff around the clock.',
        solution:
          'The platform runs on the OpenAI Agents SDK with a router-planner-executor structure, connected to the WhatsApp Cloud API through Meta embedded signup so each clinic onboards its own number. A knowledge-base module grounds answers in each clinic\'s real procedures, professionals and insurance coverage instead of letting the model improvise. A health-assistant flow drives anamnesis from reusable templates with per-tenant consumption tracking. The genuinely hard part was scheduling, solved with a calendar-provider abstraction and five concrete implementations — Google Calendar, Feegow, ProDoctor, EasyDental and ClinUp — so the agent can offer real availability regardless of the clinic\'s existing software.',
        impact:
          'Conversation handling is split between a web API and dedicated BullMQ worker processes, so a slow model call or a rate-limited vendor never blocks message ingestion. Token usage and cost are tracked per session, which makes unit economics a measurable number rather than a surprise invoice. Full observability ships with it: OpenTelemetry auto-instrumentation, an OTLP trace exporter, a Prometheus metrics endpoint and Sentry profiling — including in the worker process, which is exactly where undiagnosed failures usually hide.',
      },
      flowmail: {
        tagline: 'AI-assisted email marketing built as a Shopify app',
        contribution:
          'I worked on the campaign and template screens, the tag and form modules, and the Shopify Billing integration. The guardrails layer around generated content was the part I learned the most from — sending on a merchant\'s behalf leaves no room for a model going off-script.',
        problem:
          'Small e-commerce stores need lifecycle email but cannot staff a marketing team. The tooling that exists assumes someone will write the copy, build the segments and read the reports — which is precisely the labour those stores do not have.',
        solution:
          'It is a NestJS platform that installs as a Shopify app, pulls store data through a provider abstraction, and uses OpenAI Agents with Guardrails to draft campaigns from real catalogue and customer data. Twenty-one modules cover threads and messages, templates, forms, tags, plans, alerts and a dashboard. Billing runs through both Shopify Billing and Stripe so the same product can be sold inside the Shopify ecosystem or direct. Alongside it sit a separate affiliates API and portal, plus a standalone public form app with i18next for embedded lead capture.',
        impact:
          'Guardrails wrap every generated message, so the agent cannot emit content that violates campaign policy — a requirement, not a nicety, when you send on a merchant\'s behalf. Sending runs entirely through BullMQ with Redis, which is what makes throttling, retries and scheduled campaigns tractable. The five-service split keeps the affiliate program\'s failure domain separate from the core sending path.',
      },
      chatfy: {
        tagline: 'Affiliate and partner platform with automated payouts',
        contribution:
          'I built screens across the affiliate and admin front ends and the API endpoints behind them: referral tracking, commission views, payout runs through Stripe, and S3 presigned uploads so document files never pass through the API.',
        problem:
          'Growing a SaaS through partners means tracking who referred whom, calculating commission correctly, and paying out on time — while giving affiliates enough self-service visibility that they do not email support for every question.',
        solution:
          'A NestJS + TypeORM API backs three distinct client surfaces: a public landing and signup flow, an affiliate dashboard for tracking referrals and commissions, and an administrative console for approvals, tier management and payout runs. Stripe handles payouts, S3 presigned URLs handle document uploads without proxying files through the API, and Brazilian tax-ID validation runs at the DTO boundary.',
        impact:
          'Splitting affiliate and admin into separate front-end applications means an administrative bug cannot expose administrative surface area to partners. Sentry instrumentation and a scheduled job layer keep commission calculation auditable, and validation at the boundary keeps malformed registration data out of the database entirely.',
      },
      'quality-gate': {
        tagline: 'An independent CI verifier that does not trust the implementation',
        contribution:
          'I wrote contract and API tests and helped document the business rules they check. The idea of a verifier that deliberately does not know the implementation was new to me, and it changed how I think about what a test is actually proving.',
        problem:
          'When the same context writes both the feature and its tests, the tests inherit the author\'s assumptions. AI-assisted development makes this sharper: an agent holding the full application context will happily write a test that passes for the wrong reason.',
        solution:
          'It is a deliberately separate repository that verifies Apex CRM from the outside, with no access to its implementation context. It holds three layers — smoke checks, API behaviour tests and Zod-based contract tests — alongside written documentation of business rules, contracts, critical flows and a traceability matrix. Environment fixtures let the same suite run against local, dev and production targets.',
        impact:
          'It runs as a blocking gate in GitHub Actions, so a contract change cannot merge silently. Because it only knows the public API surface, it catches the class of bug where the implementation and its own tests are consistently wrong together. The business-rules documentation doubles as the specification that both humans and agents work from.',
      },
      'template-api': {
        tagline: 'The service baseline every new API starts from',
        contribution:
          'I worked on the shared baseline and used it to bootstrap new services — which is also how I learned what a production service needs before its first feature: auth, rate limiting, structured logs, error reporting and a migration workflow.',
        problem:
          'Every new NestJS service was repeating the same two days of setup: auth, Swagger, rate limiting, error reporting, database wiring, migration scripts, Docker. Repeated by hand, those two days also mean the fifth service quietly diverges from the first.',
        solution:
          'The answer was a production-ready NestJS 11 + Fastify 5 template with TypeORM data-source and migration generation, JWT auth, Swagger, throttling, Sentry with profiling, structured logging, mailer support and a Docker setup — all configured, not just installed.',
        impact:
          'Four production services were bootstrapped from it, which means they share the same observability, the same auth semantics and the same migration workflow. Upgrading a cross-cutting concern becomes one reviewed change to propagate rather than four independent archaeology exercises.',
      },
      iacougue: {
        tagline: 'Landing page and compliance surface for a WhatsApp AI product',
        contribution:
          'I built this one end to end: the landing page, the privacy policy and terms pages, and the single typed config module all three read from. It shipped to Docker and Kubernetes through GitHub Actions.',
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
    title: 'What I work with',
    subtitle:
      'Hover or tap a category to explore it. The levels are an honest self-assessment: high means I have shipped and debugged it in production, lower means I can work in it but still look things up.',
    levelLabel: 'Comfort level',
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
    title: 'What I have worked on',
    subtitle: 'Most recent first.',
    currentBadge: 'Current',
    items: {
      'automy-dev': {
        role: 'Full Stack Developer',
        summary:
          'Feature work across Automy\'s products — API modules, database models, React screens and queue workers — in codebases that were already live when I joined.',
        highlights: [
          'Built features end to end within existing conventions: Prisma and TypeORM models, NestJS modules, React screens, and the migrations behind them.',
          'Moved slow work off the request path with BullMQ workers — spreadsheet imports, PDF generation and transactional email.',
          'Worked on the AI features: wiring the OpenAI Agents SDK and Claude into existing services and grounding responses in per-tenant knowledge bases.',
          'Learned the deployment path well enough to debug my own: Docker images, Helm values and GitHub Actions runs.',
        ],
      },
      'platform-work': {
        role: 'Full Stack Development — Multi-tenant Platforms',
        summary:
          'Contributed to two multi-tenant products: a white-label CRM and a dual-portal system for real estate investors.',
        highlights: [
          'Implemented domain modules against a schema-per-tenant PostgreSQL setup, and learned why that model is chosen over a shared table with a tenant column.',
          'Built React screens with TanStack Query, Table and Virtual for pipelines large enough that naive rendering stalls the browser.',
          'Followed the Helm and AWS EKS deployment path for both applications, including per-component releases.',
        ],
      },
      'ai-work': {
        role: 'Full Stack Development — AI Features',
        summary:
          'Worked on conversational agent features for clinical intake and e-commerce lifecycle marketing, running on WhatsApp and email.',
        highlights: [
          'Implemented calendar provider integrations behind a shared interface so the agent could offer availability from whatever software the clinic already used.',
          'Wired retrieval over per-tenant knowledge bases so answers came from real procedures and prices instead of model guesses.',
          'Added OpenTelemetry, Prometheus and Sentry instrumentation, including in the worker processes where failures are easiest to miss.',
        ],
      },
      'first-production': {
        role: 'Full Stack Development — First Production Work',
        summary:
          'My first code that shipped to real users: affiliate platform screens, billing integrations and public product sites.',
        highlights: [
          'Built affiliate and admin screens against a NestJS API, with Stripe payouts and S3 presigned uploads.',
          'Integrated Shopify Billing and Stripe so the same product could be sold inside the Shopify ecosystem or directly.',
          'Built Next.js marketing and legal pages that passed Meta review for WhatsApp Business approval.',
        ],
      },
      learning: {
        role: 'Learning to Build',
        summary:
          'Started with JavaScript and Node while studying engineering, moving from tutorials to things that other people actually used.',
        highlights: [
          'Worked through JavaScript, TypeScript, React and Node, then SQL and relational modelling.',
          'Built small full stack projects to understand how a request travels from a form to a database row and back.',
          'Started reading other people\'s code seriously, which turned out to matter more than writing my own.',
        ],
      },
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    subtitle:
      'Open to junior and mid-level full stack roles, and to freelance work. Tell me what you are building — if I am not the right fit I will say so.',
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
    tagline: 'Full Stack Developer — multi-tenant SaaS, AI features, production systems.',
    builtWith: 'Built with Next.js, Tailwind CSS and Framer Motion.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    sections: 'Sections',
    elsewhere: 'Elsewhere',
  },
} as const
