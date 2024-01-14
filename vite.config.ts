import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/api': path.resolve(__dirname, './src/api'),
      '@/models': path.resolve(__dirname, './src/models'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/routes': path.resolve(__dirname, './src/routes'),
      '@/router': path.resolve(__dirname, './src/router'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/style': path.resolve(__dirname, './src/style'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/helpers': path.resolve(__dirname, './src/utils/helpers'),
    },
  },
  plugins: [react()],
});
