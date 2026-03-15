'use client';

/**
 * ホームページのアニメーション 1回限り制御
 * - reload でリセット（モジュールレベル変数はリロードで初期化される）
 * - SPA ナビゲーションでは保持（back で戻ってきたときはスキップ）
 */
let _visited = false;

/** ホームから離れるときに呼ぶ（useEffect の cleanup として渡す） */
export const markVisited = (): void => { _visited = true; };

/** 戻り訪問なら true → アニメーション・タイプライターをスキップ */
export const shouldSkipAnim = (): boolean => _visited;
