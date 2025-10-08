import Link from 'next/link';
import type { Metadata } from 'next';
import eventsData from '@/lib/content/events.json';
import type { Event } from '@/lib/types/events';

export const metadata: Metadata = {
  title: 'イベント情報 | みかわAI学校',
  description: 'みかわAI学校の最新イベント・セミナー・勉強会のスケジュールです。',
};

export default function EventsPage() {
  // イベントデータを取得して日付順にソート
  const events = (eventsData.events as Event[])
    .filter((event) => event.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
        {/* ヘッダー */}
        <header className="text-center mb-16">
          <h1 className="text-[clamp(48px,8vw,80px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            EVENTS
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            みかわAI学校では、中小企業・医療・福祉事業所向けのAI活用セミナーや勉強会を開催しています。
          </p>
        </header>

        {/* イベントリスト */}
        {events.length > 0 ? (
          <div className="space-y-6 mb-12">
            {events.map((event) => (
              <article
                key={event.id}
                className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.08)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {event.category}
                      </span>
                      <time className="text-sm font-medium text-slate-500">
                        {event.displayDate}
                        {event.time && ` ${event.time}`}
                      </time>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900">{event.title}</h2>
                    <p className="text-sm text-slate-600">{event.description}</p>
                  </div>
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-0.5"
                  >
                    詳細を見る
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="text-6xl mb-6">📅</div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
              現在、開催予定のイベントはありません
            </h3>
            <p className="text-base text-[var(--color-text)]">
              新しいイベントが決まり次第、こちらに掲載いたします。
            </p>
          </div>
        )}

        {/* お問い合わせCTA */}
        <div className="bg-[#F8F9FA] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
            企業様向けのカスタム研修も承ります
          </h3>
          <p className="text-base text-[var(--color-text)] mb-6">
            掲載されていないテーマでも開催可能です。<br />
            お気軽にご相談ください。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-bold text-lg shadow-[var(--shadow-md)] transition-all hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
          >
            <span>お問い合わせはこちら</span>
            <span>→</span>
          </Link>
        </div>

        {/* トップに戻る */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-[var(--color-text)] rounded-full font-bold text-lg transition-all hover:bg-gray-200"
          >
            <span>←</span>
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
