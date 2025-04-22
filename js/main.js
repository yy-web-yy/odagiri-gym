document.addEventListener('DOMContentLoaded', () => {
  // ヘッダーのスクロールクラス切り替え
  const header = document.querySelector('.header');
  const trigger = document.querySelector('#trigger');

  if (header && trigger) {
    // IntersectionObserverで切り替え
    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(trigger);
  }

  // トップに戻るボタンの表示切り替え
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ハンバーガーメニューの開閉
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  }
});