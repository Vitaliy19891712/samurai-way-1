import { connect } from "react-redux";
import { ActionProfileReducerTypes, addPostCreator } from "../../../Redux/profile-reducer";
import { AppStateType } from "../../../Redux/redux-store";
import { MyPosts } from "./MyPosts";

let mapStateToProps = (state: AppStateType) => {
  return {
    profilePage: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionProfileReducerTypes) => void) => {
  return {
    addPost: (message: string) => dispatch(addPostCreator(message)),
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
