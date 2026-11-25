<div align="center">

# 🎯 EPrT Quiz

**Latihan EPrT jadi seru — Listening, Grammar, dan Reading dengan pembahasan berbahasa Indonesia.**

Website latihan *English Proficiency Test* (EPrT) yang ringan, tanpa instalasi, dan bisa langsung dibuka di browser.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-0-2ea44f?style=flat-square)
![Soal](https://img.shields.io/badge/bank_soal-204-f2b84b?style=flat-square)

</div>

---

## ✨ Fitur Utama

| | Fitur | Keterangan |
|---|---|---|
| 🎧 | **Listening dengan suara** | Dialog dan monolog dibacakan otomatis lewat *Web Speech API*. Transkrip muncul setelah kamu menjawab, dan baris yang sedang dibacakan disorot. |
| ✍️ | **Grammar lengkap** | Mode *Fill-in the Blank*, *Find the Error*, dan latihan per topik (14 topik grammar). |
| 📖 | **Reading akademik** | Teks bacaan dengan soal *main idea*, *vocabulary*, *reference*, dan *inference*. |
| ⏱️ | **Simulasi tes** | Format mirip tes asli: waktu per bagian, audio maksimal 2× putar, kunci jawaban baru muncul setelah selesai. |
| 💡 | **Pembahasan di setiap soal** | Penjelasan berbahasa Indonesia: kenapa jawaban benar, dan jebakan apa yang perlu diwaspadai. |
| 🏆 | **Gamifikasi** | Poin (XP), level, streak, akurasi, efek suara, dan confetti 🎉 |
| 💾 | **Progres tersimpan** | Riwayat, poin, dan streak disimpan di `localStorage`. Tidak perlu akun. |
| ⌨️ | **Shortcut keyboard** | Jawab dan pindah soal tanpa mouse. |

## 📚 Isi Bank Soal

| Bagian | Jumlah | Rincian |
|---|:---:|---|
| **Listening** | 50 | Short Dialogue (30) · Long Dialogue (10) · Monologue/Talks (10) |
| **Grammar** | 96 | Structure (26) · Error Recognition (28) · Per topik (42) |
| **Reading** | 58 | 6 teks bacaan, masing-masing 8–10 soal |
| **Total** | **204** | |

<details>
<summary><b>14 topik Grammar</b></summary>

Subject-Verb Agreement · Tenses · Passive Voice · Gerund vs Infinitive · Parallel Structure · Prepositions · Relative Clauses · Conditionals · Pronouns · Articles · Nouns · Discourse Markers · Subordinate & Coordinate Clauses · Modality

</details>

## ⏱️ Format Simulasi

| Bagian | Soal | Waktu |
|---|:---:|:---:|
| Listening | 50 | ±35 menit |
| Structure & Written Expression | 40 | ±25 menit |
| Reading | 50 | ±55 menit |

> Ringkasan format diambil dari artikel Language Center Telkom University. Cek ketentuan resmi terbaru sebelum tes.

## 🚀 Cara Menjalankan

Proyek ini **tidak memerlukan build atau instalasi**. Cukup HTML, CSS, dan JavaScript murni.

**Opsi 1: buka langsung**

```bash
git clone https://github.com/willsyh/eprt-prep.git
cd eprt-prep
# buka index.html di browser
```

**Opsi 2: pakai server lokal** (disarankan supaya font dan suara berjalan lancar)

```bash
# Python
python -m http.server 8000

# atau Node.js
npx serve .
```

Lalu buka `http://localhost:8000`.

> 🔊 **Catatan audio:** Listening memakai suara bawaan browser (`speechSynthesis`). Chrome dan Edge biasanya punya pilihan suara bahasa Inggris yang paling lengkap.

## ⌨️ Shortcut Keyboard

| Tombol | Aksi |
|---|---|
| `A` `B` `C` `D` / `1`–`4` | Pilih jawaban |
| `→` / `Enter` | Soal berikutnya |
| `←` | Soal sebelumnya |
| `P` | Putar / hentikan audio Listening |

## 🗂️ Struktur Proyek

```
eprt-prep/
├── index.html                  # Entry point
├── css/
│   └── style.css               # Seluruh styling
└── js/
    ├── app.js                  # Logika aplikasi: render, kuis, timer, TTS, skor, gamifikasi
    ├── icons.js                # Ikon SVG inline
    ├── data.js                 # Bank soal utama (Listening, Grammar, Reading, Sumber)
    ├── data-grammar-topics.js  # Soal Grammar per topik
    ├── data-extra.js           # Soal tambahan
    └── data-listening-extra.js # Soal Listening tambahan
```

## ➕ Menambah Soal

Semua soal tersimpan di objek global `window.EPRT_DATA`. Contoh menambah soal Grammar:

```js
window.EPRT_DATA.grammar.push({
  type: "structure",              // "structure" (isian) atau "error" (cari kesalahan)
  topic: "Tenses",                // opsional, untuk latihan per topik
  q: "She ___ here since 2019.",
  options: ["lives", "has lived", "is living", "lived"],
  answer: 1,                      // indeks jawaban benar: 0 = A, 1 = B, 2 = C, 3 = D
  explain: "Kata <b>since</b> menandakan <b>present perfect</b> → has lived."
});
```

Untuk soal **error recognition**, tandai bagian yang bergaris bawah dengan format `{A|teks}`:

```js
q: "The {A|number} of students {B|are} increasing {C|every} {D|year}."
```

## 📎 Sumber

Soal ditulis ulang secara orisinal dengan mengikuti pola dan jenis soal dari artikel berikut:

- [Contoh Soal Reading EPrT beserta Jawaban dan Pembahasannya](https://lac.telkomuniversity.ac.id/contoh-soal-reading-eprt-beserta-jawaban-dan-pembahasannya/)
- [Contoh Soal Grammar EPrT Lengkap dengan Jawaban dan Pembahasannya](https://lac.telkomuniversity.ac.id/blog/contoh-soal-grammar-eprt-lengkap-dengan-jawaban-dan-pembahasannya/)
- [Contoh Soal Grammar EPrT Tiap Bagian dan Jawabannya](https://lac.telkomuniversity.ac.id/contoh-soal-grammar-eprt-tiap-bagian-dan-jawabannya/)
- [Contoh Soal Reading EPrT (LinkedIn)](https://www.linkedin.com/pulse/contoh-soal-reading-eprt-jawaban-dan-8e31c/)
- [10 Contoh Soal Reading Competence EPrT](https://lac.telkomuniversity.ac.id/blog/10-contoh-soal-reading-competence-eprt-pusat-bahasa-tel-u/)
- [10 Contoh Soal Grammar Competence EPrT](https://lac.telkomuniversity.ac.id/blog/10-contoh-soal-grammar-competence-eprt-pusat-bahasa-tel-u/)
- [Soal Listening Competence EPrT](https://lac.telkomuniversity.ac.id/blog/soal-listening-competence-eprt-telkom-university-language-center/)

## ⚠️ Disclaimer

EPrT Quiz adalah proyek **latihan mandiri** dan **tidak berafiliasi resmi** dengan Telkom University Language Center maupun penyelenggara tes EPrT. Skor di website ini hanya gambaran latihan, bukan prediksi skor resmi.

---

<div align="center">

Dibuat dengan ☕ untuk semua pejuang EPrT. **Semangat belajar!** 🚀

</div>
