# Mohsin Raza — Portfolio Plan

## Concept: "The Timeline"
Mohsin is a motion graphic artist, and his CV is styled like After Effects. The site
borrows that language: the whole page is one **composition** and the visitor is the
**playhead** scrubbing through it.

Inspiration taken from the reference site (iamkingsleey.com) is the *feel*:
dark minimal canvas, a loader that counts up, a ruler-style nav, buttery smooth scroll,
text that scrambles between roles, and a scroll-highlighted bio. The visual language
(timecodes, keyframes, layer bars, render progress) is Mohsin's own.

## Sections
| # | Section | What's in it | Motion |
|---|---------|--------------|--------|
| 0 | Loader | Timecode `00:00:00:00` + render % + ruler | Counts to 100, wipes up |
| 1 | Home | Avatar, "I'm Mohsin Raza.", rotating role, intro, status, socials | Lines rise from mask, role scramble, live wave squiggle |
| 2 | Work | Filterable grid of projects (demo data) | Cards reveal on scroll, hover zoom + "Play" cursor |
| 3 | About | Bio paragraph + stats | Words light up as you scroll, counters |
| 4 | Toolkit | Creative tools + AI tools with levels, key skills | Level bars fill on scroll |
| 5 | Experience | AE-style layer timeline 2018 → now, education | Layer bars grow in, playhead sweep |
| 6 | Contact | Big CTA, email, socials, footer | Marquee, magnetic button |

Global: timeline nav with a playhead that tracks scroll progress, custom cursor,
light/dark toggle, Lenis smooth scroll + GSAP ScrollTrigger, reduced-motion support.

## Data (from CV)
- Mohsin Raza — Motion Graphic Artist, 8+ years
- Arvo (Education Excellence) — AI Animator, Dec 2024 – Present
- Punjab Group — Motion Graphic Artist, Aug 2022 – Nov 2024
- Dunya News — Animator, Apr 2018 – Jul 2022
- BSCS, University of South Asia, 2018 – 2022 (3.2 / 4.0)

## Still demo (swap later)
- Project titles, thumbnails and videos → `PROJECTS` array in `js/main.js`
- Profile photo → `assets/avatar.jpg` (currently initials)
- LinkedIn / Behance / Instagram / YouTube links
- Stats numbers in About
