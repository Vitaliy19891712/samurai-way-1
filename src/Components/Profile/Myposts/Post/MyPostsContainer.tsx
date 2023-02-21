import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../../Redux/profile-reduser";
import { StoreType } from "../../../../Redux/store";
import { StoreContext } from "../../../../StoreContext";
import { MyPosts } from "../MyPosts";

type MyPostsContainerPropsType = {
  store: StoreType;
};
export function MyPostsContainer() {
  // let state = props.store.getState();

  // const addPost = () => {
  //   props.store.dispatch(addPostCreator());
  // };

  // const onPostChange = (text: string) => {
  //   let action = updateNewPostTextCreator(text);
  //   props.store.dispatch(action);
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostCreator());
        };

        const onPostChange = (text: string) => {
          let action = updateNewPostTextCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            profilePage={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
