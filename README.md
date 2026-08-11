# KT~Dev.com — Personal Portfolio

A personal portfolio website for **Karan Todkar**, built with React 19 + Vite. It ships as a fully
static site, so it deploys to either Netlify or Vercel with no server-side pieces.

## Tabs

| Tab            | Route              | Contains                                              |
| -------------- | ------------------ | ----------------------------------------------------- |
| Home           | `/`                | Hero with typing animation, stats, contact section     |
| About Me       | `/about`           | Bio, stats, skill bars, education/work timeline        |
| Projects       | `/projects`        | Project cards with tag filtering and links             |
| Certifications | `/certifications`  | Certificate cards grouped by issuer                    |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Requires Node 18 or newer.

## Editing content

All text lives in `src/data/portfolio.js` — profile, contact details, socials, stats, skills,
timeline, projects and certifications. Change values there and the pages update automatically.

- **Project links:** each project has `live`, `repo` and `youtube` fields. Leave a field as an
  empty string and its button is hidden, so fill in the URLs you want shown.
- **Resume:** drop your PDF at `public/Karan_Todkar_CV.pdf` (or change `profile.resumeUrl`) to make
  the "Download CV" button work.
- **Colors:** the palette lives in the `:root` block at the top of `src/index.css`.

## Contact form

The form composes a `mailto:` link and opens the visitor's mail client, which keeps the site
backend-free and identical on both hosts. To capture submissions server-side instead, switch to
[Netlify Forms](https://docs.netlify.com/forms/setup/) or a service like Formspree.

## Deploying

### Netlify

`netlify.toml` already sets the build command, publish directory and the SPA redirect.

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** and pick the repo.
3. Accept the detected settings (`npm run build`, publish `dist`) and deploy.

CLI alternative: `npx netlify-cli deploy --prod`.

### Vercel

`vercel.json` sets the framework, build command, output directory and the SPA rewrite.

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo, and deploy with the detected Vite preset.

CLI alternative: `npx vercel --prod`.

## Project structure

```
src/
  components/   Navbar, Footer, cards, icons, reveal-on-scroll helpers
  pages/        Home, About, Projects, Certifications
  data/         portfolio.js — all site content
  index.css     design tokens and every style rule
```
