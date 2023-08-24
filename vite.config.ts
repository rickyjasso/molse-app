import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // we use @ as the alias for the src directory so we can import like '@/components' instead of '../../components'
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  },
})
