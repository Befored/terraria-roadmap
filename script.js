/**
 * Global helpers
 */
function getModFullName(mod) {
  if (mod === 'V') return 'Vanilla Terraria';
  if (mod === 'C') return 'Calamity Mod';
  if (mod === 'F') return "Fargo's Souls Mod";
  if (mod === 'U') return 'Unofficial Calamity Whips';
  return 'Unknown Mod';
}

function getIconUrl(item) {
  const safeName = item.name.replace(/ /g, '_');
  return `icons/${safeName}.png`;
}

function fallbackToEmoji(imgElement, emoji) {
  const span = document.createElement('span');
  span.style.fontSize = '1.5rem';
  span.textContent = emoji;
  imgElement.parentNode.replaceChild(span, imgElement);
}

/**
 * Terraria Roadmap App Logic
 */
const App = (function() {
  // State
  let currentClassId = null;
  let difficulty = 'Normal';
  let hideSpoilers = false;
  let showRecommended = false;
  let hideVanilla = false;
  let hideUCW = false;

  // DOM Elements
  const els = {
    classBtns: document.querySelectorAll('.class-btn'),
    homeView: document.getElementById('home-view'),
    roadmapView: document.getElementById('roadmap-view'),
    homeCardsContainer: document.querySelector('.home-cards'),
    stagesContainer: document.getElementById('stages-container'),
    quickNav: document.getElementById('quick-nav'),
    classTitle: document.getElementById('class-title'),
    classDesc: document.getElementById('class-desc'),
    breadcrumbs: document.getElementById('breadcrumbs'),
    difficultySelect: document.getElementById('difficulty-select'),
    filterSpoilers: document.getElementById('filter-spoilers'),
    filterRecommended: document.getElementById('filter-recommended'),
    filterVanilla: document.getElementById('filter-vanilla'),
    filterUCW: document.getElementById('filter-ucw'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    searchContainer: document.querySelector('.search-container'),
    infoClassName: document.getElementById('info-class-name'),
    infoDifficulty: document.getElementById('info-difficulty'),
    infoStage: document.getElementById('info-stage'),
    quickLinksList: document.getElementById('quick-links-list'),
    databaseView: document.getElementById('database-view'),
    bossesView: document.getElementById('bosses-view')
  };

  /**
   * Initialization
   */
  function init() {
    loadSettings();
    renderHomeCards();
    renderQuickLinks();
    attachEventListeners();
    if (typeof setupDatabase === 'function') setupDatabase();
    if (typeof setupBosses === 'function') setupBosses();
    handleRouting();
  }

  /**
   * Load settings from localStorage
   */
  function loadSettings() {
    difficulty = localStorage.getItem('tr_difficulty') || 'Normal';
    hideSpoilers = localStorage.getItem('tr_hideSpoilers') === 'true';
    showRecommended = localStorage.getItem('tr_showRecommended') === 'true';
    hideVanilla = localStorage.getItem('tr_hideVanilla') === 'true';
    hideUCW = localStorage.getItem('tr_hideUCW') === 'true';

    els.difficultySelect.value = difficulty;
    els.filterSpoilers.checked = hideSpoilers;
    els.filterRecommended.checked = showRecommended;
    els.filterVanilla.checked = hideVanilla;
    if(els.filterUCW) els.filterUCW.checked = hideUCW;

    applyFilters();
  }

  /**
   * Attach all DOM event listeners
   */
  function attachEventListeners() {
    window.addEventListener('hashchange', handleRouting);

    els.classBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = `/${btn.dataset.class}`;
      });
    });

    els.difficultySelect.addEventListener('change', (e) => {
      difficulty = e.target.value;
      localStorage.setItem('tr_difficulty', difficulty);
      if (els.infoDifficulty) els.infoDifficulty.textContent = difficulty;
      if (currentClassId) renderClass(currentClassId);
    });

    els.filterSpoilers.addEventListener('change', (e) => {
      hideSpoilers = e.target.checked;
      localStorage.setItem('tr_hideSpoilers', hideSpoilers);
      applyFilters();
    });

    els.filterRecommended.addEventListener('change', (e) => {
      showRecommended = e.target.checked;
      localStorage.setItem('tr_showRecommended', showRecommended);
      if (currentClassId) renderClass(currentClassId);
    });

    els.filterVanilla.addEventListener('change', (e) => {
      hideVanilla = e.target.checked;
      localStorage.setItem('tr_hideVanilla', hideVanilla);
      if (currentClassId) renderClass(currentClassId);
    });
    if(els.filterUCW) {
      els.filterUCW.addEventListener('change', (e) => {
        hideUCW = e.target.checked;
        localStorage.setItem('tr_hideUCW', hideUCW);
        if (currentClassId) renderClass(currentClassId);
        if (typeof renderDatabase === 'function') renderDatabase();
      });
    }

    // Search functionality
    els.searchInput.addEventListener('input', handleSearch);
    document.addEventListener('click', (e) => {
      if (!els.searchContainer?.contains(e.target)) {
        els.searchResults.classList.add('hidden');
      }
    });
  }

  function renderQuickLinks() {
    if(!els.quickLinksList) return;
    const links = [
      { name: "Wulfrum Blade", url: "#/melee/pre-boss" },
      { name: "Flinx Staff", url: "#/summoner/pre-boss" },
      { name: "Terra Blade", url: "#/melee/pre-golem" },
      { name: "Stardust Dragon", url: "#/summoner/pre-ml" },
      { name: "Soul of Eternity", url: "#/melee/pre-scal" }
    ];
    let html = '';
    links.forEach(l => {
      html += `<li><a href="${l.url}">→ ${l.name}</a></li>`;
    });
    els.quickLinksList.innerHTML = html;
  }

  /**
   * Search through items and bosses
   */
  function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      els.searchResults.classList.add('hidden');
      return;
    }

    const results = [];
    
    // Search logic
    for (const classKey in MOD_DATA.classes) {
      const cls = MOD_DATA.classes[classKey];
      cls.stages.forEach(stage => {
        const checkItems = (items, type) => {
          if (!items) return;
          items.forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
              results.push({
                name: item.name,
                mod: item.mod,
                classId: cls.id,
                className: cls.name,
                stageId: stage.id,
                stageName: stage.name,
                link: item.link
              });
            }
          });
        };

        checkItems(stage.weapons, 'Weapon');
        checkItems(stage.armor, 'Armor');
        checkItems(stage.accessories, 'Accessory');
        checkItems(stage.bosses, 'Boss');
      });
    }

    renderSearchResults(results);
  }

  function renderSearchResults(results) {
    els.searchResults.innerHTML = '';
    
    if (results.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'search-item';
      empty.textContent = 'No results found.';
      els.searchResults.appendChild(empty);
    } else {
      // Limit to 10 results
      results.slice(0, 10).forEach(res => {
        const a = document.createElement('a');
        a.href = res.link;
        a.target = '_blank';
        a.className = 'search-item';
        
        const badgeSpan = document.createElement('span');
        badgeSpan.className = `badge mod-${res.mod.toLowerCase()}`;
        badgeSpan.textContent = `[${res.mod}]`;

        const info = document.createElement('div');
        info.className = 'search-item-info';
        
        const title = document.createElement('div');
        title.className = 'search-item-title';
        title.textContent = res.name;
        
        const meta = document.createElement('div');
        meta.className = 'search-item-meta';
        meta.textContent = `${res.className} - ${res.stageName}`;

        info.appendChild(title);
        info.appendChild(meta);
        a.appendChild(badgeSpan);
        a.appendChild(info);
        els.searchResults.appendChild(a);
      });
    }
    
    els.searchResults.classList.remove('hidden');
  }

  /**
   * Handle hash-based routing
   */
  function handleRouting() {
    const hash = window.location.hash.slice(1); // remove #
    const parts = hash.split('/').filter(Boolean);

    // Hide all views first
    els.homeView.classList.remove('active');
    els.roadmapView.classList.remove('active');
    if(els.databaseView) els.databaseView.classList.remove('active');
    if(els.bossesView) els.bossesView.classList.remove('active');
    els.quickNav.innerHTML = '';
    
    // Reset active class states on buttons
    els.classBtns.forEach(b => b.classList.remove('active'));

    if (parts.length === 0) {
      showHome();
    } else {
      const path = parts[0];
      const stageId = parts[1];
      
      if (path === 'database') {
        showDatabase();
      } else if (path === 'bosses') {
        showBosses();
      } else if (MOD_DATA.classes[path]) {
        showClass(path, stageId);
      } else {
        showHome();
      }
    }
  }

  function syncLocalNav(tabName) {
    document.querySelectorAll('.ln-tab').forEach(t => {
      if (t.dataset.tab === tabName) t.classList.add('active');
      else t.classList.remove('active');
    });
  }

  function showHome() {
    currentClassId = null;
    els.homeView.classList.add('active');
    els.breadcrumbs.innerHTML = '<span>Home</span>';
    syncLocalNav('home');
    document.documentElement.style.setProperty('--panel-hover', '#1f2d50');
    document.documentElement.style.setProperty('--current-class-color', 'transparent');
  }

  function showDatabase() {
    currentClassId = null;
    if(els.databaseView) els.databaseView.classList.add('active');
    els.breadcrumbs.innerHTML = `<span class="interactive" onclick="window.location.hash=''">Home</span> > <span>Item Database</span>`;
    
    document.querySelectorAll('.sidebar-link.class-btn').forEach(b => {
      if (b.dataset.class === 'database') b.classList.add('active');
    });
    document.documentElement.style.setProperty('--current-class-color', 'transparent');
    syncLocalNav('');
    if(typeof renderDatabase === 'function') renderDatabase();
  }

  function showBosses() {
    currentClassId = null;
    if(els.bossesView) els.bossesView.classList.add('active');
    els.breadcrumbs.innerHTML = `<span class="interactive" onclick="window.location.hash=''">Home</span> > <span>Boss List</span>`;
    
    document.querySelectorAll('.sidebar-link.class-btn').forEach(b => {
      if (b.dataset.class === 'bosses') b.classList.add('active');
    });
    document.documentElement.style.setProperty('--current-class-color', 'transparent');
    syncLocalNav('');
    if(typeof renderBosses === 'function') renderBosses();
  }

  function renderHomeCards() {
    els.homeCardsContainer.innerHTML = '';
    for (const key in MOD_DATA.classes) {
      const cls = MOD_DATA.classes[key];
      const card = document.createElement('div');
      card.className = `home-card ${cls.id}`;
      card.innerHTML = `
        <div class="home-card-icon">${cls.icon}</div>
        <h3>${cls.name}</h3>
        <p class="home-card-desc">${cls.description}</p>
        <p class="home-card-stats">${cls.stages.length} Stages Mapped</p>
        <button class="home-card-btn">Read more →</button>
      `;
      card.addEventListener('click', () => {
        window.location.hash = `/${cls.id}`;
      });
      els.homeCardsContainer.appendChild(card);
    }
  }

  function showClass(classId, stageId) {
    if (currentClassId !== classId) {
      currentClassId = classId;
      renderClass(classId);
    }
    
    els.homeView.classList.remove('active');
    els.roadmapView.classList.add('active');
    
    els.classBtns.forEach(b => {
      if (b.dataset.class === classId) b.classList.add('active');
      else b.classList.remove('active');
    });
    
    syncLocalNav(classId);

    const cls = MOD_DATA.classes[classId];
    els.breadcrumbs.innerHTML = `<span class="interactive" onclick="window.location.hash=''">Home</span> > <span>${cls.name}</span>`;
    
    // Initial stage info
    if(els.infoClassName) els.infoClassName.textContent = cls.name;
    if(els.infoDifficulty) els.infoDifficulty.textContent = difficulty;
    
    if (stageId) {
      setTimeout(() => {
        const stageEl = document.getElementById(`stage-${stageId}`);
        if (stageEl) {
          stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          stageEl.classList.remove('collapsed');
        }
      }, 100);
    }
  }

  function renderClass(classId) {
    const cls = MOD_DATA.classes[classId];
    
    // Set colors
    const classColor = classId === 'melee' ? 'var(--melee)' : 'var(--summoner)';
    document.documentElement.style.setProperty('--current-class-color', classColor);
    
    els.classTitle.textContent = `${cls.icon} ${cls.name}`;
    els.classTitle.style.color = classColor;
    els.classDesc.textContent = cls.description;

    els.stagesContainer.innerHTML = '';
    els.quickNav.innerHTML = '';

    cls.stages.forEach((stage, index) => {
      // Stage Element
      const stageEl = document.createElement('div');
      stageEl.className = 'stage'; // expanded by default
      stageEl.id = `stage-${stage.id}`;
      stageEl.dataset.stageIndex = index + 1;
      stageEl.dataset.stageTotal = cls.stages.length;
      
      // Infernum Banner
      let infernumBannerHtml = '';
      if (difficulty === 'Infernum' && stage.infernumNotes) {
        infernumBannerHtml = `
          <div class="infernum-banner">
            <strong>⚠️ Infernum Warning:</strong> ${stage.infernumNotes}
          </div>
        `;
      }

      // Sections Helper
      const buildItemsList = (items) => {
        if (!items || items.length === 0) return '';
        
        let html = '<div class="items-grid">';
        items.forEach(item => {
          // Filters
          if (hideVanilla && item.mod === 'V') return;
          if (hideUCW && item.mod === 'U') return;
          if (showRecommended && !item.recommended) return;

          const verifyBadge = item.verify ? `<span class="badge verify">✔️ Verify</span>` : '';
          
          let imgHtml = '';
          const iconUrl = getIconUrl(item);
          if (iconUrl) {
            imgHtml = `<img src="${iconUrl}" alt="${item.name}" class="item-icon" onerror="fallbackToEmoji(this, '❓')">`;
          } else {
            imgHtml = `<span style="font-size: 1.5rem;">${cls.icon}</span>`;
          }

          html += `
            <a href="${item.link}" target="_blank" class="item-card">
              <div class="item-icon-wrapper">
                ${imgHtml}
              </div>
              <div class="item-details">
                <span class="item-name">${item.name}</span>
                <span class="item-source">${item.source || 'Crafted / Dropped'}</span>
                <span class="badge mod-${item.mod.toLowerCase()}" title="${getModFullName(item.mod)}">[${item.mod}]</span>
                ${verifyBadge}
              </div>
            </a>
          `;
        });
        html += '</div>';
        return html;
      };

      const weaponsHtml = buildItemsList(stage.weapons);
      const armorHtml = buildItemsList(stage.armor);
      const accHtml = buildItemsList(stage.accessories);
      
      let bossesHtml = '';
      if (stage.bosses && stage.bosses.length > 0) {
        bossesHtml = '<div class="boss-list">';
        stage.bosses.forEach(boss => {
          bossesHtml += `<a href="${boss.link}" target="_blank" class="boss-link">[${boss.mod}] ${boss.name}</a>`;
        });
        bossesHtml += '</div>';
      }

      // Categories tag logic
      let categoriesHtml = `
        <div class="category-tags">
          <span class="category-label">Categories:</span>
          <span class="category-tag">${stage.category}</span>
          ${stage.bosses?.length ? '<span class="category-tag">Bosses</span>' : ''}
          ${stage.weapons?.length ? '<span class="category-tag">Weapons</span>' : ''}
          ${stage.armor?.length ? '<span class="category-tag">Armor</span>' : ''}
          ${stage.accessories?.length ? '<span class="category-tag">Accessories</span>' : ''}
          ${difficulty === 'Infernum' ? '<span class="category-tag">Infernum</span>' : ''}
        </div>
      `;

      stageEl.innerHTML = `
        <div class="stage-name">
          <span class="stage-number">${index + 1}.</span>
          ${stage.name}
        </div>
        <div class="stage-content">
          ${infernumBannerHtml}
          
          ${bossesHtml ? `<h3 class="section-title">Bosses</h3>${bossesHtml}` : ''}
          ${weaponsHtml ? `<h3 class="section-title">Weapons</h3>${weaponsHtml}` : ''}
          ${armorHtml ? `<h3 class="section-title">Armor</h3>${armorHtml}` : ''}
          ${accHtml ? `<h3 class="section-title">Accessories</h3>${accHtml}` : ''}
          
          ${stage.notes ? `<div class="stage-notes">${stage.notes}</div>` : ''}
          
          ${categoriesHtml}
        </div>
      `;
      
      els.stagesContainer.appendChild(stageEl);

      // Quick Nav Dot
      const dot = document.createElement('div');
      dot.className = 'quick-nav-dot';
      dot.dataset.title = stage.name;
      dot.onclick = () => {
        window.location.hash = `/${classId}/${stage.id}`;
      };
      els.quickNav.appendChild(dot);
    });

    applyFilters();
    setupScrollSpy(cls);
  }

  function applyFilters() {
    if (hideSpoilers) {
      document.body.classList.add('spoilers-hidden');
    } else {
      document.body.classList.remove('spoilers-hidden');
    }
  }

  function setupScrollSpy(cls) {
    const dots = document.querySelectorAll('.quick-nav-dot');
    const stages = document.querySelectorAll('.stage');
    
    // Right Rail Info
    const infoStage = document.getElementById('info-stage');
    const infoClassName = document.getElementById('info-class-name');
    const infoClassIcon = document.getElementById('info-class-icon');
    const infoDifficulty = document.getElementById('info-difficulty');
    const infoColorBadge = document.getElementById('info-color-badge');
    const summaryStageName = document.getElementById('summary-stage-name');
    const summaryBosses = document.getElementById('summary-bosses');
    const summaryItems = document.getElementById('summary-items');
    
    if (infoClassName) infoClassName.textContent = cls.name.toUpperCase();
    if (infoClassIcon) infoClassIcon.textContent = cls.icon;
    if (infoDifficulty) infoDifficulty.textContent = difficulty;
    if (infoColorBadge) infoColorBadge.textContent = cls.id === 'melee' ? '🔴' : '🔵';

    if (dots.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(d => d.classList.remove('active'));
          const index = Array.from(stages).findIndex(s => s.id === entry.target.id);
          if (dots[index]) dots[index].classList.add('active');
          
          // Update Infoboxes
          const stg = entry.target;
          const stageIndex = parseInt(stg.dataset.stageIndex);
          if (infoStage) infoStage.textContent = `${stageIndex} / ${stg.dataset.stageTotal}`;
          
          const stageData = cls.stages[stageIndex - 1];
          if (summaryStageName) summaryStageName.textContent = stageData.name;
          
          if (summaryBosses) {
            summaryBosses.innerHTML = stageData.bosses ? stageData.bosses.map(b => b.name).join(', ') : 'None';
          }
          if (summaryItems) {
            const w = stageData.weapons ? stageData.weapons.length : 0;
            const a = stageData.armor ? stageData.armor.length : 0;
            const ac = stageData.accessories ? stageData.accessories.length : 0;
            summaryItems.textContent = `Items: ${w + a + ac}`;
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    stages.forEach(stage => observer.observe(stage));
  }

  // Public API
  return { init };
})();

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', App.init);

  let dbItems = [];
  let dbSortCol = 'stage';
  let dbSortAsc = true;

  /**
   * Database Logic
   */
  function setupDatabase() {
    dbItems = [];
    for (const key in MOD_DATA.classes) {
      const cls = MOD_DATA.classes[key];
      cls.stages.forEach(stg => {
        ['weapons', 'armor', 'accessories'].forEach(type => {
          if (stg[type]) {
            stg[type].forEach(item => {
              dbItems.push({
                ...item,
                classId: cls.id,
                className: cls.name,
                stageName: stg.name,
                type: type,
                iconUrl: getIconUrl(item)
              });
            });
          }
        });
      });
    }

    const s = document.getElementById('db-search');
    const tb = document.getElementById('db-table');
    const filters = document.querySelectorAll('.db-filters input[type="checkbox"]');
    
    if (s) s.addEventListener('input', renderDatabase);
    if (filters) filters.forEach(f => f.addEventListener('change', renderDatabase));
    
    if (tb) {
      tb.querySelectorAll('th').forEach(th => {
        th.addEventListener('click', () => {
          if (!th.dataset.sort) return;
          if (dbSortCol === th.dataset.sort) {
            dbSortAsc = !dbSortAsc;
          } else {
            dbSortCol = th.dataset.sort;
            dbSortAsc = true;
          }
          renderDatabase();
        });
      });
    }
  }

  function renderDatabase() {
    const tbody = document.getElementById('db-tbody');
    if (!tbody) return;

    const query = (document.getElementById('db-search')?.value || '').toLowerCase();
    const fC = document.getElementById('db-mod-c')?.checked;
    const fF = document.getElementById('db-mod-f')?.checked;
    const fV = document.getElementById('db-mod-v')?.checked;
    const fU = document.getElementById('db-mod-u')?.checked;
    const fMelee = document.getElementById('db-cls-melee')?.checked;
    const fSummoner = document.getElementById('db-cls-summoner')?.checked;
    const fW = document.getElementById('db-type-weapons')?.checked;
    const fAr = document.getElementById('db-type-armor')?.checked;
    const fAc = document.getElementById('db-type-accessories')?.checked;

    let filtered = dbItems.filter(i => {
      if (!i.name.toLowerCase().includes(query)) return false;
      if (i.mod === 'C' && !fC) return false;
      if (i.mod === 'F' && !fF) return false;
      if (i.mod === 'V' && !fV) return false;
      if (i.mod === 'U' && !fU) return false;
      if (i.classId === 'melee' && !fMelee) return false;
      if (i.classId === 'summoner' && !fSummoner) return false;
      if (i.type === 'weapons' && !fW) return false;
      if (i.type === 'armor' && !fAr) return false;
      if (i.type === 'accessories' && !fAc) return false;
      return true;
    });

    filtered.sort((a, b) => {
      let vA = a[dbSortCol] || '';
      let vB = b[dbSortCol] || '';
      
      if (dbSortCol === 'class') { vA = a.classId; vB = b.classId; }
      else if (dbSortCol === 'stage') { vA = a.stageName; vB = b.stageName; }
      
      if (vA < vB) return dbSortAsc ? -1 : 1;
      if (vA > vB) return dbSortAsc ? 1 : -1;
      return 0;
    });

    let html = '';
    filtered.forEach(i => {
      const iconHtml = i.iconUrl ? `<img src="${i.iconUrl}" class="db-icon" onerror="fallbackToEmoji(this, 'РІС™вЂќРїС‘РЏ')">` : 'РІС™вЂќРїС‘РЏ';
      html += `
        <tr>
          <td>${iconHtml}</td>
          <td><a href="${i.link}" target="_blank" class="boss-name">${i.name}</a></td>
          <td><span class="badge mod-${i.mod.toLowerCase()}" title="${getModFullName(i.mod)}" style="position:static;">[${i.mod}]</span></td>
          <td>${i.className}</td>
          <td style="text-transform:capitalize;">${i.type}</td>
          <td>${i.stageName}</td>
        </tr>
      `;
    });
    tbody.innerHTML = html;
  }

  /**
   * Bosses Logic
   */
  function setupBosses() {
    const btn = document.getElementById('reset-bosses-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if(confirm('Reset all boss progression?')) {
          localStorage.removeItem('tr_boss_progress');
          renderBosses();
        }
      });
    }
  }

  function renderBosses() {
    const container = document.getElementById('boss-list-container');
    const progressText = document.getElementById('boss-progress-text');
    const progressBar = document.getElementById('boss-progress-bar');
    if (!container || !MOD_DATA.bossList) return;

    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('tr_boss_progress') || '{}'); } catch(e){}

    let html = '';
    let defeatedCount = 0;
    const total = MOD_DATA.bossList.length;

    MOD_DATA.bossList.forEach((b, i) => {
      const isDefeated = !!saved[b.name];
      if (isDefeated) defeatedCount++;

      html += `
        <div class="boss-card ${isDefeated ? 'defeated' : ''}">
          <div class="boss-header">
            <div class="boss-info-left">
              <input type="checkbox" class="boss-checkbox" data-name="${b.name}" ${isDefeated ? 'checked' : ''}>
              <div>
                <a href="${b.link}" target="_blank" class="boss-name">${b.name}</a>
                <div class="boss-stage">${b.stage} <span class="badge mod-${b.mod.toLowerCase()}" title="${getModFullName(b.mod)}" style="position:static; margin-left:5px;">[${b.mod}]</span></div>
              </div>
            </div>
            <button class="boss-info-btn" onclick="this.nextElementSibling.classList.toggle('open')">Info</button>
            <div class="boss-details">Target for ${b.stage}. Defeat to progress.</div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    
    const pct = Math.round((defeatedCount / total) * 100);
    if(progressText) progressText.textContent = `Defeated ${defeatedCount} / ${total} bosses (${pct}%)`;
    if(progressBar) progressBar.style.width = `${pct}%`;

    container.querySelectorAll('.boss-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        let s = {};
        try { s = JSON.parse(localStorage.getItem('tr_boss_progress') || '{}'); } catch(e){}
        if (e.target.checked) s[e.target.dataset.name] = true;
        else delete s[e.target.dataset.name];
        localStorage.setItem('tr_boss_progress', JSON.stringify(s));
        renderBosses(); // Re-render to update counts and styles
      });
    });
  }





