'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT, Lang } from '@/lib/content';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { lang: Lang };

export default function FocusSection({ lang }: Props) {
  const h = CONTENT.focus.header[lang];
  const items = CONTENT.focus.items;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  return (
    <section
      id="focus"
      ref={ref}
      style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 80px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: isMobile ? '40px' : '72px',
          borderBottom: '2px solid #000000',
          paddingBottom: '28px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(0,0,0,0.4)',
          }}
        >
          {h.left}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#000000',
          }}
        >
          {h.right}
        </span>
      </motion.div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '0',
          borderTop: '2px solid #000000',
        borderRight: '2px solid #000000',
        borderBottom: '2px solid #000000',
        borderLeft: '2px solid #000000',
        }}
      >
        {items.map((item, i) => (
          <FocusCard
            key={item.num}
            item={item}
            lang={lang}
            index={i}
            inView={inView}
            isMobile={isMobile}
            total={items.length}
          />
        ))}
      </div>
    </section>
  );
}

function FocusCard({
  item,
  lang,
  index,
  inView,
  isMobile,
  total,
}: {
  item: (typeof CONTENT.focus.items)[number];
  lang: Lang;
  index: number;
  inView: boolean;
  isMobile: boolean;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRight: !isMobile && index < 1 ? '2px solid #000000' : 'none',
        borderBottom: isMobile && index < total - 1 ? '2px solid #000000' : 'none',
        padding: isMobile ? '36px 28px' : '48px 40px',
        backgroundColor: (!isMobile && hovered) ? item.hoverBg : '#FFFFFF',
        color: (!isMobile && hovered) ? item.hoverColor : '#000000',
        transition: 'background-color 0.2s, color 0.2s',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        minHeight: isMobile ? 'auto' : '400px',
        position: 'relative',
      }}
    >
      {/* Number badge */}
      <div
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          backgroundColor: item.numBg,
          color: item.numColor,
          border: '2px solid #000000',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 10px',
          alignSelf: 'flex-start',
          marginBottom: isMobile ? '24px' : '40px',
        }}
      >
        {item.num}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.4rem)' : 'clamp(2rem, 3vw, 2.8rem)',
          fontWeight: 900,
          lineHeight: lang === 'JP' ? 1.05 : 0.9,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          marginBottom: '28px',
          flexGrow: 1,
        }}
      >
        {item.title[lang].map((line, j) => (
          <span key={j}>
            {line}
            {j < item.title[lang].length - 1 && <br />}
          </span>
        ))}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.7,
          color: (!isMobile && hovered) ? item.hoverColor : 'rgba(0,0,0,0.65)',
          transition: 'color 0.2s',
          marginBottom: '28px',
        }}
      >
        {item.desc[lang]}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {item.tags[lang].map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '0.62rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '4px 10px',
              border: '1px solid currentColor',
              opacity: 0.7,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
