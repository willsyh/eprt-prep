/* Bank soal latihan EPrT.
 * Semua soal ditulis ulang (orisinal) mengikuti pola & jenis soal pada artikel
 * contoh soal EPrT Telkom University Language Center (lihat bagian "Sumber" di website).
 * answer = indeks opsi yang benar (0 = A, 1 = B, 2 = C, 3 = D).
 * Untuk soal "error", bagian bergaris bawah ditulis {A|teks}.
 */
window.EPRT_DATA = {
  /* ===================== LISTENING ===================== */
  listening: {
    short: [
      {
        lines: [["W", "Are you coming to the seminar this afternoon?"], ["M", "I wouldn't miss it for the world."]],
        q: "What does the man mean?",
        options: ["He is going on a trip around the world.", "He will definitely attend the seminar.", "He missed the last seminar.", "He is not interested in the topic."],
        answer: 1,
        explain: "Idiom <b>\"wouldn't miss it for the world\"</b> = pasti datang, tidak mau melewatkannya. Jadi pria itu pasti menghadiri seminar. Opsi tentang \"world/trip\" adalah jebakan kata yang mirip bunyinya."
      },
      {
        lines: [["M", "This report is due tomorrow, and I haven't even started it."], ["W", "You'd better get down to work, then."]],
        q: "What does the woman suggest the man do?",
        options: ["Ask for more time.", "Go downstairs to the office.", "Start working on the report immediately.", "Give the report to someone else."],
        answer: 2,
        explain: "<b>\"You'd better ...\"</b> adalah saran, dan <b>\"get down to work\"</b> = mulai bekerja dengan serius. Wanita menyarankan pria segera mengerjakan laporannya. \"Downstairs\" hanyalah jebakan bunyi dari kata \"down\"."
      },
      {
        lines: [["W", "How did your presentation go this morning?"], ["M", "Honestly, it couldn't have gone better."]],
        q: "What does the man mean?",
        options: ["His presentation went very well.", "His presentation was a disaster.", "He hasn't given the presentation yet.", "He needed more time to prepare."],
        answer: 0,
        explain: "Pola <b>\"couldn't have + V3 + better\"</b> berarti \"tidak mungkin lebih baik lagi\" → hasilnya sangat bagus. Hati-hati: kata negatif \"couldn't\" di sini justru bermakna positif."
      },
      {
        lines: [["M", "Excuse me, does this bus go to the train station?"], ["W", "No, you'll need to take the number twelve from across the street."]],
        q: "What does the woman mean?",
        options: ["The train station is closed today.", "The man should walk to the station.", "Bus number twelve has already left.", "The man needs to catch a different bus."],
        answer: 3,
        explain: "Wanita menjawab \"No\" lalu menyebut bus nomor dua belas di seberang jalan. Artinya bus ini salah, pria harus naik bus lain. Tidak ada informasi bahwa stasiun tutup atau busnya sudah berangkat."
      },
      {
        lines: [["W", "I can't find my calculator anywhere."], ["M", "Have you checked your locker? You put it there after the lab session."]],
        q: "What does the man imply?",
        options: ["The woman should buy a new calculator.", "The calculator might be in the woman's locker.", "He borrowed the calculator during the lab.", "The lab session was cancelled."],
        answer: 1,
        explain: "Pertanyaan balik \"Have you checked your locker?\" ditambah \"You put it there after the lab\" menyiratkan (imply) kalkulatornya kemungkinan ada di loker. Soal <i>imply</i> menuntut kita menangkap maksud tersirat."
      },
      {
        lines: [["M", "Professor Lee's lectures are so hard to follow."], ["W", "Tell me about it!"]],
        q: "What does the woman mean?",
        options: ["She wants the man to describe the lectures.", "She has never attended Professor Lee's class.", "She agrees that the lectures are difficult.", "She thinks the lectures are easy."],
        answer: 2,
        explain: "<b>\"Tell me about it!\"</b> adalah ungkapan informal untuk menyatakan setuju sepenuhnya (\"Iya, betul banget!\"), bukan permintaan untuk diceritakan."
      },
      {
        lines: [["W", "Would you like another cup of coffee?"], ["M", "Thanks, but I've already had more than enough."]],
        q: "What does the man mean?",
        options: ["He doesn't want any more coffee.", "He would like tea instead.", "He wants a bigger cup.", "He hasn't had any coffee yet."],
        answer: 0,
        explain: "\"Thanks, but ...\" adalah penolakan halus, dan \"more than enough\" berarti ia sudah minum cukup banyak. Jadi ia tidak mau kopi lagi."
      },
      {
        lines: [["M", "Did you get the scholarship you applied for?"], ["W", "I'm still waiting to hear from the committee."]],
        q: "What does the woman mean?",
        options: ["She was rejected by the committee.", "She doesn't know the result yet.", "She decided not to apply.", "She is a member of the committee."],
        answer: 1,
        explain: "\"Still waiting to hear from\" = masih menunggu kabar. Artinya hasilnya belum diketahui."
      },
      {
        lines: [["W", "Wow, the library is packed today."], ["M", "It always is during final exam week."]],
        q: "What does the man mean?",
        options: ["The library will close early.", "He prefers to study at home.", "The library is usually empty.", "It is normal for the library to be crowded at this time."],
        answer: 3,
        explain: "\"It always is\" = perpustakaan selalu penuh, khususnya saat minggu ujian akhir. Jadi kondisi ramai itu hal biasa pada waktu tersebut. <b>Packed</b> = sangat penuh."
      },
      {
        lines: [["M", "I'm thinking of taking six courses this semester."], ["W", "Aren't you biting off more than you can chew?"]],
        q: "What does the woman imply?",
        options: ["The man is taking on too much.", "The man should eat before class.", "Six courses are not enough.", "She will take the same courses."],
        answer: 0,
        explain: "Idiom <b>\"bite off more than you can chew\"</b> = mengambil tanggung jawab melebihi kemampuan. Wanita menyiratkan enam mata kuliah terlalu banyak. Opsi tentang makan adalah jebakan makna harfiah."
      },
      {
        lines: [["W", "Where should I put these boxes?"], ["M", "Anywhere but the hallway. People need to walk through there."]],
        q: "What does the man mean?",
        options: ["The boxes should go in the hallway.", "The woman should throw the boxes away.", "The boxes can go anywhere except the hallway.", "He will carry the boxes himself."],
        answer: 2,
        explain: "<b>\"Anywhere but X\"</b> = di mana saja <u>kecuali</u> X. Kata \"but\" di sini berarti \"except\"."
      },
      {
        lines: [["M", "Have you finished the novel I lent you?"], ["W", "Yes. I could hardly put it down."]],
        q: "What does the woman mean?",
        options: ["The book was too heavy to hold.", "She enjoyed the novel very much.", "She hasn't started reading it.", "She lost the book somewhere."],
        answer: 1,
        explain: "\"Couldn't / could hardly put it down\" = bukunya begitu menarik sehingga sulit berhenti membaca. Jadi ia sangat menikmati novel itu."
      },
      {
        lines: [["W", "I'd like to deposit this money and open a savings account."], ["M", "Certainly. May I see your ID card first, please?"]],
        q: "Where does this conversation most likely take place?",
        options: ["At a post office.", "At a library.", "At a hotel.", "At a bank."],
        answer: 3,
        explain: "Kata kunci <b>deposit</b> (menyetor) dan <b>savings account</b> (rekening tabungan) menunjukkan percakapan terjadi di bank."
      },
      {
        lines: [["M", "Did you go to the concert last night?"], ["W", "I was going to, but I came down with a cold."]],
        q: "What does the woman mean?",
        options: ["She didn't go because she was sick.", "She went to the concert with a friend.", "The concert was cancelled.", "She caught a cold at the concert."],
        answer: 0,
        explain: "\"I was going to, but ...\" = tadinya mau, tapi batal. <b>\"Come down with\"</b> = terserang penyakit. Jadi ia tidak datang karena sakit flu."
      }
    ],
    long: [
      {
        title: "Long Dialogue — Internship Application",
        intro: "Listen to a conversation between a student and an academic advisor.",
        lines: [
          ["M", "Hi, Ms. Carter. Do you have a minute? I wanted to ask about the summer internship program."],
          ["W", "Of course, come in. Are you interested in the one at the software company or the one at the research lab?"],
          ["M", "The software company. But I heard the deadline is this Friday. Is that right?"],
          ["W", "Actually, it was extended to next Monday, so you have a few extra days. You'll need to submit a CV, a cover letter, and one recommendation letter."],
          ["M", "Only one? I thought they asked for two."],
          ["W", "They used to, but they changed the requirement this year. Have you asked any lecturers yet?"],
          ["M", "Not yet. I was thinking of asking Doctor Hassan, since I got an A in his programming course."],
          ["W", "That's a good choice. Just give him at least a week's notice. And by the way, the internship lasts eight weeks, and it's paid, which many students don't realize."],
          ["M", "That's great news. I'll email Doctor Hassan this afternoon."]
        ],
        questions: [
          {
            q: "What are the speakers mainly discussing?",
            options: ["A programming course.", "Applying for an internship.", "A research project.", "The student's final grades."],
            answer: 1,
            explain: "Sejak awal mahasiswa bertanya tentang <b>summer internship program</b>, lalu dibahas tenggat dan berkas lamaran. Topik utamanya adalah melamar magang."
          },
          {
            q: "When is the new application deadline?",
            options: ["This Friday.", "This afternoon.", "Next Monday.", "In eight weeks."],
            answer: 2,
            explain: "Advisor berkata tenggat <b>\"was extended to next Monday\"</b>. \"This Friday\" adalah tenggat lama (jebakan), \"eight weeks\" adalah lama magang."
          },
          {
            q: "How many recommendation letters are required this year?",
            options: ["One.", "Two.", "Three.", "None."],
            answer: 0,
            explain: "Disebutkan \"one recommendation letter\". Mahasiswa mengira dua, tetapi advisor menjelaskan aturan itu sudah diubah tahun ini."
          },
          {
            q: "Why does the student want to ask Doctor Hassan?",
            options: ["Doctor Hassan works at the software company.", "Doctor Hassan is his academic advisor.", "Doctor Hassan offered to help him.", "He did well in Doctor Hassan's course."],
            answer: 3,
            explain: "Alasannya: \"since I got an A in his programming course\" — ia mendapat nilai bagus di mata kuliah Dr. Hassan."
          },
          {
            q: "What will the student probably do next?",
            options: ["Send an email to Doctor Hassan.", "Visit the research lab.", "Rewrite his CV.", "Call the software company."],
            answer: 0,
            explain: "Kalimat terakhir: \"I'll email Doctor Hassan this afternoon.\" Soal \"probably do next\" biasanya dijawab dari kalimat penutup percakapan."
          }
        ]
      }
    ],
    talks: [
      {
        title: "Monologue — How Honeybees Share Information",
        intro: "Listen to part of a lecture in a biology class.",
        lines: [
          ["N", "Good morning, everyone. Today we're going to look at how honeybees share information about food."],
          ["N", "When a worker bee, called a forager, discovers a good patch of flowers, she returns to the hive and performs a series of movements known as the waggle dance."],
          ["N", "The bee walks in a straight line while shaking her body from side to side, then circles back and repeats the pattern."],
          ["N", "The direction of that straight run tells the other bees which way to fly. It shows the angle of the food source in relation to the sun."],
          ["N", "The length of the waggle run indicates distance. The longer the bee waggles, the farther away the flowers are."],
          ["N", "This behavior was first explained by the Austrian scientist Karl von Frisch, who received a Nobel Prize for his work in 1973."],
          ["N", "Remarkably, bees can even adjust the dance as the sun moves across the sky during the day."],
          ["N", "For next week, please read chapter six, which deals with how bees control the temperature inside the hive."]
        ],
        questions: [
          {
            q: "What is the lecture mainly about?",
            options: ["How bees build their hives.", "The life of Karl von Frisch.", "How honeybees communicate the location of food.", "Why flowers attract bees."],
            answer: 2,
            explain: "Kalimat pembuka menyatakan topik: \"how honeybees share information about food\". Kalimat pertama sebuah kuliah biasanya berisi topik utama."
          },
          {
            q: "According to the speaker, what does the direction of the straight run show?",
            options: ["The direction of the food relative to the sun.", "The number of flowers found.", "The age of the forager.", "The time of day."],
            answer: 0,
            explain: "Dosen menjelaskan arah lintasan lurus menunjukkan \"the angle of the food source in relation to the sun\"."
          },
          {
            q: "What does a longer waggle run indicate?",
            options: ["A larger amount of food.", "A more dangerous route.", "Warmer weather.", "A food source that is farther away."],
            answer: 3,
            explain: "\"The longer the bee waggles, the farther away the flowers are.\" Panjang tarian = jarak."
          },
          {
            q: "Who first explained the waggle dance?",
            options: ["Charles Darwin.", "Karl von Frisch.", "Gregor Mendel.", "Jane Goodall."],
            answer: 1,
            explain: "Disebutkan langsung: ilmuwan Austria <b>Karl von Frisch</b>, peraih Nobel tahun 1973."
          },
          {
            q: "What are the students asked to do for next week?",
            options: ["Observe bees in a garden.", "Write a report on the waggle dance.", "Read a chapter about hive temperature.", "Prepare for a quiz on chapter five."],
            answer: 2,
            explain: "Penutup kuliah: \"please read chapter six, which deals with how bees control the temperature inside the hive.\""
          }
        ]
      }
    ]
  },

  /* ===================== GRAMMAR ===================== */
  grammar: [
    /* ---- Part A: Fill in the Blank (Structure) ---- */
    {
      type: "structure",
      q: "Neither the students nor the lecturer ______ aware of the schedule change.",
      options: ["were", "was", "are being", "have been"],
      answer: 1,
      explain: "Pada <b>neither ... nor</b>, kata kerja mengikuti subjek yang <u>terdekat</u>: \"the lecturer\" (tunggal) → <b>was</b>."
    },
    {
      type: "structure",
      q: "______ in 1868, the university is one of the oldest in the region.",
      options: ["It was founded", "Founding", "Founded", "To found"],
      answer: 2,
      explain: "Kalimat sudah punya subjek-predikat utama (the university is). Bagian awal adalah <b>reduced clause</b> berbentuk pasif: (Having been) <b>Founded</b> in 1868. \"It was founded\" membuat dua klausa tanpa kata sambung."
    },
    {
      type: "structure",
      q: "The new library is ______ than the old one.",
      options: ["more spacious", "most spacious", "spaciouser", "as spacious"],
      answer: 0,
      explain: "Ada kata <b>than</b> → perbandingan comparative. Kata sifat panjang (spacious) memakai <b>more + adj</b>. \"As spacious\" harus diikuti \"as\", bukan \"than\"."
    },
    {
      type: "structure",
      q: "If I ______ more free time, I would join the debate club.",
      options: ["have", "will have", "had had", "had"],
      answer: 3,
      explain: "Klausa utama \"would join\" → <b>conditional type 2</b> (pengandaian masa kini): If + <b>V2 (had)</b>, would + V1."
    },
    {
      type: "structure",
      q: "Not only ______ the exam, but she also received a scholarship.",
      options: ["did she pass", "she passed", "she did pass", "passed she"],
      answer: 0,
      explain: "<b>Not only</b> di awal kalimat memicu <b>inversi</b>: auxiliary + subjek + V1 → \"did she pass\"."
    },
    {
      type: "structure",
      q: "The professor ______ we met yesterday is an expert in robotics.",
      options: ["whose", "which", "whom", "what"],
      answer: 2,
      explain: "Kata ganti untuk orang yang berfungsi sebagai <b>objek</b> (we met <u>him</u>) → <b>whom</b>. \"Which\" untuk benda, \"whose\" untuk kepemilikan."
    },
    {
      type: "structure",
      q: "Collecting vintage stamps ______ a popular hobby among retirees.",
      options: ["are", "is", "were", "have been"],
      answer: 1,
      explain: "Subjek berupa <b>gerund phrase</b> (Collecting vintage stamps) dianggap <b>tunggal</b> → is. Jangan terkecoh kata \"stamps\" yang jamak."
    },
    {
      type: "structure",
      q: "The committee recommended that every member ______ the meeting on time.",
      options: ["attends", "attended", "attending", "attend"],
      answer: 3,
      explain: "Setelah kata kerja seperti <b>recommend, suggest, insist + that</b>, digunakan <b>subjunctive</b>: verb bentuk dasar tanpa -s → attend."
    },
    {
      type: "structure",
      q: "The bridge ______ by the time the rainy season begins.",
      options: ["has completed", "will have been completed", "will complete", "completing"],
      answer: 1,
      explain: "\"By the time + present\" menunjuk titik di masa depan → <b>future perfect</b>. Jembatan <u>diselesaikan</u> (pasif) → will have been completed."
    },
    {
      type: "structure",
      q: "Students are advised to avoid ______ their assignments at the last minute.",
      options: ["doing", "to do", "do", "done"],
      answer: 0,
      explain: "Kata kerja <b>avoid</b> selalu diikuti <b>gerund (V-ing)</b>. Kata lain sejenis: enjoy, finish, consider, mind, suggest."
    },
    {
      type: "structure",
      q: "The team analyzed the data, checked the sources, and ______ the final results.",
      options: ["verify", "verifying", "to verify", "verified"],
      answer: 3,
      explain: "<b>Parallel structure</b>: analyzed, checked, ... → bentuk yang sama, V2 → verified."
    },
    {
      type: "structure",
      q: "______ the heavy rain, the match continued as planned.",
      options: ["Although", "Despite", "Because", "However"],
      answer: 1,
      explain: "Yang mengikuti adalah <b>frasa benda</b> (the heavy rain), bukan klausa. Penghubung pertentangan + noun → <b>despite / in spite of</b>. \"Although\" harus diikuti klausa (S + V)."
    },
    {
      type: "structure",
      q: "There isn't ______ information about the event on the website.",
      options: ["many", "a few", "much", "several"],
      answer: 2,
      explain: "<b>Information</b> adalah uncountable noun → memakai <b>much</b>. Many, a few, several hanya untuk benda yang dapat dihitung."
    },
    {
      type: "structure",
      q: "The manager had the technician ______ the broken printer.",
      options: ["repair", "repaired", "repairing", "to repair"],
      answer: 0,
      explain: "<b>Causative</b>: have + orang + <b>V1</b> (had the technician repair). Bandingkan: have + benda + V3 (had the printer repaired)."
    },
    {
      type: "structure",
      q: "The more you practice, ______ you will become.",
      options: ["more confident", "the most confident", "most confidently", "the more confident"],
      answer: 3,
      explain: "Pola <b>double comparative</b>: <i>The + comparative ..., the + comparative ...</i> → the more confident."
    },
    {
      type: "structure",
      q: "An important ______ of the new policy is its flexibility.",
      options: ["characterize", "characteristic", "characteristically", "characterized"],
      answer: 1,
      explain: "Setelah <b>article + adjective</b> (An important) dibutuhkan <b>noun</b> → characteristic. Ini soal <i>word form</i>."
    },
    /* ---- Part B: Error Recognition (Written Expression) ---- */
    {
      type: "error",
      q: "The number of students who {A|joins} the program {B|has} increased {C|significantly} {D|since} last year.",
      answer: 0,
      explain: "\"Who\" merujuk pada <b>students</b> (jamak), jadi kata kerjanya <b>join</b>, bukan joins. \"The number of ... has\" sudah benar karena \"the number\" tunggal."
    },
    {
      type: "error",
      q: "She {A|has lived} in Bandung {B|since} five years {C|and} still {D|enjoys} the cool weather.",
      answer: 1,
      explain: "Untuk <b>durasi</b> (five years) gunakan <b>for</b>. \"Since\" dipakai untuk titik waktu (since 2020)."
    },
    {
      type: "error",
      q: "The data {A|collected} by the research team {B|was} {C|carefully} {D|analyze} before publication.",
      answer: 3,
      explain: "Kalimat pasif: be + <b>V3</b> → was carefully <b>analyzed</b>."
    },
    {
      type: "error",
      q: "He is very {A|interesting} in {B|learning} {C|a} foreign language {D|such as} Japanese.",
      answer: 0,
      explain: "Untuk menyatakan perasaan seseorang gunakan <b>-ed adjective</b>: interested in. \"Interesting\" menggambarkan sesuatu yang menarik."
    },
    {
      type: "error",
      q: "Each of the participants {A|were} given {B|a} certificate {C|after} completing {D|the} course.",
      answer: 0,
      explain: "<b>Each of + plural noun</b> tetap dianggap tunggal → was given."
    },
    {
      type: "error",
      q: "The lecturer asked us {A|to read} the chapter, {B|summarize} it, and {C|writing} a short {D|response}.",
      answer: 2,
      explain: "<b>Parallel structure</b>: to read, summarize, and <b>write</b> (bentuk dasar). \"Writing\" merusak kesejajaran."
    },
    {
      type: "error",
      q: "{A|Although} he studied very hard, {B|but} he {C|failed} the {D|final} exam.",
      answer: 1,
      explain: "<b>Although</b> dan <b>but</b> tidak boleh dipakai bersamaan dalam satu kalimat. Hapus \"but\"."
    },
    {
      type: "error",
      q: "If she {A|had known} about the traffic jam, she {B|would leave} home {C|earlier} {D|that} morning.",
      answer: 1,
      explain: "If + <b>had + V3</b> → <b>conditional type 3</b>, sehingga klausa utama harus <b>would have + V3</b> → would have left."
    },
    {
      type: "error",
      q: "Mount Everest is {A|the most high} mountain {B|in} the world, {C|rising} about 8,849 meters {D|above} sea level.",
      answer: 0,
      explain: "Adjective pendek satu suku kata memakai <b>-est</b>: the <b>highest</b>, bukan \"the most high\"."
    },
    {
      type: "error",
      q: "{A|A lot of} useful {B|informations} about scholarships {C|is} available {D|on} the website.",
      answer: 1,
      explain: "<b>Information</b> adalah uncountable noun dan tidak memiliki bentuk jamak → information."
    },
    {
      type: "error",
      q: "The students {A|discussed about} the project {B|during} the meeting {C|that} was held {D|yesterday}.",
      answer: 0,
      explain: "<b>Discuss</b> adalah kata kerja transitif yang langsung diikuti objek: discussed the project (tanpa \"about\")."
    },
    {
      type: "error",
      q: "My older brother, {A|which} works {B|as} an engineer, {C|has} just moved {D|to} Jakarta.",
      answer: 0,
      explain: "Relative pronoun untuk <b>orang</b> adalah <b>who</b>. \"Which\" hanya untuk benda/hewan."
    },
    {
      type: "error",
      q: "Solar power is {A|an} {B|economy} alternative {C|to} fossil fuels {D|in} many countries.",
      answer: 1,
      explain: "Sebelum noun \"alternative\" dibutuhkan <b>adjective</b>: economical. \"Economy\" adalah noun. (Soal <i>word form</i>.)"
    },
    {
      type: "error",
      q: "The author {A|whose} novels {B|are} popular among teenagers {C|have} won {D|several} awards.",
      answer: 2,
      explain: "Subjek utama adalah <b>The author</b> (tunggal); \"whose novels are popular...\" hanya keterangan. Jadi predikatnya <b>has won</b>."
    },
    {
      type: "error",
      q: "Neither the manager {A|or} the staff {B|were} informed {C|about} the {D|changes}.",
      answer: 0,
      explain: "Pasangan correlative yang benar adalah <b>neither ... nor</b>, bukan neither ... or."
    },
    {
      type: "error",
      q: "The museum {A|has} {B|an} unique collection of {C|ancient} coins {D|from} Asia.",
      answer: 1,
      explain: "Pemilihan a/an berdasarkan <b>bunyi</b>, bukan huruf. \"Unique\" dibaca /juː/ (bunyi konsonan) → <b>a</b> unique."
    },
    {
      type: "error",
      q: "{A|Rarely} {B|I have} seen {C|such} a beautiful sunset {D|over} the sea.",
      answer: 1,
      explain: "Kata negatif seperti <b>rarely, seldom, never</b> di awal kalimat memicu <b>inversi</b>: Rarely <b>have I</b> seen ..."
    },
    {
      type: "error",
      q: "The {A|amount} of cars on the road {B|has} grown {C|rapidly} over the past {D|decade}.",
      answer: 0,
      explain: "<b>Cars</b> dapat dihitung → gunakan <b>number</b>, bukan amount (amount untuk uncountable: amount of water)."
    }
  ],

  /* ===================== READING ===================== */
  reading: [
    {
      title: "Coral Reefs Under Pressure",
      paragraphs: [
        "Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all known marine species. For this reason, scientists often describe them as the \"rainforests of the sea.\" Reefs also protect coastlines from storm waves and provide food and income for millions of people who live near the shore.",
        "A reef is built by tiny animals called coral polyps. Each polyp produces a hard skeleton of calcium carbonate, and over hundreds of years these skeletons accumulate into massive structures. The polyps themselves get most of their energy from microscopic algae that live inside their tissues. The algae produce food through photosynthesis, and in return they receive shelter and nutrients from the coral. This partnership is also what gives many corals their bright colors.",
        "The relationship, however, is fragile. When seawater becomes even slightly warmer than normal for several weeks, the stressed corals expel the algae. Without them, the coral tissue becomes transparent, revealing the white skeleton underneath. This process is known as bleaching. A bleached coral is not dead, but it is starving, and if the water does not cool down soon, it may not survive.",
        "Bleaching events used to be rare, but they have become far more frequent as ocean temperatures rise. Pollution from farms and cities makes the problem worse, because it weakens corals and encourages the growth of seaweed that competes with them for space.",
        "There are reasons for hope. Some reefs have recovered remarkably after bleaching when local threats such as overfishing and pollution were reduced. Researchers are also experimenting with growing heat-tolerant corals in nurseries and replanting them on damaged reefs. These efforts cannot replace global action on climate, but they may buy reefs valuable time."
      ],
      questions: [
        {
          q: "What is the passage mainly about?",
          options: ["Methods of growing coral in nurseries", "How coral reefs function and the threats they face", "The economic value of fishing near reefs", "The life cycle of microscopic algae"],
          answer: 1,
          explain: "<b>Main idea</b>: teks membahas pentingnya terumbu (¶1), cara terbentuk (¶2), ancaman bleaching & polusi (¶3–4), dan upaya penyelamatan (¶5). Opsi lain hanya detail kecil."
        },
        {
          q: "According to paragraph 1, why are coral reefs called the \"rainforests of the sea\"?",
          options: ["They contain many underwater plants that look like trees.", "They are usually located near tropical forests.", "They support a very large variety of species.", "They produce most of the oxygen in the ocean."],
          answer: 2,
          explain: "<b>Detail</b>: \"For this reason\" merujuk kalimat sebelumnya — terumbu mendukung sekitar seperempat spesies laut. Jadi alasannya adalah keanekaragaman spesies."
        },
        {
          q: "The word \"accumulate\" in paragraph 2 is closest in meaning to",
          options: ["build up", "disappear", "break apart", "dissolve"],
          answer: 0,
          explain: "<b>Vocabulary in context</b>: kerangka yang terkumpul selama ratusan tahun menjadi \"massive structures\" → menumpuk/<b>build up</b>."
        },
        {
          q: "The word \"they\" in paragraph 2 (\"in return they receive shelter\") refers to",
          options: ["the polyps", "the skeletons", "the structures", "the algae"],
          answer: 3,
          explain: "<b>Reference</b>: subjek kalimat itu \"The algae produce food ... and in return <u>they</u> receive shelter ... from the coral\". Yang menerima perlindungan dari koral adalah alga."
        },
        {
          q: "According to paragraph 3, what causes coral bleaching?",
          options: ["Seaweed growing over the coral", "Corals expelling algae because of warmer water", "Fishermen damaging the reef", "The skeleton dissolving in seawater"],
          answer: 1,
          explain: "<b>Detail</b>: \"When seawater becomes ... warmer ... the stressed corals expel the algae ... This process is known as bleaching.\""
        },
        {
          q: "It can be inferred from paragraph 3 that a bleached coral",
          options: ["is already dead", "grows faster than a healthy coral", "may recover if the water cools in time", "turns into seaweed"],
          answer: 2,
          explain: "<b>Inference</b>: \"A bleached coral is not dead ... if the water does not cool down soon, it may not survive\" → sebaliknya, jika air cepat dingin, koral bisa pulih."
        },
        {
          q: "The word \"fragile\" in paragraph 3 is closest in meaning to",
          options: ["permanent", "easily damaged", "ancient", "colorful"],
          answer: 1,
          explain: "<b>Vocabulary</b>: kalimat sesudahnya menunjukkan hubungan itu mudah rusak hanya karena air sedikit lebih hangat → fragile = <b>easily damaged</b>."
        },
        {
          q: "All of the following are mentioned as harming coral reefs EXCEPT",
          options: ["rising ocean temperatures", "pollution from farms and cities", "competition from seaweed", "the growing number of tourists"],
          answer: 3,
          explain: "<b>EXCEPT</b>: suhu (¶3–4), polusi dan rumput laut (¶4) disebut. Wisatawan <u>tidak</u> pernah disebut dalam teks."
        },
        {
          q: "Which of the following best describes the author's attitude toward the future of coral reefs?",
          options: ["Cautiously hopeful", "Completely hopeless", "Uninterested", "Angry"],
          answer: 0,
          explain: "<b>Tone/attitude</b>: ¶5 dibuka \"There are reasons for hope\", tetapi penulis juga mengingatkan upaya itu \"cannot replace global action\" → optimis yang hati-hati."
        },
        {
          q: "In which paragraph does the author describe human efforts to help damaged reefs?",
          options: ["Paragraph 1", "Paragraph 2", "Paragraph 4", "Paragraph 5"],
          answer: 3,
          explain: "<b>Location</b>: ¶5 membahas pengurangan overfishing/polusi serta penanaman koral tahan panas dari nursery."
        }
      ]
    },
    {
      title: "The Evolution of the Bicycle",
      paragraphs: [
        "Today the bicycle seems like a simple machine, but it took nearly a century of experiments to reach its familiar form. Its earliest ancestor appeared in Germany in 1817. Invented by Karl von Drais, it had two wheels and a wooden frame but no pedals. Riders moved it along by pushing their feet against the ground, much like a child on a balance bike.",
        "In the 1860s, French makers attached pedals directly to the front wheel. The result was faster, but the ride was so rough on cobblestone streets that the machine earned the nickname \"boneshaker.\" Because each turn of the pedals produced only one turn of the wheel, designers soon realized that a larger front wheel would allow a rider to travel farther with every stroke.",
        "This idea led to the \"high-wheeler\" of the 1870s, whose front wheel could be more than one and a half meters tall. It was quick and fashionable among young men, but it was also dangerous. A rider sat high above the ground, and a sudden stop could throw him forward over the handlebars.",
        "The real breakthrough came in 1885 with the \"safety bicycle.\" It had two wheels of equal size and a chain that transferred power from the pedals to the rear wheel. A few years later, air-filled rubber tires made the ride far more comfortable. The safety bicycle was easy to mount and stable to ride, so it quickly attracted a much wider public, including many women, for whom it offered a new sense of independence.",
        "Since then, materials and gears have improved, but the basic design of the safety bicycle has remained almost unchanged, which shows how well its inventors solved the problem."
      ],
      questions: [
        {
          q: "What does the passage mainly discuss?",
          options: ["Famous cyclists of the nineteenth century", "Bicycle races in Europe", "How the design of the bicycle developed over time", "How to repair an old bicycle"],
          answer: 2,
          explain: "<b>Main idea</b>: teks bergerak kronologis dari 1817 → 1860-an → 1870-an → 1885 → sekarang, menjelaskan perubahan desain sepeda."
        },
        {
          q: "According to paragraph 1, the earliest bicycle",
          options: ["was moved by the rider pushing his feet on the ground", "had pedals attached to the front wheel", "was made entirely of metal", "used a chain to turn the rear wheel"],
          answer: 0,
          explain: "<b>Detail</b>: \"no pedals. Riders moved it along by pushing their feet against the ground\"."
        },
        {
          q: "Why was the pedal-driven machine of the 1860s called a \"boneshaker\"?",
          options: ["It was made from animal bones.", "It was very noisy.", "It was popular with children.", "It gave riders a very uncomfortable ride."],
          answer: 3,
          explain: "<b>Detail</b>: \"the ride was so rough on cobblestone streets that the machine earned the nickname\" — guncangannya keras, tidak nyaman."
        },
        {
          q: "Why did designers make the front wheel larger?",
          options: ["To make the bicycle look more fashionable", "To let riders travel farther with each turn of the pedals", "To make the bicycle lighter", "To make it easier to stop suddenly"],
          answer: 1,
          explain: "<b>Detail/cause</b>: satu putaran pedal = satu putaran roda, jadi roda lebih besar = jarak tempuh lebih jauh per kayuhan."
        },
        {
          q: "The word \"him\" in paragraph 3 refers to",
          options: ["the inventor", "the designer", "a rider", "a French maker"],
          answer: 2,
          explain: "<b>Reference</b>: \"A rider sat high above the ground, and a sudden stop could throw <u>him</u> forward\" → him = a rider."
        },
        {
          q: "The word \"breakthrough\" in paragraph 4 is closest in meaning to",
          options: ["important advance", "serious accident", "long delay", "complete failure"],
          answer: 0,
          explain: "<b>Vocabulary</b>: safety bicycle menyelesaikan masalah desain sebelumnya dan bertahan hingga kini → terobosan/<b>important advance</b>."
        },
        {
          q: "Which of the following is NOT mentioned as a feature of the safety bicycle?",
          options: ["Wheels of equal size", "A chain connected to the rear wheel", "A front wheel over one and a half meters tall", "Being easy to get on"],
          answer: 2,
          explain: "<b>NOT question</b>: roda sangat besar adalah ciri <u>high-wheeler</u> (¶3), bukan safety bicycle."
        },
        {
          q: "The word \"mount\" in paragraph 4 is closest in meaning to",
          options: ["sell", "climb onto", "repair", "decorate"],
          answer: 1,
          explain: "<b>Vocabulary</b>: \"easy to mount and stable to ride\" — konteksnya menaiki sepeda → mount = <b>climb onto / get on</b>."
        },
        {
          q: "It can be inferred from paragraph 4 that before the safety bicycle,",
          options: ["women designed most bicycles", "women preferred the high-wheeler", "bicycles were cheaper", "relatively few women rode bicycles"],
          answer: 3,
          explain: "<b>Inference</b>: safety bicycle \"attracted a much wider public, including many women\" dan memberi kemandirian baru → sebelumnya sedikit perempuan yang bersepeda."
        },
        {
          q: "What does the final sentence suggest about the safety bicycle?",
          options: ["Its design was highly successful.", "Its gears have never changed.", "It is no longer used today.", "Its inventors are unknown."],
          answer: 0,
          explain: "<b>Inference</b>: desain dasar tetap hampir tidak berubah \"which shows how well its inventors solved the problem\" → desainnya sangat berhasil."
        }
      ]
    },
    {
      title: "Sleep and Memory",
      paragraphs: [
        "For a long time, sleep was viewed as a passive state in which the brain simply rested. Research over the past few decades has overturned that idea. Scientists now know that the sleeping brain is remarkably busy, and that one of its most important jobs is to strengthen the memories formed during the day.",
        "Sleep occurs in cycles of about ninety minutes, each containing several stages. During deep, slow-wave sleep, the brain appears to replay recent experiences, transferring information from the hippocampus, a short-term storage area, to the cortex, where long-term memories are kept. Later, during rapid eye movement (REM) sleep, the brain seems to link new information with what it already knows, which may explain why people sometimes wake up with a fresh solution to a problem.",
        "Experiments support this view. In one typical study, two groups of students learned a list of word pairs. One group slept for eight hours before being tested, while the other group stayed awake for the same period. The students who slept remembered significantly more pairs.",
        "These findings carry a practical message for learners. Staying up all night before an exam may provide extra hours for reading, but it deprives the brain of the very process that makes studying effective. A regular sleep schedule, by contrast, allows new knowledge to settle into lasting memory."
      ],
      questions: [
        {
          q: "What is the main idea of the passage?",
          options: ["The brain stops working during sleep.", "Dreams can predict future events.", "Sleep plays an active role in strengthening memory.", "Most students sleep too much."],
          answer: 2,
          explain: "<b>Main idea</b>: ¶1 menyatakan tesis — otak yang tidur sibuk memperkuat memori; paragraf lain mendukungnya."
        },
        {
          q: "The word \"overturned\" in paragraph 1 is closest in meaning to",
          options: ["supported", "proved wrong", "repeated", "ignored"],
          answer: 1,
          explain: "<b>Vocabulary</b>: anggapan lama (tidur = pasif) digantikan pengetahuan baru (otak sibuk) → overturned = <b>proved wrong</b>."
        },
        {
          q: "The word \"its\" in paragraph 1 refers to",
          options: ["the sleeping brain", "research", "the idea", "the day"],
          answer: 0,
          explain: "<b>Reference</b>: \"the sleeping brain is remarkably busy, and ... one of <u>its</u> most important jobs\" → pekerjaan otak yang tidur."
        },
        {
          q: "According to paragraph 2, the hippocampus",
          options: ["is active only during REM sleep", "controls eye movement", "is where long-term memories are kept", "is a short-term storage area"],
          answer: 3,
          explain: "<b>Detail</b>: teks menyebut \"the hippocampus, a short-term storage area\". Memori jangka panjang disimpan di <u>cortex</u>."
        },
        {
          q: "According to the passage, why might people wake up with a solution to a problem?",
          options: ["The hippocampus switches off at night.", "During REM sleep the brain connects new and existing knowledge.", "They sleep for less than ninety minutes.", "They study the problem in their dreams."],
          answer: 1,
          explain: "<b>Detail</b>: REM \"link new information with what it already knows, which may explain why people sometimes wake up with a fresh solution\"."
        },
        {
          q: "In the study described in paragraph 3, the students who stayed awake",
          options: ["remembered fewer word pairs", "remembered more word pairs", "were not tested", "studied for a longer time"],
          answer: 0,
          explain: "<b>Inference</b>: kelompok yang tidur mengingat \"significantly more pairs\", berarti kelompok yang terjaga mengingat lebih sedikit."
        },
        {
          q: "Why does the author mention the study in paragraph 3?",
          options: ["To criticize earlier scientists", "To describe the stages of sleep", "To introduce a new topic", "To provide evidence for the claim about sleep and memory"],
          answer: 3,
          explain: "<b>Author's purpose</b>: paragraf dibuka \"Experiments support this view\" → studi itu bukti pendukung."
        },
        {
          q: "The author would most likely advise students to",
          options: ["study all night before an exam", "keep a regular sleep schedule", "avoid REM sleep", "sleep during lectures"],
          answer: 1,
          explain: "<b>Inference/application</b>: ¶4 — begadang merugikan, sedangkan \"a regular sleep schedule ... allows new knowledge to settle into lasting memory\"."
        }
      ]
    },
    {
      title: "Healthy Soil",
      note: "Soal & pembahasan dari contoh soal Reading EPrT LaC Tel-U; teks bacaan ditulis ulang agar sesuai dengan soal.",
      paragraphs: [
        "We lavish attention on our food. We debate the benefits of conventional versus organic produce, count calories, and follow the latest diet trends. Yet we give remarkably little thought to the ground in which almost all of that food is grown.",
        "Soil is the thin skin of our mother Earth, the fragile layer on the planet's surface in which we plant seeds and grow the crops that feed us. Together with water and sunlight, it is the foundation of agriculture, and today it must support more than seven billion people.",
        "Unfortunately, we have not treated it well. Through our own actions, such as clearing forests, overgrazing, and farming the same land too intensively, we are losing soil faster than nature can create it. A single centimeter of topsoil can take hundreds of years to form, but it can be washed or blown away in just a few seasons.",
        "The scale of the damage is alarming. According to the United Nations, roughly one-third of the world's soil is already moderately or highly degraded. Studies in the journal Science and reports in National Geographic have warned that, as the population keeps growing, the pressure on the remaining farmland will only increase.",
        "History shows how serious the consequences can be. In the late 1930s, the American soil scientist Walter Lowdermilk traveled across the Middle East, North Africa, and Europe to investigate why some past civilizations had failed while others endured. He examined the effects of farming practices over the previous 7,000 years.",
        "Lowdermilk found that societies that neglected, exploited, and damaged their soil eventually declined, while those that protected it, for example by building terraces and preventing erosion, were able to flourish for centuries.",
        "His findings came at a time when the United States was learning the same lesson at home. During the Dust Bowl of the 1930s, years of poor farming combined with severe drought turned huge areas of the Great Plains into dust, forcing thousands of families to abandon their farms.",
        "Protecting soil will not be easy. The goals of soil conservation are challenging to achieve, because they require farmers, governments, and consumers to change long-standing habits.",
        "As we celebrate World Food Day in October, it is worth remembering that healthy soils are vital to the success of farmers and to the food security of everyone. Unless we ramp up our efforts to conserve remaining soils, we may follow the path of the civilizations that disappeared before us."
      ],
      questions: [
        {
          q: "What is the topic of the text?",
          options: ["organic food", "healthy soil", "land nutrition", "soil erosion"],
          answer: 1,
          explain: "Ini adalah soal <b>main idea</b> atau topik utama. Cara menjawabnya adalah melihat gambaran besar dari keseluruhan teks, bukan hanya satu paragraf. Teks ini membahas pentingnya tanah yang sehat bagi kelangsungan hidup manusia dan peradaban, termasuk dampak kerusakan tanah, penelitian Lowdermilk tentang peradaban yang runtuh akibat pengabaian tanah, hingga seruan untuk menjaga tanah yang tersisa. Jadi topiknya adalah <b>healthy soil</b>. Pilihan A (organic food) hanya disebut sekilas di paragraf pertama sebagai kontras. Pilihan C (land nutrition) tidak menjadi fokus pembahasan. Pilihan D (soil erosion) memang dibahas, tetapi hanya sebagai subtopik."
        },
        {
          q: "The passage indicated that ______.",
          options: ["the challenging goals will be easy to achieve", "we will lose soil sooner than nature can create it", "the population will keep on lowering pollution", "more food will only rise as population decrease"],
          answer: 1,
          explain: "Ini adalah soal <b>stated detail</b>, yaitu informasi yang dinyatakan langsung dalam teks. Jawaban B sesuai dengan paragraf ketiga: karena tindakan kita sendiri, kita kehilangan tanah lebih cepat daripada alam bisa menciptakannya kembali. Pilihan A bertentangan dengan teks, yang justru menyatakan tujuan konservasi tanah sulit dicapai. Pilihan C tidak disebutkan dalam teks. Pilihan D keliru karena teks menyebut tekanan terhadap tanah meningkat seiring populasi yang terus bertambah, bukan berkurang."
        },
        {
          q: "Which of the following is true?",
          options: ["Land is the connection of congested dirt.", "The land crops is feeding five billion people.", "Human is exploiting natural resources.", "Soil is the thin skin of our mother Earth."],
          answer: 3,
          explain: "Ini adalah soal <b>stated detail</b>: pilih pernyataan yang sesuai dengan isi teks. Jawaban D langsung merujuk pada paragraf kedua yang menyebut tanah sebagai lapisan tipis di permukaan Bumi tempat kita menanam tanaman pangan. Pilihan A tidak disebutkan. Pilihan B salah karena teks menyebut tujuh miliar orang, bukan lima miliar. Pilihan C tidak dinyatakan secara eksplisit; yang ada dalam teks adalah manusia mengabaikan, mengeksploitasi, dan merusak <i>tanah</i>, bukan \"sumber daya alam\" secara umum, sehingga D lebih akurat."
        },
        {
          q: "All of the following are true, EXCEPT ______.",
          options: ["healthy soils are vital to the success of farmers", "two-third of the world's soil are damaged", "we grow conventional and organic food", "we lavish attention on our food"],
          answer: 1,
          explain: "Ini adalah soal <b>EXCEPT</b>: cari satu pernyataan yang TIDAK sesuai dengan teks. Pilihan B menyebut dua pertiga tanah dunia rusak, padahal teks menyebut <b>sepertiga (one-third)</b>. Ini jebakan fakta. Pilihan A benar (paragraf terakhir). Pilihan C benar karena paragraf pertama menyebut makanan \"conventional\" dan \"organic\". Pilihan D benar karena paragraf pertama menyebut \"We lavish attention on our food.\""
        },
        {
          q: "The pronoun \"it\" in paragraph 3 refers to which of the following?",
          options: ["soil", "nature", "water", "farmland"],
          answer: 0,
          explain: "Ini adalah soal <b>pronoun reference</b>. Cari kata \"it\" di paragraf ketiga lalu telusuri kata benda yang dirujuknya: \"we are losing soil faster than nature can create <u>it</u>\". Yang diciptakan alam dan yang kita hilangkan adalah hal yang sama, yaitu <b>soil</b>. Pilihan B (nature) adalah subjek yang melakukan tindakan, bukan objeknya. Pilihan C dan D tidak relevan dengan kalimat tersebut."
        },
        {
          q: "It is implied in the passage that Lowdermilk ______.",
          options: ["is a European soil scientist", "looks at agricultural effect", "finds method of soil flourishing", "travels across the Middle East"],
          answer: 1,
          explain: "Ini adalah soal <b>inference</b> (informasi tersirat). Lowdermilk menyelidiki mengapa peradaban masa lalu gagal atau bertahan dengan melihat dampak praktik pertanian selama 7.000 tahun, yang secara tersirat berarti ia mengkaji <b>pengaruh pertanian (agricultural effect)</b>. Pilihan A salah karena ia ilmuwan tanah Amerika. Pilihan C kurang tepat karena yang ia temukan adalah cara pengelolaan tanah yang membuat masyarakat bertahan, bukan \"metode menyuburkan tanah\". Pilihan D memang disebutkan, tetapi itu informasi tersurat (bukan tersirat) dan tidak merangkum tujuan utamanya."
        },
        {
          q: "What is most likely discussed in the paragraph following the passage?",
          options: ["World Earth Day", "World Food Day", "World Soil Day", "World Environment Day"],
          answer: 2,
          explain: "Ini adalah soal <b>implied next topic</b>. Paragraf terakhir menyebut World Food Day di bulan Oktober dan menekankan pentingnya tanah yang sehat. Alur ini mengarah ke isu tanah secara lebih spesifik, sehingga logis jika paragraf berikutnya membahas <b>World Soil Day</b> (diperingati setiap 5 Desember dan diakui FAO serta PBB). Pilihan B sudah disebut di paragraf terakhir, sedangkan A dan D tidak berkaitan cukup kuat dengan pesan akhir teks."
        },
        {
          q: "What is the meaning of \"lavish\" in paragraph 1?",
          options: ["slight", "expend", "spurn", "expand"],
          answer: 1,
          explain: "Ini adalah soal <b>vocabulary in context</b>. Dalam \"We lavish attention on our food\", <i>lavish</i> adalah kata kerja yang berarti mencurahkan sesuatu secara berlimpah. Pilihan B <b>expend</b> (mengeluarkan/mencurahkan) paling mendekati. Pilihan A (slight) berarti meremehkan, berlawanan makna. Pilihan C (spurn) berarti menolak dengan kasar. Pilihan D (expand) berarti memperluas, tidak sesuai konteks."
        },
        {
          q: "The word \"ramp\" in the last paragraph is best replaced by ______.",
          options: ["detour", "incline", "inverse", "descent"],
          answer: 1,
          explain: "Kata ini bagian dari frasa <b>\"ramp up\"</b> dalam \"Unless we ramp up our efforts to conserve remaining soils\", yang berarti meningkatkan secara bertahap. Dari pilihan yang ada, yang paling dekat dengan konsep \"naik/meningkat\" adalah <b>incline</b> (tanjakan, kemiringan ke atas). Pilihan A (detour) berarti jalan memutar. Pilihan C (inverse) berarti kebalikan. Pilihan D (descent) berarti penurunan, berlawanan dengan makna \"ramp up\"."
        },
        {
          q: "What is the tone of the passage?",
          options: ["Informative", "Outraged", "Judicial", "Emotional"],
          answer: 0,
          explain: "Ini adalah soal <b>tone</b>. Teks menyajikan fakta, data dari berbagai sumber (United Nations, jurnal Science, National Geographic), serta catatan sejarah tentang peradaban yang runtuh akibat kerusakan tanah, dengan cara yang terukur dan faktual. Maka nadanya <b>informative</b>. Pilihan B (outraged) tidak sesuai karena tidak ada ekspresi kemarahan. Pilihan C (judicial) tidak tepat karena penulis tidak memvonis pihak tertentu. Pilihan D (emotional) tidak tepat karena pendekatannya ilmiah dan faktual."
        }
      ]
    }
  ],

  sources: [
    { label: "Contoh Soal Reading EPrT beserta Jawaban dan Pembahasannya", url: "https://lac.telkomuniversity.ac.id/contoh-soal-reading-eprt-beserta-jawaban-dan-pembahasannya/" },
    { label: "Contoh Soal Grammar EPrT Lengkap dengan Jawaban dan Pembahasannya", url: "https://lac.telkomuniversity.ac.id/blog/contoh-soal-grammar-eprt-lengkap-dengan-jawaban-dan-pembahasannya/" },
    { label: "Contoh Soal Grammar EPrT Tiap Bagian dan Jawabannya", url: "https://lac.telkomuniversity.ac.id/contoh-soal-grammar-eprt-tiap-bagian-dan-jawabannya/" },
    { label: "Contoh Soal Reading EPrT (LinkedIn)", url: "https://www.linkedin.com/pulse/contoh-soal-reading-eprt-jawaban-dan-8e31c/" },
    { label: "10 Contoh Soal Reading Competence EPrT", url: "https://lac.telkomuniversity.ac.id/blog/10-contoh-soal-reading-competence-eprt-pusat-bahasa-tel-u/" },
    { label: "10 Contoh Soal Grammar Competence EPrT", url: "https://lac.telkomuniversity.ac.id/blog/10-contoh-soal-grammar-competence-eprt-pusat-bahasa-tel-u/" },
    { label: "Soal Listening Competence EPrT", url: "https://lac.telkomuniversity.ac.id/blog/soal-listening-competence-eprt-telkom-university-language-center/" }
  ]
};
