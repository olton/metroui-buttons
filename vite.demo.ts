import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import path from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import glob from "glob";

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, "demo"),
    build: {
        outDir: path.join(__dirname, "build"),
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, "demo", "*.html")),
        },
    },
})
