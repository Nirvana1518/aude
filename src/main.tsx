import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
