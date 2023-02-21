import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ChangeEvent } from "react";
import { PostType } from "../../../App";

type MyPostPropsType = {
  updateNewPostText: (t: string) => void;
  addPost: () => void;
  profilePage: Array<PostType>;
  newPostText: string;
};
export function MyPosts(props: MyPostPropsType) {
  let postDate = props.profilePage.map((pd) => (
    <Post message={pd.message} likeCount={pd.likeCount} id={pd.id} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.item}>
      <h2>My post</h2>
      <div>
        <textarea
          value={props.newPostText}
          onChange={onPostChange}
          placeholder="Введите сообщение"
        />
        <div>
          <button onClick={onAddPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>{postDate}</div>
    </div>
  );
}
