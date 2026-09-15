// main.tsx - Punkt wejścia aplikacji React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import "katex/dist/katex.min.css";
import "./styles/app.css";
import "./lib/toast";
import "./lib/katex";
import App from "./App";

// Motyw stosowany PRZED pierwszym renderem — brak migania jasnym motywem
const savedTheme = localStorage.getItem("trig_theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

// PWA: service worker generowany przez vite-plugin-pwa (autoUpdate);
// w WebView appassets rejestracja może się nie powieść — plugin pomija ciszo.
if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  registerSW({ immediate: true });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
