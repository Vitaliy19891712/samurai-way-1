import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import React from "react";

import { ProfilePropsType } from "../Profile";

export function MyPosts(props: ProfilePropsType) {
  let postDate = props.posts.map((pd) => (
    <Post message={pd.messages} likeCount={pd.likeCount} id={pd.id} />
  ));

  return (
    <div className={s.item}>
      <h2>My post</h2>
      <div>
        <textarea></textarea>
        <div>
          <button>Кнопка</button>
        </div>
      </div>
      <div className={s.posts}>{postDate}</div>
    </div>
  );
}
