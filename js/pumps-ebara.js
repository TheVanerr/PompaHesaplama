// ============================================================
//  EBARA POMPA VERİTABANI
//  Seriler: 3M (Çok Kademeli), CDX (Kendinden Emişli), DWC-N (Son Emişli)
//  Kaynak: EBARA Pumps Europe teknik katalog verileri
// ============================================================

window.PUMPS_EBARA = [

  // ────────────────────────────────────────────────────────
  //  3M SERİSİ — Dikey Çok Kademeli Santrifüj Pompalar
  //  Paslanmaz çelik gövde, kompakt tasarım, geniş debi aralığı
  // ────────────────────────────────────────────────────────
  { brand: 'EBARA', model: 'EBARA 3M 0.5-3',  series: '3M', minFlow: 0.2, maxFlow: 1.8,  minHead: 20, maxHead: 40, power: 0.37, efficiency: 44, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 0.5-5',  series: '3M', minFlow: 0.2, maxFlow: 1.8,  minHead: 36, maxHead: 72, power: 0.55, efficiency: 47, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 0.8-3',  series: '3M', minFlow: 0.5, maxFlow: 2.5,  minHead: 18, maxHead: 38, power: 0.37, efficiency: 48, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 0.8-5',  series: '3M', minFlow: 0.5, maxFlow: 2.5,  minHead: 32, maxHead: 68, power: 0.75, efficiency: 51, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 2-3',    series: '3M', minFlow: 0.8, maxFlow: 4.2,  minHead: 16, maxHead: 34, power: 0.55, efficiency: 54, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 2-5',    series: '3M', minFlow: 0.8, maxFlow: 4.2,  minHead: 28, maxHead: 60, power: 0.75, efficiency: 57, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 2-7',    series: '3M', minFlow: 0.8, maxFlow: 4.2,  minHead: 40, maxHead: 85, power: 1.10, efficiency: 59, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 4-4',    series: '3M', minFlow: 2.0, maxFlow: 8.0,  minHead: 22, maxHead: 44, power: 1.10, efficiency: 60, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 4-6',    series: '3M', minFlow: 2.0, maxFlow: 8.0,  minHead: 34, maxHead: 65, power: 1.50, efficiency: 62, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 6-3',    series: '3M', minFlow: 3.0, maxFlow: 12.0, minHead: 16, maxHead: 34, power: 1.10, efficiency: 63, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 6-5',    series: '3M', minFlow: 3.0, maxFlow: 12.0, minHead: 28, maxHead: 58, power: 2.20, efficiency: 65, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 10-3',   series: '3M', minFlow: 5.0, maxFlow: 18.0, minHead: 14, maxHead: 30, power: 1.50, efficiency: 65, rpm: 2850 },
  { brand: 'EBARA', model: 'EBARA 3M 10-5',   series: '3M', minFlow: 5.0, maxFlow: 18.0, minHead: 24, maxHead: 52, power: 3.00, efficiency: 67, rpm: 2850 },

  // ────────────────────────────────────────────────────────
  //  CDX SERİSİ — Kendinden Emişli Santrifüj Pompalar
  //  Çarklı ön hazne, uzun emme mesafesi kapasitesi, döküm gövde
  // ────────────────────────────────────────────────────────
  { brand: 'EBARA', model: 'EBARA CDX 70/05',  series: 'CDX', minFlow: 0.2, maxFlow: 3.5,  minHead:  8, maxHead: 22, power: 0.55, efficiency: 39, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 70/07',  series: 'CDX', minFlow: 0.2, maxFlow: 3.5,  minHead: 14, maxHead: 35, power: 0.75, efficiency: 42, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 120/07', series: 'CDX', minFlow: 1.0, maxFlow: 7.5,  minHead: 10, maxHead: 28, power: 0.75, efficiency: 50, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 120/11', series: 'CDX', minFlow: 1.0, maxFlow: 7.5,  minHead: 18, maxHead: 48, power: 1.10, efficiency: 52, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 200/15', series: 'CDX', minFlow: 3.0, maxFlow: 15.0, minHead: 12, maxHead: 32, power: 1.50, efficiency: 56, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 200/22', series: 'CDX', minFlow: 3.0, maxFlow: 15.0, minHead: 22, maxHead: 52, power: 2.20, efficiency: 58, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 300/22', series: 'CDX', minFlow: 6.0, maxFlow: 24.0, minHead: 14, maxHead: 38, power: 2.20, efficiency: 62, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA CDX 300/30', series: 'CDX', minFlow: 6.0, maxFlow: 24.0, minHead: 24, maxHead: 56, power: 3.00, efficiency: 64, rpm: 2900 },

  // ────────────────────────────────────────────────────────
  //  DWC-N SERİSİ — Son Emişli Endüstriyel Santrifüj Pompalar
  //  Arka çekme özelliği (back pull-out), ErP2019 uyumlu
  // ────────────────────────────────────────────────────────
  { brand: 'EBARA', model: 'EBARA DWC-N 32-160',  series: 'DWC-N', minFlow: 2.0,  maxFlow: 10.0, minHead: 18, maxHead: 35, power: 2.20, efficiency: 68, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 32-200',  series: 'DWC-N', minFlow: 2.0,  maxFlow: 10.0, minHead: 30, maxHead: 62, power: 3.00, efficiency: 70, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 40-160',  series: 'DWC-N', minFlow: 5.0,  maxFlow: 22.0, minHead: 16, maxHead: 32, power: 2.20, efficiency: 72, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 40-200',  series: 'DWC-N', minFlow: 5.0,  maxFlow: 22.0, minHead: 28, maxHead: 52, power: 3.00, efficiency: 74, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 40-250',  series: 'DWC-N', minFlow: 5.0,  maxFlow: 22.0, minHead: 44, maxHead: 82, power: 5.50, efficiency: 74, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 50-160',  series: 'DWC-N', minFlow: 10.0, maxFlow: 40.0, minHead: 12, maxHead: 28, power: 4.00, efficiency: 75, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 50-200',  series: 'DWC-N', minFlow: 10.0, maxFlow: 40.0, minHead: 22, maxHead: 45, power: 5.50, efficiency: 76, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 65-160',  series: 'DWC-N', minFlow: 20.0, maxFlow: 80.0, minHead: 10, maxHead: 22, power: 5.50, efficiency: 78, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 65-200',  series: 'DWC-N', minFlow: 20.0, maxFlow: 80.0, minHead: 18, maxHead: 38, power: 7.50, efficiency: 79, rpm: 2900 },
  { brand: 'EBARA', model: 'EBARA DWC-N 80-200',  series: 'DWC-N', minFlow: 36.0, maxFlow:130.0, minHead: 16, maxHead: 34, power:11.00, efficiency: 80, rpm: 2900 },

];
