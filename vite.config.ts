import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  base: "/ClothesStore/"
  // server: {
  //   proxy: {
  //     '/images': {
  //       target: 'http://localhost:5005',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/images/, '/images')
  //     }
  //   }
  // }
});
