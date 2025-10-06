'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import eventsData from '@/lib/content/events.json';
import type { Event, NoteArticle } from '@/lib/types/events';
import { fetchNoteArticles } from '@/lib/services/note-rss';

// イベントとNote記事を統合した型
interface NewsItem {
  id: string;
  date: string;
  displayDate: string;
  category: string;
  title: string;
  link: string;
  type: 'event' | 'note';
}

export function NewsSection() {
  const [allNewsItems, setAllNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.05 }); // 5%でトリガー

  useEffect(() => {
    async function loadNews() {
      try {
        // イベント情報を取得
        const events = eventsData.events as Event[];
        const eventItems: NewsItem[] = events.map((event) => ({
          id: event.id,
          date: event.date,
          displayDate: event.displayDate,
          category: event.category,
          title: event.title,
          link: event.link,
          type: 'event' as const,
        }));

        // Note記事を取得
        const noteArticles = await fetchNoteArticles(10);
        const noteItems: NewsItem[] = noteArticles.map((article) => ({
          id: article.id,
          date: article.pubDate,
          displayDate: article.displayDate,
          category: 'Note記事',
          title: article.title,
          link: article.link,
          type: 'note' as const,
        }));

        // 統合して日付順にソート
        const combined = [...eventItems, ...noteItems].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setAllNewsItems(combined);
      } catch (error) {
        console.error('Failed to load news:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadNews();
  }, []);

  // トップページでは最新5件のみ表示
  const displayItems = allNewsItems.slice(0, 5);

  return (
    <section id="news" className="py-20 md:py-32 bg-[var(--color-bg-gray)]">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <h2 className="text-[clamp(48px,8vw,120px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            NEWS & MEDIA
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-light)] mb-8">お知らせ・メディア情報</p>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            最新情報をお届けします
          </h3>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed max-w-[700px] mx-auto">
            みかわAI学校のイベント情報や活動報告、メディア掲載情報などをご覧いただけます。
          </p>
        </div>

        {/* ニュースリスト */}
        {isLoading ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="text-6xl mb-6 animate-pulse">📰</div>
            <p className="text-lg text-[var(--color-text)]">最新情報を読み込み中...</p>
          </div>
        ) : displayItems.length > 0 ? (
          <>
            <div ref={ref} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-12">
              {displayItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`news-item border-b border-[var(--color-border)] last:border-none ${
                    index % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'
                  }`}
                >
                  <Link
                    href={item.link}
                    target={item.type === 'note' ? '_blank' : undefined}
                    rel={item.type === 'note' ? 'noopener noreferrer' : undefined}
                    className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-4 items-center p-6 transition-colors hover:bg-[var(--color-primary)]/5"
                  >
                    {/* 日付 */}
                    <time className="text-sm text-[var(--color-text-light)] font-medium min-w-[140px]">
                      {item.displayDate.replace('年', '.').replace('月', '.').replace('日', '').replace(/（.）/, '')}
                    </time>

                    {/* カテゴリバッジ */}
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        item.category === 'セミナー'
                          ? 'bg-[var(--color-accent)] text-white'
                          : item.category === 'お知らせ'
                          ? 'bg-[var(--color-secondary)] text-white'
                          : item.category === 'Note記事'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-500 text-white'
                      }`}
                    >
                      {item.category}
                    </span>

                    {/* タイトル */}
                    <p className="text-base text-[var(--color-text)] leading-relaxed">
                      {item.title}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* もっと見るボタン */}
            <div className="text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-bold text-lg shadow-[var(--shadow-md)] transition-all hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
              >
                お知らせ一覧を見る
                <span>→</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="text-6xl mb-6">📭</div>
            <h4 className="text-xl font-bold text-[var(--color-primary)] mb-4">
              お知らせはまだありません
            </h4>
            <p className="text-base text-[var(--color-text)]">
              最新情報が入り次第、こちらに掲載いたします。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
