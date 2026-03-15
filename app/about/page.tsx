'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTENT } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLang, Lang } from '@/hooks/useLang';

export default function AboutPage() {
  const [lang, setLang] = useLang();
  const isMobile = useIsMobile();
  const a = CONTENT.about[lang];

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
          {a.backLabel}
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

      {/* ── Hero section ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        borderBottom: '2px solid #000000',
        minHeight: isMobile ? 'auto' : '520px',
      }}>
        {/* Left: name + bio */}
        <div style={{
          padding: isMobile ? '40px 24px' : '80px 80px',
          borderRight: isMobile ? 'none' : '2px solid #000000',
          borderBottom: isMobile ? '2px solid #000000' : 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Watermark */}
          <div aria-hidden style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-10px',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 12vw, 10rem)',
            lineHeight: 1,
            letterSpacing: '-0.06em',
            color: 'rgba(0,0,0,0.04)',
            userSelect: 'none',
            fontFamily: 'var(--font-space-grotesk)',
            textTransform: 'uppercase',
          }}>
            ABOUT
          </div>

          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(0,0,0,0.4)',
            marginBottom: '20px',
            display: 'block',
          }}>
            {a.role}
          </span>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: lang === 'JP' ? 1.1 : 0.92,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: '32px',
          }}>
            {lang === 'JP'
              ? CONTENT.name[lang]
              : CONTENT.name[lang].split(' ').map((word, i) => (
                  <span key={i} style={{ display: 'block' }}>{word}</span>
                ))
            }
          </h1>

          <div style={{ maxWidth: '480px', marginBottom: '40px' }}>
            {a.bio.split('\n\n').map((para, i, arr) => (
              <p key={i} style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(0,0,0,0.7)',
                marginBottom: i < arr.length - 1 ? '1.2em' : 0,
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {a.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  border: '2px solid #000000',
                  padding: '4px 12px',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: photo + meta */}
        <div style={{
          backgroundColor: '#F5F5F0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '40px 24px' : '80px 60px',
          gap: '32px',
        }}>
          {/* Photo placeholder */}
          <div style={{
            width: isMobile ? '220px' : '280px',
            backgroundColor: '#FFFFFF',
            padding: '12px 12px 0',
            border: '1px solid rgba(0,0,0,0.12)',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.15)',
            transform: 'rotate(-2deg)',
          }}>
            <div style={{
              width: isMobile ? '196px' : '256px',
              height: isMobile ? '220px' : '280px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <Image
                src="/images/resize/profile-about.jpg"
                alt="Profile photo"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 196px, 256px"
              />
            </div>
            <div style={{
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.58rem',
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              whiteSpace: 'pre-line',
              lineHeight: 1.5,
            }}>
              {a.photoCaption.split('\n')[0]}
            </div>
          </div>

          {/* Meta info */}
          <div style={{ display: 'flex', gap: '40px' }}>
            {[
              { label: lang === 'EN' ? 'Base' : '拠点', value: a.base },
              { label: lang === 'EN' ? 'Since' : '活動開始', value: a.since },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(0,0,0,0.4)',
                  marginBottom: '4px',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#000000',
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards section ── */}
      <section style={{
        padding: isMobile ? '48px 24px' : '64px 80px',
        backgroundColor: '#FFFFFF',
      }}>
        {/* Badge */}
        <div style={{ marginBottom: '28px' }}>
          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            border: '2px solid #000000',
            padding: '4px 14px',
            color: '#000000',
          }}>
            {CONTENT.awards.label[lang]}
          </span>
        </div>

        {/* Awards list */}
        <div>
          {CONTENT.awards.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '8px' : '32px',
                paddingTop: i === 0 ? 0 : '20px',
                paddingBottom: '20px',
                borderBottom: i < CONTENT.awards.items.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
              }}
            >
              <span style={{
                fontSize: isMobile ? '0.95rem' : '1rem',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.4,
              }}>
                {item.award[lang]}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <Link href={`/work/${item.slug}`} style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#000000',
                  border: '1px solid rgba(0,0,0,0.2)',
                  padding: '3px 10px',
                  textDecoration: 'none',
                }}>
                  {item.project[lang]}
                </Link>
                <span style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.65rem',
                  color: 'rgba(0,0,0,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}>
                  {item.role[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer nav ── */}
      <div style={{
        padding: isMobile ? '32px 20px' : '48px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        borderTop: '2px solid #000000',
      }}>
        <Link href="/" style={{
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
          {a.backLabel}
        </Link>
        <a href="/#contact" style={{
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
          {a.ctaLabel}
        </a>
      </div>
    </main>
  );
}
