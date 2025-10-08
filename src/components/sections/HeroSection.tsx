'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { heroContent } from '@/lib/content/static-content';
import { HeroParticles } from '@/components/sections/HeroParticles';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function HeroSection() {
  const [showAdmissionBanner, setShowAdmissionBanner] = useState(true);

  return (
    <section className="hero relative mt-[72px] flex min-h-[80vh] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] pb-24 md:mt-[95px] md:min-h-screen md:items-center md:justify-center md:pb-40">
      {/* 背景装飾 */}
      <div className="hero-bg absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {/* 左上の大きな曲線 */}
        <div className="absolute -top-[10%] -left-[5%] w-[800px] h-[400px] rounded-[50%_50%_50%_30%/60%_60%_40%_40%] bg-gradient-to-br from-[rgba(198,140,198,0.7)] via-[rgba(218,180,218,0.5)] to-[rgba(180,200,200,0.4)] blur-[40px] animate-[floatCurve_20s_ease-in-out_infinite]" />
        {/* 右側の大きな曲線 */}
        <div className="absolute top-[15%] -right-[10%] w-[900px] h-[500px] rounded-[40%_50%_50%_50%/50%_40%_60%_50%] bg-gradient-to-br from-[rgba(200,220,230,0.5)] via-[rgba(220,235,240,0.4)] to-[rgba(180,200,210,0.3)] blur-[50px] animate-[floatCurve_25s_ease-in-out_infinite_reverse]" />
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.3)_0%,transparent_60%)] z-[1]" />
        <HeroParticles />
      </div>

      {/* ウォーターマーク */}
      <div className="hero-watermark pointer-events-none absolute bottom-[12%] left-1/2 hidden -translate-x-1/2 text-[clamp(56px,8vw,120px)] font-black tracking-[0.02em] text-[rgba(120,180,120,0.15)] whitespace-nowrap lg:block">
        Mikawa AI School
      </div>

      {/* メインコンテンツ */}
      <div className="hero-content relative z-10 w-full max-w-[1200px] flex-1 px-6 pt-12 pb-6 text-center sm:px-10 md:flex-none md:py-16 md:text-left">
        <motion.h1
          className="hero-title mb-4 text-[clamp(25px,7vw,72px)] font-black text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] md:mb-6 md:text-[55px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="block space-y-1">
            {heroContent.headline.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </motion.h1>
        <motion.p
          className="hero-lead mx-auto max-w-[720px] text-[clamp(15px,4vw,19px)] text-[var(--color-text)] leading-[1.8] font-normal md:mx-0 md:text-lg md:leading-[1.7]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          <span className="block space-y-2 md:hidden">
            {heroContent.subheading.mobile.map(([first, second]) => {
              const key = `${first}-${second}`;
              return (
                <span key={key} className="block">
                  {first}
                  <br />
                  {second}
                </span>
              );
            })}
          </span>
          <span className="hidden space-y-2 md:block">
            {heroContent.subheading.desktop.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </motion.p>
      </div>

      {/* お知らせバナー */}
      {showAdmissionBanner && (
        <motion.div
          className="admission-banner relative mx-auto w-full max-w-[640px] rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.15)] md:absolute md:bottom-[72px] md:left-1/2 md:mt-0 md:w-[90%] md:max-w-[800px] md:-translate-x-1/2 md:rounded-3xl md:px-0 md:py-0 md:z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
        >
          {/* みかわAI学校からのお知らせ */}
          <div className="banner-header text-center py-3 px-4 border-b border-gray-200 bg-white">
            <p className="text-xs md:text-sm text-[var(--color-text)] font-medium flex items-center justify-center gap-2">
              <span>みかわAI学校からのお知らせ</span>
              <span className="animate-bounce text-base">↓</span>
            </p>
          </div>

          {/* バナー本体 */}
          <div className="banner-link relative grid grid-cols-1 items-center gap-0 bg-white p-0 md:grid-cols-[auto_1fr_auto] md:gap-6">
            <Link href="#news" className="contents">
              <div className="banner-date bg-[#F0F0F0] px-6 py-4 text-center text-sm font-bold text-[#333] md:px-8 md:py-6 md:text-left md:text-base">
                10月イベント開催案内
              </div>
              <div className="banner-text px-6 py-4 text-center text-sm font-normal text-[var(--color-text)] md:px-4 md:py-6 md:text-left md:text-base">
                中小企業経営者向け(10/28)&福祉事業所向け(10/31)セミナー参加登録受付中！
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowAdmissionBanner(false);
              }}
              className="banner-close absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg text-[var(--color-text-light)] transition-all hover:bg-black/5 md:static md:h-[50px] md:w-[50px] md:p-6 md:text-2xl md:mr-4"
              aria-label="閉じる"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
