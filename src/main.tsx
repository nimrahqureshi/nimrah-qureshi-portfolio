import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0B1220',
              color: '#F8FAFC',
              border: '1px solid rgba(124, 58, 237, 0.2)',
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
