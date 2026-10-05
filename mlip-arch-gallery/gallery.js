(() => {
  const { figures, models } = window.GALLERY_DATA;
  const familyNames = ['全部', '等变网络', 'Transformer', '图网络', '优化流程'];
  const modelByFigure = new Map(figures.map(fig => [fig.file.split('/').pop(), []]));
  models.forEach(model => { if (model.image) modelByFigure.get(model.image).push(model); });

  const search = document.getElementById('search');
  const grid = document.getElementById('gallery-grid');
  const rows = document.getElementById('model-rows');
  const filters = document.getElementById('family-filters');
  const dialog = document.getElementById('image-dialog');
  let family = '全部';

  const normalize = value => String(value || '').toLocaleLowerCase();
  const paperURL = value => value.startsWith('https://') ? value : `https://arxiv.org/abs/${value}`;
  const paperLabel = value => value.startsWith('https://') ? '技术报告' : `arXiv:${value}`;
  const allFigureInfo = new Map(figures.map(fig => [fig.file.split('/').pop(), fig]));

  function text(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = content;
    return node;
  }
  function link(label, href, className = '') {
    const node = text('a', className, label);
    node.href = href;
    if (/^https?:/.test(href)) { node.target = '_blank'; node.rel = 'noopener noreferrer'; }
    return node;
  }
  function paperLinks(values) {
    const wrap = document.createElement('span');
    wrap.className = 'paper-links';
    if (!values.length) { wrap.textContent = '—'; return wrap; }
    values.forEach((paper, index) => {
      if (index) wrap.append(' · ');
      wrap.append(link(paperLabel(paper), paperURL(paper)));
    });
    return wrap;
  }

  familyNames.forEach(name => {
    const button = text('button', 'filter-chip' + (name === '全部' ? ' active' : ''), name);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(name === '全部'));
    button.addEventListener('click', () => {
      family = name;
      filters.querySelectorAll('button').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      render();
    });
    filters.append(button);
  });

  function card(fig, index) {
    const associated = modelByFigure.get(fig.file.split('/').pop());
    const article = document.createElement('article');
    article.className = 'gallery-card';
    const preview = document.createElement('button');
    preview.type = 'button';
    preview.className = 'card-preview';
    preview.setAttribute('aria-label', `放大查看 ${fig.title} 架构图`);
    const img = document.createElement('img');
    img.src = fig.file;
    img.alt = `${fig.title} 架构示意图`;
    img.loading = 'lazy';
    img.decoding = 'async';
    preview.append(img, text('span', 'zoom-mark', '↗'));
    preview.addEventListener('click', () => openDialog(fig));
    const body = text('div', 'card-body', '');
    const meta = text('div', 'card-meta', '');
    meta.append(text('span', '', `${String(index + 1).padStart(2, '0')} / ${fig.family}`));
    const rankValues = associated.map(m => m.rank).filter(n => n !== null);
    meta.append(text('span', '', rankValues.length ? `#${Math.min(...rankValues)}${rankValues.length > 1 ? ` +${rankValues.length - 1}` : ''}` : 'UNRANKED'));
    body.append(meta, text('h3', '', fig.title), text('p', 'card-summary', fig.summary));
    const modelsLine = text('div', 'card-models', '');
    modelsLine.append(text('span', 'label', '模型'), text('span', '', associated.map(m => m.name).join(' · ')));
    body.append(modelsLine);
    const allPapers = [...new Set(associated.flatMap(m => m.papers))];
    const sourceLine = text('div', 'card-sources', '');
    sourceLine.append(text('span', 'label', '来源'), paperLinks(allPapers));
    body.append(sourceLine);
    article.append(preview, body);
    return article;
  }

  function render() {
    const query = normalize(search.value.trim());
    const visibleFigures = figures.filter(fig => {
      const related = modelByFigure.get(fig.file.split('/').pop());
      const matchesFamily = family === '全部' || fig.family === family;
      const searchable = [fig.title, fig.family, fig.summary, ...related.flatMap(m => [m.name, String(m.rank || ''), ...m.papers])].join(' ');
      return matchesFamily && (!query || normalize(searchable).includes(query));
    });
    grid.replaceChildren(...visibleFigures.map((fig, index) => card(fig, index)));
    document.getElementById('visible-figure-count').textContent = String(visibleFigures.length);
    document.getElementById('gallery-empty').hidden = visibleFigures.length !== 0;

    const visibleModels = models.filter(model => {
      const fig = allFigureInfo.get(model.image);
      const matchesFamily = family === '全部' || (fig && fig.family === family);
      const searchable = [model.name, model.rank, model.cps, model.note, ...(model.papers || []), fig?.title, fig?.family].join(' ');
      return matchesFamily && (!query || normalize(searchable).includes(query));
    });
    rows.replaceChildren(...visibleModels.map(model => {
      const tr = document.createElement('tr');
      const rank = text('td', 'rank-cell', model.rank === null ? '未排名' : String(model.rank).padStart(2, '0'));
      const name = text('td', 'name-cell', model.name);
      const cps = text('td', 'score-cell', model.cps === null ? '—' : model.cps.toFixed(5));
      const paper = document.createElement('td'); paper.append(paperLinks(model.papers));
      const image = document.createElement('td');
      if (model.image) {
        const fig = allFigureInfo.get(model.image);
        const show = text('button', 'table-figure-link', `${fig.title} ↗`);
        show.type = 'button'; show.addEventListener('click', () => openDialog(fig)); image.append(show);
      } else image.append(text('span', 'missing-note', model.note || '无对应架构图'));
      tr.append(rank, name, cps, paper, image);
      return tr;
    }));
    document.getElementById('visible-model-count').textContent = String(visibleModels.length);
  }

  function openDialog(fig) {
    document.getElementById('dialog-title').textContent = fig.title;
    document.getElementById('dialog-family').textContent = fig.family;
    document.getElementById('dialog-summary').textContent = fig.summary;
    const image = document.getElementById('dialog-image');
    image.src = fig.file; image.alt = `${fig.title} 架构示意图`;
    document.getElementById('dialog-original').href = fig.file;
    dialog.showModal();
  }
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  search.addEventListener('input', render);
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !dialog.open && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
  });
  render();
})();
