// import { Renderer as CanvasRenderer } from '@antv/g-svg';
// import { Canvas, Circle } from '@antv/g';

// const canvasRenderer = new CanvasRenderer();

// const canvas = new Canvas({
//   container: 'container',
//   width: 500,
//   height: 500,
//   renderer: canvasRenderer,
// });

// // 创建一个圆形
// const circle = new Circle({
//   style: {
//     x: 250,
//     y: 250,
//     r: 100,
//     fill: 'red',
//   },
// });

// // 绘制圆形
// canvas.appendChild(circle);

function createQuantize({ domain: [d0, d1], range }) {
  const n = range.length - 1;
  const step = (d1 - d0) / (n + 1);
  const quantizeDomain = new Array(n).fill(0).map((_, i) => step * (i + 1));
  console.log(quantizeDomain);
}

createQuantize({
  domain: [0, 100],
  range: ['', '', ''],
});
