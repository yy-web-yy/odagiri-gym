document.addEventListener('DOMContentLoaded', () => {
  setupHeaderScrollEffect();
  setupBackToTopButton();
  setupMobileNav();
  setupFullscreenNav();
  setupQAAccordion();
  setupResponsiveNavToggle();
});

// ------------------ ヘッダーのスクロール切り替え ------------------
function setupHeaderScrollEffect() {
  const header = document.querySelector('.header');
  const trigger = document.querySelector('#trigger');

  if (header && trigger) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(trigger);
  }
}

// ------------------ トップに戻るボタン ------------------
function setupBackToTopButton() {
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 300);
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ------------------ モバイル用ハンバーガーメニュー ------------------
function setupMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  }
}

// ------------------ 全画面ナビゲーションの制御 ------------------
function setupFullscreenNav() {
  const hamburger = document.querySelector('.hamburger');
  const closeNav = document.getElementById('close-nav');
  const fullscreenNav = document.getElementById('fullscreen-nav');

  if (hamburger && closeNav && fullscreenNav) {
    hamburger.addEventListener('click', () => {
      document.body.classList.add('nav-open');
      hamburger.style.display = 'none';
      closeNav.style.display = 'flex';
    });

    closeNav.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      hamburger.style.display = 'flex';
      closeNav.style.display = 'none';
    });
  }
}

// ------------------ ウィンドウリサイズ時のナビ表示制御 ------------------
function setupResponsiveNavToggle() {
  const hamburger = document.querySelector('.hamburger');
  const closeNav = document.getElementById('close-nav');

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1280) {
      document.body.classList.remove('nav-open');
      if (hamburger) hamburger.style.display = 'none';
      if (closeNav) closeNav.style.display = 'none';
    } else {
      if (hamburger) hamburger.style.display = 'flex';
    }
  });
}

// ------------------ Q&Aアコーディオン ------------------
function setupQAAccordion() {
  const questions = document.querySelectorAll('.qa-question');

  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = document.getElementById(btn.getAttribute('aria-controls'));

      btn.setAttribute('aria-expanded', !expanded);
      answer.hidden = expanded;
    });
  });
}
