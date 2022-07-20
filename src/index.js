import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./AppContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <AppContextProvider>
    <Router basename={"/"}>
      <App />
    </Router>
  </AppContextProvider>,
  document.getElementById("root")
);
