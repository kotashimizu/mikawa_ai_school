'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { principalProfile } from '@/lib/content/static-content';

export function PrincipalIntroSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F0F1F3]">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-[clamp(24px,6vw,48px)] md:text-5xl font-bold text-[var(--color-primary)] mb-4 px-4 leading-tight">
            学長からの<wbr />メッセージ
          </h2>
        </div>

        {/* コンテンツ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <div className="grid md:grid-cols-[300px_1fr] gap-8 p-8 md:p-12">
            {/* 左側：写真 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-[3/4] overflow-hidden rounded-2xl shadow-lg mb-4">
                <Image
                  src="/images/principal-kota.png"
                  alt={principalProfile.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 300px"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">
                  {principalProfile.name}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  みかわAI学校 学長
                  <br />
                  合同会社ICHI 代表
                </p>
              </div>
            </div>

            {/* 右側：メッセージ */}
            <div className="flex flex-col justify-center space-y-6">
              {/* メインメッセージ */}
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4">
                  「三河からAIを使いこなせる人を増やしたい」
                </h4>
                <p className="text-base text-[var(--color-text)] leading-relaxed">
                  {principalProfile.introduction}
                </p>
              </div>

              {/* 経歴ハイライト */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  2023年、「AIの民主化」を理念に合同会社ICHIを設立。延べ50名以上の医療従事者・事業者にAI活用を指導し、参加者満足度100%を実現。
                </p>
              </div>

              {/* 詳細リンク */}
              <Link
                href="/principal"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[#15395A] font-bold transition-colors duration-300 self-start"
              >
                <span>詳しいプロフィールを見る</span>
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
