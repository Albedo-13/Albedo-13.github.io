import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.jsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: mobile adaptation: header burger, flex orientation
// TODO: import CV, make as component (single?). Add link to CV
// TODO: png to webp