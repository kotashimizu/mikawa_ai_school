'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
  };
  direction: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: direction }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
      }}
      className="feature-card group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-50`} />
      
      <div className="relative grid md:grid-cols-[200px_1fr] min-h-[280px]">
        {/* 左側：番号と画像 */}
        <div className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm">
          <div className="text-[80px] md:text-[100px] font-black text-[var(--color-primary)]/20 leading-none mb-4">
            {feature.number}
          </div>
          <div className="text-6xl md:text-7xl opacity-80">
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
        </div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const features = [
    {
      number: '01',
      title: 'ロケーションフリー',
      description: '授業は動画配信だから、スマホがあれば、',
      highlight: '24時間どこでも大学に。',
      image: '📱',
      bgColor: 'from-blue-50 to-indigo-50',
    },
    {
      number: '02',
      title: 'タイムフリー',
      description: '1回約15分の講義動画だから、忙しくてもスキマ時間で学習できる。',
      highlight: '',
      image: '⏰',
      bgColor: 'from-amber-50 to-yellow-50',
    },
    {
      number: '03',
      title: '学びやすい学費設定',
      description: '国立大学と比べてほぼ同じ安い費用設定。',
      highlight: '初年度学費は約29万円から。',
      image: '💰',
      bgColor: 'from-slate-50 to-gray-50',
    },
    {
      number: '04',
      title: '選べる入学形態',
      description: '専門学校・短大・大学等を卒業していれば、',
      highlight: '2年次・3年次編入学も可能。',
      image: '📚',
      bgColor: 'from-teal-50 to-cyan-50',
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
            すべての人に学びを開放する
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            みかわAI学校では、「すべての人に、学びを開放する」という理念のもと、誰もが続けられる仕組みを整えています
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

        {/* 大学紹介ボタン */}
        <div className="text-center mt-16">
          <a
            href="#programs"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-bold text-lg shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:translate-y-[-2px] transition-all duration-300"
          >
            <span>スクール紹介</span>
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
