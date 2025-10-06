import Link from 'next/link';
import { learningPrograms } from '@/lib/content/static-content';

export function LearningStylesSection() {
  return (
    <section className="section-split section-split--cool" id="programs">
      <div className="section-container">
        <div className="section-card space-y-6">
          <div className="section-header">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Programs</p>
            <h2 className="section-heading">選べるふたつの学び方</h2>
            <p className="section-subheading">
              みんなで集まって試す日も、画面越しにゆったり学ぶ日も。都合に合わせて参加できるプログラムをご用意しています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {learningPrograms.map((program) => (
              <article
                key={program.id}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-6 text-left shadow-[0_12px_24px_rgba(15,25,55,0.06)]"
              >
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="text-sm text-slate-500">{program.body}</p>
                <div className="space-y-1 text-sm text-slate-600">
                  {program.details.map((detail) => (
                    <p key={detail}>・{detail}</p>
                  ))}
                </div>
                <Link href={program.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  参加方法を確認する
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
