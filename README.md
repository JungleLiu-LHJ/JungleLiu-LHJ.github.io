# Personal technical blog

A static, content-first technical blog built with Astro, Markdown/MDX, and GitHub Pages. It has no server, database, CMS, or runtime backend.

## Stack

- Astro static site generation
- Markdown and MDX content collections
- Shiki code highlighting, copy buttons, table of contents, reading time, tags, and previous/next post links
- Pagefind local full-text search, RSS, sitemap, OpenGraph/SEO metadata, responsive layout, and dark mode
- GitHub Actions → GitHub Pages deployment

## First-time setup

1. Create a GitHub repository named `<github-username>.github.io`.
2. The configured site URL is `https://jungleliu-lhj.github.io`. If you fork this project, replace it in [astro.config.mjs](./astro.config.mjs) with your own GitHub Pages URL.
3. Replace the placeholder name, bio, project cards, and GitHub links in `src/`.
4. Commit and push the project to the `main` branch.

For a future custom domain, change `site` in `astro.config.mjs` to `https://example.dev` and configure that domain in GitHub Pages. No application architecture change is required.

## Local development

```bash
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

## Build

```bash
npm run build
```

The build creates `dist/` and then generates the Pagefind search index inside it. Preview the result with:

```bash
npm run preview
```

## Write a post

Add a `.md` or `.mdx` file under `src/content/blog/`. The filename becomes the URL, so `postgres-mvcc.md` becomes `/blog/postgres-mvcc/`.

```md
---
title: "PostgreSQL MVCC Explained"
description: "From tuple metadata to snapshots and vacuum"
date: 2026-09-05
tags: [PostgreSQL, Database]
category: Database
---

## PostgreSQL MVCC Explained

Write the article here.
```

Set `draft: true` in frontmatter to keep a work-in-progress out of the public site, RSS, and search index. Categories are free-form; use a consistent spelling such as `Backend`, `Golang`, `Database`, `Distributed Systems`, `AI / Agent`, `Engineering`, `Projects`, or `Notes`.

## Deploy to GitHub Pages

In the GitHub repository, go to:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

The workflow in `.github/workflows/deploy.yml` runs on every push to `main`:

```text
npm ci → npm run build → upload dist/ → GitHub Pages
```

After the first successful run, the blog will be available at `https://<github-username>.github.io`.

## Daily workflow

```text
Create src/content/blog/my-new-post.md
        ↓
Write Markdown
        ↓
git add . && git commit -m "Add a post" && git push
        ↓
GitHub Actions publishes the update
```
