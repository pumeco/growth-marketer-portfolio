import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 깃허브 레포지토리 이름을 여기에 정확히 적어줍니다.
  base: '/growth-marketer-portfolio/',
})
