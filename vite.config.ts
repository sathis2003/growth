import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/landingpage/', // ✅ THIS FIXES THE BROKEN ASSET LINKS
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
