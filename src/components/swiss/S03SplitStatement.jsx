import React from 'react';
import { CanvasCard, Chrome, SwissSlide } from './primitives.jsx';

export function SwissS03SplitStatement({ page = '03', left, right }) {
  return (
    <SwissSlide layout="S03" animate="statement" className="split">
      <CanvasCard>
        <div className="split-half">
          <div className="half b-ink" style={{ justifyContent: 'space-between' }}>
            <Chrome left={`${page} · STATEMENT`} right="S03" />
            <div>
              <div className="t-meta">{left.kicker}</div>
              <h2 className="h-xl-zh" style={{ fontSize: 'min(7.6vw,13vh)', marginTop: '2vh' }}>{left.title}</h2>
            </div>
            <p className="t-body-sm" style={{ maxWidth: '36ch' }}>{left.body}</p>
          </div>
          <div className="half b-grey r-border" style={{ justifyContent: 'space-between' }}>
            <Chrome left={right.kicker} right="COUNTER" />
            <div>
              <div className="kpi-thin accent">{right.value}</div>
              <h3 className="t-h-prod" style={{ marginTop: '2vh' }}>{right.title}</h3>
              <p className="t-body" style={{ marginTop: '1.4vh', maxWidth: '34ch' }}>{right.body}</p>
            </div>
            <div className="t-meta">{right.note}</div>
          </div>
        </div>
      </CanvasCard>
    </SwissSlide>
  );
}
