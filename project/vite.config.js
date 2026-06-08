import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.GITHUB_ACTIONS ? '/justicedeskmv/' : '/';

export default defineConfig({
  plugins: [react()],
  base,
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
});
