import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { StatePropsType, StateType } from "./App";
import "./index.css";
import { addPost, updateNewPostYext, state, subscribe } from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostYext={updateNewPostYext}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
