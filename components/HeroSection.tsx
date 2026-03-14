'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTENT, Lang } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { lang: Lang };

// Nagasaki-inspired: ocean blue / mountain green / sunset orange
// 4 blobs, slightly smaller viewBox offset, lighter opacities
const BLOBS = [
  { cls: 'blob',        fill: '#3B9DD2', opacity: 0.52, d: 'M400,300 C450,200 550,220 560,300 C570,380 500,460 400,450 C300,440 240,380 240,300 C240,220 350,400 400,300 Z' },
  { cls: 'blob blob-2', fill: '#FF6B35', opacity: 0.42, d: 'M580,240 C620,150 710,170 720,250 C730,330 660,410 570,400 C480,390 440,320 450,245 C460,170 540,330 580,240 Z' },
  { cls: 'blob blob-3', fill: '#52A86A', opacity: 0.40, d: 'M180,360 C210,265 305,275 325,355 C345,435 285,505 195,498 C105,490 85,425 105,355 C125,285 150,455 180,360 Z' },
  { cls: 'blob blob-4', fill: '#3B9DD2', opacity: 0.32, d: 'M620,120 C645,60 700,70 710,125 C720,180 675,230 620,220 C565,210 540,165 555,115 C570,65 595,180 620,120 Z' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
});

export default function HeroSection({ lang }: Props) {
  const c = CONTENT.hero[lang];
  const [ctaHovered, setCtaHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section
      id="mission"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Liquid blob background ── */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
        viewBox="0 0 960 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
          </filter>
        </defs>
        <g filter="url(#goo)">
          {BLOBS.map((b) => (
            <path key={b.cls} className={b.cls} fill={b.fill} opacity={b.opacity} d={b.d} />
          ))}
        </g>
      </svg>

      {/* ── Border frame ── */}
      <div
        style={{
          position: 'absolute',
          inset: isMobile ? '12px' : '28px',
          border: '2px solid #000000',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: isMobile ? '72px 24px 40px' : '80px',
          maxWidth: isMobile ? '100%' : '680px',
          width: isMobile ? '100%' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '32px' }}>
          <span
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#2E5BFF',
                border: '1px solid #000000',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            {c.available}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontSize: 'clamp(3.2rem, 13vw, 8rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
            color: '#000000',
            margin: 0,
          }}
        >
          <span className="highlight-box">{c.h1[0]}</span>
          {c.h1[1]}
          <br />
          {c.h1[2]}
          <br />
          {!isMobile && lang === 'JP'
            ? <>{c.h1[3].slice(0, 3)}<br />{c.h1[3].slice(3)}</>
            : c.h1[3]
          }
        </motion.h1>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            width: '100%',
            height: '1px',
            background: isMobile ? 'transparent' : 'rgba(0,0,0,0.2)',
            margin: '36px 0',
            position: 'relative',
          }}
        >
          {!isMobile && (
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100px',
                height: '100%',
                background: '#2E5BFF',
                display: 'block',
              }}
            />
          )}
        </motion.div>

        {/* Body + CTA */}
        <motion.div
          {...fadeUp(0.4)}
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '24px' : '40px',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: '380px',
              color: '#000000',
              margin: 0,
            }}
          >
            {c.body}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0 }}>
            <a
              href="#contact"
              className="brutal-shadow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: ctaHovered ? '#FF3131' : '#000000',
                color: '#FFFFFF',
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '13px 26px',
                border: '2px solid #000000',
                textDecoration: 'none',
                transition: 'background-color 0.12s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              {c.cta}
            </a>
            <a
              href="#focus"
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(0,0,0,0.4)',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              ↓ Explore
            </a>
          </div>
        </motion.div>

        {/* Mobile info strip */}
        {isMobile && (
          <motion.div
            {...fadeUp(0.5)}
            style={{
              marginTop: '36px',
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              borderTop: '1px solid rgba(0,0,0,0.12)',
              paddingTop: '20px',
            }}
          >
            {[
              { label: lang === 'EN' ? 'Base' : '拠点', value: c.base },
              { label: lang === 'EN' ? 'Since' : '活動開始', value: c.since },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-space-mono)',
                    fontSize: '0.58rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(0,0,0,0.4)',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#000000',
                    marginTop: '2px',
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Mobile polaroid — straight, links to /about */}
        {isMobile && (
          <motion.div {...fadeUp(0.6)} style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Link href="/about" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '10px 10px 0',
                  border: '1px solid rgba(0,0,0,0.12)',
                  boxShadow: '5px 5px 0px rgba(0,0,0,0.15)',
                  width: '225px',
                }}
              >
                {/* Photo area */}
                <div
                  style={{
                    width: '205px',
                    height: '163px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile photo"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="164px"
                  />
                  <span
                    style={{
                      display: 'none',
                    }}
                  >
                    Your<br />Photo
                  </span>
                </div>
                {/* Caption — flex で下余白の中央に配置 */}
                <div
                  style={{
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: 'var(--font-space-mono)',
                    fontSize: '0.62rem',
                    color: '#000000',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.5,
                  }}
                >
                  {CONTENT.about[lang].photoCaption}
                </div>
              </div>
            </Link>
            <Link
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '10px',
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.6rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#000000',
                textDecoration: 'none',
                borderBottom: '1px solid #000000',
                paddingBottom: '1px',
              }}
            >
              {CONTENT.about[lang].viewProfile}
            </Link>
          </motion.div>
        )}
      </div>

      {/* ── Right info panel — desktop only ── */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.5 }}
          style={{
            position: 'absolute',
            right: '60px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            textAlign: 'right',
          }}
        >
          {[
            { label: lang === 'EN' ? 'Base' : '拠点', value: c.base },
            { label: lang === 'EN' ? 'Focus' : '専門', value: c.focus.join('\n') },
            { label: lang === 'EN' ? 'Since' : '活動開始', value: c.since },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.62rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(0,0,0,0.45)',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#000000',
                  marginTop: '2px',
                  whiteSpace: 'pre-line',
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* ── Polaroid photo card + Profile — desktop only ── */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 18, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ duration: 0.65, delay: 0.5, ease: 'easeOut' as const }}
          style={{
            position: 'absolute',
            bottom: '52px',
            right: '250px',
            zIndex: 15,
          }}
        >
          {/* Tape strip */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%) rotate(1deg)',
              width: '120px',
              height: '20px',
              backgroundColor: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(0,0,0,0.1)',
              zIndex: 16,
            }}
          />
          {/* Polaroid frame — clickable link to /about */}
          <Link href="/about" style={{ textDecoration: 'none', display: 'block' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                padding: '13px 13px 0',
                border: '1px solid rgba(0,0,0,0.12)',
                boxShadow: '7px 7px 0px rgba(0,0,0,0.18)',
                width: '325px',
                cursor: 'pointer',
              }}
            >
              {/* Photo area */}
              <div
                style={{
                  width: '300px',
                  height: '238px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile photo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="300px"
                />
                <span
                  style={{
                    display: 'none',
                  }}
                >
                  Your<br />Photo
                </span>
              </div>
              {/* Caption — flex で下余白の中央に配置 */}
              <div
                style={{
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.68rem',
                  color: '#000000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.5,
                }}
              >
                {CONTENT.about[lang].photoCaption}
              </div>
            </div>
          </Link>

          {/* Profile summary below polaroid */}
          <div
            style={{
              width: '325px',
              marginTop: '14px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              padding: '14px 16px',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.1)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.62rem',
                lineHeight: 1.75,
                color: '#000000',
                margin: '0 0 10px',
              }}
            >
              {CONTENT.about[lang].summary}
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#000000',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                borderBottom: '1px solid #000000',
                paddingBottom: '1px',
              }}
            >
              {CONTENT.about[lang].viewProfile}
            </Link>
          </div>
        </motion.div>
      )}

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '20px' : '44px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(0,0,0,0.35)',
        }}
      >
        ↓ Scroll
      </div>
    </section>
  );
}
