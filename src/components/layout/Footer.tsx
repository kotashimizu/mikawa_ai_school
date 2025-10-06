import NextLink from 'next/link';
import { SupportIcon } from '@/components/layout/icons';
import { supportLinks } from '@/lib/constants/navigation';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container gap-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg space-y-3">
            <div className="flex items-center gap-2">
              <SupportIcon className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-slate-900">みかわAI学校</span>
            </div>
            <p className="text-sm text-slate-600">
              三河地域から「実務で使えるAI」を広めるスクールです。少人数制ハンズオンと公開セミナーで、現場ですぐに使えるスキルを身につけましょう。
            </p>
            <p className="text-sm text-slate-500">
              運営：合同会社ICHI. ／ 連絡先：
              <NextLink href="mailto:info@example.jp" className="font-medium text-primary">
                info@example.jp
              </NextLink>
            </p>
          </div>
          <nav className="grid grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {supportLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="transition-colors hover:text-primary"
              >
                {link.label}
                {link.external ? <span aria-hidden className="ml-1">↗</span> : null}
              </NextLink>
            ))}
          </nav>
        </div>
        <div className="border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 合同会社ICHI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
