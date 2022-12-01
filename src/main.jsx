import React from "react";
import ReactDOM from "react-dom/client";
import { ProfileUser } from "./components/auth/ProfileUser";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileUser />
  </React.StrictMode>
);
