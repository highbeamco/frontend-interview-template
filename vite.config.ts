import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `@use "./src/styles/_colors.scss" as *;`,
          `@use "./src/styles/_shadows.scss" as *;`,
          "", // Extra newline
        ].join("\n"),
      },
    },
  },
});
