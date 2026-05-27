import React from 'react';
import { CanvasCard, Chrome, SwissSlide } from './primitives.jsx';

export function SwissS16MultiCardBrief({ page = '16', title, kicker, cards }) {
  return (
    <SwissSlide layout="S16" animate="field-notes">
      <CanvasCard>
        <Chrome left={`${page} · MULTI-CARD BRIEF`} right="S16" />
        <div style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr', gap: '4vh' }}>
          <div data-anim="line" style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
            <div className="t-meta">{kicker}</div>
            <h2 className="h-xl-zh" style={{ fontSize: 'min(5.8vw,10.2vh)' }}>{title}</h2>
          </div>
          <div data-anim="up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'repeat(2,1fr)', gap: '1.4vh 1.4vw' }}>
            {cards.map((card, index) => (
              <div key={card.title} className={card.accent ? 'card-accent' : 'card-fill'} style={{ padding: '2.2vh 1.5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '22vh' }}>
                <div className="t-meta">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="t-h-prod">{card.title}</h3>
                  <p className="t-body-sm" style={{ marginTop: '1vh' }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CanvasCard>
    </SwissSlide>
  );
}
