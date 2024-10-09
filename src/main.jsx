import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { VoyagerProvider } from "./contexts/VoyagerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VoyagerProvider>
      <App />
    </VoyagerProvider>
  </React.StrictMode>
);
