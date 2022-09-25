import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  publicDir: false,
  server: {
    port: 3001
    // host: true
  },
  build: {
    manifest: true,
    outDir: mode === 'production' ? 'dist' : 'dev',
    rollupOptions: {
      input: 'src/main.js'
    }
  },
  plugins: [vue()]
}))
