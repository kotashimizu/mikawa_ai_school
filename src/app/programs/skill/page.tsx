'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { skillCourseDetail } from '@/lib/content/static-content';

export default function SkillCoursePage() {
  return (
    <div className="flex flex-col">
      {/* ヒーロー */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#2DD4BF] overflow-hidden">
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
            {/* バッジ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-sm md:text-base font-bold px-6 py-3 rounded-full mb-8 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              初回無料
            </motion.div>

            {/* タイトル */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight"
            >
              {skillCourseDetail.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-teal-100 mb-12"
            >
              {skillCourseDetail.subtitle}
            </motion.p>

            {/* メインコピー */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-[900px] mx-auto mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {skillCourseDetail.hero.headline}
              </h2>
              <p className="text-lg md:text-xl text-teal-50 leading-relaxed">
                {skillCourseDetail.hero.subheadline}
              </p>
            </motion.div>

            {/* CTAボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#schedule"
                className="group inline-flex items-center gap-3 bg-white text-[#0F766E] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>開催予定を見る</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#recommended"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                詳しく見る
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 開催予定 */}
      <section id="schedule" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 text-center">
              開催予定
            </h2>
            <p className="text-base text-[var(--color-text)] mb-12 text-center">
              以下の日程で開催を予定しています。お気軽にお申し込みください。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCourseDetail.upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-teal-100 hover:border-teal-300 transition-colors duration-300"
                >
                  {/* ステータスバッジ */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full ${
                      event.status === '申込締切' ? 'bg-gray-400' : 'bg-[var(--color-accent)]'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-sm text-[var(--color-text-light)]">{event.capacity}</span>
                  </div>

                  {/* イベント名 */}
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {event.title}
                  </h3>

                  {/* 日時・場所 */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                      <CalendarIcon className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                      <span>{event.date} {event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                      <MapPinIcon className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* ボタン */}
                  <div className="flex flex-col gap-3">
                    {event.status === '申込締切' ? (
                      <>
                        {(event as any).detailUrl && (
                          <Link
                            href={(event as any).detailUrl}
                            className="block text-center py-3 px-6 bg-[#0F766E] hover:bg-[#0D5E58] text-white rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            詳細を見る
                          </Link>
                        )}
                        <span className="block text-center py-3 px-6 bg-gray-100 text-gray-500 rounded-full font-bold text-sm cursor-not-allowed">
                          受付終了しました
                        </span>
                      </>
                    ) : (
                      <a
                        href="https://www.instagram.com/shimizu_ai_navi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center py-3 px-6 bg-[#0F766E] hover:bg-[#0D5E58] text-white rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        お申し込みはこちら
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section id="recommended" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10 text-center">
              こんな方におすすめ
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {skillCourseDetail.recommended.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-teal-50 to-white rounded-xl p-5 border border-teal-100 shadow-sm text-base text-[var(--color-text)]"
                >
                  <CheckIcon className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 講座の特徴 */}
      <section className="py-20 md:py-32 bg-[#F0F1F3]">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
            講座の特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCourseDetail.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="text-5xl font-black text-[var(--color-accent)] mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-[var(--color-text)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* テーマ一覧 */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
            学べるテーマ
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {skillCourseDetail.themes.map((theme, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                >
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text)]">{theme.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 進め方 */}
      <section className="py-20 md:py-32 bg-[#F0F1F3]">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
            進め方
          </h2>

          {/* 初回 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-primary/10 to-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <span className="inline-block bg-[var(--color-accent)] text-white text-sm font-bold px-4 py-2 rounded-full w-fit">
                  無料
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                  {skillCourseDetail.process.initial.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-light)] mb-6">
                {skillCourseDetail.process.initial.note}
              </p>
              <p className="text-base text-[var(--color-text)] mb-6">
                {skillCourseDetail.process.initial.description}
              </p>

              {/* テーマ選択 */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-bold text-[var(--color-primary)] mb-4">選べるテーマ</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {skillCourseDetail.process.initial.themes.map((theme, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                      <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 当日の流れ */}
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-[var(--color-primary)] mb-4">
                  {skillCourseDetail.process.initial.example.title}
                </h4>
                <div className="space-y-3">
                  {skillCourseDetail.process.initial.example.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <p className="text-sm text-[var(--color-text)]">{step.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2回目以降 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-primary">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4">
                {skillCourseDetail.process.recurring.title}
              </h3>
              <p className="text-sm text-[var(--color-text-light)] mb-6">
                {skillCourseDetail.process.recurring.note}
              </p>
              <p className="text-base text-[var(--color-text)] mb-6">
                {skillCourseDetail.process.recurring.description}
              </p>
              <ul className="space-y-3">
                {skillCourseDetail.process.recurring.support.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-[var(--color-text)]">
                    <span className="text-[var(--color-accent)] text-xl flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
            料金
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">初回</h3>
                <p className="text-3xl md:text-4xl font-black text-[var(--color-accent)]">
                  {skillCourseDetail.pricing.initial}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">2回目以降</h3>
                <p className="text-3xl md:text-4xl font-black text-[var(--color-primary)]">
                  {skillCourseDetail.pricing.recurring}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">お得なパック</h3>
                <p className="text-3xl md:text-4xl font-black text-[var(--color-primary)]">
                  {skillCourseDetail.pricing.package}
                </p>
              </div>
            </div>
            <div className="border-t pt-6 space-y-2">
              <p className="text-sm text-[var(--color-text-light)]">
                {skillCourseDetail.pricing.note}
              </p>
              <p className="text-sm text-[var(--color-text-light)]">
                {skillCourseDetail.pricing.corporate}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 得られる成果 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10 text-center">
            得られる成果
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {skillCourseDetail.outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border-2 border-[var(--color-accent)]/20 shadow-sm text-base text-[var(--color-text)] hover:border-[var(--color-accent)]/40 transition-colors duration-300"
                >
                  <CheckIcon className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </motion.li>
              ))}
            </ul>

            {/* 活用例 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-teal-100">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                こんな活用ができます
              </h3>
              <p className="text-base text-[var(--color-text)]">{skillCourseDetail.usage}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* お申し込み */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-white to-slate-50">
        <div className="container mx-auto px-6 sm:px-10 max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              まずは無料体験から始めましょう
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text)] mb-10">
              Instagram/Facebookからお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://www.instagram.com/shimizu_ai_navi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-4 text-base font-semibold text-white shadow-[0_16px_26px_rgba(219,39,119,0.3)] hover:shadow-[0_20px_30px_rgba(219,39,119,0.4)] transition-all duration-300"
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
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1877F2] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_26px_rgba(24,119,242,0.3)] hover:shadow-[0_20px_30px_rgba(24,119,242,0.4)] transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebookから問い合わせ
              </Link>
            </div>

            {/* 他のプログラムへのリンク */}
            <div className="border-t pt-10">
              <p className="text-base text-[var(--color-text)] mb-4">
                他のプログラムも見てみる
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
