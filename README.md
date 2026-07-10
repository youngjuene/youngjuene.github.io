# youngjuene.github.io

Personal academic website of **Youngjun Choi**, built with [Astro](https://astro.build/)
and deployed to [GitHub Pages](https://pages.github.com/) at
<https://youngjuene.github.io>.

Content migrated from the previous Google Sites site (`www.youngjun.ch`).

## Development

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # preview the production build
```

## Editing content

All content lives in plain data files — no HTML editing needed for routine updates:

| What | Where |
| --- | --- |
| Bio, CV link, social links | `src/data/profile.ts` |
| News items | `src/data/news.ts` (newest first) |
| Publications | `src/data/publications.ts` (add a new entry at the top; `type` drives the Journal/Conference filter) |
| Works gallery (hidden for now) | `src/data/works.ts` + images in `public/images/works/`; re-enable by renaming `src/pages/_works.astro` back to `works.astro` and restoring the nav link in `src/layouts/Base.astro` |
| Experience | `src/data/experience.ts` (section appears once non-empty) |
| Service / Talks / Teaching | `src/data/activities.ts` (each sub-list appears once non-empty) |
| Education | `src/data/education.ts` |
| Profile photo | `public/images/profile.jpg` |
| Music page / SoundCloud | `src/pages/music.astro` |

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site
with the official `withastro/action` and publishes it via GitHub Pages (the repo's
Pages setting must be **Source: GitHub Actions**).

## Adding MkDocs subpages later

GitHub Pages serves this repo at the domain root (`youngjuene.github.io`). Any
**other** repo on the same account with Pages enabled is automatically served under a
subpath: repo `foo` → `youngjuene.github.io/foo/`. That is the cleanest way to add a
MkDocs (Material) site later:

1. Create a new repo, e.g. `notes`.
2. Set `site_url: https://youngjuene.github.io/notes/` in its `mkdocs.yml`.
3. Deploy with `mkdocs gh-deploy` (or a GitHub Actions workflow), and set that repo's
   Pages source accordingly.
4. The docs appear at `https://youngjuene.github.io/notes/` — completely independent
   of this Astro site; neither build knows about the other.

Alternative (single-repo): build MkDocs into this repo's output by adding a step to
`deploy.yml` that runs `mkdocs build -d dist/docs` after the Astro build, serving the
docs at `youngjuene.github.io/docs/`. The multi-repo approach above is simpler to
maintain and is recommended.
