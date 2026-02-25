// ============================================================
//  HESAPLAMA & UI MANTIĞI
//  Tüm markalar için pompa seçим hesaplamaları ve arayüz
// ============================================================

// ── Tüm marka veritabanlarını birleştir ──────────────────────
const ALL_PUMPS = [
  ...(window.PUMPS_ATLANTIS || []),
  ...(window.PUMPS_EBARA    || []),
  ...(window.PUMPS_GOULDS   || []),
  ...(window.PUMPS_LEO      || []),
  ...(window.PUMPS_LOWARA   || []),
];

// Marka renk/ikon/stil tanımları ─────────────────────────────
const BRAND_META = {
  'ATLANTİS': { colorClass: 'brand-atlantis', textClass: 'text-cyan-400',   label: 'ATLANTİS', emoji: '🔷' },
  'EBARA':    { colorClass: 'brand-ebara',    textClass: 'text-amber-400',   label: 'EBARA',    emoji: '🟠' },
  'GOULDS':   { colorClass: 'brand-goulds',   textClass: 'text-blue-400',    label: 'GOULDS',   emoji: '🔵' },
  'LEO':      { colorClass: 'brand-leo',      textClass: 'text-red-400',     label: 'LEO',      emoji: '🔴' },
  'LOWARA':   { colorClass: 'brand-lowara',   textClass: 'text-green-400',   label: 'LOWARA',   emoji: '🟢' },
};

// ── Sabitler ─────────────────────────────────────────────────
const PIPE_MATERIALS = {
  pvc:       { c: 150, name: 'PVC (Pürüzsüz)' },
  steel:     { c: 120, name: 'Galvanizli Çelik' },
  stainless: { c: 140, name: 'Paslanmaz Çelik' },
  copper:    { c: 135, name: 'Bakır' },
  hdpe:      { c: 145, name: 'HDPE' },
};

const LOCAL_K = { elbow90: 0.9, valve: 0.2 };

// ── Hesaplama Fonksiyonları ───────────────────────────────────

/** Hazen-Williams – sürtünme kaybı (m)
 *  flow: m³/h  |  length: m  |  diameter: mm  |  c: [-] */
function calcFriction(flow, length, diameter, c) {
  const Q = flow / 3600;         // → m³/s
  const D = diameter / 1000;     // → m
  return 10.67 * Math.pow(Q, 1.852) * length /
         (Math.pow(c, 1.852) * Math.pow(D, 4.87));
}

/** Lokal kayıplar (m) */
function calcLocal(flow, diameter, elbows, valves) {
  const v = (flow / 3600) / (Math.PI * Math.pow(diameter / 2000, 2));
  const K = elbows * LOCAL_K.elbow90 + valves * LOCAL_K.valve;
  return K * v * v / (2 * 9.81);
}

/** Belirli bir debi-basma için tüm veritabanından uygun pompaları seç,
 *  her marka için en iyi birini döndür */
function selectPumps(reqFlow, reqHead) {
  const byBrand = {};

  for (const p of ALL_PUMPS) {
    if (reqFlow < p.minFlow || reqFlow > p.maxFlow) continue;
    if (reqHead < p.minHead || reqHead > p.maxHead) continue;

    const rQ = (reqFlow - p.minFlow) / (p.maxFlow - p.minFlow);
    const rH = (reqHead  - p.minHead) / (p.maxHead  - p.minHead);
    const wEff = p.efficiency * (1 - 0.20 * Math.abs(rQ - 0.5) - 0.15 * Math.abs(rH - 0.5));

    const sQ  = 1 - Math.abs(rQ - 0.5) * 2;
    const sH  = 1 - Math.abs(rH - 0.5) * 2;
    const sEf = wEff / 100;
    const score = (sQ * 0.35 + sH * 0.35 + sEf * 0.30) * 100;

    const candidate = { ...p, workingEff: Math.round(wEff), score: Math.round(score) };

    if (!byBrand[p.brand] || score > byBrand[p.brand].score)
      byBrand[p.brand] = candidate;
  }

  return Object.values(byBrand).sort((a, b) => b.score - a.score);
}

// ── Render Fonksiyonları ──────────────────────────────────────

function renderResults(pumps, reqFlow, reqHead) {
  const el = document.getElementById('pump-results');
  if (!el) return;

  if (pumps.length === 0) {
    el.innerHTML = `
      <div class="text-center py-8">
        <svg class="w-16 h-16 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3
               L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <h3 class="text-lg font-semibold text-red-400 mb-2">Uygun Pompa Bulunamadı</h3>
        <p class="text-slate-400 text-sm">Gerekli debi: ${reqFlow.toFixed(2)} m³/h &nbsp;|&nbsp; Basma yük.: ${reqHead.toFixed(1)} m</p>
        <p class="text-slate-500 text-xs mt-4">Parametreleri değiştirin veya üretici ile iletişime geçin.</p>
      </div>`;
    return;
  }

  el.innerHTML = pumps.map((p, i) => {
    const m = BRAND_META[p.brand] || { colorClass:'brand-goulds', textClass:'text-blue-400', emoji:'🔵' };
    const rec = i === 0;
    return `
      <div class="pump-card ${rec ? 'recommended' : ''} bg-slate-800/60 rounded-xl overflow-hidden border ${rec ? 'border-blue-500' : 'border-slate-700'}">
        <div class="flex items-stretch">
          <div class="${m.colorClass} px-4 py-5 flex flex-col items-center justify-center min-w-[72px] gap-1">
            <span class="text-2xl">${m.emoji}</span>
            <span class="text-white text-[10px] font-bold text-center leading-tight">${m.label}</span>
          </div>
          <div class="flex-1 p-4">
            <div class="flex items-start justify-between mb-3">
              <div>
                ${rec ? '<span class="text-xs bg-blue-500/30 text-blue-300 px-2 py-1 rounded-full mb-2 inline-block">⭐ Önerilen</span>' : ''}
                <h3 class="font-bold text-base leading-snug">${p.model}</h3>
                <p class="text-xs text-slate-400">${p.brand} — ${p.series} Serisi &nbsp;·&nbsp; ${p.rpm} RPM</p>
              </div>
              <div class="text-right shrink-0 ml-2">
                <div class="text-2xl font-bold ${rec ? 'text-blue-400' : 'text-slate-300'}">${p.score}%</div>
                <div class="text-[10px] text-slate-500">Uygunluk</div>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div class="bg-slate-900/50 rounded-lg p-2">
                <div class="text-slate-500 text-xs">Debi Aralığı</div>
                <div class="font-semibold">${p.minFlow}–${p.maxFlow} m³/h</div>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-2">
                <div class="text-slate-500 text-xs">Basma Yük.</div>
                <div class="font-semibold">${p.minHead}–${p.maxHead} m</div>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-2">
                <div class="text-slate-500 text-xs">Motor Gücü</div>
                <div class="font-semibold">${p.power} kW</div>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-2">
                <div class="text-slate-500 text-xs">Çalışma Verimi</div>
                <div class="font-semibold text-green-400">${p.workingEff}%</div>
              </div>
            </div>
            <div class="mt-2 text-xs text-slate-500">
              📊 Çalışma Noktası: <span class="text-slate-300">${reqFlow.toFixed(2)} m³/h @ ${reqHead.toFixed(1)} m</span>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── Ana Hesaplama ─────────────────────────────────────────────
function calculate() {
  const nozzleCount    = parseInt(document.getElementById('nozzle-count').value)    || 0;
  const nozzleFlow     = parseFloat(document.getElementById('nozzle-flow').value)   || 0;
  const reqPressure    = parseFloat(document.getElementById('required-pressure').value) || 0;
  const pipeLength     = parseFloat(document.getElementById('pipe-length').value)   || 0;
  const pipeDiameter   = parseFloat(document.getElementById('pipe-diameter').value) || 32;
  const pipeMat        = document.getElementById('pipe-material').value;
  const elbowCount     = parseInt(document.getElementById('elbow-count').value)     || 0;
  const valveCount     = parseInt(document.getElementById('valve-count').value)     || 0;
  const heightDiff     = parseFloat(document.getElementById('height-diff').value)   || 0;

  const totalFlow   = nozzleCount * nozzleFlow * 60 / 1000;  // m³/h
  const nozzleHead  = reqPressure * 10.2;                    // m
  const c           = PIPE_MATERIALS[pipeMat]?.c ?? 120;
  const friction    = calcFriction(totalFlow, pipeLength, pipeDiameter, c);
  const local       = calcLocal(totalFlow, pipeDiameter, elbowCount, valveCount);
  const totalHead   = nozzleHead + friction + local + heightDiff;

  // Sonuç widget'larını güncelle
  document.getElementById('total-flow').textContent    = totalFlow.toFixed(2)   + ' m³/h';
  document.getElementById('total-head').textContent    = totalHead.toFixed(1)   + ' m';
  document.getElementById('friction-loss').textContent = friction.toFixed(2)    + ' m';
  document.getElementById('local-loss').textContent    = local.toFixed(2)       + ' m';

  renderResults(selectPumps(totalFlow, totalHead), totalFlow, totalHead);
}

// ── Tab Yönetimi ──────────────────────────────────────────────
function switchTab(tab) {
  ['calc', 'catalog', 'method'].forEach(t => {
    const page = document.getElementById('page-' + t);
    const btn  = document.getElementById('tab-' + t + '-btn');
    if (!page || !btn) return;
    const active = t === tab;
    page.style.display = active ? '' : 'none';
    btn.classList.toggle('tab-active', active);
  });

  // KaTeX — sadece ilk açılışta render et
  if (tab === 'method') {
    const methPage = document.getElementById('page-method');
    if (window.renderMathInElement && methPage && !methPage.dataset.rendered) {
      renderMathInElement(methPage, {
        delimiters: [
          { left: '$$', right: '$$', display: true  },
          { left: '$',  right: '$',  display: false },
        ],
        throwOnError: false,
      });
      methPage.dataset.rendered = '1';
    }
  }
}

// ── Pompa Kataloğu Render ─────────────────────────────────────
function renderCatalog() {
  const container = document.getElementById('catalog-content');
  if (!container) return;

  // Markalara göre grupla
  const groups = {};
  for (const p of ALL_PUMPS) {
    if (!groups[p.brand]) groups[p.brand] = {};
    if (!groups[p.brand][p.series]) groups[p.brand][p.series] = [];
    groups[p.brand][p.series].push(p);
  }

  let html = '';
  for (const brand of Object.keys(groups).sort()) {
    const m = BRAND_META[brand] || {};
    html += `
      <div class="card-glass rounded-2xl p-5 mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl ${m.colorClass || 'brand-goulds'} flex items-center justify-center text-lg">${m.emoji || '⚙'}</div>
          <h3 class="text-xl font-bold ${m.textClass || 'text-blue-400'}">${brand}</h3>
          <span class="text-slate-500 text-sm ml-auto">${ALL_PUMPS.filter(p=>p.brand===brand).length} model</span>
        </div>`;

    for (const series of Object.keys(groups[brand]).sort()) {
      const pumps = groups[brand][series];
      html += `
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-slate-400 mb-2 px-1">${series} Serisi
            <span class="text-slate-600 font-normal ml-2">(${pumps.length} pompa)</span>
          </h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-slate-500 border-b border-slate-700">
                  <th class="text-left py-2 px-2 font-medium">Model</th>
                  <th class="text-center py-2 px-2 font-medium">Min Q (m³/h)</th>
                  <th class="text-center py-2 px-2 font-medium">Max Q (m³/h)</th>
                  <th class="text-center py-2 px-2 font-medium">Min H (m)</th>
                  <th class="text-center py-2 px-2 font-medium">Max H (m)</th>
                  <th class="text-center py-2 px-2 font-medium">Güç (kW)</th>
                  <th class="text-center py-2 px-2 font-medium">Verim (%)</th>
                  <th class="text-center py-2 px-2 font-medium">RPM</th>
                </tr>
              </thead>
              <tbody>
                ${pumps.map((p, i) => `
                  <tr class="${i % 2 === 0 ? 'bg-slate-800/30' : ''} hover:bg-slate-700/30 transition-colors">
                    <td class="py-1.5 px-2 font-medium text-slate-200">${p.model}</td>
                    <td class="py-1.5 px-2 text-center text-slate-300">${p.minFlow}</td>
                    <td class="py-1.5 px-2 text-center text-slate-300">${p.maxFlow}</td>
                    <td class="py-1.5 px-2 text-center text-slate-300">${p.minHead}</td>
                    <td class="py-1.5 px-2 text-center text-slate-300">${p.maxHead}</td>
                    <td class="py-1.5 px-2 text-center text-yellow-400 font-semibold">${p.power}</td>
                    <td class="py-1.5 px-2 text-center text-green-400 font-semibold">${p.efficiency}</td>
                    <td class="py-1.5 px-2 text-center text-slate-400">${p.rpm}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>`;
    }
    html += `</div>`;
  }

  container.innerHTML = html;
}

// ── Event Listener'lar ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.getElementById('calculate-btn');
  if (calcBtn) calcBtn.addEventListener('click', calculate);

  // Katalog ilk açılışta yükle
  renderCatalog();

  // İlk hesaplamayı çalıştır
  calculate();
});
