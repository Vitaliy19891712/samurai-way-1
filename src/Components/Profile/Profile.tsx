import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { StoreType } from "../../Redux/store";
import { MyPostsContainer } from "./Myposts/Post/MyPostsContainer";

export type ProfilePropsType = {
  store: StoreType;
};

export function Profile() {
  return (
    <div className={s.item}>
      <ProfileInfo />

      <MyPostsContainer />
    </div>
  );
}
