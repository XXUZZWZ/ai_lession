import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    // 禁用 Vite 默认的 favicon 注入
    hmr: {
      overlay: false, // 可选：禁用 HMR 覆层（不影响图标，但可减少干扰）
    },
  },
});
