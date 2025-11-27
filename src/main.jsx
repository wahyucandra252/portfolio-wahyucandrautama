import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 900,
  easing: "ease-in-out",
  once: false, // animasi muncul berkali-kali bukan sekali
  mirror: true, // animasi trigger saat scroll ke atas
  offset: 50, // lebih smooth
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
