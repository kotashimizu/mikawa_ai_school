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
    <section className="hero relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] overflow-hidden mt-[95px]">
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
      <div className="hero-watermark absolute bottom-[10%] left-1/2 -translate-x-1/2 text-[clamp(40px,8vw,120px)] font-black text-[rgba(120,180,120,0.15)] whitespace-nowrap pointer-events-none z-[5] tracking-[0.02em]">
        Mikawa AI School
      </div>

      {/* メインコンテンツ */}
      <div className="hero-content relative z-10 text-left md:text-left px-6 sm:px-10 py-8 md:py-16 max-w-[1200px] mx-auto w-full">
        <motion.h1
          className="hero-title text-[clamp(36px,12vw,96px)] md:text-[clamp(48px,10vw,96px)] font-black text-[#1A1A1A] mb-6 md:mb-8 leading-[1.1] tracking-[-0.02em]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroContent.headline}
        </motion.h1>
        <motion.p
          className="hero-lead text-[clamp(14px,3.5vw,20px)] md:text-[clamp(16px,2.5vw,20px)] text-[var(--color-text)] leading-[1.8] md:leading-[1.9] max-w-full md:max-w-[700px] font-normal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          {heroContent.subheading}
        </motion.p>
      </div>

      {/* お知らせバナー */}
      {showAdmissionBanner && (
        <motion.div
          className="admission-banner absolute bottom-[60px] md:bottom-[80px] left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[800px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.15)] rounded-2xl md:rounded-3xl z-20 overflow-hidden"
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
          <div className="banner-link grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-0 md:gap-6 p-0 bg-white relative">
            <Link href="#news" className="contents">
              <div className="banner-date text-sm md:text-base font-bold text-[#333] py-4 px-6 md:py-6 md:px-8 bg-[#F0F0F0] text-center md:text-left">
                10月イベント開催案内
              </div>
              <div className="banner-text text-sm md:text-base font-normal text-[var(--color-text)] py-4 px-6 md:py-6 md:px-4 text-center md:text-left">
                中小企業経営者向け(10/28)&福祉事業所向け(10/31)セミナー参加登録受付中！
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowAdmissionBanner(false);
              }}
              className="banner-close absolute top-2 right-2 md:static p-3 md:p-6 text-[var(--color-text-light)] w-10 h-10 md:w-[50px] md:h-[50px] flex items-center justify-center transition-all hover:bg-black/5 rounded-full md:mr-4 text-xl md:text-2xl"
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
