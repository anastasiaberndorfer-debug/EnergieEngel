const pptxgen = require('pptxgenjs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const fa = require('react-icons/fa');
const { applyTheme } = require('/root/.claude/skills/synced/d5173a6f-70c1-4301-90a9-6d901daa3991_24c6845c-15bd-4ec8-bc42-8ed22e9c6743/pptx/scripts/apply_theme.js');

const OUT = process.argv[2];
const THEME = {
  name: 'Flex Door',
  headFontFace: 'Calibri', bodyFontFace: 'Calibri',
  colors: {
    dk1: '16262E', lt1: 'FFFFFF', dk2: '0E3440', lt2: 'EEF4F4',
    accent1: 'F5B935', accent2: '2FB38A', accent3: '0E3440', accent4: '6C7C84',
    accent5: 'D9EFE7', accent6: 'FFF1CC', hlink: '0E3440', folHlink: '6C7C84',
  },
};

async function icon(Comp, hex, size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, { color: '#' + hex, size }));
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

(async () => {
  const pres = new pptxgen();
  pres.defineLayout({ name: 'IPAD', width: 10, height: 7.5 });
  pres.layout = 'IPAD';
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.title = 'FLEXENERGY – Energie zum echten Marktpreis';
  const C = pres.SchemeColor;

  pres.defineSlideMaster({
    title: 'Pitch',
    background: { color: C.background1 },
    objects: [],
  });

  pres.addSection({ title: 'Pitch' });
  const s = pres.addSlide({ masterName: 'Pitch', sectionTitle: 'Pitch' });

  // Header
  s.addText('FLEXENERGY', { x: 0.5, y: 0.35, w: 4, h: 0.3, fontSize: 11, bold: true, charSpacing: 4, color: C.accent2, margin: 0, isTextBox: true, objectName: 'Brand' });
  s.addText('Strom & Gas zum echten Marktpreis', { x: 0.5, y: 0.65, w: 9, h: 0.7, fontSize: 36, bold: true, color: C.text2, margin: 0, isTextBox: true, objectName: 'Title' });
  s.addText('Sie zahlen, was Energie gerade wirklich kostet – nicht, was jemand vor Jahren festgelegt hat.', { x: 0.5, y: 1.35, w: 9, h: 0.45, fontSize: 15, color: C.accent4, margin: 0, isTextBox: true, objectName: 'Subtitle' });

  // Concept equation on dark panel
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.05, w: 9, h: 1.85, fill: { color: C.text2 }, line: { type: 'none' }, rectRadius: 0.15, objectName: 'Concept panel' });
  s.addText('SO FUNKTIONIERT’S', { x: 0.8, y: 2.2, w: 4, h: 0.3, fontSize: 10, bold: true, charSpacing: 3, color: C.accent1, margin: 0, isTextBox: true, objectName: 'Concept label' });
  const parts = [
    [fa.FaChartLine, 'Marktpreis', 'jeden Monat neu'],
    [fa.FaLock, 'Service', 'Pauschale, fix pro kWh'],
    [fa.FaCalendarAlt, 'Grundgebühr', 'fix pro Monat'],
    [fa.FaBolt, 'Ihr Preis', 'fair & nachvollziehbar'],
  ];
  const ops = ['+', '+', '='];
  const bw = 1.75, gap = 0.45, x0 = 0.8, yb = 2.6;
  for (let i = 0; i < parts.length; i++) {
    const [Ic, t, sub] = parts[i];
    const x = x0 + i * (bw + gap);
    const last = i === parts.length - 1;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: yb, w: bw, h: 1.1, fill: { color: last ? C.accent1 : C.background1, transparency: last ? 0 : 88 }, line: { type: 'none' }, rectRadius: 0.1, objectName: `Concept box ${i + 1}` });
    s.addImage({ data: await icon(Ic, last ? THEME.colors.dk2 : THEME.colors.accent1), x: x + 0.15, y: yb + 0.17, w: 0.32, h: 0.32, altText: t, objectName: `Concept icon ${i + 1}` });
    s.addText(t, { x: x + 0.55, y: yb + 0.12, w: bw - 0.6, h: 0.42, fontSize: 14, bold: true, color: last ? C.text2 : C.background1, margin: 0, valign: 'middle', isTextBox: true, objectName: `Concept title ${i + 1}` });
    s.addText(sub, { x: x + 0.15, y: yb + 0.6, w: bw - 0.25, h: 0.36, fontSize: 12, color: last ? C.text2 : 'CFE0E4', margin: 0, isTextBox: true, objectName: `Concept sub ${i + 1}` });
    if (i < ops.length) s.addText(ops[i], { x: x + bw, y: yb + 0.3, w: gap, h: 0.5, fontSize: 24, bold: true, color: C.accent1, align: 'center', margin: 0, isTextBox: true, objectName: `Concept op ${i + 1}` });
  }

  // Why us: three pillars
  s.addText('WARUM FLEXENERGY', { x: 0.5, y: 4.15, w: 4, h: 0.3, fontSize: 10, bold: true, charSpacing: 3, color: C.accent2, margin: 0, isTextBox: true, objectName: 'Why label' });
  const why = [
    [fa.FaArrowDown, 'Fällt der Markt, sparen Sie', 'Preissenkungen kommen direkt bei Ihnen an.'],
    [fa.FaUnlock, 'Keine lange Bindung', 'Flexibel bleiben statt jahrelang festsitzen.'],
    [fa.FaHandshake, 'Persönlich & einfach', 'Beratung an Ihrer Tür, Wechsel unkompliziert.'],
  ];
  const cw = 2.84, cg = 0.24;
  for (let i = 0; i < why.length; i++) {
    const [Ic, t, d] = why[i];
    const x = 0.5 + i * (cw + cg);
    s.addShape(pres.shapes.OVAL, { x, y: 4.6, w: 0.55, h: 0.55, fill: { color: C.accent5 }, line: { type: 'none' }, objectName: `Why circle ${i + 1}` });
    s.addImage({ data: await icon(Ic, THEME.colors.accent2), x: x + 0.14, y: 4.74, w: 0.27, h: 0.27, altText: t, objectName: `Why icon ${i + 1}` });
    s.addText(t, { x: x + 0.7, y: 4.55, w: cw - 0.75, h: 0.65, fontSize: 14, bold: true, color: C.text2, margin: 0, valign: 'middle', isTextBox: true, objectName: `Why title ${i + 1}` });
    s.addText(d, { x, y: 5.25, w: cw - 0.1, h: 0.5, fontSize: 12, color: C.accent4, margin: 0, isTextBox: true, objectName: `Why text ${i + 1}` });
  }

  // Audience: two tiles
  const aud = [
    [fa.FaHome, 'Für Ihr Zuhause', 'Strom & Gas aus einer Hand – fair abgerechnet, ohne lange Vertragsbindung.'],
    [fa.FaUtensils, 'Für Ihre Gastronomie', 'Hoher Verbrauch, großer Hebel: günstige Marktphasen wirken direkt auf Ihre Rechnung.'],
  ];
  const aw = 4.38;
  for (let i = 0; i < aud.length; i++) {
    const [Ic, t, d] = aud[i];
    const x = 0.5 + i * (aw + 0.24);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 5.95, w: aw, h: 1.15, fill: { color: i === 0 ? C.background2 : C.accent6 }, line: { type: 'none' }, rectRadius: 0.12, objectName: `Audience tile ${i + 1}` });
    s.addImage({ data: await icon(Ic, THEME.colors.dk2), x: x + 0.22, y: 6.15, w: 0.38, h: 0.38, altText: t, objectName: `Audience icon ${i + 1}` });
    s.addText(t, { x: x + 0.75, y: 6.1, w: aw - 0.95, h: 0.4, fontSize: 15, bold: true, color: C.text2, margin: 0, valign: 'middle', isTextBox: true, objectName: `Audience title ${i + 1}` });
    s.addText(d, { x: x + 0.75, y: 6.5, w: aw - 0.95, h: 0.5, fontSize: 12, color: C.text1, margin: 0, isTextBox: true, objectName: `Audience text ${i + 1}` });
  }

  s.addNotes([
    '30-Sekunden-Pitch:',
    'Die meisten zahlen einen Preis, der irgendwann festgelegt wurde – egal, was Energie heute kostet. Bei uns zahlen Sie den echten Marktpreis plus eine fixe Servicepauschale und eine Grundgebühr. Fällt der Markt, sparen Sie sofort. Und Sie sind nicht jahrelang gebunden.',
    '',
    'Einwand „Und wenn der Preis steigt?“',
    'Ehrlich: Dann steigt auch Ihr Preis. Dafür sind Sie nicht gebunden und zahlen nie einen Risikoaufschlag, den Fixpreis-Anbieter einpreisen. Wollen wir uns Ihre letzte Jahresabrechnung kurz gemeinsam anschauen?',
  ].join('\n'));

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('written', OUT);
})();
