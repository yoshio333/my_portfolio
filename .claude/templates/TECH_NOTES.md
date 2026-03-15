# 技術メモ・意思決定の記録

「なぜこうなっているか」を残す場所。コードを読んでも分からない背景・判断を書く。

---

## アーキテクチャ

### [設計上の決定事項]
- [なぜそのアーキテクチャを選んだか]
- [代替案と却下した理由]

---

## よくある落とし穴（このプロジェクト固有）

### [ハマったポイント1]
- **症状**: [どう壊れるか]
- **原因**: [なぜ壊れるか]
- **対策**: [どう直すか / 避けるか]

### [ハマったポイント2]
...

---

## Next.js / React 全般でハマりやすいこと

### useEffect vs useLayoutEffect
- `useEffect`: ペイント**後**に実行 → 画面が一瞬フラッシュすることがある
- `useLayoutEffect`: ペイント**前**に実行 → 視覚的なズレなし
- **使い分け**: 見た目に影響する state（`entered`, `isMobile` など）は `useLayoutEffect`

### Framer Motion の animate はマウントごとに実行される
- `animate={{ opacity: 1 }}` はコンポーネントのマウントごとに動く
- ブラウザバック（リマウント）でもアニメーションが再生されてしまう
- **対策**: `entered` state + CSS `transition` で実装 → JS側でスキップ制御が容易
  ```tsx
  // NG
  <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
  // OK
  <div style={{ opacity: entered ? 1 : 0, transition: 'opacity 0.5s' }}>
  ```

### ブラウザバック後のスクロール位置ズレ
よくある原因：
1. **高さが変わる要素**（タイプライター・遅延レンダリング）→ 戻り訪問時に即完成形を表示
2. **レイアウトシフト**（`useIsMobile` が `useEffect` だと 3カラム→1カラムに切り替わってズレる）→ `useLayoutEffect` に変更
3. **アニメーションのリセット**（`opacity:0` から始まるとブラウザのスクロール復元がズレる）→ `useLayoutEffect` でスキップ

### 「戻る」ボタンの実装
- `<Link href="/前のページ">` は NG → 直前のページを無視して固定パスに飛ぶ
- `useRouter().back()` が正解 → ブラウザバックと同じ挙動

### textShadow の罠
- 白文字に黒アウトラインは OK。黒文字に黒アウトラインは文字が滲む
- カードのパレットで textColor が変わる場合は必ず条件分岐すること
  ```tsx
  textShadow: pal.textColor === '#FFFFFF'
    ? '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
    : 'none',
  ```

### Server Component と Client Component の分離（Next.js App Router）
- `'use client'` と `generateStaticParams` は同一ファイルに書けない
- 対応: `page.tsx` を薄いサーバーラッパーにし、UIは `XxxClient.tsx` に切り出す

---

## カラー・デザイン管理

### [カラーパレットの管理方法]
- [インデックスベースのローテーションなど]

---

## ブラウザバック対策チェックリスト

| 症状 | 原因 | 対策 |
|---|---|---|
| 白フラッシュ + アニメ再生 | マウント時に state がリセット | `useLayoutEffect` でスキップ判定 |
| スクロール位置ズレ（下ほど上に飛ぶ） | 高さが変わる要素（タイプライターなど） | 戻り訪問時に即完成形を表示 |
| スクロール位置ズレ（グリッド崩れ） | `useIsMobile` が `useEffect` | `useLayoutEffect` に変更 |
| 「戻る」ボタンが別ページへ | `<Link href>` で固定パス | `useRouter().back()` に変更 |
