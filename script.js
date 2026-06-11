import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCT4oa9yXIhq9kwnmR2CqWIK5Ny07ofVOE",
  authDomain: "bolao-copa-2026-9b736.firebaseapp.com",
  databaseURL: "https://bolao-copa-2026-9b736-default-rtdb.firebaseio.com",
  projectId: "bolao-copa-2026-9b736",
  storageBucket: "bolao-copa-2026-9b736.firebasestorage.app",
  messagingSenderId: "977592745672",
  appId: "1:977592745672:web:337c74186ec920da102ffd"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// ── Dados ─────────────────────────────────────────────────────────────────────

const matches = [
  {"group":"A","round":1,"home":"México","away":"África do Sul"},
  {"group":"A","round":1,"home":"Coreia do Sul","away":"República Tcheca"},
  {"group":"A","round":2,"home":"República Tcheca","away":"África do Sul"},
  {"group":"A","round":2,"home":"México","away":"Coreia do Sul"},
  {"group":"A","round":3,"home":"República Tcheca","away":"México"},
  {"group":"A","round":3,"home":"África do Sul","away":"Coreia do Sul"},
  {"group":"B","round":1,"home":"Canadá","away":"Bósnia e Herzegovina"},
  {"group":"B","round":1,"home":"Catar","away":"Suíça"},
  {"group":"B","round":2,"home":"Suíça","away":"Bósnia e Herzegovina"},
  {"group":"B","round":2,"home":"Canadá","away":"Catar"},
  {"group":"B","round":3,"home":"Suíça","away":"Canadá"},
  {"group":"B","round":3,"home":"Bósnia e Herzegovina","away":"Catar"},
  {"group":"C","round":1,"home":"Brasil","away":"Marrocos"},
  {"group":"C","round":1,"home":"Haiti","away":"Escócia"},
  {"group":"C","round":2,"home":"Escócia","away":"Marrocos"},
  {"group":"C","round":2,"home":"Brasil","away":"Haiti"},
  {"group":"C","round":3,"home":"Escócia","away":"Brasil"},
  {"group":"C","round":3,"home":"Marrocos","away":"Haiti"},
  {"group":"D","round":1,"home":"Estados Unidos","away":"Paraguai"},
  {"group":"D","round":1,"home":"Austrália","away":"Turquia"},
  {"group":"D","round":2,"home":"Estados Unidos","away":"Austrália"},
  {"group":"D","round":2,"home":"Turquia","away":"Paraguai"},
  {"group":"D","round":3,"home":"Turquia","away":"Estados Unidos"},
  {"group":"D","round":3,"home":"Paraguai","away":"Austrália"},
  {"group":"E","round":1,"home":"Alemanha","away":"Curaçao"},
  {"group":"E","round":1,"home":"Costa do Marfim","away":"Equador"},
  {"group":"E","round":2,"home":"Alemanha","away":"Costa do Marfim"},
  {"group":"E","round":2,"home":"Equador","away":"Curaçao"},
  {"group":"E","round":3,"home":"Equador","away":"Alemanha"},
  {"group":"E","round":3,"home":"Curaçao","away":"Costa do Marfim"},
  {"group":"F","round":1,"home":"Holanda","away":"Japão"},
  {"group":"F","round":1,"home":"Suécia","away":"Tunísia"},
  {"group":"F","round":2,"home":"Holanda","away":"Suécia"},
  {"group":"F","round":2,"home":"Tunísia","away":"Japão"},
  {"group":"F","round":3,"home":"Japão","away":"Suécia"},
  {"group":"F","round":3,"home":"Tunísia","away":"Holanda"},
  {"group":"G","round":1,"home":"Bélgica","away":"Egito"},
  {"group":"G","round":1,"home":"Irã","away":"Nova Zelândia"},
  {"group":"G","round":2,"home":"Bélgica","away":"Irã"},
  {"group":"G","round":2,"home":"Nova Zelândia","away":"Egito"},
  {"group":"G","round":3,"home":"Nova Zelândia","away":"Bélgica"},
  {"group":"G","round":3,"home":"Egito","away":"Irã"},
  {"group":"H","round":1,"home":"Espanha","away":"Cabo Verde"},
  {"group":"H","round":1,"home":"Arábia Saudita","away":"Uruguai"},
  {"group":"H","round":2,"home":"Espanha","away":"Arábia Saudita"},
  {"group":"H","round":2,"home":"Uruguai","away":"Cabo Verde"},
  {"group":"H","round":3,"home":"Cabo Verde","away":"Arábia Saudita"},
  {"group":"H","round":3,"home":"Uruguai","away":"Espanha"},
  {"group":"I","round":1,"home":"França","away":"Senegal"},
  {"group":"I","round":1,"home":"Iraque","away":"Noruega"},
  {"group":"I","round":2,"home":"França","away":"Iraque"},
  {"group":"I","round":2,"home":"Noruega","away":"Senegal"},
  {"group":"I","round":3,"home":"Noruega","away":"França"},
  {"group":"I","round":3,"home":"Senegal","away":"Iraque"},
  {"group":"J","round":1,"home":"Argentina","away":"Argélia"},
  {"group":"J","round":1,"home":"Áustria","away":"Jordânia"},
  {"group":"J","round":2,"home":"Argentina","away":"Áustria"},
  {"group":"J","round":2,"home":"Jordânia","away":"Argélia"},
  {"group":"J","round":3,"home":"Argélia","away":"Áustria"},
  {"group":"J","round":3,"home":"Jordânia","away":"Argentina"},
  {"group":"K","round":1,"home":"Portugal","away":"RD Congo"},
  {"group":"K","round":1,"home":"Uzbequistão","away":"Colômbia"},
  {"group":"K","round":2,"home":"Portugal","away":"Uzbequistão"},
  {"group":"K","round":2,"home":"Colômbia","away":"RD Congo"},
  {"group":"K","round":3,"home":"Colômbia","away":"Portugal"},
  {"group":"K","round":3,"home":"RD Congo","away":"Uzbequistão"},
  {"group":"L","round":1,"home":"Inglaterra","away":"Croácia"},
  {"group":"L","round":1,"home":"Gana","away":"Panamá"},
  {"group":"L","round":2,"home":"Inglaterra","away":"Gana"},
  {"group":"L","round":2,"home":"Panamá","away":"Croácia"},
  {"group":"L","round":3,"home":"Panamá","away":"Inglaterra"},
  {"group":"L","round":3,"home":"Croácia","away":"Gana"}
];

const countryCodes = {
  "México":"mx","África do Sul":"za","Coreia do Sul":"kr","República Tcheca":"cz",
  "Canadá":"ca","Bósnia e Herzegovina":"ba","Catar":"qa","Suíça":"ch",
  "Brasil":"br","Marrocos":"ma","Haiti":"ht","Escócia":"gb-sct",
  "Estados Unidos":"us","Paraguai":"py","Austrália":"au","Turquia":"tr",
  "Alemanha":"de","Curaçao":"cw","Costa do Marfim":"ci","Equador":"ec",
  "Holanda":"nl","Japão":"jp","Suécia":"se","Tunísia":"tn",
  "Bélgica":"be","Egito":"eg","Irã":"ir","Nova Zelândia":"nz",
  "Espanha":"es","Cabo Verde":"cv","Arábia Saudita":"sa","Uruguai":"uy",
  "França":"fr","Senegal":"sn","Iraque":"iq","Noruega":"no",
  "Argentina":"ar","Argélia":"dz","Áustria":"at","Jordânia":"jo",
  "Portugal":"pt","RD Congo":"cd","Uzbequistão":"uz","Colômbia":"co",
  "Inglaterra":"gb-eng","Croácia":"hr","Gana":"gh","Panamá":"pa"
};

// ── Estado ────────────────────────────────────────────────────────────────────

let currentUser = null;
let myPredictions = {};
let officialResults = {};
let allPredictions = {};

function flagUrl(t) {
  const c = countryCodes[t]; if (!c) return '';
  return `https://flagcdn.com/w40/${c}.png`;
}
function matchId(m) { return `${m.group}-${m.round}-${m.home}-${m.away}`; }
function getGroupedMatches() {
  const g = {};
  for (const m of matches) {
    if (!g[m.group]) g[m.group] = {1:[],2:[],3:[]};
    g[m.group][m.round].push(m);
  }
  return g;
}
function getOutcome(h,a) {
  const hi=parseInt(h), ai=parseInt(a);
  if (isNaN(hi)||isNaN(ai)) return null;
  return hi>ai?'home':ai>hi?'away':'draw';
}
function calcPoints(ph,pa,oh,oa) {
  if ([ph,pa,oh,oa].some(v=>v===''||v===undefined)) return null;
  const p1=parseInt(ph),p2=parseInt(pa),o1=parseInt(oh),o2=parseInt(oa);
  if ([p1,p2,o1,o2].some(isNaN)) return null;
  if (p1===o1&&p2===o2) return 3;
  if (getOutcome(p1,p2)===getOutcome(o1,o2)) return 1;
  return 0;
}

// ── Firebase helpers ──────────────────────────────────────────────────────────

async function saveMyPrediction(id, side, value) {
  myPredictions[id] = myPredictions[id] || {home:'',away:''};
  myPredictions[id][side] = value;
  await set(ref(db, `predictions/${currentUser}/${id}`), myPredictions[id]);
  updateStats();
  refreshMatchStatus(id);
}

async function saveOfficialResults() {
  await set(ref(db, 'official'), officialResults);
}

// ── Escuta em tempo real ──────────────────────────────────────────────────────

function listenAll() {
  // Todos os palpites
  onValue(ref(db, 'predictions'), snap => {
    allPredictions = snap.val() || {};
    myPredictions = allPredictions[currentUser] || {};
    updateStats();
    updateAllStatus();
    updateScoreboard();
  });

  // Resultados oficiais
  onValue(ref(db, 'official'), snap => {
    officialResults = snap.val() || {};
    document.getElementById('officialCount').textContent =
      Object.values(officialResults).filter(r=>r&&r.home!==''&&r.away!=='').length;
    updateAllStatus();
    updateScoreboard();
  });
}

// ── Stats ─────────────────────────────────────────────────────────────────────

function updateStats() {
  const total = matches.length;
  const saved = Object.values(myPredictions).filter(p=>p&&p.home!==''&&p.away!=='').length;
  document.getElementById('totalGames').textContent = total;
  document.getElementById('savedGames').textContent = saved;
  document.getElementById('progressText').textContent = `${Math.round((saved/total)*100)}%`;
}

// ── Status de cada jogo ───────────────────────────────────────────────────────

function renderStatusHtml(id) {
  const pred = myPredictions[id];
  const off = officialResults[id];
  const complete = pred && pred.home!=='' && pred.away!=='';
  if (!complete) return '<span class="empty-note">Preencha os dois campos.</span>';
  let html = '<span class="saved">Palpite salvo.</span>';
  if (off && off.home!=='' && off.away!=='') {
    const pts = calcPoints(pred.home, pred.away, off.home, off.away);
    if (pts===3) html += ' <span class="points-badge points-3">⭐ 3 pts – Placar exato!</span>';
    else if (pts===1) html += ' <span class="points-badge points-1">✔ 1 pt – Acertou o resultado</span>';
    else if (pts===0) html += ' <span class="points-badge points-0">✗ 0 pts</span>';
  }
  return html;
}

function refreshMatchStatus(id) {
  const el = document.querySelector(`[data-status="${CSS.escape(id)}"]`);
  if (el) el.innerHTML = renderStatusHtml(id);
  const mel = document.querySelector(`[data-match-id="${CSS.escape(id)}"]`);
  if (mel) {
    const off = officialResults[id];
    mel.classList.toggle('has-result', !!(off&&off.home!==''&&off.away!==''));
  }
}

function updateAllStatus() {
  matches.forEach(m => refreshMatchStatus(matchId(m)));
}

// ── Scoreboard inline ─────────────────────────────────────────────────────────

function calcUserScore(userPreds) {
  let total=0, exact=0, outcome=0;
  matches.forEach(m => {
    const id = matchId(m);
    const pred = userPreds?.[id];
    const off = officialResults[id];
    if (!pred||!off) return;
    const pts = calcPoints(pred.home, pred.away, off.home, off.away);
    if (pts===null) return;
    total+=pts;
    if (pts===3) exact++;
    else if (pts===1) outcome++;
  });
  return {total, exact, outcome};
}

function updateScoreboard() {
  const sb = document.getElementById('scoreboard');
  const grid = document.getElementById('scoreboardGrid');
  const users = Object.keys(allPredictions);
  if (users.length===0) { sb.classList.remove('visible'); return; }

  const scores = users.map(u => ({name:u, ...calcUserScore(allPredictions[u])}));
  scores.sort((a,b)=>b.total-a.total);

  grid.innerHTML = scores.map((s,i) => `
    <div class="participant-card${s.name===currentUser?' me':''}">
      <div class="participant-name">${i===0?'🥇 ':i===1?'🥈 ':i===2?'🥉 ':`${i+1}. `}${s.name}${s.name===currentUser?' (você)':''}</div>
      <div class="participant-score">${s.total} pts</div>
      <div class="participant-detail">⭐ ${s.exact} exatos · ✔ ${s.outcome} resultados</div>
    </div>
  `).join('');
  sb.classList.add('visible');
}

// ── Render principal ──────────────────────────────────────────────────────────

function render() {
  const grouped = getGroupedMatches();
  const groupKeys = Object.keys(grouped).sort();
  const appEl = document.getElementById('app');

  appEl.innerHTML = groupKeys.map(group => {
    const rounds = grouped[group];
    return `
      <section class="group-section card">
        <div class="group-header">
          <h2 class="group-title">Grupo ${group}</h2>
          <div class="empty-note">Por rodada</div>
        </div>
        ${[1,2,3].map(round=>`
          <div class="round-block">
            <div class="round-title">${round}ª rodada</div>
            <div class="match-list">
              ${rounds[round].map(match=>{
                const id=matchId(match);
                const pred=myPredictions[id]||{home:'',away:''};
                const off=officialResults[id]||{home:'',away:''};
                const hasOff=off.home!==''&&off.away!=='';
                return `
                  <div>
                    <div class="match${hasOff?' has-result':''}" data-match-id="${id}">
                      <div class="team home">
                        <div class="team-name">${match.home}</div>
                        <img class="flag" src="${flagUrl(match.home)}" alt="${match.home}" loading="lazy" width="28" height="20"/>
                      </div>
                      <input class="score-input" inputmode="numeric" pattern="[0-9]*" min="0" max="99"
                        value="${pred.home}" data-id="${id}" data-side="home" aria-label="Gols ${match.home}"/>
                      <div class="vs">x</div>
                      <input class="score-input" inputmode="numeric" pattern="[0-9]*" min="0" max="99"
                        value="${pred.away}" data-id="${id}" data-side="away" aria-label="Gols ${match.away}"/>
                      <div class="team away">
                        <img class="flag" src="${flagUrl(match.away)}" alt="${match.away}" loading="lazy" width="28" height="20"/>
                        <div class="team-name">${match.away}</div>
                      </div>
                    </div>
                    <div class="status" data-status="${id}">${renderStatusHtml(id)}</div>
                  </div>`;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </section>`;
  }).join('');

  document.querySelectorAll('.score-input').forEach(input=>{
    input.addEventListener('input', e=>{
      const raw=e.target.value.replace(/\D/g,'').slice(0,2);
      e.target.value=raw;
      saveMyPrediction(e.target.dataset.id, e.target.dataset.side, raw);
    });
  });
}

// ── Modal Resultados Oficiais ─────────────────────────────────────────────────

function renderOfficialMatchList() {
  const grouped=getGroupedMatches();
  const container=document.getElementById('officialMatchList');
  container.innerHTML=Object.keys(grouped).sort().map(group=>{
    const rounds=grouped[group];
    return `<div class="modal-section-title">Grupo ${group}</div>
      ${[1,2,3].map(round=>rounds[round].map(match=>{
        const id=matchId(match);
        const off=officialResults[id]||{home:'',away:''};
        return `<div class="modal-match-row">
          <div class="modal-team home"><span>${match.home}</span>
            <img class="flag" src="${flagUrl(match.home)}" alt="" width="22" height="16" loading="lazy"/></div>
          <input class="score-input official" inputmode="numeric" pattern="[0-9]*"
            value="${off.home}" data-off-id="${id}" data-off-side="home" placeholder="–"/>
          <div class="vs">x</div>
          <input class="score-input official" inputmode="numeric" pattern="[0-9]*"
            value="${off.away}" data-off-id="${id}" data-off-side="away" placeholder="–"/>
          <div class="modal-team away">
            <img class="flag" src="${flagUrl(match.away)}" alt="" width="22" height="16" loading="lazy"/>
            <span>${match.away}</span></div>
        </div>`;
      }).join('')).join('')}`;
  }).join('');

  container.querySelectorAll('[data-off-id]').forEach(input=>{
    input.addEventListener('input', e=>{
      const raw=e.target.value.replace(/\D/g,'').slice(0,2);
      e.target.value=raw;
      const id=e.target.dataset.offId, side=e.target.dataset.offSide;
      if (!officialResults[id]) officialResults[id]={home:'',away:''};
      officialResults[id][side]=raw;
    });
  });
}

// ── Modal Classificação ───────────────────────────────────────────────────────

function renderRanking() {
  const users=Object.keys(allPredictions);
  const rankEl=document.getElementById('rankingList');
  if (users.length===0) {
    rankEl.innerHTML='<p class="modal-desc">Nenhum participante ainda.</p>'; return;
  }
  const scores=users.map(u=>({name:u,...calcUserScore(allPredictions[u])}));
  scores.sort((a,b)=>b.total-a.total);
  rankEl.innerHTML=scores.map((s,i)=>`
    <div class="ranking-row${s.name===currentUser?' me':''}">
      <div class="ranking-pos">${i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}º`}</div>
      <div>
        <div class="ranking-name">${s.name}${s.name===currentUser?' <span style="color:var(--primary);font-size:.8rem;">(você)</span>':''}</div>
        <div class="ranking-detail">⭐ ${s.exact} exatos · ✔ ${s.outcome} resultados</div>
      </div>
      <div class="ranking-pts">${s.total} pts</div>
    </div>
  `).join('');
}

// ── Modal Palpites da Galera ──────────────────────────────────────────────────

function renderGalera() {
  const users=Object.keys(allPredictions);
  const container=document.getElementById('galeraList');
  const grouped=getGroupedMatches();

  container.innerHTML=Object.keys(grouped).sort().map(group=>{
    const rounds=grouped[group];
    return `<div class="modal-section-title">Grupo ${group}</div>
      ${[1,2,3].map(round=>rounds[round].map(match=>{
        const id=matchId(match);
        const off=officialResults[id];
        const hasOff=off&&off.home!==''&&off.away!=='';
        const chips=users.map(u=>{
          const pred=allPredictions[u]?.[id];
          if (!pred||pred.home===''||pred.away==='') return null;
          let cls='galera-chip'+(u===currentUser?' me':'');
          if (hasOff) {
            const pts=calcPoints(pred.home,pred.away,off.home,off.away);
            if (pts===3) cls+=' pts-3';
            else if (pts===1) cls+=' pts-1';
            else if (pts===0) cls+=' pts-0';
          }
          return `<span class="${cls}">${u}: ${pred.home}x${pred.away}</span>`;
        }).filter(Boolean);
        return `<div class="galera-match">
          <div class="galera-match-title">
            <img class="flag" src="${flagUrl(match.home)}" width="20" height="14"/>
            ${match.home} x ${match.away}
            <img class="flag" src="${flagUrl(match.away)}" width="20" height="14"/>
            ${hasOff?`<span style="font-size:.8rem;color:var(--muted)">(oficial: ${off.home}x${off.away})</span>`:''}
          </div>
          <div class="galera-palpites">
            ${chips.length?chips.join(''):'<span class="no-palpites">Sem palpites ainda</span>'}
          </div>
        </div>`;
      }).join('')).join('')}`;
  }).join('');
}

// ── Eventos dos modais ────────────────────────────────────────────────────────

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.getElementById('openResultsBtn').addEventListener('click',()=>{ renderOfficialMatchList(); openModal('resultsModal'); });
document.getElementById('closeResultsModal').addEventListener('click',()=>closeModal('resultsModal'));
document.getElementById('resultsModal').addEventListener('click',e=>{ if(e.target===document.getElementById('resultsModal')) closeModal('resultsModal'); });

document.getElementById('saveResults').addEventListener('click',async()=>{
  await saveOfficialResults();
  closeModal('resultsModal');
  updateAllStatus();
  updateScoreboard();
});
document.getElementById('clearResults').addEventListener('click',async()=>{
  if (!confirm('Limpar todos os resultados oficiais?')) return;
  officialResults={};
  await saveOfficialResults();
  renderOfficialMatchList();
  updateAllStatus();
  updateScoreboard();
});

document.getElementById('openRankingBtn').addEventListener('click',()=>{ renderRanking(); openModal('rankingModal'); });
document.getElementById('closeRankingModal').addEventListener('click',()=>closeModal('rankingModal'));
document.getElementById('rankingModal').addEventListener('click',e=>{ if(e.target===document.getElementById('rankingModal')) closeModal('rankingModal'); });

document.getElementById('openGaleraBtn').addEventListener('click',()=>{ renderGalera(); openModal('galeraModal'); });
document.getElementById('closeGaleraModal').addEventListener('click',()=>closeModal('galeraModal'));
document.getElementById('galeraModal').addEventListener('click',e=>{ if(e.target===document.getElementById('galeraModal')) closeModal('galeraModal'); });

document.getElementById('clearAll').addEventListener('click',async()=>{
  if (!confirm('Deseja limpar todos os seus palpites?')) return;
  myPredictions={};
  await set(ref(db,`predictions/${currentUser}`), null);
  render();
});

// ── Login ─────────────────────────────────────────────────────────────────────

document.getElementById('enterBtn').addEventListener('click', async () => {
  const name = document.getElementById('usernameInput').value.trim();
  if (!name || name.length < 2) {
    document.getElementById('loginError').style.display='block'; return;
  }
  currentUser = name;
  document.getElementById('loginScreen').style.display='none';
  document.getElementById('mainApp').style.display='block';
  document.getElementById('welcomeMsg').textContent=`Olá, ${currentUser}! 👋`;
  listenAll();
  render();
});

document.getElementById('usernameInput').addEventListener('keydown',e=>{
  if (e.key==='Enter') document.getElementById('enterBtn').click();
});

// ── Tema ──────────────────────────────────────────────────────────────────────

(function(){
  const root=document.documentElement;
  const btn=document.querySelector('[data-theme-toggle]');
  let dark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme',dark?'dark':'light');
  btn.textContent=dark?'☀️':'🌙';
  btn.addEventListener('click',()=>{
    dark=!dark;
    root.setAttribute('data-theme',dark?'dark':'light');
    btn.textContent=dark?'☀️':'🌙';
  });
})();