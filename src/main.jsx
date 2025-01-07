import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full max-w-7xl overflow-hidden mx-auto">
      <App />
    </div>
  </React.StrictMode>
);
