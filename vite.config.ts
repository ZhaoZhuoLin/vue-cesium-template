import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from "vite-plugin-cesium"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    }
  },
  server: {
    host: "0.0.0.0",
    port: 8888,
    cors: true,
  },
  build: {
    outDir: 'dist', //指定输出路径（相对于 项目根目录). 建议使用系统默认
  }
})
