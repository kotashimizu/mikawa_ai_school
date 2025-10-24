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
      <div className="container mx-auto px-6 sm:px-10 max-w-[900px]">
        {/* ヘッダー */}
        <header className="text-center mb-16">
          <h1 className="text-[clamp(48px,8vw,80px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            EVENTS
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            みかわAI学校では、中小企業・医療・福祉事業所向けのAI活用セミナーや勉強会を開催しています。
          </p>
        </header>

        {/* 開催予定のイベント */}
        <section className="mb-12">
          <h2 className="text-[clamp(24px,6vw,36px)] font-bold text-[var(--color-primary)] mb-8 text-center">
            開催予定のイベント
          </h2>
          {events.length > 0 ? (
            <div className="space-y-6">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="rounded-2xl border border-slate-200/70 bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="p-6">
                      <div className="flex flex-col h-full">
                        {/* ヘッダー情報 */}
                        <div className="flex items-center gap-3 flex-wrap mb-3">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {event.category}
                          </span>
                          <time className="text-sm font-medium text-slate-500">
                            {event.displayDate}
                            {event.time && ` ${event.time}`}
                          </time>
                        </div>

                        {/* タイトル */}
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                          {event.title}
                        </h3>

                        {/* サブタイトル */}
                        {event.subtitle && (
                          <p className="text-sm text-[var(--color-primary)] font-medium mb-3 line-clamp-1">
                            {event.subtitle}
                          </p>
                        )}

                        {/* 概要 */}
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        {/* 開催情報 */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 mb-4">
                          {event.venue && (
                            <div className="flex items-center gap-1">
                              <span className="font-semibold">会場：</span>
                              <span>{event.venue}</span>
                            </div>
                          )}
                          {event.capacity && (
                            <div className="flex items-center gap-1">
                              <span className="font-semibold">定員：</span>
                              <span>{event.capacity}</span>
                            </div>
                          )}
                          {event.fee && (
                            <div className="flex items-center gap-1">
                              <span className="font-semibold">参加費：</span>
                              <span className="font-bold text-[var(--color-accent)]">{event.fee}</span>
                            </div>
                          )}
                        </div>

                        {/* ボタン */}
                        <div className="mt-auto">
                          <Link
                            href={event.link}
                            {...(event.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15395A]"
                          >
                            詳細を見る{event.link.startsWith('http') ? '・申し込む' : ''}
                            <span aria-hidden>{event.link.startsWith('http') ? '↗' : '→'}</span>
                          </Link>
                        </div>
                      </div>
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
        </section>

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
