import { MyPosts } from "./Myposts/MyPosts";
import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";

export function Profile() {
  return (
    <div className={s.item}>
      <ProfileInfo />

      <MyPosts />
    </div>
  );
}
