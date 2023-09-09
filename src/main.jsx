import React from "react";
import ReactDOM from "react-dom/client";
import { SamplePage } from "./Pages/sample";
import { AppPage } from "./pages/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SamplePage /> */}
    <AppPage />
  </React.StrictMode>,
);
