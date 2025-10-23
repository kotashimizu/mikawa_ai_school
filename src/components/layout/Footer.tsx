'use client';

import NextLink from 'next/link';
import { ArrowUpIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { supportLinks } from '@/lib/constants/navigation';

export function Footer() {
  return (
    <footer className="site-footer bg-[var(--color-bg-dark)] text-white py-12 md:py-20 px-0">
      <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-[var(--container-max)] mx-auto mb-12 md:mb-16 px-6">
        {/* TOPへ戻るボタン */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top inline-flex flex-col items-center gap-2 py-6 px-4 bg-white text-[var(--color-primary)] rounded-lg font-bold cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
        >
          <span>TOP</span>
          <ArrowUpIcon className="w-5 h-5" />
        </button>

        {/* お問い合わせ */}
        <div className="footer-contact">
          <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
          <NextLink
            href="mailto:info@ichi-company.net"
            className="contact-email inline-flex items-center gap-2 text-lg font-bold text-[var(--color-accent)] mb-4"
          >
            <EnvelopeIcon className="w-5 h-5" />
            info@ichi-company.net
          </NextLink>
          <p className="text-sm text-white/70">運営に関するお問い合わせはメールでご連絡ください</p>
        </div>

        {/* クイックリンク */}
        <div className="footer-quick-links flex flex-col gap-4">
          {supportLinks.slice(0, 2).map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="quick-link flex items-center justify-between py-3 px-4 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1"
            >
              <span>{link.label}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </NextLink>
          ))}
        </div>
      </div>

      {/* フッターナビゲーション */}
      <div className="footer-nav grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[var(--container-max)] mx-auto mb-8 md:mb-12 px-6 pt-8 md:pt-12 border-t border-white/20">
        <div className="footer-nav-column">
          <h4 className="text-lg font-bold mb-4 text-[var(--color-secondary)]">スクール情報</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/#about" className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
                スクール紹介
              </a>
            </li>
            <li>
              <a href="/principal" className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
                校長紹介
              </a>
            </li>
            <li>
              <a href="/#programs" className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
                学び方
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-nav-column">
          <h4 className="text-lg font-bold mb-4 text-[var(--color-secondary)]">サポート</h4>
          <ul className="flex flex-col gap-2">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-white/80 transition-colors hover:text-white hover:underline inline-flex items-center gap-1"
                >
                  {link.label}
                  {link.external && <ArrowTopRightOnSquareIcon className="w-3 h-3" />}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-nav-column">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/events" className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
                イベント一覧
              </a>
            </li>
            <li>
              <a href="/#news" className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
                お知らせ
              </a>
            </li>
            <li>
              <a
                href="https://note.com/shimizu_ai_ichi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 transition-colors hover:text-white hover:underline inline-flex items-center gap-1"
              >
                note
                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* フッターボトム */}
      <div className="footer-bottom text-center pt-6 md:pt-8 px-6 border-t border-white/20 max-w-[var(--container-max)] mx-auto">
        <p className="text-xs md:text-sm text-white/60">© {new Date().getFullYear()} 合同会社ICHI. / Mikawa AI School</p>
      </div>
    </footer>
  );
}
