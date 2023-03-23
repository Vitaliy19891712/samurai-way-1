import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getProfile, ProfileType } from "../../Redux/profile-reducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;
export type MapStatePropsType = {
  profile: ProfileType;
  isAuth: boolean;
};
export type MapDispatchPropsType = {
  getProfile: (userID: string) => void;
};
type PathParamsType = {
  userId: string;
};

class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return <Profile profile={this.props.profile} />;
  }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getProfile })(WithURLDataContainerComponent);
