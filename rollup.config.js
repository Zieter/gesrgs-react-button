// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js', // 入口文件
    output: {
        file: 'dist/index.js', // 輸出文件
        format: 'cjs', // CommonJS 格式
        exports: 'named',
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        terser(),
    ],
  external: ['react', 'react-dom', 'prop-types'], // 外部依賴
};
