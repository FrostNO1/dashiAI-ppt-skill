// Ocean Depths Theme Demo - 使用 theme13 生成个人作品集 PPT
import { renderDeck } from '../src/renderDeck.jsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const deck = {
  title: 'Orion Ye · Frontend Developer & AI Builder',
  goal: '展示个人作品集与AI工作流实践，Ocean Depths 深海主题',
  themePack: 'theme13',
  pageCount: 8,
  slides: [
    {
      layout: 'theme13_page001',
      props: {
        title: 'ORION YE',
        subtitle: 'Frontend Developer & AI Builder',
        issue: 'PORTFOLIO 2026',
        date: '2026',
      }
    },
    {
      layout: 'theme13_page010',
      props: {
        title: '目录',
      }
    },
    {
      layout: 'theme13_page011',
      props: {
        number: '01',
        title: '关于我',
      }
    },
    {
      layout: 'theme13_page025',
      props: {
        title: 'FDE 全栈工程师',
        subtitle: '专注前端 + AI 应用开发',
        body: '热衷于用代码创造优雅、智能的数字产品\n技术栈: React · TypeScript · Node.js · AI Agent',
      }
    },
    {
      layout: 'theme13_page050',
      props: {
        title: '核心数据',
      }
    },
    {
      layout: 'theme13_page052',
      props: {
        quote: 'Code is poetry. AI is the new ink.',
        author: '— Orion Ye',
      }
    },
    {
      layout: 'theme13_page029',
      props: {
        title: '核心结论',
      }
    },
    {
      layout: 'theme13_page111',
      props: {
        title: "Let's Build Together",
        subtitle: '联系我开启合作',
      }
    },
  ],
};

const outFile = path.join(__dirname, '../output/ocean-depths-demo/index.html');
console.log('Rendering Ocean Depths deck...');
console.log('Output:', outFile);

renderDeck(deck, { outFile, includeThemeSwitcher: true });

console.log('Done! Ocean Depths PPT rendered successfully.');
console.log('Open in browser:', outFile);
