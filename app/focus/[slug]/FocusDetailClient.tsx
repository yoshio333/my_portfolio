'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTENT } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLang, Lang } from '@/hooks/useLang';

const LABELS = {
  EN: {
    back: '← Back',
    prefix: 'Focus Area',
    overview: 'Overview',
    whatWeDo: 'What We Do',
    allFocus: '← All Focus Areas',
    collaborate: "Let's Collaborate →",
  },
  JP: {
    back: '← 戻る',
    prefix: '重点領域',
    overview: '概要',
    whatWeDo: '取り組み内容',
    allFocus: '← 重点領域一覧',
    collaborate: 'コラボレーションする →',
  },
};

export default function FocusDetailClient({ slug }: { slug: string }) {
  const [lang, setLang] = useLang();
  const isMobile = useIsMobile();

  const item = CONTENT.focus.items.find((i) => i.slug === slug);
  if (!item) return null;

  const d = item.detail[lang];
  const L = LABELS[lang];

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', overflowX: 'hidden' }}>

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
              color: 'rgba(0,0,0,0.4)',
            }}>
              {L.prefix} / {item.num}
            </span>
          )}

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
      </div>

      {/* ── Hero ── */}
      <section style={{
        padding: isMobile ? '40px 24px 0' : '80px 80px 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '2px solid #000000',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {!isMobile && (
          <div aria-hidden style={{
            position: 'absolute',
            top: '20px',
            right: '40px',
            fontWeight: 900,
            fontSize: 'clamp(8rem, 18vw, 16rem)',
            lineHeight: 1,
            letterSpacing: '-0.06em',
            color: 'rgba(0,0,0,0.04)',
            userSelect: 'none',
            fontFamily: 'var(--font-space-grotesk)',
          }}>
            {item.num.replace('.', '')}
          </div>
        )}

        <div style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          backgroundColor: item.numBg,
          color: item.numColor,
          border: '2px solid #000000',
          display: 'inline-flex',
          padding: '4px 12px',
          marginBottom: '28px',
        }}>
          {item.num}
        </div>

        <h1 style={{
          fontSize: isMobile ? 'clamp(2.4rem, 10vw, 4rem)' : 'clamp(3.5rem, 8vw, 7.5rem)',
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: '#000000',
          marginBottom: '24px',
        }}>
          {item.title[lang].map((line, i) => (
            <span key={i}>{line}{i < item.title[lang].length - 1 && <br />}</span>
          ))}
        </h1>

        <p style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: isMobile ? '0.88rem' : '1rem',
          fontStyle: 'italic',
          color: 'rgba(0,0,0,0.45)',
          marginBottom: isMobile ? '40px' : '64px',
          maxWidth: '640px',
        }}>
          &ldquo;{d.tagline}&rdquo;
        </p>

        <div style={{
          width: '100%',
          height: isMobile ? '220px' : 'clamp(280px, 40vw, 480px)',
          position: 'relative',
          borderTop: '2px solid #000000',
          borderRight: '2px solid #000000',
          borderLeft: '2px solid #000000',
          borderBottom: 'none',
          overflow: 'hidden',
        }}>
          <Image
            src={item.coverImg}
            alt={item.title[lang].join(' ')}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
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
            marginBottom: '24px',
          }}>
            {L.overview}
          </span>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.15rem',
            lineHeight: 1.8,
            color: '#000000',
            margin: 0,
          }}>
            {d.intro}
          </p>
        </div>

        <div style={{ padding: isMobile ? '40px 24px' : '72px 64px', backgroundColor: '#F5F5F0' }}>
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
            {L.whatWeDo}
          </span>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {d.activities.map((act, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                paddingBottom: '16px',
                borderBottom: i < d.activities.length - 1 ? '1px solid rgba(0,0,0,0.12)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  backgroundColor: item.arrowBg,
                  color: item.arrowColor,
                  border: '2px solid #000000',
                  padding: '2px 8px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#000000' }}>
                  {act}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Impact stats ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : `repeat(${d.impact.length}, 1fr)`,
        borderBottom: '2px solid #000000',
      }}>
        {d.impact.map((item_stat, i) => (
          <div key={i} style={{
            padding: isMobile ? '36px 20px' : '56px 48px',
            borderRight: isMobile
              ? (i % 2 === 0 ? '2px solid #000000' : 'none')
              : (i < d.impact.length - 1 ? '2px solid #000000' : 'none'),
            borderBottom: isMobile && i < d.impact.length - 2 ? '2px solid #000000' : 'none',
            backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F5F5F0',
          }}>
            <div style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 3.5rem)' : 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: '#000000',
              marginBottom: '8px',
            }}>
              {item_stat.stat}
            </div>
            <div style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.65rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'rgba(0,0,0,0.45)',
            }}>
              {item_stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* ── Footer nav ── */}
      <div style={{
        padding: isMobile ? '32px 20px' : '48px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <Link href="/#focus" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          color: '#000000',
          border: '2px solid #000000',
          padding: '10px 22px',
          backgroundColor: '#FFFFFF',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          {L.allFocus}
        </Link>
        <Link href="/#contact" style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          color: '#FFFFFF',
          border: '2px solid #000000',
          padding: '10px 22px',
          backgroundColor: '#000000',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
        }}>
          {L.collaborate}
        </Link>
      </div>
    </main>
  );
}
