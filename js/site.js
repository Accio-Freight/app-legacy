/* =========================================================
   site.js — motor compartido de tema (claro/oscuro) e idioma (ES/EN)
   Usado por index.html y legal.html.

   Tema: atributo data-theme en <html>, persistido en localStorage
   bajo la clave "theme" ("light" por defecto, como estaba el sitio).
   El valor inicial ya se aplica en un script inline en <head>
   (antes de pintar) para evitar parpadeo; aquí solo sincronizamos
   el botón #themeToggle.

   Idioma: cada página define window.I18N = { es: {...}, en: {...} }
   con claves punteadas (ej. "nav.inicio"). Los elementos marcan:
     - data-i18n="clave"        -> textContent
     - data-i18n-html="clave"   -> innerHTML (solo para texto con <em>/<br> etc.)
     - data-i18n-attr="attr:clave;attr2:clave2" -> atributos (placeholder, aria-label...)
   Persistido en localStorage bajo "lang" ("es" por defecto).
   ========================================================= */
(function () {
  'use strict';

  function initTheme() {
    var btn = document.getElementById('themeToggle');
    var root = document.documentElement;

    function apply(theme) {
      root.setAttribute('data-theme', theme);
      if (btn) {
        btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      }
    }

    apply(root.getAttribute('data-theme') || 'light');

    if (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('theme', next); } catch (e) {}
        apply(next);
      });
    }
  }

  function lookup(key, dict) {
    return key.split('.').reduce(function (acc, part) {
      return (acc && Object.prototype.hasOwnProperty.call(acc, part)) ? acc[part] : undefined;
    }, dict);
  }

  function applyLang(lang) {
    var dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = lookup(el.getAttribute('data-i18n'), dict);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = lookup(el.getAttribute('data-i18n-html'), dict);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var sep = pair.indexOf(':');
        if (sep === -1) return;
        var attr = pair.slice(0, sep).trim();
        var key = pair.slice(sep + 1).trim();
        if (!attr || !key) return;
        var val = lookup(key, dict);
        if (val !== undefined) el.setAttribute(attr, val);
      });
    });

    var langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.setAttribute('data-lang', lang);
  }

  function initLang() {
    var btn = document.getElementById('langToggle');
    var stored = 'es';
    try { stored = localStorage.getItem('lang') || 'es'; } catch (e) {}

    applyLang(stored);

    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('lang') || 'es';
        var next = current === 'es' ? 'en' : 'es';
        try { localStorage.setItem('lang', next); } catch (e) {}
        applyLang(next);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initLang();
  });
})();
