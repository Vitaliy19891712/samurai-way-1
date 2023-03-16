import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export let store = createStore(rootReducer);
// @ts-ignore
window.store = store;
