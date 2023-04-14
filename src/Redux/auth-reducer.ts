import { FormAction, stopSubmit } from "redux-form";
import { authAPI } from "../api/API";
import { AppThunk } from "./redux-store";

export type ActionUsersReduserType = ReturnType<typeof setAuthUserData> | FormAction;

export const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
  ({ type: SET_AUTH_USER_DATA, payload: { id, login, email, isAuth } } as const);

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
        ...action.payload,
      };

    default:
      return state;
  }
};

export const getAuthUserData = (): AppThunk<Promise<void>> => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logout = (): AppThunk => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
