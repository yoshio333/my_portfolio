'use client';

import { CONTENT, Lang } from '@/lib/content';

type Props = { lang: Lang };

export default function MarqueeBar({ lang }: Props) {
  const items = CONTENT.marquee[lang];
  // Duplicate for seamless loop
  const repeated = [...items, ...items];

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '2px solid #000000',
        borderBottom: '2px solid #000000',
        backgroundColor: '#000000',
        padding: '14px 0',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="animate-marquee" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
              paddingRight: '60px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: i % 3 === 0 ? '#FF3131' : i % 3 === 1 ? '#2E5BFF' : '#FFF133',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
