'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTENT, CARD_PALETTE } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLang, Lang } from '@/hooks/useLang';

const LABELS = {
  EN: {
    back: '← Back',
    theStory: 'The Story',
    outcomes: 'Outcomes',
    allProjects: '← All Projects',
    startProject: 'Start Similar Project →',
  },
  JP: {
    back: '← 戻る',
    theStory: 'ストーリー',
    outcomes: '成果',
    allProjects: '← プロジェクト一覧',
    startProject: '同様のプロジェクトを始める →',
  },
};

export default function WorkDetailClient({ slug }: { slug: string }) {
  const [lang, setLang] = useLang();
  const isMobile = useIsMobile();

  const cardIndex = CONTENT.work.cards.findIndex((c) => c.slug === slug);
  const card = CONTENT.work.cards[cardIndex];
  if (!card) return null;

  const pal = CARD_PALETTE[Math.max(0, cardIndex) % CARD_PALETTE.length];
  const d = card.detail[lang];
  const L = LABELS[lang];
  const hasImg = 'imgSrc' in card && card.imgSrc;

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Top nav ── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: pal.bg,
        borderBottom: '2px solid #000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 56px',
        height: '64px',
      }}>
        <Link href="/work" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: pal.textColor,
          textDecoration: 'none',
        }}>
          {L.back}
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {!isMobile && (
            <span style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: pal.textColor,
              opacity: 0.55,
            }}>
              {card.tag[lang]}
            </span>
          )}

          {/* EN / JP toggle */}
          <div style={{ display: 'flex', border: `2px solid ${pal.textColor}` }}>
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
                  borderRight: l === 'EN' ? `1px solid ${pal.textColor}` : 'none',
                  backgroundColor: lang === l ? pal.textColor : 'transparent',
                  color: lang === l ? pal.bg : pal.textColor,
                  cursor: 'pointer',
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: pal.bg,
        color: pal.textColor,
        padding: isMobile ? '40px 24px 0' : '72px 80px 0',
        borderBottom: '2px solid #000000',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {!isMobile && (
          <div aria-hidden style={{
            position: 'absolute',
            top: '10px',
            right: '-20px',
            fontWeight: 900,
            fontSize: 'clamp(6rem, 14vw, 13rem)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            color: 'rgba(0,0,0,0.06)',
            userSelect: 'none',
            fontFamily: 'var(--font-space-grotesk)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            {card.title[lang]}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            backgroundColor: pal.tagBg,
            color: pal.tagColor,
            border: `1px solid ${pal.tagBorder}`,
            padding: '4px 12px',
          }}>
            {card.tag[lang]}
          </span>
          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.65rem',
            color: pal.textColor,
            opacity: 0.6,
          }}>
            {card.year[lang]}
          </span>
        </div>

        <h1 style={{
          fontSize: isMobile ? 'clamp(2.4rem, 10vw, 4rem)' : 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          color: pal.textColor,
          position: 'relative',
          zIndex: 2,
        }}>
          {card.title[lang]}
        </h1>

        <p style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: isMobile ? '0.88rem' : '1rem',
          fontStyle: 'italic',
          color: pal.textColor,
          opacity: 0.6,
          marginBottom: isMobile ? '36px' : '56px',
          position: 'relative',
          zIndex: 2,
        }}>
          &ldquo;{d.tagline}&rdquo;
        </p>

        <div style={{
          width: '100%',
          height: isMobile ? '200px' : 'clamp(260px, 38vw, 460px)',
          position: 'relative',
          borderTop: '2px solid #000000',
          borderRight: '2px solid #000000',
          borderLeft: '2px solid #000000',
          borderBottom: 'none',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.12)',
        }}>
          {hasImg ? (
            <Image
              src={(card as { imgSrc: string }).imgSrc}
              alt={String((card as any).imgAlt || card.title[lang])}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '12px',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="1" stroke={pal.textColor} strokeWidth="1.2" strokeOpacity="0.3"/>
                <circle cx="12" cy="12" r="3.5" stroke={pal.textColor} strokeWidth="1.2" strokeOpacity="0.3"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: pal.textColor,
                opacity: 0.35,
              }}>
                Cover Photo
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── Story + Outcomes ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr',
        borderBottom: '2px solid #000000',
      }}>
        <div style={{
          padding: isMobile ? '40px 24px' : '72px 64px',
          borderRight: isMobile ? 'none' : '2px solid #000000',
          borderBottom: isMobile ? '2px solid #000000' : 'none',
        }}>
          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(0,0,0,0.4)',
            display: 'block',
            marginBottom: '28px',
          }}>
            {L.theStory}
          </span>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.12rem',
            lineHeight: 1.85,
            color: '#000000',
            margin: 0,
          }}>
            {d.story}
          </p>
        </div>

        <div style={{ padding: isMobile ? '40px 24px' : '72px 52px', backgroundColor: '#F5F5F0' }}>
          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(0,0,0,0.4)',
            display: 'block',
            marginBottom: '32px',
          }}>
            {L.outcomes}
          </span>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
            {d.outcomes.map((outcome, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '18px 0',
                borderBottom: i < d.outcomes.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#000000',
                  border: '2px solid #000000',
                  flexShrink: 0,
                  marginTop: '6px',
                  display: 'block',
                }}/>
                <span style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#000000' }}>
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Footer nav ── */}
      <div style={{
        padding: isMobile ? '32px 20px' : '48px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        backgroundColor: '#FFFFFF',
      }}>
        <Link href="/work" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          color: '#000000',
          border: '2px solid #000000',
          padding: '10px 22px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          {L.allProjects}
        </Link>
        <Link href="/#contact" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          color: pal.textColor,
          border: '2px solid #000000',
          padding: '10px 22px',
          backgroundColor: pal.bg,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '4px 4px 0px #000',
        }}>
          {L.startProject}
        </Link>
      </div>
    </main>
  );
}
