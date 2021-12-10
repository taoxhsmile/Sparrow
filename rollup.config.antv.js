import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/test/antv.js', // 打包入口
  output: [
    {
      file: 'lib/antv.js', // 对于 Nodejs，打包成 commonjs
      format: 'cjs',
    },
    {
      file: 'esm/antv.js', // 对于浏览器，打包成 ES module
      format: 'es',
    },
    {
      file: 'dist/antv.min.js',
      name: 'sp',
      format: 'umd', // 对于 Nodejs 和浏览器，打包成混合模式
    },
  ],
  plugins: [
    babel(), // 使用 babel 插件
    resolve(),
    commonjs(),
  ],
};
