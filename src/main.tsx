import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { VarProvider } from "./providers/VarContext";
import { UserProvider } from "./providers/UserContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <VarProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </VarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
