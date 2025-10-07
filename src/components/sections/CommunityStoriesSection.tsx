'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// コミュニティプログラムのモック画像
const communityImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', // 初心者向け体験会
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', // ビジネス活用
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop', // オンライン
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop', // 個別相談
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop', // ワークショップ
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop', // 交流会
];

const communityPrograms = [
  {
    id: 'community-1',
    title: 'ちいさな試しを重ねる',
    badge: '体験型',
    description: 'ちょっとした業務や暮らしの場面で、「これならできそう」を見つけて小さく試します。',
    href: '#contact',
  },
  {
    id: 'community-2',
    title: 'だれでもフラットに意見交換',
    badge: '交流型',
    description: '立場に関係なく、気づきを持ち寄りながら「うちならこうかな？」とアイデアを膨らませます。',
    href: '#contact',
  },
  {
    id: 'community-3',
    title: '終わったあともゆるくつながる',
    badge: 'オンライン',
    description: 'オンラインコミュニティで雑談や質問が可能。気になる記事も気軽にシェアできます。',
    href: '#contact',
  },
  {
    id: 'community-4',
    title: '個別相談でじっくり学ぶ',
    badge: '個別対応',
    description: 'あなたの課題に合わせた個別相談。AIの活用方法を一緒に考えます。',
    href: '#contact',
  },
  {
    id: 'community-5',
    title: '実践ワークショップ',
    badge: '実践型',
    description: '実際の業務やプロジェクトにAIを活用する実践的なワークショップを開催します。',
    href: '#programs',
  },
  {
    id: 'community-6',
    title: '地域ネットワーキング',
    badge: 'イベント',
    description: '三河地域のAI活用に関心のある方々と交流し、情報交換できるイベントを定期開催します。',
    href: '#news',
  },
];

export function CommunityStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 md:py-32 bg-[#F5F5F5]" id="community">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(48px,8vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            COMMUNITY
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8">みんなで分かち合う学びの場</p>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            少人数だからできる対話と実践
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            勉強会で生まれた「やってみた」を共有したり、気軽に相談し合えるのも少人数ならではの魅力です。三河地域のみなさんと一緒に、実務で使えるAIスキルを身につけていきましょう。
          </p>
        </div>

        {/* 上部：左側説明 + 右側画像 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="grid md:grid-cols-[1fr_400px] gap-8 md:gap-12">
            {/* 左側：縦線付きボックス */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4">
                みんなで分かち合う学びの場
              </h3>
              <p className="text-sm md:text-base text-[var(--color-text-light)] mb-4">
                取得できる学び：実践的AI活用スキル
              </p>
              <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed mb-6">
                勉強会で生まれた「やってみた」を共有したり、気軽に相談し合えるのも少人数ならではの魅力です。三河地域のみなさんと一緒に、実務で使えるAIスキルを身につけていきましょう。
              </p>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6B7280] hover:bg-[#4B5563] text-white rounded-full font-bold text-base transition-all duration-300"
              >
                <span>コミュニティについて</span>
                <span className="text-xl">→</span>
              </Link>
            </div>

            {/* 右側：画像 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="コミュニティ活動"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold text-[var(--color-primary)]">
                取得できる学び<br />
                <span className="text-xs">（実践的AI活用）</span>
              </div>
            </div>
          </div>
        </div>

        {/* プログラムグリッド（3x2） */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {communityPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 1, rotate: 0, scale: 1 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1], // easeOutBack
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              {/* 画像 */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50">
                <Image
                  src={communityImages[index]}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* 内容 */}
              <div className="p-6">
                <div className="inline-block bg-[#6B7280] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {program.badge}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#6B7280] hover:bg-[#4B5563] text-white rounded-full font-bold text-sm transition-all duration-300"
                >
                  <span>詳細を見る</span>
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
