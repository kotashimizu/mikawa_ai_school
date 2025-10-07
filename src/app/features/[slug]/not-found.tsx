import Link from 'next/link';
import { Button } from '@nextui-org/react';

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button color="primary" size="lg" as={Link} href="/">
            トップページへ戻る
          </Button>
          <Button color="default" variant="bordered" size="lg" as={Link} href="/#about">
            特徴一覧を見る
          </Button>
        </div>
      </div>
    </div>
  );
}

