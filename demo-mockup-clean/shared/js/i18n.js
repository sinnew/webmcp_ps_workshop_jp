/**
 * Modern Web Guidance - Reliable Bilingual Engine (Partner Hub Aligned)
 * Defaults to Japanese (ja), toggles to English (en)
 */
(function() {
  const STORAGE_KEY = 'preferred_language';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'ja';

  function t(ja, en) {
    return currentLang === 'en' ? en : ja;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Could not save language preference', e);
    }
    document.documentElement.lang = lang;

    // 1. Update elements with data-ja and data-en (including INPUT and TEXTAREA placeholders)
    document.querySelectorAll('[data-ja][data-en]').forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (val !== null) {
        if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });

    // 2. Update segmented pill language toggle buttons
    document.querySelectorAll('.lang-toggle-btn, .lang-switcher, #lang-toggle-btn').forEach(btn => {
      if (lang === 'ja') {
        btn.innerHTML = '<span class="lang-active">JP</span><span class="lang-inactive">EN</span>';
      } else {
        btn.innerHTML = '<span class="lang-inactive">JP</span><span class="lang-active">EN</span>';
      }
    });

    // Dispatch event for custom dynamic components
    window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang } }));
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'ja' ? 'en' : 'ja';
    applyLanguage(nextLang);
  }

  function init() {
    applyLanguage(currentLang);
    document.querySelectorAll('.lang-toggle-btn, .lang-switcher, #lang-toggle-btn').forEach(btn => {
      btn.onclick = toggleLanguage;
    });
  }

  // Handle immediate run + DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  const i18nApi = {
    getLang: () => currentLang,
    t,
    toggleLanguage,
    applyLanguage,
    setLang: applyLanguage
  };

  window.i18n = i18nApi;
  window.I18N = i18nApi;
})();
