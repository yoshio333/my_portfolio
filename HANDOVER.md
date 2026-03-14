# ポートフォリオ制作 — 引き継ぎ作業ログ

> 最終更新: 2026-03-14
> プロジェクトパス: `/Users/yoshimasa_n/Desktop/portfolio`
> 開発サーバー: `http://localhost:3000`（`npm run dev` で起動）

---

## 🏗 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 15（App Router） |
| スタイリング | Tailwind CSS v4（`@theme inline` 方式、tailwind.config.js なし） |
| アニメーション | Framer Motion 12 |
| フォント | Space Grotesk（見出し）/ Space Mono（モノ） |
| 言語 | TypeScript |
| デプロイ先（予定） | Vercel |

---

## ✅ 完了済みステップ

### ステップ①② — 参考サイト調査・Variant選定
別Claudeセッションで完了済み。

### ステップ③ — SPEC.md 作成
`/portfolio/SPEC.md` に設計書あり。
デザイン方針: **Brutalist Warmth**（2pxブラックボーダー、brutal shadow、ブランドカラー3色）

### ステップ④ — 環境構築
- `~/.claude/skills/frontend-design/SKILL.md` インストール済み
- `framer-motion` / `next-intl` インストール済み
- `.claude/launch.json` 設定済み（npm run dev, port 3000）

### ステップ⑤ — Hero6案テスト
`/portfolio/hero-tests/` に6ファイル作成済み。
**採用: 案6（liquid blob SVG）**

### ステップ⑥ — PC版実装（完了）

#### 作成・更新済みファイル

```
portfolio/
├── lib/
│   └── content.ts          ★ 全テキスト(EN/JP)・slug・詳細データ一元管理
├── app/
│   ├── globals.css          ★ ブランドスタイル・blob @keyframes・marquee
│   ├── layout.tsx           ★ Space Grotesk/Mono フォント設定
│   ├── page.tsx             ★ 全セクション組み立て（lang state管理）
│   ├── focus/
│   │   └── [slug]/
│   │       └── page.tsx     ★ Focus詳細ページ（Server Component）
│   └── work/
│       └── [slug]/
│           └── page.tsx     ★ Work詳細ページ（Server Component）
└── components/
    ├── Header.tsx            ★ 固定ナビ + EN/JP切替
    ├── HeroSection.tsx       ★ 液体blob + ポラロイド写真スペース
    ├── MarqueeBar.tsx        ★ 黒帯スクロールテキスト
    ├── FocusSection.tsx      ★ 3カラムカード → /focus/[slug] リンク
    ├── WorkSection.tsx       ★ 3カラムカード → /work/[slug] リンク
    └── Footer.tsx            ★ 軽やかな青系フッター
```

---

## 🎨 デザイン仕様

### ブランドカラー
| 用途 | カラー |
|---|---|
| Red（アクセント） | `#FF3131` |
| Blue（メイン） | `#2E5BFF` |
| Yellow（ハイライト） | `#FFF133` |
| Black | `#000000` |

### Blobカラー（長崎インスピレーション）
| イメージ | カラー | opacity |
|---|---|---|
| 海の青 | `#3B9DD2` | 0.52 |
| 夕日のオレンジ | `#FF6B35` | 0.42 |
| 山の緑 | `#52A86A` | 0.40 |
| 海の青（小） | `#3B9DD2` | 0.32 |

### ブロブ設定
- SVG viewBox: `0 0 960 720`（少し大きくしてサイズ抑え目）
- 4個（もとは6個）
- CSS `d:` path morphing アニメーション（`.blob` 〜 `.blob-4`）

---

## 📝 テキスト変更方法

**`lib/content.ts` の値を書き換えるだけ。**

```typescript
// 例：ヒーローの本文を変える
hero: {
  EN: {
    body: 'ここを書き換える',
  },
  JP: {
    body: 'ここを日本語で書き換える',
  },
}
```

---

## 🔗 ページ構成・ルーティング

| URL | 内容 |
|---|---|
| `/` | メインページ（Hero/Focus/Work/Footer） |
| `/focus/educational-ecosystems` | 教育エコシステム 詳細 |
| `/focus/youth-mentorship` | ユースメンタリング 詳細 |
| `/focus/civic-dialogue` | 市民対話 詳細 |
| `/work/local-tech-camp` | 地域テックキャンプ 詳細 |
| `/work/roots-youth-hub` | Rootsユースハブ 詳細 |
| `/work/town-hall-2` | タウンホール2.0 詳細 |

---

## 🖼 写真の入れ替え方

### ヒーローのポラロイド写真
`components/HeroSection.tsx` の ポラロイドカード部分に `<Image>` を追加：

```tsx
// HeroSection.tsx の photo slot（placeholder状態）
// → src="/images/your-photo.jpg" の Image コンポーネントに差し替え
```

### WorkSection の各カード写真
`lib/content.ts` の `work.cards[].imgSrc` の値を変更：

```typescript
{
  slug: 'local-tech-camp',
  imgSrc: '/images/local-tech-camp.jpg',  // ← ここをローカル画像パスに変更
  imgAlt: '写真の説明',
}
```

### Focus詳細ページの写真
`lib/content.ts` の `focus.items[].coverImg` を変更。

---

## 🚧 残タスク（優先度順）

### すぐやること
- [ ] **実際のテキストに差し替え**（`lib/content.ts` を編集）
- [ ] **自分の写真をポラロイドに追加**（`HeroSection.tsx` の photo slot）
- [ ] **各プロジェクト写真を差し替え**（`lib/content.ts` の imgSrc）

### 次のステップ
- [ ] **モバイル対応**（レスポンシブCSS）
  - ブレークポイント: 768px以下でシングルカラム
  - ヒーローH1のフォントサイズ調整
  - MarqueeBarのスピード調整
- [ ] **EN/JP 切替の状態管理改善**（現在は各ページ独立。詳細ページはEN固定）
  - 詳細ページに lang prop を渡す or URLパラメータ化
- [ ] **実際のメールアドレスに変更**（Footer.tsx の `mailto:hello@example.com`）
- [ ] **SNSリンクを実URLに変更**（`lib/content.ts` の `footer.social[].href`）

### ステップ⑦⑧（元の計画）
- [ ] **ステップ⑦**: CMSの検討（Contentful / microCMS / Notion API）
- [ ] **ステップ⑧**: Vercelデプロイ
  - `vercel --prod` で即デプロイ可能な状態
  - 環境変数は現時点では不要

---

## ⚙️ 開発サーバーの起動方法

```bash
cd /Users/yoshimasa_n/Desktop/portfolio
npm run dev
# → http://localhost:3000 でアクセス
```

---

## 🐛 既知の注意点

1. **Tailwind v4**: `tailwind.config.js` は不要。テーマは `globals.css` の `@theme inline` ブロックで管理
2. **next.config.ts**: Unsplash画像ドメインを `remotePatterns` に許可済み。ローカル画像は `public/` フォルダに置けばOK
3. **blob アニメーション**: `globals.css` に `.blob` 〜 `.blob-4` の `@keyframes morphBlobX` が定義済み。`.blob-5` `.blob-6` のCSSは残っているが未使用（削除不要）
4. **詳細ページの言語**: 現在EN固定。JPテキストは `content.ts` にデータとして存在しているが詳細ページでは使っていない

---

## 💬 新スレッドへの引き継ぎ方法

新しいClaudeスレッドを開いたら、このメッセージをコピペして渡す：

```
ポートフォリオサイト制作の続きをお願いします。
引き継ぎログが /Users/yoshimasa_n/Desktop/portfolio/HANDOVER.md にあります。
まずそのファイルを読んで、現状を把握してから作業してください。
```
