import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ProfilePropsType } from "../Profile";
import { ChangeEvent } from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../Redux/profile-reduser";

export function MyPosts(props: ProfilePropsType) {

  let postDate = props.profilePage.posts.map((pd) => (
    <Post message={pd.message} likeCount={pd.likeCount} id={pd.id} />
  ));

  const addPost = () => {
    props.dispatch(addPostCreator());
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <div className={s.item}>
      <h2>My post</h2>
      <div>
        <textarea
          value={props.profilePage.newPostText}
          onChange={onPostChange}
          placeholder="Введите сообщение"
        />
        <div>
          <button onClick={addPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>{postDate}</div>
    </div>
  );
}
