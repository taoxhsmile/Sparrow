import { createRenderer } from '../../src/renderer/roughRenderer';
import { mount } from '../../src/renderer/utils';
import { createDiv } from '../utils';

describe('createRenderer', () => {
  test('createContext(width, height) returns expected context.', () => {
    const renderer = createRenderer(400, 400);
    renderer.rect({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fill: 'red',
    });
    mount(createDiv(), renderer.canvas);
  });
});
