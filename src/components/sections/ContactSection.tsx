import Link from 'next/link';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 id="contact-heading" className="text-[clamp(48px,8vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            CONTACT
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8">お問い合わせ</p>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            まずは気軽にメッセージしてください
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            日時の相談や内容のリクエストなど、ラフなご相談も大歓迎です。折り返しご連絡します。
          </p>
        </div>

        <div className="space-y-10 lg:flex lg:gap-10">
          <div className="flex-1 space-y-4">
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-6 text-sm text-slate-600">
              <p>フォーム準備中のため、メールかSNSでご連絡ください。</p>
              <p className="mt-3 font-semibold text-slate-800">info@ichi-company.net</p>
              <p className="text-xs text-slate-400">※ 1〜2営業日以内にお返事します。</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:info@ichi-company.net"
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
