'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
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

export default function NewsPage() {
  const [allNewsItems, setAllNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');

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
        const noteArticles = await fetchNoteArticles(50);
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

  // カテゴリでフィルタリング
  const filteredItems = filterCategory === 'all'
    ? allNewsItems
    : allNewsItems.filter((item) => item.category === filterCategory);

  // ユニークなカテゴリを取得
  const categories = ['all', ...Array.from(new Set(allNewsItems.map((item) => item.category)))];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1200px]">
        {/* ヘッダー */}
        <header className="text-center mb-16">
          <h1 className="text-[clamp(48px,8vw,80px)] font-black text-[#1A1A1A] mb-6 tracking-tight leading-none">
            NEWS & MEDIA
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text)] leading-relaxed">
            みかわAI学校の最新情報・イベント情報・Note記事をご覧いただけます
          </p>
        </header>

        {/* カテゴリフィルター */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filterCategory === category
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-[var(--color-text)] hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'すべて' : category}
            </button>
          ))}
        </div>

        {/* ニュースリスト */}
        {isLoading ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="text-6xl mb-6 animate-pulse">📰</div>
            <p className="text-lg text-[var(--color-text)]">最新情報を読み込み中...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-12">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
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
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="text-6xl mb-6">📭</div>
            <h4 className="text-xl font-bold text-[var(--color-primary)] mb-4">
              該当するお知らせはありません
            </h4>
            <p className="text-base text-[var(--color-text)]">
              他のカテゴリをご覧ください。
            </p>
          </div>
        )}

        {/* トップに戻るボタン */}
        <div className="text-center mt-12">
          <Link
            href="/#news"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-[var(--color-text)] rounded-full font-bold text-lg transition-all hover:bg-gray-200"
          >
            <span>←</span>
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
