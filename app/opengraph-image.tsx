import { ImageResponse } from 'next/og';

export const alt = 'MD Transfers & SOS — Mobilidade Executiva Premium & Assistência Rodoviária';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Playfair Display", Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse at 20% 40%, rgba(45,109,164,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, rgba(200,164,106,0.1) 0%, transparent 50%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 0,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: '#fafafa',
              letterSpacing: '-0.03em',
            }}
          >
            MD
          </span>
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: '#2d6da4',
            }}
          >
            .
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: '#c8a46a',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Transfer Executivo &amp; SOS Automotivo
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: '#a3a3a3',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Joinville · 24 horas · Resposta rápida
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 60,
            right: 60,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(200,164,106,0.3), transparent)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#dc2626',
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: '#737373',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Uma chamada — mobilidade completa
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
