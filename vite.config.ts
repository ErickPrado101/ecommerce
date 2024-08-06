import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ecommerce/',  // Adicione o nome do repositório aqui
  plugins: [react()],
});
