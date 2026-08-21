/**
 * SIGNAL ARCHITECTURE PORTFOLIO ENGINE
 * Siva Kumar Vanjunathan - UI/UX & Product Designer
 * Inspired by Pine Labs SignalIQ UI & Interactive Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initAudioSynthesizer();
  initMouseSpotlight();
  initTelemetryTickers();
  initHeroSection();
  initRoleInspector();
  initComparator();
  initBentoPillars();
  initProjectsSection();
  initTerminal();
  initExperienceSection();
  initFaqAccordion();
  initModalsAndForms();
  initScrollSpy();
});

/* ==========================================================================
   1. AUDIO SYNTHESIZER (Tactile Haptic Clicks using Web Audio API)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const soundBtn = document.getElementById('soundToggle');
  
  function playClick(freq = 880, duration = 0.04, type = 'sine') {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);
      
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext not allowed or unsupported
    }
  }

  window.playSignalSound = playClick;

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.style.color = soundEnabled ? 'var(--signal-emerald)' : 'var(--text-dim)';
      showToast(soundEnabled ? "Tactile Audio: Enabled" : "Tactile Audio: Muted");
      if (soundEnabled) playClick(1200, 0.05, 'triangle');
    });
  }
}

/* ==========================================================================
   2. AMBIENT MOUSE SPOTLIGHT TRACKER
   ========================================================================== */
function initMouseSpotlight() {
  const spotlight = document.getElementById('ambientSpotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  }, { passive: true });
}

/* ==========================================================================
   3. TELEMETRY TICKERS (Design & UX Telemetry Stream)
   ========================================================================== */
function initTelemetryTickers() {
  const topTrack = document.getElementById('topTickerTrack');
  const bottomTrack = document.getElementById('bottomTickerTrack');
  
  const sampleLogs = [
    { tag: "FIGMA_AI", desc: "PERSONA_SYNTHESIS_FLOW", val: "100%_FIDELITY", status: "VERIFIED", lat: "AUTO_LAYOUT" },
    { tag: "WCAG_2.1", desc: "BANK_OF_INDIA_AUDIT", val: "AAA_CONTRAST", status: "PASSED", lat: "48PX_TARGETS" },
    { tag: "PROTOTYPE", desc: "LAYS_ECOM_CHECKOUT", val: "MICRO_MOTION", status: "INTERACTIVE", lat: "60_FPS" },
    { tag: "DESIGN_SYS", desc: "ATOMIC_COMPONENT_SET", val: "90%_REUSE", status: "SCALABLE", lat: "TOKENS_OK" },
    { tag: "WORDPRESS", desc: "RESPONSIVE_THEME_HOOK", val: "PAGE_SPEED_96", status: "OPTIMAL", lat: "ZERO_LAYOUT_SHIFT" },
    { tag: "UX_RESEARCH", desc: "MODERATED_USABILITY_TEST", val: "96%_TASK_PASS", status: "USER_TESTED", lat: "LEAN_UX" },
    { tag: "AI_OPS", desc: "v0_VERCEL_LOVABLE_GEN", val: "4X_VELOCITY", status: "ITERATION_FAST", lat: "CONCEPT_READY" }
  ];

  function renderTrack(container) {
    if (!container) return;
    const fullList = [...sampleLogs, ...sampleLogs, ...sampleLogs, ...sampleLogs];
    container.innerHTML = fullList.map(item => `
      <span class="ticker-item">
        <span class="ticker-tag">${item.tag}</span>
        <span>${item.desc}</span>
        <span class="ticker-highlight">${item.val}</span>
        <span class="ticker-cyan">[${item.status}]</span>
        <span style="color:var(--text-dim);">${item.lat}</span>
        <span style="color:var(--border-subtle); margin:0 8px;">//</span>
      </span>
    `).join('');
  }

  renderTrack(topTrack);
  renderTrack(bottomTrack);
}

/* ==========================================================================
   4. HERO SECTION & STATS BAR
   ========================================================================== */
function initHeroSection() {
  const statsContainer = document.getElementById('heroStatsContainer');
  if (statsContainer && PORTFOLIO_DATA.profile.stats) {
    statsContainer.innerHTML = PORTFOLIO_DATA.profile.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-label">${stat.label}</div>
        <div class="stat-val">
          <span>${stat.value}</span>
        </div>
        <div class="stat-change">${stat.change}</div>
      </div>
    `).join('');
  }

  const exploreBtn = document.getElementById('heroExploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      window.playSignalSound?.(750, 0.04);
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const copyEmailBtn = document.getElementById('heroCopyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(PORTFOLIO_DATA.profile.email);
    });
  }
}

/* ==========================================================================
   5. INTERACTIVE ROLE / DESIGN INSPECTOR (Hero Widget)
   ========================================================================== */
function initRoleInspector() {
  const tabGroup = document.getElementById('roleTabGroup');
  const contentBox = document.getElementById('roleInspectorContent');
  const latencyTag = document.getElementById('roleLatencyTag');
  if (!tabGroup || !contentBox) return;

  const roles = PORTFOLIO_DATA.roles;
  let activeIndex = 0;

  function renderTabs() {
    tabGroup.innerHTML = roles.map((r, idx) => `
      <button class="role-tab-btn ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}">
        ${r.label}
      </button>
    `).join('');

    tabGroup.querySelectorAll('.role-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        if (idx !== activeIndex) {
          activeIndex = idx;
          window.playSignalSound?.(920 + idx * 80, 0.04);
          renderTabs();
          renderContent();
        }
      });
    });
  }

  function renderContent() {
    const role = roles[activeIndex];
    if (!role) return;

    if (latencyTag) {
      latencyTag.textContent = role.metrics.usabilityRating || role.metrics.ideationSpeed || role.metrics.pageSpeedScore || "100% Fidelity";
    }

    const metricsHtml = Object.entries(role.metrics).map(([k, v]) => `
      <div class="metric-pill">
        <div class="metric-pill-label">${k.replace(/([A-Z])/g, ' $1')}</div>
        <div class="metric-pill-val">${v}</div>
      </div>
    `).join('');

    contentBox.innerHTML = `
      <div class="inspector-left">
        <div>
          <div class="inspector-role-title">${role.label}</div>
          <div class="inspector-role-subhead">${role.subhead}</div>
          <p class="inspector-role-summary">${role.summary}</p>
        </div>
        <div class="inspector-metrics-grid">
          ${metricsHtml}
        </div>
      </div>
      <div class="inspector-code-box">
        <div class="code-header">
          <span class="code-filename">// design_system_token_${role.id}.json</span>
          <button class="code-copy-btn" id="copyCodeSnippetBtn">COPY SPEC</button>
        </div>
        <pre class="code-pre"><code>${escapeHtml(role.codeSnippet)}</code></pre>
      </div>
    `;

    const copyBtn = document.getElementById('copyCodeSnippetBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        copyToClipboard(role.codeSnippet, "Design token spec copied!");
      });
    }
  }

  renderTabs();
  renderContent();
}

/* ==========================================================================
   6. THE COMPARATOR (Generic UI/UX vs Siva's Validated Design)
   ========================================================================== */
function initComparator() {
  const legacyList = document.getElementById('legacyItemsList');
  const precisionList = document.getElementById('precisionItemsList');
  const splitBtn = document.getElementById('viewSplitBtn');
  const precisionOnlyBtn = document.getElementById('viewPrecisionOnlyBtn');
  const legacySide = document.getElementById('compSideLegacy');
  
  if (!legacyList || !precisionList) return;

  const data = PORTFOLIO_DATA.comparatorData;

  legacyList.innerHTML = data.traditional.items.map(item => `
    <div class="comp-item-row">
      <div>
        <div class="comp-item-label">${item.label}</div>
        <div class="comp-item-val" style="color:#FF7588;">${item.val}</div>
      </div>
      <span class="tag-status warn">${item.status}</span>
    </div>
  `).join('');

  precisionList.innerHTML = data.precision.items.map(item => `
    <div class="comp-item-row">
      <div>
        <div class="comp-item-label">${item.label}</div>
        <div class="comp-item-val" style="color:var(--signal-emerald);">${item.val}</div>
      </div>
      <span class="tag-status optimal">${item.status}</span>
    </div>
  `).join('');

  if (splitBtn && precisionOnlyBtn && legacySide) {
    splitBtn.addEventListener('click', () => {
      splitBtn.classList.add('active');
      precisionOnlyBtn.classList.remove('active');
      legacySide.style.display = 'flex';
      window.playSignalSound?.(800, 0.03);
    });

    precisionOnlyBtn.addEventListener('click', () => {
      precisionOnlyBtn.classList.add('active');
      splitBtn.classList.remove('active');
      legacySide.style.display = 'none';
      window.playSignalSound?.(1100, 0.03);
    });
  }
}

/* ==========================================================================
   7. BENTO PILLARS (01, 02, 03) WITH INTERACTIVE SPEC BOXES
   ========================================================================== */
function initBentoPillars() {
  const container = document.getElementById('bentoPillarsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.bentoPillars.map(pillar => {
    const chipsHtml = pillar.chips.map(chip => `
      <div class="micro-chip ${chip.highlight ? 'highlight' : ''}">
        <div class="micro-chip-tag">${chip.label}</div>
        <div class="micro-chip-val">${chip.val}</div>
      </div>
    `).join('');

    return `
      <div class="bento-pillar-card" id="pillarCard_${pillar.num}">
        <div>
          <div class="pillar-header-row">
            <span class="pillar-num">${pillar.num}</span>
            <span class="pillar-tag">${pillar.tag}</span>
          </div>
          <h3 class="pillar-title">${pillar.title}</h3>
          <p class="pillar-desc">${pillar.desc}</p>
          <div class="pillar-chips-row">
            ${chipsHtml}
          </div>
        </div>

        <div class="pillar-widget-box">
          <div class="widget-toolbar">
            <span class="widget-name">// SPEC_${pillar.tag.replace(/\s+/g, '_')}</span>
            <span style="font-family:var(--font-mono); font-size:10px; color:var(--signal-emerald);">FIGMA_TOKEN_ACTIVE</span>
          </div>
          <div class="widget-interactive-canvas">
            <pre class="code-pre" style="font-size:11px;"><code>${escapeHtml(pillar.code)}</code></pre>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   8. FEATURED PROJECTS SHOWCASE & DETAIL MODAL
   ========================================================================== */
function initProjectsSection() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
    <div class="project-card" data-proj-id="${proj.id}">
      <div>
        <div class="project-category">${proj.category}</div>
        <h3 class="project-title">${proj.title}</h3>
        <div class="project-subhead">${proj.subtitle}</div>
        <p class="project-desc">${proj.desc}</p>
        
        <div class="project-metrics-strip">
          ${Object.entries(proj.metrics).slice(0, 4).map(([k, v]) => `
            <div class="proj-metric-item">
              <div class="proj-metric-label">${k.replace(/([A-Z])/g, ' $1')}</div>
              <div class="proj-metric-val">${v}</div>
            </div>
          `).join('')}
        </div>

        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="project-card-footer">
        <button class="proj-detail-btn view-proj-trigger" data-proj-id="${proj.id}">
          VIEW CASE STUDY →
        </button>
        <span style="font-family:var(--font-mono); font-size:11px; color:var(--signal-emerald);">FIGMA PROTOTYPE</span>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.view-proj-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-proj-id');
      openProjectModal(id);
    });
  });
}

function openProjectModal(projId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projId);
  if (!proj) return;

  const overlay = document.getElementById('projectModalOverlay');
  const content = document.getElementById('projectModalContent');
  if (!overlay || !content) return;

  window.playSignalSound?.(1050, 0.05);

  content.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="section-tag" style="margin-bottom:8px;">${proj.category}</span>
      <h2 style="font-family:var(--font-display); font-size:26px; font-weight:800; color:white; line-height:1.2;">${proj.title}</h2>
      <div style="font-family:var(--font-editorial); font-style:italic; color:var(--signal-emerald); font-size:16px; margin-top:4px;">${proj.subtitle}</div>
    </div>

    <p style="font-size:15px; color:var(--text-secondary); line-height:1.6; margin-bottom:20px;">${proj.desc}</p>

    <div style="background:rgba(0,242,157,0.04); border:1px solid var(--signal-emerald-border); border-radius:8px; padding:16px; margin-bottom:24px;">
      <div style="font-family:var(--font-mono); font-size:11px; color:var(--signal-emerald); font-weight:600; margin-bottom:4px;">METHODS & MEASURABLE OUTCOMES</div>
      <div style="font-size:14px; color:var(--text-primary);">${proj.impact}</div>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-dim); text-transform:uppercase; margin-bottom:10px;">CORE CONTRIBUTIONS & WORKFLOW</div>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
        ${proj.architecturePoints.map(pt => `
          <li style="display:flex; align-items:flex-start; gap:10px; font-size:13px; color:var(--text-secondary);">
            <span style="color:var(--laser-cyan); font-family:var(--font-mono);">[KEY]</span>
            <span>${pt}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px;">
      ${proj.tags.map(t => `<span class="tech-tag" style="background:rgba(255,255,255,0.06);">${t}</span>`).join('')}
    </div>

    <div style="display:flex; gap:12px; flex-wrap:wrap;">
      <a href="https://behance.net/sivakumarv1" target="_blank" rel="noreferrer" class="btn-primary" style="font-size:12px;">
        VIEW ON BEHANCE ↗
      </a>
      <a href="https://linkedin.com/in/siva-kumar-vanjunathan" target="_blank" rel="noreferrer" class="btn-secondary" style="font-size:12px;">
        CONNECT ON LINKEDIN ↗
      </a>
    </div>
  `;

  overlay.classList.add('open');
}

/* ==========================================================================
   9. INTERACTIVE CLI TERMINAL ENGINE (DESIGN OPS)
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('termOutput');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');
  if (!input || !output) return;

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    window.playSignalSound?.(1150, 0.03);

    // Echo input
    const echoLine = document.createElement('div');
    echoLine.className = 'term-line prompt';
    echoLine.innerHTML = `siva@design-ops:~$ <span style="color:white;">${escapeHtml(rawCmd)}</span>`;
    output.appendChild(echoLine);

    let res = '';

    switch (cmd) {
      case 'help':
        res = `
Available diagnostic commands:
  <span class="term-line highlight">resume</span>      - Download Siva Kumar's full Resume (PDF)
  <span class="term-line highlight">skills</span>      - Enumerate UX, UI, and Research proficiencies
  <span class="term-line highlight">tools</span>       - List design software (Figma, Adobe XD, Photoshop, Miro, WordPress)
  <span class="term-line highlight">ai-tools</span>    - List AI-accelerated design platforms (v0, Lovable, Figma AI, Galileo)
  <span class="term-line highlight">projects</span>    - View key portfolio projects (Bank of India, Lay's, Landing Pages)
  <span class="term-line highlight">education</span>   - MBA (Pondicherry Univ) & B.E. (Civil Engineering)
  <span class="term-line highlight">contact</span>     - Display email, phone, LinkedIn, and Behance
  <span class="term-line highlight">clear</span>       - Flush terminal output buffer`;
        break;

      case 'resume':
      case 'cv':
      case 'download':
        triggerResumeDownload();
        res = `
=== RESUME TRANSMISSION INITIATED ===
File      : Siva_Kumar_Resume.pdf
Role      : Product Designer & UI/UX Designer
Experience: 5+ Years (UX Research, WCAG, Figma Design Systems, WordPress)
Status    : <span class="term-line highlight">● DOWNLOAD STARTED AUTOMATICALLY</span>
Direct    : <a href="Siva_Kumar_Resume.pdf" download="Siva_Kumar_Resume.pdf" style="color:var(--signal-emerald); text-decoration:underline;">Click here if file did not start</a>`;
        break;

      case 'skills':
        res = `
=== SIVA'S CORE DESIGN CAPABILITIES ===
- UX Design & Information Architecture (IA, Wireframing, User Flows)
- Usability Testing, Heuristic Evaluation & WCAG 2.1 Accessibility
- Interactive Prototyping & Micro-Interactions (Figma, Smart Animate)
- Visual Systems, Responsive Web Design & Atomic Component Sets
- Methodologies: Design Thinking, Lean UX, Agile Teamwork`;
        break;

      case 'tools':
        res = `
=== DESIGN & DEVELOPMENT TOOLKIT ===
- Primary UI: Figma, FigJam, Adobe XD, Miro
- Graphic & Visual: Adobe Photoshop, Illustrator
- Web & CMS: WordPress, Elementor, Responsive HTML/CSS
- Productivity: Google Workspace, Notion, Jira`;
        break;

      case 'ai-tools':
        res = `
=== AI-ACCELERATED DESIGN WORKFLOW ===
- Generative Prototyping: v0 by Vercel, Lovable, Uizard, Galileo AI
- Research & Synthesis: ChatGPT, Claude, Gemini, Microsoft Copilot
- In-Tool AI: Figma AI, FigJam AI for instant journey mapping`;
        break;

      case 'projects':
        res = `
1. Bank of India Mobile App Revamp   - Accessibility-focused overhaul (WCAG 2.1 AAA)
2. Lay's Brand E-Commerce Prototype   - Interactive Figma e-commerce with micro-motion
3. Landing Pages Showcase             - Typographic design system & component library
4. Vehonitor Web Platform             - End-to-end product design & WordPress development`;
        break;

      case 'education':
        res = `
- MBA (General) | Pondicherry University (July 2022 — May 2024)
- B.E. (Civil Engineering) | DMI College of Engineering (June 2015 — May 2019)`;
        break;

      case 'contact':
        res = `
Name     : Siva Kumar Vanjunathan
Email    : vsivakumar6198@gmail.com
Phone    : +91 8248602760
LinkedIn : linkedin.com/in/siva-kumar-vanjunathan
Behance  : behance.net/sivakumarv1
Location : Chennai, India (Available Worldwide Remote)`;
        break;

      case 'whoami':
        res = `visitor@siva-design-ops [Authorized Guest Session]`;
        break;

      case 'clear':
        output.innerHTML = '';
        input.value = '';
        return;

      default:
        res = `command not found: "${escapeHtml(rawCmd)}". Type <span class="term-line highlight">help</span> for available commands.`;
        break;
    }

    const outLine = document.createElement('div');
    outLine.className = 'term-line output';
    outLine.innerHTML = res;
    output.appendChild(outLine);

    input.value = '';
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
    }
  });

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

/* ==========================================================================
   10. EXPERIENCE & EDUCATION TIMELINE SECTION
   ========================================================================== */
function initExperienceSection() {
  const container = document.getElementById('experienceContainer');
  if (!container) return;

  const expHtml = PORTFOLIO_DATA.experience.map(exp => `
    <div class="timeline-card">
      <div class="timeline-header">
        <div>
          <span class="timeline-role">${exp.role}</span>
          <span style="margin: 0 6px; color:var(--text-dim);">//</span>
          <span class="timeline-company">${exp.company}</span>
        </div>
        <span class="timeline-period">${exp.period}</span>
      </div>
      <p class="timeline-desc">${exp.description}</p>
      <ul class="timeline-bullets">
        ${exp.highlights.map(h => `<li class="timeline-bullet">${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const eduHtml = PORTFOLIO_DATA.education.map(edu => `
    <div class="timeline-card" style="border-left: 2px solid var(--laser-cyan);">
      <div class="timeline-header">
        <div>
          <span class="timeline-role" style="font-size:16px;">${edu.degree}</span>
          <span style="margin: 0 6px; color:var(--text-dim);">//</span>
          <span class="timeline-company" style="color:var(--laser-cyan); font-size:14px;">${edu.institution}</span>
        </div>
        <span class="timeline-period">${edu.period}</span>
      </div>
      <p class="timeline-desc" style="font-size:13px; color:var(--text-secondary); margin-bottom:0;">${edu.highlight}</p>
    </div>
  `).join('');

  const resumeBannerHtml = `
    <div class="experience-resume-banner">
      <div class="exp-resume-left">
        <div class="exp-resume-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div>
          <div class="exp-resume-title">Full Curriculum Vitae & Design Case Studies</div>
          <div class="exp-resume-sub">Download complete resume PDF with detailed project metrics, design leadership, and contact data.</div>
        </div>
      </div>
      <a href="Siva_Kumar_Resume.pdf" download="Siva_Kumar_Resume.pdf" class="exp-resume-btn" id="timelineResumeBtn" title="Download Siva Kumar's Resume">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span>DOWNLOAD CV (PDF)</span>
      </a>
    </div>
  `;

  container.innerHTML = `
    <div style="font-family:var(--font-mono); font-size:12px; color:var(--signal-emerald); margin-bottom:12px;">// WORK EXPERIENCE</div>
    ${expHtml}
    <div style="font-family:var(--font-mono); font-size:12px; color:var(--laser-cyan); margin: 24px 0 12px;">// ACADEMIC CREDENTIALS</div>
    ${eduHtml}
    ${resumeBannerHtml}
  `;
}

/* ==========================================================================
   11. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faqAccordionContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.faqs.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-content" style="${idx === 0 ? 'max-height: 200px;' : ''}">
        <div class="faq-answer">${faq.a}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const item = e.currentTarget.parentElement;
      const content = item.querySelector('.faq-content');
      const isOpen = item.classList.contains('open');

      window.playSignalSound?.(isOpen ? 650 : 850, 0.03);

      // Close other items
      container.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-content').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 32 + 'px';
      }
    });
  });
}

/* ==========================================================================
   12. MODALS, CLIPBOARD, & FORMS
   ========================================================================== */
function initModalsAndForms() {
  // Project Modal
  const projOverlay = document.getElementById('projectModalOverlay');
  const closeProjBtn = document.getElementById('closeProjectModalBtn');
  if (projOverlay && closeProjBtn) {
    closeProjBtn.addEventListener('click', () => projOverlay.classList.remove('open'));
    projOverlay.addEventListener('click', (e) => {
      if (e.target === projOverlay) projOverlay.classList.remove('open');
    });
  }

  // Contact Modal
  const contactOverlay = document.getElementById('contactModalOverlay');
  const openContactBtn = document.getElementById('openContactBtn');
  const ctaContactBtn = document.getElementById('ctaContactBtn');
  const closeContactBtn = document.getElementById('closeContactModalBtn');
  const contactForm = document.getElementById('contactForm');

  function openContactModal() {
    window.playSignalSound?.(950, 0.04);
    if (contactOverlay) contactOverlay.classList.add('open');
  }

  if (openContactBtn) openContactBtn.addEventListener('click', openContactModal);
  if (ctaContactBtn) ctaContactBtn.addEventListener('click', openContactModal);

  if (contactOverlay && closeContactBtn) {
    closeContactBtn.addEventListener('click', () => contactOverlay.classList.remove('open'));
    contactOverlay.addEventListener('click', (e) => {
      if (e.target === contactOverlay) contactOverlay.classList.remove('open');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('contactSubmitBtn') || contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'SEND MESSAGE →';
      
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');
      const senderName = nameInput ? nameInput.value.trim() : 'there';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>TRANSMITTING SIGNAL...</span>`;
      }
      
      try {
        const formData = new FormData(contactForm);
        const encodedBody = new URLSearchParams(formData).toString();
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodedBody
        });
        
        window.playSignalSound?.(1300, 0.08, 'triangle');
        showToast(`Transmission received! Thank you, ${senderName}.`);
        contactOverlay?.classList.remove('open');
        contactForm.reset();
      } catch (err) {
        console.error('Form transmission error:', err);
        // Fallback: Open mailto directly if network fails
        window.playSignalSound?.(900, 0.08, 'sawtooth');
        showToast(`Signal sent. Opening direct email fallback...`);
        const emailBody = encodeURIComponent(`Name: ${senderName}\nEmail: ${emailInput?.value}\n\n${messageInput?.value}`);
        window.location.href = `mailto:vsivakumar6198@gmail.com?subject=Project Inquiry from ${encodeURIComponent(senderName)}&body=${emailBody}`;
        contactOverlay?.classList.remove('open');
        contactForm.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  }

  // Copy Email Buttons
  const ctaCopyEmail = document.getElementById('ctaCopyEmailBtn');
  if (ctaCopyEmail) {
    ctaCopyEmail.addEventListener('click', () => {
      copyToClipboard(PORTFOLIO_DATA.profile.email);
    });
  }

  // Resume Download Buttons Tactile Sound & Toast Feedback
  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
      window.playSignalSound?.(1200, 0.05, 'triangle');
      showToast("Downloading Siva Kumar's Resume (PDF)...");
    });
  });
}

/* ==========================================================================
   13. RESUME DOWNLOAD AUTOMATION ENGINE
   ========================================================================== */
function triggerResumeDownload() {
  window.playSignalSound?.(1200, 0.06, 'triangle');
  showToast("Downloading Siva Kumar's Resume (PDF)...");
  const link = document.createElement('a');
  link.href = PORTFOLIO_DATA.profile.resumeUrl || 'Siva_Kumar_Resume.pdf';
  link.download = 'Siva_Kumar_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   13. SCROLL SPY ACTIVE NAV TRACKER
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */
function copyToClipboard(text, customMsg) {
  window.playSignalSound?.(1250, 0.03);
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMsg || `Copied to clipboard: ${text}`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
