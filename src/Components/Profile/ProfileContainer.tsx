import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getProfile, getStatus, ProfileType, updateStatus } from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;
export type MapStatePropsType = {
  profile: ProfileType;
  status: string;
  autorizedUserId: number | null;
  isAuth: boolean;
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
      userId = String(this.props.autorizedUserId);
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
  autorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  // withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
