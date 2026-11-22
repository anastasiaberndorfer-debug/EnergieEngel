// Builds leitfaden.html and Cold-Call-Leitfaden.pdf (A5) from content.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { de, en, TYPES } = require('./content');

const esc = (s) => s; // content is trusted, authored HTML

function block(b) {
  if (b.p) return `<p>${b.p}</p>`;
  if (b.label) return `<div class="label">${b.label}</div>`;
  if (b.quote) return `<blockquote>${b.quote}</blockquote>`;
  if (b.note) return `<div class="note">${b.note}</div>`;
  if (b.say) return `<div class="say">${b.say}</div>`;
  if (b.ul) return `<ul>${b.ul.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol class="rules">${b.ol.map((x, i) => `<li><span class="n">${i + 1}</span><span>${x}</span></li>`).join('')}</ol>`;
  if (b.qs) return `<ol class="qs">${b.qs.map((x) => `<li>${x}</li>`).join('')}</ol>`;
  if (b.check) return `<ul class="check">${b.check.map((x) => `<li><i></i>${x}</li>`).join('')}</ul>`;
  if (b.table) return `<table><thead><tr>${b.table.head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  if (b.kv) return `<dl class="kv">${b.kv.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
  if (b.formula) return `<div class="formula">${b.formula}</div>`;
  if (b.lever) {
    const [n, t, d, ex] = b.lever;
    return `<div class="lever"><span class="ln">${n}</span><div><div class="lt">${t}</div><div class="ld">${d}</div>${ex ? `<div class="lx">${ex}</div>` : ''}</div></div>`;
  }
  if (b.steps3) return `<div class="steps3">${b.steps3.map(([t, d], i) => `<div class="s"><span class="sn">${i + 1}</span><div><div class="st">${t}</div><div class="sd">${d}</div></div></div>`).join('')}</div>`;
  if (b.obj) {
    const [o, ans] = b.obj;
    return `<div class="obj"><div class="oq">„${o}“</div>${ans.map((a) => `<div class="oa">${a}</div>`).join('')}</div>`;
  }
  if (b.sig) return `<div class="sig">${b.sig.map(([s, m]) => `<div class="sr"><div class="ss">${s}</div><div class="sm">${m}</div></div>`).join('')}</div>`;
  if (b.dodont) return `<div class="dd"><div class="ddh do">${b.labels[0]}</div><div class="ddh dont">${b.labels[1]}</div>${b.dodont.map(([a, c]) => `<div class="ddc do">${a}</div><div class="ddc dont">${c}</div>`).join('')}</div>`;
  if (b.trio) return `<div class="trio">${b.trio.map(([w, d]) => `<div><div class="tw">${w}</div><div class="td">${d}</div></div>`).join('')}</div>`;
  if (b.types) {
    const t = b.types;
    const cell = ([k, name, sub]) => `<div class="tc" style="--c:${TYPES[k]}"><i class="dot ${k}"></i><div class="tn">${name}</div><div class="ts">${sub}</div></div>`;
    return `<div class="tmap"><div class="ay">${t.axisY[0]}</div>${cell(t.cells[0])}${cell(t.cells[1])}<div class="ay">${t.axisY[1]}</div>${cell(t.cells[2])}${cell(t.cells[3])}<div></div><div class="ax">${t.axisX[0]}</div><div class="ax">${t.axisX[1]}</div></div>`;
  }
  throw new Error('Unknown block ' + JSON.stringify(b));
}

let pageNo = 0;
const pages = [];
const toc = [];

function footer(label) {
  pageNo += 1;
  return `<div class="foot"><span>${label}</span><span>${pageNo}</span></div>`;
}

function contentPage(lang, sec, pg) {
  let head = '';
  if (pg.type) {
    const [k, name, sub] = pg.type;
    head = `<div class="typehead" style="--c:${TYPES[k]}"><i class="dot ${k} big"></i><div><div class="tyn">${name}</div><div class="tys">${sub}</div></div></div><h3 class="sm">${pg.h}</h3>`;
  } else if (pg.step) {
    head = `<div class="stephead"><span class="stepn">${pg.step}</span><div><h3>${pg.h}</h3><div class="sub">${pg.sub}</div></div></div>`;
  } else {
    head = `<h3>${pg.h}</h3>`;
  }
  return `<section class="page"><div class="kicker">${sec.num} · ${sec.title}</div>${head}<div class="body">${pg.blocks.map(block).join('')}</div>${footer(lang.lang)}</section>`;
}

function build(lang) {
  pages.push(`<section class="page part"><div class="partk">${lang.part}</div><div class="partt">${lang.lang}</div>${footer(lang.lang)}</section>`);
  const entries = [];
  for (const sec of lang.sections) {
    entries.push([sec.num, sec.title, pageNo + 1]);
    pages.push(`<section class="page divider"><div class="dnum">${sec.num}</div><h2>${sec.title}</h2><div class="dlead">${sec.lead}</div>${footer(lang.lang)}</section>`);
    for (const pg of sec.pages) pages.push(contentPage(lang, sec, pg));
  }
  toc.push([lang, entries]);
}

// cover + contents placeholders (pages 1, 2)
pageNo = 2;
build(de);
build(en);

const cover = `<section class="page cover">
  <div class="ck">Cold Call Leitfaden</div>
  <h1>Top<br>0,1 %</h1>
  <div class="cl">Charmant. Scharf. Unvergesslich.</div>
  <div class="cl en">Charming. Sharp. Unforgettable.</div>
  <div class="cdots"><i class="dot red"></i><i class="dot yellow"></i><i class="dot purple"></i><i class="dot blue"></i></div>
  <div class="cf">Deutsch · English</div>
</section>`;

const contents = `<section class="page contents">
  <h3>Inhalt · Contents</h3>
  ${toc.map(([lang, es]) => `<div class="tocpart">${lang.part} · ${lang.lang}</div>${es.map(([n, t, p]) => `<div class="tocrow"><span class="tn">${n}</span><span class="tt">${t}</span><span class="tp">${p}</span></div>`).join('')}`).join('')}
  <div class="foot"><span></span><span>2</span></div>
</section>`;

const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Cold Call Leitfaden – Top 0,1 %</title><style>${css}</style></head><body>${cover}${contents}${pages.join('\n')}</body></html>`;

const htmlPath = path.join(__dirname, 'leitfaden.html');
fs.writeFileSync(htmlPath, html);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath);
  await page.evaluate(() => document.fonts.ready);
  const over = await page.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => {
    const body = p.querySelector('.body');
    const foot = p.querySelector('.foot');
    if (!body || !foot) return null;
    const gap = foot.getBoundingClientRect().top - body.getBoundingClientRect().bottom;
    return gap < 12 ? `page ${i + 1}: gap ${gap.toFixed(0)}px` : null;
  }).filter(Boolean));
  if (over.length) console.log('OVERFLOW:', over.join('; '));
  const out = path.join(__dirname, 'Cold-Call-Leitfaden.pdf');
  await page.pdf({ path: out, format: 'A5', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
  console.log('pages:', pageNo, 'written', out);
})();
