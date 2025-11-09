import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "./app/App";
import { BrowserRouter } from "react-router";

const detectDevice = () => {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    document.body.className = "desktop";
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    document.body.className = "tablet";
  } else {
    document.body.className = "";
  }
};
detectDevice();

window.addEventListener("load", detectDevice);
window.addEventListener("resize", detectDevice);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
