'use client';

import { useLayoutEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect → useLayoutEffect に変更:
  // ペイント前にモバイル判定を確定させることで、レイアウトシフトによる
  // スクロール位置のズレ（ブラウザバック後に上にズレる問題）を防ぐ
  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}
