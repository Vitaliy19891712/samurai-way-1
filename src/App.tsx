import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Musics from "./Components/Musics/Musics";
import { Navbar } from "./Components/Nav/Nav";
import News from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/musics" render={() => <Musics />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
