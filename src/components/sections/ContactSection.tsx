import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 id="contact-heading" className="text-[clamp(40px,10vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            CONTACT
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8 px-4">
            お問い合わせ
          </p>

          <h3 className="text-[clamp(20px,5vw,36px)] md:text-4xl font-bold text-[var(--color-primary)] mb-6 px-4 leading-tight">
            まずは気軽に<wbr />お問い合わせください
          </h3>
          <p className="text-[15px] md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto px-4">
            各プログラムへの<wbr />お申し込み、<wbr />ご相談は<br className="hidden sm:block" />
            Instagram/Facebook<wbr />からお気軽にどうぞ。
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col space-y-6">
            {/* SNSボタン */}
            <div className="space-y-3">
              <Link
                href="https://www.instagram.com/shimizu_ai_navi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-4 text-base font-semibold text-white shadow-[0_16px_26px_rgba(219,39,119,0.3)] hover:shadow-[0_20px_30px_rgba(219,39,119,0.4)] transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagramから問い合わせ
              </Link>

              <Link
                href="https://www.facebook.com/effort.is.life/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-[#1877F2] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_26px_rgba(24,119,242,0.3)] hover:shadow-[0_20px_30px_rgba(24,119,242,0.4)] transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebookから問い合わせ
              </Link>
            </div>

            {/* または */}
            <div className="text-center">
              <p className="text-sm text-[var(--color-text-light)]">または</p>
            </div>

            {/* メールボタン */}
            <Link
              href="mailto:info@ichi-company.net"
              className="flex items-center justify-center gap-2 rounded-full bg-white border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <EnvelopeIcon className="w-6 h-6" />
              メールで問い合わせる
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
