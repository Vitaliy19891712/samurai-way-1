import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getProfile, ProfileType } from "../../Redux/profile-reducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;
export type MapStatePropsType = {
  profile: ProfileType;
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
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
  // withAuthRedirect,
  connect(mapStateToProps, { getProfile }), withRouter)(ProfileContainer);
