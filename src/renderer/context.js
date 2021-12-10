import { createSVGElement, mount } from './utils';

export function createContext(width, height) {
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const g = createSVGElement('g');
  mount(svg, g);

  return {
    node: svg,
    group: g,
  };
}

export function createRoughContext(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.setAttribute('viewBox', `0 0 ${width} ${height}`);
  return canvas;
}
