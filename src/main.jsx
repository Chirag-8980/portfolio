import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiContext } from "./context/CreateContext.jsx";
import ApiState from "./context/state/ApiData.jsx";
// import { Api } from "./context/CreateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
  <ApiState>
    <App/>
  </ApiState>
  </BrowserRouter>
  // </React.StrictMode>,
);
