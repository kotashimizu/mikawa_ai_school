import Link from 'next/link';
import type { Metadata } from 'next';
import { upcomingEvents } from '@/lib/content/static-content';

export const metadata: Metadata = {
  title: 'イベント情報 | みかわAI学校',
  description: 'みかわAI学校の最新イベント・レクチャー・相談会のスケジュールです。',
};

export default function EventsPage() {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-12 px-6 sm:px-10">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Events</p>
          <h1 className="text-[clamp(2.2rem,4vw,3rem)] font-bold text-slate-900">これからの開催予定</h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-500 sm:text-base">
            みかわAI学校では、ちいさな勉強会やオンラインセミナーをゆるやかに開催しています。
            気になる会があれば、お気軽にご参加ください。
          </p>
        </header>
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_12px_28px_rgba(16,24,40,0.08)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {event.format}
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900">{event.title}</h2>
                  <p className="text-sm font-medium text-slate-500">{event.date}</p>
                  <p className="text-sm text-slate-600">{event.description}</p>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-0.5"
                >
                  参加希望を伝える
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center text-sm text-slate-600">
          <p>
            掲載されていないテーマでも開催可能です。
            <Link href="/#contact" className="ml-1 font-semibold text-primary">
              ご相談はこちら
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
