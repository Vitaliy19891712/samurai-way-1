import { Route, withRouter } from "react-router-dom";
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
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import { AppStateType } from "./Redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";

export type AppPropsType = MapDispatchPropsType & MapStatePropsType;

export type MapDispatchPropsType = {
  initializeApp: () => void;
};
export type MapStatePropsType = {
  initialized: boolean;
};

class App extends React.Component<AppPropsType> {
  componentDidMount(): void {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;

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
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});
export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);
