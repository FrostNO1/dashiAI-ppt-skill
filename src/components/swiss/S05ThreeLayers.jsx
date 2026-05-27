import React from 'react';
import { CanvasCard, Chrome, Icon, SwissSlide } from './primitives.jsx';

export function SwissS05ThreeLayers({ page = '05', title, kicker, layers }) {
  return (
    <SwissSlide layout="S05" animate="stack-build">
      <CanvasCard>
        <Chrome left={`${page} · THREE LAYERS`} right="S05" />
        <div style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr', gap: '5vh' }}>
          <div data-anim="line" style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
            <div className="t-meta">{kicker}</div>
            <h2 className="h-xl-zh" style={{ fontSize: 'min(6.2vw,11vh)' }}>{title}</h2>
          </div>
          <div className="stack-row">
            {layers.map((layer, index) => (
              <div key={layer.title} className={`stack-block ${layer.tone ?? 'b-grey'}`}>
                <div className="layer-nb">{String(index + 1).padStart(2, '0')}</div>
                {layer.icon ? <div className="layer-icon"><Icon name={layer.icon} /></div> : null}
                <div className="layer-ttl">{layer.title}</div>
                <div className="layer-desc">{layer.body}</div>
                <div className="layer-tag">{layer.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </CanvasCard>
    </SwissSlide>
  );
}
