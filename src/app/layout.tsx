import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { FixedCta } from '@/components/layout/FixedCta';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { UIProviders } from '@/components/providers/ui-providers';
import './globals.css';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'みかわAI学校 | 仕事にも暮らしにも効くAIスクール',
  description:
    '三河地域から「実務で使えるAI」を広げる実践スクール。経営者・会社員・地域のみんなが同じスタートで学べる少人数制ハンズオンと公開セミナーを提供します。',
  metadataBase: new URL('https://mikawa-ai-school.example'),
  openGraph: {
    title: 'みかわAI学校 | 仕事にも暮らしにも効くAIスクール',
    description:
      '三河地域から「実務で使えるAI」を広げる実践スクール。優先登録で最新イベント情報を受け取れます。',
    url: 'https://mikawa-ai-school.example',
    siteName: 'みかわAI学校',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'みかわAI学校 | 仕事にも暮らしにも効くAIスクール',
    description:
      '三河地域から「実務で使えるAI」を広げる実践スクール。優先登録で最新イベント情報を受け取れます。',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable}`} suppressHydrationWarning>
      <body className="bg-surface text-slate-900">
        <UIProviders>
          <Header />
          <main className="min-h-[calc(100vh-320px)] bg-gradient-to-b from-white via-surface/40 to-white">
            {children}
          </main>
          <Footer />
          <FixedCta />
        </UIProviders>
      </body>
    </html>
  );
}
