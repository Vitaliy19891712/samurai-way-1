import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Header } from "./Components/Header/Header";
import Musics from "./Components/Musics/Musics";
import { Navbar } from "./Components/Nav/Nav";
import News from "./Components/News/News";
import { Profile } from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import { ActionTypes, store, StoreType } from "./Redux/state";

export type AppPropsType = {
  store: StoreType;
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
  newMessageBody: string;
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

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar ikons={props.store.getState().sidebar.dialogsData} />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.store.getState().profilePage}
                dispatch={props.store.dispatch.bind(store)}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs store={props.store} />}
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
