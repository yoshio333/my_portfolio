import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '西信好真 ポートフォリオ';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
        }}
      >
        {/* Top: badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '20px', height: '20px', background: '#FF3131', display: 'flex' }} />
          <span
            style={{
              color: '#888888',
              fontSize: '18px',
              letterSpacing: '0.1em',
              fontFamily: 'monospace',
            }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Middle: name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '80px',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              YOSHIMASA
            </span>
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '80px',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              NISHINOBU
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              background: '#FFF133',
              color: '#000000',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              padding: '8px 16px',
              alignSelf: 'flex-start',
            }}
          >
            LOCAL FOCUS, GLOBAL MIND.
          </div>
        </div>

        {/* Bottom: url */}
        <div
          style={{
            display: 'flex',
            color: '#555555',
            fontSize: '18px',
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
          }}
        >
          y-nishinobu.soitgoes.page
        </div>
      </div>
    ),
    { ...size }
  );
}
