# イベント情報更新ガイド

このガイドでは、みかわAI学校サイトのイベント情報を更新する方法を説明します。

## 📋 目次

1. [イベント情報の更新方法](#イベント情報の更新方法)
2. [Note記事の自動取得について](#note記事の自動取得について)
3. [トラブルシューティング](#トラブルシューティング)

---

## イベント情報の更新方法

### ✏️ 手順1: events.json を開く

ファイルパス: `src/lib/content/events.json`

このファイルに全てのイベント情報が格納されています。

### ✏️ 手順2: 新しいイベントを追加

以下のテンプレートをコピーして、`events` 配列に追加してください：

```json
{
  "id": "event-2025-XX-XX",
  "type": "seminar",
  "category": "セミナー",
  "date": "2025-XX-XX",
  "displayDate": "2025年X月X日（X）",
  "time": "19:30〜21:00",
  "title": "イベントのタイトル",
  "description": "イベントの説明文。対象者や内容を分かりやすく記載します。",
  "target": "対象者（例：中小企業経営者・職員）",
  "tags": ["AI活用", "セミナー"],
  "capacity": "30名",
  "fee": "無料",
  "status": "upcoming",
  "imageUrl": "/images/events/event-image.png",
  "link": "https://ichi-company.net/events",
  "venue": "オンライン"
}
```

### 📝 フィールドの説明

| フィールド | 必須 | 説明 | 例 |
|-----------|------|------|-----|
| `id` | ✅ | イベントの一意なID | `"event-2025-10-24"` |
| `type` | ✅ | イベントのタイプ | `"seminar"`, `"workshop"`, `"media"`, `"news"` |
| `category` | ✅ | カテゴリ表示 | `"セミナー"`, `"お知らせ"` |
| `date` | ✅ | 開催日（ISO 8601形式） | `"2025-10-24"` |
| `displayDate` | ✅ | 表示用の日付 | `"2025年10月24日（金）"` |
| `time` | ⭕ | 開催時間 | `"19:30〜21:00"` |
| `title` | ✅ | イベントタイトル | `"ChatGPT入門セミナー"` |
| `description` | ✅ | イベントの説明 | `"初心者向けの..."` |
| `target` | ⭕ | 対象者 | `"中小企業経営者・職員"` |
| `tags` | ✅ | タグ（配列） | `["AI活用", "ChatGPT"]` |
| `capacity` | ⭕ | 定員 | `"30名"` または `null` |
| `fee` | ⭕ | 参加費 | `"無料"`, `"5,000円"` |
| `status` | ✅ | ステータス | `"upcoming"`, `"ongoing"`, `"completed"`, `"cancelled"` |
| `imageUrl` | ⭕ | サムネイル画像 | `"/images/events/xxx.png"` |
| `link` | ✅ | 詳細ページURL | `"https://ichi-company.net/events"` |
| `venue` | ⭕ | 開催場所 | `"オンライン"`, `"豊川市"` |
| `sponsor` | ⭕ | 主催・後援 | `"豊川市"` |

### ✏️ 手順3: 最終更新日を更新

`lastUpdated` フィールドを現在の日時に更新してください：

```json
"lastUpdated": "2025-10-06T12:00:00Z"
```

### ✏️ 手順4: ファイルを保存

ファイルを保存すると、サイトが自動的に再ビルドされ、新しいイベント情報が反映されます。

---

## 🗑️ イベントの削除・更新

### イベントを削除する場合

該当するイベントのオブジェクト全体を削除してください。

### イベント情報を更新する場合

該当するイベントのフィールドを直接編集してください。

### 過去のイベントを「終了済み」にする場合

`status` フィールドを `"completed"` に変更してください：

```json
"status": "completed"
```

---

## 📰 Note記事の自動取得について

### ✅ 完全自動化済み！

Note記事は**完全自動で取得・更新**されます！何もする必要はありません 🎉

### 🔄 自動更新の仕組み

1. **RSSフィードからの自動取得**
   - NoteのRSS: `https://note.com/shimizu_ai_ichi/rss`
   - APIエンドポイント: `/api/note-articles`
   - 最大50件の記事を自動取得

2. **更新頻度**
   - **毎日0時（JST）に自動更新**（Vercel Cron使用）
   - ISR（Incremental Static Regeneration）により24時間ごとに再生成
   - ユーザーがページを開いても最新のキャッシュから高速表示

3. **技術スタック**
   - Next.js API Routes
   - ISR（24時間キャッシュ）
   - Vercel Cron（定期実行）

### 📊 確認方法

```bash
# APIで直接確認
curl http://localhost:3000/api/note-articles

# レスポンス例
{
  "articles": [...],
  "lastUpdated": "2025-10-06T15:00:00Z",
  "count": 50
}
```

### 🛠️ トラブルシューティング

#### Note記事が表示されない

1. **APIの動作確認**
   ```bash
   curl http://localhost:3000/api/note-articles
   ```

2. **ログを確認**
   - サーバーログで「Error fetching Note articles」を検索
   - RSSフィードのURL（https://note.com/shimizu_ai_ichi/rss）が正しいか確認

3. **手動でRSSを確認**
   - ブラウザで https://note.com/shimizu_ai_ichi/rss を開く
   - XMLが正しく表示されるか確認

#### 更新が遅い

- ISRキャッシュは24時間
- 強制的に更新したい場合：
  ```bash
  # ビルドし直す
  npm run build
  npm run start
  ```

---

## トラブルシューティング

### ❌ サイトが表示されない

1. **JSONの構文エラーをチェック**
   - `,` の位置を確認
   - `{` と `}` が正しく閉じられているか確認
   - VSCodeの場合、エラーが赤く表示されます

2. **開発サーバーを再起動**
   ```bash
   npm run dev
   ```

### ❌ イベントが表示されない

1. **`status` が `"upcoming"` になっているか確認**
2. **`date` が未来の日付になっているか確認**
3. **ブラウザのキャッシュをクリア**

### ❌ 画像が表示されない

1. **画像ファイルが `public/images/events/` に配置されているか確認**
2. **`imageUrl` のパスが正しいか確認**（先頭に `/` が必要）

---

## 📞 サポート

質問や問題がある場合は、以下にお問い合わせください：

- Email: info@ichi-company.net
- 開発者に直接連絡

---

## 📚 参考リンク

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [JSON構文チェッカー](https://jsonlint.com/)
- [Note RSS仕様](https://note.com/)

---

**最終更新日**: 2025年10月6日

