import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Space from "./components/Space.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Space />
  </StrictMode>
);
