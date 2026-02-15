import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/crapsgames/crapsgame.js", // source file
          dest: "./src/crapsgames/", // will be placed in dist/crapsgames/
        },
        {
          src: "src/randomQuoteGenerator/randQuoteGenerator.js", // source file
          dest: "randomQuoteGenerator", // will be placed in dist/randomQuoteGenerator/
        },
        {
          src: "./src/images/cv.pdf", // source file
          dest: "./src/images/", // will be placed in dist/crapsgames/
        },
      ],
    }),
  ],
});
