import Link from 'next/link';
import { newsList } from '@/lib/content/static-content';

export function NewsSection() {
  return (
    <section id="news" className="section-split section-split--cool" aria-labelledby="news-heading">
      <div className="section-container">
        <div className="section-card space-y-6">
          <div className="section-header">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">News</p>
            <h2 id="news-heading" className="section-heading">
              最近のゆるっとニュース
            </h2>
            <p className="section-subheading">
              次の開催予定や、地域での活動の様子をこまめに更新しています。
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_40px_rgba(15,25,55,0.08)]">
            <table className="w-full text-left text-sm text-slate-600">
              <tbody>
                {newsList.map((news) => (
                  <tr key={news.id} className="border-b border-slate-200/80 last:border-none">
                    <td className="px-6 py-4 align-top text-slate-400">{news.date}</td>
                    <td className="px-6 py-4 align-top">
                      <span className="mr-3 inline-flex items-center rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {news.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 align-top text-slate-700">
                      <Link href={news.href} className="transition hover:text-primary">
                        {news.title}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
