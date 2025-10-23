import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { UIProviders } from '@/components/providers/ui-providers';
import './globals.css';

// Noto Sans JPフォントの設定
// Next.jsのGoogle Fontsインポート機能を使用
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'みかわAI学校 | 仕事にも暮らしにも効くAIスクール',
  description:
    '三河地域から「実務で使えるAI」を広げる実践スクール。経営者・会社員・地域のみんなが同じスタートで学べる少人数制ハンズオンと公開セミナーを提供します。',
  metadataBase: new URL('https://www.mikawa-ai-school.com'),
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'みかわAI学校 | 仕事にも暮らしにも効くAIスクール',
    description:
      '三河地域から「実務で使えるAI」を広げる実践スクール。優先登録で最新イベント情報を受け取れます。',
    url: 'https://www.mikawa-ai-school.com',
    siteName: 'みかわAI学校',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'みかわAI学校',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'みかわAI学校 | 仕事にも暮らしにも効くAIスクール',
    description:
      '三河地域から「実務で使えるAI」を広げる実践スクール。優先登録で最新イベント情報を受け取れます。',
    images: ['/opengraph-image.png'],
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
    <html lang="ja" className={`${notoSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${notoSans.className} bg-white text-[var(--color-text)] antialiased`}>
        <UIProviders>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </UIProviders>
      </body>
    </html>
  );
}
