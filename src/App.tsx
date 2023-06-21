import { BrowserRouter, Redirect, Route, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Musics from "./Components/Musics/Musics";
import { Navbar } from "./Components/Nav/Nav";
import News from "./Components/News/News";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import { AppStateType, store } from "./Redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
import { lazy } from "react";
import React from "react";
import { withSuspence } from "./hoc/WithSuspence";
const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./Components/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"));
const Settings = lazy(() => import("./Components/Settings/Settings"));
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
          <Route
            path="/"
            render={() => {
              return <Redirect to={"/profile/"} />;
            }}
          />
          <Route path="/profile/:userId?" render={withSuspence(ProfileContainer)} />
          <Route path="/dialogs" render={withSuspence(DialogsContainer)} />
          <Route path="/users" render={withSuspence(UsersContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/musics" render={() => <Musics />} />
          <Route path="/settings" render={withSuspence(Settings)} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);

export let SamuraiJSApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
