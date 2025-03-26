import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Ensure store.js exists
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Ensure this file exists
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/TaskList.css"; // Ensure this file exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
