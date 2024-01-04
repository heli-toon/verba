import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Verba - The Authentic Dictionary",
        short_name: "Verba",
        description:
          "Verba is an authentic pocket dictionary which provides accurate and up-to-date word definitions",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
        display: "standalone",
        theme_color: "#139ef1",
        background_color: "#18191a",
      },
    }),
  ],
});
