import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace 'growth-marketer-portfolio' with your actual repository name
  base: './',
})
