import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/routes.jsx";
import "./main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  </React.StrictMode>
);
