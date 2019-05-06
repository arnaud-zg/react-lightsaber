import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('./package.json')

const libraryName = 'react-lightsaber'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: libraryName,
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
      },
      exports: 'named',
    },
  ],
  external: ['react'],
  watch: {
    include: 'src/**',
  },
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    cleanup(),
    commonjs(),
    filesize(),
    json(),
    peerDepsExternal(),
    resolve(),
    sourceMaps(),
    typescript({ useTsconfigDeclarationDir: true }),
    uglify(),
  ],
}
