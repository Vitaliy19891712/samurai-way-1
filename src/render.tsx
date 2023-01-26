import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { stateType } from "./App";
import { addPost } from "./Redux/state";

export let rerenderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    document.getElementById("root")
  );
};
