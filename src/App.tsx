import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Header } from "./Components/Header/Header";
import Musics from "./Components/Musics/Musics";
import { Navbar } from "./Components/Nav/Nav";
import News from "./Components/News/News";
import { Profile } from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

export type statePropsType = {
  state: {
    profilePage: { posts: Array<PostType> };
    messagePage: {
      messagesData: Array<MessageType>;
      dialogsData: Array<DialogType>;
    };
    sidebar: { dialogsData: Array<DialogType> };
  };
  addPost: (message: string) => void;
};

export type stateType = {
  profilePage: { posts: Array<PostType> };
  messagePage: {
    messagesData: Array<MessageType>;
    dialogsData: Array<DialogType>;
  };
  sidebar: { dialogsData: Array<DialogType> };
};

export type PostType = {
  id: string;
  message: string;
  likeCount: number;
};

export type DialogType = {
  id: string;
  name: string;
  foto: string;
};

export type MessageType = {
  id: string;
  messages: string;
  sender: boolean;
};

function App(props: statePropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar ikons={props.state.sidebar.dialogsData} />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route
            
            path="/profile"
            render={() => <Profile posts={props.state.profilePage.posts} addPost = {props.addPost}/>}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs data={props.state.messagePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/musics" render={() => <Musics />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
