import rough from 'roughjs';
import { createRoughContext } from './context';
import {
  rect,
} from './roughShape';

export function createRenderer(width, height) {
  const canvas = createRoughContext(width, height);
  const rc = rough.canvas(canvas);
  return {
    rect: (options) => rect(rc, options),
    canvas,
  };
}
