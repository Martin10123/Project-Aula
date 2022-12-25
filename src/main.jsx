import React from "react";
import ReactDOM from "react-dom/client";
import { MainStore } from "./Store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainStore />
  </React.StrictMode>
);
