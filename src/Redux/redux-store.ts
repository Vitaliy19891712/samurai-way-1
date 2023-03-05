import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";

export type AppStateType = ReturnType<typeof rootReduser>;

let rootReduser = combineReducers({
  profilePage: profileReduser,
  messagePage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
});

export let store = createStore(rootReduser);
console.log(store);

// window.store = store;
