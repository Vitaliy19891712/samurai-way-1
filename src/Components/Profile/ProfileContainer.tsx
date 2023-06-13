import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getProfile, getStatus, ProfileType, savePhoto, saveProfile, updateStatus } from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { EditProfileFormDataType } from "./PtofileInfo/ProfileDataForm";

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
  savePhoto: (photo: File) => void;
  saveProfile: (profile: EditProfileFormDataType) => void;
};
type PathParamsType = {
  userId: string;
};

class ProfileContainer extends React.Component<ProfilePropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = String(this.props.autorizedUserId);
      if (!this.props.autorizedUserId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount(): void {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        saveProfile={this.props.saveProfile}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
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
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer);
