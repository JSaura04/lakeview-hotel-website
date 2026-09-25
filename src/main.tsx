import { StrictMode } from "react";
import HomePage from "./pages/home/page";
import { createRoot } from "react-dom/client";
import "./style.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)