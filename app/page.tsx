'use client';

import { useLang } from '@/hooks/useLang';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeBar from '@/components/MarqueeBar';
import FocusSection from '@/components/FocusSection';
import WorkSection from '@/components/WorkSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useLang();

  return (
    <main style={{ backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
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
