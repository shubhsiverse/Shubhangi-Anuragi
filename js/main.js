/**
 * SHUBHANGI ANURAGI // SHUBHSIVERSE
 * Interactive Logic & Dynamic Binding
 */

document.addEventListener('DOMContentLoaded', () => {
  initWorkGrid();
  initPoemReader();
  initCopyEmail();
  initModal();
  initSmoothScroll();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   Work Case Studies Renderer & Modal
   -------------------------------------------------------------------------- */
function initWorkGrid() {
  const workContainer = document.getElementById('dynamic-work-grid');
  if (!workContainer || !PORTFOLIO_DATA.workExperience) return;

  workContainer.innerHTML = '';

  PORTFOLIO_DATA.workExperience.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'work-card';
    card.id = `work-${item.id}`;

    const tagsHtml = item.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
    const detailsHtml = item.details.slice(0, 2).map(d => `<li>${d}</li>`).join('');

    card.innerHTML = `
      <div class="work-meta">
        <span class="mono-tag">[ ${item.category} ]</span>
        <h3 class="work-company">${item.company}</h3>
        <span class="work-period">${item.period}</span>
        <span class="work-location">${item.location}</span>
      </div>
      <div class="work-content">
        <h3>${item.role}</h3>
        <p class="work-summary">${item.summary}</p>
        <ul class="work-details-list">
          ${detailsHtml}
        </ul>
        <div class="work-tags">
          ${tagsHtml}
        </div>
      </div>
      <div class="work-card-action">
        <button class="open-case-btn" data-id="${item.id}">
          Read Scope <span>&rarr;</span>
        </button>
      </div>
    `;

    workContainer.appendChild(card);
  });

  // Attach modal click listeners
  document.querySelectorAll('.open-case-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openCaseStudyModal(id);
    });
  });
}

function openCaseStudyModal(id) {
  const item = PORTFOLIO_DATA.workExperience.find(w => w.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById('case-modal');
  const modalContent = document.getElementById('modal-body-content');

  let reelLinksHtml = '';
  if (item.reelLinks && item.reelLinks.length > 0) {
    reelLinksHtml = `
      <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light);">
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-terracotta); text-transform: uppercase; margin-bottom: 0.75rem;">Verified Reel Samples:</h4>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          ${item.reelLinks.map(r => `
            <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="social-pill" style="color: var(--text-primary); border-color: var(--accent-terracotta);">
              ${r.title} &nearr;
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="mono-tag" style="display:inline-block; margin-bottom: 0.5rem;">[ ${item.category} // ${item.location} ]</span>
      <h2 style="font-family: var(--font-serif-headline); font-size: 2rem; color: #fff; margin-bottom: 0.25rem;">${item.company}</h2>
      <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-terracotta);">${item.role} &mdash; ${item.period}</p>
    </div>

    <div style="margin-bottom: 1.75rem; font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary);">
      <p>${item.summary}</p>
    </div>

    <h4 style="font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 1rem;">Core Contributions & Systems Built:</h4>
    <ul style="list-style: none; margin-bottom: 2rem;">
      ${item.details.map(d => `
        <li style="position: relative; padding-left: 1.5rem; margin-bottom: 0.85rem; color: var(--text-primary); font-size: 0.95rem; line-height: 1.6;">
          <span style="position: absolute; left: 0; color: var(--accent-terracotta);">—</span>
          ${d}
        </li>
      `).join('')}
    </ul>

    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
      ${item.tags.map(t => `<span class="tag-badge" style="background: var(--bg-hover);">${t}</span>`).join('')}
    </div>

    ${reelLinksHtml}
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModal() {
  const modalOverlay = document.getElementById('case-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

/* --------------------------------------------------------------------------
   Poem Reader Logic
   -------------------------------------------------------------------------- */
function initPoemReader() {
  const tabsContainer = document.getElementById('poem-tabs');
  const titleEl = document.getElementById('active-poem-title');
  const dateEl = document.getElementById('active-poem-date');
  const bodyEl = document.getElementById('active-poem-body');

  if (!tabsContainer || !PORTFOLIO_DATA.shubhsiverse.samplePoems) return;

  const poems = PORTFOLIO_DATA.shubhsiverse.samplePoems;
  tabsContainer.innerHTML = '';

  poems.forEach((poem, idx) => {
    const btn = document.createElement('button');
    btn.className = `poem-tab-btn ${idx === 0 ? 'active' : ''}`;
    btn.textContent = poem.title;
    btn.setAttribute('data-index', idx);

    btn.addEventListener('click', () => {
      document.querySelectorAll('.poem-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPoem(poem);
    });

    tabsContainer.appendChild(btn);
  });

  // Render initial poem
  renderPoem(poems[0]);

  function renderPoem(poem) {
    if (!poem) return;
    titleEl.textContent = poem.title;
    dateEl.textContent = poem.date;
    bodyEl.textContent = poem.stanzas.join('\n');
  }
}

/* --------------------------------------------------------------------------
   1-Click Copy Email Tooltip
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = PORTFOLIO_DATA.profile.email;
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>&#10003;</span> Copied to Clipboard!`;
      copyBtn.style.background = '#10b981';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = '';
      }, 2500);
    }).catch(() => {
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
    });
  });
}

/* --------------------------------------------------------------------------
   Smooth Scroll & Mobile Navigation
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Close mobile menu if open
        const nav = document.querySelector('.nav-links');
        if (nav && nav.classList.contains('mobile-open')) {
          nav.classList.remove('mobile-open');
        }
      }
    });
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.querySelector('.nav-links');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    if (nav.classList.contains('mobile-open')) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.width = '100%';
      nav.style.background = 'rgba(10, 11, 14, 0.98)';
      nav.style.padding = '2rem';
      nav.style.borderBottom = '1px solid var(--border-light)';
    } else {
      nav.style.display = '';
    }
  });
}
