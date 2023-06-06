import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../Redux/profile-reducer";
import AddPost from "../../AddPost/AddPost";
import React from "react";

type MyPostPropsType = {
  addPost: (message: string) => void;
  profilePage: Array<PostType>;
};

export const MyPosts = React.memo((props: MyPostPropsType) => {
  console.log("my post");

  let postDate = props.profilePage.map((pd) => <Post key={pd.id} message={pd.message} likeCount={pd.likeCount} id={pd.id} />);

  return (
    <div className={s.item}>
      <AddPost addPost={props.addPost} />
      <div className={s.posts}>{postDate}</div>
    </div>
  );
});
