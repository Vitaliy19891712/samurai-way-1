import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getProfile, getStatus, ProfileType, updateStatus } from "../../Redux/profile-reducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;
export type MapStatePropsType = {
  profile: ProfileType;
  status: string;
};
export type MapDispatchPropsType = {
  getProfile: (userID: string) => void;
  getStatus: (status: string) => void;
  updateStatus: (status: string) => void;
};
type PathParamsType = {
  userId: string;
};

class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "28062";
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose<React.ComponentType>(
  // withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
