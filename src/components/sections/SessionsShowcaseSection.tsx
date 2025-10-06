'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { recommendedInfo } from '@/lib/content/static-content';

// モック画像（4:3比率のプレースホルダー）
const mockImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', // セミナー
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop', // 勉強会
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop', // 相談
];

export function SessionsShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-20 md:py-32 bg-[#F8F9FA]" id="sessions">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(48px,8vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            PICK UP
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8">あなたへおすすめの情報</p>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            今すぐ始められる学びの機会
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            気軽に参加できるオンライン会から、ちいさな勉強会まで。少人数ならではの対話を楽しみながらAIを試してみましょう。
          </p>
        </div>

        {/* 背景の角丸グレーボックス */}
        <div ref={ref} className="bg-[#E8E9EB] rounded-[32px] p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {recommendedInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link
                  href={item.href}
                  className="block group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-4px]"
                >
                {/* 画像部分（4:3比率） */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <Image
                    src={mockImages[index]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* テキスト部分 */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-3 transition-all">
                    {item.action}
                    <span className="text-base">→</span>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
