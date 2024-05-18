import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ApiState from "./context/state/ApiData.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <BrowserRouter>
  <ApiState>
    <App/>
  </ApiState>
  </BrowserRouter>
 
);
