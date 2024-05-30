import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./app/context/AuthProvider.js";
import { RouterProvider } from "react-router-dom";
import router from "./app/router/index.js";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
