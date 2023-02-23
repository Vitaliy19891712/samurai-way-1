import { connect } from "react-redux";
import { ActionProfileReduserTypes, addPostCreator, updateNewPostTextCreator } from "../../../../Redux/profile-reduser";
import { AppStateType } from "../../../../Redux/redux-store";
import { MyPosts } from "../MyPosts";

let mapStateToProps = (state: AppStateType) => {
  return {
    profilePage: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionProfileReduserTypes) => void) => {
  return {
    updateNewPostText: (text: string) => dispatch(updateNewPostTextCreator(text)),
    addPost: () => dispatch(addPostCreator()),
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
