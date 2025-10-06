import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { principalProfile } from '@/lib/content/static-content';

export const metadata: Metadata = {
  title: '学長紹介 | みかわAI学校',
  description: 'みかわAI学校を主宰する志水康太のプロフィールと想いをご紹介します。',
};

export default function PrincipalPage() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-12 px-6 sm:px-10">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Principal</p>
          <h1 className="text-[clamp(2.2rem,4vw,3rem)] font-bold text-slate-900">志水 康太（しみず こうた）</h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-500 sm:text-base">
            三河のみなさんと一緒に、肩ひじ張らないAI活用を試していく場として「みかわAI学校」を立ち上げました。
            まずは雑談から、気になることを一緒に整理しましょう。
          </p>
        </header>

        {/* 学長の写真 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/principal-kota.png"
              alt="志水康太（学長）"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-start">
          <article className="space-y-6 rounded-3xl border border-slate-200/70 bg-slate-50/70 p-8 text-sm text-slate-600">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">これまでの歩み</h2>
              <p>{principalProfile.story}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">いま大切にしていること</h2>
              <p>{principalProfile.message}</p>
            </div>
          </article>
          <aside className="space-y-6 rounded-3xl border border-slate-200/70 bg-white p-8 text-sm text-slate-600 shadow-[0_12px_24px_rgba(16,24,40,0.08)]">
            <div>
              <h3 className="text-base font-semibold text-slate-900">肩書き</h3>
              <p className="mt-1 text-sm text-slate-500">{principalProfile.title}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">好きなこと</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-500">
                {principalProfile.hobbies.map((hobby) => (
                  <li key={hobby}>・{hobby}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">最近のトピック</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-500">
                {principalProfile.favoriteTopics.map((topic) => (
                  <li key={topic}>・{topic}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">noteで日々の記録を書いています</h3>
              <Link
                href={principalProfile.noteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-primary"
              >
                noteを読む
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </aside>
        </section>
        <section className="rounded-3xl border border-slate-200/70 bg-white p-8 text-sm text-slate-600 shadow-[0_12px_24px_rgba(16,24,40,0.08)]">
          <h2 className="text-xl font-semibold text-slate-900">少人数だからこそできること</h2>
          <p className="mt-2">
            みかわAI学校では、大きなカリキュラムではなく「まずは1時間の体験」「3回シリーズで試してみる」といった、
            身近なステップでAIを取り入れています。参加者のみなさんと雑談しながら、その場でプロンプトを整えたり、
            課題の優先順位を一緒に考えたり。そんな時間を積み重ねることで「自分たちでも使えそう」という実感につながると信じています。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
              雑談を申し込む
              <span aria-hidden>→</span>
            </Link>
            <Link href="/events" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700">
              今後のイベントを見る
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
