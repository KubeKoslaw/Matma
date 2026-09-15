import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Build trafia bezpośrednio do assets WebView (MainActivity ładuje www/index.html).
// Katalog jest gitignorowany — CI buduje APK z `npm run build`.
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    // PWA: precache z haszami nazw (zastępuje przejściowy cleanup-sw);
    // manifest zostaje statyczny z public/manifest.json
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: null,
      manifest: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff,woff2,ttf}"],
        navigateFallback: "index.html"
      }
    })
  ],
  build: {
    outDir: "android/app/src/main/assets/www",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200 // moduły danych materiałów są duże (jeden chunk per dział)
  }
});
