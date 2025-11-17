import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            {
              name: "react",
              test: /node_modules\/(react|react-dom)/,
            },
            {
              name: "ui",
              test: /node_modules\/(@mantine|@tabler\/icons-react)/,
            },
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
});
