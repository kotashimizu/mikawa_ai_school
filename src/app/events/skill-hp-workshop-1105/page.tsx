'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function SkillHpWorkshop1105Page() {
  const eventData = {
    title: 'AI初心者のためのホームページ作成講座',
    subtitle: '～Readdyで"自分のサイト"をAIと一緒に作ってみよう～',
    date: '2025年11月5日（火）',
    time: '16:00～18:00',
    location: '小坂井葵風館 会議室2',
    capacity: '最大6名（少人数・先着順）',
    fee: '無料',
    requirements: 'ノートPC（Wi-Fi完備）',
    status: '申込締切',
    bannerImage: '/images/AIセミナーアイキャッチ.png',
    description: 'AIホームページ作成ツール「Readdy（レディ）」を使って、パソコンが苦手な方でも自分のホームページをAIと一緒に作れる体験セミナーを開催します。デザインやコードの知識は一切不要。質問しやすい少人数制（最大6名）で、講師が一人ひとりを丁寧にサポートします。',
    recommended: [
      'AIを使って仕事や活動をもっと広げたい方',
      '自分やお店のホームページをつくってみたい方',
      '専門知識がなくてもAIで制作できる体験をしてみたい方',
    ],
    contents: [
      {
        title: 'AIツール「Readdy」の基本操作',
        description: '直感的なインターフェースで、初めての方でもすぐに使い始められます。',
      },
      {
        title: '実際にAIと一緒にホームページを作る体験',
        description: 'ワークショップ形式で、その場で自分のホームページを作成します。',
      },
      {
        title: '自分の活動や事業に合ったページ構成・デザインの考え方',
        description: '効果的なページ構成やデザインのポイントを学びます。',
      },
    ],
  };

  return (
    <div className="flex flex-col">
      {/* ヒーロー */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#2DD4BF] overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-10 max-w-[1200px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* 戻るリンク */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Link
                href="/programs/skill"
                className="inline-flex items-center gap-2 text-teal-100 hover:text-white transition-colors duration-300"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="text-sm font-medium">AIスキル講座に戻る</span>
              </Link>
            </motion.div>

            {/* ステータスバッジ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gray-500 text-white text-sm md:text-base font-bold px-6 py-3 rounded-full mb-8 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {eventData.status}
            </motion.div>

            {/* タイトル */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight"
            >
              AI初心者のための<br />
              ホームページ作成セミナー
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-teal-100 mb-12"
            >
              {eventData.subtitle}
            </motion.p>

            {/* 開催情報 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white"
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-teal-200" />
                <span className="font-medium">{eventData.date} {eventData.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-teal-200" />
                <span className="font-medium">{eventData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-6 h-6 text-teal-200" />
                <span className="font-medium">{eventData.capacity}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* バナー画像 */}
      {eventData.bannerImage && (
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <img
                src={eventData.bannerImage}
                alt={eventData.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* 説明 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed">
              {eventData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10 text-center">
              こんな方におすすめ
            </h2>
            <ul className="space-y-4">
              {eventData.recommended.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border-2 border-teal-100 shadow-sm text-base md:text-lg text-[var(--color-text)]"
                >
                  <CheckIcon className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* セミナーで学べること */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
              セミナーで学べること
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {eventData.contents.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border border-teal-100 shadow-sm"
                >
                  <div className="text-4xl font-black text-[var(--color-accent)] mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
                    {content.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)]">{content.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 開催概要 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10 text-center">
              開催概要
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-teal-100">
              <dl className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-6 border-b border-gray-200">
                  <dt className="font-bold text-[var(--color-primary)] sm:w-32">日時</dt>
                  <dd className="text-[var(--color-text)]">{eventData.date} {eventData.time}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-6 border-b border-gray-200">
                  <dt className="font-bold text-[var(--color-primary)] sm:w-32">定員</dt>
                  <dd className="text-[var(--color-text)]">{eventData.capacity}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-6 border-b border-gray-200">
                  <dt className="font-bold text-[var(--color-primary)] sm:w-32">会場</dt>
                  <dd className="text-[var(--color-text)]">{eventData.location}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-6 border-b border-gray-200">
                  <dt className="font-bold text-[var(--color-primary)] sm:w-32">持ち物</dt>
                  <dd className="text-[var(--color-text)]">{eventData.requirements}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <dt className="font-bold text-[var(--color-primary)] sm:w-32">参加費</dt>
                  <dd className="text-[var(--color-text)] font-bold text-lg">{eventData.fee}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 締切済み・次回開催案内 */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-white to-slate-50">
        <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-gray-200 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
                このイベントの受付は終了しました
              </h2>
              <p className="text-base md:text-lg text-[var(--color-text)] mb-6">
                たくさんのお申し込みありがとうございました。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-teal-100">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4">
                次回開催について
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed mb-8">
                AIを「難しそう」と感じていた方にも、<br className="hidden sm:block" />
                "これならできる"という感覚を持って帰ってもらえる内容です。<br />
                自分の手でAIとホームページを作る最初の一歩を、ぜひ体験してください。<br /><br />
                次回開催のお知らせやご希望の日程での開催も承っております。<br className="hidden sm:block" />
                お気軽にInstagramのDMでご連絡ください。
              </p>

              <Link
                href="https://www.instagram.com/shimizu_ai_navi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-4 text-base font-semibold text-white shadow-[0_16px_26px_rgba(219,39,119,0.3)] hover:shadow-[0_20px_30px_rgba(219,39,119,0.4)] transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagramで問い合わせる
              </Link>
            </div>

            {/* 他のプログラムへのリンク */}
            <div className="mt-12 pt-8 border-t">
              <p className="text-base text-[var(--color-text)] mb-4">
                他のプログラムも見てみる
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programs/skill"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white border-2 border-primary rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  AIスキル講座に戻る
                </Link>
                <Link
                  href="/programs/business"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white border-2 border-primary rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  AIビジネス講座を見る
                </Link>
                <Link
                  href="/#programs"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white border-2 border-primary rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  全プログラムを見る
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
