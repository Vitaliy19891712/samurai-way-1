import { MyPosts } from "./Myposts/MyPosts";
import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { PostType } from "../../App";

export type ProfilePropsType = {
  posts: Array<PostType>;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.item}>
      <ProfileInfo />

      <MyPosts posts={props.posts} />
    </div>
  );
}
