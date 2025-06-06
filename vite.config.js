import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   server: {
    host: '0.0.0.0',  // Allows network access
    port: 5173        // Optional: set a fixed port
  },
  plugins: [react()],
})
