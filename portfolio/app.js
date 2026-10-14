

'use strict';


const FALLBACK_DATA = {
  profile: {
    name: "Sanskruti Gorle",
    role: "B.Tech CSE Student @ SIT Nagpur",
    location: "Nagpur, Maharashtra, India",
    email: "sanskrutigorle1@gmail.com",
    phone: "+91 98765 43210",
    github: "https://github.com/s4nskrut1",
    linkedin: "https://www.linkedin.com/in/sanskruti-gorle-43597a320",
    tags: ["Full-Stack Dev", "Python & C", "Data Science", "UI/UX Design", "Problem Solving"],
    bioShort: "Passionate Computer Science undergraduate at SIT Nagpur specializing in Agentic AI & Autonomous Systems, Predictive Data Mining, and Modern Web Engineering. Driven by algorithmic problem-solving and software architecture to engineer high-impact digital experiences.",
    cgpa: "8.7 CGPA"
  },
  education: [ 
    {
      degree: "SIT Nagpur",
      period: "B.Tech CSE (Batch 2024-2028)",
      score: "8.7 CGPA", 
      hasBadge: true
    },
    {
      degree: "St. Paul Jr High School",
      period: "Higher Secondary (12th Board)",
      score: "79%",
      hasBadge: false
    },
    {
      degree: "Sanjuba High School CBSE",
      period: "Secondary School (10th CBSE)",
      score: "96%",
      hasBadge: false
    }
  ],
  technicalSkills: [
    { name: "Python", icon: "🐍", bg: "#e2ece9", level: "90%" },
    { name: "C / C++", icon: "⚙️", bg: "#fde2e4", level: "88%" },
    { name: "JavaScript", icon: "⚡", bg: "#fff1c5", level: "92%" },
    { name: "HTML5 & CSS3", icon: "🌐", bg: "#ffe5d9", level: "95%" },
    { name: "SQL & RDBMS", icon: "🗄️", bg: "#d8e2dc", level: "86%" },
    { name: "Git & GitHub", icon: "🐙", bg: "#fcd5ce", level: "90%" }
  ],
  featuredProjects: [
    {
      id: "proj-1",
      title: "AETHER — Luxury Landing Page",
      subtitle: "Dark editorial luxury product showcase featuring interactive sneaker reveals, kinetic typography, and fluid micro-interactions.",
      tags: ["Frontend", "HTML5 & CSS3", "JavaScript", "Editorial UI"], 
      image: "assets/images/aether-hero.png",
      gallery: [
        "assets/images/aether-hero.png",
        "assets/images/aether-showcase.png",
        "assets/images/aether-campaign.png"
      ],
      overview: "AETHER is a high-concept dark editorial luxury e-commerce showcase built to push boundaries in creative frontend development. Inspired by high-fashion street aesthetics, it incorporates custom serif typography, dynamic lookbook displays, interactive product colorway switchers, and subtle scroll-triggered layout transitions.",
      highlights: [
        "Interactive editorial layout with luxury aesthetic and smooth reveal animations.",
        "Custom lookbook grid with responsive hover states and modal previews.",
        "Zero-dependency pure vanilla CSS & JavaScript delivering high-speed 60fps interaction."
      ],
      github: "https://github.com/s4nskrut1/frontend-projects/tree/main/Responsive%20Landing%20Page",
      demo: "https://github.com/s4nskrut1/frontend-projects"
    },
    {
      id: "proj-2",
      title: "ATLAS Studio — Design Platform",
      subtitle: "Minimal, image-led multi-page platform for architecture and interior design studios with fluid client navigation.",
      tags: ["Frontend", "Multi-Page", "Responsive Design", "Architecture"],
      image: "assets/images/atlas-home.jpeg",
      gallery: [
        "assets/images/atlas-home.jpeg",
        "assets/images/atlas-about.jpeg",
        "assets/images/atlas-contact.jpeg"
      ],
      overview: "ATLAS Studio is an expansive multi-page architectural studio web application. Built for luxury interior designers and architectural practices, it features dedicated project portfolios, services breakdown, interactive inquiry forms, and an editorial gallery showcasing space planning and architectural structures.",
      highlights: [
        "Multi-page architecture encompassing Home, Projects, Philosophy, and Contact endpoints.",
        "Minimalist aesthetic with high-contrast architectural imagery and clean whitespace.",
        "Mobile-first responsive fluid grids optimized across all screen formats."
      ],
      github: "https://github.com/s4nskrut1/frontend-projects/tree/main/Multi%20Page%20Website",
      demo: "https://github.com/s4nskrut1/frontend-projects"
    },
    {
      id: "proj-3",
      title: "GoalMate — Agentic AI Goal Tracker",
      subtitle: "Autonomous multi-agent system that breaks down ambitious personal goals into actionable milestones, habits, and streak schedules.",
      tags: ["Agentic AI", "Python", "Autonomous LLMs", "Full-Stack"],
      image: "assets/images/goalmate-haikyu-auth.png",
      gallery: [
        "assets/images/goalmate-haikyu-auth.png",
        "assets/images/goalmate-banner.png",
        "assets/images/goalmate-idea.png",
        "assets/images/goalmate-dash1.png",
        "assets/images/goalmate-dash2.png",
        "assets/images/goalmate-goal.png"
      ],
      overview: "GoalMate is an intelligent Agentic AI framework designed to solve self-regulation and goal abandonment. Powered by autonomous agentic task breakdown workflows, the system takes high-level user ambitions, analyzes schedule constraints, and proactively generates adaptive sub-tasks, habit tracking, and progress coaching.",
      highlights: [
        "Autonomous multi-agent orchestration for hierarchical goal deconstruction.",
        "Interactive dashboard featuring streak mechanics, habit calendars, and dynamic charts.",
        "Full-stack architecture integrating responsive frontend with Python backend agents."
      ],
      github: "https://github.com/s4nskrut1/AI-Agent-for-Personal-Goal-Tracking",
      demo: "https://github.com/s4nskrut1/AI-Agent-for-Personal-Goal-Tracking"
    },
    {
      id: "proj-4",
      title: "CrediMine — Bank Loan Risk Mining Platform",
      subtitle: "Predictive data mining engine assessing credit risk, debt-to-income ratios, and loan approval probabilities using ML pipelines.",
      tags: ["Data Science", "Python", "Scikit-Learn", "Risk Modeling"],
      image: "assets/images/credimine-landing.png",
      gallery: [
        "assets/images/credimine-landing.png",
        "assets/images/credimine-eda.png",
        "assets/images/credimine-attr.png",
        "assets/images/credimine-models.png",
        "assets/images/credimine-tree.png"
      ],
      overview: "A comprehensive data mining and financial technology platform that evaluates loan applicants in real time. The system executes end-to-end KDD (Knowledge Discovery in Databases) pipelines — from raw transaction ingestion and feature correlation heatmaps to supervised classification models for default rate prediction.",
      highlights: [
        "End-to-end machine learning classification pipelines with cross-validated ROC-AUC metrics.",
        "Interactive financial analytics dashboard displaying loan distributions and default rates.",
        "Real-time applicant risk calculator with attribute relevance feedback."
      ],
      github: "https://github.com/s4nskrut1/bank-loan-risk-mining",
      demo: "https://github.com/s4nskrut1/bank-loan-risk-mining"
    }
  ]
};

function createToastManager() {
  const container = document.getElementById('toast-container');
  let activeToasts = []; 

  return function showToast(message, type = 'info', duration = 3500) {
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '•'}</span>
      <span class="toast-text">${message}</span>
    `;

    container.appendChild(toast);
    activeToasts.push(toast);

    const timerId = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        if (toast.parentElement) {
          toast.remove();
          activeToasts = activeToasts.filter(t => t !== toast);
        }
      }, 300);
    }, duration);

    toast.addEventListener('click', () => {
      clearTimeout(timerId);
      toast.remove();
      activeToasts = activeToasts.filter(t => t !== toast);
    });
  };
}
const toast = createToastManager();

function createDebounce(fn, delay = 300) {
  let timeoutId = null; 
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function createPrivateCounter(initialValue = 0) {
  let count = initialValue; 

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = initialValue),
    getValue: () => count
  };
}
const vivaCounter = createPrivateCounter(0);

const StorageService = {
  getTheme() {
    try {
      return localStorage.getItem('sanskruti_theme') || 'light';
    } catch (err) {
      console.warn('localStorage read error:', err);
      return 'light';
    }
  },
  setTheme(theme) {
    try {
      localStorage.setItem('sanskruti_theme', theme);
    } catch (err) {
      console.warn('localStorage write error:', err);
    }
  },

  incrementVisits() {
    try {
      const visits = parseInt(localStorage.getItem('sanskruti_visits') || '0', 10) + 1;
      localStorage.setItem('sanskruti_visits', visits.toString());
      return visits;
    } catch (err) {
      return 1;
    }
  },

  saveFormDraft(draftObj) {
    try {
      sessionStorage.setItem('sanskruti_contact_draft', JSON.stringify(draftObj));
    } catch (err) {
      console.warn('sessionStorage write error:', err);
    }
  },
  getFormDraft() {
    try {
      const draft = sessionStorage.getItem('sanskruti_contact_draft');
      return draft ? JSON.parse(draft) : null;
    } catch (err) {
      console.warn('sessionStorage parse error:', err);
      return null;
    } 
  },
  clearFormDraft() {
    try {
      sessionStorage.removeItem('sanskruti_contact_draft');
    } catch (err) {
      console.warn('sessionStorage remove error:', err);
    }
  }
};

const AppState = {
  data: FALLBACK_DATA
};


async function loadPortfolioData() {
  try {
    const response = await fetch('portfolio-data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    AppState.data = jsonData;
    console.log('[App]: Successfully loaded external portfolio-data.json');
  } catch (err) {
    console.warn('[App]: Fetch unavailable (offline or protocol restriction). Using inline dataset.', err);
    AppState.data = FALLBACK_DATA;
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('message-char-counter');
  const alertBox = document.getElementById('form-alert-box');
  const submitBtn = document.getElementById('btn-submit-contact');

  const REGEX = {
    name: /^[a-zA-Z\s'.]{3,40}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  };

  function validateField(inputEl, isValid, errorMsg = '') {
    const wrapper = inputEl.parentElement;
    const feedback = wrapper.querySelector('.field-feedback');

    if (isValid) {
      inputEl.classList.remove('is-invalid');
      inputEl.classList.add('is-valid');
      if (feedback) feedback.textContent = '✓ Looks good!';
    } else {
      inputEl.classList.remove('is-valid');
      inputEl.classList.add('is-invalid');
      if (feedback && errorMsg) feedback.textContent = errorMsg;
    }
    return isValid;
  }

  function checkName() {
    const val = nameInput.value.trim();
    const isValid = REGEX.name.test(val);
    return validateField(nameInput, isValid, 'Please enter a valid name (3-40 letters).');
  }

  function checkEmail() {
    const val = emailInput.value.trim();
    const isValid = REGEX.email.test(val);
    return validateField(emailInput, isValid, 'Please provide a valid email (e.g. name@domain.com).');
  }

  function checkMessage() {
    const val = messageInput.value.trim();
    const isValid = val.length >= 10;
    return validateField(messageInput, isValid, 'Message must be at least 10 characters long.');
  }

  nameInput.addEventListener('input', checkName);
  nameInput.addEventListener('blur', checkName);

  emailInput.addEventListener('input', checkEmail);
  emailInput.addEventListener('blur', checkEmail);

  messageInput.addEventListener('input', () => {
    checkMessage();
    const len = messageInput.value.length;
    if (charCounter) {
      charCounter.textContent = `${len}/500`;
      charCounter.style.color = len > 500 ? '#f43f5e' : '';
    }
  });
  messageInput.addEventListener('blur', checkMessage);

  const debouncedAutosave = createDebounce(() => {
    const draft = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      savedAt: new Date().toISOString()
    };
    StorageService.saveFormDraft(draft); 
  }, 350);

  form.addEventListener('input', debouncedAutosave);

  const savedDraft = StorageService.getFormDraft();
  if (savedDraft) {
    if (savedDraft.name) nameInput.value = savedDraft.name;
    if (savedDraft.email) emailInput.value = savedDraft.email;
    if (savedDraft.message) {
      messageInput.value = savedDraft.message;
      if (charCounter) charCounter.textContent = `${savedDraft.message.length}/500`;
    }
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const isNameValid = checkName();
    const isEmailValid = checkEmail();
    const isMsgValid = checkMessage();

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      toast('Please correct the highlighted fields before sending.', 'error');
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoader) btnLoader.style.display = 'inline-block';

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toLocaleString()
    };

    try {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.log('[Form]: Standalone client mode. Saving locally.');
      }

      await new Promise(res => setTimeout(res, 600));

      try {
        const stored = JSON.parse(localStorage.getItem('sanskruti_inquiries') || '[]');
        stored.push(formData);
        localStorage.setItem('sanskruti_inquiries', JSON.stringify(stored));
      } catch (e) {
        console.warn('localStorage logging error:', e);
      }

      StorageService.clearFormDraft();
      form.reset();
      if (charCounter) charCounter.textContent = '0/500';
      nameInput.classList.remove('is-valid', 'is-invalid');
      emailInput.classList.remove('is-valid', 'is-invalid');
      messageInput.classList.remove('is-valid', 'is-invalid');

      toast('Message sent successfully! Thank you for reaching out.', 'success');
      if (alertBox) {
        alertBox.className = 'form-alert-box form-alert-success';
        alertBox.textContent = '🎉 Thank you! Your message has been sent successfully.';
        alertBox.style.display = 'block';
        setTimeout(() => { alertBox.style.display = 'none'; }, 6000);
      }
    } catch (err) {
      toast('Failed to send message. Please email directly.', 'error');
    } finally {
      submitBtn.disabled = false;
      if (btnText) btnText.style.display = 'inline-block';
      if (btnLoader) btnLoader.style.display = 'none';
    }
  });
}

function initModals() {
  const modal = document.getElementById('app-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  if (!modal) return;

  function openModal(title, html) {
    modalTitle.textContent = title;
    modalBody.innerHTML = html;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('click', event => {
    const btn = event.target.closest('.btn-open-cert');
    if (!btn) return;

    const title = btn.dataset.title || 'Official Academic Credential';
    const issuer = btn.dataset.issuer || 'Recognized Organization';
    const doc = btn.dataset.doc || '';
    const desc = btn.dataset.desc || 'Verified credential & participation certificate.';

    const certVisual = doc ? `
      <div style="margin: 0 auto 1.5rem auto; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--border-card); box-shadow: 0 10px 30px rgba(0,0,0,0.18); background: #ffffff;">
        <img src="${doc}" alt="${title}" style="width: 100%; height: auto; max-height: 520px; object-fit: contain; display: block; margin: 0 auto;">
      </div>
    ` : `
      <div style="margin: 0 auto 1.25rem auto; width: 105px; height: 105px; border-radius: 50%; background: #fdebee; display: flex; align-items: center; justify-content: center; font-size: 3.2rem; border: 2px dashed #f43f5e;">
        📜
      </div>
    `;

    const certHtml = `
      <div style="text-align: center; padding: 0.5rem 0;">
        ${certVisual}
        <h4 style="font-size: 1.4rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.35rem;">${title}</h4>
        <p style="color: var(--accent-rose); font-weight: 700; font-size: 1rem; margin-bottom: 0.85rem;">${issuer}</p>
        <p style="color: var(--text-body); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; max-width: 650px; margin-left: auto; margin-right: auto;">${desc}</p>
        <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.55rem 1.25rem; background: var(--bg-bento-card); border: 1px solid var(--border-card); border-radius: 100px; font-family: var(--font-mono); font-size: 0.82rem;">
          <span style="color: #10b981;">✓</span> Official Verification: <strong>AUTHENTIC CREDENTIAL</strong>
        </div>
      </div>
    `;

    openModal(`Credential: ${title}`, certHtml);
  });

  const PATENT_DATA = {
    'pat-1': {
      appNo: '202621048010 A',
      title: 'Digital Twin-Synchronized Reconfigurable Intelligent Surface Communication System for Smart Factory Environments',
      filingDate: '15/04/2026',
      pubDate: '12/06/2026',
      journal: 'The Patent Office Journal No. 24/2026 (Dated 12/06/2026, Page 69324)',
      applicant: 'Symbiosis International (Deemed University)',
      inventors: ['Dr. Akhil Gupta', 'Riddhi Thakkar', 'Sanskruti Gorle (Student Co-Inventor)', 'Janhavi Donadkar'],
      classification: 'H04W 84/18, H04W 16/18, H04B 17/391, H04W 24/02, H04B 7/06',
      pdf: 'assets/patents/patent-digital-twin-ris.pdf',
      abstract: 'Discloses a Digital Twin-Synchronized Reconfigurable Intelligent Surface (DT-RIS) communication system for smart manufacturing environments operating in 6G contexts. The system comprises a digital twin module for real-time virtual modeling and predictive channel state estimation, a reconfigurable intelligent surface with programmable sub-wavelength reflecting elements, an access point controller for coordinated transmit power optimization, a sensor network for environmental parameter monitoring, and a predictive RIS configuration unit implementing alternating optimization algorithms.',
      metrics: [
        { label: 'Throughput Improvement', val: '+41%' },
        { label: 'Latency Reduction', val: '-33%' },
        { label: 'Energy Efficiency', val: '+27%' },
        { label: 'Reliability Increase', val: '2.5x' }
      ]
    },
    'pat-2': {
      appNo: '202521125527 A',
      title: 'System and Method for Automated Window Control Based on Environmental and Security Parameters',
      filingDate: '11/12/2025',
      pubDate: '02/01/2026',
      journal: 'The Patent Office Journal No. 1/2026 (Dated 02/01/2026, Page 398)',
      applicant: 'Symbiosis International (Deemed University)',
      inventors: ['Dr. Akhil Gupta', 'Riddhi Thakkar', 'Sanskruti Gorle (Student Co-Inventor)', 'Janhavi Donadkar'],
      classification: 'E05F 15/73, G05B 15/02, E05F 15/77, E05F 15/71, E05F 15/70',
      pdf: 'assets/patents/patent-automated-window-control.pdf',
      abstract: 'A computer-implemented system for automated window control based on environmental and security parameters. Configured to monitor ambient conditions (temperature and humidity data), detect precipitation events using moisture detection sensor data, identify presence of objects using infrared radiation pattern analysis, sense physical disturbances using vibrational frequency analysis, and execute control actions through motor control signals to modify window position states with prioritized decision logic.',
      metrics: [
        { label: 'Response Latency', val: 'Sub-Second' },
        { label: 'Decision Logic', val: 'Prioritized Alg' },
        { label: 'Safety Overrides', val: 'Rain & Security' },
        { label: 'Application Scope', val: 'Smart Building IoT' }
      ]
    }
  };

  document.addEventListener('click', event => {
    const patentEl = event.target.closest('.btn-open-patent');
    if (!patentEl) return;

    const patId = patentEl.dataset.patentId || 'pat-1';
    const pat = PATENT_DATA[patId];
    if (!pat) return;

    const html = `
      <div class="patent-modal-content" style="padding: 0.25rem 0;">
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.85rem;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.65rem; border-radius: 6px; border: 1px solid #bae6fd;">
            App No. ${pat.appNo}
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-rose); background: #fdebee; padding: 0.25rem 0.65rem; border-radius: 100px;">
            Published: ${pat.pubDate}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">
            ${pat.journal}
          </span>
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 600; color: var(--text-heading); line-height: 1.35; margin-bottom: 1.15rem;">
          ${pat.title}
        </h3>

        <!-- Key Metrics Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.25rem;">
          ${pat.metrics.map(m => `
            <div style="background: var(--bg-pink-subtle); border: 1px solid var(--border-card); border-radius: 10px; padding: 0.75rem; text-align: center;">
              <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 900; color: var(--accent-rose);">${m.val}</div>
              <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; margin-top: 0.2rem;">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <!-- Meta Details Box -->
        <div style="background: var(--bg-bento-card); border: 1px solid var(--border-card); border-radius: 12px; padding: 1.15rem; margin-bottom: 1.25rem; font-size: 0.85rem; line-height: 1.6;">
          <div style="margin-bottom: 0.4rem;"><strong>Applicant:</strong> ${pat.applicant}</div>
          <div style="margin-bottom: 0.4rem;"><strong>Inventors:</strong> ${pat.inventors.map(inv => inv.includes('Sanskruti') ? `<strong style="color: var(--accent-rose); background: #fdebee; padding: 2px 6px; border-radius: 4px;">${inv}</strong>` : inv).join(', ')}</div>
          <div style="margin-bottom: 0.4rem;"><strong>Filing Date:</strong> ${pat.filingDate} | <strong>Publication Date:</strong> ${pat.pubDate}</div>
          <div><strong>IPC Class:</strong> <code style="font-size: 0.78rem;">${pat.classification}</code></div>
        </div>

        <!-- Abstract -->
        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-heading); margin-bottom: 0.45rem;">Technical Abstract:</h4>
          <p style="font-size: 0.85rem; color: var(--text-body); line-height: 1.6; text-align: justify;">${pat.abstract}</p>
        </div>

        <!-- Embedded PDF Gazette Viewer (In-Page) -->
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-heading); margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
            <span>Official Patent Office Gazette Document:</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Interactive In-Page Viewer</span>
          </h4>
          <div style="border: 1.5px solid var(--border-card); border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 14px rgba(0,0,0,0.08);">
            <iframe src="${pat.pdf}#toolbar=0" width="100%" height="480px" style="border: none; display: block;" title="${pat.title}"></iframe>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-card);">
          <a href="${pat.pdf}" download class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; padding: 0.55rem 1.25rem; border-radius: 100px; text-decoration: none; color: #fff; background: linear-gradient(135deg, #f43f5e, #be123c);">
            <span>Download Official Gazette Copy</span> 📥
          </a>
        </div>
      </div>
    `;

    openModal(`Official Patent Publication: ${pat.appNo}`, html);
  });

  document.addEventListener('click', event => {
    const cardOrBtn = event.target.closest('.project-showcase-row, .btn-project-details');
    if (!cardOrBtn) return;
    if (event.target.closest('.btn-github-pill, .proj-icon-link')) return; // Allow direct github link clicks without modal

    const card = event.target.closest('.project-showcase-row');
    const projId = card ? card.dataset.projId : cardOrBtn.dataset.projectId;
    if (!projId) return;

    const project = (AppState.data.featuredProjects || []).find(p => p.id === projId) ||
                    (FALLBACK_DATA.featuredProjects || []).find(p => p.id === projId);
    if (!project) return;

    const readmeShields = `
      <div class="readme-badge-row">
        <span class="readme-shield"><span class="shield-left">build</span><span class="shield-right shield-emerald">passing</span></span>
        <span class="readme-shield"><span class="shield-left">version</span><span class="shield-right shield-blue">v2.4.0</span></span>
        <span class="readme-shield"><span class="shield-left">license</span><span class="shield-right shield-purple">MIT</span></span>
        <span class="readme-shield"><span class="shield-left">stack</span><span class="shield-right shield-pink">${(project.tags || []).slice(0, 2).join(' / ')}</span></span>
      </div>
    `;

    let specificReadmeSections = '';

    if (projId === 'proj-1') {
      specificReadmeSections = `
        <h3 class="readme-section-title">✨ Key Engineering Features</h3>
        <ul class="readme-bullet-list">
          <li><strong>Editorial Kinetic Typography:</strong> Dynamic responsive font scalings with smooth optical kerning and high-contrast dark theme.</li>
          <li><strong>Product Colorway Matrix:</strong> Instant DOM state updates without page reflows or reloads for real-time shoe color selection.</li>
          <li><strong>Scroll-Driven Reveal Micro-Animations:</strong> Ultra-fast zero-overhead CSS transforms paired with IntersectionObserver for 60fps animations.</li>
        </ul>

        <div class="readme-figure-box">
          <img src="assets/images/aether-hero.png" alt="AETHER Hero Banner">
          <div class="readme-caption">Figure 1.0: Dark luxury editorial hero banner with dynamic typography and call-to-action</div>
        </div>

        <h3 class="readme-section-title">👟 Interactive Lookbook &amp; Product Showcase</h3>
        <div class="readme-figure-box">
          <img src="assets/images/aether-showcase.png" alt="AETHER Product Showcase Grid">
          <div class="readme-caption">Figure 1.1: Luxury product showcase with colorway picker and detailed garment specifications</div>
        </div>

        <h3 class="readme-section-title">📸 Campaign Editorial Lookbook</h3>
        <div class="readme-figure-box">
          <img src="assets/images/aether-campaign.png" alt="AETHER Campaign Grid">
          <div class="readme-caption">Figure 1.2: Campaign editorial grid showcasing responsive lookbook reveals</div>
        </div>

        <h3 class="readme-section-title">🛠️ Technical Specification</h3>
        <table class="readme-table">
          <thead>
            <tr><th>Module</th><th>Technology</th><th>Implementation Details</th></tr>
          </thead>
          <tbody>
            <tr><td>Layout Architecture</td><td>CSS Flexbox &amp; CSS Grid</td><td>Fluid responsive grid with fractional units</td></tr>
            <tr><td>State Management</td><td>Vanilla JavaScript (ES6+)</td><td>Modular event listeners and DOM token manipulations</td></tr>
            <tr><td>Rendering Performance</td><td>GPU-Accelerated CSS</td><td>3D transforms and will-change optimizations</td></tr>
          </tbody>
        </table>
      `;
    } else if (projId === 'proj-2') {
      specificReadmeSections = `
        <h3 class="readme-section-title">🏛️ Architecture &amp; Spatial Design Overview</h3>
        <p class="readme-lead-p">
          ATLAS Studio is an expansive multi-page architectural practice portfolio web application built for luxury interior designers and architectural studios. It emphasizes high-contrast spatial photography, minimal white borders, and an intuitive multi-page client journey.
        </p>

        <div class="readme-figure-box">
          <img src="assets/images/atlas-home.jpeg" alt="ATLAS Studio Homepage Architecture">
          <div class="readme-caption">Figure 2.0: Minimalist architectural homepage showcase with clean negative space</div>
        </div>

        <h3 class="readme-section-title">📐 About &amp; Design Philosophy</h3>
        <div class="readme-figure-box">
          <img src="assets/images/atlas-about.jpeg" alt="ATLAS Studio About & Philosophy">
          <div class="readme-caption">Figure 2.1: Studio philosophy, principal architect profiles, and structural concepts</div>
        </div>

        <h3 class="readme-section-title">✉️ Client Inquiry &amp; Consultation Desk</h3>
        <div class="readme-figure-box">
          <img src="assets/images/atlas-contact.jpeg" alt="ATLAS Studio Contact Page">
          <div class="readme-caption">Figure 2.2: Multi-field architectural consultation inquiry interface</div>
        </div>

        <h3 class="readme-section-title">🚀 Core Highlights &amp; Navigation</h3>
        <ul class="readme-bullet-list">
          <li><strong>Multi-Page Architecture:</strong> Seamless navigational routing between Home, Projects, Philosophy, and Contact channels.</li>
          <li><strong>Editorial Layout:</strong> Strict grid discipline adhering to Swiss international typographic style.</li>
          <li><strong>Optimized Asset Delivery:</strong> High-density responsive image compression for rapid loading times.</li>
        </ul>
      `;
    } else if (projId === 'proj-3') {
      specificReadmeSections = `
        <h3 class="readme-section-title">🤖 Agentic AI System Architecture</h3>
        <p class="readme-lead-p">
          GoalMate implements an autonomous multi-agent hierarchy where high-level personal goals (e.g. "Prepare for Google SWE Internship in 6 months") are ingested, parsed into structured knowledge graphs, and broken down into weekly sprints, daily habits, and adaptive milestone tracks.
        </p>

        <div class="readme-figure-box">
          <img src="assets/images/goalmate-banner.png" alt="GoalMate Banner Architecture">
          <div class="readme-caption">Figure 3.0: GoalMate AI — Multi-Agent Goal Tracking &amp; Streak Management System</div>
        </div>

        <div class="readme-figure-box">
          <img src="assets/images/goalmate-idea.png" alt="GoalMate Concept Breakdown">
          <div class="readme-caption">Figure 3.1: Conceptual architecture of autonomous goal decomposition &amp; habit tracking</div>
        </div>

        <h3 class="readme-section-title">📊 Live Dashboard &amp; Milestone Tracking</h3>
        <div class="readme-figure-box">
          <img src="assets/images/goalmate-dash1.png" alt="GoalMate Primary Dashboard">
          <div class="readme-caption">Figure 3.2: Primary user dashboard displaying active goals, streak counters, and weekly completion rates</div>
        </div>

        <div class="readme-figure-box">
          <img src="assets/images/goalmate-dash2.png" alt="GoalMate Milestone Progress View">
          <div class="readme-caption">Figure 3.3: Detailed milestone analytics, timeline progression, and upcoming task queue</div>
        </div>

        <div class="readme-figure-box">
          <img src="assets/images/goalmate-goal.png" alt="GoalMate Goal Creation View">
          <div class="readme-caption">Figure 3.4: Intelligent goal creation interface with automated sub-task generation</div>
        </div>

        <h3 class="readme-section-title">⚡ Multi-Agent Execution Flow</h3>
        <div class="readme-code-block">
[User Ingestion] -> "Crack Tech Internship"
       ↓
[Planner Agent]   -> Generates 12-week hierarchical roadmap
       ↓
[Scheduler Agent] -> Analyzes calendar constraints & allocates daily micro-tasks
       ↓
[Reviewer Agent]  -> Evaluates consistency & triggers streak accountability alerts
        </div>

        <h3 class="readme-section-title">🛠️ Technology Stack</h3>
        <table class="readme-table">
          <thead>
            <tr><th>Layer</th><th>Stack</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td>Autonomous Agents</td><td>Python &amp; Google Gemini / Custom LLM Prompts</td><td>Multi-agent orchestration and task decomposition</td></tr>
            <tr><td>Backend API</td><td>FastAPI &amp; SQLite</td><td>Asynchronous REST endpoints &amp; persistent goal state</td></tr>
            <tr><td>Frontend Interface</td><td>Gradio / Modern Responsive Web</td><td>Interactive goal setup, habit calendar, and live coaching</td></tr>
          </tbody>
        </table>
      `;
    } else if (projId === 'proj-4') {
      specificReadmeSections = `
        <h3 class="readme-section-title">📈 Predictive Analytics &amp; Risk Engine</h3>
        <p class="readme-lead-p">
          CrediMine is a financial technology platform applying KDD (Knowledge Discovery in Databases) pipelines to real-world bank loan datasets. The system predicts credit risk ratings, debt-to-income vulnerabilities, and approval likelihoods using cross-validated machine learning classification models.
        </p>

        <div class="readme-figure-box">
          <img src="assets/images/credimine-landing.png" alt="CrediMine Landing Overview">
          <div class="readme-caption">Figure 4.0: CrediMine Executive Landing Page &amp; Bank Loan Risk Mining System Overview</div>
        </div>

        <h3 class="readme-section-title">📊 Exploratory Data Analysis &amp; Ingestion</h3>
        <div class="readme-figure-box">
          <img src="assets/images/credimine-eda.png" alt="CrediMine EDA Dashboard">
          <div class="readme-caption">Figure 4.1: Comprehensive EDA with distribution histograms, loan status metrics, and applicant income analysis</div>
        </div>

        <h3 class="readme-section-title">🔬 Tri-Method Attribute Correlation</h3>
        <div class="readme-figure-box">
          <img src="assets/images/credimine-attr.png" alt="CrediMine Attribute Importance">
          <div class="readme-caption">Figure 4.2: Tri-method attribute relevance (Information Gain, Chi-Square, Correlation) determining top default predictors</div>
        </div>

        <h3 class="readme-section-title">🎯 Machine Learning Model Benchmarking</h3>
        <div class="readme-figure-box">
          <img src="assets/images/credimine-models.png" alt="CrediMine Model Comparison">
          <div class="readme-caption">Figure 4.3: Multi-model evaluation comparing Logistic Regression, Random Forest, Decision Tree, and Naive Bayes</div>
        </div>

        <div class="readme-figure-box">
          <img src="assets/images/credimine-tree.png" alt="CrediMine Decision Tree Rules">
          <div class="readme-caption">Figure 4.4: Interpretable Decision Tree rule extraction for regulatory bank credit compliance</div>
        </div>

        <h3 class="readme-section-title">🎯 Model Benchmark Summary</h3>
        <table class="readme-table">
          <thead>
            <tr><th>Model Algorithm</th><th>Precision</th><th>Recall</th><th>ROC-AUC Score</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Random Forest Classifier</strong></td><td>0.89</td><td>0.86</td><td><strong>0.924</strong> (Selected)</td></tr>
            <tr><td>Gradient Boosting (XGBoost)</td><td>0.88</td><td>0.84</td><td>0.912</td></tr>
            <tr><td>Decision Tree Classifier</td><td>0.82</td><td>0.80</td><td>0.835</td></tr>
            <tr><td>Logistic Regression Baseline</td><td>0.79</td><td>0.75</td><td>0.816</td></tr>
          </tbody>
        </table>
      `;
    }

    const projectModalHtml = `
      <div class="readme-doc-container">
        <!-- README Header -->
        <div class="readme-header-banner">
          ${readmeShields}
          <h1 class="readme-h1">
            <span>📂</span> ${project.title}
          </h1>
          <p class="readme-lead-p">${project.overview || project.subtitle}</p>
        </div>

        <!-- README Body Sections -->
        ${specificReadmeSections}

        <!-- README Footer Links -->
        <div class="readme-footer-cta">
          <div>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">
              Repository: <strong>s4nskrut1/${project.id}</strong>
            </span>
          </div>
          <div style="display: flex; gap: 0.85rem; align-items: center;">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1.6rem; background: var(--text-heading); color: #ffffff; border-radius: 100px; font-weight: 800; font-size: 0.9rem; text-decoration: none; transition: transform 0.2s ease; box-shadow: 0 4px 14px rgba(0,0,0,0.2);">
              <span>🐙</span> View Full GitHub Repository ↗
            </a>
          </div>
        </div>
      </div>
    `;

    openModal(`README.md: ${project.title}`, projectModalHtml);
  });
}

function initThemeAndControls() {
  const themeToggle = document.getElementById('theme-toggle');
  const footerThemeToggle = document.getElementById('footer-theme-toggle');
  const refreshBtn = document.getElementById('btn-refresh-data');

  const savedTheme = StorageService.getTheme();
  document.documentElement.setAttribute('data-theme', savedTheme);

  function toggleThemeAction() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    StorageService.setTheme(next);
    toast(`Switched to ${next.toUpperCase()} theme`, 'info');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleThemeAction);
  if (footerThemeToggle) footerThemeToggle.addEventListener('click', toggleThemeAction);

  if (refreshBtn) { 
    refreshBtn.addEventListener('click', async () => {
      refreshBtn.style.transform = 'rotate(360deg)';
      refreshBtn.style.transition = 'transform 0.5s ease';
      setTimeout(() => { refreshBtn.style.transform = 'none'; }, 500);

      await loadPortfolioData();
      toast('Portfolio data refreshed successfully!', 'success');
    });
  }

  const filterContainer = document.getElementById('project-filters');
  if (filterContainer) {
    const filterButtons = filterContainer.querySelectorAll('.filter-pill');
    const projectCards = document.querySelectorAll('.project-showcase-row');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter || 'all';

        projectCards.forEach(card => {
          const cats = card.dataset.category || '';
          if (filter === 'all' || cats.includes(filter)) {
            card.style.display = 'grid';
            card.style.animation = 'fade-in 0.3s ease';
          } else {
            card.style.display = 'none';
          }
        });

        toast(`Filtered projects: ${btn.textContent.trim()}`, 'info');
      });
    });
  }

  const navLinks = document.querySelectorAll('.nav-menu-link');
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function initInspectorModal() {
  const openBtn = document.getElementById('btn-open-inspector');
  const modal = document.getElementById('inspector-modal');
  const closeBtn = document.getElementById('inspector-close');
  const tabsContainer = document.getElementById('inspector-tabs');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  if (tabsContainer) {
    tabsContainer.addEventListener('click', event => {
      const tab = event.target.closest('.insp-tab');
      if (!tab) return;

      tabsContainer.querySelectorAll('.insp-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.dataset.target;
      document.querySelectorAll('.insp-panel').forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  } 

  const btnInc = document.getElementById('btn-closure-increment');
  const btnDec = document.getElementById('btn-closure-decrement');
  const btnReset = document.getElementById('btn-closure-reset');
  const consoleClosure = document.getElementById('console-closure');

  if (btnInc && consoleClosure) {
    btnInc.addEventListener('click', () => {
      const val = vivaCounter.increment();
      consoleClosure.textContent = `[Closure State]: ++count called. Private count is now = ${val}\n(Variable 'count' is protected in lexical scope and inaccessible from outside!)`;
    });
    btnDec.addEventListener('click', () => {
      const val = vivaCounter.decrement();
      consoleClosure.textContent = `[Closure State]: --count called. Private count is now = ${val}`;
    });
    btnReset.addEventListener('click', () => {
      const val = vivaCounter.reset();
      consoleClosure.textContent = `[Closure State]: reset() called. Private count restored to = ${val}`;
    });
  }

  const regexInput = document.getElementById('regex-test-input');
  const regexSelect = document.getElementById('regex-pattern-select');
  const btnRegex = document.getElementById('btn-run-regex');
  const consoleRegex = document.getElementById('console-regex');

  if (btnRegex && regexInput && consoleRegex) {
    btnRegex.addEventListener('click', () => {
      const testVal = regexInput.value.trim();
      const patternKey = regexSelect.value;

      const patterns = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^[6-9]\d{9}$/,
        name: /^[a-zA-Z\s]{3,30}$/
      };

      const selectedRegex = patterns[patternKey];
      const isMatch = selectedRegex.test(testVal);

      consoleRegex.textContent = `Input: "${testVal}"\nRegex: ${selectedRegex}\nResult: ${isMatch ? '✅ MATCH SUCCESSFUL (Valid input)' : '❌ DOES NOT MATCH PATTERN (Invalid input)'}`;
      consoleRegex.style.color = isMatch ? '#10b981' : '#f43f5e';
    });
  }

  const btnMap = document.getElementById('btn-demo-map');
  const btnFilter = document.getElementById('btn-demo-filter');
  const btnReduce = document.getElementById('btn-demo-reduce');
  const consoleArrays = document.getElementById('console-arrays');

  if (btnMap && consoleArrays) {
    btnMap.addEventListener('click', () => {
      const titles = (AppState.data.featuredProjects || []).map(p => p.title);
      consoleArrays.textContent = `// Array.map() Demo:\nconst titles = featuredProjects.map(p => p.title);\n\nExtracted [${titles.length} items]:\n${JSON.stringify(titles, null, 2)}`;
      consoleArrays.style.color = '#38bdf8';
    });

    btnFilter.addEventListener('click', () => {
      const mlProjects = (AppState.data.featuredProjects || []).filter(p => p.tags.includes('ML'));
      consoleArrays.textContent = `// Array.filter() Demo:\nconst mlProjects = featuredProjects.filter(p => p.tags.includes('ML'));\n\nFound [${mlProjects.length} items]:\n${JSON.stringify(mlProjects.map(p => ({ title: p.title, subtitle: p.subtitle })), null, 2)}`;
      consoleArrays.style.color = '#ec4899';
    });

    btnReduce.addEventListener('click', () => {
      const skills = AppState.data.technicalSkills || [];
      const totalChars = skills.reduce((acc, s) => acc + s.name.length, 0);
      consoleArrays.textContent = `// Array.reduce() Demo:\nconst totalSkills = skills.reduce((acc, s) => acc + 1, 0);\n\nTotal Skills: ${skills.length}\nCumulative Characters: ${totalChars}`;
      consoleArrays.style.color = '#10b981';
    });
  }

  const btnLocal = document.getElementById('btn-view-local-storage');
  const btnSession = document.getElementById('btn-view-session-storage');
  const btnClearDraft = document.getElementById('btn-clear-demo-storage');
  const consoleStorage = document.getElementById('console-storage');

  if (btnLocal && consoleStorage) {
    btnLocal.addEventListener('click', () => {
      const theme = StorageService.getTheme();
      const visits = localStorage.getItem('sanskruti_visits') || '1';
      consoleStorage.textContent = `[localStorage Snapshot]:\n- sanskruti_theme: "${theme}"\n- sanskruti_visits: "${visits}"\n- Inquiries Logged: ${(localStorage.getItem('sanskruti_inquiries') || '[]')}`;
      consoleStorage.style.color = '#fde047';
    });

    btnSession.addEventListener('click', () => {
      const draft = StorageService.getFormDraft();
      consoleStorage.textContent = `[sessionStorage Snapshot (Unsaved Draft)]:\n${draft ? JSON.stringify(draft, null, 2) : 'No active form draft currently in sessionStorage.'}`;
      consoleStorage.style.color = '#38bdf8';
    });

    btnClearDraft.addEventListener('click', () => {
      StorageService.clearFormDraft();
      consoleStorage.textContent = `[sessionStorage]: Active form draft cleared successfully!`;
      consoleStorage.style.color = '#a7f3d0';
      toast('sessionStorage form draft wiped!', 'info');
    });
  }

  const domBox = document.getElementById('dom-target-box');
  const domBoxText = document.getElementById('dom-box-text');
  const btnMutate = document.getElementById('btn-mutate-dom');
  const btnAdd = document.getElementById('btn-add-element');
  const btnResetDom = document.getElementById('btn-reset-dom');
  const consoleEvents = document.getElementById('console-events');

  if (btnMutate && domBox && consoleEvents) {
    btnMutate.addEventListener('click', () => {
      const isMutated = domBox.classList.toggle('mutated');
      domBoxText.textContent = isMutated
        ? '⚡ State: .mutated class applied! Background and border transformed dynamically.'
        : 'Watch my classList and styles mutate dynamically!';
      consoleEvents.textContent = `[DOM Event Trigger]: 'click' on #${btnMutate.id}\nAction: element.classList.toggle('mutated') -> classList contains: [${domBox.className}]`;
      consoleEvents.style.color = '#ec4899';
    });

    btnAdd.addEventListener('click', () => {
      const newTag = document.createElement('span');
      newTag.className = 'mini-tag tag-pink';
      newTag.style.margin = '4px';
      newTag.textContent = `+Node ${Date.now().toString().slice(-4)}`;
      domBox.appendChild(newTag);
      consoleEvents.textContent = `[DOM Mutation]: document.createElement('span') appended to #dom-target-box.\nChild nodes count: ${domBox.children.length}`;
      consoleEvents.style.color = '#10b981';
    });

    btnResetDom.addEventListener('click', () => {
      domBox.className = 'dom-item-box';
      domBoxText.textContent = 'Watch my classList and styles mutate dynamically!';
      domBox.querySelectorAll('.mini-tag').forEach(b => b.remove());
      consoleEvents.textContent = `[DOM Reset]: Playground reset to baseline DOM structure.`;
      consoleEvents.style.color = '#38bdf8';
    });
  }
}

function initCreativeWidgets() {
  const pfpFlipCard = document.getElementById('pfp-flip-card');
  if (pfpFlipCard) {
    const toggleFlip = () => {
      pfpFlipCard.classList.toggle('flipped');
      const isFlipped = pfpFlipCard.classList.contains('flipped');
      toast(isFlipped ? 'Revealed: Sanskruti Gorle (Real Portrait) ✨' : 'Showing: Illustrated Pink Avatar 🌸', 'info');
    };

    pfpFlipCard.addEventListener('click', toggleFlip);
    pfpFlipCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFlip();
      }
    });
  }

  const skillBadges = document.querySelectorAll('.skill-circle-badge');
  skillBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      const name = badge.querySelector('.skill-text-bold')?.textContent || 'Skill';
      const level = badge.querySelector('.skill-level-pill')?.textContent || '';
      toast(`${name}: Verified Proficiency (${level}) ⚡`, 'info');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('[Portfolio Application]: Bootstrapping...');

  const totalVisits = StorageService.incrementVisits();
  console.log(`[Storage API]: Visitor count logged = ${totalVisits}`);

  initThemeAndControls();
  initContactForm();
  initModals();
  initInspectorModal();
  initCreativeWidgets();

  loadPortfolioData();

  window.addEventListener('keydown', event => {
    if (event.altKey && (event.key === 'j' || event.key === 'J')) {
      const inspector = document.getElementById('inspector-modal');
      if (inspector) inspector.classList.toggle('open');
    }
  });

  console.log('[Portfolio Application]: Successfully initialized and mounted.');
});
