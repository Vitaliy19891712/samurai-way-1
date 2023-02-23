import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { MyPostsContainer } from "./Myposts/Post/MyPostsContainer";

export function Profile() {
  return (
    <div className={s.item}>
      <ProfileInfo />

      <MyPostsContainer />
    </div>
  );
}
