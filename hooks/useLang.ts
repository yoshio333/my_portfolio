'use client';

import { useState, useEffect } from 'react';
import { Lang } from '@/lib/content';

export type { Lang };

const STORAGE_KEY = 'portfolio-lang';

export function useLang(): [Lang, (lang: Lang) => void] {
  const [lang, setLangState] = useState<Lang>('EN');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'EN' || stored === 'JP') {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    setLangState(newLang);
  };

  return [lang, setLang];
}
