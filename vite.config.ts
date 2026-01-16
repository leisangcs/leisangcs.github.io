import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 新增：引入 tailwindcss

// 兼容性写法：获取当前目录
const __dirname = path.resolve();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 新增：启用 tailwindcss 插件
  ],
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
