import Link from 'next/link';
import { highlightedTopics } from '@/lib/content/static-content';

export function HighlightsSection() {
  return (
    <section className="bg-white">
      <div className="section-container gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">TO YOU</p>
          <h2 className="section-heading">あなたへおすすめのプログラム</h2>
          <p className="section-subheading">
            目的や関心に合わせて選べるプログラムをピックアップ。初心者から専門領域まで幅広く対応します。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlightedTopics.map((topic) => (
            <article
              key={topic.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex h-full flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                  {topic.label}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                <p className="text-sm text-slate-600">{topic.description}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
                  <Link href={topic.href} className="inline-flex items-center gap-2">
                    {topic.linkText}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
