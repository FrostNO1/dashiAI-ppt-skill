import React from 'react';
import { CanvasCard, Chrome, SwissSlide } from './primitives.jsx';

export function SwissS11HorizontalTimeline({ page = '11', title, kicker, nodes, footer }) {
  return (
    <SwissSlide layout="S11" animate="timeline-walk">
      <CanvasCard>
        <Chrome left={`${page} · HORIZONTAL TIMELINE`} right="S11" />
        <div style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: '3vh' }}>
          <div data-anim="line" style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
            <div className="t-meta">{kicker}</div>
            <h2 className="h-xl-zh" style={{ fontSize: 'min(6vw,10.5vh)' }}>{title}</h2>
          </div>
          <div className="timeline-h">
            <div className="tl-row">
              {nodes.map((node, index) => (
                <div key={node.label} className={`th-node ${index % 2 === 0 ? 'up' : 'down'} ${node.accent ? 'accent' : ''}`}>
                  <div className="dot" />
                  <div className="label">
                    <div className="yr">{node.label}</div>
                    <div className="name">{node.title}</div>
                    <div className="desc">{node.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="t-meta" style={{ textAlign: 'right' }}>{footer}</div>
        </div>
      </CanvasCard>
    </SwissSlide>
  );
}
