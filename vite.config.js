import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/',
  build: {
    outDir: '../bluediamond-api/backend/static/frontend',  // Update the path accordingly
    emptyOutDir: true,
  },
})
