import { connect } from "react-redux";
import { ActionprofileReducerTypes, addPostCreator, updateNewPostTextCreator } from "../../../../Redux/profile-reducer";
import { AppStateType } from "../../../../Redux/redux-store";
import { MyPosts } from "../MyPosts";

let mapStateToProps = (state: AppStateType) => {
  return {
    profilePage: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionprofileReducerTypes) => void) => {
  return {
    updateNewPostText: (text: string) => dispatch(updateNewPostTextCreator(text)),
    addPost: () => dispatch(addPostCreator()),
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
