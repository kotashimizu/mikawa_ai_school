import Link from 'next/link';
import Image from 'next/image';
import { learningPrograms } from '@/lib/content/static-content';

// プログラムの画像（モック）
const programImages = [
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop', // ハンズオン
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop', // セミナー
];

export function LearningStylesSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F0F1F3]" id="programs">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(48px,8vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            PROGRAMS
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8">みかわAI学校の学び</p>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            社会に必要な学びを開拓する
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            これからの時代に欠かせない「AI活用スキル」と「実践的な知識」を身につける。三河地域から、日本で唯一の実務型AIスクール。今すぐ使える約400のプロンプトを24時間どこにいても学べます。
          </p>
        </div>

        {/* コンテンツ部分 - 左側にテキスト、右側に人物画像 */}
        <div className="grid md:grid-cols-[1fr_400px] gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4">
              選べるふたつの学び方
            </h4>
            <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed">
              みんなで集まって試す日も、画面越しにゆったり学ぶ日も。都合に合わせて参加できるプログラムをご用意しています。
            </p>
          </div>

          {/* 右側の人物画像 */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/principal-kota.png"
              alt="志水康太（学長）"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </div>

        {/* プログラムカード */}
        <div className="grid md:grid-cols-2 gap-8">
          {learningPrograms.map((program, index) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {/* カード画像 */}
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src={programImages[index]}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* カード内容 */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 border-b-2 border-[var(--color-primary)] pb-3">
                  {program.title}
                </h3>
                <p className="text-base text-[var(--color-text)] leading-relaxed mb-6">
                  {program.body}
                </p>

                {/* 詳細リスト */}
                <ul className="space-y-2 mb-6">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                      <span className="text-[var(--color-accent)] mt-1">■</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* ボタン */}
                <Link
                  href={program.href}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-[#6B7280] hover:bg-[#4B5563] text-white rounded-full font-bold text-base transition-all duration-300"
                >
                  <span>{program.title}の詳細</span>
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
