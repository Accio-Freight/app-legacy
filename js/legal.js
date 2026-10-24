  /* =========================================================
     1. TABS — Privacidad / Términos
  ========================================================= */
  const getScrollBehavior = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => {
      const isActive = t.dataset.tab === tabId;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', String(isActive));
      t.tabIndex = isActive ? 0 : -1;
    });
    document.querySelectorAll('.legal-section').forEach(s => {
      const isActive = s.id === tabId;
      s.classList.toggle('active', isActive);
      s.hidden = !isActive;
    });
    var lang = document.documentElement.getAttribute('lang') || 'es';
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.es);
    var titleKey = tabId === 'privacidad' ? 'hero.title' : 'hero.titleTerms';
    var titleHtml = titleKey.split('.').reduce(function (acc, part) {
      return (acc && Object.prototype.hasOwnProperty.call(acc, part)) ? acc[part] : undefined;
    }, dict);
    document.getElementById('page-title').innerHTML = titleHtml || (tabId === 'privacidad'
      ? 'Privacidad y <em>Términos</em>'
      : 'Términos y <em>Privacidad</em>');
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  }

  const tabButtons = Array.from(document.querySelectorAll('.tab'));
  tabButtons.forEach((tab, index) => tab.addEventListener('keydown', e => {
    let nextIndex = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextIndex = (index + 1) % tabButtons.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    if (e.key === 'Home') nextIndex = 0;
    if (e.key === 'End') nextIndex = tabButtons.length - 1;
    if (nextIndex === null) return;
    e.preventDefault();
    tabButtons[nextIndex].focus();
    showTab(tabButtons[nextIndex].dataset.tab);
  }));

  // Deep link: si la URL tiene #privacidad o #terminos, abrir ese tab
  if (location.hash === '#terminos') {
    showTab('terminos');
  } else if (location.hash === '#privacidad') {
    showTab('privacidad');
  }

  // Smooth scroll para enlaces internos del TOC
  document.querySelectorAll('.toc a').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
      }
    });
  });

  /* =========================================================
     2. NAV MOBILE — toggle del menú hamburguesa
  ========================================================= */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function setNavAccessibility(isOpen) {
    const isMobile = window.innerWidth <= 880;
    const isHidden = isMobile && !isOpen;
    navLinks.setAttribute('aria-hidden', String(isHidden));
    if (isHidden) navLinks.setAttribute('inert', '');
    else navLinks.removeAttribute('inert');
    document.body.classList.toggle('nav-open', isMobile && isOpen);
  }

  function closeNav() {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
    setNavAccessibility(false);
    navToggle.focus();
  }
  function openNav() {
    navToggle.classList.add('open');
    navLinks.classList.add('open');
    navOverlay.classList.add('show');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Cerrar menú');
    setNavAccessibility(true);
    const firstLink = navLinks.querySelector('a');
    if (firstLink) requestAnimationFrame(() => firstLink.focus());
  }
  navToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });
  navOverlay.addEventListener('click', closeNav);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  setNavAccessibility(false);
  window.addEventListener('resize', () => setNavAccessibility(navLinks.classList.contains('open')));

  /* =========================================================
     3. REVEAL ON SCROLL
  ========================================================= */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('visible'));
  }

  /* =========================================================
     4. BACK TO TOP
  ========================================================= */
  const backToTop = document.getElementById('backToTop');
  function updateBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  });
