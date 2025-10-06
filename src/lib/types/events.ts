/**
 * イベント情報の型定義
 * events.jsonから読み込むイベントデータの構造を定義
 */

export type EventType = 'seminar' | 'workshop' | 'media' | 'news';

export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

export interface Event {
  /** イベントの一意なID */
  id: string;
  /** イベントのタイプ */
  type: EventType;
  /** カテゴリ（セミナー、お知らせ、メディア情報など） */
  category: string;
  /** 開催日（ISO 8601形式: YYYY-MM-DD） */
  date: string;
  /** 表示用の日付 */
  displayDate: string;
  /** 開催時間 */
  time?: string;
  /** イベントのタイトル */
  title: string;
  /** イベントの説明 */
  description: string;
  /** サブタイトル（オプション） */
  subtitle?: string;
  /** 対象者 */
  target?: string;
  /** タグ */
  tags: string[];
  /** 定員 */
  capacity?: string | null;
  /** 参加費 */
  fee?: string;
  /** イベントのステータス */
  status: EventStatus;
  /** イベントのサムネイル画像URL */
  imageUrl?: string;
  /** 詳細ページまたは申込ページへのリンク */
  link: string;
  /** 開催場所 */
  venue?: string;
  /** 主催・後援 */
  sponsor?: string;
}

export interface EventsData {
  /** イベントの配列 */
  events: Event[];
  /** 最終更新日時 */
  lastUpdated: string;
}

/**
 * Note記事の型定義
 * RSSフィードから取得する記事データの構造を定義
 */
export interface NoteArticle {
  /** 記事のID */
  id: string;
  /** 記事のタイトル */
  title: string;
  /** 記事の説明・抜粋 */
  description: string;
  /** 記事のURL */
  link: string;
  /** 公開日時 */
  pubDate: string;
  /** 表示用の公開日 */
  displayDate: string;
  /** サムネイル画像URL（あれば） */
  thumbnailUrl?: string;
  /** カテゴリ */
  categories?: string[];
}

