import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/layout/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#101010',
              color: '#F5F5F5',
              border: '1px solid rgba(225, 224, 204, 0.2)',
            },
            success: { iconTheme: { primary: '#E1E0CC', secondary: '#0a0a0a' } },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>
);
