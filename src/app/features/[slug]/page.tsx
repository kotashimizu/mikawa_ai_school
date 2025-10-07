import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button, Card, CardBody, Divider, Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';
import {
  getFeatureBySlug,
  getAllFeatureSlugs,
  type FeatureDetail,
} from '@/lib/content/features';

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
              <Button
                key={index}
                color={cta.type === 'primary' ? 'primary' : 'default'}
                variant={cta.type === 'primary' ? 'solid' : 'bordered'}
                size="lg"
                className="font-medium"
                as={Link}
                href={cta.url || '#contact-form'}
              >
                {cta.label}
              </Button>
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
                  <Accordion variant="splitted">
                    {feature.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        title={faq.question}
                        className="text-base md:text-lg font-medium"
                      >
                        <p className="text-gray-700 leading-relaxed pb-4">{faq.answer}</p>
                      </AccordionItem>
                    ))}
                  </Accordion>
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
                <Card className="bg-accent/10 border-accent/30">
                  <CardBody className="text-center p-6">
                    <p className="text-sm text-gray-700 mb-4">
                      詳しい内容や不明点があればお気軽にお問い合わせください。
                    </p>
                    <Button
                      color="primary"
                      variant="solid"
                      className="w-full"
                      as={Link}
                      href="/#contact"
                    >
                      お問い合わせ
                    </Button>
                  </CardBody>
                </Card>
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
              <Button
                key={index}
                color={cta.type === 'primary' ? 'secondary' : 'default'}
                variant={cta.type === 'primary' ? 'solid' : 'bordered'}
                size="lg"
                className={`font-medium ${
                  cta.type === 'primary' ? 'bg-white text-primary' : 'text-white'
                }`}
                as={Link}
                href={cta.url || '#contact-form'}
              >
                {cta.label}
              </Button>
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
          <Button color="primary" variant="bordered" as={Link} href="/#about">
            すべての特徴を見る
          </Button>
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
      <Divider className="mb-6" />
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
    <Card className="bg-white">
      <CardBody className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-bold text-primary">{title}</h3>
        </div>
        {children}
      </CardBody>
    </Card>
  );
}

