# AGENTS.md — Mohsin Raza Portfolio

Guide for any AI agent (Claude, Codex, Cursor, Copilot, etc.) working on this repo.
Read this fully before changing anything.

## Owner
- **Mohsin Raza** — Motion Graphic Artist / AI Animator, 8+ years.
- Talks in **Roman Urdu / Hinglish**. Reply in the same style, short and clear.
- Not a web developer: explain changes in plain words, give exact steps.

## What this is
A personal portfolio site. **Plain static site** — HTML + CSS + vanilla JS. No build step,
no framework, no npm, no bundler. Keep it that way unless the owner asks.

- Repo: https://github.com/mnp545/Mohsin-portfolio (branch `main`)
- Live: https://mnp545.github.io/Mohsin-portfolio/ (GitHub Pages, deploys from `main` / root)
- Every push to `main` goes live in ~1–2 minutes. **Pushing = publishing.** Check before you push.

## Files
```
index.html      Page markup — all sections (loader, header, hero, work, about, toolkit, experience, contact)
css/style.css   All styles. Design tokens (colors, fonts) at the top in :root
js/main.js      DATA section at top (all editable content) + APP section (rendering + animations)
PLAN.md         Original design plan and concept
assets/         (create when needed) avatar.jpg, work/*.jpg|mp4
.claude/        Local preview config (git-ignored)
```

## Editing content (most common tasks)
All content lives in the **DATA section at the top of `js/main.js`**:

| Want to change | Edit |
|---|---|
| Profile photo | Put file at `assets/avatar.jpg`, set `AVATAR_URL = 'assets/avatar.jpg'` |
| Hero rotating roles | `ROLES` array |
| Projects / work grid | `PROJECTS` array. Add `image: 'assets/work/x.jpg'` or `video: 'assets/work/x.mp4'` to replace the demo art. `ratio` sets card shape (`'4/5'`, `'16/10'`, `'1/1'`, `'3/4'`). Filter chips are built automatically from `cat` |
| Software levels | `TOOLS_CREATIVE`, `TOOLS_AI` (levels: Expert, Proficient, Advance, Intermediate → `LEVEL` map) |
| Skills cards | `SKILLS` |
| Job timeline | `JOBS` (dates `[year, month]`, `end: null` = present), `AXIS`, `NOW` |

Text that lives in `index.html` instead: hero intro lines, about paragraph (`#aboutText`),
stats numbers (`data-count`), email, social links (currently `href="#"` placeholders), footer.

Keep media small: images ≤ 400 KB (WebP/JPG), videos short, muted, ≤ 5 MB, H.264 MP4.

## Real facts (from owner's CV) — don't invent new ones
- Arvo (Education Excellence) — AI Animator — Dec 2024 → Present
- Punjab Group — Motion Graphic Artist — Aug 2022 → Nov 2024
- Dunya News — Animator — Apr 2018 → Jul 2022
- BSCS, University of South Asia, Sep 2018 → Jun 2022, CGPA 3.2/4.0
- Email: mohsincontact01@gmail.com (phone intentionally NOT on the site)

**Still demo / placeholder** (replace when owner provides): all 12 `PROJECTS`, avatar (shows "MR"),
social links, "500+ videos" stat. If you add anything not in the CV, ask the owner first.

## Design system — keep consistent
- **Concept: "The Timeline"** — the page is an After Effects composition; scroll = playhead.
  Visual vocabulary: timecodes (`00:00:00:00`, 25 fps), ruler ticks, playhead, keyframe diamonds, layer bars.
- Dark by default, light theme via `[data-theme="light"]` on `<html>` (saved in localStorage).
- Colors only via CSS variables in `:root` — never hard-code new colors in components.
  `--accent` blue (playhead), `--accent-2` yellow (keyframes), `--rec` red, `--ok` green.
- Fonts (Google Fonts): **Archivo** condensed (`font-stretch: 70–80%`, weight 800) for display,
  **Inter** for body, **JetBrains Mono** uppercase for labels (`.mono`).
- Section header pattern: `.sec-num` ("0X — NAME") + `.sec-title.split`.
- Inspiration was iamkingsleey.com for *feel only* (smoothness, minimal dark). Don't copy its layout/assets.

## Motion rules
- Libraries (CDN, pinned versions — keep pinned): GSAP 3.12.5 + ScrollTrigger (cdnjs), Lenis 1.1.13 (jsdelivr).
- Smooth scroll = Lenis driven by `gsap.ticker`. Anchor links use `data-link` → `lenis.scrollTo`.
- Easing: `expo.out` for reveals (~1–1.3 s), `expo.inOut` for wipes. CSS uses `--ease`.
- Animate only `transform` / `opacity` (and `clip-path` for the loader). No layout-thrashing props.
- Initial hidden states are set with `gsap.set` in JS, never in CSS — so the site still shows
  content if JS/CDN fails.
- Must keep working with `prefers-reduced-motion` and without GSAP (the `!motion` fallback block).
- After changing layout dynamically (e.g. filters), call `ScrollTrigger.refresh()`.

## Run & check locally
```
python -m http.server 5173
```
Open http://localhost:5173. Before pushing, check:
1. Loader finishes and hero animates in; no console errors.
2. Scroll all sections on desktop (~1440px) and mobile (375px) — no horizontal scroll.
3. Work filters work; light/dark toggle works.

## Git
- Work on `main` is fine (single-owner site), but **ask the owner before pushing** since push = live.
- Clear commit messages in English. Don't commit large raw video exports or `.claude/`.
