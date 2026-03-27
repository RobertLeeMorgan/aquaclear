/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./config/postcss.config.js",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: true,
  },
  test: {
    globals: false,
    environment: "jsdom",
    setupFiles: "./tests/vitest.setup.ts",
    include: ["tests/**/*.{test,spec}.{ts,tsx}"],
  },
});