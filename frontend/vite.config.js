import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Subpath deploy (e.g. https://logozodev.com/weblink/) — set at Docker build: VITE_BASE=/weblink/
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
