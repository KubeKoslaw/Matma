// main.tsx - Punkt wejścia aplikacji React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "katex/dist/katex.min.css";
import "./styles/app.css";
import "./lib/toast";
import "./lib/katex";
import App from "./App";

// Motyw stosowany PRZED pierwszym renderem — brak migania jasnym motywem
const savedTheme = localStorage.getItem("trig_theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

// Service Worker (tylko http/https; w WebView appassets też https — SW jest network-only)
if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch((err) => {
    console.log("ServiceWorker registration skipped or failed:", err);
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
