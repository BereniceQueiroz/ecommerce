import react from '@vitejs/plugin-react';
import path from 'node:path';
import {defineConfig} from 'vite';
import type {InlineConfig} from 'vite';
import type {UserConfig} from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  test: {
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig;
});
