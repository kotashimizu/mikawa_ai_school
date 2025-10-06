'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { heroContent } from '@/lib/content/static-content';
import { HeroParticles } from '@/components/sections/HeroParticles';

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
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
    <section id="hero" className="hero-section bg-hero-surface">
      <div className="hero-animated-gradient" aria-hidden />
      <div className="hero-noise" aria-hidden />
      <div className="hero-blob hero-blob--left" aria-hidden />
      <div className="hero-blob hero-blob--right" aria-hidden />
      <HeroParticles />

      <div className="hero-content mx-auto flex min-h-[620px] w-full max-w-content flex-col justify-between px-6 pb-24 pt-28 sm:px-10">
        <div className="hero-watermark" aria-hidden>
          Mikawa AI School
        </div>

        <motion.div
          className="relative z-10 max-w-2xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-kicker" variants={staggerItem}>
            {heroContent.eyebrow}
          </motion.p>
          <motion.h1
            className="hero-heading"
            variants={staggerItem}
          >
            {heroContent.headline}
          </motion.h1>
          <motion.p className="hero-lead" variants={staggerItem}>
            {heroContent.subheading}
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-pill-row"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        >
          <span className="hero-pill">少人数制ハンズオン 先着受付中</span>
          <span className="hero-pill hero-pill--outline">公開セミナー 毎月開催</span>
        </motion.div>
      </div>

      {showAdmissionBanner ? (
        <motion.div
          className="relative z-20 mx-auto -mt-12 w-full max-w-4xl px-6 sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-stretch overflow-hidden rounded-2xl bg-white text-slate-900 shadow-[0_25px_50px_rgba(11,16,34,0.28)]">
            <Link href="#news" className="flex-1 px-6 py-5 sm:flex sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">10月イベント開催案内</p>
                <p className="text-lg font-bold">中小企業経営者向け(10/28)&福祉事業所向け(10/31)セミナー参加登録受付中！</p>
                <p className="text-sm text-slate-500">気になるテーマがあれば、まずは日程をチェックしてみてください。</p>
              </div>
              <span className="mt-4 hidden text-sm font-semibold text-primary sm:inline">詳細を見る →</span>
            </Link>
            <button
              type="button"
              onClick={() => setShowAdmissionBanner(false)}
              className="grid h-full place-items-center border-l border-slate-200 px-4 text-slate-400 transition hover:text-slate-700"
              aria-label="バナーを閉じる"
            >
              ×
            </button>
          </div>
        </motion.div>
      ) : null}

      <div className="relative z-10 mx-auto mt-12 flex w-full max-w-content flex-col items-center gap-4 pb-16 text-slate-500">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase"
        >
          <Link href="#news" className="flex flex-col items-center gap-2">
            <span>みかわAI学校からのお知らせ</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
              ↓
            </span>
          </Link>
        </motion.div>
        <motion.div
          className="relative mt-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#f1222e] to-[#a6082a] p-[1px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="#contact"
            className="flex items-center justify-between gap-4 rounded-[18px] bg-[#cf112d] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(207,17,45,0.4)]"
          >
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">24時間いつでも</span>
              <span className="text-base font-bold">オンライン個別相談（録画コンテンツ付き）はこちら</span>
            </div>
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
