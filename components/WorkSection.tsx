'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CONTENT, CARD_PALETTE, Lang } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { lang: Lang };

export default function WorkSection({ lang }: Props) {
  const h = CONTENT.work.header[lang];
  const cards = CONTENT.work.cards;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <section
      id="work"
      ref={ref}
      style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 80px',
        backgroundColor: '#F5F5F0',
        position: 'relative',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ marginBottom: isMobile ? '40px' : '80px' }}
      >
        <h2 style={{
          fontSize: 'clamp(2.4rem, 10vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: '#000000',
          marginBottom: '24px',
        }}>
          {h.h2Line1}<br />{h.h2Line2}
        </h2>
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'rgba(0,0,0,0.55)',
          maxWidth: '520px',
          borderLeft: '3px solid #6080A8',
          paddingLeft: '16px',
        }}>
          {h.sub}
        </p>
      </motion.div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        border: '2px solid #000000',
      }}>
        {cards.map((card, i) => (
          <WorkCard
            key={card.slug}
            card={card}
            lang={lang}
            index={i}
            inView={inView}
            isMobile={isMobile}
            total={cards.length}
          />
        ))}
      </div>

      {/* Archive CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ marginTop: '48px', textAlign: 'center' }}
      >
        <Link
          href="/work"
          className="brutal-shadow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '12px 28px',
            border: '2px solid #000000',
            textDecoration: 'none',
          }}
        >
          {CONTENT.work.archiveCta[lang]} →
        </Link>
      </motion.div>
    </section>
  );
}

function WorkCard({
  card,
  lang,
  index,
  inView,
  isMobile,
  total,
}: {
  card: (typeof CONTENT.work.cards)[number];
  lang: Lang;
  index: number;
  inView: boolean;
  isMobile: boolean;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [activated, setActivated] = useState(false);
  const [twText, setTwText] = useState('');
  const [twDone, setTwDone] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-80px' });
  // stale closure 回避
  const activatedRef = useRef(false);
  const twStartedRef = useRef(false);

  const imgSrc = 'imgSrc' in card && card.imgSrc ? card.imgSrc : null;
  const pal = CARD_PALETTE[index % CARD_PALETTE.length];

  // ─── モノクロ→カラー（グリッチなし）────────────────────────────
  function activate() {
    if (activatedRef.current || !imgSrc) return;
    activatedRef.current = true;
    setActivated(true);
  }

  // ─── Typewriter ───────────────────────────────────────────────
  useEffect(() => {
    if (!cardInView || twStartedRef.current) return;
    twStartedRef.current = true;
    const fullText = card.desc[lang];
    // カードのフェードイン後に開始（カードごとにずらす）
    const startDelay = 600 + index * 160;

    const outerTimer = setTimeout(() => {
      let i = 0;
      function type() {
        i++;
        setTwText(fullText.slice(0, i));
        if (i < fullText.length) {
          setTimeout(type, 14 + Math.random() * 22);
        } else {
          setTwDone(true);
        }
      }
      type();
    }, startDelay);

    return () => clearTimeout(outerTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardInView]);

  // ─── モバイル: inView で自動起動（カードごとに 180ms ずらす）──
  useEffect(() => {
    if (cardInView && isMobile && !activatedRef.current && imgSrc) {
      const t = setTimeout(activate, index * 180);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardInView, isMobile]);

  // ─── デスクトップ: 最初のホバーで起動 ────────────────────────
  function handleMouseEnter() {
    setHovered(true);
    if (!isMobile) activate();
  }

  // twDone 後は lang 切替に追従（タイプライター再生は初回のみ）
  const displayText = twDone ? card.desc[lang] : twText;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + index * 0.12 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRight: !isMobile && index % 3 !== 2 ? '2px solid #000000' : 'none',
        borderBottom: isMobile
          ? (index < total - 1 ? '2px solid #000000' : 'none')
          : (Math.floor(index / 3) < Math.floor((total - 1) / 3) ? '2px solid #000000' : 'none'),
        backgroundColor: pal.bg,
        color: pal.textColor,
        padding: isMobile ? '28px 24px' : '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'default',
      }}
    >
      {/* Tag + year — always stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '24px', gap: '6px' }}>
        <span style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          backgroundColor: pal.tagBg,
          color: pal.tagColor,
          border: `1px solid ${pal.tagBorder}`,
          padding: '3px 10px',
        }}>
          {card.tag[lang]}
        </span>
        <span style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          color: pal.textColor,
          opacity: 0.9,
        }}>
          {card.year[lang]}
        </span>
      </div>

      {/* Photo slot */}
      <div style={{
        width: '100%',
        height: isMobile ? '200px' : '160px',
        border: '2px solid rgba(0,0,0,0.25)',
        overflow: 'hidden',
        marginBottom: '24px',
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.08)',
        flexShrink: 0,
      }}>
        {imgSrc ? (
          <>
            {/* メイン画像: スクロール/ホバーでモノクロ→カラー */}
            <Image
              src={imgSrc}
              alt={String((card as any).imgAlt || card.title[lang])}
              fill
              style={{
                objectFit: 'cover',
                filter: activated ? 'none' : 'saturate(0) brightness(0.8)',
                transition: 'filter 0.5s ease',
                zIndex: 1,
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            />
          </>
        ) : (
          // 写真なし: プレースホルダー
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="1" stroke={pal.textColor} strokeWidth="1.2" strokeOpacity="0.35"/>
              <circle cx="12" cy="12" r="3" stroke={pal.textColor} strokeWidth="1.2" strokeOpacity="0.35"/>
              <path d="M3 17 L7 13 L10 16 L13 12 L21 17" stroke={pal.textColor} strokeWidth="1" strokeOpacity="0.2"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.48rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: pal.textColor,
              opacity: 0.3,
            }}>
              Add Photo
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 'clamp(1.4rem, 5vw, 1.9rem)',
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: '-0.04em',
        textTransform: 'uppercase',
        marginBottom: '16px',
      }}>
        {card.title[lang]}
      </h3>

      {/* Description — タイプライター */}
      <div style={{
        backgroundColor: pal.descBg,
        color: pal.descText,
        padding: '14px',
        fontSize: '0.95rem',
        lineHeight: 1.65,
        border: '2px solid rgba(0,0,0,0.15)',
        marginBottom: '16px',
        flexGrow: 1,
        minHeight: '90px',
      }}>
        {displayText}
        {!twDone && (
          <span className="tw-cursor" style={{ color: pal.descText }}>▋</span>
        )}
      </div>

      {/* Arrow link */}
      <Link
        href={`/work/${card.slug}`}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: pal.arrowBg,
          color: pal.arrowColor,
          border: '2px solid #000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          fontWeight: 700,
          alignSelf: 'flex-end',
          transform: (!isMobile && hovered) ? 'scale(1.25)' : 'none',
          transition: 'transform 0.2s',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        →
      </Link>
    </motion.div>
  );
}
