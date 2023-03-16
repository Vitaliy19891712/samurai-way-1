import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { ProfileType, setUserProfile } from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { profileAPI } from "../../API/API";

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;
export type MapStatePropsType = {
  profile: ProfileType;
};
export type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
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
    profileAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({ profile: state.profilePage.profile });

export default connect(mapStateToProps, { setUserProfile })(WithURLDataContainerComponent);
