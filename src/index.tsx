import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { StateType } from "./App";
import "./index.css";
import { store } from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}  />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
