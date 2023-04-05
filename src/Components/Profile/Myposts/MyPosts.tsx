import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ChangeEvent } from "react";
import { PostType } from "../../../Redux/profile-reducer";
import AddPost from "../../AddPost/AddPost";

type MyPostPropsType = {
  addPost: (message: string) => void;
  profilePage: Array<PostType>;
};

export function MyPosts(props: MyPostPropsType) {
  let postDate = props.profilePage.map((pd) => <Post key={pd.id} message={pd.message} likeCount={pd.likeCount} id={pd.id} />);

  return (
    <div className={s.item}>
      <AddPost addPost={props.addPost} />
      <div className={s.posts}>{postDate}</div>
    </div>
  );
}
