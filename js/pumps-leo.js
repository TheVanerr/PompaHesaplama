// ============================================================
//  LEO POMPA VERİTABANI
//  Seriler: AMS (Çok Kademeli), XST (Santrifüj), XZS (Kendinden Emişli)
//  Kaynak: LEO Pumps teknik katalog verileri
// ============================================================

window.PUMPS_LEO = [

  // ────────────────────────────────────────────────────────
  //  AMS SERİSİ — Dikey Çok Kademeli Santrifüj Pompalar
  // ────────────────────────────────────────────────────────
  { brand: 'LEO', model: 'AMS 3-2',  series: 'AMS', minFlow: 0.3, maxFlow: 3.0,  minHead: 12, maxHead: 26, power: 0.37, efficiency: 44, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 3-4',  series: 'AMS', minFlow: 0.3, maxFlow: 3.0,  minHead: 26, maxHead: 52, power: 0.55, efficiency: 47, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 3-6',  series: 'AMS', minFlow: 0.3, maxFlow: 3.0,  minHead: 40, maxHead: 78, power: 0.75, efficiency: 50, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 5-2',  series: 'AMS', minFlow: 0.8, maxFlow: 5.5,  minHead: 10, maxHead: 24, power: 0.55, efficiency: 50, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 5-4',  series: 'AMS', minFlow: 0.8, maxFlow: 5.5,  minHead: 22, maxHead: 48, power: 0.75, efficiency: 53, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 5-6',  series: 'AMS', minFlow: 0.8, maxFlow: 5.5,  minHead: 34, maxHead: 72, power: 1.10, efficiency: 56, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 10-2', series: 'AMS', minFlow: 2.0, maxFlow: 10.0, minHead: 10, maxHead: 22, power: 0.75, efficiency: 56, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 10-4', series: 'AMS', minFlow: 2.0, maxFlow: 10.0, minHead: 22, maxHead: 44, power: 1.50, efficiency: 60, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 10-6', series: 'AMS', minFlow: 2.0, maxFlow: 10.0, minHead: 34, maxHead: 66, power: 2.20, efficiency: 62, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 15-2', series: 'AMS', minFlow: 4.0, maxFlow: 16.0, minHead:  8, maxHead: 20, power: 1.10, efficiency: 60, rpm: 2850 },
  { brand: 'LEO', model: 'AMS 15-4', series: 'AMS', minFlow: 4.0, maxFlow: 16.0, minHead: 18, maxHead: 38, power: 2.20, efficiency: 63, rpm: 2850 },

  // ────────────────────────────────────────────────────────
  //  XST SERİSİ — Tek Kademeli Santrifüj Pompalar
  // ────────────────────────────────────────────────────────
  { brand: 'LEO', model: 'XST 32-125/07',  series: 'XST', minFlow: 1.5, maxFlow: 9.0,  minHead:  8, maxHead: 16, power: 0.75, efficiency: 52, rpm: 2900 },
  { brand: 'LEO', model: 'XST 32-160/11',  series: 'XST', minFlow: 2.0, maxFlow: 12.0, minHead: 14, maxHead: 28, power: 1.10, efficiency: 55, rpm: 2900 },
  { brand: 'LEO', model: 'XST 32-200/15',  series: 'XST', minFlow: 3.0, maxFlow: 15.0, minHead: 25, maxHead: 42, power: 1.50, efficiency: 58, rpm: 2900 },
  { brand: 'LEO', model: 'XST 40-160/15',  series: 'XST', minFlow: 4.0, maxFlow: 20.0, minHead: 18, maxHead: 32, power: 1.50, efficiency: 60, rpm: 2900 },
  { brand: 'LEO', model: 'XST 40-200/22',  series: 'XST', minFlow: 5.0, maxFlow: 25.0, minHead: 28, maxHead: 48, power: 2.20, efficiency: 63, rpm: 2900 },
  { brand: 'LEO', model: 'XST 50-125/15',  series: 'XST', minFlow: 8.0, maxFlow: 35.0, minHead: 10, maxHead: 20, power: 1.50, efficiency: 65, rpm: 2900 },
  { brand: 'LEO', model: 'XST 50-160/22',  series: 'XST', minFlow: 10.0,maxFlow: 45.0, minHead: 18, maxHead: 32, power: 2.20, efficiency: 68, rpm: 2900 },
  { brand: 'LEO', model: 'XST 50-200/30',  series: 'XST', minFlow: 12.0,maxFlow: 55.0, minHead: 28, maxHead: 48, power: 3.00, efficiency: 70, rpm: 2900 },
  { brand: 'LEO', model: 'XST 65-160/30',  series: 'XST', minFlow: 20.0,maxFlow: 80.0, minHead: 14, maxHead: 28, power: 3.00, efficiency: 72, rpm: 2900 },
  { brand: 'LEO', model: 'XST 65-200/40',  series: 'XST', minFlow: 20.0,maxFlow: 80.0, minHead: 26, maxHead: 46, power: 4.00, efficiency: 74, rpm: 2900 },

  // ────────────────────────────────────────────────────────
  //  XZS SERİSİ — Kendinden Emişli Santrifüj Pompalar
  // ────────────────────────────────────────────────────────
  { brand: 'LEO', model: 'XZS 32',   series: 'XZS', minFlow: 0.3, maxFlow: 3.0,  minHead: 12, maxHead: 32, power: 0.37, efficiency: 38, rpm: 2900 },
  { brand: 'LEO', model: 'XZS 50A',  series: 'XZS', minFlow: 0.5, maxFlow: 5.0,  minHead: 16, maxHead: 40, power: 0.55, efficiency: 42, rpm: 2900 },
  { brand: 'LEO', model: 'XZS 50B',  series: 'XZS', minFlow: 0.5, maxFlow: 5.0,  minHead: 22, maxHead: 50, power: 0.75, efficiency: 44, rpm: 2900 },
  { brand: 'LEO', model: 'XZS 100A', series: 'XZS', minFlow: 1.0, maxFlow: 9.0,  minHead: 14, maxHead: 36, power: 0.75, efficiency: 48, rpm: 2900 },
  { brand: 'LEO', model: 'XZS 100B', series: 'XZS', minFlow: 1.0, maxFlow: 9.0,  minHead: 24, maxHead: 54, power: 1.10, efficiency: 50, rpm: 2900 },
  { brand: 'LEO', model: 'XZS 200',  series: 'XZS', minFlow: 2.0, maxFlow: 16.0, minHead: 12, maxHead: 34, power: 1.10, efficiency: 54, rpm: 2900 },
  { brand: 'LEO', model: 'XZS 200B', series: 'XZS', minFlow: 2.0, maxFlow: 16.0, minHead: 22, maxHead: 50, power: 1.50, efficiency: 56, rpm: 2900 },

];
