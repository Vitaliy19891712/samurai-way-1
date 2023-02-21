import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { StateType } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider, StoreContext } from "./StoreContext";
import { store } from "./Redux/store";

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(() => rerenderEntireTree(store.getState()));
