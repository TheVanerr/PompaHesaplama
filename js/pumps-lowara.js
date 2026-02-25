// ============================================================
//  LOWARA POMPA VERİTABANI
//  Seriler: CEA (Son Emişli Çok Kademeli), ESHE (Yüksek Verimli Son Emişli)
//  Kaynak: Xylem / Lowara teknik katalog verileri
// ============================================================

window.PUMPS_LOWARA = [

  // ────────────────────────────────────────────────────────
  //  CEA SERİSİ — Son Emişli Çok Kademeli Kompakt Pompalar
  //  Flanşlı, paslanmaz çarklı, bakım kolaylığı yüksek
  // ────────────────────────────────────────────────────────
  { brand: 'LOWARA', model: 'CEA 70/3',   series: 'CEA', minFlow: 0.6, maxFlow: 4.8,  minHead: 10, maxHead: 30, power: 0.55, efficiency: 52, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 70/5',   series: 'CEA', minFlow: 0.6, maxFlow: 4.8,  minHead: 22, maxHead: 55, power: 1.10, efficiency: 55, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 70/7',   series: 'CEA', minFlow: 0.6, maxFlow: 4.8,  minHead: 34, maxHead: 78, power: 1.50, efficiency: 57, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 120/3',  series: 'CEA', minFlow: 1.2, maxFlow: 7.8,  minHead: 10, maxHead: 32, power: 0.75, efficiency: 58, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 120/5',  series: 'CEA', minFlow: 1.2, maxFlow: 7.8,  minHead: 22, maxHead: 58, power: 1.50, efficiency: 60, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 120/7',  series: 'CEA', minFlow: 1.2, maxFlow: 7.8,  minHead: 34, maxHead: 82, power: 2.20, efficiency: 62, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 210/3',  series: 'CEA', minFlow: 2.4, maxFlow: 15.0, minHead: 10, maxHead: 32, power: 1.50, efficiency: 62, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 210/5',  series: 'CEA', minFlow: 2.4, maxFlow: 15.0, minHead: 22, maxHead: 55, power: 2.20, efficiency: 65, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 370/3',  series: 'CEA', minFlow: 5.0, maxFlow: 26.0, minHead:  8, maxHead: 28, power: 2.20, efficiency: 67, rpm: 2900 },
  { brand: 'LOWARA', model: 'CEA 370/5',  series: 'CEA', minFlow: 5.0, maxFlow: 26.0, minHead: 18, maxHead: 50, power: 4.00, efficiency: 70, rpm: 2900 },

  // ────────────────────────────────────────────────────────
  //  ESHE SERİSİ — Yüksek Verimli Son Emişli Santrifüj
  //  IE3 motor sınıfı, ErP 2015 uyumlu, döküm gövde
  // ────────────────────────────────────────────────────────
  { brand: 'LOWARA', model: 'ESHE 32-160', series: 'ESHE', minFlow: 1.8, maxFlow: 10.8, minHead: 10, maxHead: 28, power: 1.50, efficiency: 73, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 32-200', series: 'ESHE', minFlow: 1.8, maxFlow: 10.8, minHead: 18, maxHead: 46, power: 2.20, efficiency: 74, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 32-250', series: 'ESHE', minFlow: 1.8, maxFlow: 10.8, minHead: 28, maxHead: 70, power: 4.00, efficiency: 75, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 40-160', series: 'ESHE', minFlow: 4.5, maxFlow: 22.5, minHead: 10, maxHead: 22, power: 2.20, efficiency: 75, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 40-200', series: 'ESHE', minFlow: 4.5, maxFlow: 22.5, minHead: 18, maxHead: 38, power: 3.00, efficiency: 76, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 40-250', series: 'ESHE', minFlow: 4.5, maxFlow: 22.5, minHead: 28, maxHead: 60, power: 5.50, efficiency: 76, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 50-160', series: 'ESHE', minFlow: 7.2, maxFlow: 32.4, minHead:  8, maxHead: 18, power: 3.00, efficiency: 77, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 50-200', series: 'ESHE', minFlow: 7.2, maxFlow: 32.4, minHead: 14, maxHead: 30, power: 4.00, efficiency: 78, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 50-250', series: 'ESHE', minFlow: 7.2, maxFlow: 32.4, minHead: 24, maxHead: 50, power: 7.50, efficiency: 78, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 65-160', series: 'ESHE', minFlow: 18.0,maxFlow: 72.0, minHead:  6, maxHead: 16, power: 5.50, efficiency: 79, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 65-200', series: 'ESHE', minFlow: 18.0,maxFlow: 72.0, minHead: 10, maxHead: 26, power: 7.50, efficiency: 80, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 80-160', series: 'ESHE', minFlow: 30.0,maxFlow:108.0, minHead:  5, maxHead: 14, power: 7.50, efficiency: 80, rpm: 2900 },
  { brand: 'LOWARA', model: 'ESHE 80-200', series: 'ESHE', minFlow: 30.0,maxFlow:108.0, minHead:  9, maxHead: 24, power:11.00, efficiency: 81, rpm: 2900 },

];
