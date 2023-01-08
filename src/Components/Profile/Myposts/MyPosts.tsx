import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import React from "react";

export function MyPosts() {
  return (
    <div className={s.item}>
      My post
      <div>
        <textarea></textarea>
        <button>Кнопка</button>
      </div>
      <div className={s.posts}>
        <Post message="Hello" likeCount={17} />
        <Post message="How are you" likeCount={45} />
        <Post message="What sre you doing" likeCount={67} />
      </div>
    </div>
  );
}
