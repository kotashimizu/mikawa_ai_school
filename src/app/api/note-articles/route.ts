/**
 * Note記事を取得するAPI Route
 * RSSフィードから最新記事を取得し、JSON形式で返す
 * 
 * 使い方:
 * GET /api/note-articles
 * 
 * レスポンス:
 * {
 *   "articles": [...],
 *   "lastUpdated": "2025-10-06T00:00:00Z"
 * }
 */

import { NextResponse } from 'next/server';
import type { NoteArticle } from '@/lib/types/events';

const RSS_URL = 'https://note.com/shimizu_ai_ichi/rss';

export const revalidate = 86400; // 24時間（86400秒）ごとに再検証

/**
 * XMLから指定したタグの内容を抽出
 */
function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

/**
 * HTMLタグを除去
 */
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * HTMLエンティティをデコード
 */
function cleanHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
  };
  
  return text.replace(/&[a-z]+;|&#\d+;/gi, (match) => entities[match] || match);
}

/**
 * 日付をフォーマット
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  const weekday = weekdays[date.getDay()];
  
  return `${year}年${month}月${day}日（${weekday}）`;
}

/**
 * RSS XMLをパースしてNoteArticle配列に変換
 */
function parseRSSFeed(xmlText: string, limit: number = 50): NoteArticle[] {
  const articles: NoteArticle[] = [];
  
  // <item>タグを抽出
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  let count = 0;

  while ((match = itemRegex.exec(xmlText)) !== null && count < limit) {
    const itemXml = match[1];
    
    // 各フィールドを抽出
    const title = extractTag(itemXml, 'title');
    const link = extractTag(itemXml, 'link');
    const description = extractTag(itemXml, 'description');
    const pubDate = extractTag(itemXml, 'pubDate');
    
    if (title && link && pubDate) {
      // 日付をフォーマット
      const date = new Date(pubDate);
      const displayDate = formatDate(date);
      
      // HTMLタグを除去した説明文
      const cleanDescription = stripHtmlTags(description);
      
      articles.push({
        id: `note-${count + 1}`,
        title: cleanHtmlEntities(title),
        description: cleanDescription.substring(0, 150) + '...',
        link,
        pubDate: date.toISOString().split('T')[0],
        displayDate,
        categories: [],
      });
      
      count++;
    }
  }
  
  return articles;
}

/**
 * GET /api/note-articles
 * Note記事を取得
 */
export async function GET() {
  try {
    // RSSフィードを取得
    const response = await fetch(RSS_URL, {
      next: { revalidate: 86400 }, // 24時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }

    const xmlText = await response.text();
    
    // XMLをパース
    const articles = parseRSSFeed(xmlText, 50);
    
    return NextResponse.json({
      articles,
      lastUpdated: new Date().toISOString(),
      count: articles.length,
    });
  } catch (error) {
    console.error('Error fetching Note articles:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch Note articles',
        articles: [],
        lastUpdated: new Date().toISOString(),
        count: 0,
      },
      { status: 500 }
    );
  }
}

