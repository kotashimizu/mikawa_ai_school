'use client';

import { useState } from 'react';

const navigationItems = [
  { label: 'イベント', href: '/events' },
  { label: '学長紹介', href: '/principal' },
  { label: 'お知らせ', href: '/news' },
];

const noteLink = {
  label: 'note',
  href: 'https://note.com/shimizu_ai_ichi',
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 w-full h-[95px] bg-white shadow-[var(--shadow-sm)] z-[1000]">
      <div className="header-container max-w-[var(--container-max)] mx-auto px-4 h-full flex items-center justify-between">
        <a href="/" className="logo flex flex-col gap-1">
          <span className="logo-text-small text-xs text-[var(--color-text-light)] font-normal">三河発のAIスクールなら</span>
          <h1 className="logo-text-large text-2xl font-black text-[var(--color-primary)] tracking-[-0.02em]">みかわAI学校</h1>
        </a>

        {/* PC用ナビゲーション（md以上で表示） */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={noteLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
          >
            {noteLink.label} ↗
          </a>
        </nav>

        {/* モバイル用ハンバーガーメニューボタン（mdまでで表示） */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="hamburger-menu md:hidden flex flex-col items-center gap-1 bg-[var(--color-primary)] text-white py-3 px-4 rounded-full text-xs font-bold shadow-[var(--shadow-md)]"
          aria-expanded={isOpen}
          aria-label="メニュー"
        >
          <div className="hamburger-icon flex flex-col gap-[3px] w-6">
            <span className="block w-full h-[2px] bg-white rounded-sm transition-all"></span>
            <span className="block w-full h-[2px] bg-white rounded-sm transition-all"></span>
            <span className="block w-full h-[2px] bg-white rounded-sm transition-all"></span>
          </div>
          <span className="menu-text text-[10px] tracking-[0.05em]">MENU</span>
        </button>
      </div>

      {/* ドロワーメニュー */}
      {isOpen && (
        <>
          <div
            className="drawer-overlay fixed top-0 left-0 w-full h-full bg-black/50 z-[1999] transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <nav className="drawer-menu fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-white z-[2000] overflow-y-auto transition-transform">
            <div className="drawer-content py-16 px-6">
              <button
                onClick={() => setIsOpen(false)}
                className="drawer-close absolute top-6 right-6 text-2xl text-[var(--color-text)]"
                aria-label="閉じる"
              >
                ×
              </button>

              <ul className="drawer-nav mb-12">
                {navigationItems.map((item) => (
                  <li key={item.href} className="border-b border-[var(--color-border)]">
                    <a
                      href={item.href}
                      className="block py-4 text-lg font-medium transition-colors hover:text-[var(--color-primary)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="border-b border-[var(--color-border)]">
                  <a
                    href={noteLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 text-lg font-medium transition-colors hover:text-[var(--color-primary)]"
                  >
                    {noteLink.label} ↗
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
