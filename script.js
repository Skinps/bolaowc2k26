const matches = [{"group": "A", "round": 1, "home": "México", "away": "Coreia do Sul"}, {"group": "A", "round": 1, "home": "África do Sul", "away": "República Tcheca"}, {"group": "A", "round": 2, "home": "México", "away": "África do Sul"}, {"group": "A", "round": 2, "home": "Coreia do Sul", "away": "República Tcheca"}, {"group": "A", "round": 3, "home": "México", "away": "República Tcheca"}, {"group": "A", "round": 3, "home": "África do Sul", "away": "Coreia do Sul"}, {"group": "B", "round": 1, "home": "Canadá", "away": "Suíça"}, {"group": "B", "round": 1, "home": "Bósnia e Herzegovina", "away": "Catar"}, {"group": "B", "round": 2, "home": "Canadá", "away": "Catar"}, {"group": "B", "round": 2, "home": "Bósnia e Herzegovina", "away": "Suíça"}, {"group": "B", "round": 3, "home": "Canadá", "away": "Bósnia e Herzegovina"}, {"group": "B", "round": 3, "home": "Catar", "away": "Suíça"}, {"group": "C", "round": 1, "home": "Brasil", "away": "Marrocos"}, {"group": "C", "round": 1, "home": "Haiti", "away": "Escócia"}, {"group": "C", "round": 2, "home": "Brasil", "away": "Escócia"}, {"group": "C", "round": 2, "home": "Marrocos", "away": "Haiti"}, {"group": "C", "round": 3, "home": "Brasil", "away": "Haiti"}, {"group": "C", "round": 3, "home": "Marrocos", "away": "Escócia"}, {"group": "D", "round": 1, "home": "Estados Unidos", "away": "Austrália"}, {"group": "D", "round": 1, "home": "Paraguai", "away": "Turquia"}, {"group": "D", "round": 2, "home": "Estados Unidos", "away": "Paraguai"}, {"group": "D", "round": 2, "home": "Austrália", "away": "Turquia"}, {"group": "D", "round": 3, "home": "Estados Unidos", "away": "Turquia"}, {"group": "D", "round": 3, "home": "Paraguai", "away": "Austrália"}, {"group": "E", "round": 1, "home": "Alemanha", "away": "Equador"}, {"group": "E", "round": 1, "home": "Curaçao", "away": "Costa do Marfim"}, {"group": "E", "round": 2, "home": "Alemanha", "away": "Costa do Marfim"}, {"group": "E", "round": 2, "home": "Curaçao", "away": "Equador"}, {"group": "E", "round": 3, "home": "Alemanha", "away": "Curaçao"}, {"group": "E", "round": 3, "home": "Costa do Marfim", "away": "Equador"}, {"group": "F", "round": 1, "home": "Holanda", "away": "Japão"}, {"group": "F", "round": 1, "home": "Suécia", "away": "Tunísia"}, {"group": "F", "round": 2, "home": "Holanda", "away": "Tunísia"}, {"group": "F", "round": 2, "home": "Japão", "away": "Suécia"}, {"group": "F", "round": 3, "home": "Holanda", "away": "Suécia"}, {"group": "F", "round": 3, "home": "Japão", "away": "Tunísia"}, {"group": "G", "round": 1, "home": "Bélgica", "away": "Irã"}, {"group": "G", "round": 1, "home": "Egito", "away": "Nova Zelândia"}, {"group": "G", "round": 2, "home": "Bélgica", "away": "Egito"}, {"group": "G", "round": 2, "home": "Irã", "away": "Nova Zelândia"}, {"group": "G", "round": 3, "home": "Bélgica", "away": "Nova Zelândia"}, {"group": "G", "round": 3, "home": "Egito", "away": "Irã"}, {"group": "H", "round": 1, "home": "Espanha", "away": "Uruguai"}, {"group": "H", "round": 1, "home": "Cabo Verde", "away": "Arábia Saudita"}, {"group": "H", "round": 2, "home": "Espanha", "away": "Arábia Saudita"}, {"group": "H", "round": 2, "home": "Cabo Verde", "away": "Uruguai"}, {"group": "H", "round": 3, "home": "Espanha", "away": "Cabo Verde"}, {"group": "H", "round": 3, "home": "Arábia Saudita", "away": "Uruguai"}, {"group": "I", "round": 1, "home": "França", "away": "Senegal"}, {"group": "I", "round": 1, "home": "Iraque", "away": "Noruega"}, {"group": "I", "round": 2, "home": "França", "away": "Noruega"}, {"group": "I", "round": 2, "home": "Senegal", "away": "Iraque"}, {"group": "I", "round": 3, "home": "França", "away": "Iraque"}, {"group": "I", "round": 3, "home": "Senegal", "away": "Noruega"}, {"group": "J", "round": 1, "home": "Argentina", "away": "Áustria"}, {"group": "J", "round": 1, "home": "Argélia", "away": "Jordânia"}, {"group": "J", "round": 2, "home": "Argentina", "away": "Argélia"}, {"group": "J", "round": 2, "home": "Áustria", "away": "Jordânia"}, {"group": "J", "round": 3, "home": "Argentina", "away": "Jordânia"}, {"group": "J", "round": 3, "home": "Argélia", "away": "Áustria"}, {"group": "K", "round": 1, "home": "Portugal", "away": "Colômbia"}, {"group": "K", "round": 1, "home": "RD Congo", "away": "Uzbequistão"}, {"group": "K", "round": 2, "home": "Portugal", "away": "Uzbequistão"}, {"group": "K", "round": 2, "home": "RD Congo", "away": "Colômbia"}, {"group": "K", "round": 3, "home": "Portugal", "away": "RD Congo"}, {"group": "K", "round": 3, "home": "Uzbequistão", "away": "Colômbia"}, {"group": "L", "round": 1, "home": "Inglaterra", "away": "Croácia"}, {"group": "L", "round": 1, "home": "Gana", "away": "Panamá"}, {"group": "L", "round": 2, "home": "Inglaterra", "away": "Panamá"}, {"group": "L", "round": 2, "home": "Croácia", "away": "Gana"}, {"group": "L", "round": 3, "home": "Inglaterra", "away": "Gana"}, {"group": "L", "round": 3, "home": "Croácia", "away": "Panamá"}];

const countryCodes = {
  "México": "mx", "África do Sul": "za", "Coreia do Sul": "kr", "República Tcheca": "cz",
  "Canadá": "ca", "Bósnia e Herzegovina": "ba", "Catar": "qa", "Suíça": "ch",
  "Brasil": "br", "Marrocos": "ma", "Haiti": "ht", "Escócia": "gb-sct",
  "Estados Unidos": "us", "Paraguai": "py", "Austrália": "au", "Turquia": "tr",
  "Alemanha": "de", "Curaçao": "cw", "Costa do Marfim": "ci", "Equador": "ec",
  "Holanda": "nl", "Japão": "jp", "Suécia": "se", "Tunísia": "tn",
  "Bélgica": "be", "Egito": "eg", "Irã": "ir", "Nova Zelândia": "nz",
  "Espanha": "es", "Cabo Verde": "cv", "Arábia Saudita": "sa", "Uruguai": "uy",
  "França": "fr", "Senegal": "sn", "Iraque": "iq", "Noruega": "no",
  "Argentina": "ar", "Argélia": "dz", "Áustria": "at", "Jordânia": "jo",
  "Portugal": "pt", "RD Congo": "cd", "Uzbequistão": "uz", "Colômbia": "co",
  "Inglaterra": "gb-eng", "Croácia": "hr", "Gana": "gh", "Panamá": "pa"
};

const app = document.getElementById('app');
let predictions = {};
let officialResults = {};
let participants = [];

function flagUrl(team) {
  const code = countryCodes[team];
  if (!code) return '';
  return `https://flagcdn.com/w40/${code}.png`;
}

function matchId(match) {
  return `${match.group}-${match.round}-${match.home}-${match.away}`;
}

function getGroupedMatches() {
  const grouped = {};
  for (const match of matches) {
    if (!grouped[match.group]) grouped[match.group] = {1: [], 2: [], 3: []};
    grouped[match.group][match.round].push(match);
  }
  return grouped;
}

function getOutcome(h, a) {
  const hi = parseInt(h), ai = parseInt(a);
  if (isNaN(hi) || isNaN(ai)) return null;
  if (hi > ai) return 'home';
  if (ai > hi) return 'away';
  return 'draw';
}

function calcPoints(predHome, predAway, offHome, offAway) {
  if (predHome === '' || predAway === '' || offHome === '' || offAway === '') return null;
  const ph = parseInt(predHome), pa = parseInt(predAway);
  const oh = parseInt(offHome), oa = parseInt(offAway);
  if (isNaN(ph) || isNaN(pa) || isNaN(oh) || isNaN(oa)) return null;
  if (ph === oh && pa === oa) return 3;
  if (getOutcome(ph, pa) === getOutcome(oh, oa)) return 1;
  return 0;
}

function updateStats() {
  const total = matches.length;
  const saved = Object.values(predictions).filter(p => p.home !== '' && p.away !== '').length;
  const official = Object.values(officialResults).filter(r => r.home !== '' && r.away !== '').length;
  document.getElementById('totalGames').textContent = total;
  document.getElementById('savedGames').textContent = saved;
  document.getElementById('progressText').textContent = `${Math.round((saved / total) * 100)}%`;
  document.getElementById('officialCount').textContent = official;
}

function renderStatus(statusEl, id, pred, off) {
  const complete = pred && pred.home !== '' && pred.away !== '';
  if (!complete) {
    statusEl.innerHTML = '<span class="empty-note">Preencha os dois campos para salvar este jogo.</span>';
    return;
  }
  let html = '<span class="saved">Palpite salvo.</span>';
  if (off && off.home !== '' && off.away !== '') {
    const pts = calcPoints(pred.home, pred.away, off.home, off.away);
    if (pts === 3) html += ' <span class="points-badge points-3">⭐ 3 pts – Placar exato!</span>';
    else if (pts === 1) html += ' <span class="points-badge points-1">✔ 1 pt – Acertou o resultado</span>';
    else if (pts === 0) html += ' <span class="points-badge points-0">✗ 0 pts</span>';
  }
  statusEl.innerHTML = html;
}

function savePrediction(id, side, value) {
  if (!predictions[id]) predictions[id] = { home: '', away: '' };
  predictions[id][side] = value;
  updateStats();
  const statusEl = document.querySelector(`[data-status="${CSS.escape(id)}"]`);
  if (statusEl) renderStatus(statusEl, id, predictions[id], officialResults[id]);
}

function updateAllStatus() {
  matches.forEach(match => {
    const id = matchId(match);
    const statusEl = document.querySelector(`[data-status="${CSS.escape(id)}"]`);
    if (statusEl) renderStatus(statusEl, id, predictions[id] || { home: '', away: '' }, officialResults[id]);
    const matchEl = document.querySelector(`[data-match-id="${CSS.escape(id)}"]`);
    if (matchEl) {
      const off = officialResults[id];
      if (off && off.home !== '' && off.away !== '') matchEl.classList.add('has-result');
      else matchEl.classList.remove('has-result');
    }
  });
}

function updateScoreboard() {
  const scoreboard = document.getElementById('scoreboard');
  const grid = document.getElementById('scoreboardGrid');
  if (participants.length === 0) { scoreboard.classList.remove('visible'); return; }

  const scores = participants.map(name => {
    let total = 0, exact = 0, outcome = 0;
    matches.forEach(match => {
      const id = matchId(match);
      const pred = predictions[id];
      const off = officialResults[id];
      if (!pred || !off) return;
      const pts = calcPoints(pred.home, pred.away, off.home, off.away);
      if (pts === null) return;
      total += pts;
      if (pts === 3) exact++;
      else if (pts === 1) outcome++;
    });
    return { name, total, exact, outcome };
  });

  scores.sort((a, b) => b.total - a.total);

  grid.innerHTML = scores.map((s, i) => `
    <div class="participant-card">
      <div class="participant-name">${i === 0 ? '🥇 ' : i === 1 ? '🥈 ' : i === 2 ? '🥉 ' : `${i+1}. `}${s.name}</div>
      <div class="participant-score">${s.total} pts</div>
      <div class="participant-detail">⭐ ${s.exact} placares exatos &nbsp;·&nbsp; ✔ ${s.outcome} resultados</div>
    </div>
  `).join('');

  scoreboard.classList.add('visible');
}

function render() {
  const grouped = getGroupedMatches();
  const groupKeys = Object.keys(grouped).sort();

  app.innerHTML = groupKeys.map(group => {
    const rounds = grouped[group];
    return `
      <section class="group-section card">
        <div class="group-header">
          <h2 class="group-title">Grupo ${group}</h2>
          <div class="empty-note">Ordem por jogos e por rodada</div>
        </div>
        ${[1,2,3].map(round => `
          <div class="round-block">
            <div class="round-title">${round}ª rodada</div>
            <div class="match-list">
              ${rounds[round].map(match => {
                const id = matchId(match);
                const pred = predictions[id] || { home: '', away: '' };
                const off = officialResults[id] || { home: '', away: '' };
                const hasOff = off.home !== '' && off.away !== '';
                const complete = pred.home !== '' && pred.away !== '';
                return `
                  <div>
                    <div class="match${hasOff ? ' has-result' : ''}" data-match-id="${id}">
                      <div class="team home">
                        <div class="team-name">${match.home}</div>
                        <img class="flag" src="${flagUrl(match.home)}" alt="${match.home}" loading="lazy" width="28" height="20" />
                      </div>
                      <input class="score-input" inputmode="numeric" pattern="[0-9]*" min="0" max="99"
                        value="${pred.home}" data-id="${id}" data-side="home" aria-label="Gols de ${match.home}" />
                      <div class="vs">x</div>
                      <input class="score-input" inputmode="numeric" pattern="[0-9]*" min="0" max="99"
                        value="${pred.away}" data-id="${id}" data-side="away" aria-label="Gols de ${match.away}" />
                      <div class="team away">
                        <img class="flag" src="${flagUrl(match.away)}" alt="${match.away}" loading="lazy" width="28" height="20" />
                        <div class="team-name">${match.away}</div>
                      </div>
                    </div>
                    <div class="status" data-status="${id}">
                      ${(() => {
                        if (!complete) return '<span class="empty-note">Preencha os dois campos para salvar este jogo.</span>';
                        let html = '<span class="saved">Palpite salvo.</span>';
                        if (hasOff) {
                          const pts = calcPoints(pred.home, pred.away, off.home, off.away);
                          if (pts === 3) html += ' <span class="points-badge points-3">⭐ 3 pts – Placar exato!</span>';
                          else if (pts === 1) html += ' <span class="points-badge points-1">✔ 1 pt – Acertou o resultado</span>';
                          else if (pts === 0) html += ' <span class="points-badge points-0">✗ 0 pts</span>';
                        }
                        return html;
                      })()}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </section>
    `;
  }).join('');

  document.querySelectorAll('.score-input').forEach(input => {
    input.addEventListener('input', e => {
      const raw = e.target.value.replace(/\D/g, '').slice(0, 2);
      e.target.value = raw;
      savePrediction(e.target.dataset.id, e.target.dataset.side, raw);
    });
  });

  updateStats();
  updateScoreboard();
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function renderParticipantList() {
  const list = document.getElementById('participantList');
  list.innerHTML = participants.map((name, i) => `
    <span style="display:inline-flex;align-items:center;gap:6px;background:var(--accent);border:1px solid var(--primary);border-radius:20px;padding:4px 12px;font-size:.88rem;font-weight:600;">
      ${name}
      <button onclick="removeParticipant(${i})" style="background:none;border:none;cursor:pointer;color:var(--danger);padding:0;font-size:1rem;line-height:1;">×</button>
    </span>
  `).join('');
}

function removeParticipant(i) {
  participants.splice(i, 1);
  renderParticipantList();
}

function renderOfficialMatchList() {
  const grouped = getGroupedMatches();
  const groupKeys = Object.keys(grouped).sort();
  const container = document.getElementById('officialMatchList');

  container.innerHTML = groupKeys.map(group => {
    const rounds = grouped[group];
    return `
      <div class="modal-section-title">Grupo ${group}</div>
      ${[1,2,3].map(round => rounds[round].map(match => {
        const id = matchId(match);
        const off = officialResults[id] || { home: '', away: '' };
        return `
          <div class="modal-match-row">
            <div class="modal-team home">
              <span>${match.home}</span>
              <img class="flag" src="${flagUrl(match.home)}" alt="" width="22" height="16" loading="lazy" />
            </div>
            <input class="score-input official" inputmode="numeric" pattern="[0-9]*" min="0" max="99"
              value="${off.home}" data-off-id="${id}" data-off-side="home"
              aria-label="Resultado oficial ${match.home}" placeholder="–" />
            <div class="vs">x</div>
            <input class="score-input official" inputmode="numeric" pattern="[0-9]*" min="0" max="99"
              value="${off.away}" data-off-id="${id}" data-off-side="away"
              aria-label="Resultado oficial ${match.away}" placeholder="–" />
            <div class="modal-team away">
              <img class="flag" src="${flagUrl(match.away)}" alt="" width="22" height="16" loading="lazy" />
              <span>${match.away}</span>
            </div>
          </div>
        `;
      }).join('')).join('')}
    `;
  }).join('');

  container.querySelectorAll('[data-off-id]').forEach(input => {
    input.addEventListener('input', e => {
      const raw = e.target.value.replace(/\D/g, '').slice(0, 2);
      e.target.value = raw;
      const id = e.target.dataset.offId;
      const side = e.target.dataset.offSide;
      if (!officialResults[id]) officialResults[id] = { home: '', away: '' };
      officialResults[id][side] = raw;
    });
  });
}

document.getElementById('openResultsBtn').addEventListener('click', () => {
  renderParticipantList();
  renderOfficialMatchList();
  document.getElementById('resultsModal').classList.add('open');
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('resultsModal').classList.remove('open');
});

document.getElementById('resultsModal').addEventListener('click', e => {
  if (e.target === document.getElementById('resultsModal'))
    document.getElementById('resultsModal').classList.remove('open');
});

document.getElementById('addParticipant').addEventListener('click', () => {
  const input = document.getElementById('participantInput');
  const name = input.value.trim();
  if (!name || participants.includes(name)) { input.value = ''; return; }
  participants.push(name);
  input.value = '';
  renderParticipantList();
});

document.getElementById('participantInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('addParticipant').click();
});

document.getElementById('saveResults').addEventListener('click', () => {
  document.getElementById('resultsModal').classList.remove('open');
  updateStats();
  updateAllStatus();
  updateScoreboard();
});

document.getElementById('clearResults').addEventListener('click', () => {
  if (!confirm('Deseja limpar todos os resultados oficiais?')) return;
  officialResults = {};
  renderOfficialMatchList();
  updateStats();
  updateAllStatus();
  updateScoreboard();
});

// ── Outros controles ──────────────────────────────────────────────────────────

document.getElementById('clearAll').addEventListener('click', () => {
  if (!confirm('Deseja limpar todos os palpites desta sessão?')) return;
  predictions = {};
  render();
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const data = { predictions, officialResults, participants };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'palpites-copa-2026.json';
  a.click();
  URL.revokeObjectURL(a.href);
});

(function () {
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  btn.textContent = dark ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    dark = !dark;
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    btn.textContent = dark ? '☀️' : '🌙';
  });
})();

render();
