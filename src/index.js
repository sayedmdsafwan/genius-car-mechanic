import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOMClient.createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </HelmetProvider>
);
