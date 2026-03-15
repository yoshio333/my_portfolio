'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT, Lang } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { lang: Lang };

export default function Footer({ lang }: Props) {
  const c = CONTENT.footer[lang];
  const social = CONTENT.footer.social;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [ctaHovered, setCtaHovered] = useState(false);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '28px' }}
        >
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
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(2.8rem, 11vw, 7.5rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: isMobile ? '32px' : '44px',
          }}
        >
          {c.h2[0]}
          <br />
          <span style={{ color: '#FFF133', WebkitTextStroke: '2px #000000' }}>{c.h2[1]}</span>
        </motion.h2>

        {/* Body + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '28px' : '60px',
            flexWrap: 'wrap',
            marginBottom: isMobile ? '48px' : '72px',
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
            href="mailto:hello@example.com"
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
        </motion.div>

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
