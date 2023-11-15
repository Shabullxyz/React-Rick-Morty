import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://shabullxyz.github.io/React-Rick-Morty/',
  plugins: [react()],
})
