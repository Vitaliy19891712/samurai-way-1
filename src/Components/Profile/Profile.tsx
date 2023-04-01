import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { MyPostsContainer } from "./Myposts/Post/MyPostsContainer";
import { ProfileType } from "../../Redux/profile-reducer";
import { Redirect } from "react-router-dom";

type ProfilePropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status:string) => void;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.item}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

      <MyPostsContainer />
    </div>
  );
}
