import path from 'path';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  esbuild: {},
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@mock': path.resolve(__dirname, './src/mock'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, './dist'),
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: 'index.html',
      },
    },
  },
});
