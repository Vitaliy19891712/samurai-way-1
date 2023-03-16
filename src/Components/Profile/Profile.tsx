import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { MyPostsContainer } from "./Myposts/Post/MyPostsContainer";
import { ProfileType } from "../../Redux/profile-reducer";

type ProfilePropsType = {
  profile: ProfileType;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.item}>
      <ProfileInfo profile={props.profile} />

      <MyPostsContainer />
    </div>
  );
}
