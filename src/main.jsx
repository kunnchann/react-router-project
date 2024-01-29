import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./store/Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
);
