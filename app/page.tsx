'use client';

import { useEffect } from 'react';
import { useLang } from '@/hooks/useLang';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeBar from '@/components/MarqueeBar';
import FocusSection from '@/components/FocusSection';
import WorkSection from '@/components/WorkSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useLang();

  // 別ページから /#contact で遷移してきたとき、hydration 後にフッターへスクロール
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const t = setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
