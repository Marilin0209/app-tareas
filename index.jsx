import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StudentsProvider } from "./context/StudentsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  </React.StrictMode>
);
