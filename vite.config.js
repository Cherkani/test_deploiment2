import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default defineConfig({
  base: "/test_deploiment2/",
  plugins: [react()],
});
