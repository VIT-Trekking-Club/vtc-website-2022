import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vtc-website-2022/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
  plugins: [reactRefresh()],
});
