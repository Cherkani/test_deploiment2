import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          preline: ["preline"],
        },
      },
      plugins: [
        {
          name: "exclude-preline",
          resolveId(id) {
            if (id.includes("preline")) {
              return false;
            }
            return null;
          },
        },
      ],
    },
  },
});
