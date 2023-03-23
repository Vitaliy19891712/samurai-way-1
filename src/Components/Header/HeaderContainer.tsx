import React from "react";
import { connect } from "react-redux";
import { getMe } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { Header } from "./Header";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;
export type MapStatePropsType = {
  isAuth: boolean | null;
  login: string | null;
};
export type MapDispatchPropsType = {
  getMe: () => void;
};

class HeaderContainer extends React.Component<ProfilePropsType> {
  componentDidMount(): void {
    this.props.getMe();
    //  authAPI.getMe().then((data) => {
    //     if (data.resultCode === 0) {
    //       this.props.setAuthUserData(data.data);
    //     }
    //   });
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { getMe })(HeaderContainer);
