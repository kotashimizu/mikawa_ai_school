import Link from 'next/link';

/**
 * 特徴ページが見つからない場合の404ページ
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          ページが見つかりません
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/#about"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-3 text-base font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10"
          >
            特徴一覧を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
