import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      // Explicitly resolve WASM file path for npm link compatibility
      '@doublewordai/inference-lab/pkg/inference_lab_bg.wasm': path.resolve(
        __dirname,
        '../inference-lab/pkg/inference_lab_bg.wasm'
      ),
    },
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    exclude: ['@doublewordai/inference-lab'],
  },
  assetsInclude: ['**/*.wasm'],
})
