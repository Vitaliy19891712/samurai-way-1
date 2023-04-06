import React from "react";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { Header } from "./Header";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;
export type MapStatePropsType = {
  isAuth: boolean | null;
  login: string | null;
};
export type MapDispatchPropsType = {
  getAuthUserData: () => void;
  logout:()=>void;
};

class HeaderContainer extends React.Component<ProfilePropsType> {
  componentDidMount(): void {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
