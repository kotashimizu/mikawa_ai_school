/**
 * NoteのRSSフィードから記事を取得するサービス
 * @description
 * APIエンドポイント（/api/note-articles）経由で
 * 最新の記事情報を取得し、型安全な形式で返します。
 * 
 * APIは24時間ごとに自動更新されます（ISR）。
 */

import type { NoteArticle } from '@/lib/types/events';

/**
 * API レスポンスの型定義
 */
interface NoteArticlesResponse {
  articles: NoteArticle[];
  lastUpdated: string;
  count: number;
  error?: string;
}

/**
 * NoteのRSSフィードから記事を取得
 * @param limit - 取得する記事数（デフォルト: 10）
 * @returns Promise<NoteArticle[]> - 記事の配列
 */
export async function fetchNoteArticles(limit: number = 10): Promise<NoteArticle[]> {
  try {
    // 内部APIエンドポイントを呼び出し
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    
    const response = await fetch(`${baseUrl}/api/note-articles`, {
      next: { revalidate: 86400 }, // 24時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`API fetch failed: ${response.status}`);
    }

    const data: NoteArticlesResponse = await response.json();
    
    if (data.error) {
      console.error('API returned error:', data.error);
      return [];
    }
    
    // 指定された件数にスライス
    return data.articles.slice(0, limit);
  } catch (error) {
    console.error('Error fetching Note articles:', error);
    return [];
  }
}


