import React from 'react';
import { CanvasCard, Chrome, SwissSlide } from './primitives.jsx';

export function SwissS12ManifestoBanner({ page = '12', title, kicker, banner, note }) {
  return (
    <SwissSlide layout="S12" animate="manifesto">
      <CanvasCard>
        <Chrome left={`${page} · MANIFESTO`} right="S12" />
        <div style={{ flex: 1, display: 'grid', gridTemplateRows: '1fr auto', gap: '4vh' }}>
          <div data-anim="line" style={{ alignSelf: 'center' }}>
            <div className="t-cat accent">{kicker}</div>
            <div className="h-xl-zh" style={{ fontSize: 'min(8.4vw,14vh)', lineHeight: .96, marginTop: '2vh' }}>{title}</div>
          </div>
          <div data-anim="up" style={{ display: 'grid', gridTemplateColumns: '1fr 32ch', gap: '3vw', alignItems: 'end', background: 'var(--ink)', color: 'var(--paper)', padding: '3vh 2vw' }}>
            <div className="t-h-prod" style={{ color: 'var(--paper)', fontSize: 'max(24px,2vw)' }}>{banner}</div>
            <p className="t-body-sm" style={{ color: 'rgba(255,255,255,.78)' }}>{note}</p>
          </div>
        </div>
      </CanvasCard>
    </SwissSlide>
  );
}
