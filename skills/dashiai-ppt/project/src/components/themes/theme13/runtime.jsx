// theme13/runtime.jsx — Ocean Depths 深海主题
// 基于 theme09（深蓝杂志风）的页面组件，应用 Ocean Depths 配色
import React from 'react';
// 使用绝对路径导入预构建的 theme09 模块
import { runtimePages as theme09Pages } from '/data/user/work/dashiAI-ppt-skill/skills/dashiai-ppt/project/dist/theme-runtime/theme09.module.mjs';

// Ocean Depths 配色 CSS 注入
const OCEAN_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap');

.imported-theme-slide[data-theme-pack="theme13"] {
  font-family: 'Noto Sans SC', sans-serif;
}
`;

// Remap theme09 pages to theme13 with Ocean Depths wrapper
const theme13Pages = theme09Pages.map((page) => {
  const newKey = page.key.replace('theme09', 'theme13');
  const OceanComponent = React.forwardRef((props, ref) =>
    React.createElement(
      'div',
      {
        'data-ocean-depths': 'true',
        'data-page': newKey,
        style: { width: '100%', height: '100%', position: 'relative' },
      },
      React.createElement('style', { dangerouslySetInnerHTML: { __html: OCEAN_CSS } }),
      React.createElement(page.Component, { ...props, ref })
    )
  );
  OceanComponent.displayName = `OceanDepths_${page.pageNumber}`;

  return {
    ...page,
    key: newKey,
    themeKey: 'theme13',
    Component: OceanComponent,
  };
});

export { theme13Pages as runtimePages };
