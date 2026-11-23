/* =========================================================
   Mohsin Raza — Portfolio
   Edit the DATA section below to update content.
   ========================================================= */

/* ======================= DATA ======================= */

// Put a photo at assets/avatar.jpg and set this to 'assets/avatar.jpg'
const AVATAR_URL = '';

// Roles the hero title scrambles through
const ROLES = ['Mohsin Raza.', 'a Motion Artist.', 'an AI Animator.', 'a Storyteller.'];

// DEMO projects — replace with real work.
// Optional per project: image: 'assets/work/x.jpg' or video: 'assets/work/x.mp4'
const PROJECTS = [
  { title: 'Photosynthesis, Explained', cat: 'Explainer', year: 2025, dur: '01:20', ratio: '4/5', art: 'orbit', c: ['#1f8a5b', '#0c3b2a', '#c8ff4d'] },
  { title: 'Election Night Package', cat: 'Broadcast', year: 2023, dur: '00:30', ratio: '16/10', art: 'bars', c: ['#c4161c', '#3a0507', '#ffffff'] },
  { title: 'Little Coder Series', cat: 'Character', year: 2025, dur: '03:45', ratio: '1/1', art: 'blob', c: ['#ff7a3d', '#5b1f6a', '#ffd166'] },
  { title: 'Dreamscape — AI Short', cat: 'AI Video', year: 2025, dur: '00:58', ratio: '3/4', art: 'orbit', c: ['#4f7cff', '#120a3b', '#ff5fd2'] },
  { title: 'Breaking News Opener', cat: 'Broadcast', year: 2021, dur: '00:15', ratio: '16/10', art: 'bars', c: ['#0d47a1', '#04122b', '#ffcc33'] },
  { title: 'Fractions Made Fun', cat: 'Explainer', year: 2024, dur: '02:10', ratio: '1/1', art: 'grid', c: ['#ffb703', '#7a3e00', '#023047'] },
  { title: 'Brand Logo Reveal', cat: '2D Animation', year: 2023, dur: '00:08', ratio: '4/5', art: 'ring', c: ['#111111', '#2b2b2b', '#ff3b3b'] },
  { title: 'Water Cycle Journey', cat: 'Explainer', year: 2025, dur: '01:45', ratio: '16/10', art: 'blob', c: ['#00b4d8', '#03045e', '#caf0f8'] },
  { title: 'Product Launch Promo', cat: '2D Animation', year: 2022, dur: '00:45', ratio: '1/1', art: 'grid', c: ['#7b2ff7', '#1b0742', '#f1c40f'] },
  { title: 'Voice-to-Avatar Lesson', cat: 'AI Video', year: 2026, dur: '04:00', ratio: '4/5', art: 'ring', c: ['#00c896', '#062b25', '#e8fff8'] },
  { title: 'Ramadan Ident', cat: 'Broadcast', year: 2022, dur: '00:20', ratio: '3/4', art: 'orbit', c: ['#d4a373', '#2d1b0e', '#fefae0'] },
  { title: 'Mascot Walk Cycle', cat: 'Character', year: 2024, dur: '00:12', ratio: '16/10', art: 'blob', c: ['#ef476f', '#3b0a1a', '#ffd6e0'] }
];

const LEVEL = { Expert: 0.95, Proficient: 0.85, Advance: 0.78, Intermediate: 0.58 };

const TOOLS_CREATIVE = [
  { name: 'Adobe After Effects', ab: 'Ae', lvl: 'Expert', fg: '#9999ff', bg: '#00005b' },
  { name: 'Adobe Premiere Pro', ab: 'Pr', lvl: 'Expert', fg: '#ea77ff', bg: '#2a0634' },
  { name: 'Adobe Illustrator', ab: 'Ai', lvl: 'Expert', fg: '#ff9a00', bg: '#330000' },
  { name: 'Adobe Photoshop', ab: 'Ps', lvl: 'Expert', fg: '#31a8ff', bg: '#001e36' },
  { name: 'CapCut', ab: 'Cc', lvl: 'Expert', fg: '#ffffff', bg: '#111111' },
  { name: 'DaVinci Resolve', ab: 'Dr', lvl: 'Advance', fg: '#ffd36b', bg: '#2b2310' },
  { name: 'Autodesk Maya', ab: 'M', lvl: 'Intermediate', fg: '#37c6c6', bg: '#0b2b2e' }
];
const TOOLS_AI = [
  { name: 'OpenAI', ab: 'Oa', lvl: 'Proficient', fg: '#ffffff', bg: '#10a37f' },
  { name: 'Higgsfield.ai', ab: 'Hf', lvl: 'Expert', fg: '#111111', bg: '#c8ff4d' },
  { name: 'Google Gemini', ab: 'Ge', lvl: 'Advance', fg: '#ffffff', bg: '#3b6cf6' },
  { name: 'ElevenLabs', ab: 'XI', lvl: 'Advance', fg: '#ffffff', bg: '#222222' },
  { name: 'Kling AI', ab: 'Kl', lvl: 'Intermediate', fg: '#ffffff', bg: '#1d5c4d' },
  { name: 'Google Labs (Flow)', ab: 'Fl', lvl: 'Expert', fg: '#ffffff', bg: '#a142f4' }
];

const SKILLS = [
  { k: 'Animation & Motion Design', d: '2D animation, motion graphics, character animation, explainer videos, educational animation, visual storytelling.' },
  { k: 'AI Powered Content', d: 'AI animation, prompt engineering, text-to-image, image-to-video, AI voice generation, character consistency.' },
  { k: 'Digital & Interactive', d: 'UI/UX design, game art, interactive media and prototyping.' },
  { k: 'Video & Post-Production', d: 'Video editing in After Effects & Premiere Pro, compositing, transitions and visual effects.' }
];

// Timeline: dates as [year, month(1-12)]; end: null = present
const AXIS = { from: 2018, to: 2027 };
const NOW = [2026, 11];
const JOBS = [
  { co: 'Arvo (Education Excellence)', role: 'AI Animator', start: [2024, 12], end: null, color: '#3ddc84', label: 'Dec 2024 — Present' },
  { co: 'Punjab Group', role: 'Motion Graphic Artist', start: [2022, 8], end: [2024, 11], color: '#4f7cff', label: 'Aug 2022 — Nov 2024' },
  { co: 'Dunya News', role: 'Animator', start: [2018, 4], end: [2022, 7], color: '#ff3b3b', label: 'Apr 2018 — Jul 2022' }
];

/* ======================= APP ======================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const G = window.gsap;
  const ST = window.ScrollTrigger;
  const motion = !!(G && ST) && !reduce;
  if (G && ST) G.registerPlugin(ST);

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- theme ---------- */
  const saved = store.get('mr-theme');
  if (saved) root.dataset.theme = saved;
  $('#themeBtn').addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    store.set('mr-theme', next);
  });

  /* ---------- helpers ---------- */
  const pad = n => String(n).padStart(2, '0');
  const timecode = sec => {
    const f = Math.floor((sec % 1) * 25);
    const s = Math.floor(sec);
    return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`;
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const buildRuler = (el, n) => {
    const ticks = [];
    for (let i = 0; i < n; i++) { const t = document.createElement('i'); el.appendChild(t); ticks.push(t); }
    return ticks;
  };
  const paintRuler = (ticks, pos, base, peak, spread, fill) => {
    const n = ticks.length - 1;
    ticks.forEach((t, i) => {
      const x = i / n;
      const d = Math.abs(x - pos);
      const k = Math.max(0, 1 - d * spread);
      t.style.height = (base + peak * k * k) + 'px';
      t.style.background = (fill && x <= pos) || d < 0.6 / n ? 'var(--fg)' : '';
      t.style.opacity = fill ? (x <= pos ? 1 : 0.3) : (0.45 + 0.55 * k);
    });
  };
  const ym = ([y, m]) => y + (m - 1) / 12;
  const pct = d => ((ym(d) - AXIS.from) / (AXIS.to - AXIS.from)) * 100;

  /* ---------- render: avatar ---------- */
  if (AVATAR_URL) {
    const a = $('#avatar');
    a.textContent = '';
    a.style.backgroundImage = `url("${AVATAR_URL}")`;
  }

  /* ---------- render: projects ---------- */
  const art = (p) => {
    const [a, b, c] = p.c;
    const bg = `background:radial-gradient(120% 90% at 20% 10%, ${a}, ${b} 75%);`;
    let shapes = '';
    if (p.art === 'orbit') shapes = `
      <span class="art__blob a-pulse" style="width:46%;aspect-ratio:1;left:40%;top:18%;background:${c};opacity:.9"></span>
      <span class="art__ring a-spin" style="width:78%;aspect-ratio:1;left:11%;top:5%;border-style:dashed;border-color:${c}"></span>
      <span class="art__blob a-float" style="width:12%;aspect-ratio:1;left:14%;top:56%;background:#fff"></span>`;
    else if (p.art === 'bars') shapes = `
      <span class="art__bar a-slide" style="left:8%;top:30%;width:58%;transform-origin:left;background:${c}"></span>
      <span class="art__bar a-slide" style="left:8%;top:42%;width:40%;transform-origin:left;animation-delay:.3s"></span>
      <span class="art__bar a-slide" style="left:8%;top:54%;width:24%;transform-origin:left;animation-delay:.6s;opacity:.6"></span>
      <span class="art__blob a-pulse" style="width:22%;aspect-ratio:1;right:8%;top:22%;background:${c};opacity:.8"></span>`;
    else if (p.art === 'blob') shapes = `
      <span class="art__blob a-float" style="width:58%;aspect-ratio:1;left:30%;top:10%;background:${c}"></span>
      <span class="art__blob a-float" style="width:30%;aspect-ratio:1;left:8%;top:40%;background:#fff;opacity:.9;animation-delay:-2s"></span>
      <span class="art__blob a-pulse" style="width:10%;aspect-ratio:1;left:72%;top:58%;background:${b}"></span>`;
    else if (p.art === 'grid') shapes = Array.from({ length: 9 }, (_, i) => {
      const x = 12 + (i % 3) * 26, y = 10 + Math.floor(i / 3) * 22;
      return `<span class="art__blob a-pulse" style="width:16%;aspect-ratio:1;left:${x}%;top:${y}%;border-radius:${i % 2 ? '50%' : '6px'};background:${i % 3 ? c : '#fff'};animation-delay:${i * .2}s"></span>`;
    }).join('');
    else shapes = `
      <span class="art__ring a-spin" style="width:60%;aspect-ratio:1;left:20%;top:12%;border-color:${c};border-width:3px;border-right-color:transparent"></span>
      <span class="art__ring a-spin" style="width:40%;aspect-ratio:1;left:30%;top:22%;animation-direction:reverse;border-left-color:transparent"></span>
      <span class="art__blob a-pulse" style="width:14%;aspect-ratio:1;left:43%;top:35%;background:${c}"></span>`;
    return `<div class="art" style="${bg}">${shapes}<span class="art__label">${p.cat}</span></div>`;
  };

  const grid = $('#grid');
  grid.innerHTML = PROJECTS.map((p, i) => {
    const media = p.video
      ? `<video src="${p.video}" muted loop playsinline preload="metadata"></video>`
      : p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />` : art(p);
    return `<a class="card" href="#" data-cat="${p.cat}" data-i="${i}">
      <div class="card__thumb" style="aspect-ratio:${p.ratio}">
        <div class="card__art">${media}</div>
        <span class="card__badge">${pad(i + 1)}</span>
        <span class="card__badge card__dur">${p.dur}</span>
      </div>
      <div class="card__meta">
        <div><div class="card__title">${p.title}</div><div class="card__cat">${p.cat}</div></div>
        <span class="card__year">${p.year}</span>
      </div>
    </a>`;
  }).join('');
  $$('.card', grid).forEach(card => {
    card.addEventListener('click', e => e.preventDefault());
    const v = $('video', card);
    if (v) {
      card.addEventListener('mouseenter', () => v.play().catch(() => {}));
      card.addEventListener('mouseleave', () => v.pause());
    }
  });

  /* ---------- render: filters ---------- */
  const cats = ['All', ...new Set(PROJECTS.map(p => p.cat))];
  const filters = $('#filters');
  filters.innerHTML = cats.map((c, i) => {
    const n = c === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.cat === c).length;
    return `<button class="chip${i ? '' : ' is-active'}" role="tab" data-f="${c}">${c}<sup>${n}</sup></button>`;
  }).join('');
  let filtering = false;
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn || btn.classList.contains('is-active') || filtering) return;
    $$('.chip', filters).forEach(c => c.classList.toggle('is-active', c === btn));
    const f = btn.dataset.f;
    const cards = $$('.card', grid);
    const apply = () => cards.forEach(c => c.classList.toggle('is-hidden', f !== 'All' && c.dataset.cat !== f));
    if (!motion) { apply(); return; }
    filtering = true;
    const shown = cards.filter(c => !c.classList.contains('is-hidden'));
    G.to(shown, {
      opacity: 0, y: 20, scale: .97, duration: .3, stagger: .02, ease: 'power2.in',
      onComplete() {
        apply();
        const next = cards.filter(c => !c.classList.contains('is-hidden'));
        G.fromTo(next, { opacity: 0, y: 40, scale: .97 }, {
          opacity: 1, y: 0, scale: 1, duration: .8, stagger: .05, ease: 'expo.out',
          onComplete() { filtering = false; }
        });
        next.forEach(c => c.classList.add('in-view'));
        ST.refresh();
      }
    });
  });

  /* ---------- render: tools & skills ---------- */
  const toolHTML = t => `<li class="tool" data-lvl="${LEVEL[t.lvl] || .6}">
      <span class="tool__ico" style="color:${t.fg};background:${t.bg}">${t.ab}</span>
      <div><div class="tool__name">${t.name}</div><span class="tool__track"><span class="tool__fill"></span></span></div>
      <span class="tool__lvl mono">${t.lvl}</span>
    </li>`;
  $('#toolsCreative').innerHTML = TOOLS_CREATIVE.map(toolHTML).join('');
  $('#toolsAi').innerHTML = TOOLS_AI.map(toolHTML).join('');
  $('#skills').innerHTML = SKILLS.map(s => `<div class="skill"><div class="skill__k"><i></i>${s.k}</div><p>${s.d}</p></div>`).join('');

  /* ---------- render: experience ---------- */
  const axis = $('#axis');
  for (let y = AXIS.from; y < AXIS.to; y++) {
    const s = document.createElement('span');
    s.textContent = "'" + String(y).slice(2);
    s.style.left = pct([y, 1]) + '%';
    if (y === AXIS.from) s.style.transform = 'none';
    axis.appendChild(s);
  }
  $('#layers').innerHTML = `<div class="comp__axis mono" style="display:flex;align-items:center;padding:0 16px">Layer name</div>` +
    JOBS.map((j, i) => `<div class="layer">
      <div class="layer__top"><span class="layer__n">${JOBS.length - i}</span><span class="layer__name">${j.co}</span></div>
      <span class="layer__role">${j.role}</span>
      <span class="layer__date">${j.label}</span>
    </div>`).join('');
  $('#rows').innerHTML = JOBS.map(j => {
    const l = pct(j.start), r = pct(j.end || NOW);
    return `<div class="row"><div class="row__bar${j.end ? '' : ' live'}" style="left:${l}%;width:${r - l}%;background:${j.color}"><span>${j.role}</span></div></div>`;
  }).join('');
  const nowPct = pct(NOW);
  const playhead = $('#playhead');
  playhead.style.left = nowPct + '%';

  /* ---------- split text helpers ---------- */
  $$('.split').forEach(el => {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="w"><span>${w}</span></span>`).join(' ');
  });
  const about = $('#aboutText');
  about.innerHTML = about.textContent.trim().split(/\s+/).map(w => `<span class="wd">${w}</span>`).join(' ');
  const words = $$('.wd', about);

  $('#year').textContent = new Date().getFullYear();

  /* ---------- rulers ---------- */
  const loaderTicks = buildRuler($('#loaderRuler'), 41);
  const navTicks = buildRuler($('#navRuler'), 49);
  paintRuler(navTicks, 0, 5, 12, 7, false);

  /* ---------- scramble ---------- */
  const scrEl = $('#scramble');
  const GLYPHS = '!<>-_/[]{}=+*^?#░▒▓ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let wave = { amp: 0, target: 0 };
  const scramble = (to) => new Promise(res => {
    const from = scrEl.textContent;
    const len = Math.max(from.length, to.length);
    const q = [];
    for (let i = 0; i < len; i++) {
      const s = Math.floor(Math.random() * 18), e = s + Math.floor(Math.random() * 18) + 6;
      q.push({ from: from[i] || '', to: to[i] || '', s, e, ch: '' });
    }
    let f = 0;
    wave.amp = 7;
    const tick = () => {
      let out = '', done = 0;
      q.forEach(o => {
        if (f >= o.e) { done++; out += o.to; }
        else if (f >= o.s) {
          if (!o.ch || Math.random() < .3) o.ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          out += `<span class="g">${o.ch}</span>`;
        } else out += o.from;
      });
      scrEl.innerHTML = out;
      if (done === q.length) res(); else { f++; requestAnimationFrame(tick); }
    };
    tick();
  });
  let roleI = 0;
  const cycleRoles = () => {
    setTimeout(async () => {
      roleI = (roleI + 1) % ROLES.length;
      await scramble(ROLES[roleI]);
      cycleRoles();
    }, roleI === 0 ? 4200 : 2600);
  };

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (motion && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', ST.update);
    G.ticker.add(t => lenis.raf(t * 1000));
    G.ticker.lagSmoothing(0);
  }
  $$('[data-link]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = id && id.length > 1 ? $(id) : null;
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
    else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }));

  /* ---------- frame loop: nav playhead, timecode, wave ---------- */
  const navHead = $('#navHead');
  const navTc = $('#navTc');
  const header = $('#header');
  const wavePath = $('#wavePath');
  const sections = $$('[data-section]');
  const links = $$('.tnav__links a');
  let headPos = 0, lastY = window.scrollY, vel = 0;
  const COMP_SECONDS = 90; // pretend the page is a 1:30 composition

  const frame = (t) => {
    const y = window.scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const p = Math.min(1, Math.max(0, y / max));
    vel = lerp(vel, Math.abs(y - lastY), 0.2);
    lastY = y;

    headPos = lerp(headPos, p, 0.14);
    navHead.style.left = (headPos * 100) + '%';
    paintRuler(navTicks, headPos, 5, 12, 7, false);
    navTc.textContent = timecode(headPos * COMP_SECONDS);
    header.classList.toggle('is-scrolled', y > 40);

    // active link
    let cur = 'home';
    sections.forEach(s => { if (s.getBoundingClientRect().top <= innerHeight * 0.45) cur = s.dataset.section; });
    links.forEach(l => l.classList.toggle('is-active', l.dataset.sec === cur));

    // wave squiggle
    wave.target = Math.min(8, vel * 0.25);
    wave.amp = lerp(wave.amp, wave.target, 0.04);
    let d = '';
    for (let x = 0; x <= 120; x += 2) {
      const env = Math.sin(Math.PI * x / 120);
      const yy = 12 + wave.amp * env * Math.sin(x * 0.2 - t * 0.008);
      d += (x ? 'L' : 'M') + x + ' ' + yy.toFixed(2) + ' ';
    }
    wavePath.setAttribute('d', d);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

  /* ---------- cursor ---------- */
  const cursor = $('#cursor'), dot = $('#cursorDot'), label = $('#cursorLabel');
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mx = -100, my = -100, cx = -100, cy = -100;
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate3d(${mx}px,${my}px,0)`; });
    const loop = () => {
      cx = lerp(cx, mx, 0.16); cy = lerp(cy, my, 0.16);
      cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener('mouseover', e => {
      const card = e.target.closest('.card');
      const hov = e.target.closest('a, button');
      cursor.classList.toggle('is-play', !!card);
      cursor.classList.toggle('is-hover', !card && !!hov);
      label.textContent = 'Play';
    });
  }

  /* ---------- magnetic ---------- */
  $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      if (motion) G.to(el, { x: dx * 0.25, y: dy * 0.35, duration: .6, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => { if (motion) G.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, .4)' }); });
  });

  /* ---------- no-motion fallback ---------- */
  if (!motion) {
    $('#loader').remove();
    document.body.classList.remove('is-loading');
    $$('.tool').forEach(t => { $('.tool__fill', t).style.transform = `scaleX(${t.dataset.lvl})`; });
    words.forEach(w => w.classList.add('on'));
    $$('[data-count]').forEach(n => { n.textContent = n.dataset.count; });
    $$('.card').forEach(c => c.classList.add('in-view'));
    if (!reduce) cycleRoles();
    return;
  }

  /* ======================= MOTION ======================= */
  document.body.classList.add('is-loading');
  G.set('.line__in', { yPercent: 115 });
  G.set('.reveal-up', { y: 28, opacity: 0 });
  G.set('.header', { y: -30, opacity: 0 });
  G.set('#wave', { opacity: 0 });

  /* ---------- loader ---------- */
  const loaderNum = $('#loaderNum'), loaderTc = $('#loaderTc');
  const prog = { v: 0 };
  G.to(prog, {
    v: 100, duration: 2.4, ease: 'power2.inOut',
    onUpdate() {
      const v = prog.v;
      loaderNum.textContent = Math.round(v);
      loaderTc.textContent = timecode(v / 100 * 4);
      paintRuler(loaderTicks, v / 100, 8, 22, 9, true);
    },
    onComplete() {
      const tl = G.timeline();
      tl.to('.loader__inner', { y: -30, opacity: 0, duration: .5, ease: 'power2.in' })
        .to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, '-=.1')
        .add(() => { $('#loader').remove(); document.body.classList.remove('is-loading'); })
        .add(intro, '-=.55');
    }
  });

  function intro() {
    const tl = G.timeline();
    tl.to('.header', { y: 0, opacity: 1, duration: 1, ease: 'expo.out' })
      .to('.line__in', { yPercent: 0, duration: 1.3, ease: 'expo.out' }, '<.05')
      .to('#wave', { opacity: 1, duration: .6 }, '<.4')
      .add(() => { wave.amp = 9; }, '<')
      .to('.reveal-up', { y: 0, opacity: 1, duration: 1.1, stagger: .07, ease: 'expo.out' }, '<-.2')
      .add(cycleRoles);
  }

  /* ---------- hero parallax out ---------- */
  G.to('.hero__inner', {
    yPercent: -18, opacity: .2, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* ---------- split titles ---------- */
  $$('.split').forEach(el => {
    G.from($$('.w > span', el), {
      yPercent: 115, rotate: 4, duration: 1.2, stagger: .06, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
  $$('.sec-num').forEach(el => {
    G.from(el, { opacity: 0, x: -16, duration: .9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  /* ---------- work cards ---------- */
  G.set('.card', { opacity: 0, y: 70 });
  ST.batch('.card', {
    start: 'top 92%',
    onEnter: batch => {
      batch.forEach(c => c.classList.add('in-view'));
      G.to(batch, { opacity: 1, y: 0, duration: 1.2, stagger: .1, ease: 'expo.out', overwrite: true });
    }
  });
  G.from('.filters .chip', { opacity: 0, y: 12, stagger: .04, duration: .8, ease: 'expo.out', scrollTrigger: { trigger: '#filters', start: 'top 90%' } });

  /* ---------- about words ---------- */
  ST.create({
    trigger: about, start: 'top 78%', end: 'bottom 50%', scrub: true,
    onUpdate(self) {
      const n = Math.round(self.progress * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    }
  });

  /* ---------- stats ---------- */
  $$('[data-count]').forEach(el => {
    const o = { v: 0 };
    G.to(o, {
      v: +el.dataset.count, duration: 2, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate() { el.textContent = Math.round(o.v); }
    });
  });

  /* ---------- toolkit ---------- */
  G.from('.panel', { y: 60, opacity: 0, duration: 1.2, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: '.toolkit__cols', start: 'top 85%' } });
  ST.batch('.tool', {
    start: 'top 92%',
    onEnter: batch => batch.forEach((t, i) => {
      G.to($('.tool__fill', t), { scaleX: +t.dataset.lvl, duration: 1.6, delay: i * .08, ease: 'expo.out' });
    })
  });
  G.from('.skill', { y: 50, opacity: 0, duration: 1.1, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: '#skills', start: 'top 88%' } });

  /* ---------- experience ---------- */
  G.from('.comp', { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.comp', start: 'top 85%' } });
  G.from('.row__bar', {
    scaleX: 0, duration: 1.4, stagger: .18, ease: 'expo.inOut',
    scrollTrigger: { trigger: '.comp', start: 'top 75%' }
  });
  G.fromTo(playhead, { left: '0%' }, {
    left: nowPct + '%', ease: 'none',
    scrollTrigger: { trigger: '.comp', start: 'top 80%', end: 'bottom 35%', scrub: 1 }
  });
  G.from('.edu', { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.edu', start: 'top 90%' } });

  /* ---------- marquee ---------- */
  const mq = G.to('#marquee', { xPercent: -50, duration: 22, ease: 'none', repeat: -1 });
  let dir = 1;
  ST.create({
    trigger: '.contact', start: 'top bottom', end: 'bottom top',
    onUpdate(self) {
      dir = self.direction;
      const boost = Math.min(4, Math.abs(self.getVelocity()) / 400);
      G.to(mq, { timeScale: dir * (1 + boost), duration: .3, overwrite: true });
    }
  });
  G.from('.big-btn', { scale: .85, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.big-btn', start: 'top 92%' } });

  addEventListener('load', () => ST.refresh());
})();
