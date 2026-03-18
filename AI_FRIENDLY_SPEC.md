# AIフレンドリー化 実装仕様書

> 作成：Claude_Workspace セッション（2026-03-19）
> 対象リポジトリ：`/Users/yoshimasa_n/Desktop/portfolio/`（Next.js + TypeScript）
> デプロイ先：https://y-nishinobu.soitgoes.page（Vercel、GitHub push で自動デプロイ）

---

## 背景・目的

現在のポートフォリオサイトはAIクローラーが読んだとき、構造化情報がほぼゼロの状態。
以下の修正で「AIが西信好真という人物を正確に理解できるサイト」にする。

---

## 現状の問題点（診断済み）

| 項目 | 現状 |
|------|------|
| `<html lang>` | `"en"` 固定（JP表示中も変わらない） |
| OGP タグ | **全て未設定**（og:title / og:description / og:image / og:url） |
| Twitter/X カード | **未設定** |
| JSON-LD | **完全にない** |
| `robots.txt` | **404（存在しない）** |
| `llms.txt` | **404（存在しない）** |
| `sitemap.xml` | おそらく404 |

---

## 実装タスク一覧

### タスク1：`app/layout.tsx` の修正

以下を全て追加・修正する。

#### 1-1. `lang` 属性
```tsx
<html lang="ja">
```
※ サイトは日本語がメイン。EN/JP 切替は動的だが、デフォルトは `ja` で問題ない。

#### 1-2. `metadata` オブジェクトの拡充

Next.js の `export const metadata: Metadata = { ... }` に以下を追加：

```tsx
export const metadata: Metadata = {
  title: '西信好真 ポートフォリオ — 夢が育つ土壌を、みなで耕す。',
  description: '長崎県佐世保市を拠点に、若者支援・地域振興・オルタナティブ教育に取り組むコミュニティビルダー、西信好真のポートフォリオサイト。',
  metadataBase: new URL('https://y-nishinobu.soitgoes.page'),
  openGraph: {
    title: '西信好真 ポートフォリオ — 夢が育つ土壌を、みなで耕す。',
    description: '長崎県佐世保市を拠点に、若者支援・地域振興・オルタナティブ教育に取り組むコミュニティビルダー、西信好真のポートフォリオサイト。',
    url: 'https://y-nishinobu.soitgoes.page',
    siteName: '西信好真 ポートフォリオ',
    locale: 'ja_JP',
    type: 'website',
    // og:image は後でプロフィール写真のURLに差し替え可
    images: [
      {
        url: '/images/og-image.jpg', // publicフォルダに配置
        width: 1200,
        height: 630,
        alt: '西信好真 ポートフォリオ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '西信好真 ポートフォリオ',
    description: '佐世保発。若者支援・地域振興・オルタナ教育のコミュニティビルダー。',
  },
};
```

#### 1-3. JSON-LD（Person schema）を `<body>` 内に追加

`layout.tsx` の `<body>` タグ内に `<script>` タグとして埋め込む：

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "西信好真",
      "alternateName": "Yoshimasa Nishinobu",
      "url": "https://y-nishinobu.soitgoes.page",
      "image": "https://y-nishinobu.soitgoes.page/images/profile.jpg",
      "jobTitle": "地域振興室 副室長",
      "worksFor": {
        "@type": "Organization",
        "name": "西海みずき信用組合"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "一般社団法人 共感結社モルタル"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "佐世保市",
        "addressRegion": "長崎県",
        "addressCountry": "JP"
      },
      "knowsAbout": [
        "若者支援", "地域振興", "オルタナティブ教育", "コミュニティビルド", "探究学習", "まちづくり"
      ],
      "sameAs": [
        "https://www.facebook.com/yoshimasa.nishinobu",
        "https://note.com/yoshimasa_n"
      ],
      "description": "長崎県佐世保市を拠点に、若者支援・地域振興・オルタナティブ教育に取り組むコミュニティビルダー。西海みずき信用組合 地域振興室 副室長、一般社団法人 共感結社モルタル 理事。2019年より活動。"
    })
  }}
/>
```

> ⚠️ `sameAs` のURLは実際のFacebook/noteのURLに合わせて確認・修正すること。
> ⚠️ `image` のパスはプロフィール写真の実際のパスに合わせること。

---

### タスク2：`app/robots.ts` を新規作成

`app/robots.ts` を作成（Next.js 13+ App Router の自動生成機能を使う）：

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://y-nishinobu.soitgoes.page/sitemap.xml',
  }
}
```

---

### タスク3：`app/sitemap.ts` を新規作成

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://y-nishinobu.soitgoes.page',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // プロジェクト個別ページがあれば追加
  ]
}
```

---

### タスク4：`public/llms.txt` を新規作成

AIエージェント向けの自己紹介ファイル（プレーンテキスト）。
`public/llms.txt` として以下の内容で作成：

```
# Yoshimasa Nishinobu — Portfolio

## Who I am
西信好真（Yoshimasa Nishinobu）。長崎県佐世保市を拠点とするコミュニティビルダー、プランナー、金融機関職員。

- 所属：西海みずき信用組合 地域振興室 副室長
- 役職：一般社団法人 共感結社モルタル 理事
- 活動開始：2019年
- 拠点：長崎県佐世保市

## Mission
「夢が育つ土壌を、みなで耕す。（Cultivate the Soil, for Dreams.）」
佐世保を起点に、若者が自分の意志で動き出せる環境をつくることをミッションとしています。

## Focus Areas
1. アンチAI・オルタナ教育 — AGI時代に陳腐化しない探究学習・PBL・こども社長コミュニティー育成
2. トキメキ駆動型社会課題解決 — 予算・リソースが限られた地方都市での仲間づくりとソーシャルアクション

## Projects
- のれんバンク（2023〜）：佐世保の閉店名飲食店アーカイブと文化保護
- on°C（オンド）（2024〜）：佐世保市内のコラボレーションスペース運営
- 長崎北高探究支援チーム「ポラリスQ」（2025〜）：高校生の探究学習支援・PBL
- Goccco（ゴッコ）（2025〜）：子どもが本物の商売を体験するキッズ小商いプロジェクト
- マイプロジェクト長崎県SUMMIT（2023〜）：探究学習発表イベント
- AI社員育成計画（2023〜）：地方金融機関でのAI活用人材育成

## Contact
- Web: https://y-nishinobu.soitgoes.page
- Mail: y-nishinobu@soitgoes.page
- Note: https://note.com/yoshimasa_n

## Collaboration
コラボレーション受付中。佐世保・長崎で面白いことをやりたい方はお気軽にご連絡ください。
```

---

### タスク5（任意）：OG画像の準備

`public/images/og-image.jpg` を用意する（1200×630px）。
既存のプロフィール写真をトリミングしてもOK。
なければタスク1-2の `images` 配列はいったんコメントアウトしてOK。

---

## 作業完了後の確認

1. `npm run build` でビルドエラーがないか確認
2. `npm run dev` で以下をブラウザ確認：
   - `http://localhost:3000/robots.txt` → 内容が表示されるか
   - `http://localhost:3000/sitemap.xml` → XML が表示されるか
   - `http://localhost:3000/llms.txt` → テキストが表示されるか
3. ブラウザの開発者ツール → Elements で `<html lang="ja">` になっているか
4. GitHub push → Vercel 自動デプロイ確認

---

## 参考

- JSON-LD テスト：https://search.google.com/test/rich-results
- OGP テスト：https://developers.facebook.com/tools/debug/
- llms.txt 標準：https://llmstxt.org
