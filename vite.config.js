import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" }
      // { find: "@trello/components", replacement: "/src/components" },
      // { find: "@trello/pages", replacement: "/src/pages" },
      // { find: "@trello/util", replacement: "/src/util" },
      // { find: "@trello/redux", replacement: "/src/redux" },
      // { find: "@trello/hooks", replacement: "/src/hooks" }
    ]
  }
});
