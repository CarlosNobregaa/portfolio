# Carlos Nóbrega — Portfolio

Personal portfolio of a Full Stack Engineer. Single-page, fully multilingual
(**EN / PT-BR / ES**), dark-first, statically exported.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4, Framer Motion and
Lucide Icons.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Development server with fast refresh                 |
| `npm run build`     | Production build + static export into `out/`         |
| `npm run preview`   | Serve the exported `out/` directory                  |
| `npm run typecheck` | `tsc --noEmit` — includes translation checking       |

There is no `npm run start`: `next start` is unsupported with
`output: 'export'`. Use `npm run preview` (or any static file server) instead.

`next.config.ts` sets `output: 'export'`, so `npm run build` produces a fully
static `out/` directory. It deploys as-is to Vercel, Netlify, GitHub Pages, S3 +
CloudFront or an nginx container — no Node runtime required.

---

## Internationalization

English is the mandated boot locale: the server-rendered HTML is always English,
so the first paint is deterministic and matches what crawlers index. A stored
preference is applied after hydration.

```
src/i18n/
├── config.ts               # locale list, labels, storage key, default (en)
├── types.ts                # derives `Dictionary` from the English dictionary
├── index.ts                # bundles all three dictionaries
├── LocaleProvider.tsx      # context, persistence, <html lang> sync
└── dictionaries/
    ├── en.ts               # source of truth (`as const`)
    ├── pt-BR.ts            # must satisfy `Dictionary`
    └── es.ts               # must satisfy `Dictionary`
```

**The translations are compiler-enforced.** `Dictionary` is derived from `en.ts`,
and `pt-BR.ts` / `es.ts` are annotated with it. Add a key to English and both
other files fail `npm run typecheck` until they are translated. Rename a project
id in `src/data/projects.ts` and it fails too, because `ProjectId` is
`keyof Dictionary['projects']['items']`.

### Adding a fourth language

1. Create `src/i18n/dictionaries/<code>.ts` exporting a `Dictionary`.
2. Add the code to `locales` and `localeMeta` in `src/i18n/config.ts`.
3. Register it in `src/i18n/index.ts`.

The switcher in the header picks it up automatically.

---

## Content model

Language-agnostic facts live in `src/data/`; all prose lives in the
dictionaries, keyed by the same id.

| File                     | Holds                                                        |
| ------------------------ | ------------------------------------------------------------ |
| `src/data/profile.ts`    | Name, email, links, headline statistics                       |
| `src/data/projects.ts`   | Project ids, tech badges, structural metrics, repo links       |
| `src/data/stack.ts`      | Tech stack categories and proficiency levels                   |
| `src/data/experience.ts` | Timeline entries: org, period, technologies                    |

Each project is written as **Problem → Solution → Technologies → Technical
impact**, in all three languages.

### Before publishing — edit these

Everything below is in `src/data/profile.ts` unless noted:

- [ ] `links.linkedin` — currently a guessed URL
- [ ] `links.resume` — empty; drop a PDF in `public/` and point at it, and the
      Hero button appears on its own
- [ ] `siteUrl` — used for `metadataBase`, Open Graph, `robots.txt` and the
      sitemap
- [ ] `copyrightSince` — the footer year is static on purpose (a live
      `new Date()` would hydration-mismatch after 1 January in a static export)
- [ ] `src/data/experience.ts` — periods were inferred from repository history;
      confirm them against your actual dates
- [ ] `stats` — headline numbers; they are counted from real repositories, so
      update them as the portfolio grows

---

## Architecture notes

- **No i18n routing.** A single page with client-side dictionaries makes locale
  switching instant with no navigation, no flash and no duplicated static
  output. `<html lang>` and `<title>` are updated on switch.
- **Theming** is `next-themes` with the `class` strategy, dark by default,
  respecting the system preference. Tailwind 4's `@custom-variant` wires the
  `dark:` variant to `.dark`.
- **Design tokens** live as CSS custom properties in `src/app/globals.css`
  (`--surface`, `--hairline`, glow colours) so both themes share one set of
  component classes.
- **Motion** honours `prefers-reduced-motion` through
  `<MotionConfig reducedMotion="user">` in `src/components/Providers.tsx`,
  which covers every Framer animation at once. Components deliberately do *not*
  branch on the preference themselves: `useReducedMotion()` returns `false` on
  the server and `true` on a reduced-motion client, so using it in render output
  is a hydration mismatch. The CSS block in `globals.css` covers the separate
  case of pure-CSS animations.
- **The contact form** has no backend. It validates client-side, then hands the
  message to the visitor's mail client via `mailto:` — nothing is stored and no
  third-party form service is involved.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, providers, header/footer shell
│   ├── page.tsx            # section composition
│   ├── globals.css         # Tailwind 4 theme, tokens, utilities
│   ├── opengraph-image.tsx # build-time social preview card
│   ├── robots.ts / sitemap.ts
│   └── icon.svg            # favicon
├── components/
│   ├── layout/             # Header (nav, language switcher), Footer
│   ├── sections/           # Hero, About, Projects, TechStack, Experience, Contact
│   ├── ui/                 # Reveal, SectionHeading, TechBadge, Backdrop, …
│   ├── Providers.tsx
│   └── DocumentMeta.tsx
├── data/
├── i18n/
└── lib/
```

---

## License

© Carlos Nóbrega. All rights reserved.
