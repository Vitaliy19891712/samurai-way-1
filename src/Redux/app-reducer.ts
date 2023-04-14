import { FormAction, stopSubmit } from "redux-form";
import { authAPI } from "../api/API";
import { AppThunk } from "./redux-store";
import { getAuthUserData } from "./auth-reducer";

export type ActionAppReduserType = ReturnType<typeof initializedSuccess>;

export const INITIALIZED_SUCCESS = "SET_INITIALIZED";

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS } as const);

export type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state: InitialStateType = initialState, action: ActionAppReduserType): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializeApp = (): AppThunk => (dispatch) => {
  dispatch(getAuthUserData()).then(() => {
    dispatch(initializedSuccess());
  });
};
export default appReducer;
