import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/hotel-review-analytics/' : '/',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
