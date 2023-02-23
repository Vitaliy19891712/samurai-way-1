import { Route } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { Header } from "./Components/Header/Header";
import Musics from "./Components/Musics/Musics";
import { Navbar } from "./Components/Nav/Nav";
import News from "./Components/News/News";
import { Profile } from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import { UsersContainer } from "./Components/Users/UsersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/musics" render={() => <Musics />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
