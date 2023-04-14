import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer, { ActionDialogReduserTypes } from "./dialogs-reducer";
import profileReducer, { ActionProfileReducerTypes } from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, { ActionUsersReducerType } from "./users-reducer";
import authReducer, { ActionUsersReduserType } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer, { ActionAppReduserType } from "./app-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

export type AppActionsType =
  | ActionUsersReducerType
  | ActionProfileReducerTypes
  | ActionDialogReduserTypes
  | ActionUsersReduserType
  | ActionAppReduserType;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;
