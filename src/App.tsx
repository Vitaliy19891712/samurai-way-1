import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { Header } from "./Components/Header/Header";
import Musics from "./Components/Musics/Musics";
import { Navbar } from "./Components/Nav/Nav";
import News from "./Components/News/News";
import { Profile } from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import { StoreType } from "./Redux/store";

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

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/musics" render={() => <Musics />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
