import Link from 'next/link';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-split section-split--warm"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="section-card space-y-10 lg:flex lg:gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
            <h2 id="contact-heading" className="section-heading text-left">
              まずは気軽にメッセージしてください
            </h2>
            <p className="section-subheading text-left">
              日時の相談や内容のリクエストなど、ラフなご相談も大歓迎です。折り返しご連絡します。
            </p>
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-6 text-sm text-slate-600">
              <p>フォーム準備中のため、メールかSNSでご連絡ください。</p>
              <p className="mt-3 font-semibold text-slate-800">info@example.jp</p>
              <p className="text-xs text-slate-400">※ 1〜2営業日以内にお返事します。</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:info@example.jp"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_26px_rgba(44,95,141,0.2)]"
              >
                メールで問い合わせる
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/#news"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700"
              >
                次回イベントを見る
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-primary/10 via-white to-slate-50 p-8 text-sm text-slate-600 shadow-[0_20px_60px_rgba(15,25,55,0.08)]">
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-slate-900">STEP 1.</span> 希望するプログラムと参加人数をお知らせください。
              </li>
              <li>
                <span className="font-semibold text-slate-900">STEP 2.</span> 1営業日以内にヒアリング日程をご案内します。
              </li>
              <li>
                <span className="font-semibold text-slate-900">STEP 3.</span> ヒアリング後、個社に合わせたプログラムをご提案します。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
