import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // Define global como o objeto global do navegador
    process: {
      env: {
        NODE_ENV: 'development' // Define o ambiente como 'development'
      },
    },
  },
  resolve: {
    alias: {
      util: 'util/util.js', // Adiciona um alias para resolver o módulo util
    },
  },
});
