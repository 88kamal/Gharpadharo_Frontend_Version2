import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // Firebase Messaging SW
import App from "./App";
import store from "./redux/store";
import "./index.css";
import MyState from "./context/myState";

// Register the Service Worker
// serviceWorkerRegistration.register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <MyState>
            <App />
          </MyState>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);