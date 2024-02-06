import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import AuthProvider from "./Provider/AuthProvider";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { PhotoProvider } from "react-photo-view";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <PhotoProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </PhotoProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
