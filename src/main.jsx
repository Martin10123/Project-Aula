import React from "react";
import ReactDOM from "react-dom/client";
import { SendMoney } from "./components/BankPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SendMoney />
  </React.StrictMode>
);
