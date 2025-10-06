import Link from 'next/link';
import { recommendedInfo } from '@/lib/content/static-content';

export function SessionsShowcaseSection() {
  return (
    <section className="section-split section-split--warm" id="sessions">
      <div className="section-container">
        <div className="section-card space-y-6">
          <div className="section-header">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Pick Up</p>
            <h2 className="section-heading">今月のおすすめレクチャー</h2>
            <p className="section-subheading">
              気軽に参加できるオンライン会から、ちいさな勉強会まで。少人数ならではの対話を楽しみながらAIを試してみましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recommendedInfo.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_12px_24px_rgba(15,25,55,0.06)]"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
                <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {item.action}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
