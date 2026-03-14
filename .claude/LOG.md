# 作業ログ

セッションごとに追記していく。新しいものが上。

---

## 2026-03-15（セッション3）

### dummy-5（マイプロジェクト長崎県Summit）コンテンツ実装
- tag: `探究学習 / Inquiry-Based Learning`
- year: `2023年〜／佐世保市 / Since 2023, Sasebo`
- title: `マイプロジェクト長崎県Summit`
- desc: カード幅に収まるよう圧縮（2行くらい）
- detail（story・outcomes）EN/JP 追加
- `imgSrc: '/images/resize/maipro.jpg'`（`sips` で800pxにリサイズ）

### dummy-6（AI社員育成計画）コンテンツ実装
- tag: `AI学習 / AI Learning`
- year: `2023年〜／佐世保市 / Since 2023, Sasebo`
- title: `AI社員育成計画`（旧プロトタイプ勉強会）
- desc・detail（story・outcomes）EN/JP 追加
- `imgSrc: '/images/resize/ai-study.jpg'`（`sips` で800pxリサイズ）

### WorkDetailClient.tsx バグ修正
- **CTA ボタン「白文字×白背景」**: dummy-5（`#F5F5F0`）で文字が消える問題 → `color: '#FFFFFF'` を `color: pal.textColor` に変更
- **成果の●マーク消える**: `backgroundColor: card.bg` で背景と同化 → `backgroundColor: '#000000'` に固定

### グリッチエフェクト削除
- グリッチが「うるさい」との判断で完全削除
- `glitching` state・`triggerGlitch`・オーバーレイ4枚を WorkSection.tsx から除去
- シンプルな `activate()` のみ残す：初回ホバー（デスクトップ）または inView（モバイル）でモノクロ→カラーに 0.5s ease

### カードカラーを CARD_PALETTE で一元管理（Plan A: ビビッド6色）
- `lib/content.ts` に `CARD_PALETTE` を追加（`as const`、6エントリ）
- 各カードから個別の色プロパティ（`bg/textColor/tagBg/tagColor/tagBorder/arrowBg/arrowColor/descBg/descText/arrowEffect`）を削除
- `index % CARD_PALETTE.length` で自動ローテーション → プロジェクトが7件目以降に増えても自動対応
- 変更ファイル: `WorkSection.tsx`・`WorkDetailClient.tsx`・`app/work/page.tsx`

### HTML サンプルファイル作成（sample/ フォルダ）
- `sample/color-plan-demo.html` … カード配色3プラン比較（A:ビビッド6色 / B:明暗チェッカー / C:ダークトーン統一）
- `sample/footer-color-demo.html` … フッター配色3プラン比較（A:黒×黄 / B:紺×黄 / C:白×黒）
- 採用決定: カードは **Plan A（ビビッド6色）**、フッターは **Option A（黒×黄 #FFF133）**

### フッター配色変更（最終: Option A 黒×黄）
- Option C（白×黒）を試した後、Option A（黒×黄）に決定
- `backgroundColor: '#FFFFFF'` → `'#000000'`
- `color: '#000000'` → `'#FFFFFF'`
- h2 アクセント: `#FF3131`（赤）→ `#FFF133`（黄）
- バッジ: 黒ボーダー → 黄ボーダー＋`rgba(255,241,51,0.08)` 背景
- 本文ボーダー左: 黒 → `#FFF133`
- CTA ボタン: 黒地×白文字 → 黄地（`#FFF133`）×黒文字
- ゴーストテキスト・ソーシャルボーダー・コピーライト色などを白ベースに更新

---

## 2026-03-14（セッション2）

### テキスト反映（SITE_TEXT.md → content.ts）
- **hero.EN.h1**: `['Culti', 'vate the Soil,', 'for Dreams.', '']`
  - JP の農業アナロジー（`土壌を耕す`）を英語でも表現すべく CULTIVATE を採用
  - スプリットワードトリックを活かした区切り位置
- **hero.JP.h1**: `['夢が育つ', '土壌を', 'みなで耕す。', '']`
- **about.JP.summary**: `'佐世保を拠点とするコミュニティビルダー、プランナー、金融機関職員。教育系社団理事。'`
- **about.EN.summary**: `'Community builder, planner & bank employee based in Sasebo. Board member of an educational nonprofit.'`
- **about.JP.photoCaption**: `'長崎,2026年\n父を越えてゆけ！'`（2行構成）
- **about.EN.photoCaption**: `'Yoshimasa Nishinobu, Sasebo, 2026\nSurpass your father!'`（2行構成）
- **footer** EN/JP：h2・body・cta・bgText1/2・copy を全更新
- **copyright**: `© 2025 Yoshimasa Nishinobu. Local Focus, Global Mind.` → `© 2026 Yoshimasa Nishinobu`（EN/JP 共通 replace_all）

### FocusSection：3枚 → 2枚グリッド
- youth-mentorship カード（旧02）を削除
- `gridTemplateColumns: repeat(3, 1fr)` → `repeat(2, 1fr)`
- カード間ボーダーも `index < 1` に修正

### ポラロイドキャプション・要約テキストの色を黒に統一
- `HeroSection.tsx` デスクトップキャプション: `rgba(0,0,0,0.35)` → `#000000`
- `HeroSection.tsx` プロフィール要約 `<p>`: `rgba(0,0,0,0.65)` → `#000000`

### photoCaption の2行表示対応
- `\n` 区切りを `whiteSpace: 'pre-line'` でレンダリング
  - `HeroSection.tsx`（モバイル・デスクトップ両方）
  - `app/about/page.tsx`
- **about ページは1行目のみ**: `a.photoCaption.split('\n')[0]`
  - 理由：about ページは本人写真のため「父を越えてゆけ！」は文脈が合わない

### SITE_TEXT.md の管理
- 適用済み `[x]` 項目を `[ ]` にリセット
- EN 値を実際の実装値に更新

### プレビューサーバー切断と復旧
- 旧 serverId 無効化 → ポート3000の Node プロセス (PID 29804) を kill → `preview_start` で再起動

---

## 2026-03-14（セッション1）

### ドキュメント構成の整理
- `MEMORY.md`（~/.claude/）を最小限に圧縮（概要・ポインタのみ）
- プロジェクト内に `.claude/` フォルダを作成し、詳細ドキュメントを分離
  - `.claude/LOG.md` … セッションごとの作業ログ
  - `.claude/TECH_NOTES.md` … 技術メモ・意思決定の記録


### 画像フォルダの整備
- `public/images/` を作成
- `public/images/original/` … 元データ保管用
- `public/images/resize/` … サイト実装用（このパスを content.ts に流し込む）
- ファイル名は英語に統一ルール確立

### 画像の実装
- `components/HeroSection.tsx`：`next/image` 導入。モバイル・デスクトップ両ポラロイドに `profile.jpg` を適用
- `app/about/page.tsx`：`next/image` 導入。ポラロイドに `resize/profile-about.jpg` を適用

### ポラロイドサイズ 1.25倍
- モバイル: フレーム 180 → 225px、写真エリア 164×130 → 205×163px
- デスクトップ: フレーム 260 → 325px、写真エリア 240×190 → 300×238px

### 言語設定の全ページ永続化
- `hooks/useLang.ts` 新規作成（localStorage キー: `portfolio-lang`）
- 全5ページで `useState<Lang>('EN')` → `useLang()` に置き換え
  - `app/page.tsx` / `app/about/page.tsx` / `app/work/page.tsx`
  - `app/focus/[slug]/FocusDetailClient.tsx` / `app/work/[slug]/WorkDetailClient.tsx`

---

## 〜2026-03-13（前セッション）

### モバイル対応（全ページ）
- About・Work ページを `'use client'` + `useIsMobile` に変換
- Work・Focus 詳細ページを Server Component ラッパー + Client Component に分離
- FocusSection：ホバーエフェクトをスマホで無効化
- WorkSection：説明テキストをスマホで常時表示

### ハイドレーション修正
- `hooks/useIsMobile.ts`：初期値を `false` 固定に変更してSSR/CSR不一致を解消

### About 入口の追加
- ナビに About リンクを追加
- HeroSection：モバイルにもポラロイドを追加（/about へリンク）
