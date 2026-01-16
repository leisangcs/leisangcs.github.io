import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 兼容性写法：获取当前目录
const __dirname = path.resolve();

export default defineConfig({
  // 注意：这里删除了 themePlugin()，因为它导致了报错
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "db": path.resolve(__dirname, "db"),
    },
  },
  envDir: __dirname,
  root: path.resolve(__dirname, "client"),
  base: "/", 
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
} );
