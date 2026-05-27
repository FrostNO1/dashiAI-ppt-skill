import React from 'react';
import { CanvasCard, Chrome, SwissSlide } from './primitives.jsx';

export function SwissS10SplitClosing({ page = '10', title, kicker, values, takeaways }) {
  return (
    <SwissSlide layout="S10" animate="split-statement" className="split">
      <CanvasCard>
        <div className="split-half">
          <div className="half b-ink" style={{ justifyContent: 'space-between' }}>
            <Chrome left={`${page} · SPLIT CLOSING`} right="S10" />
            <div>
              <div className="t-meta">{kicker}</div>
              {values.map((value) => (
                <div key={value} className="kpi-thin" style={{ marginTop: '2vh' }}>{value}</div>
              ))}
            </div>
          </div>
          <div className="half" style={{ justifyContent: 'space-between' }}>
            <Chrome left="TAKEAWAYS" right="03" />
            <div>
              <h2 className="h-xl-zh" style={{ fontSize: 'min(5vw,8.8vh)', marginBottom: '4vh' }}>{title}</h2>
              <ul className="takeaway-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2vh' }}>
                {takeaways.map((item, index) => (
                  <li key={item.title} style={{ display: 'grid', gridTemplateColumns: '4em 1fr', gap: '1.8vw', borderTop: '1px solid var(--grey-2)', paddingTop: '2vh' }}>
                    <div className="t-meta">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <h3 className="t-h-prod">{item.title}</h3>
                      <p className="t-body-sm" style={{ marginTop: '.8vh' }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CanvasCard>
    </SwissSlide>
  );
}
