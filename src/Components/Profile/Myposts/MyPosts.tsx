import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ProfilePropsType } from "../Profile";
import React, { RefObject } from "react";
import { text } from "stream/consumers";

export function MyPosts(props: ProfilePropsType) {
  let postDate = props.posts.map((pd) => (
    <Post message={pd.message} likeCount={pd.likeCount} id={pd.id} />
  ));

  let newPostElement: any = React.createRef();

  let addPost = () => {
    props.addPost(newPostElement.current.value);
    newPostElement.current.value = "";
  };

  return (
    <div className={s.item}>
      <h2>My post</h2>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={addPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>{postDate}</div>
    </div>
  );
}
