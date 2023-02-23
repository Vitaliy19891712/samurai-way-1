export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type PostType = {
  id: string;
  message: string;
  likeCount: number;
};

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

export type ActionProfileReduserTypes = ReturnType<typeof addPostCreator> | ReturnType<typeof updateNewPostTextCreator>;

const profileReduser = (state: ProfilePageType = initialState, action: ActionProfileReduserTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: "5",
            message: state.newPostText,
            likeCount: 0,
          },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};
export default profileReduser;
