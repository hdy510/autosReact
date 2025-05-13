import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true, // ← 외부 IP 허용!
    port: 5173, // ← 명시해주면 명확함 (기본값이라 생략도 가능)
  },
})