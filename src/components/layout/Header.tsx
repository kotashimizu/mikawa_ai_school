'use client';

import { useState } from 'react';

const navigationItems = [
  { label: '大学紹介', href: '/#feature-highlights' },
  { label: '学び方', href: '/#programs' },
  { label: 'キャンパス', href: '/#campus-life' },
  { label: 'イベント', href: '/events' },
  { label: '学長紹介', href: '/principal' },
  { label: '目的から探す', href: '/#goals' },
  { label: 'お知らせ', href: '/#news' },
];

const noteLink = {
  label: 'note',
  href: 'https://note.com/shimizu_ai_ichi',
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-6">
          <a href="#hero" className="flex flex-col text-slate-900">
            <span className="text-xs font-medium tracking-[0.4em] text-slate-400">三河発のAIスクールなら</span>
            <span className="text-xl font-black leading-none tracking-tight sm:text-2xl">みかわAI学校</span>
          </a>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
          <a
            href={noteLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary transition hover:opacity-80"
          >
            {noteLink.label}
            <span aria-hidden>↗</span>
          </a>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">24時間いつでも</span>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm"
          >
            優先登録
            <span aria-hidden>→</span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 shadow-sm transition hover:border-primary hover:text-primary lg:hidden"
          aria-expanded={isOpen}
          aria-label="メニューを開く"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="block h-[2px] w-5 bg-current"></span>
            <span className="block h-[2px] w-5 bg-current"></span>
            <span className="block h-[2px] w-5 bg-current"></span>
          </span>
          MENU
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-slate-200 bg-white/95 px-6 py-6 text-sm text-slate-700 sm:px-10 lg:hidden">
          <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-primary" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href={noteLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary"
            >
              {noteLink.label}
              <span aria-hidden>↗</span>
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 font-semibold text-primary" onClick={() => setIsOpen(false)}>
              優先登録
              <span aria-hidden>→</span>
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
