(function () {
  "use strict";
  const D = window.EPRT_DATA;
  const LETTERS = ["A", "B", "C", "D"];
  const SECTION_NAMES = { listening: "Listening", grammar: "Grammar", reading: "Reading" };
  const SIM_MINUTES = { listening: 35, grammar: 25, reading: 55 };
  const SIM_COUNT = { listening: 50, grammar: 40, reading: 50 };
  const SIM_NAMES = { listening: "Listening", grammar: "Structure & Written Expression", reading: "Reading" };
  const SIM_MAX_PLAYS = 2;
  const HISTORY_KEY = "eprt-practice-history";
  const PROFILE_KEY = "eprt-profile";
  const SOUND_KEY = "eprt-sound";
  const XP_PER_LEVEL = 1000;
  const REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const app = document.getElementById("app");

  let S = null;        // quiz state
  let timerId = null;

  /* ---------------- helpers ---------------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const errParts = (q) => { const m = {}; q.replace(/\{([A-D])\|([^}]+)\}/g, (_, l, t) => (m[l] = t)); return LETTERS.map((l) => m[l]); };
  const renderErrorSentence = (q) =>
    esc(q).replace(/\{([A-D])\|([^}]+)\}/g, (_, l, t) => `<span class="ul"><span class="ul-t">${t}</span><span class="ul-l">${l}</span></span>`);
  const fmtTime = (sec) => { sec = Math.max(0, Math.round(sec)); return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`; };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  const I = window.icon;
  const PRAISE = ["Mantap!", "Keren banget!", "Tepat sekali!", "Jago!", "Hebat!", "Luar biasa!"];
  const OOPS = ["Yah, kurang tepat", "Hampir!", "Belum tepat", "Tetap semangat!"];
  const soundBtn = () => `<button class="btn btn-ghost btn-round" data-act="sound" aria-label="${SFX.on ? "Matikan suara" : "Nyalakan suara"}" title="Efek suara">${I(SFX.on ? "volume" : "mute")}</button>`;

  /* ---------------- item builders ---------------- */
  function listeningItems() {
    const L = D.listening, out = [];
    L.short.forEach((it, i) => out.push({
      section: "listening", part: "Part A · Short Dialogue",
      ctx: { kind: "audio", id: "s" + i, title: "Short Dialogue " + (i + 1), intro: "Dengarkan percakapan singkat, lalu jawab pertanyaannya.", lines: it.lines, question: it.q },
      q: it.q, options: it.options, answer: it.answer, explain: it.explain
    }));
    L.long.forEach((g, gi) => g.questions.forEach((it) => out.push({
      section: "listening", part: "Part B · Long Dialogue",
      ctx: { kind: "audio", id: "l" + gi, title: g.title, intro: g.intro, lines: g.lines },
      q: it.q, options: it.options, answer: it.answer, explain: it.explain
    })));
    L.talks.forEach((g, gi) => g.questions.forEach((it) => out.push({
      section: "listening", part: "Part C · Monologue",
      ctx: { kind: "audio", id: "t" + gi, title: g.title, intro: g.intro, lines: g.lines },
      q: it.q, options: it.options, answer: it.answer, explain: it.explain
    })));
    return out;
  }
  function grammarItems(filter) {
    const topic = filter && filter.startsWith("topic:") ? filter.slice(6) : null;
    return D.grammar.filter((g) => !filter || (topic ? g.topic === topic : g.type === filter)).map((g) => ({
      section: "grammar", type: g.type,
      part: (g.type === "structure" ? "Fill in the Blank" : "Error Recognition") + (g.topic ? " · " + g.topic : ""),
      ctx: null, q: g.q, options: g.type === "error" ? errParts(g.q) : g.options, answer: g.answer, explain: g.explain
    }));
  }
  function readingItems(pi) {
    const out = [];
    D.reading.forEach((p, i) => {
      if (pi != null && pi !== i) return;
      p.questions.forEach((it) => out.push({
        section: "reading", part: "Teks " + (i + 1) + " · " + p.title,
        ctx: { kind: "passage", id: "p" + i, title: p.title, note: p.note, paragraphs: p.paragraphs },
        q: it.q, options: it.options, answer: it.answer, explain: it.explain
      }));
    });
    return out;
  }

  /* ---------------- speech (Listening) ---------------- */
  const TTS = {
    ok: "speechSynthesis" in window,
    voices: [],
    playing: null,
    load() {
      if (!this.ok) return;
      const pick = () => { this.voices = speechSynthesis.getVoices().filter((v) => /^en[-_]/i.test(v.lang)); };
      pick(); speechSynthesis.onvoiceschanged = pick;
    },
    voiceFor(sp) {
      const v = this.voices; if (!v.length) return null;
      const fem = /female|zira|aria|jenny|samantha|susan|hazel|libby|sonia|emma|ava|allison|karen|moira|tessa|serena|victoria|google us english/i;
      const mal = /\bmale|david|guy|mark|george|ryan|daniel|alex|fred|tom|christopher|eric|james|google uk english male/i;
      const us = v.filter((x) => /en[-_]US/i.test(x.lang));
      const pool = us.length ? us : v;
      if (sp === "W") return pool.find((x) => fem.test(x.name) && !/male/i.test(x.name.replace(/female/i, ""))) || pool[0];
      if (sp === "M") return pool.find((x) => mal.test(x.name)) || pool[Math.min(1, pool.length - 1)];
      return v.find((x) => /en[-_]GB/i.test(x.lang)) || pool[0];
    },
    stop() { if (this.ok) speechSynthesis.cancel(); this.playing = null; },
    play(lines, question, onLine, onEnd) {
      this.stop();
      const seq = lines.map(([sp, t]) => ({ sp, t }));
      if (question) seq.push({ sp: "N", t: question, isQ: true });
      const token = {}; this.playing = token;
      let i = 0;
      const next = () => {
        if (this.playing !== token) return;
        if (i >= seq.length) { this.playing = null; onEnd && onEnd(); return; }
        const cur = seq[i], u = new SpeechSynthesisUtterance(cur.t);
        const v = this.voiceFor(cur.sp); if (v) u.voice = v;
        u.lang = v ? v.lang : "en-US";
        u.rate = 0.92;
        u.pitch = cur.sp === "W" ? 1.25 : cur.sp === "M" ? 0.8 : 1;
        onLine && onLine(i);
        u.onend = () => { i++; setTimeout(next, cur.isQ ? 0 : 450); };
        u.onerror = () => { i++; next(); };
        speechSynthesis.speak(u);
      };
      next();
    }
  };
  TTS.load();

  /* ---------------- sound effects (Web Audio, tanpa file) ---------------- */
  const SFX = {
    ctx: null,
    on: load(SOUND_KEY, true),
    ac() { if (!this.ctx) { const C = window.AudioContext || window.webkitAudioContext; if (C) this.ctx = new C(); } return this.ctx; },
    tone(f, start, dur, type, vol) {
      const ac = this.ac(); if (!ac) return;
      const t = ac.currentTime + start, o = ac.createOscillator(), g = ac.createGain();
      o.type = type || "triangle"; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.18, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + dur + 0.02);
    },
    play(name) {
      if (!this.on) return;
      const seq = {
        ok: [[660, 0, .12], [990, .09, .22]],
        no: [[220, 0, .18, "sawtooth", .09], [165, .14, .28, "sawtooth", .09]],
        tap: [[520, 0, .07, "sine", .1]],
        streak: [[523, 0, .12], [659, .08, .12], [784, .16, .12], [1047, .24, .3]],
        win: [[523, 0, .15], [659, .12, .15], [784, .24, .15], [1047, .36, .25], [784, .55, .12], [1047, .66, .45]]
      }[name];
      (seq || []).forEach(([f, s, d, ty, v]) => this.tone(f, s, d, ty, v));
    },
    toggle() { this.on = !this.on; save(SOUND_KEY, this.on); if (this.on) this.play("tap"); }
  };

  /* ---------------- confetti ---------------- */
  function confetti(count, originY) {
    if (REDUCED) return;
    let cv = document.getElementById("confetti");
    if (!cv) { cv = document.createElement("canvas"); cv.id = "confetti"; document.body.appendChild(cv); }
    const ctx = cv.getContext("2d"), W = (cv.width = innerWidth), H = (cv.height = innerHeight);
    const colors = ["#ef476f", "#2f8cff", "#f59f0a", "#9b5de5", "#22c55e", "#ffc53d"];
    const parts = Array.from({ length: count || 90 }, () => ({
      x: W / 2 + (Math.random() - .5) * W * .35, y: H * (originY || .35),
      vx: (Math.random() - .5) * 16, vy: -Math.random() * 14 - 5,
      w: 7 + Math.random() * 7, h: 10 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - .5) * .4,
      c: colors[(Math.random() * colors.length) | 0]
    }));
    const t0 = performance.now();
    (function frame(now) {
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      parts.forEach((p) => {
        p.vy += .45; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        if (p.y < H + 30) alive = true;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      });
      if (alive && now - t0 < 3500) requestAnimationFrame(frame); else ctx.clearRect(0, 0, W, H);
    })(t0);
  }
  function floatPoints(text, el) {
    const r = el ? el.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 3, width: 0 };
    const d = document.createElement("div");
    d.className = "float-pts"; d.textContent = text;
    d.style.left = r.left + r.width / 2 + "px"; d.style.top = r.top + "px";
    document.body.appendChild(d); setTimeout(() => d.remove(), 1200);
  }
  function toast(html) {
    document.querySelectorAll(".toast").forEach((t) => t.remove());
    const d = document.createElement("div"); d.className = "toast"; d.innerHTML = html;
    document.body.appendChild(d); setTimeout(() => d.remove(), 1900);
  }

  /* ---------------- profile & history ---------------- */
  const getProfile = () => Object.assign({ xp: 0, bestStreak: 0, played: 0, correct: 0, answered: 0 }, load(PROFILE_KEY, {}));
  const getHistory = () => load(HISTORY_KEY, []);
  const pushHistory = (h) => save(HISTORY_KEY, [h, ...getHistory()].slice(0, 12));

  /* ================= HOME ================= */
  function renderHome() {
    stopTimer(); TTS.stop(); S = null;
    document.body.dataset.view = "home";
    const g = D.grammar, nStruct = g.filter((x) => x.type === "structure").length, nErr = g.length - nStruct;
    const nL = listeningItems().length, nR = readingItems().length;
    const hist = getHistory(), P = getProfile();
    const level = Math.floor(P.xp / XP_PER_LEVEL) + 1, lvlPct = ((P.xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100;
    const acc = P.answered ? Math.round((P.correct / P.answered) * 100) : 0;
    const topics = [...new Set(g.map((x) => x.topic).filter(Boolean))];
    app.innerHTML = `
      <nav class="topnav">
        <div class="logo"><span class="logo-badge" aria-hidden="true">E</span>EPrT Quiz</div>
        ${soundBtn()}
      </nav>
      <main class="wrap">
        <section class="hero">
          <div>
            <h1>Latihan EPrT jadi <span class="hl">seru!</span></h1>
            <p class="lede">Jawab soal Listening, Grammar, dan Reading, kumpulkan poin, jaga streak, dan pelajari pembahasan berbahasa Indonesia di setiap soal.</p>
            <div class="hero-cta">
              <button class="btn btn-gold btn-lg" data-act="practice" data-sec="grammar" data-sub="quick">${I("zap", "fill")} Main Cepat (10 soal)</button>
              <button class="btn btn-ghost btn-lg" data-act="scroll-modes">Pilih mode ${I("chevronDown")}</button>
            </div>
          </div>
          <div class="player-card">
            <h3>${I("user")} Profil kamu</h3>
            <div class="pstats">
              <div class="pstat"><span class="pstat-ic c-gold">${I("star", "fill")}</span><b>${P.xp.toLocaleString("id-ID")}</b><span>Poin</span></div>
              <div class="pstat"><span class="pstat-ic c-fire">${I("flame", "fill")}</span><b>${P.bestStreak}</b><span>Streak</span></div>
              <div class="pstat"><span class="pstat-ic c-ok">${I("target")}</span><b>${acc}%</b><span>Akurasi</span></div>
            </div>
            <div class="level">
              <div class="level-top"><span>Level ${level}</span><span>${P.xp % XP_PER_LEVEL}/${XP_PER_LEVEL} XP</span></div>
              <div class="xpbar"><span style="width:${lvlPct}%"></span></div>
            </div>
          </div>
        </section>

        <h2 class="sec-title" id="modes">${I("target")} Pilih mode</h2>
        <div class="modes">
          <div class="mode m-listen">
            <div class="mode-icon">${I("headphones")}</div>
            <h3>Listening</h3>
            <p>Dengarkan dialog & monolog, lalu jawab. Transkrip muncul setelah menjawab.</p>
            <span class="meta">${nL} soal · ${D.listening.short.length} short · ${D.listening.long.length + D.listening.talks.length} long/talk</span>
            <div class="chips"><button class="chip solid" data-act="practice" data-sec="listening">${I("play", "fill")} Main</button></div>
          </div>
          <div class="mode m-gram">
            <div class="mode-icon">${I("pencil")}</div>
            <h3>Grammar</h3>
            <p>Lengkapi kalimat atau temukan bagian yang salah.</p>
            <span class="meta">${g.length} soal · ${nStruct} fill-in · ${nErr} error</span>
            <div class="chips">
              <button class="chip solid" data-act="practice" data-sec="grammar">${I("play", "fill")} Semua</button>
              <button class="chip" data-act="practice" data-sec="grammar" data-sub="structure">Fill-in</button>
              <button class="chip" data-act="practice" data-sec="grammar" data-sub="error">Find Error</button>
            </div>
            <label class="topic-pick">
              <select id="topic-select" aria-label="Latihan grammar per topik">
                <option value="">Latihan per topik…</option>
                ${topics.map((t) => `<option value="${esc(t)}">${esc(t)} (${g.filter((x) => x.topic === t).length})</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="mode m-read">
            <div class="mode-icon">${I("book")}</div>
            <h3>Reading</h3>
            <p>Baca teks akademik: main idea, vocabulary, reference, inference.</p>
            <span class="meta">${nR} soal · ${D.reading.length} teks</span>
            <div class="chips">
              <button class="chip solid" data-act="practice" data-sec="reading">${I("play", "fill")} Semua</button>
              ${D.reading.map((p, i) => `<button class="chip" data-act="practice" data-sec="reading" data-sub="${i}" title="${esc(p.title)}">Teks ${i + 1}</button>`).join("")}
            </div>
          </div>
          <div class="mode m-sim">
            <div class="mode-icon">${I("flag")}</div>
            <h3>Simulasi Tes</h3>
            <p>Format seperti tes asli, waktu per bagian, tanpa kunci sampai selesai.</p>
            <ul class="sim-parts">
              <li>${I("headphones")} ${SIM_COUNT.listening} · ${SIM_MINUTES.listening}m</li>
              <li>${I("pencil")} ${SIM_COUNT.grammar} · ${SIM_MINUTES.grammar}m</li>
              <li>${I("book")} ${SIM_COUNT.reading} · ${SIM_MINUTES.reading}m</li>
            </ul>
            <div class="chips"><button class="chip solid" data-act="sim">${I("play", "fill")} Mulai simulasi</button></div>
          </div>
        </div>

        <div class="panels">
          <section class="panel">
            <h2 class="sec-title sm">${I("list")} Format EPrT & tips</h2>
            <dl class="format">
              <dt><span class="dt-ic c-listen">${I("headphones")}</span>Listening — 50 soal, ±35 menit</dt><dd>Short Dialogue (30), Long Dialogue (10), Monologue (10). Fokus pada idiom dan maksud tersirat (<i>"What does the man mean?"</i>), serta kalimat terakhir untuk soal <i>"What will … do next?"</i></dd>
              <dt><span class="dt-ic c-gram">${I("pencil")}</span>Structure & Written Expression — 40 soal, ±25 menit</dt><dd>Fill in the Blank (1–15) dan Error Recognition (16–40). Perhatikan kata sinyal seperti <i>than, even, neither…nor, not only</i>, dan baca seluruh kalimat sebelum menandai kesalahan.</dd>
              <dt><span class="dt-ic c-read">${I("book")}</span>Reading — 50 soal, ±55 menit</dt><dd>Baca pertanyaan dulu, lalu <i>skimming</i> dan <i>scanning</i>; untuk soal EXCEPT/NOT, eliminasi opsi yang disebut dalam teks.</dd>
            </dl>
            <p class="muted small">Ringkasan format diambil dari artikel LaC Telkom University (lihat Sumber). Cek ketentuan resmi terbaru sebelum tes.</p>
          </section>
          <section class="panel">
            <h2 class="sec-title sm">${I("history")} Riwayat main</h2>
            ${hist.length ? `<ul class="history">${hist.map((h) => `
              <li><span class="h-title">${esc(h.title)}</span><span class="h-date">${new Date(h.at).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}${h.points != null ? ` · ${h.points} poin` : ""}</span>
              <span class="h-score ${h.pct >= 70 ? "good" : h.pct >= 50 ? "mid" : "low"}">${h.correct}/${h.total} · ${h.pct}%</span></li>`).join("")}</ul>
              <button class="btn-text" data-act="clear-history">Reset riwayat & poin</button>`
              : `<p class="muted">Belum ada riwayat. Yuk mulai main! Hasil, poin, dan streak tersimpan di browser ini.</p>`}
          </section>
        </div>

        <section class="panel sources">
          <h2 class="sec-title sm">${I("link")} Sumber referensi</h2>
          <p class="muted small">Soal disusun mengikuti pola dan jenis soal dari artikel berikut. Buka sumber aslinya untuk contoh soal resmi.</p>
          <ul>${D.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}</ul>
        </section>
      </main>
      <footer class="foot">EPrT Quiz · latihan mandiri · tidak berafiliasi resmi dengan penyelenggara tes</footer>`;
    window.scrollTo(0, 0);
  }

  /* ================= QUIZ ================= */
  function startQuiz(mode, items, title, sections) {
    S = { mode, items, title, idx: 0, answers: {}, pts: {}, plays: {}, startedAt: Date.now(), deadline: null, showGrid: false,
          points: 0, streak: 0, bestStreak: 0, just: null, qStart: Date.now(), qStartIdx: 0 };
    if (mode === "sim") {
      S.sections = sections; S.sec = 0;
      S.deadline = Date.now() + sections[0].minutes * 60000;
      startTimer();
    }
    renderQuiz();
  }

  /* Simulasi mengikuti format tes: Listening 50, Structure 40 (15 + 25), Reading 50. */
  function startSimulation() {
    const L = listeningItems().slice(0, SIM_COUNT.listening);
    const G = [...shuffle(grammarItems("structure")).slice(0, 15), ...shuffle(grammarItems("error")).slice(0, SIM_COUNT.grammar - 15)];
    const R = [];
    for (const pi of shuffle(D.reading.map((_, i) => i))) {
      if (R.length >= SIM_COUNT.reading) break;
      R.push(...readingItems(pi).slice(0, SIM_COUNT.reading - R.length));
    }
    const sections = [];
    let from = 0;
    [["listening", L], ["grammar", G], ["reading", R]].forEach(([key, arr]) => {
      sections.push({ key, name: SIM_NAMES[key], from, to: from + arr.length - 1, minutes: SIM_MINUTES[key] });
      from += arr.length;
    });
    startQuiz("sim", [...L, ...G, ...R], "Simulasi EPrT", sections);
  }

  const range = () => (S.mode === "sim" ? S.sections[S.sec] : { from: 0, to: S.items.length - 1 });

  function nextSection(auto) {
    const sec = S.sections[S.sec], last = S.sec === S.sections.length - 1;
    if (!auto) {
      let left = 0;
      for (let k = sec.from; k <= sec.to; k++) if (S.answers[k] == null) left++;
      const what = last ? "Selesaikan tes sekarang?" : `Lanjut ke ${S.sections[S.sec + 1].name}? Kamu tidak bisa kembali ke bagian ini.`;
      if (!confirm((left ? `Masih ada ${left} soal ${sec.name} yang belum dijawab. ` : "") + what)) return;
    }
    TTS.stop();
    if (last) { finish({ skipConfirm: true, timeUp: auto }); return; }
    S.sec++;
    const next = S.sections[S.sec];
    S.idx = next.from;
    S.deadline = Date.now() + next.minutes * 60000;
    S.notice = auto ? `Waktu bagian ${sec.name} habis. Sekarang bagian ${next.name} (${next.minutes} menit).` : null;
    S.showGrid = false;
    startTimer();
    renderQuiz();
    toast(`${I("flag")} Bagian ${S.sec + 1}: ${esc(next.name)}`);
    window.scrollTo(0, 0);
  }

  function startTimer() {
    stopTimer();
    timerId = setInterval(() => {
      if (!S || !S.deadline) return stopTimer();
      const left = (S.deadline - Date.now()) / 1000;
      const el = document.getElementById("timer");
      if (el) { el.querySelector("b").textContent = fmtTime(left); el.classList.toggle("warn", left < 300); }
      if (left <= 0) { stopTimer(); nextSection(true); }
    }, 500);
  }
  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }

  const isLocked = (i) => S.mode === "review" || (S.mode === "practice" && S.answers[i] != null);

  function renderQuiz() {
    document.body.dataset.view = "quiz";
    const it = S.items[S.idx], i = S.idx, n = S.items.length;
    const chosen = S.answers[i], locked = isLocked(i);
    const r = range(), sim = S.mode === "sim", practice = S.mode === "practice";
    let answeredCount = 0;
    for (let k = r.from; k <= r.to; k++) if (S.answers[k] != null) answeredCount++;
    const secTotal = r.to - r.from + 1;
    const ctx = it.ctx;
    const notice = S.notice; S.notice = null;
    const just = S.just === i; S.just = null;
    if (chosen == null && S.qStartIdx !== i) { S.qStart = Date.now(); S.qStartIdx = i; }

    const long = it.section === "reading" || it.options.some((o) => String(o).length > 38);
    const tilesHtml = it.options.map((o, k) => {
      let cls = "tile";
      if (chosen === k) cls += " chosen";
      if (locked) {
        if (k === it.answer) cls += " correct" + (just ? " pop" : "");
        else if (chosen === k) cls += " wrong" + (just ? " shake" : "");
      }
      const mark = locked ? (k === it.answer ? I("check") : chosen === k ? I("x") : "") : "";
      return `<button class="${cls}" data-act="choose" data-k="${k}" ${locked ? "disabled" : ""} aria-label="Pilihan ${LETTERS[k]}: ${esc(o)}">
        <span class="tile-l">${LETTERS[k]}</span><span class="tile-t">${esc(o)}</span><span class="tile-mark" aria-hidden="true">${mark}</span></button>`;
    }).join("");

    const qText = it.type === "error"
      ? `<p class="q-instr">${I("search")} Pilih bagian bergaris bawah yang <b>salah</b></p><p class="q-text err">${renderErrorSentence(it.q)}</p>`
      : `<p class="q-text">${esc(it.q).replace(/_{3,}/g, '<span class="blank"></span>')}</p>`;

    let feedback = "";
    if (locked) {
      const ok = chosen === it.answer;
      const title = chosen == null ? "Tidak dijawab" : ok ? PRAISE[i % PRAISE.length] : OOPS[i % OOPS.length];
      const fbIcon = chosen == null ? "skip" : ok ? "checkCircle" : "xCircle";
      feedback = `<div class="feedback ${chosen == null ? "skip" : ok ? "ok" : "no"} ${just ? "anim" : ""}" role="status">
        <div class="fb-head"><span class="fb-icon">${I(fbIcon)}</span>
          <div><div class="fb-title">${title}</div><div class="fb-sub">Jawaban benar: ${LETTERS[it.answer]}</div></div>
          ${practice && ok && S.pts[i] ? `<span class="fb-pts">${I("star", "fill")} +${S.pts[i]}</span>` : ""}
        </div>
        <div class="fb-body">${it.explain}</div></div>`;
    }

    let ctxHtml = "";
    if (ctx && ctx.kind === "passage") {
      ctxHtml = `<aside class="passage"><h3>${I("book")} ${esc(ctx.title)}</h3>${ctx.note ? `<p class="pnote">${esc(ctx.note)}</p>` : ""}${ctx.paragraphs.map((p, k) => `<p><span class="pnum">${k + 1}</span>${esc(p)}</p>`).join("")}</aside>`;
    } else if (ctx && ctx.kind === "audio") {
      const plays = S.plays[ctx.id] || 0;
      const exhausted = sim && plays >= SIM_MAX_PLAYS;
      const showTx = S.mode === "review" || (practice && chosen != null);
      ctxHtml = `<section class="audio ${TTS.playing ? "playing-eq" : ""}">
        <button class="play ${TTS.playing ? "playing" : ""}" data-act="play" ${exhausted || !TTS.ok ? "disabled" : ""} aria-label="${TTS.playing ? "Hentikan audio" : "Putar audio"}">${I(TTS.playing ? "stop" : "play", "fill")}</button>
        <h3>${esc(ctx.title)}</h3>
        <p class="intro">${esc(ctx.intro)}</p>
        <div class="audio-meta"><span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
          <span>${TTS.playing ? "Sedang diputar…" : sim ? `Diputar ${plays}/${SIM_MAX_PLAYS}` : plays ? `Diputar ${plays}× · putar lagi kapan saja` : "Tekan tombol putar atau P"}</span></div>
        ${!TTS.ok ? `<p class="warn-box">Browser ini tidak mendukung Text-to-Speech. Gunakan Chrome/Edge terbaru, atau baca transkrip setelah menjawab.</p>` : ""}
        ${showTx ? `<details class="tx" open><summary>${I("fileText")} Transkrip</summary>${ctx.lines.map(([sp, t], k) => `<p data-line="${k}"><b>${sp === "M" ? "Man" : sp === "W" ? "Woman" : "Speaker"}:</b> ${esc(t)}</p>`).join("")}</details>` : ""}
      </section>`;
    }

    const grid = S.items.map((x, k) => {
      if (k < r.from || k > r.to) return "";
      let c = "g";
      if (k === i) c += " cur";
      if (S.answers[k] != null) c += sim ? " done" : S.answers[k] === x.answer ? " ok" : " no";
      else if (S.mode === "review") c += " no";
      return `<button class="${c}" data-act="goto" data-k="${k}">${k + 1}</button>`;
    }).join("");

    const sectionNow = SECTION_NAMES[it.section];
    const lastInRange = i >= r.to;
    let nextBtn;
    if (!lastInRange) nextBtn = `<button class="btn ${practice && chosen != null ? "btn-gold" : "btn-primary"} btn-next" data-act="next">${practice && chosen != null ? "Lanjut" : "Berikutnya"} ${I("arrowRight")}</button>`;
    else if (S.mode === "review") nextBtn = `<button class="btn btn-primary btn-next" data-act="results">${I("trophy")} Lihat hasil</button>`;
    else if (sim && S.sec < S.sections.length - 1) nextBtn = `<button class="btn btn-gold btn-next" data-act="finish">Lanjut ke ${S.sections[S.sec + 1].name} ${I("arrowRight")}</button>`;
    else nextBtn = `<button class="btn btn-gold btn-next" data-act="finish">${I("flag")} Selesai</button>`;

    app.innerHTML = `
      <div class="qbar">
        <button class="btn btn-ghost btn-round" data-act="home" aria-label="Keluar" title="Keluar">${I("x")}</button>
        <div class="qbar-title"><b>${esc(S.title)}</b><span>${S.mode === "review" ? "Pembahasan · " + sectionNow : sim ? `Bagian ${S.sec + 1}/${S.sections.length} · ${S.sections[S.sec].name}` : sectionNow}</span></div>
        <div class="pills">
          ${sim ? `<span id="timer" class="pill timer" title="Sisa waktu bagian ini">${I("timer")} <b>${fmtTime((S.deadline - Date.now()) / 1000)}</b></span>` : ""}
          ${practice ? `<span class="pill streak ${S.streak >= 3 ? "hot" : ""}" title="Benar beruntun">${I("flame", "fill")} <b>${S.streak}</b></span>
                        <span class="pill pts ${just ? "bump" : ""}" title="Poin">${I("star", "fill")} <b>${S.points}</b></span>` : ""}
          <span class="pill" title="Soal terjawab">${I("checkCircle")} <b>${answeredCount}/${secTotal}</b></span>
          ${soundBtn()}
        </div>
      </div>
      <div class="progress"><span style="width:${((i - r.from + 1) / secTotal) * 100}%"></span></div>
      ${notice ? `<div class="notice-wrap"><p class="warn-box">${esc(notice)}</p></div>` : ""}
      <main class="quiz ${ctx && ctx.kind === "passage" ? "is-reading" : ""}">
        ${ctx && ctx.kind === "passage" ? ctxHtml : ""}
        <div class="qside">
          ${ctx && ctx.kind === "audio" ? ctxHtml : ""}
          <section class="qcard">
            <div class="qmeta"><span class="qnum">Soal ${i - r.from + 1} / ${secTotal}</span><span class="part">${esc(it.part)}</span></div>
            ${qText}
          </section>
          <div class="tiles ${long ? "long" : ""} ${locked ? "locked" : ""}">${tilesHtml}</div>
          ${feedback ? `<section class="qcard" style="text-align:left;padding-top:.4rem">${feedback}</section>` : ""}
          <div class="qnav">
            <button class="btn btn-ghost" data-act="prev" ${i === r.from ? "disabled" : ""}>${I("chevronLeft")} Kembali</button>
            <button class="btn btn-ghost" data-act="grid">${I("list")} ${S.showGrid ? "Tutup daftar" : "Daftar soal"}</button>
            ${nextBtn}
          </div>
          <div class="gridnav ${S.showGrid ? "open" : ""}">${grid}</div>
          <p class="kbd muted">Pintasan: <kbd>A</kbd>–<kbd>D</kbd> pilih jawaban · <kbd>←</kbd> <kbd>→</kbd> pindah soal${ctx && ctx.kind === "audio" ? " · <kbd>P</kbd> putar audio" : ""}</p>
        </div>
      </main>`;
  }

  function choose(k) {
    if (!S || isLocked(S.idx)) return;
    const i = S.idx, it = S.items[i];
    S.answers[i] = k;
    if (S.mode === "practice") {
      S.just = i;
      if (k === it.answer) {
        S.streak++; S.bestStreak = Math.max(S.bestStreak, S.streak);
        const secs = (Date.now() - S.qStart) / 1000;
        const speed = it.section === "reading" ? (secs < 40 ? 50 : secs < 80 ? 25 : 0) : (secs < 15 ? 50 : secs < 30 ? 25 : 0);
        const pts = 100 + Math.min(S.streak - 1, 10) * 10 + speed;
        S.pts[i] = pts; S.points += pts;
        renderQuiz();
        const tile = document.querySelector(`.tile[data-k="${k}"]`);
        floatPoints("+" + pts, tile);
        if ([3, 5, 10, 15, 20, 30, 40, 50].includes(S.streak)) { SFX.play("streak"); toast(`${I("flame", "fill")} ${S.streak} benar beruntun!`); confetti(140, .3); }
        else { SFX.play("ok"); confetti(45, .45); }
      } else {
        S.streak = 0;
        SFX.play("no");
        renderQuiz();
      }
    } else {
      SFX.play("tap");
      renderQuiz();
    }
  }
  function go(k) {
    if (!S) return;
    const r = range();
    k = Math.max(r.from, Math.min(r.to, k));
    if (k === S.idx) return;
    const prevCtx = S.items[S.idx].ctx, nextCtx = S.items[k].ctx;
    if (!(prevCtx && nextCtx && prevCtx.id === nextCtx.id)) TTS.stop();
    S.idx = k;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function playAudio() {
    const it = S.items[S.idx], ctx = it.ctx;
    if (!ctx || ctx.kind !== "audio" || !TTS.ok) return;
    if (TTS.playing) { TTS.stop(); renderQuiz(); return; }
    if (S.mode === "sim" && (S.plays[ctx.id] || 0) >= SIM_MAX_PLAYS) return;
    S.plays[ctx.id] = (S.plays[ctx.id] || 0) + 1;
    TTS.play(ctx.lines, ctx.question, (li) => {
      document.querySelectorAll(".tx p").forEach((p) => p.classList.toggle("speaking", +p.dataset.line === li));
    }, () => { if (S && document.body.dataset.view === "quiz") renderQuiz(); });
    renderQuiz();
  }

  function finish(opt) {
    if (!S) return;
    const timeUp = opt && opt.timeUp;
    if (!(opt && opt.skipConfirm) && S.mode !== "review") {
      const left = S.items.length - Object.keys(S.answers).length;
      if (left > 0 && !confirm(`Masih ada ${left} soal yang belum dijawab. Selesaikan sekarang?`)) return;
    }
    stopTimer(); TTS.stop();
    const score = computeScore();
    if (S.mode === "sim") S.points = score.correct * 100;
    S.score = score;
    S.duration = Math.round((Date.now() - S.startedAt) / 1000);
    pushHistory({ title: S.title, at: Date.now(), correct: score.correct, total: score.total, pct: score.pct, points: S.points });
    const P = getProfile();
    P.xp += S.points; P.played++; P.correct += score.correct; P.answered += Object.keys(S.answers).length;
    P.bestStreak = Math.max(P.bestStreak, S.bestStreak);
    save(PROFILE_KEY, P);
    S.mode = "review"; S.timeUp = !!timeUp;
    renderResults(true);
  }

  function computeScore() {
    const by = {};
    let correct = 0;
    S.items.forEach((it, k) => {
      const b = (by[it.section] = by[it.section] || { correct: 0, total: 0 });
      b.total++;
      if (S.answers[k] === it.answer) { b.correct++; correct++; }
    });
    return { correct, total: S.items.length, pct: Math.round((correct / S.items.length) * 100), by };
  }

  function renderResults(celebrate) {
    document.body.dataset.view = "results";
    TTS.stop();
    const sc = S.score;
    const medal = sc.pct >= 85 ? ["trophy", "gold"] : sc.pct >= 65 ? ["medal", "silver"] : sc.pct >= 40 ? ["medal", "bronze"] : ["trendingUp", "grow"];
    const stars = sc.pct >= 85 ? 3 : sc.pct >= 65 ? 2 : sc.pct >= 40 ? 1 : 0;
    const head = sc.pct >= 85 ? "Luar biasa!" : sc.pct >= 65 ? "Kerja bagus!" : sc.pct >= 40 ? "Lumayan!" : "Ayo coba lagi!";
    const verdict = sc.pct >= 85 ? "Kamu menguasai materi ini. Pertahankan!" : sc.pct >= 65 ? "Tinggal poles soal yang masih salah." : sc.pct >= 40 ? "Pelajari pembahasan dan ulangi soal yang salah." : "Mulai dari pembahasan di bawah, lalu coba lagi. Pasti bisa!";
    const wrongIdx = S.items.map((it, k) => (S.answers[k] === it.answer ? -1 : k)).filter((k) => k >= 0);
    const colors = { listening: "var(--c-listen)", grammar: "var(--c-gram)", reading: "var(--c-read)" };
    app.innerHTML = `
      <div class="qbar">
        <button class="btn btn-ghost btn-round" data-act="home" aria-label="Beranda" title="Beranda">${I("home")}</button>
        <div class="qbar-title"><b>${esc(S.title)}</b><span>Hasil</span></div>
        <div class="pills">${soundBtn()}</div>
      </div>
      <main class="wrap results">
        ${S.timeUp ? `<p class="warn-box" style="margin-bottom:1rem">${I("timer")} Waktu habis — jawaban otomatis dikumpulkan.</p>` : ""}
        <section class="podium">
          <div class="medal medal-${medal[1]}">${I(medal[0])}</div>
          <div class="stars" aria-label="${stars} dari 3 bintang">${[0, 1, 2].map((k) => `<span class="${k < stars ? "on" : "off"}">${I("star", "fill")}</span>`).join("")}</div>
          <h2>${head}</h2>
          <p class="verdict">${verdict}</p>
          <div class="stat-row">
            <div class="stat"><b>${sc.correct}/${sc.total}</b><span>Benar</span></div>
            <div class="stat"><b>${sc.pct}%</b><span>Akurasi</span></div>
            <div class="stat"><b>${I("star", "fill")} ${S.points}</b><span>Poin</span></div>
            <div class="stat"><b>${S.bestStreak ? I("flame", "fill") + " " + S.bestStreak : fmtTime(S.duration)}</b><span>${S.bestStreak ? "Streak terbaik" : "Waktu"}</span></div>
          </div>
          <p class="disclaimer">Waktu: ${fmtTime(S.duration)} · Skor ini persentase latihan, bukan konversi skor resmi EPrT.</p>
        </section>
        <div class="bars">
          ${Object.entries(sc.by).map(([sec, b]) => `
            <div class="bar-row"><span class="bar-name">${SECTION_NAMES[sec]}</span>
              <span class="bar"><span style="width:${(b.correct / b.total) * 100}%; background:${colors[sec]}"></span></span>
              <span class="bar-val">${b.correct}/${b.total}</span></div>`).join("")}
        </div>
        <div class="res-actions">
          <button class="btn btn-primary btn-lg" data-act="review">${I("book")} Lihat pembahasan</button>
          ${wrongIdx.length ? `<button class="btn btn-gold btn-lg" data-act="retry-wrong">${I("rotate")} Ulangi ${wrongIdx.length} soal salah</button>` : ""}
          <button class="btn btn-ghost btn-lg" data-act="home">${I("home")} Beranda</button>
        </div>
        <h3 class="sec-title sm">${I("fileText")} Ringkasan jawaban</h3>
        <div class="summary">
          ${S.items.map((it, k) => { const a = S.answers[k], ok = a === it.answer; return `
            <button class="sum ${ok ? "ok" : "no"}" data-act="review-at" data-k="${k}">
              <span class="sum-n">${k + 1}</span>
              <span class="sum-q">${esc(it.type === "error" ? it.q.replace(/\{[A-D]\|([^}]+)\}/g, "$1") : it.q)}</span>
              <span class="sum-a">${a == null ? "—" : LETTERS[a]} → ${LETTERS[it.answer]}</span>
            </button>`; }).join("")}
        </div>
      </main>`;
    window.scrollTo(0, 0);
    if (celebrate) {
      SFX.play(sc.pct >= 40 ? "win" : "tap");
      if (sc.pct >= 65) { confetti(160, .25); setTimeout(() => confetti(120, .35), 600); }
    }
  }

  /* ---------------- events ---------------- */
  app.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const act = b.dataset.act;
    switch (act) {
      case "home":
        if (S && S.mode !== "review" && Object.keys(S.answers).length && !confirm("Keluar dari sesi ini? Jawaban dan poinmu tidak akan disimpan.")) return;
        renderHome(); break;
      case "sound": SFX.toggle(); b.innerHTML = I(SFX.on ? "volume" : "mute"); b.setAttribute("aria-label", SFX.on ? "Matikan suara" : "Nyalakan suara"); break;
      case "scroll-modes": document.getElementById("modes").scrollIntoView({ behavior: "smooth" }); break;
      case "sim":
        startSimulation(); break;
      case "practice": {
        const sec = b.dataset.sec, sub = b.dataset.sub;
        let items, title = "Latihan " + SECTION_NAMES[sec];
        if (sub === "quick") { items = shuffle(grammarItems()).slice(0, 10); title = "Main Cepat"; }
        else if (sec === "listening") items = listeningItems();
        else if (sec === "grammar") { items = grammarItems(sub); if (sub) title += sub === "structure" ? " · Fill-in" : " · Find Error"; }
        else { items = readingItems(sub != null ? +sub : null); if (sub != null) title += " · Teks " + (+sub + 1); }
        startQuiz("practice", items, title); break;
      }
      case "choose": choose(+b.dataset.k); break;
      case "prev": go(S.idx - 1); break;
      case "next": go(S.idx + 1); break;
      case "goto": go(+b.dataset.k); break;
      case "grid": S.showGrid = !S.showGrid; renderQuiz(); break;
      case "play": playAudio(); break;
      case "finish": if (S.mode === "sim") nextSection(false); else finish(); break;
      case "results": renderResults(false); break;
      case "review": S.idx = 0; renderQuiz(); break;
      case "review-at": S.idx = +b.dataset.k; renderQuiz(); break;
      case "retry-wrong": {
        const items = S.items.filter((it, k) => S.answers[k] !== it.answer);
        startQuiz("practice", items, S.title + " · Ulang soal salah"); break;
      }
      case "clear-history":
        if (confirm("Reset riwayat, poin, dan streak?")) { localStorage.removeItem(HISTORY_KEY); localStorage.removeItem(PROFILE_KEY); renderHome(); } break;
    }
  });

  app.addEventListener("change", (e) => {
    if (e.target.id !== "topic-select" || !e.target.value) return;
    const t = e.target.value;
    startQuiz("practice", grammarItems("topic:" + t), "Grammar · " + t);
  });

  document.addEventListener("keydown", (e) => {
    if (!S || document.body.dataset.view !== "quiz" || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest && e.target.closest("select, input, textarea")) return;
    const k = e.key.toUpperCase();
    if (LETTERS.includes(k)) { choose(LETTERS.indexOf(k)); e.preventDefault(); }
    else if (k >= "1" && k <= "4") { choose(+k - 1); e.preventDefault(); }
    else if (e.key === "ArrowRight" || (e.key === "Enter" && S.answers[S.idx] != null && S.mode === "practice")) go(S.idx + 1);
    else if (e.key === "ArrowLeft") go(S.idx - 1);
    else if (k === "P") playAudio();
  });

  window.addEventListener("beforeunload", (e) => {
    if (S && S.mode !== "review" && Object.keys(S.answers).length) { e.preventDefault(); e.returnValue = ""; }
  });

  renderHome();
})();
