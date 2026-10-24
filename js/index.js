  /* Menú móvil */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  function closeMenu() {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  }
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 880 && navLinks.classList.contains('open')) closeMenu();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* ScrollSpy y navegación activa para el navbar flotante */
  const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = [
    { id: 'inicio', el: document.getElementById('inicio') },
    { id: 'servicios', el: document.getElementById('servicios') },
    { id: 'nosotros', el: document.getElementById('nosotros') },
    { id: 'contacto', el: document.getElementById('contacto') }
  ].filter(s => s.el !== null);

  function setActiveNavLink(id) {
    navAnchorLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Clic en enlace: scroll suave y activar inmediatamente
  navAnchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setActiveNavLink(targetId);
        if (typeof closeMenu === 'function') closeMenu();
      }
    });
  });

  // Botón CTA "COTIZA AHORA" hacia contacto
  const ctaBtn = document.querySelector('.header-actions .btn-cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      const targetEl = document.getElementById('contacto');
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setActiveNavLink('contacto');
        if (typeof closeMenu === 'function') closeMenu();
      }
    });
  }

  // Selector de idioma (ES / EN)
  const langOpts = document.querySelectorAll('.lang-switch .lang-opt');
  langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      langOpts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  // Detección automática al hacer scroll (ScrollSpy y estado del Navbar)
  const siteHeaderEl = document.getElementById('siteHeader');
  function updateHeaderTransparency() {
    if (siteHeaderEl) {
      siteHeaderEl.classList.toggle('scrolled', window.scrollY > 40);
    }
  }

  let scrollTimer = null;
  function handleScrollSpy() {
    updateHeaderTransparency();
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 100)) {
      setActiveNavLink('contacto');
      return;
    }
    const scrollPos = window.scrollY + 160;
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.el.offsetTop <= scrollPos) {
        setActiveNavLink(sec.id);
        break;
      }
    }
  }

  window.addEventListener('scroll', () => {
    updateHeaderTransparency();
    if (!scrollTimer) {
      scrollTimer = setTimeout(() => {
        scrollTimer = null;
        handleScrollSpy();
      }, 40);
    }
  }, { passive: true });

  handleScrollSpy();
  updateHeaderTransparency();

  /* Formulario de contacto — misma lógica que guia.html (sin i18n) */
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  const formErrorBanner = document.getElementById('formErrorBanner');
  form.noValidate = true;

  function getScrollBehavior() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }

  function showFormError() {
    formErrorBanner.classList.add('show');
    formErrorBanner.focus({ preventScroll: true });
  }

  function showError(fieldId, message) {
    const errEl = document.getElementById('err-' + fieldId);
    const input = document.getElementById(fieldId);
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('show');
    }
    if (input) {
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
    }
  }

  function clearError(fieldId) {
    const errEl = document.getElementById('err-' + fieldId);
    const input = document.getElementById(fieldId);
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('show');
    }
    if (input) {
      input.classList.remove('invalid');
      input.removeAttribute('aria-invalid');
    }
  }

  ['nombre', 'email', 'servicio', 'mensaje', 'consent'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const evt = el.type === 'checkbox' ? 'change' : 'input';
    el.addEventListener(evt, () => clearError(id));
  });
  const servicioEl = document.getElementById('servicio');
  if (servicioEl) servicioEl.addEventListener('change', () => clearError('servicio'));

  const charCount = document.getElementById('charCount');
  const mensajeEl = document.getElementById('mensaje');
  function updateCharacterCount() {
    if (!charCount || !mensajeEl) return;
    const count = mensajeEl.value.length;
    const max = mensajeEl.maxLength || 1000;
    charCount.textContent = count;
    const counter = charCount.closest('.char-count');
    if (counter) {
      counter.classList.toggle('warning', count > max * 0.8 && count <= max * 0.95);
      counter.classList.toggle('danger', count > max * 0.95);
    }
  }
  if (charCount && mensajeEl) {
    mensajeEl.addEventListener('input', updateCharacterCount);
    updateCharacterCount();
  }

  const urlParams = new URLSearchParams(window.location.search);
  const preselectedService = urlParams.get('service');
  if (preselectedService && servicioEl) {
    if (Array.from(servicioEl.options).some(o => o.value === preselectedService)) {
      servicioEl.value = preselectedService;
    }
  }

  function setLoading(isLoading) {
    submitBtn.classList.toggle('loading', isLoading);
    submitBtn.disabled = isLoading;
    form.setAttribute('aria-busy', String(isLoading));
    submitBtn.querySelector('.btn-text').textContent = isLoading ? 'Enviando…' : 'Enviar consulta';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    formSuccess.classList.remove('show');
    formErrorBanner.classList.remove('show');

    let valid = true;
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const servicio = servicioEl.value;
    const mensaje = mensajeEl.value.trim();

    if (nombre.length < 2) { showError('nombre', 'Ingresa tu nombre completo.'); valid = false; }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) { showError('email', 'Ingresa un correo electrónico válido.'); valid = false; }
    if (!servicio) { showError('servicio', 'Selecciona un servicio de interés.'); valid = false; }
    if (mensaje.length < 10) { showError('mensaje', 'Cuéntanos un poco más sobre tu operación (mín. 10 caracteres).'); valid = false; }
    const consentEl = document.getElementById('consent');
    if (consentEl && !consentEl.checked) {
      showError('consent', 'Debes aceptar la política de privacidad para continuar.');
      valid = false;
    }

    if (!valid) {
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    setLoading(true);

    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const requestTimeout = controller ? window.setTimeout(() => controller.abort(), 15000) : null;
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
        signal: controller ? controller.signal : undefined
      });

      if (response.ok) {
        form.reset();
        ['nombre', 'email', 'servicio', 'mensaje', 'consent'].forEach(clearError);
        updateCharacterCount();
        formSuccess.classList.add('show');
        formSuccess.scrollIntoView({ behavior: getScrollBehavior(), block: 'nearest' });
      } else {
        showFormError();
      }
    } catch (err) {
      showFormError();
    } finally {
      if (requestTimeout) clearTimeout(requestTimeout);
      setLoading(false);
    }
  });
