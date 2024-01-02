// rollup.config.js
import { defineConfig } from 'vite';
import preact from "@preact/preset-vite";

import PluginCritical from 'rollup-plugin-critical';
export default defineConfig({
    esbuild: {
        target: "esnext",
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxInject: `import { h, Fragment } from 'preact'`,
      },
    plugins:[
        preact(),
        PluginCritical({
            criticalUrl: 'http://localhost:5173/',
            criticalBase: './',
            criticalPages: [
                { uri: '', template: 'index' },
            ],
            criticalConfig: {
              src:"./index.html",
              dest: 'dist/index-critical.html',
            },
        }),
    ]
})
