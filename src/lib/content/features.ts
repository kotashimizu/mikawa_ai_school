/**
 * みかわAI学校の特徴コンテンツ
 * トップページと詳細ページで使用するデータを一元管理
 */

// 特徴の基本情報（トップページ用）
export interface Feature {
  id: string;
  slug: string; // URLスラグ（/features/[slug]）
  shortTitle: string; // トップページの見出し（短）
  shortLead: string; // トップページのリード（1行）
  ctaLabel: string; // トップページのCTAボタンラベル
  icon?: string; // アイコン（オプション）
}

// 詳細ページ用の拡張情報
export interface FeatureDetail extends Feature {
  pageTitle: string; // ページタイトル
  metaDescription: string; // SEO用のdescription
  lead: string; // 詳細ページの導入文
  points: string[]; // この特徴のポイント（箇条書き）
  deliverables?: string[]; // 提供するもの（オプション）
  target: string; // 対象者
  schedule?: string; // 開催形式・頻度（オプション）
  pricing?: string; // 参加費（オプション）
  faqs?: FAQ[]; // よくある質問（オプション）
  ctas: CTA[]; // 詳細ページ内のCTA
  formFields?: FormField[]; // 入力フォームの項目（オプション）
  workflow?: string[]; // 運用フロー（オプション）
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CTA {
  label: string;
  type: 'primary' | 'secondary' | 'tertiary';
  action: 'form' | 'download' | 'contact' | 'link';
  url?: string;
}

export interface FormField {
  label: string;
  type: 'select' | 'text' | 'textarea';
  options?: string[];
  placeholder?: string;
}

// トップページ用の特徴一覧（短縮版）
export const features: Feature[] = [
  {
    id: '01',
    slug: 'in-person',
    shortTitle: '地域で直接学べる',
    shortLead:
      '講師や仲間と対面で学べる少人数ハンズオンで、実務につながるスキルを確実に習得します。',
    ctaLabel: '少人数ハンズオンに申し込む',
  },
  {
    id: '02',
    slug: 'flexible-time',
    shortTitle: '時間は柔軟に',
    shortLead:
      '日中・夜間・土日など、地域のニーズに合わせた時間帯で開催できます。希望時間はリクエスト可能です。',
    ctaLabel: '希望の開催時間をリクエストする',
  },
  {
    id: '03',
    slug: 'practical',
    shortTitle: 'すぐ使える（実務直結）',
    shortLead:
      '当日配布のテンプレやワークで、明日から使えるAIの実践スキルを持ち帰れます。',
    ctaLabel: '事例・テンプレをダウンロードする',
  },
  {
    id: '04',
    slug: 'easy-start',
    shortTitle: '気軽に始められる',
    shortLead:
      '無料枠や初心者向けの体験回で、初めてでも安心して始められます。',
    ctaLabel: '今すぐ優先登録（無料）',
  },
];

// 詳細ページ用のフルコンテンツ
export const featureDetails: Record<string, FeatureDetail> = {
  'in-person': {
    id: '01',
    slug: 'in-person',
    shortTitle: '地域で直接学べる',
    shortLead:
      '講師や仲間と対面で学べる少人数ハンズオンで、実務につながるスキルを確実に習得します。',
    ctaLabel: '少人数ハンズオンに申し込む',
    pageTitle: '地域で直接学べる — みかわAI学校の対面ハンズオン',
    metaDescription:
      '対面の少人数ハンズオンで、講師と直接やり取りしながら実務で使えるAIスキルを習得。三河地域で開催する実践型の学習プログラムです。',
    lead: 'みかわAI学校では、対面での学びを大切にしています。講師の指導のもと、仲間と一緒に手を動かすことで、理解が深まり、現場での再現性が高まります。',
    points: [
      '小グループでの実践ワーク（3〜5名）',
      '即時フィードバックで疑問をその場で解決',
      '現場に持ち帰れるテンプレ・チェックリストを提供',
    ],
    deliverables: [
      '当日資料（PDF）・プロンプトテンプレ集',
      '実践ワークの手順書',
      '実施後のフォローアップメール（配布資料リンク）',
    ],
    target:
      '経営者・現場リーダー・実務担当者・初学者（対面で学べることを重視する人）',
    schedule:
      '基本は対面開催（会場は地域の公共施設または貸会議室）。月1〜2回を目安で開催（需要と講師稼働に応じて調整）。応募多数時は招集型での実施も可能です。',
    pricing:
      '体験回：無料 / ハンズオン：有料（開催ごとに異なる）※詳細はイベントページをご確認ください',
    faqs: [
      {
        question: '遠方ですが参加できますか？',
        answer:
          '原則は地域参加を想定していますが、状況により柔軟に対応します。詳細はお問い合わせください。',
      },
    ],
    ctas: [
      {
        label: '少人数ハンズオンに申し込む',
        type: 'primary',
        action: 'form',
        url: '/events',
      },
      {
        label: '当日の配布資料サンプルを見る',
        type: 'secondary',
        action: 'download',
      },
    ],
  },
  'flexible-time': {
    id: '02',
    slug: 'flexible-time',
    shortTitle: '時間は柔軟に',
    shortLead:
      '日中・夜間・土日など、地域のニーズに合わせた時間帯で開催できます。希望時間はリクエスト可能です。',
    ctaLabel: '希望の開催時間をリクエストする',
    pageTitle: '時間は柔軟に — 希望に合わせて開催します',
    metaDescription:
      '日中・夜間・土日など、みかわAI学校は地域の都合に合わせて柔軟に開催。希望時間のリクエストを受付中です。',
    lead: '仕事や家庭の都合で「平日の昼間は難しい」という声は多くあります。そこで当校では、夜間や土日も含めた開催が可能です。参加希望が集まれば、運営で日程調整を行います。',
    points: [
      '希望時間の事前ヒアリングで開催候補を作成',
      '平日夜・土日の開催枠を確保（講師と協議）',
      '企業向けに複数日程のオプション提供可能',
    ],
    target: '会社員・子育て中の方・シニアなど、時間調整が必要な方',
    workflow: [
      'フォームで希望時間を集計',
      '一定数以上の希望が集まれば運営が開催日程を決定',
      '決定時に優先登録者へ案内メール送付',
    ],
    formFields: [
      {
        label: '希望時間帯（複数選択可）',
        type: 'select',
        options: [
          '平日午前',
          '平日午後',
          '平日夜',
          '土日午前',
          '土日午後',
        ],
      },
      {
        label: '備考（任意）',
        type: 'textarea',
        placeholder: '希望する曜日や時間があればご記入ください',
      },
    ],
    ctas: [
      {
        label: '希望の開催時間をリクエストする',
        type: 'primary',
        action: 'form',
      },
      {
        label: '企業向けに日程調整を依頼する',
        type: 'secondary',
        action: 'contact',
      },
    ],
  },
  practical: {
    id: '03',
    slug: 'practical',
    shortTitle: 'すぐ使える（実務直結）',
    shortLead:
      '当日配布のテンプレやワークで、明日から使えるAIの実践スキルを持ち帰れます。',
    ctaLabel: '事例・テンプレをダウンロードする',
    pageTitle: 'すぐ使える — 実務で役立つテンプレとワーク',
    metaDescription:
      '実務直結のテンプレやプロンプトを配布し、講座内で実践することで即座に業務で使えるスキルを習得できます。',
    lead: 'みかわAI学校の講義は「学んで終わり」にしません。テンプレ・プロンプト・手順書を配布し、すぐ実務へ落とし込めることを重視します。',
    points: [
      '実務テンプレ（業務別プロンプト）を配布',
      'ハンズオンでの実践演習（ケーススタディ）',
      '結果を出すためのチェックリスト提供',
    ],
    deliverables: [
      '業務別プロンプト集（PDF）',
      '会議資料・提案書のテンプレート（Word/PowerPoint）',
      '導入チェックリスト（Excel/Sheet）',
    ],
    target: '経営者・マネージャー・実務担当者・導入検討者',
    ctas: [
      {
        label: '事例・テンプレをダウンロードする',
        type: 'primary',
        action: 'download',
      },
      {
        label: '無料AI診断を申し込む',
        type: 'secondary',
        action: 'form',
      },
    ],
  },
  'easy-start': {
    id: '04',
    slug: 'easy-start',
    shortTitle: '気軽に始められる',
    shortLead:
      '無料枠や初心者向けの体験回で、初めてでも安心して始められます。',
    ctaLabel: '今すぐ優先登録（無料）',
    pageTitle: '気軽に始められる — 初めてでも安心のスタートアップ',
    metaDescription:
      '無料体験や初心者向けの説明会で、AIに初めて触れる人でも安心して学べる環境を提供します。',
    lead: 'まずは気軽に触れてみませんか。みかわAI学校は、初めての方が不安なく一歩を踏み出せる仕組みを用意しています。',
    points: [
      '無料体験回を定期開催',
      '少人数制で丁寧に解説',
      '年配・主婦向けのやさしい回を用意',
    ],
    target: '初学者・AI初心者・年配の方・主婦・不安がある方',
    workflow: [
      '体験回は事前登録制（先着）',
      '参加後のフォローで個別相談や有料講座へ案内',
    ],
    ctas: [
      {
        label: '今すぐ優先登録（無料）',
        type: 'primary',
        action: 'form',
      },
      {
        label: '体験回のスケジュールを見る',
        type: 'secondary',
        action: 'link',
        url: '/events',
      },
    ],
  },
};

/**
 * スラグから特徴詳細を取得
 */
export function getFeatureBySlug(slug: string): FeatureDetail | undefined {
  return featureDetails[slug];
}

/**
 * すべての特徴スラグを取得（静的パス生成用）
 */
export function getAllFeatureSlugs(): string[] {
  return Object.keys(featureDetails);
}

