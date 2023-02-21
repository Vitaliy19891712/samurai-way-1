import { PostType, ProfilePageType } from "../App";

import { ActionTypes } from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostCreator = () =>
  ({
    type: ADD_POST,
  } as const);
export const updateNewPostTextCreator = (text: string) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);

const initialState: ProfilePageType = {
  posts: [
    { id: "1", message: "Hello", likeCount: 17 },
    { id: "2", message: "How are you", likeCount: 45 },
    {
      id: "3",
      message: "What are you doing",
      likeCount: 67,
    },
  ],
  newPostText: "",
};

const profileReduser = (
  state: ProfilePageType = initialState,
  action: ActionTypes
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostType = {
        id: "5",
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export default profileReduser;
