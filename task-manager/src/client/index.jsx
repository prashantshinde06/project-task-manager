// import packages
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./app";

import "@assets/scss/main.scss";

import "bootstrap";

const container = document.getElementById("app-root");
const root = createRoot(container);
const RootComponent = () => {
  return (
    <>
      <App />
    </>
  );
};

// render DOM
root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);
