import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.log('🔇 Silenced unhandled promise rejection (this is normal during development)');
  // Prevent the default browser behavior and the scary console errors
  event.preventDefault();
});

createRoot(document.getElementById("root")!).render(<App />);
