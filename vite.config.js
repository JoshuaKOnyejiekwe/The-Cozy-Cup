import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Tell Vite about all your HTML pages so it bundles each one
  build: {
    rollupOptions: {
      input: {
        main:           resolve(__dirname, "index.html"),
        menu:           resolve(__dirname, "menu.html"),
        productdetails: resolve(__dirname, "productdetails.html"),
      },
    },
  },
});
