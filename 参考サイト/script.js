// ========================================
// グローバル変数とユーティリティ
// ========================================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ========================================
// 背景の動く線パーティクルアニメーション
// ========================================
function initializeHeroParticles() {
  const hero = $('.hero');
  if (!hero) return;
  
  // Canvasを作成
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '3';
  canvas.style.pointerEvents = 'none';
  
  const heroBg = $('.hero-bg');
  if (heroBg) {
    heroBg.appendChild(canvas);
  }
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  
  // Canvasサイズを設定
  function resizeCanvas() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  
  // パーティクルクラス（外から内側に向かう線を表現）
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      // 画面の外周からスタート
      const side = Math.floor(Math.random() * 4); // 0:上, 1:右, 2:下, 3:左
      
      switch(side) {
        case 0: // 上から
          this.x = Math.random() * canvas.width;
          this.y = -20;
          break;
        case 1: // 右から
          this.x = canvas.width + 20;
          this.y = Math.random() * canvas.height;
          break;
        case 2: // 下から
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + 20;
          break;
        case 3: // 左から
          this.x = -20;
          this.y = Math.random() * canvas.height;
          break;
      }
      
      // 中心点を計算
      this.centerX = canvas.width / 2;
      this.centerY = canvas.height / 2;
      
      // 中心に向かう速度ベクトル
      const dx = this.centerX - this.x;
      const dy = this.centerY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      this.vx = (dx / distance) * (Math.random() * 0.5 + 0.3);
      this.vy = (dy / distance) * (Math.random() * 0.5 + 0.3);
      
      this.size = Math.random() * 2 + 1;
      this.opacity = 0;
      this.maxOpacity = Math.random() * 0.4 + 0.2;
      this.life = 0;
      this.maxLife = 300;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      
      // フェードイン・アウト
      if (this.life < 50) {
        this.opacity = (this.life / 50) * this.maxOpacity;
      } else if (this.life > this.maxLife - 50) {
        this.opacity = ((this.maxLife - this.life) / 50) * this.maxOpacity;
      } else {
        this.opacity = this.maxOpacity;
      }
      
      // 寿命が尽きたらリセット
      if (this.life >= this.maxLife) {
        this.reset();
      }
      
      // 中心に近づいたら徐々に減速
      const distToCenter = Math.sqrt(
        Math.pow(this.x - this.centerX, 2) + 
        Math.pow(this.y - this.centerY, 2)
      );
      
      if (distToCenter < 100) {
        this.vx *= 0.98;
        this.vy *= 0.98;
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(44, 95, 141, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  // パーティクルを初期化
  function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // 近くのパーティクル間に線を引く
  function connectParticles() {
    const maxDistance = 150;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(44, 95, 141, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // アニメーションループ
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    connectParticles();
    
    animationId = requestAnimationFrame(animate);
  }
  
  // 初期化と開始
  resizeCanvas();
  initParticles();
  animate();
  
  // ウィンドウリサイズ時
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
  
  // クリーンアップ
  return () => {
    cancelAnimationFrame(animationId);
  };
}

// ========================================
// ハンバーガーメニュー制御
// ========================================
function initializeHamburgerMenu() {
  const menuToggle = $('#menuToggle');
  const drawerMenu = $('#drawerMenu');
  const drawerOverlay = $('#drawerOverlay');
  const drawerClose = $('#drawerClose');
  
  if (!menuToggle || !drawerMenu) return;
  
  // メニューを開く
  function openMenu() {
    drawerMenu.classList.add('open');
    drawerOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  // メニューを閉じる
  function closeMenu() {
    drawerMenu.classList.remove('open');
    drawerOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  // イベントリスナー
  menuToggle.addEventListener('click', openMenu);
  drawerClose?.addEventListener('click', closeMenu);
  drawerOverlay?.addEventListener('click', closeMenu);
  
  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// ========================================
// Swiperカルーセル初期化
// ========================================
function initializeCarousels() {
  // おすすめ情報カルーセル
  if ($('.recommendations-swiper')) {
    new Swiper('.recommendations-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  
  // 学生の声カルーセル
  if ($('.voice-swiper')) {
    new Swiper('.voice-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.voice-swiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.voice-swiper .swiper-button-next',
        prevEl: '.voice-swiper .swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
}

// ========================================
// スクロール関連機能
// ========================================
function initializeScrollFeatures() {
  const scrollTop = $('#scrollTop');
  const fixedCta = $('#fixedCta');
  
  // スクロール位置に応じて要素を表示/非表示
  function handleScroll() {
    const scrollY = window.scrollY;
    const showThreshold = 300;
    
    // TOPへ戻るボタン
    if (scrollTop) {
      if (scrollY > showThreshold) {
        scrollTop.style.opacity = '1';
        scrollTop.style.pointerEvents = 'auto';
      } else {
        scrollTop.style.opacity = '0';
        scrollTop.style.pointerEvents = 'none';
      }
    }
    
    // 固定CTAボタン
    if (fixedCta) {
      if (scrollY > showThreshold) {
        fixedCta.classList.add('show');
      } else {
        fixedCta.classList.remove('show');
      }
    }
  }
  
  // スムーズスクロール
  function smoothScroll(target) {
    const element = $(target);
    if (element) {
      const headerHeight = $('.site-header')?.offsetHeight || 0;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  // TOPへ戻るボタンのクリック
  scrollTop?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // スクロールインジケーターのクリック
  const scrollIndicator = $('.scroll-indicator');
  scrollIndicator?.addEventListener('click', (e) => {
    e.preventDefault();
    const target = scrollIndicator.getAttribute('href');
    smoothScroll(target);
  });
  
  // ページ内リンクのスムーズスクロール
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target !== '#' && $(target)) {
        e.preventDefault();
        smoothScroll(target);
      }
    });
  });
  
  // スクロールイベント
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初期状態を設定
}

// ========================================
// バナー閉じるボタン
// ========================================
function initializeBannerClose() {
  const bannerClose = $('.banner-close');
  const admissionBanner = $('.admission-banner');
  
  if (bannerClose && admissionBanner) {
    bannerClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      admissionBanner.style.animation = 'slideDown 0.3s ease';
      
      setTimeout(() => {
        admissionBanner.style.display = 'none';
      }, 300);
    });
  }
}

// スライドダウンアニメーションを追加
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    to {
      transform: translateX(-50%) translateY(100px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ========================================
// ニュースタブ切り替え
// ========================================
function initializeNewsTabs() {
  const newsTabs = $$('.news-tab');
  
  newsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // すべてのタブから active クラスを削除
      newsTabs.forEach(t => t.classList.remove('active'));
      
      // クリックされたタブに active クラスを追加
      tab.classList.add('active');
      
      // タブに応じてコンテンツを切り替え（実装例）
      const tabName = tab.dataset.tab;
      console.log(`切り替え: ${tabName}`);
      
      // 実際のプロジェクトではここでコンテンツの表示/非表示を制御
      // 例: AJAXでコンテンツを読み込む、DOM操作で表示を切り替える等
    });
  });
}

// ========================================
// 画像遅延読み込み
// ========================================
function initializeLazyLoading() {
  // Intersection Observer APIを使用して画像を遅延読み込み
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // data-src 属性があれば src に設定（実装例）
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
        }
        observer.unobserve(img);
      }
    });
  });
  
  // 遅延読み込み対象の画像を監視
  $$('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========================================
// フェードインアニメーション
// ========================================
function initializeFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // フェードイン対象の要素にスタイルを適用
  $$('.feature-item, .faculty-card, .voice-card, .purpose-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
  });
}

// ========================================
// ローディング完了時のアニメーション
// ========================================
function initializePageLoadAnimation() {
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // ヒーローセクションのアニメーション
    const heroTitle = $('.hero-title');
    const heroLead = $('.hero-lead');
    
    if (heroTitle) {
      setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (heroLead) {
      setTimeout(() => {
        heroLead.style.opacity = '1';
        heroLead.style.transform = 'translateY(0)';
      }, 300);
    }
  });
  
  // 初期スタイル設定
  const heroTitle = $('.hero-title');
  const heroLead = $('.hero-lead');
  
  if (heroTitle) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';
    heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  }
  
  if (heroLead) {
    heroLead.style.opacity = '0';
    heroLead.style.transform = 'translateY(30px)';
    heroLead.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  }
}

// ========================================
// パフォーマンス最適化: デバウンス関数
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// ウィンドウリサイズ時の処理
// ========================================
function initializeResizeHandler() {
  const handleResize = debounce(() => {
    // ウィンドウリサイズ時に必要な処理をここに記述
    console.log('Window resized');
    
    // 例: モバイルメニューが開いている場合は閉じる
    if (window.innerWidth > 768) {
      const drawerMenu = $('#drawerMenu');
      if (drawerMenu?.classList.contains('open')) {
        drawerMenu.classList.remove('open');
        $('#drawerOverlay')?.classList.remove('show');
        document.body.style.overflow = '';
      }
    }
  }, 250);
  
  window.addEventListener('resize', handleResize);
}

// ========================================
// 初期化処理
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('東京通信大学サイト - 初期化開始');
  
  // 各機能を初期化
  initializeHeroParticles(); // 背景の動く線アニメーション
  initializeHamburgerMenu();
  initializeCarousels();
  initializeScrollFeatures();
  initializeBannerClose();
  initializeNewsTabs();
  initializeLazyLoading();
  initializeFadeInAnimations();
  initializePageLoadAnimation();
  initializeResizeHandler();
  
  console.log('東京通信大学サイト - 初期化完了');
});

// ========================================
// エラーハンドリング
// ========================================
window.addEventListener('error', (e) => {
  console.error('グローバルエラー:', e.message);
  // 本番環境では適切なエラーロギングサービスに送信
});

// ========================================
// パフォーマンス計測（開発用）
// ========================================
if (window.performance) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`ページ読み込み時間: ${pageLoadTime}ms`);
    }, 0);
  });
}

