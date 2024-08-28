import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const alias = {
    react: "preact/compat",
    "react-dom": "preact/compat",
    "react-dom/test-utils": "preact/compat",
  };

export default defineConfig({
    esbuild: {
        target: "esnext",
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxInject: `import { h, Fragment } from 'preact'`,
      },
      alias,
    plugins:[
        react()
    ]
})