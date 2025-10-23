'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { learningPrograms } from '@/lib/content/static-content';

export function ProgramsSection() {
  return (
    <section className="py-20 md:py-32 bg-white" id="programs">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            あなたに合った学び方を見つけよう
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            レベルや目的に合わせて3つのプログラムをご用意。<br />
            まずは無料のプログラムで、AIの世界に触れてみませんか？
          </p>
        </div>

        {/* プログラムカード */}
        <div className="grid gap-8 md:grid-cols-3">
          {learningPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--color-accent)] cursor-pointer"
            >
              {/* バッジ */}
              {program.badge && (
                <div className="bg-[var(--color-accent)] text-white text-base md:text-lg font-bold px-6 py-3 text-center">
                  {program.badge}
                </div>
              )}

              {/* カード内容 */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-4">{program.subtitle}</p>

                {/* 簡潔な説明 */}
                <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">{program.body}</p>

                {/* こんな方に */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--color-primary)] mb-2">こんな方に</h4>
                  <ul className="space-y-1">
                    {program.target.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-sm text-[var(--color-text)] flex items-start gap-2">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 料金 */}
                {program.price ? (
                  <div className="mb-6 bg-[#F0F1F3] rounded-lg p-4">
                    <h4 className="text-sm font-bold text-[var(--color-primary)] mb-2">料金</h4>
                    <p className="text-sm text-[var(--color-text)]">{program.price.initial}</p>
                    <p className="text-xs text-[var(--color-text-light)] mt-1">
                      ※立ち上げ期の特別価格です
                    </p>
                  </div>
                ) : (
                  <div className="mb-6 bg-[#F0F1F3] rounded-lg p-4">
                    <p className="text-base font-bold text-[var(--color-primary)]">参加費：無料</p>
                  </div>
                )}

                {/* ボタン */}
                <Link
                  href={program.href}
                  className="block text-center py-3 px-6 bg-[var(--color-primary)] hover:bg-[#15395A] text-white rounded-full font-bold text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                >
                  詳しく見る
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
