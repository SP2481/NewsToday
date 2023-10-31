import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./global.css";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cachetime: Infinity,
    },
  },
});

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryclient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Main />);
