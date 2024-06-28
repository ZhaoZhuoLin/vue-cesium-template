import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from "vite-plugin-cesium"
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium(), visualizer({
    emitFile: false,
    filename: 'status.html', // 分析图生成的文件名
    open: true // 如果存在本地服务端口，将在打包后自动展示
  }),
  viteCompression({
    verbose: true, // 默认即可
    disable: false, // 开启压缩(不禁用)，默认即可
    deleteOriginFile: false, // 删除源文件
    threshold: 5120, // 压缩前最小文件大小
    algorithm: 'gzip', // 压缩算法
    ext: '.gz' // 文件类型
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  server: {
    /*设置为0.0.0.0则局域网内所有地址都能访问 */
    host: "0.0.0.0",
    port: 8888,
    cors: true,
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        // target: 'https://code-nav.top/',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  }
})
