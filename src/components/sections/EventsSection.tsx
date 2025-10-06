import NextLink from 'next/link';
import { upcomingEvents } from '@/lib/content/static-content';

export function EventsSection() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="section-header text-center mb-16">
          <p className="section-label text-sm font-bold tracking-[0.15em] text-[var(--color-secondary)] mb-3">EVENTS</p>
          <h2 className="section-title text-[clamp(24px,4vw,40px)] font-black text-[var(--color-primary)] mb-4">イベント・セミナー</h2>
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed max-w-[800px] mx-auto">
            公開セミナーや少人数ハンズオンなど、最新の開催情報を更新中です。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] mb-12">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="event-card bg-white border border-[var(--color-border)] rounded-xl p-6 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-block px-4 py-1 bg-[var(--color-secondary)] text-white rounded-full text-xs font-bold uppercase tracking-wide">
                    {event.format}
                  </span>
                  <time className="text-sm font-semibold text-[var(--color-text-light)]">{event.date}</time>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{event.title}</h3>
                <p className="text-base text-[var(--color-text)] leading-relaxed mb-4">{event.description}</p>
                <NextLink
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-bold text-sm transition-all hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5"
                >
                  参加申し込み
                  <span>→</span>
                </NextLink>
              </article>
            ))}
          </div>

          <aside className="bg-[var(--color-bg-gray)] border border-[var(--color-border)] rounded-xl p-6 h-fit">
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">Google Calendar</h3>
            <p className="text-sm text-[var(--color-text-light)] mb-4 leading-relaxed">
              公開セミナーの予定をGoogleカレンダーで共有予定です。準備中のためしばらくお待ちください。
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-dashed border-[var(--color-border)] bg-white/60 flex items-center justify-center">
              <p className="text-sm text-[var(--color-text-light)]">Google Calendar 埋め込み準備中</p>
            </div>
          </aside>
        </div>

        <div className="text-center">
          <NextLink
            href="/events"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-bold text-lg shadow-[var(--shadow-md)] transition-all hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
          >
            すべてのイベントを見る
            <span>→</span>
          </NextLink>
        </div>
      </div>
    </section>
  );
}
