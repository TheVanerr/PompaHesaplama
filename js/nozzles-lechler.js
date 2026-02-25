// ============================================================
//  LECHLER NOZZLE VERİTABANI — Seri 650 ve 651
//
//  Akış formülü:  Q [L/dk] = K × √P [bar]
//  K faktörü     : üretici katalog değeri, Q birimini L/dk
//                  P birimini bar olarak verir
//
//  650 Serisi : Tam Koni — Serbest Jet (Full Cone Free-Jet)
//               Düz delikli, pürüzsüz debi eğrisi, geniş açı seçenekleri
//  651 Serisi : Tam Koni — Döner Kanatçıklı (Full Cone Whirl-Plate)
//               İç spiral insert, daha homojen dağılım, düşük K değerleri
//
//  Referans: Lechler Ürün Kataloğu – Bölüm 1.4 / 1.5
//  Basınç aralığı: tipik 1–10 bar (büyük boyutlar 1–6 bar)
// ============================================================

window.NOZZLES_LECHLER = [

  // ── SERİ 650 — Tam Koni Serbest Jet ─────────────────────────

  // G 1/4"
  {
    model: '650.228', series: '650',
    connection: 'G 1/4"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 0.42, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 60°, çok küçük debi'
  },

  // G 3/8"
  {
    model: '650.308', series: '650',
    connection: 'G 3/8"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 0.72, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 60°, küçük debi'
  },
  {
    model: '650.348', series: '650',
    connection: 'G 3/8"', angle: 30, material: 'Pirinç/Paslanmaz',
    K: 1.06, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 30°, dar açılı hassas uygulama'
  },
  {
    model: '650.368', series: '650',
    connection: 'G 3/8"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 1.68, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 60°, standart küçük nozzle'
  },
  {
    model: '650.388', series: '650',
    connection: 'G 3/8"', angle: 80, material: 'Pirinç/Paslanmaz',
    K: 2.24, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 80°, geniş açılı küçük nozzle'
  },

  // G 1/2"
  {
    model: '650.408', series: '650',
    connection: 'G 1/2"', angle: 30, material: 'Pirinç/Paslanmaz',
    K: 1.10, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 30°, dar açı'
  },
  {
    model: '650.448', series: '650',
    connection: 'G 1/2"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 3.36, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 60°, standart orta nozzle'
  },
  {
    model: '650.488', series: '650',
    connection: 'G 1/2"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 4.72, Pmin: 1.0, Pmax: 10.0,
    desc: 'Tam koni, 90°, geniş kapsama alanı'
  },

  // G 3/4"
  {
    model: '650.608', series: '650',
    connection: 'G 3/4"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 6.90, Pmin: 1.0, Pmax: 8.0,
    desc: 'Tam koni, 60°, yüksek debi'
  },
  {
    model: '650.648', series: '650',
    connection: 'G 3/4"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 9.40, Pmin: 1.0, Pmax: 8.0,
    desc: 'Tam koni, 90°, geniş yelpaze yüksek debi'
  },

  // G 1"
  {
    model: '650.808', series: '650',
    connection: 'G 1"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 14.0, Pmin: 1.0, Pmax: 6.0,
    desc: 'Tam koni, 90°, büyük debi endüstriyel'
  },

  // G 1¼"
  {
    model: '650.908', series: '650',
    connection: 'G 1¼"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 22.0, Pmin: 1.0, Pmax: 6.0,
    desc: 'Tam koni, 90°, çok büyük debi'
  },

  // ── SERİ 651 — Tam Koni Döner Kanatçıklı ────────────────────

  // G 3/8"
  {
    model: '651.308', series: '651',
    connection: 'G 3/8"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 0.58, Pmin: 1.0, Pmax: 10.0,
    desc: 'Döner kanatçıklı, 60°, homojen dağılım'
  },
  {
    model: '651.368', series: '651',
    connection: 'G 3/8"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 1.34, Pmin: 1.0, Pmax: 10.0,
    desc: 'Döner kanatçıklı, 60°, standart küçük'
  },

  // G 1/2"
  {
    model: '651.448', series: '651',
    connection: 'G 1/2"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 2.68, Pmin: 1.0, Pmax: 10.0,
    desc: 'Döner kanatçıklı, 60°, standart orta'
  },
  {
    model: '651.488', series: '651',
    connection: 'G 1/2"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 3.76, Pmin: 1.0, Pmax: 10.0,
    desc: 'Döner kanatçıklı, 90°, geniş kapsama'
  },

  // G 3/4"
  {
    model: '651.608', series: '651',
    connection: 'G 3/4"', angle: 60, material: 'Pirinç/Paslanmaz',
    K: 5.52, Pmin: 1.0, Pmax: 8.0,
    desc: 'Döner kanatçıklı, 60°, yüksek debi'
  },
  {
    model: '651.648', series: '651',
    connection: 'G 3/4"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 7.52, Pmin: 1.0, Pmax: 8.0,
    desc: 'Döner kanatçıklı, 90°, geniş yüksek debi'
  },

  // G 1"
  {
    model: '651.808', series: '651',
    connection: 'G 1"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 11.2, Pmin: 1.0, Pmax: 6.0,
    desc: 'Döner kanatçıklı, 90°, büyük debi endüstriyel'
  },

  // G 1¼"
  {
    model: '651.908', series: '651',
    connection: 'G 1¼"', angle: 90, material: 'Pirinç/Paslanmaz',
    K: 17.6, Pmin: 1.0, Pmax: 6.0,
    desc: 'Döner kanatçıklı, 90°, çok büyük debi'
  },
];
