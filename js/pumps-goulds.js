// ============================================================
//  GOULDS (XYLEM) POMPA VERİTABANI
//  Seriler: GCEA (Son Emişli Çok Kademeli), CO (Açık Fanlı),
//           ESHE (Yüksek Verimli Son Emişli), GCEA-N (Gelişmiş Seri)
//  Kaynak: Xylem / Goulds Water Technology teknik katalog verileri
// ============================================================

window.PUMPS_GOULDS = [

  // ────────────────────────────────────────────────────────
  //  GCEA SERİSİ — Son Emişli Çok Kademeli Kompakt Pompalar
  //  Xylem/Goulds markasıyla sunulan CEA hibrit serisi
  // ────────────────────────────────────────────────────────
  { brand: 'GOULDS', model: 'GCEA 70/3',   series: 'GCEA', minFlow: 0.6, maxFlow: 4.8,  minHead: 10, maxHead: 30, power: 0.55, efficiency: 52, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 70/5',   series: 'GCEA', minFlow: 0.6, maxFlow: 4.8,  minHead: 22, maxHead: 55, power: 1.10, efficiency: 55, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 70/7',   series: 'GCEA', minFlow: 0.6, maxFlow: 4.8,  minHead: 34, maxHead: 78, power: 1.50, efficiency: 57, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 120/3',  series: 'GCEA', minFlow: 1.2, maxFlow: 7.8,  minHead: 10, maxHead: 32, power: 0.75, efficiency: 58, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 120/5',  series: 'GCEA', minFlow: 1.2, maxFlow: 7.8,  minHead: 22, maxHead: 58, power: 1.50, efficiency: 60, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 120/7',  series: 'GCEA', minFlow: 1.2, maxFlow: 7.8,  minHead: 34, maxHead: 82, power: 2.20, efficiency: 62, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 210/3',  series: 'GCEA', minFlow: 2.4, maxFlow: 15.0, minHead: 10, maxHead: 32, power: 1.50, efficiency: 62, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 210/5',  series: 'GCEA', minFlow: 2.4, maxFlow: 15.0, minHead: 22, maxHead: 55, power: 2.20, efficiency: 65, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 370/3',  series: 'GCEA', minFlow: 5.0, maxFlow: 26.0, minHead:  8, maxHead: 28, power: 2.20, efficiency: 67, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA 370/5',  series: 'GCEA', minFlow: 5.0, maxFlow: 26.0, minHead: 18, maxHead: 50, power: 4.00, efficiency: 70, rpm: 2900 },

  // ────────────────────────────────────────────────────────
  //  CO SERİSİ — Açık Fanlı Çevresel Gövde Pompaları
  //  Geniş çark ağzı, yüksek debi-düşük basınç uygulamaları
  // ────────────────────────────────────────────────────────
  { brand: 'GOULDS', model: 'CO 350/07',  series: 'CO', minFlow:  6.0, maxFlow: 25.0, minHead: 10, maxHead: 22, power: 0.75, efficiency: 60, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 350/11',  series: 'CO', minFlow:  6.0, maxFlow: 25.0, minHead: 18, maxHead: 35, power: 1.10, efficiency: 62, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 500/11',  series: 'CO', minFlow: 10.0, maxFlow: 35.0, minHead: 10, maxHead: 20, power: 1.10, efficiency: 63, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 500/15',  series: 'CO', minFlow: 10.0, maxFlow: 35.0, minHead: 15, maxHead: 28, power: 1.50, efficiency: 65, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 500/22',  series: 'CO', minFlow: 10.0, maxFlow: 35.0, minHead: 25, maxHead: 45, power: 2.20, efficiency: 68, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 700/22',  series: 'CO', minFlow: 15.0, maxFlow: 50.0, minHead: 12, maxHead: 24, power: 2.20, efficiency: 68, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 700/30',  series: 'CO', minFlow: 15.0, maxFlow: 50.0, minHead: 18, maxHead: 36, power: 3.00, efficiency: 70, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 1000/30', series: 'CO', minFlow: 25.0, maxFlow: 75.0, minHead: 10, maxHead: 20, power: 3.00, efficiency: 72, rpm: 2900 },
  { brand: 'GOULDS', model: 'CO 1000/40', series: 'CO', minFlow: 25.0, maxFlow: 75.0, minHead: 16, maxHead: 32, power: 4.00, efficiency: 73, rpm: 2900 },

  // ────────────────────────────────────────────────────────
  //  ESHE SERİSİ — Yüksek Verimli Son Emişli Santrifüj
  //  IE3 motor sınıfı, ErP 2015 uyumlu, döküm gövde
  // ────────────────────────────────────────────────────────
  { brand: 'GOULDS', model: 'ESHE 32-160', series: 'ESHE', minFlow: 1.8,  maxFlow: 10.8,  minHead: 10, maxHead: 28, power: 1.50, efficiency: 73, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 32-200', series: 'ESHE', minFlow: 1.8,  maxFlow: 10.8,  minHead: 18, maxHead: 46, power: 2.20, efficiency: 74, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 32-250', series: 'ESHE', minFlow: 1.8,  maxFlow: 10.8,  minHead: 28, maxHead: 70, power: 4.00, efficiency: 75, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 40-160', series: 'ESHE', minFlow: 4.5,  maxFlow: 22.5,  minHead: 10, maxHead: 22, power: 2.20, efficiency: 75, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 40-200', series: 'ESHE', minFlow: 4.5,  maxFlow: 22.5,  minHead: 18, maxHead: 38, power: 3.00, efficiency: 76, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 40-250', series: 'ESHE', minFlow: 4.5,  maxFlow: 22.5,  minHead: 28, maxHead: 60, power: 5.50, efficiency: 76, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 50-160', series: 'ESHE', minFlow: 7.2,  maxFlow: 32.4,  minHead:  8, maxHead: 18, power: 3.00, efficiency: 77, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 50-200', series: 'ESHE', minFlow: 7.2,  maxFlow: 32.4,  minHead: 14, maxHead: 30, power: 4.00, efficiency: 78, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 65-160', series: 'ESHE', minFlow: 18.0, maxFlow: 72.0,  minHead:  6, maxHead: 16, power: 5.50, efficiency: 79, rpm: 2900 },
  { brand: 'GOULDS', model: 'ESHE 65-200', series: 'ESHE', minFlow: 18.0, maxFlow: 72.0,  minHead: 10, maxHead: 26, power: 7.50, efficiency: 80, rpm: 2900 },

  // ────────────────────────────────────────────────────────
  //  GCEA-N SERİSİ — Gelişmiş / Yeni Nesil CEA Pompalar
  //  GCEA'ya kıyasla iyileştirilmiş hidrolik tasarım, daha yüksek verim
  // ────────────────────────────────────────────────────────
  { brand: 'GOULDS', model: 'GCEA-N 70/3',   series: 'GCEA-N', minFlow: 0.6, maxFlow: 5.0,  minHead: 12, maxHead: 32, power: 0.55, efficiency: 54, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 70/5',   series: 'GCEA-N', minFlow: 0.6, maxFlow: 5.0,  minHead: 24, maxHead: 58, power: 1.10, efficiency: 57, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 70/7',   series: 'GCEA-N', minFlow: 0.6, maxFlow: 5.0,  minHead: 36, maxHead: 84, power: 1.50, efficiency: 59, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 120/3',  series: 'GCEA-N', minFlow: 1.2, maxFlow: 8.0,  minHead: 12, maxHead: 34, power: 0.75, efficiency: 60, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 120/5',  series: 'GCEA-N', minFlow: 1.2, maxFlow: 8.0,  minHead: 24, maxHead: 60, power: 1.50, efficiency: 62, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 120/7',  series: 'GCEA-N', minFlow: 1.2, maxFlow: 8.0,  minHead: 38, maxHead: 88, power: 2.20, efficiency: 64, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 210/3',  series: 'GCEA-N', minFlow: 2.4, maxFlow: 16.0, minHead: 12, maxHead: 34, power: 1.50, efficiency: 64, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 210/5',  series: 'GCEA-N', minFlow: 2.4, maxFlow: 16.0, minHead: 24, maxHead: 58, power: 2.20, efficiency: 67, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 370/3',  series: 'GCEA-N', minFlow: 5.0, maxFlow: 28.0, minHead: 10, maxHead: 30, power: 2.20, efficiency: 69, rpm: 2900 },
  { brand: 'GOULDS', model: 'GCEA-N 370/5',  series: 'GCEA-N', minFlow: 5.0, maxFlow: 28.0, minHead: 20, maxHead: 54, power: 4.00, efficiency: 72, rpm: 2900 },

];
