import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import commonjs from '@rollup/plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2'
import { componentEntrypoint } from "./src/utils/entry"

const env = process.env.NODE_ENV


const config =  {
    input: componentEntrypoint,
    output: [
        {
            dir: "dist",
            format: "es",
            sourcemap: false
          }
    ],
    plugins: [
            // 解析第三方依赖
            resolve(),
            // 识别 commonjs 模式第三方依赖
            commonjs(),
            // rollup 编译 typescript
            rollupTypescript(),
            // babel 配置
            babel({
                // 编译库使用 runtime
                babelHelpers: 'runtime',
                // 只转换源代码，不转换外部依赖
                exclude: 'node_modules/**',
                // babel 默认不支持 ts 需要手动添加
                extensions: [
                    ...DEFAULT_EXTENSIONS,
                    '.ts'
                ],
            }),
            del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};

if (env === 'production') {
    // config.plugins.push(terser({
    //     compress: {
    //       pure_getters: true,
    //       unsafe: true,
    //       unsafe_comps: true,
    //       warnings: false
    //     }
    //   }))
}

export default config;