/* Grammar per topik — dari contoh soal Grammar EPrT LaC Tel-U (ditambahkan oleh pengguna). */
(function () {
  const T = (topic, q, options, answer, explain) => ({ type: "structure", topic, q, options, answer, explain });
  window.EPRT_DATA.grammar.push(
    /* 1. Subject-Verb Agreement */
    T("Subject-Verb Agreement", "The list of items ___ on the table.", ["are", "is", "have", "were"], 1,
      "Subjek sesungguhnya adalah <b>the list</b> (bukan items), sehingga kata kerja mengikuti bentuk tunggal → <b>is</b>."),
    T("Subject-Verb Agreement", "Either the teachers or the principal ___ going to make the announcement.", ["are", "were", "is", "have"], 2,
      "Pada <b>either…or</b>, kata kerja mengikuti subjek yang paling dekat, yaitu \"the principal\" (tunggal) → <b>is</b>."),
    T("Subject-Verb Agreement", "The dogs in the backyard ___ loudly every night.", ["bark", "barks", "barking", "is barking"], 0,
      "Subjeknya <b>dogs</b> (jamak), jadi kata kerja yang benar adalah <b>bark</b>. \"In the backyard\" hanya keterangan."),
    /* 2. Tenses */
    T("Tenses", "She ___ to the library every Saturday.", ["go", "goes", "went", "gone"], 1,
      "Kebiasaan rutin (habit) → <b>simple present</b>. Subjek \"She\" → <b>goes</b>."),
    T("Tenses", "They ___ a movie last night.", ["watch", "watched", "watching", "watches"], 1,
      "Keterangan waktu <b>last night</b> → simple past. Bentuk lampau dari watch adalah <b>watched</b>."),
    T("Tenses", "I think it ___ tomorrow.", ["rains", "rained", "will rain", "raining"], 2,
      "Kata <b>tomorrow</b> menunjukkan future → <b>will + V1</b>."),
    /* 3. Passive Voice */
    T("Passive Voice", "The homework ___ by the students yesterday.", ["was completed", "completed", "has completed", "is completed"], 0,
      "Ada kata <b>yesterday</b> → past tense. Kalimat pasif (by the students) → <b>was + V3</b>."),
    T("Passive Voice", "The documents ___ by the manager before the meeting.", ["will be reviewed", "reviewed", "review", "reviews"], 0,
      "Dokumen <u>diperiksa</u> oleh manajer (pasif) sebelum rapat yang akan datang → future passive: <b>will be + V3</b>."),
    T("Passive Voice", "The cakes ___ already ___ by the children.", ["are, eat", "have, eaten", "have, ate", "has, eaten"], 1,
      "Pola present perfect: <b>have/has + V3</b>. Subjek \"cakes\" jamak → <b>have</b>, dan V3 dari eat adalah <b>eaten</b>. <i>Catatan:</i> bentuk pasif yang lengkap adalah \"have already <b>been</b> eaten\"; dari pilihan yang ada, B paling tepat."),
    /* 4. Gerund vs Infinitive */
    T("Gerund vs Infinitive", "She enjoys ___ novels in her free time.", ["read", "reading", "to read", "reads"], 1,
      "Setelah kata kerja <b>enjoy</b> selalu diikuti gerund (V-ing) → <b>reading</b>."),
    T("Gerund vs Infinitive", "I want ___ a new car next year.", ["buying", "bought", "buy", "to buy"], 3,
      "<b>Want</b> diikuti infinitive (to + V1) → <b>to buy</b>."),
    T("Gerund vs Infinitive", "They decided ___ early to avoid traffic.", ["leaving", "leave", "to leave", "left"], 2,
      "Setelah kata kerja <b>decide</b>, gunakan infinitive (to + V1) → <b>to leave</b>."),
    /* 5. Parallel Structure */
    T("Parallel Structure", "He likes swimming, hiking, and ___.", ["to bike", "biking", "ride bike", "bikes"], 1,
      "Sebelumnya sudah ada bentuk -ing (swimming, hiking), maka harus konsisten → <b>biking</b>."),
    T("Parallel Structure", "My mom enjoys cooking, baking, and ___.", ["to sew", "sewing", "sew", "sews"], 1,
      "Gunakan pola yang sejajar dengan bentuk -ing (gerund) → <b>sewing</b>."),
    T("Parallel Structure", "The job requires patience, accuracy, and ___.", ["be creative", "creativity", "creative", "to be creative"], 1,
      "Ketiganya harus berbentuk <b>noun</b>: patience, accuracy, <b>creativity</b>."),
    /* 6. Prepositions */
    T("Prepositions", "We arrived ___ the airport at 6 a.m.", ["in", "at", "on", "to"], 1,
      "Untuk tempat spesifik (airport) → gunakan <b>at</b>. Catatan: \"arrive\" tidak diikuti \"to\"."),
    T("Prepositions", "She was born ___ July.", ["in", "at", "on", "to"], 0,
      "Untuk bulan → gunakan preposisi <b>in</b> (in July, in 2020). Untuk tanggal/hari → on."),
    T("Prepositions", "The picture is hanging ___ the wall.", ["in", "at", "on", "to"], 2,
      "Untuk sesuatu yang menempel di permukaan (gambar di dinding) → gunakan <b>on</b>."),
    /* 7. Relative Clauses */
    T("Relative Clauses", "The book ___ I borrowed from the library was interesting.", ["who", "whose", "which", "whom"], 2,
      "\"Book\" adalah benda → pakai <b>which</b>."),
    T("Relative Clauses", "The student ___ won the competition is my classmate.", ["whom", "who", "which", "where"], 1,
      "Untuk orang yang berfungsi sebagai <b>subjek</b> (… won the competition) → gunakan <b>who</b>."),
    T("Relative Clauses", "The woman ___ I met yesterday was very friendly.", ["who", "which", "whom", "where"], 2,
      "Orang sebagai <b>objek</b> (I met <u>her</u>) → gunakan <b>whom</b> (meskipun \"who\" sering dipakai dalam percakapan informal)."),
    /* 8. Conditionals */
    T("Conditionals", "If I had studied harder, I ___ the exam.", ["passed", "will pass", "would have passed", "would pass"], 2,
      "<b>Third conditional</b>: If + past perfect, <b>would have + V3</b>."),
    T("Conditionals", "If it rains tomorrow, we ___ the trip.", ["will cancel", "cancelled", "would cancel", "had cancelled"], 0,
      "<b>First conditional</b>: If + present, <b>will + V1</b>."),
    T("Conditionals", "If I were you, I ___ that opportunity.", ["will take", "would take", "would have taken", "take"], 1,
      "<b>Second conditional</b>: If + past simple (were), <b>would + V1</b>."),
    /* 9. Pronouns */
    T("Pronouns", "Each of the boys has ___ own locker.", ["their", "his", "her", "them"], 1,
      "<b>Each</b> dianggap subjek tunggal, dan yang dirujuk adalah boys → possessive adjective <b>his</b>."),
    T("Pronouns", "Neither Sarah nor her friends brought ___ jackets.", ["her", "their", "his", "hers"], 1,
      "\"Friends\" adalah subjek jamak yang paling dekat, jadi gunakan <b>their</b>."),
    T("Pronouns", "I saw Peter and gave ___ the book.", ["he", "him", "his", "himself"], 1,
      "Setelah kata kerja \"gave\" dibutuhkan <b>objek</b> → <b>him</b>."),
    /* 10. Articles */
    T("Articles", "She adopted ___ dog from the shelter.", ["the", "a", "an", "some"], 1,
      "Disebut pertama kali, dan \"dog\" dimulai bunyi konsonan → <b>a</b>."),
    T("Articles", "I saw ___ owl sitting on the tree.", ["a", "an", "the", "some"], 1,
      "\"Owl\" dimulai dengan bunyi vokal → <b>an</b>."),
    T("Articles", "Please close ___ door behind you.", ["a", "an", "the", "that"], 2,
      "<b>The</b> digunakan untuk sesuatu yang sudah diketahui atau spesifik (pintu yang baru saja dilewati)."),
    /* 11. Nouns */
    T("Nouns", "Too ___ homework can lead to stress and burnout among students.", ["much", "many", "little", "few"], 0,
      "<b>Homework</b> adalah uncountable noun → <b>much</b>. \"Too little\" secara makna tidak menyebabkan stres."),
    T("Nouns", "We collected data from a ___ of experts across different fields.", ["group", "groups", "group of", "grouping"], 0,
      "Bentuk noun phrase ada dua: (a) modifier + head noun; (b) head noun + <b>of</b> + modifier. Setelah \"a\" dan sebelum \"of\" dibutuhkan head noun tunggal → <b>group</b>."),
    T("Nouns", "The research team observed a rapid ___ in bacteria after the new treatment was introduced.", ["grow", "growing", "growth", "grew"], 2,
      "Noun phrase bentuk (a): a + adjective (rapid) + <b>noun</b> → <b>growth</b>."),
    /* 12. Discourse Markers */
    T("Discourse Markers", "Global warming affects not only the environment but also human health. ___, it poses serious economic risks.", ["Therefore", "However", "On the contrary", "In addition to"], 0,
      "Kunci dari sumber: <b>Therefore</b>, karena klausa kedua memberi tambahan informasi dari klausa pertama. <i>Catatan:</i> secara ketat, penanda tambahan yang ideal adalah \"In addition\" / \"Moreover\". Opsi D (\"In addition <u>to</u>\") salah karena harus diikuti noun, sedangkan However/On the contrary menyatakan kontras."),
    T("Discourse Markers", "Many students find grammar challenging. ___, they still need to master it to succeed in academic writing.", ["Because", "Nevertheless", "For instance", "So that"], 1,
      "Ide kedua kalimat saling <b>kontras</b> (sulit, tetapi tetap harus dikuasai) → <b>Nevertheless</b>."),
    T("Discourse Markers", "The company improved its sustainability policy. ___, it reduced waste by 40%.", ["In contrast", "For example", "Whereas", "On the contrary"], 1,
      "Klausa kedua adalah <b>ilustrasi/contoh</b> dari ide pada klausa pertama → <b>For example</b>."),
    /* 13. Subordinate & Coordinate Clauses */
    T("Subordinate & Coordinate Clauses", "We won't go hiking ___ it stops raining.", ["while", "unless", "because", "although"], 1,
      "Subordinating conjunction yang menerangkan <b>kondisi</b>: unless = if … not."),
    T("Subordinate & Coordinate Clauses", "The technician repaired the system ___ the problem didn't return.", ["when", "if", "until", "so that"], 3,
      "Subordinating conjunction yang menerangkan <b>hasil/tujuan</b> → <b>so that</b>."),
    T("Subordinate & Coordinate Clauses", "The students were tired, ___ they continued working on the project.", ["but", "because", "although", "since"], 0,
      "Kedua klausa adalah klausa lengkap yang setara dan dipisah koma, jadi dibutuhkan <b>coordinating conjunction</b>. Hubungannya kontras → <b>but</b>."),
    /* 14. Modality */
    T("Modality", "According to the applicable regulations, all employees ___ wear ID cards while on company property.", ["might", "could", "must", "may"], 2,
      "Ada kata <b>regulations</b> yang ketentuannya mutlak. Dalam tingkat keharusan modal, <b>must</b> adalah yang paling tinggi."),
    T("Modality", "To avoid penalties, businesses ___ submit their tax reports by the end of March.", ["can", "should", "might", "would"], 1,
      "Dibutuhkan modal yang menunjukkan kewajiban/keharusan; dari pilihan yang ada, yang paling kuat adalah <b>should</b>."),
    T("Modality", "All electrical equipment ___ be inspected regularly to ensure safety.", ["is supposed to", "is likely to", "are supposed to", "will be able to"], 0,
      "Dibutuhkan ungkapan kewajiban, dan kata kerjanya harus sesuai subjek. <b>Equipment</b> adalah uncountable noun sehingga dianggap tunggal → <b>is</b> supposed to (bukan are).")
  );
})();
