const EVENTS = [
    { id:'venue',    name:'Venue rental',         sub:'Banquet hall / outdoor space',       suggested:150000, cat:'venue' },
    { id:'catering', name:'Catering & food',       sub:'Buffet, live counters, desserts',    suggested:80000,  cat:'food' },
    { id:'decor',    name:'Decoration & floral',   sub:'Mandap, stage, table centrepieces',  suggested:60000,  cat:'decor' },
    { id:'photo',    name:'Photography',           sub:'2 photographers + edited album',     suggested:45000,  cat:'media' },
    { id:'video',    name:'Videography',           sub:'Cinematic reel + drone shots',       suggested:35000,  cat:'media' },
    { id:'music',    name:'DJ & sound system',     sub:'DJ, speakers, mic setup',            suggested:30000,  cat:'entertain' },
    { id:'artist',   name:'Live artist / band',    sub:'2-hour performance slot',            suggested:50000,  cat:'entertain' },
    { id:'invites',  name:'Invitations',           sub:'Digital + 50 printed cards',         suggested:8000,   cat:'misc' },
    { id:'makeup',   name:'Makeup & styling',      sub:'Bridal + 2 bridesmaid packages',     suggested:25000,  cat:'misc' },
    { id:'return',   name:'Return gifts',          sub:'100 guests, premium hampers',        suggested:20000,  cat:'misc' },
    { id:'car',      name:'Guest transportation',  sub:'2 buses + 4 cars',                   suggested:18000,  cat:'logistics' },
    { id:'tent',     name:'Tent & furniture',      sub:'Chairs, tables, shamiana',           suggested:22000,  cat:'logistics' },
  ];

  const CAT_COLORS = {
    venue:     { bg:'#E6F1FB', color:'#0C447C', border:'#B5D4F4' },
    food:      { bg:'#EAF3DE', color:'#3B6D11', border:'#C0DD97' },
    decor:     { bg:'#FAEEDA', color:'#854F0B', border:'#FAC775' },
    media:     { bg:'#EEEDFE', color:'#3C3489', border:'#CECBF6' },
    entertain: { bg:'#FAECE7', color:'#993C1D', border:'#F5C4B3' },
    misc:      { bg:'#F1EFE8', color:'#444441', border:'#D3D1C7' },
    logistics: { bg:'#FBEAF0', color:'#72243E', border:'#F4C0D1' },
  };

  function fmt(n) { return '\u20B9' + Math.round(n).toLocaleString('en-IN'); }

  function render() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    EVENTS.forEach(e => {
      const c = CAT_COLORS[e.cat];
      const tr = document.createElement('tr');
      tr.id = 'row-' + e.id;
      tr.innerHTML =
        '<td><input type="checkbox" id="chk-' + e.id + '" onchange="toggle(\'' + e.id + '\')"></td>' +
        '<td><div class="service-cell"><span class="service-name">' + e.name + '</span><span class="service-sub">' + e.sub + '</span></div></td>' +
        '<td><span class="cat-badge" style="background:' + c.bg + ';color:' + c.color + ';border:0.5px solid ' + c.border + '">' + fmt(e.suggested) + '</span></td>' +
        '<td><div class="budget-cell"><span class="rupee">\u20B9</span><input type="number" id="inp-' + e.id + '" value="' + e.suggested + '" disabled min="0" step="1000" oninput="recalc()"></div></td>';
      tbody.appendChild(tr);
    });
  }

  function toggle(id) {
    const chk = document.getElementById('chk-' + id);
    const inp = document.getElementById('inp-' + id);
    const row = document.getElementById('row-' + id);
    inp.disabled = !chk.checked;
    row.classList.toggle('active', chk.checked);
    recalc();
  }

  function recalc() {
    const sel = EVENTS.filter(e => document.getElementById('chk-' + e.id).checked);
    const box = document.getElementById('summaryInner');
    if (!sel.length) {
      box.innerHTML = '<div class="empty-note">Select services above to see your budget</div>';
      return;
    }
    let total = 0;
    let rows = sel.map(e => {
      const v = parseFloat(document.getElementById('inp-' + e.id).value) || 0;
      total += v;
      return '<div class="sum-row"><span>' + e.name + '</span><span class="val">' + fmt(v) + '</span></div>';
    }).join('');
    const pills = sel.map(e => '<span class="pill">' + e.name + '</span>').join('');
    box.innerHTML =
      '<div class="summary-rows">' + rows + '</div>' +
      '<hr class="divider">' +
      '<div class="total-row"><span class="total-label">Total estimated budget</span><span class="total-val">' + fmt(total) + '</span></div>' +
      '<div class="pills">' + pills + '</div>';
  }

  function handleSubmit() {
    const sel = EVENTS.filter(e => document.getElementById('chk-' + e.id).checked);
    if (!sel.length) { showToast('Please select at least one service'); return; }

    let total = 0;
    const serviceRows = sel.map(e => {
      const v = parseFloat(document.getElementById('inp-' + e.id).value) || 0;
      total += v;
      return { name: e.name, amount: v };
    });

    const now = new Date();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const genDate = now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();

    document.getElementById('mGenDate').textContent = 'Generated on ' + genDate;
    document.getElementById('mTotal').textContent   = fmt(total);

    document.getElementById('mServices').innerHTML =
      serviceRows.map(r =>
        '<div class="modal-service-row"><span>' + r.name + '</span><span class="mval">' + fmt(r.amount) + '</span></div>'
      ).join('') + '<hr class="divider" style="margin:6px 0">';

    const btnSave = document.getElementById('btnSave');
    btnSave.textContent = '\uD83D\uDCBE Save to records';
    btnSave.classList.remove('saved');

    window._currentQuote = { serviceRows, total, id: Date.now(), genDate };
    document.getElementById('overlay').classList.add('open');
  }

  function overlayClick(e) {
    if (e.target === document.getElementById('overlay')) closeModal();
  }
  function closeModal() {
    document.getElementById('overlay').classList.remove('open');
  }

  function saveQuote() {
    const q = window._currentQuote;
    if (!q) return;
    const all = JSON.parse(localStorage.getItem('eventQuotesV2') || '[]');
    if (!all.find(x => x.id === q.id)) all.unshift(q);
    localStorage.setItem('eventQuotesV2', JSON.stringify(all));
    const btn = document.getElementById('btnSave');
    btn.textContent = '\u2713 Saved!';
    btn.classList.add('saved');
    showToast('Quotation saved to records');
    renderSaved();
  }

  function renderSaved() {
    const all = JSON.parse(localStorage.getItem('eventQuotesV2') || '[]');
    const section = document.getElementById('savedSection');
    const list    = document.getElementById('savedList');
    if (!all.length) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    list.innerHTML = all.map(q =>
      '<div class="saved-card">' +
        '<div><div class="sc-name">Event estimate</div><div class="sc-meta">Saved on ' + q.genDate + ' &bull; ' + q.serviceRows.length + ' services</div></div>' +
        '<div class="sc-right"><span class="sc-amount">' + fmt(q.total) + '</span><button class="sc-del" onclick="deleteQuote(' + q.id + ')">&times;</button></div>' +
      '</div>'
    ).join('');
  }

  function deleteQuote(id) {
    let all = JSON.parse(localStorage.getItem('eventQuotesV2') || '[]');
    all = all.filter(q => q.id !== id);
    localStorage.setItem('eventQuotesV2', JSON.stringify(all));
    renderSaved();
    showToast('Quotation removed');
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2800);
  }

  function resetAll() {
    EVENTS.forEach(e => {
      document.getElementById('chk-' + e.id).checked = false;
      document.getElementById('inp-' + e.id).disabled = true;
      document.getElementById('row-' + e.id).classList.remove('active');
    });
    recalc();
  }

  render();
  renderSaved();
