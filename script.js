const gejalaList = {
    "Nyeri pada perut": 0.7,
    "Perut terasa kembung": 0.6,
    "Merasa tidak nyaman setelah makan": 0.65,
    "Mual": 0.5,
    "Muntah": 0.4,
    "Tidak nafsu makan": 0.5,
    "Terasa perih di perut atau dada": 0.75,
    "Adanya makanan yang kembali ke atas": 0.3,
    "Hidung tersumbat": 0.8,
    "Batuk": 0.7,
    "Bersin": 0.6,
    "Produksi sputum atau dahak berlebihan": 0.5,
    "Demam": 0.75,
    "Sakit kepala": 0.6,
    "Kelelahan": 0.4,
    "Merasa lemas": 0.5,
    "Sakit saat menelan": 0.3,
    "Suara serak": 0.4,
    "Perut bagian ulu hati terasa panas dan perih": 0.65,
    "Perut terasa kembung": 0.6,
    "Sering cegukan": 0.55,
    "Merasa cepat kenyang saat makan": 0.45,
    "Tinja berwarna hitam": 0.7,
    "Muntah darah": 0.6,
    "Pilek": 0.5,
    "Lemas": 0.4,
    "Nyeri tenggorokan": 0.7,
    "Banyak makan dan minum": 0.6,
    "Sering buang air kecil": 0.8,
    "Mudah mengompol": 0.7,
    "Penurunan berat badan drastis": 0.75,
    "Mudah marah": 0.55,
    "Sesak napas": 0.6,
    "Dehidrasi": 0.7,
    "Menggigil": 0.65,
    "Sakit perut": 0.6,
    "Nyeri otot": 0.5,
    "Nyeri sendi": 0.5,
    "Luka robek pada kulit": 0.3,
    "Berdarah": 0.4,
    "Tenggorokan bengkak": 0.6,
    "Badan terasa lelah": 0.55,
    "Pusing": 0.6,
    "Susah menelan": 0.5,
    "Nyeri saat kencing": 0.6,
    "Nyeri pada pinggul bagian belakang": 0.5,
    "Urin berbau busuk dan keruh": 0.65,
  };
  
  const rules = {
    "Dyspepsia": ["Nyeri pada perut", "Perut terasa kembung", "Merasa tidak nyaman setelah makan", "Mual", "Muntah", "Tidak nafsu makan", "Terasa perih di perut atau dada", "Adanya makanan yang kembali ke atas"],
    "ISPA": ["Hidung tersumbat", "Batuk", "Bersin", "Produksi sputum atau dahak berlebihan", "Demam", "Sakit kepala", "Kelelahan", "Merasa lemas", "Sakit saat menelan", "Suara serak"],
    "Gastritis": ["Mual", "Muntah", "Tidak nafsu makan", "Perut bagian ulu hati terasa panas dan perih", "Perut terasa kembung", "Sering cegukan", "Merasa cepat kenyang saat makan", "Tinja berwarna hitam", "Muntah darah"],
    "RFA": ["Hidung tersumbat", "Batuk", "Demam", "Pilek", "Lemas", "Nyeri tenggorokan"],
    "Diabetes Melitus": ["Kelelahan", "Banyak makan dan minum", "Sering buang air kecil", "Mudah mengompol", "Penurunan berat badan drastis", "Mudah marah", "Sesak napas", "Dehidrasi"],
    "GEA": ["Mual", "Tidak nafsu makan", "Demam", "Sakit kepala", "Menggigil", "Sakit perut", "Nyeri otot", "Nyeri sendi"],
    "Vulnus Laceratum": ["Luka robek pada kulit", "Berdarah"],
    "Faringitis": ["Mual", "Bersin", "Demam", "Pilek", "Nyeri otot", "Tenggorokan bengkak", "Badan terasa lelah", "Pusing", "Susah menelan"],
    "Infeksi Saluran Kemih": ["Demam", "Sering buang air kecil", "Mudah mengompol", "Sakit perut", "Nyeri saat kencing", "Nyeri pada pinggul bagian belakang", "Urin berbau busuk dan keruh"],
  };
  
  const diseaseDescriptions = {
    Dyspepsia: "Dyspepsia dikenal juga sebagai keluhan nyeri lambung atau sakit maag.",
    ISPA: "ISPA yaitu infeksi yang terjadi pada saluran pernapasan yang dapat menimbulkan gejala batuk, pilek, disertai  demam. Penyakit ini  sangat mudah menular dan dapat dialami siapa saja, terutama pada anak anak.",
    Gastritis: "Gastritis adalah penyakit pada lambung yang disebabkan oleh peradangan pada dinding lambung.",
    RFA: "Rhinofaringitis adalah salah satu jenis penyakit yang mudah menular melalui udara dan disebabkan oleh infeksi di rongga hidung hingga tenggorokan (faring).",
    "Diabetes Melitus" : "Diabetes melitus adalah jenis penyakit autoimun kronis yang disebabkan oleh gangguan pengaturan gula darah dalam tubuh. Penyakit ini juga dikenal sebagai penyakit gula atau kencing manis.",
    GEA: "GEA (Gastroenteritis Akut) atau diare adalah kondisi buang air besar yang tidak normal, ditandai dengan tinja yang encer dan frekuensi lebih sering dari biasanya.",
    "Vulnus Laceratum" : "Vulnus Laceratum (laserasi/robek) adalah luka yang disebabkan oleh benturan dengan benda tumpul. Ciri-ciri luka ini meliputi tepi luka yang tidak rata dan perdarahan ringan, yang dapat meningkatkan risiko infeksi.",
    Faringitis: "Faringitis adalah penyakit yang berupa radang tenggorokan.",
    "Infeksi Saluran Kemih" : "Infeksi Saluran Kemih adalah penyakit yang terjadi pada ginjal dan saluran kemih. Penyakit ini sering menjadi penyebab gagal ginjal pada anak, yang dapat memerlukan tindakan cuci darah (dialisis) atau transplantasi ginjal.",
  };
  
  const treatmentDetails = {
    Dyspepsia: `
      <ol>
          <li>Mengonsumsi makanan lebih sering dengan porsi lebih sedikit.</li>
          <li>Hindari melewatkan waktu makan. Makan porsi kecil secara lebih sering.</li>
          <li>Hindari makanan pemicu seperti makanan berlemak, pedas, asam, minuman bersoda, kafein, dan alkohol.</li>
          <li>Kunyah makanan dengan perlahan hingga halus. Luangkan waktu untuk makan secara perlahan.</li>
      </ol>
  `,
  ISPA: `
      <ol>
          <li>Pastikan anak mendapatkan waktu tidur yang cukup.</li>
          <li>Berikan banyak cairan untuk diminum oleh anak.</li>
          <li>Bantu anak membuang ingusnya.</li>
          <li>Latih anak untuk berkumur dengan air garam hangat guna meringankan sakit tenggorokan.</li>
          <li>Oleskan petroleum jelly di bagian luar hidung anak untuk mengurangi iritasi akibat keluar-masuknya udara saat bernapas.</li>
          <li>Jaga kelembapan ruangan agar anak lebih mudah bernapas.</li>
          <li>Jauhkan anak dari paparan asap rokok.</li>
    </ol>
  `,
  Gastritis: `
  <ol>
      <li>Hindari makanan pedas, digoreng, berlemak, serta makanan asam atau bercuka.</li>
      <li>Usahakan makan dalam porsi kecil namun sering, dan hindari makan besar langsung tiga kali sehari.</li>
      <li>Konsumsi makanan yang mudah dicerna untuk sementara waktu agar lambung tidak bekerja terlalu keras.</li>
      <li>Diperbolehkan mengonsumsi daging tanpa lemak, seperti dada ayam atau kalkun, serta makanan yang rendah serat.</li>
  </ol>
`,
  RFA: `
    <ol>
        <li>Usahakan untuk banyak istirahat.</li>
        <li>Perbanyak minum air putih.</li>
        <li>Konsumsi makanan yang lunak dan hangat.</li>
        <li>Gunakan larutan garam untuk berkumur.</li>
    </ol>
    `,
    "Diabetes Melitus": `
    <ol>
        <li>Pertahankan berat badan ideal.</li>
        <li>Konsumsi buah dan sayur secara rutin.</li>
        <li>Kurangi konsumsi minuman manis dan bersoda.</li>
        <li>Lakukan olahraga secara teratur.</li>
        <li>Batasi penggunaan gadget untuk mendukung pola hidup sehat.</li>
    </ol>
    `,
    GEA: `
    <ol>
        <li>Konsumsi makanan yang bertekstur halus dan mudah dicerna, seperti roti, kentang, atau pisang.</li>
        <li>Hindari memberikan anak makanan atau minuman yang mengandung susu atau tinggi gula, seperti es krim, soda, dan permen.</li>
        <li>Jangan memberikan anak obat diare yang dijual bebas tanpa resep dokter.</li>
    </ol>
    `,
    "Vulnus Laceratum": `
    <ol>
        <li>Biasanya perdarahan pada luka ringan akan berhenti sendiri. Jika tidak berhenti, beri tekanan lembut pada luka dengan kain bersih, dan posisikan luka menghadap ke atas.</li>
        <li>Bilas luka menggunakan air bersih yang mengalir. Anda boleh menggunakan sabun untuk membersihkan area sekitar luka, tetapi jangan mengaplikasikan sabun langsung pada luka.</li>
        <li>Gunakan pinset steril atau yang sudah dibersihkan dengan alkohol untuk mengangkat kotoran atau benda yang tertancap pada luka. Jika masih ada kotoran yang sulit diangkat, segera pergi ke dokter untuk mengurangi risiko infeksi dan tetanus.</li>
        <li>Hindari menggunakan cairan hidrogen peroksida, obat merah, atau larutan antiseptik yang mengandung iodine karena dapat menyebabkan iritasi pada luka.</li>
        <li>Oleskan krim atau salep antibiotik pada luka untuk menjaga permukaan kulit tetap lembap. Meskipun tidak mempercepat penyembuhan, salep ini dapat mencegah infeksi sehingga proses penyembuhan berjalan dengan baik. Jika muncul ruam pada kulit, hentikan penggunaan salep dan konsultasikan dengan dokter.</li>
        <li>Gunakan perban luka untuk menjaga luka tetap bersih dan terhindar dari bakteri. Namun, jika luka atau goresan kecil, biarkan terbuka untuk mencegah iritasi.</li>
        </ol>
    `,
    Faringitis: `
    <ol>
        <li>Konsumsi obat pereda nyeri yang dijual bebas, seperti paracetamol atau ibuprofen, untuk meredakan sakit tenggorokan.</li>
        <li>Perbanyak istirahat.</li>
        <li>Minum banyak cairan untuk mencegah dehidrasi.</li>
        <li>Gunakan pelembap udara di dalam ruangan.</li>
        <li>Konsumsi makanan seperti kaldu hangat atau minuman dingin untuk meredakan gejala.</li>
        <li>Berkumurlah dengan air garam hangat.</li>
        <li>Konsumsi permen pelega tenggorokan untuk membantu meredakan nyeri.</li>
    </ol>
    `,
    "Infeksi Saluran Kemih" : `
    <ol>
        <li>Berikan obat antibiotik sesuai anjuran dokter.</li>
        <li>Dorong anak untuk minum banyak cairan, namun hindari minuman berkafein seperti soda dan es teh.</li>
    </ol>
    `,
  };
  
  // Render gejala
  const symptomsDiv = document.getElementById("symptoms");
  for (const [gejala, cf] of Object.entries(gejalaList)) {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";
    col.innerHTML = `
        <label class="symptom-card">
            <input type="checkbox" class="form-check-input" id="${gejala}" value="${gejala}" data-cf="${cf}">
            ${gejala}
        </label>
    `;
    symptomsDiv.appendChild(col);
  }
  
  // Proses diagnosa
  document.getElementById("diagnoseBtn").addEventListener("click", () => {
    const selectedSymptoms = Array.from(
      document.querySelectorAll('#symptoms input[type="checkbox"]:checked')
    );
  
    if (selectedSymptoms.length === 0) {
      document.getElementById("diseaseName").textContent = "Tidak ada gejala yang dipilih.";
      document.getElementById("confidenceLevel").textContent = "";
      document.getElementById("diseaseDescription").textContent = "";
      document.getElementById("treatment").innerHTML = "Silakan pilih gejala untuk melihat hasil diagnosa.";
      return;
    }
  
    const cfResults = {};
    for (const [penyakit, gejalaPenyakit] of Object.entries(rules)) {
      let cf = 0;
      gejalaPenyakit.forEach((gejala, index) => {
        if (selectedSymptoms.some(symptom => symptom.value === gejala)) {
          const gejalaCF = parseFloat(
            selectedSymptoms.find(symptom => symptom.value === gejala).dataset.cf
          );
          cf = index === 0 ? gejalaCF : cf + gejalaCF * (1 - cf);
        }
      });
      cfResults[penyakit] = cf;
    }
  
    const sortedResults = Object.entries(cfResults).sort((a, b) => b[1] - a[1]);
    const [bestMatch, bestCF] = sortedResults[0];
  
    document.getElementById("diseaseName").textContent = bestMatch;
    document.getElementById("confidenceLevel").textContent = `Tingkat Kepastian: ${(bestCF * 100).toFixed(2)}%`;
    document.getElementById("diseaseDescription").textContent = diseaseDescriptions[bestMatch] || "Deskripsi tidak tersedia.";
    document.getElementById("treatment").innerHTML = `
        <strong>Cara Penanganan:</strong> ${treatmentDetails[bestMatch] || "Penanganan tidak tersedia."}
    `;
  });
  