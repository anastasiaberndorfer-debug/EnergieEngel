// Professional A4 edition of the cold call guide, built from content.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { de, en, TYPES } = require('./content');

const UI = {
  de: { brand: 'Cold Call Leitfaden', levers: 'Die 12 Hebel der Entscheidung', leversLead: 'Jeder Hebel wirkt allein. Kombiniert werden sie unwiderstehlich.',
        profiles: 'Typ-Profile', objections: 'Die 12 häufigsten Neins', answer: 'Deine Antwort', no: 'Einwand', overview: 'Inhalt dieses Teils', page: 'Seite',
        boundary: 'Grenzen', cheat: 'Pocket-Spickzettel', contents: 'Inhalt', sub: 'Verkaufspsychologie, Farbtypen und Einwandbehandlung für die Kaltakquise' },
  en: { brand: 'Cold Call Playbook', levers: 'The 12 levers of decision', leversLead: 'Each lever works on its own. Combined, they are irresistible.',
        profiles: 'Type profiles', objections: 'The 12 most common nos', answer: 'Your answer', no: 'Objection', overview: 'In this part', page: 'Page',
        boundary: 'Boundaries', cheat: 'Pocket cheat sheet', contents: 'Contents', sub: 'Sales psychology, colour types and objection handling for cold calling' },
};

function block(b) {
  if (b.p) return `<p>${b.p}</p>`;
  if (b.label) return `<div class="label">${b.label}</div>`;
  if (b.quote) return `<blockquote>${b.quote}</blockquote>`;
  if (b.note) return `<div class="note">${b.note}</div>`;
  if (b.say) return `<div class="say">${b.say}</div>`;
  if (b.ul) return `<ul class="bul">${b.ul.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol class="num">${b.ol.map((x, i) => `<li><span class="n">${i + 1}</span><span>${x}</span></li>`).join('')}</ol>`;
  if (b.qs) return `<ol class="num qs">${b.qs.map((x, i) => `<li><span class="n">${i + 1}</span><span>${x}</span></li>`).join('')}</ol>`;
  if (b.check) return `<ul class="check">${b.check.map((x) => `<li><i></i>${x}</li>`).join('')}</ul>`;
  if (b.table) return `<table><thead><tr>${b.table.head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  if (b.kv) return `<table class="kv">${b.kv.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</table>`;
  if (b.formula) return `<div class="formula">${b.formula}</div>`;
  if (b.sig) return `<table class="sig">${b.sig.map(([s, m]) => `<tr><th>${s}</th><td>${m}</td></tr>`).join('')}</table>`;
  if (b.steps3) return `<div class="aff">${b.steps3.map(([t, d], i) => `<div><span class="an">${i + 1}</span><div class="at">${t}</div><div class="ad">${d}</div></div>`).join('')}</div>`;
  if (b.dodont) return `<table class="dd"><thead><tr><th class="do">✓ ${b.labels[0]}</th><th class="dont">✕ ${b.labels[1]}</th></tr></thead><tbody>${b.dodont.map(([a, c]) => `<tr><td>${a}</td><td class="dont">${c}</td></tr>`).join('')}</tbody></table>`;
  if (b.trio) return `<div class="trio">${b.trio.map(([w, d]) => `<div><div class="tw">${w}</div><div class="td">${d}</div></div>`).join('')}</div>`;
  throw new Error('Unknown block ' + Object.keys(b));
}
const blocks = (arr) => arr.map(block).join('');
const find = (arr, key) => arr.find((b) => b[key]);

let pageNo = 0;
const out = [];
function page(lang, section, inner, cls = '') {
  pageNo += 1;
  const u = UI[lang.key];
  out.push(`<section class="page ${cls}">
    <header class="run"><span><b>${u.brand}</b> · Top 0,1 %</span><span>${section || ''}</span></header>
    <div class="content">${inner}</div>
    <footer class="run"><span>${lang.lang}</span><span>${pageNo}</span></footer>
  </section>`);
}
const secHead = (sec) => `<div class="sechead"><div class="secnum">${sec.num}</div><div><h1>${sec.title}</h1><div class="lead">${sec.lead.replace('<br>', ' ')}</div></div></div>`;
const h2 = (t, sub) => `<h2>${t}</h2>${sub ? `<div class="h2sub">${sub}</div>` : ''}`;

function lever(l) {
  const [n, t, d, ex] = l;
  return `<div class="lev"><div class="ln">${n}</div><div><div class="lt">${t}</div><div class="ld">${d}</div>${ex ? `<div class="lx">${ex}</div>` : ''}</div></div>`;
}

function profile(spot, approach) {
  const [k, name, sub] = spot.type;
  const kv = find(spot.blocks, 'kv');
  const rest = spot.blocks.filter((b) => b !== kv);
  return `<div class="prof" style="--c:${TYPES[k]}">
    <div class="profhead"><span class="pdot"></span><div class="pname">${name}</div><div class="psub">${sub}</div></div>
    <div class="profkv">${block(kv)}</div>
    <div class="profcols">
      <div><div class="colh">${spot.h}</div>${blocks(rest)}</div>
      <div><div class="colh">${approach.h}</div>${blocks(approach.blocks)}</div>
    </div>
  </div>`;
}

function step(pg) {
  return `<div class="step"><div class="stepn">${pg.step}</div><div class="stepb"><div class="stept">${pg.h}<span>${pg.sub}</span></div>${blocks(pg.blocks)}</div></div>`;
}

function objRow(o, i) {
  const [q, ans] = o.obj;
  return `<tr><th><span class="on">${String(i).padStart(2, '0')}</span>„${q}“</th><td>${ans.map((a) => `<div class="oa">${a}</div>`).join('')}</td></tr>`;
}

function buildLang(lang) {
  const u = UI[lang.key];
  const [s1, s2, s3, s4, s5, s6] = lang.sections;
  const startPages = {};

  // Part opener
  pageNo += 1;
  const partPageIdx = out.length;
  out.push(null);

  // 01 Mindset
  startPages[s1.num] = pageNo + 1;
  {
    const [frame, rules, adv] = s1.pages;
    page(lang, s1.title, `${secHead(s1)}
      <div class="cols2">
        <div>${h2(frame.h)}${blocks(frame.blocks)}</div>
        <div>${h2(rules.h)}${blocks(rules.blocks)}</div>
      </div>
      <div class="panel">${h2(adv.h)}${block(adv.blocks[0])}<div class="cols3 tight">${adv.blocks[1].ul.map((x) => `<div class="mini">${x}</div>`).join('')}</div>${block(adv.blocks[2])}</div>`);
  }

  // 02 Psychology
  startPages[s2.num] = pageNo + 1;
  {
    const [brains, l1, l2, l3, formula] = s2.pages;
    page(lang, s2.title, `${secHead(s2)}
      ${h2(brains.h)}${blocks(brains.blocks)}
      <div class="panel dark">${h2(formula.h)}${blocks(formula.blocks)}</div>`);
    const levers = [...l1.blocks, ...l2.blocks, ...l3.blocks].map((b) => b.lever);
    page(lang, s2.title, `${h2(u.levers, u.leversLead)}<div class="levgrid">${levers.map(lever).join('')}</div>`);
  }

  // 03 Colour types
  startPages[s3.num] = pageNo + 1;
  {
    const [intro, ...rest] = s3.pages;
    const cheat = rest.pop();
    const t = find(intro.blocks, 'types').types;
    const cell = (c, idx) => {
      const [k, name, sub] = c;
      const spot = rest[idx * 2];
      const wants = spot.blocks[0].kv[0][1];
      return `<div class="tc" style="--c:${TYPES[k]}"><div class="tch"><span class="pdot"></span>${name}</div><div class="tcs">${sub}</div><div class="tcw">${wants}</div></div>`;
    };
    // map cells order: red, yellow, blue, purple ; profiles order: red, yellow, purple, blue
    const order = { red: 0, yellow: 1, purple: 2, blue: 3 };
    page(lang, s3.title, `${secHead(s3)}
      ${h2(intro.h)}${block(intro.blocks[0])}
      <div class="tmap">
        <div class="ay">${t.axisY[0]}</div>${cell(t.cells[0], order[t.cells[0][0]])}${cell(t.cells[1], order[t.cells[1][0]])}
        <div class="ay">${t.axisY[1]}</div>${cell(t.cells[2], order[t.cells[2][0]])}${cell(t.cells[3], order[t.cells[3][0]])}
        <div></div><div class="ax">${t.axisX[0]}</div><div class="ax">${t.axisX[1]}</div>
      </div>
      ${block(intro.blocks[2])}
      ${h2(cheat.h)}${blocks(cheat.blocks)}`);
    page(lang, s3.title, `${h2(u.profiles)}${profile(rest[0], rest[1])}${profile(rest[2], rest[3])}`);
    page(lang, s3.title, `${h2(u.profiles)}${profile(rest[4], rest[5])}${profile(rest[6], rest[7])}`);
  }

  // 04 Call
  startPages[s4.num] = pageNo + 1;
  {
    const steps = s4.pages.filter((p) => p.step);
    const sig = s4.pages.find((p) => !p.step);
    page(lang, s4.title, `${secHead(s4)}<div class="steps">${steps.slice(0, 3).map(step).join('')}</div>`);
    page(lang, s4.title, `<div class="steps">${steps.slice(3).map(step).join('')}</div><div class="panel">${h2(sig.h)}${blocks(sig.blocks)}</div>`);
  }

  // 05 Objections
  startPages[s5.num] = pageNo + 1;
  {
    const [formula, ...rest] = s5.pages;
    const boundary = rest.pop();
    const objs = rest.flatMap((p) => p.blocks.filter((b) => b.obj));
    const notes = rest.flatMap((p) => p.blocks.filter((b) => b.note));
    const head = `<thead><tr><th>${u.no}</th><th>${u.answer}</th></tr></thead>`;
    page(lang, s5.title, `${secHead(s5)}${h2(formula.h)}${blocks(formula.blocks)}
      ${h2(u.objections)}<table class="obj">${head}<tbody>${objs.slice(0, 5).map((o, i) => objRow(o, i + 1)).join('')}</tbody></table>`);
    page(lang, s5.title, `<table class="obj">${head}<tbody>${objs.slice(5).map((o, i) => objRow(o, i + 6)).join('')}</tbody></table>${blocks(notes)}
      <div class="panel warn">${h2(boundary.h)}${blocks(boundary.blocks)}</div>`);
  }

  // 06 Charm
  startPages[s6.num] = pageNo + 1;
  {
    const [flirt, formula, voice, ritual, maths, cheat] = s6.pages;
    page(lang, s6.title, `${secHead(s6)}${h2(flirt.h)}${blocks(flirt.blocks)}
      <div class="panel dark">${h2(formula.h)}${blocks(formula.blocks)}</div>
      ${h2(voice.h)}${blocks(voice.blocks)}`);
    page(lang, s6.title, `<div class="cols2">
        <div>${h2(ritual.h)}${blocks(ritual.blocks)}</div>
        <div class="panel">${h2(maths.h)}${blocks(maths.blocks)}</div>
      </div>
      <div class="cheat">${h2(cheat.h)}${blocks(cheat.blocks)}</div>`);
  }

  // fill part opener
  out[partPageIdx] = `<section class="page part">
    <div class="partinner">
      <div class="partk">${lang.part}</div>
      <div class="partt">${lang.lang}</div>
      <div class="partov">${u.overview}</div>
      ${lang.sections.map((s) => `<div class="partrow"><span class="prn">${s.num}</span><span class="prt">${s.title}<em>${s.lead.replace('<br>', ' ')}</em></span><span class="prp">${startPages[s.num]}</span></div>`).join('')}
    </div>
    <footer class="run light"><span>${lang.lang}</span><span>${partPageIdx + 3}</span></footer>
  </section>`;
  return startPages;
}

de.key = 'de'; en.key = 'en';
pageNo = 2; // cover + contents
const deStart = buildLang(de);
const deFirst = 3;
const enFirst = pageNo + 1;
const enStart = buildLang(en);
// fix part page numbers (index-based footer above assumed contiguous)
out.forEach((p, i) => { if (p.includes('class="page part"')) out[i] = p.replace(/<span>\d+<\/span>\s*<\/footer>/, `<span>${i + 3}</span></footer>`); });

const cover = `<section class="page cover">
  <div class="cbar"><i style="background:${TYPES.red}"></i><i style="background:${TYPES.yellow}"></i><i style="background:${TYPES.purple}"></i><i style="background:${TYPES.blue}"></i></div>
  <div class="cinner">
    <div class="ck">Cold Call Leitfaden · Playbook</div>
    <div class="ctitle">Top 0,1 %</div>
    <div class="crule"></div>
    <div class="csub">${UI.de.sub}</div>
    <div class="csub en">${UI.en.sub}</div>
  </div>
  <div class="cfoot"><span>Deutsch · English</span><span>Ausgabe 2026</span></div>
</section>`;

const tocCol = (lang, start, first) => `<div class="tocc"><div class="tock">${lang.part}</div><div class="tocl">${lang.lang}</div>
  ${lang.sections.map((s) => `<div class="tocrow"><span class="tn">${s.num}</span><span class="tt">${s.title}</span><span class="tp">${start[s.num]}</span></div>`).join('')}</div>`;
const contents = `<section class="page">
  <header class="run"><span><b>Cold Call Leitfaden</b> · Top 0,1 %</span><span>Inhalt · Contents</span></header>
  <div class="content">
    <h1 class="toch">Inhalt <span>· Contents</span></h1>
    <div class="cols2 toc">${tocCol(de, deStart, deFirst)}${tocCol(en, enStart, enFirst)}</div>
    <div class="panel legend">
      <div class="legh">So liest du diesen Leitfaden · How to read this playbook</div>
      <div class="cols3 tight">
        <div><div class="say small">Wörtliche Formulierungen für den Call</div><div class="legd">Script lines to say on the call</div></div>
        <div><blockquote class="small">Haltung und Leitsätze</blockquote><div class="legd">Mindset and principles</div></div>
        <div><div class="legdots"><i style="background:${TYPES.red}"></i><i style="background:${TYPES.yellow}"></i><i style="background:${TYPES.purple}"></i><i style="background:${TYPES.blue}"></i></div><div class="legd">Rot · Gelb · Lila · Blau<br>Red · Yellow · Purple · Blue</div></div>
      </div>
    </div>
  </div>
  <footer class="run"><span>Deutsch · English</span><span>2</span></footer>
</section>`;

const css = fs.readFileSync(path.join(__dirname, 'style-pro.css'), 'utf8');
const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Cold Call Leitfaden – Top 0,1 %</title><style>${css}</style></head><body>${cover}${contents}${out.join('\n')}</body></html>`;
const htmlPath = path.join(__dirname, 'leitfaden-pro.html');
fs.writeFileSync(htmlPath, html);

(async () => {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  await pg.goto('file://' + htmlPath);
  await pg.evaluate(() => document.fonts.ready);
  const over = await pg.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => {
    const c = p.querySelector('.content');
    if (!c) return null;
    return c.scrollHeight > c.clientHeight + 1 ? `page ${i + 1}: +${c.scrollHeight - c.clientHeight}px` : null;
  }).filter(Boolean));
  const free = await pg.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => {
    const c = p.querySelector('.content'); if (!c) return null;
    const last = [...c.children].pop(); if (!last) return null;
    return `${i + 1}:${Math.round(c.getBoundingClientRect().bottom - last.getBoundingClientRect().bottom)}`;
  }).filter(Boolean));
  console.log(over.length ? 'OVERFLOW ' + over.join('; ') : 'no overflow');
  console.log('free px per page', free.join(' '));
  const file = path.join(__dirname, 'Cold-Call-Leitfaden-Professional.pdf');
  await pg.pdf({ path: file, format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
  console.log('pages', pageNo, file);
})();
