import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'
import imagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression({
    algorithm: 'gzip',
    ext: '.gz',
    threshold: 10240,
    deleteOriginFile: false,
    compressionOptions: {
      level: 9
    }
  }), imagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false
    },
    optipng: {
      optimizationLevel: 7
    },
    mozjpeg: {
      quality: 80
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4
    },
    webp: {
      quality: 75
    }
  })],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'styled-components'],
          icons: ['react-icons']
        }
      }
    }
  }
})
