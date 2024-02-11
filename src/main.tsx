import "@radix-ui/themes/styles.css";
import "./styles/theme-config.css";
import "react-international-phone/style.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";
import React from "react";
import { Theme } from "@radix-ui/themes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./config";
import { Toaster } from "sonner";
import { UserProvider } from "./contexts/UserContext";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </QueryClientProvider>
      </HelmetProvider>

      <Toaster richColors position="top-center" />
    </Theme>
  </React.StrictMode>
);
