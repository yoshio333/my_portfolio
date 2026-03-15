'use client';

import { useEffect } from 'react';
import { useLang } from '@/hooks/useLang';
import { markVisited } from '@/hooks/useAnimOnce';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeBar from '@/components/MarqueeBar';
import FocusSection from '@/components/FocusSection';
import WorkSection from '@/components/WorkSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useLang();

  // ホームから離れたら「訪問済み」フラグを立てる（戻ったときアニメをスキップ）
  useEffect(() => markVisited, []);

  // 別ページから /#contact で遷移してきたとき、hydration 後にフッターへスクロール
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const t = setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView();
      }, 100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <main style={{ backgroundColor: '#FFFFFF' }}>
      <Header lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <MarqueeBar lang={lang} />
      <FocusSection lang={lang} />
      <MarqueeBar lang={lang} />
      <WorkSection lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
