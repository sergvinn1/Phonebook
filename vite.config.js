import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: 'https://67645a2a52b2a7619f5c5193.mockapi.io/AV',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
