'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { CONTENT, CARD_PALETTE } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLang, Lang } from '@/hooks/useLang';

const LABELS = {
  EN: {
    back: '← Back',
    theStory: 'The Story',
    outcomes: 'Where We Are',
    allProjects: '← All Projects',
    startProject: 'Start Similar Project →',
    getInvolved: 'Support This Project →',
  },
  JP: {
    back: '← 戻る',
    theStory: 'ストーリー',
    outcomes: '現在地',
    allProjects: '← プロジェクト一覧',
    startProject: '同様のプロジェクトを始める →',
    getInvolved: 'プロジェクトに協力する →',
  },
};

const SECTION_CONFIG = {
  done: { EN: "What's Done",      JP: '完了したこと' },
  next: { EN: "What's Next",      JP: 'これからやること' },
  help: { EN: 'How You Can Help', JP: '手伝ってほしいこと' },
} as const;

export default function WorkDetailClient({ slug }: { slug: string }) {
  const [lang, setLang] = useLang();
  const isMobile = useIsMobile();

  const timelineRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLLIElement>(null);
  const lastItemRef = useRef<HTMLLIElement>(null);
  const [lineTop, setLineTop] = useState('6px');
  const [lineBottom, setLineBottom] = useState('8px');
  const [arrowBottom, setArrowBottom] = useState('0px');

  useEffect(() => {
    const calc = () => {
      if (!timelineRef.current || !firstItemRef.current || !lastItemRef.current) return;
      const wrapperRect = timelineRef.current.getBoundingClientRect();
      const firstRect = firstItemRef.current.getBoundingClientRect();
      const lastRect = lastItemRef.current.getBoundingClientRect();
      const top = firstRect.top + firstRect.height / 2 - wrapperRect.top;
      const bottom = wrapperRect.bottom - (lastRect.top + lastRect.height / 2);
      setLineTop(`${top}px`);
      setLineBottom(`${bottom + 8}px`);
      setArrowBottom(`${bottom}px`);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [lang, isMobile]);

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
              opacity: 0.9,
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
            textTransform: (card as any).caseSensitiveTitle ? 'none' : 'uppercase',
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
            opacity: 0.85,
          }}>
            {card.year[lang]}
          </span>
        </div>

        <h1 style={{
          fontSize: isMobile ? 'clamp(2.4rem, 10vw, 4rem)' : 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.05em',
          textTransform: (card as any).caseSensitiveTitle ? 'none' : 'uppercase',
          marginBottom: '20px',
          color: pal.textColor,
          WebkitTextStroke: '2px #000000',
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
          opacity: 0.85,
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
          {(d.story as string).split('\n\n').map((para, i, arr) => (
            <p key={i} style={{
              fontSize: isMobile ? '1rem' : '1.12rem',
              lineHeight: 1.85,
              color: '#000000',
              margin: 0,
              marginBottom: i < arr.length - 1 ? '1.4em' : 0,
            }}>
              {para}
            </p>
          ))}
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
          <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '20px', paddingBottom: '8px' }}>
            {/* Timeline dashed line */}
            <div style={{
              position: 'absolute',
              left: '4px',
              top: lineTop,
              bottom: lineBottom,
              width: 0,
              borderLeft: '1.5px dashed rgba(0,0,0,0.3)',
            }} />
            {/* Arrow tip — centered on the line (left: 4px - half-width 5px = -1px) */}
            <div style={{
              position: 'absolute',
              left: '-1px',
              bottom: arrowBottom,
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '8px solid rgba(0,0,0,0.35)',
            }} />
          {(() => {
            const renderedSections = (['done', 'next', 'help'] as const).filter(s =>
              (d.outcomes as readonly { text: string; status: string }[]).some(o => o.status === s)
            );
            const lastSection = renderedSections[renderedSections.length - 1];
            return renderedSections.map((section) => {
            const items = (d.outcomes as readonly { text: string; status: string }[]).filter(o => o.status === section);
            const sc = SECTION_CONFIG[section];
            return (
              <div key={section} style={{ marginBottom: '20px' }}>
                <span style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'inline-block',
                  marginBottom: '12px',
                  padding: '3px 10px',
                  backgroundColor: section === 'done' ? '#000000' : section === 'help' ? '#FFF133' : 'transparent',
                  color: section === 'done' ? '#FFFFFF' : section === 'help' ? '#000000' : 'rgba(0,0,0,0.6)',
                  border: section === 'next' ? '1px solid rgba(0,0,0,0.3)' : section === 'help' ? '1px solid rgba(0,0,0,0.4)' : 'none',
                }}>
                  {sc[lang]}
                </span>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {items.map((o, i) => {
                    const liRef = (section === 'done' && i === 0) ? firstItemRef
                      : (section === lastSection && i === items.length - 1) ? lastItemRef
                      : null;
                    return (
                    <li key={i} ref={liRef} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '8px 0',
                      borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    }}>
                      <span style={{
                        flexShrink: 0,
                        marginTop: '9px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#000000',
                        display: 'block',
                      }} />
                      <span style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#000000' }}>
                        {o.text}
                        {(o as { text: string; status: string; year?: string }).year && (
                          <span style={{
                            marginLeft: '0.5em',
                            fontSize: '0.72rem',
                            opacity: 0.35,
                            fontFamily: 'var(--font-space-mono)',
                          }}>
                            {(o as { text: string; status: string; year?: string }).year}
                          </span>
                        )}
                      </span>
                    </li>
                    );
                  })}
                </ul>
              </div>
            );
          });
          })()}
          </div>
          {/* CTA */}
          <div style={{ paddingTop: '24px', borderTop: '2px solid #000000' }}>
            <Link href="/#contact" style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              color: pal.textColor,
              backgroundColor: pal.bg,
              border: '2px solid #000000',
              padding: '8px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              {L.getInvolved}
            </Link>
          </div>
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
