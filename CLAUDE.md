# ポートフォリオサイト（西信様）

## プロジェクト概要
- **場所**: `/Users/yoshimasa_n/dev/portfolio`
- **構成**: Next.js + TypeScript（App Router）
- **dev server**: `localhost:3000`
- **テキスト管理**: `lib/content.ts` に EN/JP 両言語を集約
- **言語切り替え**: あり（`hooks/useLang.ts`、localStorage に保存）
- **レスポンシブ**: `hooks/useIsMobile.ts`（ブレークポイント 768px）

---

## ユーザーの作業スタイル・好み

- **日本語で話す**
- 全体計画を共有されても、**都度指示を待つ**（先走りしない）
- トークン消費が多そうな作業は**先に確認**してから着手
- 長考するなら**何を考えているか口に出す**（黙って考え込まない）
- 「戻る」ボタン・ナビゲーションの挙動には細かい。UXの一貫性を重視
- スクロール・アニメーションのバグに敏感（ブラウザバック後の挙動など）

---

## AI の作業ルール（必ず守ること）

### セッション開始時
1. **`.claude/STATUS.md` を読んで現在地を確認する**
2. 必要なら関連ファイルを Read する（聞かずに読む）

### コーディング中（最重要）
**修正・機能追加が完了するたびに `.claude/LOG.md` に即メモする。**
- セッション末にまとめて書くのは NG（圧縮されて消える）
- コーディングは会話より圧縮が速い → こまめに書く
- 「何をしたか」より **「なぜそうしたか」** を書く（コードは残るが理由は消える）

```markdown
### [機能/バグ名]
- 変更: xxx → yyy
- 理由: ~~~だったため
```

### セッション終了時
1. **`.claude/STATUS.md` を最新状態に更新する**（次回の引き継ぎ）
2. 作業ログを `.claude/LOG.md` に追記する（まだなら）

---

## プロジェクト構成

```
portfolio/
├── app/
│   ├── page.tsx              # ホーム（HeroSection + WorkSection + FocusSection + Footer）
│   ├── about/page.tsx        # About ページ
│   ├── work/
│   │   ├── page.tsx          # 実績一覧
│   │   └── [slug]/           # 実績詳細（page.tsx + WorkDetailClient.tsx）
│   └── focus/[slug]/         # 重点領域詳細
├── components/
│   ├── HeroSection.tsx
│   ├── WorkSection.tsx       # WorkCard コンポーネントを内包
│   ├── FocusSection.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useLang.ts            # 言語切り替え（localStorage）
│   ├── useIsMobile.ts        # レスポンシブ判定（useLayoutEffect）
│   └── useAnimOnce.ts        # アニメーション一回限り制御
├── lib/
│   └── content.ts            # 全テキスト・CARD_PALETTE を管理
└── public/images/
    ├── original/             # 元データ保管
    └── resize/               # サイト実装用（長辺800px）
```

---

## 重要な設計ルール

- **テキストは必ず `lib/content.ts` に書く**（コンポーネントに直書きしない）
- **カードカラーは `CARD_PALETTE[index % 6]` で参照**（カードに直接色を持たせない）
- **アニメーション状態（entered）は `useLayoutEffect` でスキップ判定する**（ペイント前に確定させる）
- **`useIsMobile` は `useLayoutEffect`**（`useEffect` だとレイアウトシフトが起きる）
- **`useState<Lang>('EN')` は使わない** → 必ず `useLang()` を使う

---

## AI活動レポート（`public/ai/`）

- `y-nishinobu.soitgoes.page/ai/` はAI勉強会・ハッカソンの開催レポート集。**Next のルートではなく `public/ai/` の素のHTML**（`/tankyu/` と同じ方式・trailingSlash 前提）。2026-09-23 に `~/dev/ambassador-report` から移設した（旧 `ambassador-report.vercel.app/*` は 308 でここへ転送）
- **レポートの文体・制作手順の正本は `~/dev/ambassador-report/.claude/CLAUDE.md`**（西信を強く出さない／教える・教わるの上下を作らない／総括で締めない 等）。新しい回を書く前に必ず読む
- 新しい回を足したら：(1) `public/ai/` にHTMLと写真（長辺1600px・品質80）を置く (2) `public/ai/index.html` のカード先頭に1枚足す (3) `app/sitemap.ts` の `AI_REPORTS` に1行足す (4) `public/llms.txt` の AI Activity Reports に1行足す
- canonical・og:url・JSON-LD の URL は `https://y-nishinobu.soitgoes.page/ai/...`。サイト内リンクは相対（`href="tosu-...html"`）、一覧へ戻るリンクは `href="/ai/"`
- HTMLコメントは入れない（配信物に内部メモを残さない）

## 詳細ドキュメント（`.claude/` フォルダ）
- `.claude/STATUS.md` … **現在地メモ（セッション開始時に必ず読む）**
- `.claude/LOG.md` … 作業ログ（随時追記）
- `.claude/TECH_NOTES.md` … 技術的判断・ハマりやすいポイント集
- `.claude/!COLLECT.md` … マスターAI向け知見回収ガイド
- `.claude/templates/` … 次のプロジェクト用テンプレート
