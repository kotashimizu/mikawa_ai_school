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
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
            学長からのメッセージ
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
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed mb-4">
                  「三河からAIを使いこなせる人を増やしたい。」
                </p>
                <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed mb-4">
                  そんな想いで、この学校を立ち上げました。
                </p>
                <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed">
                  世代や立場に関係なく、一緒に学んでいきましょう。
                </p>
              </div>

              <Link
                href="/principal"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[#15395A] font-bold transition-colors duration-300"
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
