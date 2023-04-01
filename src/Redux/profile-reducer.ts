import { profileAPI } from "../API/API";
import { AppThunk } from "./redux-store";

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
  profile: ProfileType;
  status: string;
};

export type ProfileType = {
  aboutMe: number;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
} | null;

export type PostType = {
  id: string;
  message: string;
  likeCount: number;
};

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";

export const addPostCreator = () =>
  ({
    type: ADD_POST,
  } as const);
export const updateNewPostTextCreator = (text: string) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);
export const setUserProfile = (profile: ProfileType) =>
  ({
    type: SET_USER_PROFILE,
    profile,
  } as const);
export const setStatus = (status: string) =>
  ({
    type: SET_STATUS,
    status,
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
  profile: null,
  status: "",
};

export type ActionProfileReducerTypes =
  | ReturnType<typeof addPostCreator>
  | ReturnType<typeof updateNewPostTextCreator>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setUserProfile>;

const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileReducerTypes): ProfilePageType => {
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
   
    default:
      return state;
  }
};

export const getProfile = (userID: string): AppThunk => {
  return (dispatch) => {
    profileAPI.getProfile(userID).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const getStatus = (status: string): AppThunk => {
  return (dispatch) => {
    profileAPI.getStatus(status).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status: string): AppThunk => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
