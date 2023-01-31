import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ProfilePropsType } from "../Profile";
import React, { RefObject } from "react";
import { text } from "stream/consumers";

export function MyPosts(props: ProfilePropsType) {
  let postDate = props.profilePage.posts.map((pd) => (
    <Post message={pd.message} likeCount={pd.likeCount} id={pd.id} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    if (newPostElement.current) {
      props.updateNewPostYext(newPostElement.current.value);
    }
    // props.updateNewPostYext("");
  };

  return (
    <div className={s.item}>
      <h2>My post</h2>
      <div>
        <textarea
          ref={newPostElement}
          value={props.profilePage.newPostText}
          onChange={onPostChange}
        />
        <div>
          <button onClick={addPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>{postDate}</div>
    </div>
  );
}
