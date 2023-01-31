import { MyPosts } from "./Myposts/MyPosts";
import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { PostType, ProfilePageType } from "../../App";

export type ProfilePropsType = {
  profilePage: ProfilePageType;
  addPost: () => void;
  updateNewPostYext: (text: string) => void;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.item}>
      <ProfileInfo />

      <MyPosts
        profilePage={props.profilePage}
        addPost={props.addPost}
        updateNewPostYext={props.updateNewPostYext}
      />
    </div>
  );
}
