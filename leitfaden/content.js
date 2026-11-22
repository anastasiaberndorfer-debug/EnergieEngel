// Content for the cold call guide. Each language: sections -> pages -> blocks.
// Block types: p, ul, ol, say (script line), quote, table, note, types (2x2 map), type (colour header)

const TYPES = {
  red: '#D9534F', yellow: '#E8B13A', purple: '#7B5EA7', blue: '#3B7DD8',
};

const de = {
  lang: 'Deutsch',
  part: 'Teil 1',
  sections: [
    {
      num: '01', title: 'Mindset', lead: 'Du rufst nicht an.<br>Du lädst ein.',
      pages: [
        { h: 'Der Rahmen', blocks: [
          { p: 'Die Top 0,1 % verkaufen nicht mehr, weil sie mehr reden. Sie verkaufen mehr, weil sie <b>den Rahmen setzen</b>: ruhig, neugierig, ein bisschen verspielt – und jederzeit bereit, aufzulegen.' },
          { label: 'Deine Identität für jeden Call' },
          { quote: 'Ich bin die interessanteste Unterbrechung in seinem Tag. Ich bringe etwas mit – ich will nichts.' },
        ]},
        { h: 'Die 5 Grundgesetze', blocks: [
          { ol: [
            '<b>Status-Gleichheit.</b> Du bist keine Bittstellerin. Du prüfst, ob es passt.',
            '<b>Detachment.</b> Ein Nein kostet dich nichts. Diese Ruhe zieht an.',
            '<b>Neugier vor Pitch.</b> 70 % zuhören, 30 % reden. Wer fragt, führt.',
            '<b>Emotion entscheidet, Logik rechtfertigt.</b> Erst das Gefühl, dann die Zahlen.',
            '<b>Nie betteln, nie drängeln.</b> Druck erzeugt Widerstand. Sog erzeugt Ja.',
          ]},
        ]},
        { h: 'Dein unfairer Vorteil', blocks: [
          { p: 'Viele unterschätzen dich in den ersten 10 Sekunden. <b>Perfekt.</b> Unterschätzung senkt die Abwehr – dann bist du schärfer als erwartet.' },
          { ul: [
            '<b>Wärme + Kompetenz</b> – Lächeln in der Stimme, Fakten im Kopf.',
            '<b>Leichtigkeit</b> öffnet Türen, die Hartnäckigkeit verschließt.',
            '<b>Charme ist Präsenz</b> – warm, aber nie verfügbar.',
          ]},
          { quote: 'Nicht süß sein, um zu gefallen. Charmant sein, weil du die Kontrolle hast.' },
        ]},
      ],
    },
    {
      num: '02', title: 'Kaufpsychologie', lead: 'Menschen kaufen keine Produkte.<br>Sie kaufen einen besseren Zustand von sich selbst.',
      pages: [
        { h: 'Die 3 Gehirne', blocks: [
          { p: 'Entschieden wird in Millisekunden – vom alten Gehirn. Die Begründung liefert das neue Gehirn nach.' },
          { table: { head: ['Gehirn', 'Fragt sich', 'Du lieferst'], rows: [
            ['<b>Reptil</b>', 'Ist das gefährlich?', 'Sicherheit, Ruhe, Kontrolle'],
            ['<b>Limbisch</b>', 'Mag ich sie?', 'Wärme, Humor, „sie versteht mich“'],
            ['<b>Neokortex</b>', 'Ergibt das Sinn?', 'Zahlen, Beispiele, nächster Schritt'],
          ]}},
          { note: 'Reihenfolge ist alles: <b>Sicherheit → Sympathie → Logik.</b>' },
        ]},
        { h: 'Die 12 Hebel · 1–4', blocks: [
          { lever: ['01', 'Verlustangst', 'Verlust schmerzt doppelt so stark wie Gewinn freut.', '„Gerade fließen jeden Monat ein paar Hundert Euro einfach raus.“'] },
          { lever: ['02', 'Neugier-Lücke', 'Das Gehirn hasst offene Schleifen.', '„Mir ist bei Firmen wie Ihrer etwas aufgefallen – 20 Sekunden?“'] },
          { lever: ['03', 'Mikro-Ja', 'Drei kleine Ja machen das große Ja leicht.'] },
          { lever: ['04', 'Reziprozität', 'Gib zuerst: eine Erkenntnis, eine Zahl, einen Tipp.'] },
        ]},
        { h: 'Die 12 Hebel · 5–8', blocks: [
          { lever: ['05', 'Social Proof', 'Menschen folgen Menschen, die ihnen ähnlich sind.', '„Drei Betriebe hier in der Region hatten genau dieselbe Frage.“'] },
          { lever: ['06', 'Spezifität', '„17 %“ schlägt „viel“. Details wirken kompetent.'] },
          { lever: ['07', 'Kontrolle zurückgeben', 'Wer die Freiheit bekommt, bleibt.', '„Sie können jederzeit Nein sagen – völlig okay.“'] },
          { lever: ['08', 'Labeling', 'Benannte Gefühle verlieren ihre Kraft.', '„Klingt, als hätten Sie schon schlechte Erfahrungen gemacht.“'] },
        ]},
        { h: 'Die 12 Hebel · 9–12', blocks: [
          { lever: ['09', 'Mirroring', 'Wiederhole seine letzten Worte als Frage.', '„… zu teuer?“'] },
          { lever: ['10', 'Knappheit', 'Nur wenn sie echt ist – sonst ist das Vertrauen weg.'] },
          { lever: ['11', 'Zukunftsbild', 'Lass ihn das Ergebnis sehen.', '„Stellen Sie sich vor, in sechs Monaten …“'] },
          { lever: ['12', 'Pattern Interrupt', 'Sag, was niemand sagt – und er hört zu.'] },
        ]},
        { h: 'Die geheime Formel', blocks: [
          { formula: 'Schmerz × Dringlichkeit × Vertrauen<br><span>= Kaufbereitschaft</span>' },
          { p: 'Fehlt ein Faktor, ist das Ergebnis null. Deine Fragen finden den Schmerz, dein Timing schafft Dringlichkeit, deine Art baut Vertrauen.' },
          { quote: 'Die Cheat-Codes wirken stärker, je ehrlicher du sie einsetzt. Manipulation fliegt beim zweiten Call auf – echter Einfluss bringt Empfehlungen.' },
        ]},
      ],
    },
    {
      num: '03', title: 'Die 4 Farbtypen', lead: 'Triffst du seine Farbe, fühlt er sich verstanden.<br>Verfehlst du sie, fühlt er sich verkauft.',
      pages: [
        { h: 'Zwei Fragen verraten alles', blocks: [
          { p: 'Ist er <b>schnell oder bedächtig</b>? Geht es ihm um <b>Sache oder Menschen</b>?' },
          { types: { axisY: ['schnell', 'ruhig'], axisX: ['Sache', 'Menschen'], cells: [
            ['red', 'Rot', 'Der Macher'], ['yellow', 'Gelb', 'Der Strahlende'],
            ['blue', 'Blau', 'Der Analytiker'], ['purple', 'Lila', 'Der Bewahrer'],
          ]}},
          { note: 'Die meisten sind eine Mischung – achte auf die dominante Farbe.' },
        ]},
        { type: ['red', 'Rot', 'Der Macher'], h: 'Erkennen', blocks: [
          { kv: [['Will', 'Ergebnis, Kontrolle, Tempo'], ['Angst', 'Zeitverschwendung, Kontrollverlust']] },
          { label: 'Am Telefon' },
          { p: 'Nimmt mit Nachnamen ab, kurz und laut. „Ja? Worum geht’s?“ Unterbricht dich.' },
          { label: 'Auf den ersten Blick' },
          { p: 'Fester Blick, klare Kleidung, Statussymbole, Titel wie CEO oder Inhaber.' },
        ]},
        { type: ['red', 'Rot', 'Der Macher'], h: 'Ansprechen', blocks: [
          { p: 'In 10 Sekunden auf den Punkt. Ergebnis zuerst. Gib ihm die Wahl.' },
          { say: 'Ich mach’s kurz, weil Sie’s eilig haben: Es geht um X Euro im Jahr. Interessant oder nicht?' },
          { kv: [['Flirt', 'Selbstbewusst-frech: „Sie sind schnell – ich mag das.“'], ['Never', 'Smalltalk, Zögern, Entschuldigen']] },
        ]},
        { type: ['yellow', 'Gelb', 'Der Strahlende'], h: 'Erkennen', blocks: [
          { kv: [['Will', 'Spaß, Anerkennung, Neues'], ['Angst', 'Langeweile, Ablehnung']] },
          { label: 'Am Telefon' },
          { p: 'Warm, laut, lacht schnell, erzählt Geschichten, schweift ab.' },
          { label: 'Auf den ersten Blick' },
          { p: 'Bunte Kleidung, offene Gesten, viele Fotos und Emojis online.' },
        ]},
        { type: ['yellow', 'Gelb', 'Der Strahlende'], h: 'Ansprechen', blocks: [
          { p: 'Energie spiegeln, Geschichten erzählen, Vision malen. Er kauft dich vor dem Produkt.' },
          { say: 'Sie sind genau der Typ, der sowas als Erster in der Branche macht.' },
          { kv: [['Flirt', 'Verspielt und herzlich – lachen, seine Ideen loben'], ['Never', 'Trocken, zahlenlastig. Und: Termin festnageln!']] },
        ]},
        { type: ['purple', 'Lila', 'Der Bewahrer'], h: 'Erkennen', blocks: [
          { kv: [['Will', 'Harmonie, Sicherheit, Vertrauen'], ['Angst', 'Konflikt, Veränderung, Fehler']] },
          { label: 'Am Telefon' },
          { p: 'Ruhig, höflich, langsam. „Eigentlich …“, „mal schauen“, „muss ich mit dem Team besprechen“.' },
          { label: 'Auf den ersten Blick' },
          { p: 'Sanftes Lächeln, gedeckte Farben, Team- oder Familienfotos, lange im selben Job.' },
        ]},
        { type: ['purple', 'Lila', 'Der Bewahrer'], h: 'Ansprechen', blocks: [
          { p: 'Tempo raus, Wärme rein. Sicherheit betonen. Zeit geben – aber mit festem Termin.' },
          { say: 'Kein Stress, wir gehen das ganz in Ruhe durch. Sie sollen ein gutes Gefühl haben.' },
          { kv: [['Flirt', 'Fürsorglich und sanft – echtes Interesse'], ['Never', 'Druck. Sonst verschwindet er höflich – für immer.']] },
        ]},
        { type: ['blue', 'Blau', 'Der Analytiker'], h: 'Erkennen', blocks: [
          { kv: [['Will', 'Präzision, Fakten, Qualität'], ['Angst', 'Fehler, Unklarheit, übers Ohr gehauen werden']] },
          { label: 'Am Telefon' },
          { p: 'Sachlich, leise, Pausen. „Wie genau berechnen Sie das?“' },
          { label: 'Auf den ersten Blick' },
          { p: 'Ordentlich, neutral, wenig Mimik. Controller, Ingenieur, IT, Einkauf.' },
        ]},
        { type: ['blue', 'Blau', 'Der Analytiker'], h: 'Ansprechen', blocks: [
          { p: 'Struktur und Beweise. Schritt für Schritt. Unterlagen zum Prüfen – und Zeit.' },
          { say: 'Ich schicke Ihnen die Rechnung, dann können Sie jede Zahl selbst prüfen.' },
          { kv: [['Flirt', 'Minimal – dein Charme ist Präzision'], ['Never', 'Übertreiben, „Vertrauen Sie mir einfach“']] },
        ]},
        { h: 'Spickzettel', blocks: [
          { table: { head: ['Farbe', 'Kauft, wenn …', 'Dein Ton'], rows: [
            ['<i class="dot red"></i>Rot', 'er gewinnt und entscheidet', 'direkt, kurz'],
            ['<i class="dot yellow"></i>Gelb', 'es aufregend ist', 'warm, verspielt'],
            ['<i class="dot purple"></i>Lila', 'es sich sicher anfühlt', 'sanft, geduldig'],
            ['<i class="dot blue"></i>Blau', 'es bewiesen ist', 'sachlich, präzise'],
          ]}},
        ]},
      ],
    },
    {
      num: '04', title: 'Der Call', lead: 'Das Ziel ist nicht der Abschluss.<br>Das Ziel ist der nächste Schritt.',
      pages: [
        { step: '1', h: 'Der Opener', sub: '0–10 Sekunden · Pattern Interrupt', blocks: [
          { say: 'Hi Herr Müller, hier ist [Name]. Ganz ehrlich: Das ist ein Kaltanruf. Wollen Sie direkt auflegen – oder geben Sie mir 30 Sekunden?' },
          { p: 'Ehrlichkeit bricht das Muster, er bekommt Kontrolle. Fast jeder sagt: „Na gut.“' },
          { label: 'Charmante Variante' },
          { say: 'Sie kennen mich nicht – noch nicht. Hab ich Sie mitten in etwas Wichtigem erwischt?' },
        ]},
        { step: '2', h: 'Der Grund', sub: '10–30 Sekunden · Neugier-Lücke', blocks: [
          { say: 'Ich spreche gerade mit [Branche] hier in der Region, weil uns bei fast allen dasselbe aufgefallen ist: [Problem]. Ich weiß nicht, ob das bei Ihnen auch so ist – deshalb rufe ich an.' },
          { note: 'Kein Produkt nennen. Nur das Problem.' },
        ]},
        { step: '3', h: 'Die Fragen', sub: 'bis 3 Minuten · Er redet, du führst', blocks: [
          { qs: [
            'Wie lösen Sie das aktuell?',
            'Was stört Sie daran am meisten?',
            'Wenn Sie einen Zauberstab hätten – was wäre anders?',
            'Was kostet es Sie, wenn sich 12 Monate nichts ändert?',
            'Wer redet bei der Entscheidung noch mit?',
          ]},
        ]},
        { step: '4', h: 'Der Mini-Pitch', sub: '30 Sekunden · Seine Worte, deine Lösung', blocks: [
          { say: 'Sie haben gesagt, [sein Schmerz]. Genau da setzen wir an: [Lösung] – bei [Kunde] waren das [Zahl].' },
          { note: 'Nutze exakt seine Formulierungen. Er widerspricht sich nicht selbst.' },
        ]},
        { step: '5', h: 'Der Test-Close', sub: 'Temperatur messen', blocks: [
          { say: 'Auf einer Skala von 1 bis 10 – wie interessant klingt das?' },
          { p: 'Bei einer 6:' },
          { say: 'Was müsste passieren, damit es eine 9 wird?' },
          { note: 'Er verkauft es sich selbst.' },
        ]},
        { step: '6', h: 'Der Close', sub: 'Die Wahl statt Ja/Nein', blocks: [
          { say: 'Lassen Sie uns 20 Minuten draufschauen. Dienstag Vormittag oder Donnerstag Nachmittag?' },
          { p: '<b>Dann: schweigen.</b> Wer zuerst redet, verliert.' },
          { say: 'Ich schick Ihnen die Einladung. Und wenn was dazwischenkommt – ich bin nicht beleidigt.' },
        ]},
        { h: 'Kaufsignale', blocks: [
          { sig: [
            ['Fragt nach Preis oder Ablauf', 'Er spielt es schon durch.'],
            ['Wird ruhiger, langsamer', 'Er denkt nach. Nicht unterbrechen.'],
            ['Sagt „wir“ statt „Sie“', 'Er sieht sich als Kunde.'],
            ['Erzählt etwas Privates', 'Vertrauen ist da. Jetzt den Termin.'],
          ]},
        ]},
      ],
    },
    {
      num: '05', title: 'Einwände', lead: 'Jedes Nein ist eine Frage<br>in Verkleidung.',
      pages: [
        { h: 'Die Formel: A · F · F', blocks: [
          { p: 'Ein Einwand heißt meist: <i>„Ich hab Angst“</i>, <i>„Ich verstehe es nicht“</i> oder <i>„Ich mag dich noch nicht genug“</i>.' },
          { steps3: [['Anerkennen', '„Verstehe ich total.“ Nie: „Ja, aber …“'], ['Fragen', 'Finde den echten Grund.'], ['Führen', 'Zurück zum kleinsten nächsten Schritt.']] },
        ]},
        { h: 'Einwände · 1–2', blocks: [
          { obj: ['Kein Interesse.', [
            'Verstehe – ich hätte auch kein Interesse an etwas, das ich nicht kenne. Eine Frage, und wenn die Antwort Nein ist, bin ich weg?',
            'Fair. Kein Interesse am Thema – oder an Anrufen wie meinem?',
          ]]},
          { obj: ['Keine Zeit.', [
            'Dann bin ich genau richtig – ich bin die Kurzversion. 27 Sekunden, ich zähle mit.',
            'Wann passt es besser – morgen um 8:15 oder nach dem Mittag?',
          ]]},
        ]},
        { h: 'Einwände · 3–4', blocks: [
          { obj: ['Schicken Sie mir was per Mail.', [
            'Mach ich gern. Was wäre das Wichtigste, das drinstehen sollte?',
            'Ganz ehrlich – höfliches Nein, oder wollen Sie es wirklich lesen? Beides okay.',
          ]]},
          { obj: ['Wir haben schon einen Anbieter.', [
            'Super. Was mögen Sie an denen am meisten – und was würden Sie verbessern?',
            'Wann haben Sie zuletzt geprüft, ob Sie zu viel zahlen?',
          ]]},
        ]},
        { h: 'Einwände · 5–6', blocks: [
          { obj: ['Zu teuer.', [
            'Zu teuer? <span class="hint">(spiegeln – dann schweigen)</span>',
            'Im Vergleich wozu?',
            'Angenommen, es bezahlt sich in sechs Monaten selbst – wäre es dann noch ein Thema?',
          ]]},
          { obj: ['Das muss ich mir überlegen.', [
            'Klar. Was genau – den Preis, den Zeitpunkt oder ob es überhaupt passt?',
          ]]},
        ]},
        { h: 'Einwände · 7–8', blocks: [
          { obj: ['Das entscheide ich nicht allein.', [
            'Wer sitzt noch mit am Tisch – und was ist ihm wichtig?',
            'Legen wir den Termin so, dass er dabei sein kann?',
          ]]},
          { obj: ['Rufen Sie in drei Monaten an.', [
            'Gern. Was ändert sich bei Ihnen in drei Monaten?',
            'Woran erkenne ich dann, dass es wirklich passt? <span class="hint">(Datum eintragen)</span>',
          ]]},
        ]},
        { h: 'Einwände · 9–10', blocks: [
          { obj: ['Woher haben Sie meine Nummer?', [
            'Aus [Quelle]. Wenn Sie nicht angerufen werden möchten, trage ich Sie sofort aus.',
          ]]},
          { obj: ['Wir sind zufrieden.', [
            'Das freut mich. Eher „es läuft“ oder „es könnte nicht besser sein“?',
          ]]},
        ]},
        { h: 'Einwände · 11–12', blocks: [
          { obj: ['Sind Sie so eine Vertriebs-Tante?', [
            'Erwischt. Aber eine von den guten – ich leg auch auf, wenn’s nicht passt. <span class="hint">(lachend)</span>',
          ]]},
          { obj: ['Nein. Tschüss.', [
            'Alles klar, danke für die Ehrlichkeit. Einen schönen Tag noch!',
          ]]},
          { note: 'Ein eleganter Abgang ist dein nächster Einstieg.' },
        ]},
        { h: 'Wenn er unangemessen wird', blocks: [
          { p: 'Charme ist deine Wahl – nicht seine Einladung.' },
          { say: 'Haha, netter Versuch. Zurück zu Ihren Zahlen – die sind spannender.' },
          { say: 'Ich glaube, wir verstehen uns gerade falsch. Ich bin wegen [Thema] hier.' },
          { p: 'Zu viel? Freundlich beenden, dokumentieren, abgeben.' },
          { quote: 'Kein Deal ist deine Würde wert.' },
        ]},
      ],
    },
    {
      num: '06', title: 'Charme & Stimme', lead: 'Am Telefon ist deine Stimme<br>dein ganzes Outfit.',
      pages: [
        { h: 'Professionell flirty', blocks: [
          { dodont: [
            ['Hörbares Lächeln', 'Kichern, Säuseln'],
            ['Seinen Namen 2–3× nutzen', 'Kosenamen – niemals'],
            ['Leichte Neckerei', 'Anspielungen auf Aussehen'],
            ['Ideen & Erfolge loben', 'Ihn als Mann loben'],
            ['Pausen, die Spannung bauen', 'Dauerreden aus Nervosität'],
            ['Grenzen mit Humor', 'Dich klein machen'],
          ], labels: ['Mach das', 'Lass das'] },
        ]},
        { h: 'Die Formel', blocks: [
          { trio: [['Warm', 'wie eine Freundin'], ['Scharf', 'wie eine Beraterin'], ['Unbeeindruckt', 'wie eine Chefin']] },
        ]},
        { h: 'Stimm-Hacks', blocks: [
          { ul: [
            '<b>Steh auf.</b> Die Stimme wird tiefer und sicherer.',
            '<b>Tief am Satzende.</b> Hoch klingt nach Frage.',
            '<b>Langsamer als du denkst.</b> Ruhe ist Status.',
            '<b>Pause nach der Frage.</b> Bis 3 zählen.',
            '<b>Erst spiegeln, dann führen.</b> 30 Sekunden sein Tempo.',
          ]},
        ]},
        { h: '10 Minuten vor dem ersten Call', blocks: [
          { check: [
            'Power-Pose: 2 Minuten aufrecht',
            'Ein Song, der dich unbesiegbar macht',
            'Opener 3× laut: flüsternd, lachend, wie ein Boss',
            'Deine „Warum“-Notiz lesen',
            'Ziel: 15 echte Gespräche – nicht Abschlüsse',
          ]},
        ]},
        { h: 'Die Mathematik der Gelassenheit', blocks: [
          { formula: '1 Nein = <span>1/20 eines Termins</span>' },
          { p: 'Wenn du im Schnitt 20 Wählversuche für einen Termin brauchst, bringt dich jedes Nein näher ans Ja.' },
          { quote: 'Feier die Neins.' },
        ]},
        { h: 'Pocket-Spickzettel', blocks: [
          { kv: [
            ['Opener', 'Ehrlich + Kontrolle zurückgeben'],
            ['Grund', 'Problem, nicht Produkt'],
            ['Fragen', 'Schmerz → Kosten → Entscheider'],
            ['Pitch', 'Seine Worte + eine Zahl'],
            ['Close', 'Zwei Termine, dann schweigen'],
            ['Einwand', 'Anerkennen → Fragen → Führen'],
            ['Farbe', 'Rot kurz · Gelb Spaß · Lila Sicherheit · Blau Beweise'],
          ]},
          { quote: 'Ich brauche diesen Deal nicht. Genau deshalb bekomme ich ihn.' },
        ]},
      ],
    },
  ],
};

const en = {
  lang: 'English',
  part: 'Part 2',
  sections: [
    {
      num: '01', title: 'Mindset', lead: 'You don’t call.<br>You invite.',
      pages: [
        { h: 'The frame', blocks: [
          { p: 'The top 0.1 % don’t sell more because they talk more. They sell more because they <b>set the frame</b>: calm, curious, a little playful – and always ready to hang up.' },
          { label: 'Your identity for every call' },
          { quote: 'I am the most interesting interruption of his day. I bring something – I’m not here to take.' },
        ]},
        { h: 'The 5 ground rules', blocks: [
          { ol: [
            '<b>Equal status.</b> You’re not asking a favour. You’re checking the fit.',
            '<b>Detachment.</b> A no costs you nothing. That calm pulls people in.',
            '<b>Curiosity before pitch.</b> Listen 70 %, talk 30 %. Whoever asks, leads.',
            '<b>Emotion decides, logic justifies.</b> Feeling first, numbers second.',
            '<b>Never beg, never push.</b> Pressure creates resistance. Pull creates yes.',
          ]},
        ]},
        { h: 'Your unfair advantage', blocks: [
          { p: 'Many people underestimate you in the first 10 seconds. <b>Perfect.</b> It lowers their guard – then you’re sharper than they expected.' },
          { ul: [
            '<b>Warmth + competence</b> – a smile in your voice, facts in your head.',
            '<b>Lightness</b> opens doors that persistence slams shut.',
            '<b>Charm is presence</b> – warm, never available.',
          ]},
          { quote: 'Don’t be sweet to be liked. Be charming because you’re in control.' },
        ]},
      ],
    },
    {
      num: '02', title: 'Buying Psychology', lead: 'People don’t buy products.<br>They buy a better version of their situation.',
      pages: [
        { h: 'The 3 brains', blocks: [
          { p: 'Decisions happen in milliseconds – in the old brain. The new brain supplies the reason later.' },
          { table: { head: ['Brain', 'It asks', 'You deliver'], rows: [
            ['<b>Reptile</b>', 'Is this dangerous?', 'Safety, calm, control'],
            ['<b>Limbic</b>', 'Do I like her?', 'Warmth, humour, “she gets me”'],
            ['<b>Neocortex</b>', 'Does it make sense?', 'Numbers, examples, next step'],
          ]}},
          { note: 'Order is everything: <b>safety → liking → logic.</b>' },
        ]},
        { h: 'The 12 levers · 1–4', blocks: [
          { lever: ['01', 'Loss aversion', 'A loss hurts twice as much as a gain pleases.', '“Right now a few hundred euros leak out every month.”'] },
          { lever: ['02', 'Curiosity gap', 'The brain hates open loops.', '“I noticed something at companies like yours – 20 seconds?”'] },
          { lever: ['03', 'Micro-yes', 'Three small yeses make the big yes easy.'] },
          { lever: ['04', 'Reciprocity', 'Give first: an insight, a number, a tip.'] },
        ]},
        { h: 'The 12 levers · 5–8', blocks: [
          { lever: ['05', 'Social proof', 'People follow people like them.', '“Three businesses in this area asked the exact same question.”'] },
          { lever: ['06', 'Specifics', '“17 %” beats “a lot”. Details sound competent.'] },
          { lever: ['07', 'Give back control', 'Whoever is given freedom stays.', '“You can say no at any point – totally fine.”'] },
          { lever: ['08', 'Labelling', 'Named emotions lose their power.', '“Sounds like you’ve had bad experiences before.”'] },
        ]},
        { h: 'The 12 levers · 9–12', blocks: [
          { lever: ['09', 'Mirroring', 'Repeat his last words as a question.', '“… too expensive?”'] },
          { lever: ['10', 'Scarcity', 'Only if it’s real – otherwise trust is gone.'] },
          { lever: ['11', 'Future pacing', 'Let him see the result.', '“Imagine six months from now …”'] },
          { lever: ['12', 'Pattern interrupt', 'Say what nobody says – and he listens.'] },
        ]},
        { h: 'The secret formula', blocks: [
          { formula: 'Pain × Urgency × Trust<br><span>= Willingness to buy</span>' },
          { p: 'If one factor is zero, the result is zero. Your questions find the pain, your timing creates urgency, your manner builds trust.' },
          { quote: 'The cheat codes work harder the more honestly you use them. Manipulation gets exposed on the second call – real influence gets referrals.' },
        ]},
      ],
    },
    {
      num: '03', title: 'The 4 Colour Types', lead: 'Hit his colour and he feels understood.<br>Miss it and he feels sold to.',
      pages: [
        { h: 'Two questions reveal everything', blocks: [
          { p: 'Is he <b>fast or deliberate</b>? Is he about <b>tasks or people</b>?' },
          { types: { axisY: ['fast', 'calm'], axisX: ['Tasks', 'People'], cells: [
            ['red', 'Red', 'The Driver'], ['yellow', 'Yellow', 'The Spark'],
            ['blue', 'Blue', 'The Analyst'], ['purple', 'Purple', 'The Keeper'],
          ]}},
          { note: 'Most people are a mix – look for the dominant colour.' },
        ]},
        { type: ['red', 'Red', 'The Driver'], h: 'Spot him', blocks: [
          { kv: [['Wants', 'Results, control, speed'], ['Fears', 'Wasted time, losing control']] },
          { label: 'On the phone' },
          { p: 'Answers with his surname, short and loud. “Yes? What’s this about?” Interrupts you.' },
          { label: 'At first glance' },
          { p: 'Firm eye contact, sharp clothes, status symbols, titles like CEO or Owner.' },
        ]},
        { type: ['red', 'Red', 'The Driver'], h: 'Approach him', blocks: [
          { p: 'Get to the point in 10 seconds. Result first. Give him the choice.' },
          { say: 'I’ll keep it short because you’re busy: this is about X euros a year. Interesting or not?' },
          { kv: [['Flirt', 'Confident and cheeky: “You’re quick – I like that.”'], ['Never', 'Small talk, hesitating, apologising']] },
        ]},
        { type: ['yellow', 'Yellow', 'The Spark'], h: 'Spot him', blocks: [
          { kv: [['Wants', 'Fun, recognition, novelty'], ['Fears', 'Boredom, rejection']] },
          { label: 'On the phone' },
          { p: 'Warm, loud, laughs quickly, tells stories, drifts off.' },
          { label: 'At first glance' },
          { p: 'Colourful clothes, open gestures, lots of photos and emojis online.' },
        ]},
        { type: ['yellow', 'Yellow', 'The Spark'], h: 'Approach him', blocks: [
          { p: 'Mirror his energy, tell stories, paint the vision. He buys you before the product.' },
          { say: 'You’re exactly the type who does this first in the industry.' },
          { kv: [['Flirt', 'Playful and warm – laugh, praise his ideas'], ['Never', 'Dry, number-heavy. And: lock in the date!']] },
        ]},
        { type: ['purple', 'Purple', 'The Keeper'], h: 'Spot him', blocks: [
          { kv: [['Wants', 'Harmony, safety, trust'], ['Fears', 'Conflict, change, mistakes']] },
          { label: 'On the phone' },
          { p: 'Calm, polite, slow. “Actually …”, “we’ll see”, “I need to ask my team”.' },
          { label: 'At first glance' },
          { p: 'Soft smile, muted colours, team or family photos, long in the same job.' },
        ]},
        { type: ['purple', 'Purple', 'The Keeper'], h: 'Approach him', blocks: [
          { p: 'Slow down, warm up. Stress safety. Give him time – with a fixed date.' },
          { say: 'No stress, we’ll go through it calmly. I want you to feel good about it.' },
          { kv: [['Flirt', 'Caring and gentle – genuine interest'], ['Never', 'Pressure. He’ll politely vanish – forever.']] },
        ]},
        { type: ['blue', 'Blue', 'The Analyst'], h: 'Spot him', blocks: [
          { kv: [['Wants', 'Precision, facts, quality'], ['Fears', 'Mistakes, vagueness, being ripped off']] },
          { label: 'On the phone' },
          { p: 'Factual, quiet, pauses. “How exactly do you calculate that?”' },
          { label: 'At first glance' },
          { p: 'Tidy, neutral, little expression. Controller, engineer, IT, procurement.' },
        ]},
        { type: ['blue', 'Blue', 'The Analyst'], h: 'Approach him', blocks: [
          { p: 'Structure and proof. Step by step. Documents to check – and time.' },
          { say: 'I’ll send you the calculation so you can check every number yourself.' },
          { kv: [['Flirt', 'Minimal – your charm is precision'], ['Never', 'Exaggerating, “just trust me”']] },
        ]},
        { h: 'Cheat sheet', blocks: [
          { table: { head: ['Colour', 'Buys when …', 'Your tone'], rows: [
            ['<i class="dot red"></i>Red', 'he wins and decides', 'direct, short'],
            ['<i class="dot yellow"></i>Yellow', 'it feels exciting', 'warm, playful'],
            ['<i class="dot purple"></i>Purple', 'it feels safe', 'gentle, patient'],
            ['<i class="dot blue"></i>Blue', 'it’s proven', 'factual, precise'],
          ]}},
        ]},
      ],
    },
    {
      num: '04', title: 'The Call', lead: 'The goal isn’t the close.<br>The goal is the next step.',
      pages: [
        { step: '1', h: 'The opener', sub: '0–10 seconds · pattern interrupt', blocks: [
          { say: 'Hi Mr Miller, this is [Name]. Honestly: this is a cold call. Want to hang up right away – or give me 30 seconds?' },
          { p: 'Honesty breaks the pattern, he gets control. Almost everyone says: “Fine.”' },
          { label: 'Charming version' },
          { say: 'You don’t know me – yet. Did I catch you in the middle of something important?' },
        ]},
        { step: '2', h: 'The reason', sub: '10–30 seconds · curiosity gap', blocks: [
          { say: 'I’m talking to [industry] businesses in the area, because we noticed the same thing at almost all of them: [problem]. I don’t know if that’s true for you – that’s why I’m calling.' },
          { note: 'Don’t name the product. Only the problem.' },
        ]},
        { step: '3', h: 'The questions', sub: 'up to 3 minutes · he talks, you lead', blocks: [
          { qs: [
            'How do you handle that right now?',
            'What bothers you most about it?',
            'If you had a magic wand – what would be different?',
            'What does it cost you if nothing changes for 12 months?',
            'Who else has a say in this?',
          ]},
        ]},
        { step: '4', h: 'The mini pitch', sub: '30 seconds · his words, your solution', blocks: [
          { say: 'You said [his pain]. That’s exactly where we come in: [solution] – for [client] that meant [number].' },
          { note: 'Use his exact phrases. He won’t argue with himself.' },
        ]},
        { step: '5', h: 'The test close', sub: 'take the temperature', blocks: [
          { say: 'On a scale of 1 to 10 – how interesting does this sound?' },
          { p: 'At a 6:' },
          { say: 'What would need to happen to make it a 9?' },
          { note: 'He sells it to himself.' },
        ]},
        { step: '6', h: 'The close', sub: 'a choice, not yes/no', blocks: [
          { say: 'Let’s take 20 minutes to look at it. Tuesday morning or Thursday afternoon?' },
          { p: '<b>Then: silence.</b> Whoever speaks first loses.' },
          { say: 'I’ll send the invite. And if something comes up – I won’t be offended.' },
        ]},
        { h: 'Buying signals', blocks: [
          { sig: [
            ['Asks about price or process', 'He’s already running it.'],
            ['Gets quieter, slower', 'He’s thinking. Don’t interrupt.'],
            ['Says “we” instead of “you”', 'He sees himself as a client.'],
            ['Shares something personal', 'Trust is there. Book the meeting.'],
          ]},
        ]},
      ],
    },
    {
      num: '05', title: 'Objections', lead: 'Every no is a question<br>in disguise.',
      pages: [
        { h: 'The formula: A · A · L', blocks: [
          { p: 'An objection usually means: <i>“I’m scared”</i>, <i>“I don’t get it”</i> or <i>“I don’t like you enough yet”</i>.' },
          { steps3: [['Acknowledge', '“Totally get that.” Never: “Yes, but …”'], ['Ask', 'Find the real reason.'], ['Lead', 'Back to the smallest next step.']] },
        ]},
        { h: 'Objections · 1–2', blocks: [
          { obj: ['Not interested.', [
            'I get it – I wouldn’t be interested in something I don’t know either. One question, and if the answer is no, I’m gone?',
            'Fair. No interest in the topic – or in calls like mine?',
          ]]},
          { obj: ['No time.', [
            'Then I’m perfect – I’m the short version. 27 seconds, I’m counting.',
            'When suits you better – tomorrow at 8:15 or after lunch?',
          ]]},
        ]},
        { h: 'Objections · 3–4', blocks: [
          { obj: ['Just send me an email.', [
            'Happy to. What’s the one thing that should be in it?',
            'Honestly – polite no, or do you really want to read it? Both are fine.',
          ]]},
          { obj: ['We already have a provider.', [
            'Great. What do you like most about them – and what would you improve?',
            'When did you last check whether you’re overpaying?',
          ]]},
        ]},
        { h: 'Objections · 5–6', blocks: [
          { obj: ['Too expensive.', [
            'Too expensive? <span class="hint">(mirror – then silence)</span>',
            'Compared to what?',
            'Suppose it paid for itself in six months – would it still be an issue?',
          ]]},
          { obj: ['I need to think about it.', [
            'Of course. About what exactly – the price, the timing, or the fit?',
          ]]},
        ]},
        { h: 'Objections · 7–8', blocks: [
          { obj: ['I don’t decide this alone.', [
            'Who else is at the table – and what matters to them?',
            'Shall we set the meeting so they can join?',
          ]]},
          { obj: ['Call me in three months.', [
            'Sure. What changes for you in three months?',
            'How will I know it’s really the right time then? <span class="hint">(set a date)</span>',
          ]]},
        ]},
        { h: 'Objections · 9–10', blocks: [
          { obj: ['Where did you get my number?', [
            'From [source]. If you’d rather not be called, I’ll take you off the list right now.',
          ]]},
          { obj: ['We’re happy as we are.', [
            'Glad to hear it. More “it works” or “it couldn’t be better”?',
          ]]},
        ]},
        { h: 'Objections · 11–12', blocks: [
          { obj: ['Are you one of those sales girls?', [
            'Busted. But one of the good ones – I hang up too if it’s not a fit. <span class="hint">(laughing)</span>',
          ]]},
          { obj: ['No. Bye.', [
            'All right, thanks for being honest. Have a lovely day!',
          ]]},
          { note: 'An elegant exit is your next entry.' },
        ]},
        { h: 'When he crosses the line', blocks: [
          { p: 'Charm is your choice – not his invitation.' },
          { say: 'Haha, nice try. Back to your numbers – they’re more exciting.' },
          { say: 'I think we’re misunderstanding each other. I’m calling about [topic].' },
          { p: 'Too much? End politely, document it, hand it over.' },
          { quote: 'No deal is worth your dignity.' },
        ]},
      ],
    },
    {
      num: '06', title: 'Charm & Voice', lead: 'On the phone, your voice<br>is your whole outfit.',
      pages: [
        { h: 'Professionally flirty', blocks: [
          { dodont: [
            ['An audible smile', 'Giggling, cooing'],
            ['Use his name 2–3×', 'Pet names – never'],
            ['Light teasing', 'Hints about looks'],
            ['Praise ideas & success', 'Praise him as a man'],
            ['Pauses that build tension', 'Nervous non-stop talking'],
            ['Boundaries with humour', 'Making yourself small'],
          ], labels: ['Do this', 'Skip this'] },
        ]},
        { h: 'The formula', blocks: [
          { trio: [['Warm', 'like a friend'], ['Sharp', 'like a consultant'], ['Unimpressed', 'like a boss']] },
        ]},
        { h: 'Voice hacks', blocks: [
          { ul: [
            '<b>Stand up.</b> Your voice gets deeper and surer.',
            '<b>Go down at the end.</b> Rising sounds like a question.',
            '<b>Slower than you think.</b> Calm is status.',
            '<b>Pause after the question.</b> Count to 3.',
            '<b>Mirror, then lead.</b> 30 seconds at his pace.',
          ]},
        ]},
        { h: '10 minutes before the first call', blocks: [
          { check: [
            'Power pose: 2 minutes standing tall',
            'One song that makes you unbeatable',
            'Opener out loud 3×: whispering, laughing, like a boss',
            'Read your “why” note',
            'Goal: 15 real conversations – not closes',
          ]},
        ]},
        { h: 'The maths of calm', blocks: [
          { formula: '1 no = <span>1/20 of a meeting</span>' },
          { p: 'If you need about 20 dials per meeting, every no brings you closer to the yes.' },
          { quote: 'Celebrate the nos.' },
        ]},
        { h: 'Pocket cheat sheet', blocks: [
          { kv: [
            ['Opener', 'Honest + give back control'],
            ['Reason', 'Problem, not product'],
            ['Questions', 'Pain → cost → decision-maker'],
            ['Pitch', 'His words + one number'],
            ['Close', 'Two slots, then silence'],
            ['Objection', 'Acknowledge → ask → lead'],
            ['Colour', 'Red short · Yellow fun · Purple safety · Blue proof'],
          ]},
          { quote: 'I don’t need this deal. That’s exactly why I get it.' },
        ]},
      ],
    },
  ],
};

module.exports = { de, en, TYPES };
