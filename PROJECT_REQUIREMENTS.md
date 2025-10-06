# みかわAI学校 公式サイト - 要件定義書

**作成日**: 2025年10月5日  
**プロジェクト名**: みかわAI学校 公式サイト制作  
**バージョン**: 1.0

---

## 📋 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [ステークホルダー](#2-ステークホルダー)
3. [プロジェクトの目的・背景](#3-プロジェクトの目的背景)
4. [対象ユーザー](#4-対象ユーザー)
5. [機能要件](#5-機能要件)
6. [非機能要件](#6-非機能要件)
7. [画面構成](#7-画面構成)
8. [デザイン要件](#8-デザイン要件)
9. [技術要件](#9-技術要件)
10. [データフロー](#10-データフロー)
11. [セキュリティ要件](#11-セキュリティ要件)
12. [成果物](#12-成果物)
13. [制約事項](#13-制約事項)
14. [受入基準](#14-受入基準)

---

## 1. プロジェクト概要

### 1.1 プロジェクト名
みかわAI学校 公式サイト制作

### 1.2 運営組織
- **運営**: 合同会社ICHI.
- **学長**: 志水康太
- **所在地**: 〒000-0000 愛知県〇〇市〇〇町1-2-3
- **連絡先**: info@example.jp

### 1.3 プロジェクトの概要
三河地域で「実務で使えるAI」を広めるための公式Webサイトを構築し、少人数招集型ハンズオンと公開セミナーの参加登録・管理システムを提供する。

---

## 2. ステークホルダー

| 役割 | 担当者 | 責任範囲 |
|------|--------|----------|
| プロジェクトオーナー | 志水康太 | 全体統括・意思決定 |
| 開発リーダー | - | 技術選定・実装・テスト |
| デザイナー | - | UI/UXデザイン |
| コンテンツ担当 | - | テキスト・画像素材 |

---

## 3. プロジェクトの目的・背景

### 3.1 背景
- 三河地域でAIスキルを学べる場が少ない
- 実務に直結する実践的なAI教育が求められている
- オンライン・オフライン両方での学習機会を提供したい

### 3.2 目的
1. AIスキル学習の入口を地域に提供
2. 少人数制での実践的なハンズオン開催
3. 効率的な参加者管理システムの構築
4. 地域のDX推進に貢献

### 3.3 成功指標（KPI）
- 月間訪問者数: 500人以上
- 登録申込数: 月20件以上
- フォーム送信成功率: 95%以上
- ページ読み込み時間: 2秒以内

---

## 4. 対象ユーザー

### 4.1 プライマリユーザー
- **経営者**: 自社のDX推進を検討
- **会社員**: 業務効率化・スキルアップ

### 4.2 セカンダリユーザー
- **主婦・主夫**: 家計管理・生活の効率化
- **求職中・無職**: スキル習得・再就職準備
- **学生**: 将来のキャリア準備
- **シニア**: 新しい学び・地域活動

### 4.3 ユーザーのニーズ
- 仕事に直結するAIスキルを学びたい
- 少人数で質問しながら学びたい
- 手を動かして実践的に学びたい
- 自分のペースで参加したい

---

## 5. 機能要件

### 5.1 必須機能（MVP）

#### 5.1.1 LP（ランディングページ）
- **Hero セクション**
  - キャッチコピー表示
  - CTA ボタン（優先登録）
  - 背景アニメーション（参考サイトのパーティクル効果）
  
- **About セクション**
  - みかわAI学校の紹介文
  - ミッション・ビジョン・コンセプト
  
- **利用例セクション**
  - 6つのユースケースカード
    1. 業務効率化
    2. 営業・顧客対応
    3. 現場作業支援（製造）
    4. 暮らしの便利ツール
    5. 子ども向け体験
    6. 導入相談（企業向け）
  
- **参加の流れセクション**
  - 招集型フロー（3ステップ）
  - 公開セミナーフロー（3ステップ）
  
- **イベントセクション**
  - イベントカード一覧（動的）
  - Google Calendar 埋め込み（サイドバー）
  
- **登録フォームセクション**
  - マルチステップフォーム表示
  
- **FAQ セクション**
  - アコーディオン形式（8問）
  
- **学長紹介セクション**
  - 簡易プロフィール
  - 詳細ページへのリンク
  
- **Footer**
  - 会社情報
  - ナビゲーションリンク
  - SNSリンク
  - プライバシーポリシー・特商法リンク

#### 5.1.2 学長紹介ページ (`/operate`)
- 詳細プロフィール
- 実績・経歴
- メッセージ
- 講師・講演依頼フォームへのリンク

#### 5.1.3 マルチステップ登録フォーム
- **Step 1: 基本情報**
  - 代表者名（必須）
  - メールアドレス（必須、バリデーション）
  - 電話番号（任意）
  - 参加の種類（必須）: 招集型 / 公開セミナー待機
  - 属性（必須）: 経営者 / 会社員 / 主婦・主夫 / 求職中・無職 / 学生 / その他
  - プライバシーポリシー同意（必須チェックボックス）
  
- **Step 2: 詳細情報（条件分岐）**
  - **招集型の場合**:
    - 集められる予定人数（必須、数値、min=1）
    - 会場予定（任意）
    - 備考（任意、テキストエリア）
  - **公開セミナー待機の場合**:
    - 参加希望イベント（任意）
    - 参加希望エリア（任意）
    - 備考（任意、テキストエリア）
  
- **Step 3: 確認画面**
  - 入力内容の確認
  - 修正ボタン（Step 1へ戻る）
  - 送信ボタン
  
- **送信後**
  - 成功モーダル表示
  - サンクスメッセージ
  - #thanks アンカーへスクロール

#### 5.1.4 バックエンド連携
- **Google Apps Script (doPost)**
  - JSON 受信
  - 必須項目検証
  - reCAPTCHA 検証（v3 invisible）
  - Google スプレッドシートへ書き込み
  - 自動返信メール送信（HTML + テキスト）
  - Slack 通知（新規登録）
  - エラーハンドリング
  
- **Google スプレッドシート**
  - 列定義:
    ```
    timestamp, token, name, email, phone, application_type, role, 
    participants_count, venue_type, event_selected, preferred_area, 
    notes, consent_privacy, status, priority_flag, admin_notes
    ```
  - status 管理: new / reviewed / confirmed / waitlist / attended

### 5.2 追加機能（Phase 2）
- イベント一覧ページ（`/events`）
- ブログ・記事ページ（`/blog`）
- 実施報告ページ（`/reports`）
- 管理画面（Next.js Admin）

---

## 6. 非機能要件

### 6.1 パフォーマンス
- ページ読み込み時間: 2秒以内
- Lighthouse スコア: 90点以上（Performance, Accessibility, Best Practices, SEO）
- 画像最適化: WebP 形式、lazy loading
- コード分割: Dynamic import 使用

### 6.2 可用性
- アップタイム: 99.9%以上（Vercel標準）
- HTTPS 必須
- CDN 配信

### 6.3 スケーラビリティ
- 同時アクセス: 100人対応
- フォーム送信: 秒間10件対応

### 6.4 アクセシビリティ
- WCAG 2.1 Level AA 準拠
- キーボード操作対応
- スクリーンリーダー対応
- 適切な ARIA ラベル
- カラーコントラスト比 4.5:1 以上

### 6.5 SEO
- メタタグ適切設定（title, description, OG）
- 構造化データ（JSON-LD）
- sitemap.xml
- robots.txt
- 適切な見出し階層（h1-h6）

### 6.6 ブラウザ対応
- Chrome（最新版 + 2バージョン前）
- Firefox（最新版 + 2バージョン前）
- Safari（最新版 + 2バージョン前）
- Edge（最新版 + 2バージョン前）
- モバイル: iOS Safari, Chrome Mobile

### 6.7 レスポンシブ対応
- モバイル: 320px - 767px
- タブレット: 768px - 1023px
- デスクトップ: 1024px 以上

---

## 7. 画面構成

### 7.1 サイトマップ

```
/
├── / (トップページ・LP)
│   ├── #hero
│   ├── #about
│   ├── #usecases
│   ├── #flow
│   ├── #events
│   ├── #register-form
│   ├── #faq
│   └── #footer
├── /operate (学長紹介)
├── /privacy (プライバシーポリシー)
├── /terms (特定商取引法)
└── /thanks (送信完了)
```

### 7.2 ワイヤーフレーム構成

#### トップページ
1. **Header**
   - ロゴ
   - ナビゲーション
   - CTA ボタン（固定）

2. **Hero Section**
   - 背景アニメーション（パーティクル + 曲線）
   - メインコピー
   - サブコピー
   - CTA ボタン ×2

3. **Notice Banner**（オプション）
   - 重要なお知らせ
   - 閉じるボタン

4. **About Section**
   - 見出し
   - 説明文
   - ミッション・ビジョン・コンセプト

5. **Usecases Section**
   - 6つのカード（2列×3行 / モバイル1列）

6. **Flow Section**
   - 招集型フロー
   - 公開セミナーフロー

7. **Events Section**
   - イベントカード一覧（3列グリッド）
   - Google Calendar（サイドバー）

8. **Register Form Section**
   - マルチステップフォーム
   - プログレスバー

9. **FAQ Section**
   - アコーディオン（8問）

10. **Principal Section**
    - 学長写真
    - 簡易プロフィール
    - 詳細ページリンク

11. **Footer**
    - 会社情報
    - サイトマップ
    - SNS
    - コピーライト

---

## 8. デザイン要件

### 8.1 デザインコンセプト
- **キーワード**: 実践的、シンプル、親しみやすい、信頼感
- **参考**: 既存の参考サイト（index.html, styles.css）のデザインを踏襲

### 8.2 カラーパレット

```css
/* プライマリ */
--color-primary: #2C5F8D;        /* 信頼感のあるブルー */
--color-primary-dark: #1E4D7A;   /* ダークブルー */

/* セカンダリ */
--color-secondary: #56B7C7;      /* 明るいブルー */

/* アクセント */
--color-accent: #F47E20;         /* オレンジ（CTA用） */

/* ニュートラル */
--color-text: #333;              /* メインテキスト */
--color-text-light: #666;        /* サブテキスト */
--color-bg: #fff;                /* 背景白 */
--color-bg-gray: #F5F5F5;        /* 背景グレー */
--color-bg-hero: #E8E8E8;        /* Hero背景 */
--color-border: #E0E0E0;         /* ボーダー */
```

### 8.3 タイポグラフィ

```css
/* フォントファミリー */
font-family: 'Noto Sans JP', sans-serif;

/* フォントサイズ */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
--font-size-3xl: 32px;
--font-size-4xl: 40px;
--font-size-5xl: 48px;

/* フォントウェイト */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;
--font-weight-black: 900;
```

### 8.4 スペーシング

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 80px;
```

### 8.5 コンポーネントスタイル

#### ボタン
- **プライマリボタン**: 青背景、白文字、角丸、ホバーで浮く
- **セカンダリボタン**: 白背景、青文字、ボーダー、ホバーで色変化
- **CTAボタン**: オレンジ背景、大きめ、目立つ配置

#### カード
- 白背景
- 角丸（8px - 12px）
- シャドウ（subtle）
- ホバーで浮く（translateY）

#### フォーム
- HeroUI コンポーネント使用
- インラインバリデーション
- エラーメッセージ（赤文字）
- 必須マーク（*）

### 8.6 アニメーション
- **Hero背景**: パーティクルアニメーション（参考サイトのscript.js）
- **曲線装飾**: floatCurve アニメーション
- **スクロールアニメーション**: フェードイン（Intersection Observer）
- **ホバー**: translateY、scale、opacity
- **トランジション**: 0.3s ease（標準）

---

## 9. 技術要件

### 9.1 技術スタック

#### フロントエンド
- **フレームワーク**: Next.js 14.x（App Router）
- **言語**: TypeScript
- **UI ライブラリ**: HeroUI (NextUI)
- **スタイリング**: Tailwind CSS
- **状態管理**: React Hooks（useState, useReducer）
- **フォームバリデーション**: React Hook Form + Zod
- **アニメーション**: Framer Motion（オプション）

#### バックエンド
- **API**: Google Apps Script（Web App）
- **データストレージ**: Google スプレッドシート
- **認証**: reCAPTCHA v3（invisible）

#### 通知
- **メール**: MailApp（Google Apps Script）
- **Slack**: Incoming Webhooks

#### デプロイ・ホスティング
- **ホスティング**: Vercel
- **ドメイン**: カスタムドメイン（後日設定）
- **環境変数**: Vercel Environment Variables

#### 開発ツール
- **バージョン管理**: Git / GitHub
- **パッケージマネージャー**: npm / yarn
- **リンター**: ESLint
- **フォーマッター**: Prettier
- **型チェック**: TypeScript

### 9.2 ディレクトリ構造

```
mikawa_ai_school/
├── app/
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # トップページ
│   ├── operate/
│   │   └── page.tsx         # 学長紹介ページ
│   ├── privacy/
│   │   └── page.tsx         # プライバシーポリシー
│   ├── terms/
│   │   └── page.tsx         # 特商法
│   └── api/
│       └── submit/
│           └── route.ts     # フォーム送信API（プロキシ）
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── NoticeBanner.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── UsecasesSection.tsx
│   │   ├── FlowSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── RegisterFormSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── PrincipalSection.tsx
│   ├── forms/
│   │   ├── RegisterForm.tsx
│   │   ├── Step1Form.tsx
│   │   ├── Step2Form.tsx
│   │   └── ConfirmationForm.tsx
│   ├── ui/
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── Accordion.tsx
│   │   └── Modal.tsx
│   └── animations/
│       ├── ParticleBackground.tsx
│       └── ScrollReveal.tsx
├── lib/
│   ├── validations/
│   │   └── formSchema.ts    # Zodスキーマ
│   ├── utils/
│   │   └── helpers.ts
│   └── constants/
│       └── content.ts       # 要件定義書の文章
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
├── gas/                     # Google Apps Script
│   ├── Code.gs
│   ├── Config.gs
│   └── README.md
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── PROJECT_REQUIREMENTS.md  # 本ドキュメント
├── TECHNICAL_SPEC.md        # 技術仕様書
└── SCHEDULE.md              # スケジュール表
```

### 9.3 環境変数

```env
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
NEXT_PUBLIC_GAS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

---

## 10. データフロー

### 10.1 フォーム送信フロー

```mermaid
sequencer
User -> Frontend: フォーム入力
Frontend -> Frontend: クライアント側バリデーション
Frontend -> reCAPTCHA: トークン取得
reCAPTCHA -> Frontend: トークン返却
Frontend -> GAS: POST JSON + reCAPTCHAトークン
GAS -> reCAPTCHA API: トークン検証
reCAPTCHA API -> GAS: 検証結果
GAS -> GAS: 必須項目チェック
GAS -> Google Sheets: データ書き込み
GAS -> MailApp: 自動返信メール送信
GAS -> Slack: 管理者通知
GAS -> Frontend: 成功レスポンス
Frontend -> User: 完了モーダル表示
```

### 10.2 データ構造

#### フォーム送信データ (JSON)

```typescript
interface FormData {
  name: string;                    // 必須
  email: string;                   // 必須
  phone?: string;                  // 任意
  application_type: 'invite' | 'seminar'; // 必須
  role: 'business_owner' | 'employee' | 'homemaker' | 'unemployed' | 'student' | 'other'; // 必須
  participants_count?: number;     // 招集型の場合必須
  venue_type?: string;             // 任意
  event_selected?: string;         // 任意
  preferred_area?: string;         // 任意
  notes?: string;                  // 任意
  consent_privacy: boolean;        // 必須（true）
  recaptchaToken: string;          // 必須
  token: string;                   // セッショントークン
}
```

#### スプレッドシート列定義

```
A: timestamp (自動)
B: token
C: name
D: email
E: phone
F: application_type
G: role
H: participants_count
I: venue_type
J: event_selected
K: preferred_area
L: notes
M: consent_privacy
N: status (new/reviewed/confirmed/waitlist/attended)
O: priority_flag (紹介/high/normal)
P: admin_notes
```

---

## 11. セキュリティ要件

### 11.1 フロント側
- reCAPTCHA v3（invisible）実装
- XSS対策（React標準のエスケープ）
- CSRF対策（トークン）
- 入力サニタイゼーション

### 11.2 API側（GAS）
- reCAPTCHA トークン検証必須
- 必須項目チェック
- メールアドレス形式検証
- レート制限（同一IPからの連続送信制限）
- エラーメッセージの適切なマスキング

### 11.3 データ保護
- スプレッドシート共有設定: 管理者のみ編集可
- 環境変数による機密情報管理
- HTTPS通信必須
- 個人情報の適切な取り扱い（プライバシーポリシー準拠）

---

## 12. 成果物

### 12.1 必須成果物
1. ✅ Next.jsプロジェクト（ソースコード）
2. ✅ Google Apps Script（デプロイ可能なコード）
3. ✅ Google スプレッドシート（テンプレート）
4. ✅ 自動返信メールテンプレート（HTML + テキスト）
5. ✅ README.md（セットアップ手順）
6. ✅ 環境変数サンプル（.env.example）
7. ✅ デプロイ手順書
8. ✅ 運用ドキュメント

### 12.2 ドキュメント
1. ✅ 要件定義書（本ドキュメント）
2. ✅ 技術仕様書
3. ✅ スケジュール表
4. ✅ テスト仕様書
5. ✅ 運用マニュアル

---

## 13. 制約事項

### 13.1 技術的制約
- Google Apps Script の実行時間制限（6分）
- スプレッドシートの行数制限（200万行）
- Vercel の無料プランの制約（商用プロジェクトの場合は有料プラン検討）

### 13.2 スコープ外
- ロゴデザイン作成（別途発注）
- 写真撮影・画像素材作成（既存素材または購入素材使用）
- 大規模データベース（PostgreSQL等）の導入
- 決済機能の実装
- 会員機能・ログイン機能
- 広告運用・SEO対策の実施

### 13.3 前提条件
- Google Workspace アカウントが利用可能
- Vercel アカウントが利用可能
- reCAPTCHA の API キーが取得済み
- Slack Workspace が利用可能（通知用）

---

## 14. 受入基準

### 14.1 機能面
- [ ] トップページ（LP）がレスポンシブに表示される
- [ ] 学長紹介ページが表示される
- [ ] マルチステップフォームが正常に動作する
- [ ] フォーム送信でスプレッドシートに正しくデータが保存される
- [ ] 自動返信メールが送信される（HTML + テキスト）
- [ ] Slack通知が届く
- [ ] reCAPTCHA検証が機能する
- [ ] エラー時に適切なメッセージが表示される
- [ ] FAQのアコーディオンが動作する
- [ ] 全リンクが正しく機能する

### 14.2 非機能面
- [ ] ページ読み込み時間が2秒以内
- [ ] Lighthouse スコアが90点以上
- [ ] 主要ブラウザで正常に表示される
- [ ] モバイル・タブレット・デスクトップで正常に表示される
- [ ] アクセシビリティチェックをパスする
- [ ] SEO対策が実装されている（meta, OG）

### 14.3 テスト
- [ ] 単体テスト実施（主要コンポーネント）
- [ ] 統合テスト実施（フォーム送信フロー）
- [ ] クロスブラウザテスト実施
- [ ] レスポンシブテスト実施
- [ ] アクセシビリティテスト実施

### 14.4 ドキュメント
- [ ] README.mdが整備されている
- [ ] セットアップ手順が明記されている
- [ ] 環境変数の説明がある
- [ ] 運用マニュアルがある

---

## 付録A: コンテンツ一覧

### Hero コピー（案A採用）
```
見出し：仕事にも暮らしにも効くAI
サブ：三河の現場で本当に役立つAIの使い方を学ぶ。経営者・会社員・地域のみんなが同じスタートで使える実践スクール。
CTA1（主）：優先登録する
CTA2（副）：次回イベントを見る
```

### About 短文
```
みかわAI学校は、三河地域から「実務で使えるAI」を広げる実践スクールです。経営者・会社員・主婦・シニア・子どもまで、誰でも同じスタートで学べる場を目指します。まずは優先登録で案内を受け取ってください。
```

### ミッション・ビジョン・コンセプト
```
ミッション：みかわAI学校は、誰もが等しくAIを学び、自分の価値を高められる地域の学び場を作ります。

ビジョン：地域のすべての人が"使えるAI"を手にし、仕事や暮らしで実利を生む。学びの入口を平等にし、地域のDXを底上げすることを目指します。

コンセプト：現場で、すぐ使える。小さなグループで手を動かす。三河発の実践AIスクール。
```

### 利用例（6カード）
1. **業務効率化**: 日々の手作業をAIで自動化・短縮。（請求書の要約、メール定型文作成、日報の自動生成）
2. **営業・顧客対応**: 顧客対応の品質向上と営業資料作成の時間短縮。
3. **現場作業支援（製造）**: 現場の作業指示書や点検報告のデジタル化。
4. **暮らしの便利ツール**: 日常生活で使えるAI活用法。
5. **子ども向け体験**: 未来の学びにつながる楽しい導入ワークショップ。
6. **導入相談（企業向け）**: 現状把握から導入計画まで伴走支援。

### FAQ（8問）
1. Q: 招集型とは何ですか？
2. Q: 公開セミナーへの参加はどうすれば良いですか？
3. Q: 参加費はかかりますか？
4. Q: 子どもも参加できますか？
5. Q: 録画や資料は配布されますか？
6. Q: 紹介者がいると優先になりますか？
7. Q: フォームに記入した情報はどのように扱われますか？
8. Q: 問い合わせ先は？

---

**改訂履歴**
- v1.0 (2025-10-05): 初版作成

