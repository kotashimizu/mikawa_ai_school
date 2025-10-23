'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const navigationItems = [
  {
    label: 'プログラム',
    href: '/#programs',
    hasSubmenu: true,
    submenu: [
      { label: 'ゆるやかセミナー', href: '/programs/seminar', badge: '無料' },
      { label: 'AIビジネス講座', href: '/programs/business', badge: '初回無料' },
      { label: 'AIスキル講座', href: '/programs/skill', badge: '初回無料' },
    ],
  },
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="site-header fixed top-0 left-0 w-full h-[72px] md:h-[95px] bg-white shadow-[var(--shadow-sm)] z-[1000]">
      <div className="header-container max-w-[var(--container-max)] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <a href="/" className="logo flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <Image
              src="/images/mikawa_logo.png"
              alt="みかわAI学校"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="logo-text-small text-[10px] sm:text-xs text-[var(--color-text-light)] font-normal leading-tight">三河発のAIスクールなら</span>
            <h1 className="logo-text-large text-lg sm:text-xl font-black text-[var(--color-primary)] tracking-[-0.02em] leading-tight">みかわAI学校</h1>
          </div>
        </a>

        {/* PC用ナビゲーション（md以上で表示） */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setOpenSubmenu(item.label)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
                {item.hasSubmenu && (
                  <ChevronDownIcon className="w-4 h-4" />
                )}
              </a>

              {/* サブメニュー */}
              {item.hasSubmenu && openSubmenu === item.label && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="w-56 bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                    {item.submenu?.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-center justify-between px-4 py-3 text-sm text-[var(--color-text)] hover:bg-slate-50 hover:text-[var(--color-primary)] transition-colors"
                      >
                        <span>{subItem.label}</span>
                        {subItem.badge && (
                          <span className="text-xs bg-[var(--color-accent)] text-white px-2 py-1 rounded-full font-bold">
                            {subItem.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
          className="hamburger-menu md:hidden flex flex-col items-center gap-1 bg-[var(--color-primary)] text-white py-2.5 px-4 rounded-full text-[11px] font-bold shadow-[var(--shadow-md)]"
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
          <nav className="drawer-menu fixed top-0 right-0 bottom-0 w-full max-w-[360px] sm:max-w-[400px] bg-white z-[2000] overflow-y-auto transition-transform">
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
                    {item.hasSubmenu ? (
                      <div>
                        <a
                          href={item.href}
                          className="block py-4 text-lg font-medium transition-colors hover:text-[var(--color-primary)]"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                        {/* モバイル用サブメニュー */}
                        <ul className="pl-4 pb-2">
                          {item.submenu?.map((subItem) => (
                            <li key={subItem.href}>
                              <a
                                href={subItem.href}
                                className="flex items-center justify-between py-2 text-base text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                                onClick={() => setIsOpen(false)}
                              >
                                <span>{subItem.label}</span>
                                {subItem.badge && (
                                  <span className="text-xs bg-[var(--color-accent)] text-white px-2 py-1 rounded-full font-bold">
                                    {subItem.badge}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-4 text-lg font-medium transition-colors hover:text-[var(--color-primary)]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
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
