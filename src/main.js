import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./app/context/AuthProvider.js";
import { RouterProvider } from "react-router-dom";
import router from "./app/router/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
