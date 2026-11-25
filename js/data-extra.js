/* Soal tambahan dari contoh soal EPrT LaC Tel-U & teks yang dikirim pengguna.
 * Untuk soal yang di sumbernya tidak ada kunci/pembahasan, kunci & pembahasan ditulis sendiri.
 * Soal error recognition: huruf A–D diurutkan sesuai posisi di kalimat (seperti tes aslinya),
 * sehingga hurufnya bisa berbeda dari urutan opsi di sumber.
 */
(function () {
  const D = window.EPRT_DATA;
  const F = (q, options, answer, explain) => ({ type: "structure", q, options, answer, explain });
  const E = (q, answer, explain) => ({ type: "error", q, answer, explain });

  D.grammar.push(
    /* ---------- Contoh Soal Grammar Tiap Bagian (Fill in the Blank) ---------- */
    F("To benefit their international political campaigns, most people think that presidents should be able to speak ___ than two or three languages.",
      ["more", "many", "much", "most"], 0,
      "Frasa <b>\"than two or three languages\"</b> menandakan perbandingan (comparative). Yang dibandingkan adalah <u>jumlah</u> bahasa (countable), sehingga dipakai <b>more</b> sebagai bentuk comparative dari \"many\". <i>Many</i> bukan bentuk comparative, <i>much</i> untuk uncountable noun, dan <i>most</i> adalah superlative sehingga tidak bisa dipakai dengan \"than\"."),
    F("Recent years studies proved that speaking a language with native speakers ___ not the same as speaking it with your peer learners.",
      ["is", "are", "do", "does"], 0,
      "Soal <b>subject-verb agreement</b>. Subjek klausa setelah \"that\" adalah gerund phrase <b>\"speaking a language with native speakers\"</b>, dan gerund phrase selalu dianggap tunggal → <b>is</b>. Jangan terkecoh \"native speakers\" yang jamak. <i>Do/does</i> tidak tepat karena kalimat ini butuh to be (diikuti \"not the same\"), bukan auxiliary kata kerja."),
    F("The ___ nature of urban poverty will require policymakers to design multi-dimensional solutions to address many issues.",
      ["complicity", "complication", "complicated", "complicate"], 2,
      "Soal <b>word form</b>. Blank berada di antara artikel \"The\" dan noun \"nature\", jadi harus diisi <b>adjective</b> → <b>complicated</b> (rumit). <i>Complicity</i> (keterlibatan dalam kejahatan) dan <i>complication</i> adalah noun, sedangkan <i>complicate</i> adalah verb."),
    F("The teacher was happy to see ______ students helping each other in solving the problem.",
      ["him", "he", "their", "his"], 3,
      "Sebelum noun \"students\" dibutuhkan <b>possessive adjective</b>. Rujukannya \"the teacher\" (tunggal) → <b>his</b>. <i>Him</i> adalah object pronoun, <i>he</i> subject pronoun, dan <i>their</i> untuk rujukan jamak."),
    F("Freshly picked from the orchard, the ripe peaches tasted even ___ in the summer sun.",
      ["sweetest", "sweet", "sweeter", "sweetly"], 2,
      "Kata <b>even</b> dipakai untuk memperkuat bentuk <b>comparative</b> (even better, even sweeter) → <b>sweeter</b>. <i>Sweetest</i> adalah superlative. <i>Sweetly</i> adalah adverb, padahal \"tasted\" adalah linking verb yang harus diikuti adjective."),

    /* ---------- Contoh Soal Grammar Tiap Bagian (Error Recognition) ---------- */
    E("A {A|group} of children {B|dares} to play {C|hide-and-seek} around that {D|house haunted}.", 3,
      "Adjective harus diletakkan <b>sebelum</b> noun: <b>haunted house</b>, bukan \"house haunted\". \"Dares\" sudah benar karena subjek \"a group\" tunggal."),
    E("{A|Today,} Mr. Evan {B|is} the chief executive {C|office} of that international oil {D|company}.", 2,
      "Jabatan yang merujuk pada orang adalah <b>chief executive officer</b> (CEO). <i>Office</i> berarti kantor/ruangan. Kesalahan pemilihan kata yang mirip bentuknya."),
    E("Ronaldo {A|had confirmed} that he will {B|play} for {C|an} new football team the {D|following year}.", 2,
      "Pemilihan a/an ditentukan oleh <b>bunyi</b> awal kata berikutnya. \"New\" diawali bunyi konsonan /n/ → <b>a</b> new football team. \"An\" hanya untuk bunyi vokal (an orange, an hour)."),
    E("The {A|boy little} was {B|eager} to know {C|whether} dinosaurs {D|still} exist or not.", 0,
      "Urutan adjective–noun terbalik: seharusnya <b>little boy</b>. Kesalahan ini sering terbawa dari pola bahasa Indonesia (\"anak kecil\")."),
    E("If {A|I were} a millionaire, I would {B|traveling} around the world {C|often} with my {D|beloved family}.", 1,
      "<b>Conditional type 2</b>: If + past, would + <b>V1</b>. Jadi \"would <b>travel</b>\", bukan \"would traveling\". \"I were\" sudah benar karena conditional type 2 memakai \"were\" untuk semua subjek."),

    /* ---------- 10 Contoh Soal Grammar Competence: Grammar A ---------- */
    F("The ancient Greeks worshiped ___ gods within a culture that tolerated diversity.",
      ["many", "a little", "every", "much"], 0,
      "\"Gods\" adalah countable noun jamak → <b>many</b>. <i>A little</i> dan <i>much</i> untuk uncountable noun; <i>every</i> harus diikuti noun tunggal (every god)."),
    F("An airplane flies ___ its wings create lift, the upward force on the plane.",
      ["due to", "therefore", "since", "as a result of"], 2,
      "Setelah blank ada <b>klausa lengkap</b> (its wings create lift), jadi dibutuhkan conjunction sebab → <b>since</b>. <i>Due to</i> dan <i>as a result of</i> harus diikuti noun phrase, sedangkan <i>therefore</i> menyatakan akibat, bukan sebab."),
    F("Lilienthal's death in an 1896 glider crash convinced the Wright brothers that they not only must build successful airplanes, ___ must learn to fly them correctly.",
      ["but also", "also", "and also", "they also"], 0,
      "Pasangan correlative <b>not only … but also</b> harus lengkap. Opsi lain tidak membentuk pasangan yang benar dengan \"not only\"."),
    F("Sacagawea accompanied the Lewis and Clark Expedition in 1805 and 1806 and ___ helped persuade many Native American tribes of the peaceful intentions of the expedition.",
      ["her presence", "she is present", "with her presence", "her present"], 0,
      "Setelah \"and\" dibutuhkan <b>subjek</b> baru untuk kata kerja \"helped\" → noun phrase <b>her presence</b>. <i>She is present</i> sudah klausa lengkap, <i>with her presence</i> adalah frasa preposisi (tidak bisa jadi subjek), dan <i>present</i> berarti hadiah/sekarang."),
    F("The Sierra Nevada extends from northwest to southeast for approximately 640 km and varies ___ from 65 to 130 km.",
      ["with width", "in width", "wide", "width"], 1,
      "Ungkapan yang benar adalah <b>vary in + noun</b> (vary in size, vary in width) → <b>in width</b>."),

    /* ---------- 10 Contoh Soal Grammar Competence: Grammar B ---------- */
    E("Although {A|numerous} renovations and additions, the White House {B|has retain} {C|its} {D|classically} simple style.", 1,
      "Present perfect = has + <b>V3</b> → <b>has retained</b>. <i>Catatan:</i> di sumber tertulis \"retain edits\" (salah ketik dari \"retained its\"). Kata \"Although\" juga sebaiknya \"Despite\" karena diikuti noun phrase, tetapi bagian itu tidak digarisbawahi."),
    E("Brain cells are {A|extremely sensitive} to {B|such oxygen} deprivation, and if they are deprived of oxygen and nutrients for {C|more than} several minutes, they {D|would have starved} to death.", 3,
      "Klausa if memakai <b>present</b> (are deprived) → <b>conditional type 1</b> (fakta/umum), sehingga klausa utama harus <b>will starve</b> / starve, bukan \"would have starved\" (type 3)."),
    E("{A|Known} for his {B|explosion} power and quick {C|knockouts}, Tyson dominated boxing in the {D|late} 1980s.", 1,
      "Sebelum noun \"power\" dibutuhkan <b>adjective</b> → <b>explosive</b> power. \"Explosion\" adalah noun."),
    E("The {A|origin} of Thanksgiving Day probably {B|tracing} to harvest festivals that have been {C|traditional} in many parts of the world {D|since} ancient times.", 1,
      "Kalimat butuh kata kerja utama; \"tracing\" (V-ing) tidak bisa berdiri sendiri. Yang benar: \"can probably <b>be traced</b> to\" (pasif, karena asal-usul <u>ditelusuri</u>)."),
    E("Venus is the {A|bright} planet in the solar {B|system} and was actually {C|named} after the Roman {D|goddess} of love.", 0,
      "Perbandingan dengan seluruh planet di tata surya → <b>superlative</b>: the <b>brightest</b> planet."),
  );

  D.reading.push(
    {
      title: "Uses of Glass",
      note: "Teks dari \"10 Contoh Soal Reading Competence EPrT\" (dikirim pengguna). Sumber tidak menyertakan kunci jawaban, jadi kunci & pembahasan ditulis sendiri.",
      paragraphs: [
        "Glass fibers are extremely strong; for their weight, they are stronger than steel. They are made by forcing molten glass through tiny holes called spinnerets. As many as four hundred spinnerets are placed together, and threads of glass much thinner than human hairs are drawn off at great speed, miles of thread per minute. As they speed along, the threads are coated thinly with a type of glue and twisted into a yarn. The glass fibers are used with plastics to make boats and car bodies. They are also woven into heavy cloth for window draperies and into strong belts for making tires stronger.",
        "A special kind of glass fiber is causing a revolution in communications. A signal of light can be made to travel along the fiber for very long distances. By changing the quality of the light, many messages can be sent at once along one strand of glass. New office buildings are being \"wired\" with glass fibers as they are built. The glass fibers will be used to connect telephones and computers in ways that not long ago were either impossible or too expensive.",
        "Glass wool traps air in a thick, light blanket of fibers. This blanket is then put into walls and ceilings to keep warm air in during the winter and cool air in during the summer.",
        "To make glass wool, molten glass is fed into a spinning drum with many holes in it. As the glass threads stream out of the holes, they are forced downward by a blast of hot air and through a spray of glues. The threads are then further blown about to mix them up as they fall in a thick mat on a moving belt. The glass we see through and drink out of has many, many other uses besides the ones described here."
      ],
      questions: [
        { q: "What was the author's main purpose in writing the article?",
          options: ["To persuade you to investigate the many uses of glass beyond those mentioned in the article", "To inform you how special kinds of glass are made and used", "To inform you about the strength of glass fibers", "To inform you that glue is used to hold strands of glass together"], answer: 1,
          explain: "<b>Author's purpose</b>: seluruh teks menjelaskan cara pembuatan dan kegunaan glass fiber serta glass wool. Opsi C dan D hanya detail kecil; opsi A tidak tepat karena teks bersifat informatif, bukan persuasif." },
        { q: "The word \"special\" in the second paragraph is closest in meaning to ______.",
          options: ["additional", "common", "distinct", "species"], answer: 2,
          explain: "<b>Vocabulary</b>: \"a special kind of glass fiber\" = jenis yang khusus/berbeda → <b>distinct</b>. <i>Common</i> justru berlawanan makna." },
        { q: "Glass fibers are made by forcing molten glass through ______.",
          options: ["spinners", "spiderets", "spinnerets", "spinets"], answer: 2,
          explain: "<b>Detail</b>: \"They are made by forcing molten glass through tiny holes called <b>spinnerets</b>.\" Opsi lain adalah kata yang mirip ejaannya (jebakan)." },
        { q: "The word \"changing\" in the second paragraph could best be replaced by the word ______.",
          options: ["bringing", "boring", "altering", "doing"], answer: 2,
          explain: "<b>Vocabulary</b>: \"By changing the quality of the light\" = dengan mengubah kualitas cahaya → <b>altering</b>." },
        { q: "What are glass fibers woven into cloth for?",
          options: ["Cars and boats", "Glasses", "Draperies", "Glue"], answer: 2,
          explain: "<b>Detail</b>: \"They are also woven into heavy cloth for window <b>draperies</b>.\" Mobil dan kapal dibuat dari glass fiber + plastik, bukan dari kain tenun." },
        { q: "The word \"fed\" in the fourth paragraph means ______.",
          options: ["to give food to", "to minister to", "to supply", "to support"], answer: 2,
          explain: "<b>Vocabulary</b>: \"molten glass is fed into a spinning drum\" = kaca cair <u>dimasukkan/dipasok</u> ke drum → <b>to supply</b>. Makna \"memberi makan\" tidak cocok dengan konteks mesin." },
        { q: "The word \"they\" in the second sentence of the first paragraph refers to ______.",
          options: ["human hair", "weight", "glass fibers", "yarn"], answer: 2,
          explain: "<b>Reference</b>: kalimat kedua \"<u>They</u> are made by forcing molten glass…\" merujuk ke subjek kalimat pertama, <b>glass fibers</b>." },
        { q: "The word \"it\" in the fourth paragraph refers to ______.",
          options: ["molten glass", "glass wool", "spinning drum", "holes"], answer: 2,
          explain: "<b>Reference</b>: \"a spinning drum with many holes in <u>it</u>\" → lubang-lubang itu ada di dalam <b>spinning drum</b>." },
        { q: "The following sentence would best complete which paragraph?\n\"This improvement in technology is expected to continue.\"",
          options: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"], answer: 1,
          explain: "<b>Sentence insertion</b>: paragraf 2 membahas revolusi teknologi komunikasi (glass fiber untuk telepon dan komputer). Kalimat tentang \"improvement in technology\" paling cocok menjadi penutupnya." },
        { q: "What signal can be made to travel along fiber for very long distances?",
          options: ["Heat", "Wave", "Light", "Wool"], answer: 2,
          explain: "<b>Detail</b>: \"A signal of <b>light</b> can be made to travel along the fiber for very long distances.\"" }
      ]
    },
    {
      title: "Sloths, Moths, and Algae",
      note: "Teks dikirim pengguna (berdasarkan artikel National Geographic). Kunci dari sumber, pembahasan dilengkapi.",
      paragraphs: [
        "Sloths have poor hearing and eyesight, and they're slow—the slowest mammal on Earth. But their lethargy is an energy-saving strategy; despite the inability to outrun threats, sloths have figured out what works for them. And while they may appear to be solitary, they don't succeed alone. Sloths operate as one-third of a partnership with moths and algae, which both live in the mammal's thick fur.",
        "After a three-toed sloth has lounged for days in the forest canopy, napping and grazing on poisonous leaves—slowly, so that its liver and four-chambered stomach can break down the toxins—the time comes for its weekly poop. Rather than rain droppings from high up, the animal makes a drawn-out descent.",
        "As captured on camera in National Geographic's Underdogs series, the move is exceptionally risky, burning a tenth of the sloth's daily calories and exposing it to predators on the jungle floor, where it's mostly—but not always—helpless to defend itself. More than half of the sloth deaths documented by Pauli's team of researchers in Costa Rica occurred on bathroom breaks. But if a jaguar isn't waiting at the tree's base, a sloth digs a small depression in the soil—a toilet bowl—and relieves itself at last.",
        "Cue the moths. Females, including species found only on sloths, lay their eggs in the fresh dung. The eggs become coprophagous larvae, feeding on the feces, and larvae become adult moths that flutter off in search of their own hairy habitats. As many as 120 moths have been counted on a single sloth.",
        "Moths fertilize sloth fur with nutrients, like nitrogen, whether by delivering fecal matter there or dying and decomposing. Along with rainwater, nitrogen encourages the growth of algae. And algae give sloths a green coloring—effective camouflage from birds of prey patrolling overhead. The more moths on a sloth, the more nitrogen and algae. Sloths also eat the green stuff as a sort of dietary supplement. Although researchers haven't observed the behavior, Pauli's team tested the contents of sloths' stomachs and found algae."
      ],
      questions: [
        { q: "What is the main idea of the passage?",
          options: ["Sloths' partnership with moths and algae is unusual but beneficial.", "Sloths are helpless animals that rely on camouflage to survive.", "Most sloth deaths are caused by predators while they defecate.", "Moths are the only reason sloths have survived."], answer: 0,
          explain: "<b>Main idea</b>: teks membahas simbiosis mutualisme antara kungkang (sloth), ngengat (moth), dan alga — dimulai dari ¶1 (\"one-third of a partnership\") hingga manfaatnya di ¶5. Opsi B dan C hanya detail; opsi D terlalu berlebihan (\"the only reason\")." },
        { q: "The pronoun \"its\" in paragraph 2 line 2 refers to …",
          options: ["organisms", "sloths", "moths and algae", "researchers"], answer: 1,
          explain: "<b>Reference</b>: \"so that <u>its</u> liver and four-chambered stomach can break down the toxins\" — hati dan lambung itu milik <b>sloth</b> (a three-toed sloth)." },
        { q: "The phrase \"drawn-out descent\" could best be replaced by …",
          options: ["quickly get out", "rapid fall", "slowly climb down", "controlled flight"], answer: 2,
          explain: "<b>Vocabulary</b>: <i>drawn-out</i> = berlangsung lama/lambat, <i>descent</i> = turun → <b>slowly climb down</b>. Opsi A dan B berlawanan dengan sifat sloth yang lambat." },
        { q: "The passage indicates that a sloth's descent from a tree is risky because …",
          options: ["it burns calories and exposes the sloth to predators", "it leads to competition with other animals", "it causes damage to the tree", "it usually results in injury"], answer: 0,
          explain: "<b>Detail</b>: ¶3 — turun pohon \"burning a tenth of the sloth's daily calories and exposing it to predators on the jungle floor\"." },
        { q: "All of the following are true EXCEPT …",
          options: ["Sloths eat algae as part of their diet", "Moths lay eggs in sloth droppings", "Sloths use their tails to bury their feces", "Sloths have a slow metabolism to process toxins"], answer: 2,
          explain: "<b>EXCEPT</b>: teks hanya menyebut sloth <u>menggali lubang kecil</u> di tanah (¶3); tidak ada penyebutan ekor untuk mengubur kotoran. A (¶5), B (¶4), dan D (¶2, mencerna perlahan agar racun terurai) sesuai teks." },
        { q: "\"Females\" in paragraph 4 line 1 refers to which of the following?",
          options: ["Eggs", "Moths", "Sloths", "Larvae"], answer: 1,
          explain: "<b>Reference</b>: paragraf dibuka \"Cue the moths. <u>Females</u> … lay their eggs in the fresh dung\" → ngengat betina (<b>moths</b>)." },
        { q: "The word \"flutter\" in paragraph 4 line 3 is closest in meaning to …",
          options: ["fix", "glide", "crawl", "fly"], answer: 3,
          explain: "<b>Vocabulary</b>: \"adult moths that <u>flutter off</u>\" = ngengat dewasa terbang pergi (dengan kepakan sayap) → <b>fly</b>. <i>Glide</i> berarti melayang tanpa mengepak." },
        { q: "According to paragraph 5, which of the following is stated?",
          options: ["Sloths eat moths as a protein source", "Algae on sloth fur helps them blend into the environment", "Rainwater washes algae off the sloth's fur", "Researchers observed sloths picking algae from leaves"], answer: 1,
          explain: "<b>Detail</b>: \"algae give sloths a green coloring—effective camouflage\" → membantu menyamarkan diri. C bertentangan (hujan justru membantu alga tumbuh) dan D bertentangan (\"researchers haven't observed the behavior\")." },
        { q: "What is the author's tone in the passage?",
          options: ["Humorous and dismissive", "Curious and respectful", "Sarcastic and emotional", "Bored and indifferent"], answer: 1,
          explain: "<b>Tone</b>: penulis menunjukkan ketertarikan dan rasa penasaran terhadap hubungan sloth–ngengat–alga, serta menghargai strategi bertahan hidup sloth (\"have figured out what works for them\")." },
        { q: "What would most likely be discussed in the paragraph following this passage?",
          options: ["Research on sloth microbiomes for new antibiotics", "The predators that feed on sloths", "The digestive system of moths", "Reasons why algae thrive in humid environments"], answer: 0,
          explain: "<b>Next topic</b>: paragraf terakhir berakhir pada penelitian tim Pauli tentang isi lambung sloth dan organisme yang hidup di bulunya, sehingga kelanjutan yang paling logis adalah riset lanjutan tentang mikroorganisme (microbiome) sloth. Predator (B) sudah dibahas di ¶3." }
      ]
    }
  );
})();
