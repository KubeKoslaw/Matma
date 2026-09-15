import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Build trafia bezpośrednio do assets WebView (MainActivity ładuje www/index.html).
// Katalog jest gitignorowany — CI buduje APK z `npm run build`.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "android/app/src/main/assets/www",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200 // moduły danych materiałów są duże (jeden chunk per dział)
  }
});
