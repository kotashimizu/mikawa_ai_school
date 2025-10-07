'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

// 個別カードコンポーネント
function FeatureCard({ 
  feature, 
  direction, 
  delay 
}: { 
  feature: {
    number: string;
    title: string;
    description: string;
    highlight: string;
    image: string;
    bgColor: string;
    slug: string; // 詳細ページへのリンク用
  };
  direction: number;
  delay: number;
}) {
  const ref = useRef(null);
  // once: true で一度表示したら消えない
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Link href={`/features/${feature.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 1, scale: 1, x: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1], // easeOutBack（内側に寄る動き）
        }}
        className="feature-card group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-50`} />
        
        <div className="relative grid md:grid-cols-[200px_1fr] min-h-[280px]">
          {/* 左側：番号と画像 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm">
            <div className="text-[80px] md:text-[100px] font-black text-[var(--color-primary)]/20 leading-none mb-4">
              {feature.number}
            </div>
            <div className="text-6xl md:text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">
              {feature.image}
            </div>
          </div>

          {/* 右側：テキスト */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <h4 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4">
              {feature.title}
            </h4>
            <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed">
              {feature.description}
              {feature.highlight && (
                <>
                  <br />
                  <span className="font-bold text-[var(--color-accent)]">
                    {feature.highlight}
                  </span>
                </>
              )}
            </p>
            {/* 詳細を見るアイコン */}
            <div className="mt-4 flex items-center text-[var(--color-primary)] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
              <span>詳しく見る</span>
              <span className="ml-2 text-xl">→</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function AboutSection() {
  const features = [
    {
      number: '01',
      title: '地域で直接学べる',
      description: '講師や仲間と対面で学べる少人数ハンズオンで、',
      highlight: '実務につながるスキルを確実に習得します。',
      image: '👥',
      bgColor: 'from-blue-50 to-indigo-50',
      slug: 'in-person',
    },
    {
      number: '02',
      title: '時間は柔軟に',
      description: '日中・夜間・土日など、地域のニーズに合わせた時間帯で開催できます。',
      highlight: '希望時間はリクエスト可能です。',
      image: '⏰',
      bgColor: 'from-amber-50 to-yellow-50',
      slug: 'flexible-time',
    },
    {
      number: '03',
      title: 'すぐ使える（実務直結）',
      description: '当日配布のテンプレやワークで、',
      highlight: '明日から使えるAIの実践スキルを持ち帰れます。',
      image: '💼',
      bgColor: 'from-slate-50 to-gray-50',
      slug: 'practical',
    },
    {
      number: '04',
      title: '気軽に始められる',
      description: '無料枠や初心者向けの体験回で、',
      highlight: '初めてでも安心して始められます。',
      image: '🚀',
      bgColor: 'from-teal-50 to-cyan-50',
      slug: 'easy-start',
    },
  ];

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(48px,8vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            UNIQUENESS
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8">みかわAI学校の特長</p>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            地域で学べる、実務で使える、誰でも始められる
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            みかわAI学校では、あなたのニーズに合わせた学び方を提供します。対面での実践的なハンズオンから、柔軟な時間設定、すぐに使える実務テンプレまで、初めての方でも安心して学べる環境を整えています。
          </p>
        </div>

        {/* 特徴カード */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const isOdd = index % 2 === 0; // 0,2はtrue（01,03）→左から
            const direction = isOdd ? -100 : 100; // 左から: -100, 右から: 100
            const delay = index * 0.15; // 波型効果: 0s, 0.15s, 0.3s, 0.45s

            return (
              <FeatureCard
                key={feature.number}
                feature={feature}
                direction={direction}
                delay={delay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
