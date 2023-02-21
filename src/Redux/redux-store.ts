import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";

type RedusersType = typeof redusers;

export type AppStateType = ReturnType<RedusersType>;

let redusers = combineReducers({
  profilePage: profileReduser,
  messagePage: dialogsReduser,
  sidebar: sidebarReduser,
});

export let store = createStore(redusers);


