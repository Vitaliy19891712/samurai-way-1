import { StateType } from "../App";
import dialogsReduser, {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./dialogs-reduser";
import profileReduser, {
  addPostCreator,
  updateNewPostTextCreator,
} from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";

export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _callSubscriber: (state: StateType) => void;
  subscribe: (observer: (state: StateType) => void) => void;
  dispatch: (action: ActionTypes) => void;
};

export type ActionTypes =
  | ReturnType<typeof addPostCreator>
  | ReturnType<typeof updateNewPostTextCreator>
  | ReturnType<typeof updateNewMessageBodyCreator>
  | ReturnType<typeof sendMessageCreator>;

export let store: StoreType = {
  _state: {
    profilePage: {
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
    },
    messagePage: {
      messagesData: [
        { id: "1", messages: "Hi", sender: true },
        { id: "2", messages: "How are you?", sender: false },
        { id: "3", messages: "What is your name?", sender: true },
      ],
      dialogsData: [
        {
          id: "1",
          name: "Сергей",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg",
        },
        {
          id: "2",
          name: "Андрей",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/innocence-en-danger-emoticon-wink-8350944a80bcacb6b76082b877cca174-730x586-1.jpeg",
        },
        {
          id: "3",
          name: "Воробей",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235755_36-kartinkin-net-p-prikolnie-kartinki-dlya-stima-38.jpg",
        },
        {
          id: "4",
          name: "Алена",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235729_35-kartinkin-net-p-prikolnie-kartinki-dlya-stima-37.jpg",
        },
        {
          id: "5",
          name: "Настя",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235782_34-kartinkin-net-p-prikolnie-kartinki-dlya-stima-36-730x709.png",
        },
        {
          id: "6",
          name: "Женя",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235736_31-kartinkin-net-p-prikolnie-kartinki-dlya-stima-33.jpg",
        },
      ],
      newMessageBody: "",
    },
    sidebar: {
      dialogsData: [
        {
          id: "1",
          name: "Сергей",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg",
        },
        {
          id: "2",
          name: "Андрей",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/innocence-en-danger-emoticon-wink-8350944a80bcacb6b76082b877cca174-730x586-1.jpeg",
        },
        {
          id: "3",
          name: "Воробей",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235755_36-kartinkin-net-p-prikolnie-kartinki-dlya-stima-38.jpg",
        },
        {
          id: "4",
          name: "Алена",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235729_35-kartinkin-net-p-prikolnie-kartinki-dlya-stima-37.jpg",
        },
        {
          id: "5",
          name: "Настя",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235782_34-kartinkin-net-p-prikolnie-kartinki-dlya-stima-36-730x709.png",
        },
        {
          id: "6",
          name: "Женя",
          foto: "https://bipbap.ru/wp-content/uploads/2022/11/1652235736_31-kartinkin-net-p-prikolnie-kartinki-dlya-stima-33.jpg",
        },
      ],
    },
  },
  _callSubscriber(state: StateType) {
    console.log("state change");
  },

  getState() {
    return this._state;
  },
  subscribe(observer: (state: StateType) => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionTypes) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagePage = dialogsReduser(this._state.messagePage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};
// @ts-ignore
window.store = store
