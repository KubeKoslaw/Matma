// toast.ts - Globalny system powiadomień (parity z window.showToast z legacy/js/app.js).
// Kontrakt window.showToast zostaje — celebrate.ts i przyszłe moduły z niego korzystają.

let toastTimeout: ReturnType<typeof setTimeout> | undefined;

export function showToast(message: string, duration = 2200) {
  const toast = document.getElementById("toast-container");
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = "block";

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.style.display = "none";
  }, duration);
}

window.showToast = showToast;
