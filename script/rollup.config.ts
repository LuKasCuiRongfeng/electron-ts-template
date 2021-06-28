import { defineConfig } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { join } from 'path'


export default defineConfig({
    input: join(__dirname, "../src/main/main.ts"),
    output: {
        file: join(__dirname, "../dist/main/main.js"),
        format: "cjs",
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript()
    ],
    external: [
        "electron"
    ]
})