import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router.tsx";
import "/dist/output.css";
import { BrowserRouter } from "react-router-dom";

// Add browser router to do routing between the pages
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
