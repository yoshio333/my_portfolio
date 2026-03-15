'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { CONTENT, Lang } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { lang: Lang };

export default function Footer({ lang }: Props) {
  const c = CONTENT.footer[lang];
  const social = CONTENT.footer.social;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [entered, setEntered] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    if (inView && !entered) setEntered(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <footer
      id="contact"
      ref={ref}
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '3px dashed rgba(0,0,0,0.25)',
      }}
    >
      {/* Ghost background text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '40px',
          pointerEvents: 'none',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 7rem)', letterSpacing: '-0.05em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.04)', lineHeight: 0.88, whiteSpace: 'nowrap', paddingLeft: '40px' }}>
          {c.bgText1}
        </div>
        <div style={{ fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 7rem)', letterSpacing: '-0.05em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.04)', lineHeight: 0.88, whiteSpace: 'nowrap', paddingLeft: '80px' }}>
          {c.bgText2}
        </div>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, padding: isMobile ? '64px 24px 40px' : '100px 80px 56px' }}>

        {/* Badge */}
        <div style={{
          marginBottom: '28px',
          opacity: entered ? 1 : 0,
          transform: entered ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}>
          <span style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            border: '2px solid #000000',
            padding: '4px 14px',
            color: '#000000',
            backgroundColor: 'transparent',
          }}>
            {c.badge}
          </span>
        </div>

        {/* H2 */}
        <h2
          style={{
            fontSize: 'clamp(2.8rem, 11vw, 7.5rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: isMobile ? '32px' : '44px',
            opacity: entered ? 1 : 0,
            transform: entered ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.55s ease-out 0.1s, transform 0.55s ease-out 0.1s',
          }}
        >
          {c.h2[0]}
          <br />
          <span style={{ color: '#FFF133', textShadow: '-1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000' }}>{c.h2[1]}</span>
        </h2>

        {/* Body + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '28px' : '60px',
            flexWrap: 'wrap',
            marginBottom: isMobile ? '48px' : '72px',
            opacity: entered ? 1 : 0,
            transform: entered ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s',
          }}
        >
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'rgba(0,0,0,0.55)',
            maxWidth: '460px',
            margin: 0,
            borderLeft: '3px solid #FFF133',
            paddingLeft: '18px',
          }}>
            {c.body}
          </p>

          <a
            href="mailto:yoshimasa.nishinobu@gmail.com?subject=ポートフォリオサイトからの連絡&body=西信様%0Aポートフォリオサイトを見て連絡をしました。%0A%0A"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: ctaHovered ? '#333333' : '#000000',
              color: '#FFFFFF',
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              padding: '16px 32px',
              border: '2px solid #000000',
              boxShadow: ctaHovered ? '0px 0px 0px #000' : '6px 6px 0px #000',
              transform: ctaHovered ? 'translate(3px, 3px)' : 'none',
              textDecoration: 'none',
              transition: 'background-color 0.12s, box-shadow 0.1s, transform 0.1s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {c.cta} →
          </a>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.12)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.62rem',
              color: 'rgba(0,0,0,0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              {c.copy}
            </span>
            <span style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.58rem',
              color: 'rgba(0,0,0,0.45)',
              letterSpacing: '0.04em',
            }}>
              {lang === 'JP' ? '※このHPはClaudeCodeと一緒に作成しました。サンキュー！' : '※ Built together with ClaudeCode. Thank you!'}
            </span>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex' }}>
            {social.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                onMouseEnter={() => setHoveredSocial(i)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  fontFamily: 'var(--font-space-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  padding: isMobile ? '8px 14px' : '8px 18px',
                  borderTop: '1px solid rgba(0,0,0,0.2)',
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                  borderLeft: '1px solid rgba(0,0,0,0.2)',
                  borderRight: i < social.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.2)',
                  backgroundColor: hoveredSocial === i ? s.hoverBg : 'transparent',
                  color: hoveredSocial === i ? s.hoverColor : 'rgba(0,0,0,0.5)',
                  transition: 'background-color 0.12s, color 0.12s',
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
