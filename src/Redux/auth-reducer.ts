import { Dispatch } from "redux";
import { authAPI } from "../API/API";
import { AppActionsType, AppThunk } from "./redux-store";

export type ActionUsersReduserType = ReturnType<typeof setAuthUserData>;

export const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (data: InitialStateType) => ({ type: SET_AUTH_USER_DATA, data } as const);

export type InitialStateType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state: InitialStateType = initialState, action: ActionUsersReduserType): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const getMe = (): AppThunk => {
  return (dispatch) => {
    authAPI.getMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
      }
    });
  };
};

export default authReducer;
