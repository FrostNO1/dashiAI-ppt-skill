import React from 'react';
import { CanvasCard, Chrome, SwissSlide } from './primitives.jsx';

export function SwissS08DuoCompare({ page = '08', title, kicker, left, right, footer }) {
  return (
    <SwissSlide layout="S08" animate="duo-mirror">
      <CanvasCard>
        <Chrome left={`${page} · DUO COMPARE`} right="S08" />
        <div data-anim="line" style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
          <div className="t-meta">{kicker}</div>
          <h2 className="h-xl-zh" style={{ fontSize: 'min(5.8vw,10vh)' }}>{title}</h2>
        </div>
        <div className="duo-compare">
          <DuoColumn item={left} number="01" />
          <div className="vrule" />
          <DuoColumn item={right} number="02" accent />
        </div>
        <div className="t-meta" style={{ marginTop: '3vh', textAlign: 'right' }}>{footer}</div>
      </CanvasCard>
    </SwissSlide>
  );
}

function DuoColumn({ item, number, accent = false }) {
  return (
    <div className={`col ${accent ? 'accent' : ''}`}>
      <div className="col-tag"><span className="num">{number}</span>{item.kicker}</div>
      <div className="col-ttl">{item.title}</div>
      <p className="col-desc">{item.body}</p>
      <ul className="col-list">
        {item.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </div>
  );
}
