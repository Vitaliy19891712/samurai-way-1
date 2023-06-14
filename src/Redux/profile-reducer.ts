import { stopSubmit } from "redux-form";
import { UpdateProfileType, profileAPI } from "../api/API";
import { AppThunk } from "./redux-store";

export type ProfilePageType = {
  posts: Array<PostType>;
  profile: any;
  status: string;
};

export type ProfileType = {
  aboutMe: string;
  contacts: {
    [facebook: string]: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
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
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const DELETE_POST = "DELETE_POST";
export const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export const deletePostCreator = (postId: string) =>
  ({
    type: DELETE_POST,
    postId,
  } as const);

export const savePhotoSuccess = (photos: { small: string; large: string }) =>
  ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
  } as const);

export const addPostCreator = (message: string) =>
  ({
    type: ADD_POST,
    message,
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
  profile: null,
  status: "",
};

export type ActionProfileReducerTypes =
  | ReturnType<typeof deletePostCreator>
  | ReturnType<typeof addPostCreator>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof savePhotoSuccess>
  | ReturnType<typeof setUserProfile>;

const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileReducerTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: "5",
            message: action.message,
            likeCount: 0,
          },
        ],
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export const getProfile =
  (userID: string): AppThunk =>
  async (dispatch) => {
    let data = await profileAPI.getProfile(userID);
    dispatch(setUserProfile(data));
  };

export const getStatus =
  (status: string): AppThunk =>
  async (dispatch) => {
    let data = await profileAPI.getStatus(status);
    dispatch(setStatus(data));
  };

export const updateStatus =
  (status: string): AppThunk =>
  async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

export const savePhoto =
  (file: File): AppThunk =>
  async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  };
export const saveProfile =
  (profile: UpdateProfileType): AppThunk =>
  async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0 && userId) {
      dispatch(getProfile(userId));
    } else {
      dispatch(stopSubmit("editProfile", { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  };
export default profileReducer;
