import { FormAction, stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/API";
import { AppThunk } from "./redux-store";

export type ActionUsersReduserType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess> | FormAction;

export const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
export const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
  ({ type: SET_AUTH_USER_DATA, payload: { id, login, email, isAuth } } as const);
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } } as const);

export type InitialStateType = {
  id: string | null;
  login: string | null;
  email: string | null;
  captchaUrl: string | null;
  isAuth: boolean;
};

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state: InitialStateType = initialState, action: ActionUsersReduserType): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const getAuthUserData = (): AppThunk<Promise<void>> => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): AppThunk => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
