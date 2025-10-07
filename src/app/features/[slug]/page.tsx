import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getFeatureBySlug, getAllFeatureSlugs } from '@/lib/content/features';

/**
 * 動的メタデータの生成
 * SEO対策として各ページのタイトルとdescriptionを設定
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    return {
      title: 'ページが見つかりません',
    };
  }

  return {
    title: `${feature.pageTitle} | みかわAI学校`,
    description: feature.metaDescription,
    openGraph: {
      title: `${feature.pageTitle} | みかわAI学校`,
      description: feature.metaDescription,
      type: 'article',
    },
  };
}

/**
 * 静的パスの生成
 * ビルド時にすべての特徴ページを事前生成
 */
export async function generateStaticParams() {
  const slugs = getAllFeatureSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * 特徴詳細ページコンポーネント
 */
export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = getFeatureBySlug(params.slug);

  // 存在しないスラグの場合は404ページを表示
  if (!feature) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ページヒーロー */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-content">
          {/* パンくずリスト */}
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#about" className="hover:underline">
              特徴
            </Link>
            <span className="mx-2">/</span>
            <span>{feature.shortTitle}</span>
          </nav>

          {/* ページタイトル */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold bg-white/20 px-4 py-1 rounded-full">
              {feature.id}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {feature.shortTitle}
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-95 leading-relaxed max-w-3xl">
            {feature.lead}
          </p>
        </div>
      </section>

      {/* CTAボタンエリア（ページ上部） */}
      <section className="bg-surface py-6 md:py-8 border-b">
        <div className="container mx-auto px-4 max-w-content">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {feature.ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.url || '#contact-form'}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors ${
                  cta.type === 'primary'
                    ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
                    : 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'
                }`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* メインカラム */}
            <div className="lg:col-span-2 space-y-10">
              {/* この特徴のポイント */}
              <ContentBlock title="この特徴のポイント">
                <ul className="space-y-3">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                      <span className="text-base md:text-lg text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </ContentBlock>

              {/* 提供するもの */}
              {feature.deliverables && (
                <ContentBlock title="提供するもの">
                  <ul className="space-y-2">
                    {feature.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span className="text-base md:text-lg text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </ContentBlock>
              )}

              {/* 運用フロー */}
              {feature.workflow && (
                <ContentBlock title="運用フロー">
                  <ol className="space-y-3">
                    {feature.workflow.map((step, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="text-base md:text-lg text-gray-700 mt-1">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </ContentBlock>
              )}

              {/* フォーム項目 */}
              {feature.formFields && (
                <ContentBlock title="入力フォーム項目">
                  <div className="space-y-4">
                    {feature.formFields.map((field, index) => (
                      <div
                        key={index}
                        className="p-4 bg-surface rounded-lg border border-gray-200"
                      >
                        <p className="font-medium text-gray-800 mb-2">{field.label}</p>
                        {field.options && (
                          <ul className="text-sm text-gray-600 space-y-1 ml-4">
                            {field.options.map((option, i) => (
                              <li key={i}>• {option}</li>
                            ))}
                          </ul>
                        )}
                        {field.placeholder && (
                          <p className="text-sm text-gray-500 italic mt-2">
                            {field.placeholder}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </ContentBlock>
              )}

              {/* よくある質問 */}
              {feature.faqs && feature.faqs.length > 0 && (
                <ContentBlock title="よくある質問">
                  <div className="space-y-4">
                    {feature.faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm"
                      >
                        <summary className="cursor-pointer text-base font-semibold text-gray-800 marker:hidden">
                          <span className="inline-flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                              Q
                            </span>
                            {faq.question}
                          </span>
                        </summary>
                        <div className="mt-3 border-t border-dashed border-gray-200 pt-3 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </ContentBlock>
              )}
            </div>

            {/* サイドバー */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* 対象者カード */}
                <InfoCard title="対象者" icon="👥">
                  <p className="text-gray-700 leading-relaxed">{feature.target}</p>
                </InfoCard>

                {/* 開催形式・頻度 */}
                {feature.schedule && (
                  <InfoCard title="開催形式・頻度" icon="📅">
                    <p className="text-gray-700 leading-relaxed">{feature.schedule}</p>
                  </InfoCard>
                )}

                {/* 参加費 */}
                {feature.pricing && (
                  <InfoCard title="参加費" icon="💰">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {feature.pricing}
                    </p>
                  </InfoCard>
                )}

                {/* お問い合わせリンク */}
                <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 p-6 text-center">
                  <p className="text-sm text-gray-700 mb-4">
                    詳しい内容や不明点があればお気軽にお問い合わせください。
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                  >
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ページ下部CTA */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-content text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {feature.shortTitle}で学びを始めませんか？
          </h2>
          <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
            {feature.shortLead}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {feature.ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.url || '#contact-form'}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors ${
                  cta.type === 'primary'
                    ? 'bg-white text-[var(--color-primary)] hover:bg-white/90'
                    : 'border border-white text-white hover:bg-white/10'
                }`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 他の特徴へのリンク */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-content text-center">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
            他の特徴も見てみる
          </h3>
          <Link
            href="/#about"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-3 text-base font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10"
          >
            すべての特徴を見る
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * コンテンツブロック用の共通コンポーネント
 */
function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{title}</h2>
      <div className="mb-6 h-[3px] w-12 bg-[var(--color-primary)] rounded-full" />
      {children}
    </div>
  );
}

/**
 * 情報カード用の共通コンポーネント
 */
function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
      </div>
      {children}
    </div>
  );
}
