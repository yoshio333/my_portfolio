# 技術メモ・意思決定の記録

---

## アーキテクチャ

### Server Component と Client Component の分離
- **ルール**: `'use client'` と `generateStaticParams` は同一ファイルに書けない（Next.js 制約）
- **対応**: `page.tsx` を薄い Server Component ラッパーにし、UIは `XxxClient.tsx` に切り出す
- **対象ファイル**: `app/work/[slug]/`, `app/focus/[slug]/`

### 言語切り替え（useLang）
- `hooks/useLang.ts` で管理。localStorage キー: `portfolio-lang`
- 初期値は `'EN'`（SSR安全）、`useEffect` 内で localStorage から読み込む
- `useState<Lang>('EN')` は使わない → 必ず `useLang()` を使うこと

### レスポンシブ（useIsMobile）
- `hooks/useIsMobile.ts`、ブレークポイント: 768px
- 初期値 `false` 固定（SSR/CSRハイドレーション不一致を防ぐため）
- **`useLayoutEffect` 内で実際の値をセット**（セッション5で `useEffect` から変更）
  - 変更理由: `useEffect` だとペイント後にモバイル判定が確定するため、グリッドが3カラム→1カラムに切り替わるレイアウトシフトが発生しスクロール位置がズレた

### アニメーション一回限り制御（useAnimOnce）
- `hooks/useAnimOnce.ts` にモジュールレベル変数 `_visited` を定義
- **リロードでリセット・SPAナビゲーション間は保持** → `sessionStorage` より適切（タブ内でもリロードでリセットされる）
- `markVisited()`: ホームの `useEffect` cleanup として登録 → ホームから離れた瞬間に `true` にセット
- `shouldSkipAnim()`: 各コンポーネントの `useLayoutEffect` 内で確認 → `true` なら即 `entered = true` をセット
- **必ず `useLayoutEffect` で呼ぶこと** → ペイント前に実行されるため opacity:0 の初期状態が画面に映らない（白フラッシュなし）

```ts
// hooks/useAnimOnce.ts
'use client';
let _visited = false;
export const markVisited = (): void => { _visited = true; };
export const shouldSkipAnim = (): boolean => _visited;
```

```tsx
// 各コンポーネントでの使い方
useLayoutEffect(() => {
  if (shouldSkipAnim()) setEntered(true);
}, []);
useEffect(() => {
  if (!shouldSkipAnim()) setEntered(true); // 初回フェードイン
}, []);
```

### Framer Motion vs CSS transitions（アニメーション）
- Framer Motion の `animate` prop はコンポーネントの**マウントごとに実行**される
- ブラウザバック時（リマウント）にも再実行 → 戻り訪問でのアニメスキップが難しい
- **推奨**: `entered` state + CSS `transition` プロパティ で実装 → JavaScript 側でスキップ制御が容易
  ```tsx
  // NG: ブラウザバックでも毎回アニメーション
  <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>

  // OK: entered state で制御
  <div style={{ opacity: entered ? 1 : 0, transition: 'opacity 0.5s' }}>
  ```

---

## カラーパレット管理

### CARD_PALETTE（lib/content.ts）
- 6色のオブジェクト配列を `as const` で export
- 各エントリ: `{ bg, textColor, tagBg, tagColor, tagBorder, arrowBg, arrowColor, descBg, descText }`
- 使い方: `const pal = CARD_PALETTE[index % CARD_PALETTE.length];` → あとは `pal.bg` 等で参照
- **カードに色プロパティを直接持たせてはいけない** → 必ずインデックス参照
- カードが増えても 7件目は index=6 → 6%6=0 で先頭色に戻る（自動ローテーション）

### Plan A 採用カラー（6色）
| index | bg | textColor |
|---|---|---|
| 0 | `#FF3131`（赤） | `#FFFFFF` |
| 1 | `#FFF133`（黄） | `#000000` |
| 2 | `#2E5BFF`（青） | `#FFFFFF` |
| 3 | `#0A2340`（紺） | `#FFFFFF` |
| 4 | `#009B4E`（緑） | `#FFFFFF` |
| 5 | `#FF6B00`（オレンジ） | `#FFFFFF` |

### フッターカラー（Option A: 黒×黄）
- `backgroundColor: '#000000'`, `color: '#FFFFFF'`
- アクセント（h2 span・バッジ・CTA・本文ボーダー）: `#FFF133`
- CTA ボタン: 黄地×黒文字、ボックスシャドウは白系（`rgba(255,255,255,0.25)`）

---

## コンポーネント設計

### ポラロイド（HeroSection.tsx）
- デスクトップ: 右下・傾き付き（rotate(-4deg)）、325×238px の写真エリア
- モバイル: 中央・真っ直ぐ、225×163px の写真エリア
- 両方とも `/about` へリンク
- 画像: `src="/images/profile.jpg"`

---

## awards.items の slug パターン

`lib/content.ts` の `awards.items` にはオプションで `slug` フィールドを持てる。

```ts
{ award: {...}, project: {...}, role: {...}, slug: 'machi-gakushoku' }
```

- `slug` があれば About ページで `<Link href={/work/${slug}}>` にレンダリング
- `slug` がなければ `<span>` のまま（`'slug' in item` で判定）

---

## ブラウザバック対策（チェックリスト）

ページ遷移・バック後に以下の症状が出た場合の確認ポイント。

| 症状 | 原因 | 対策 |
|---|---|---|
| 白フラッシュ + アニメ再生 | マウント時に `entered=false` にリセット | `useLayoutEffect` + `shouldSkipAnim()` で即 `true` にセット |
| スクロール位置ズレ（下ほど上に飛ぶ） | タイプライターで説明ボックス高さが変化 | 戻り訪問時に `setTwDone(true)` で即全文表示 |
| スクロール位置ズレ（グリッド崩れ） | `useIsMobile` が `useEffect` でレイアウトシフト発生 | `useLayoutEffect` に変更 |
| 色変換アニメが再生 | `activatedRef.current` がリセットされる | `useLayoutEffect` で `setActivated(true)` + `activatedRef.current = true` |
| 「戻る」ボタンが別ページに遷移 | `<Link href="...">` で固定パス指定 | `useRouter().back()` に変更 |

---

## よくある落とし穴

### TypeScript: `imgSrc` の型絞り込みが `never` になる
- カードの型に `imgSrc` がオプションで存在する場合、`'imgSrc' in card && card.imgSrc` の型絞り込み後に他のプロパティが `never` になることがある
- 回避策: `String((card as any).imgAlt || card.title[lang])` のように `as any` でキャスト
- 対象: `WorkSection.tsx`・`WorkDetailClient.tsx`・`app/work/page.tsx` の `Image alt` 属性

### textShadow は textColor に応じて条件分岐
- 白文字のときだけ黒アウトライン用 textShadow を適用すること
- 黒文字に黒 textShadow を当てると文字が滲んで読みにくくなる
  ```tsx
  // NG
  textShadow: '-1px -1px 0 #000000, ...'
  // OK
  textShadow: pal.textColor === '#FFFFFF'
    ? '-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000'
    : 'none',
  ```

### CSS border 警告
- `border` shorthand と `borderRight` 等 longhand の混在は React 19 で警告が出る
- 同一要素では4辺を明示するか shorthand のみに統一すること
- 現在メインページ `/` で警告残存（視覚的バグなし）

### プレビューツールのスクショ幅
- プレビューツールのスクショは最大800px幅で右端が切れる
- デスクトップ右側（ポラロイドなど）の確認は `localhost:3000` をブラウザで直接開くこと

---

## 画像ワークフロー

1. `public/images/original/` に元データを入れてもらう
2. 「確認して」→ ファイル一覧・リネーム案を提示
3. `public/images/resize/` にコピー＆英語リネーム
4. 「流し込んで」→ `content.ts` や該当コンポーネントのパスを更新

### 画像リサイズコマンド
```bash
sips -Z 800 public/images/original/xxx.jpg --out public/images/resize/yyy.jpg
```
- `-Z 800` で長辺800pxに収める（アスペクト比維持）
- 出力先は必ず `public/images/resize/`、ファイル名は英語

### 画像ファイル一覧（現在）

| ファイル | 場所 | 用途 |
|---|---|---|
| `profile.jpg` | `public/images/` | ヒーロー ポラロイド（モバイル・デスクトップ） |
| `profile-about.jpg` | `public/images/resize/` | About ページ ポラロイド |
| `maipro.jpg` | `public/images/resize/` | dummy-5（マイプロジェクト長崎県Summit）カード・詳細 |
| `ai-study.jpg` | `public/images/resize/` | dummy-6（AI社員育成計画）カード・詳細 |
| ※残り4枚 | 未追加 | 実績カード（dummy-1〜4）・重点領域カバー（現在 Unsplash 等） |

### 画像ファイル一覧（更新: セッション4）

| ファイル | 場所 | 用途 |
|---|---|---|
| `profile.jpg` | `public/images/` | ヒーロー ポラロイド（モバイル・デスクトップ） |
| `profile-about.jpg` | `public/images/resize/` | About ページ ポラロイド |
| `maipro.jpg` | `public/images/resize/` | マイプロジェクト長崎県Summit カード・詳細 |
| `ai-study.jpg` | `public/images/resize/` | AI社員育成計画 カード・詳細 |
| `sakimeshi.jpg` | `public/images/resize/` | さきめし カード・詳細 |
| `machi-gakushoku.jpg` | `public/images/resize/` | まちの学食 カード・詳細 |
| ※残り | 未追加 | 実績カード dummy-1〜4・重点領域カバー（Unsplash のまま） |

### 画像の品質基準
- サイズ変更不要（Next.js が自動最適化）
- 元データが100KB以下の場合は画質が荒くなるので注意。オリジナルを使うこと
- 拡張子は JPG 推奨
