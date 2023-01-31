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

export type StatePropsType = {
  state: StateType;
  addPost: () => void;
  updateNewPostYext: (text: string) => void;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagePage: MessagesDataType;
  sidebar: SidebarType;
};

export type SidebarType = {
  dialogsData: Array<DialogType>;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type MessagesDataType = {
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
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

function App(props: StatePropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar ikons={props.state.sidebar.dialogsData} />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostYext={props.updateNewPostYext}
              />
            )}
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
