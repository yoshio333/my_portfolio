'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CONTENT, Lang } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { lang: Lang; setLang: (l: Lang) => void };

export default function Header({ lang, setLang }: Props) {
  const links = CONTENT.nav[lang];
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '12px 16px' : '14px 28px',
        borderBottom: '2px solid #000000',
        backgroundColor: '#FFFFFF',
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontWeight: 900,
          fontSize: isMobile ? '0.82rem' : '1rem',
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          color: '#000000',
        }}
      >
        <div
          style={{
            width: '13px',
            height: '13px',
            backgroundColor: '#FF3131',
            border: '1px solid #000000',
            flexShrink: 0,
          }}
        />
        {CONTENT.nameHeader[lang]}
      </Link>

      {/* Nav — hidden on mobile */}
      {!isMobile && (
        <nav style={{ display: 'flex', gap: '28px' }}>
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '2px 8px',
                textDecoration: 'none',
                transition: 'background-color 0.12s, color 0.12s',
                backgroundColor: hoveredHref === item.href ? item.hoverBg : 'transparent',
                color: hoveredHref === item.href ? item.hoverColor : '#000000',
              }}
              onMouseEnter={() => setHoveredHref(item.href)}
              onMouseLeave={() => setHoveredHref(null)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Right: lang toggle + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '20px' }}>
        {/* Lang toggle */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#000000',
            padding: '3px',
            border: '2px solid #000000',
          }}
        >
          {(['EN', 'JP'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontFamily: 'var(--font-space-mono)',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: isMobile ? '3px 8px' : '4px 12px',
                backgroundColor: lang === l ? '#FFF133' : 'transparent',
                color: lang === l ? '#000000' : '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.15s, color 0.15s',
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* CTA — hidden on mobile */}
        {!isMobile && (
          <a
            href="#contact"
            className="brutal-shadow"
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              border: '2px solid #000000',
              padding: '8px 20px',
              backgroundColor: ctaHovered ? '#2E5BFF' : '#FFFFFF',
              color: ctaHovered ? '#FFFFFF' : '#000000',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.12s, color 0.12s',
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            {CONTENT.nav.cta[lang]}
          </a>
        )}
      </div>
    </header>
  );
}
