document.addEventListener('DOMContentLoaded', () => {
  // ヘッダーのスクロールクラス切り替え
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

  // トップに戻るボタンの表示切り替え
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
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

  //全画面ハンバーガーメニュー
  const fullscreenNav = document.getElementById('fullscreen-nav');
  const closeNav = document.getElementById('close-nav');

  if (hamburger && fullscreenNav && closeNav) {
    hamburger.addEventListener('click', () => {
      document.body.classList.add('nav-open');
    });

    closeNav.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  }

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

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1280) {
      document.body.classList.remove('nav-open');
      hamburger.style.display = 'none';
      closeNav.style.display = 'none';
    } else {
      hamburger.style.display = 'flex';
    }
  });

   // Q&Aアコーディオンの開閉処理
  const qaItems = document.querySelectorAll('.qa-item');
  qaItems.forEach(item => {
    const question = item.querySelector('.qa-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});