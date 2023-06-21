import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { MyPostsContainer } from "./Myposts/MyPostsContainer";
import { ProfileType } from "../../Redux/profile-reducer";
import { Redirect } from "react-router-dom";
import { EditProfileFormDataType } from "./PtofileInfo/ProfileDataForm";

type ProfilePropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (photo: File) => void;
  saveProfile: (profile: EditProfileFormDataType) => void;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.item}>
      <ProfileInfo
        saveProfile={props.saveProfile} 
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
}
