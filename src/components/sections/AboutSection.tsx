'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { UsersIcon, ClockIcon, BriefcaseIcon, RocketLaunchIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
    icon: React.ReactNode;
    bgColor: string;
    slug: string; // 詳細ページへのリンク用
  };
  direction: number;
  delay: number;
}) {
  const slideOffset = direction > 0 ? 40 : -40;

  return (
    <Link href={`/features/${feature.slug}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: slideOffset }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1], // easeOutBack（内側に寄る動き）
        }}
        className="feature-card group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-50`} />
        
        <div className="relative grid min-h-[260px] md:min-h-[280px] md:grid-cols-[minmax(140px,200px)_1fr]">
          {/* 左側：番号とアイコン */}
          <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white/50 backdrop-blur-sm">
            <div className="text-[64px] md:text-[100px] font-black text-[var(--color-primary)]/20 leading-none">
              {feature.number}
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 text-[var(--color-primary)] opacity-80 transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>
          </div>

          {/* 右側：テキスト */}
          <div className="flex flex-col justify-center p-6 md:p-10">
            <h4 className="text-lg md:text-2xl font-bold text-[var(--color-primary)] mb-3 md:mb-4">
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
            <div className="mt-4 flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
              <span>詳しく見る</span>
              <ArrowRightIcon className="w-4 h-4" />
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
      icon: <UsersIcon className="w-full h-full" />,
      bgColor: 'from-blue-50 to-indigo-50',
      slug: 'in-person',
    },
    {
      number: '02',
      title: '時間は柔軟に',
      description: '日中・夜間・土日など、地域のニーズに合わせた時間帯で開催できます。',
      highlight: '希望時間はリクエスト可能です。',
      icon: <ClockIcon className="w-full h-full" />,
      bgColor: 'from-amber-50 to-yellow-50',
      slug: 'flexible-time',
    },
    {
      number: '03',
      title: 'すぐ使える（実務直結）',
      description: '当日配布のテンプレやワークで、',
      highlight: '明日から使えるAIの実践スキルを持ち帰れます。',
      icon: <BriefcaseIcon className="w-full h-full" />,
      bgColor: 'from-slate-50 to-gray-50',
      slug: 'practical',
    },
    {
      number: '04',
      title: '気軽に始められる',
      description: '無料枠や初心者向けの体験回で、',
      highlight: '初めてでも安心して始められます。',
      icon: <RocketLaunchIcon className="w-full h-full" />,
      bgColor: 'from-teal-50 to-cyan-50',
      slug: 'easy-start',
    },
  ];

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(40px,10vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            UNIQUENESS
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8 px-4">
            みかわAI学校の特長
          </p>

          <h3 className="text-[clamp(20px,5vw,36px)] md:text-4xl font-bold text-[var(--color-primary)] mb-6 px-4 leading-tight">
            地域で学べる、実務で使える、<wbr />誰でも始められる
          </h3>
          <p className="text-[15px] md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto px-4">
            みかわAI学校では、<wbr />あなたのニーズに合わせた<wbr />学び方を提供します。<wbr />対面での実践的な<wbr />ハンズオンから、<wbr />柔軟な時間設定、<wbr />すぐに使える<wbr />実務テンプレまで、<wbr />初めての方でも<wbr />安心して学べる<wbr />環境を整えています。
          </p>
        </div>

        {/* 特徴カード */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const isOdd = index % 2 === 0; // 0,2はtrue（01,03）→左から
            const direction = isOdd ? -1 : 1; // 左から: -1, 右から: 1
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
