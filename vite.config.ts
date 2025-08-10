import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [React()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
