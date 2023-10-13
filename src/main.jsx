import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.jsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: finish data.js, concat image presentation in PS
// TODO: test image scroll on different img heights
// TODO: mobile adaptation: header burger, flex orientation
// TODO: import CV, make as component (single?). Add link to CV
