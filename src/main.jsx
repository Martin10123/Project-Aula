import React from "react";
import ReactDOM from "react-dom/client";
import { ConfirmAppoi } from "./AuthProfessional/ConfirmAppoi/pages/ConfirmAppoi";
import { NotificationUser, ProfileUser } from "./AuthUser";

import { MessagesApp } from "./ChatsApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfirmAppoi />
  </React.StrictMode>
);
