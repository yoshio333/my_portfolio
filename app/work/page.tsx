'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTENT, CARD_PALETTE } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLang, Lang } from '@/hooks/useLang';

export default function WorkPage() {
  const [lang, setLang] = useLang();
  const isMobile = useIsMobile();
  const h = CONTENT.workPage[lang];
  const cards = CONTENT.work.cards;

  return (
    <main style={{ backgroundColor: '#F5F5F0', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Top nav bar ── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: '2px solid #000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 56px',
        height: '64px',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#000000',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          {h.backLabel}
        </Link>

        {/* EN / JP toggle */}
        <div style={{ display: 'flex', border: '2px solid #000000' }}>
          {(['EN', 'JP'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '4px 12px',
                border: 'none',
                borderRight: l === 'EN' ? '1px solid #000000' : 'none',
                backgroundColor: lang === l ? '#000000' : '#FFFFFF',
                color: lang === l ? '#FFFFFF' : '#000000',
                cursor: 'pointer',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* ── Page header ── */}
      <div style={{
        padding: isMobile ? '40px 24px 32px' : '72px 80px 56px',
        borderBottom: '2px solid #000000',
        backgroundColor: '#FFFFFF',
      }}>
        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 6rem)',
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: '#000000',
          marginBottom: '24px',
        }}>
          {h.title}
        </h1>
        <p style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.88rem',
          lineHeight: 1.7,
          color: 'rgba(0,0,0,0.55)',
          maxWidth: '520px',
          borderLeft: '3px solid rgba(0,0,0,0.2)',
          paddingLeft: '16px',
          margin: 0,
        }}>
          {h.subtitle}
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
        borderBottom: '2px solid #000000',
      }}>
        {cards.map((card, i) => {
          const hasImg = 'imgSrc' in card && card.imgSrc;
          const pal = CARD_PALETTE[i % CARD_PALETTE.length];
          return (
            <div
              key={card.slug}
              style={{
                borderRight: !isMobile && i % 3 < 2 ? '2px solid #000000' : 'none',
                borderBottom: isMobile
                  ? (i < cards.length - 1 ? '2px solid #000000' : 'none')
                  : (i < cards.length - 3 ? '2px solid #000000' : 'none'),
                backgroundColor: pal.bg,
                color: pal.textColor,
                padding: isMobile ? '28px 20px' : '36px 32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tag + year */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px', gap: '6px' }}>
                <span style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  backgroundColor: pal.tagBg,
                  color: pal.tagColor,
                  border: `1px solid ${pal.tagBorder}`,
                  padding: '3px 10px',
                  whiteSpace: 'nowrap',
                }}>
                  {card.tag[lang]}
                </span>
                <span style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.6rem',
                  color: pal.textColor,
                  opacity: 0.75,
                }}>
                  {card.year[lang]}
                </span>
              </div>

              {/* Photo */}
              <div style={{
                width: '100%',
                height: '180px',
                border: '2px solid rgba(0,0,0,0.25)',
                overflow: 'hidden',
                marginBottom: '20px',
                position: 'relative',
                backgroundColor: 'rgba(0,0,0,0.08)',
                flexShrink: 0,
              }}>
                {hasImg ? (
                  <Image
                    src={(card as { imgSrc: string }).imgSrc}
                    alt={String((card as any).imgAlt || card.title[lang])}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                  />
                ) : (
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '8px',
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="1" stroke={pal.textColor} strokeWidth="1.2" strokeOpacity="0.35"/>
                      <circle cx="12" cy="12" r="3" stroke={pal.textColor} strokeWidth="1.2" strokeOpacity="0.35"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                textTransform: (card as any).caseSensitiveTitle ? 'none' : 'uppercase',
                marginBottom: '12px',
                flexGrow: 1,
              }}>
                {card.title[lang]}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '0.86rem',
                lineHeight: 1.65,
                color: pal.textColor,
                opacity: 0.75,
                marginBottom: '20px',
              }}>
                {card.desc[lang]}
              </p>

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
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                →
              </Link>
            </div>
          );
        })}
      </div>

      {/* ── Footer nav ── */}
      <div style={{ padding: isMobile ? '32px 20px' : '48px 80px', textAlign: 'center' }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          color: '#000000',
          border: '2px solid #000000',
          padding: '12px 28px',
          backgroundColor: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.15)',
        }}>
          {h.backLabel}
        </Link>
      </div>
    </main>
  );
}
