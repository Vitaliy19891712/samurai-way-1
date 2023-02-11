import { PostType, StateType } from "../App";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _callSubscriber: (state: StateType) => void;
  subscribe: (observer: (state: StateType) => void) => void;
  dispatch: (action: ActionTypes) => void;
};

export type ActionTypes =
  | ReturnType<typeof updateNewPostTextCreator>
  | ReturnType<typeof addPostCreator>
  | ReturnType<typeof sendMessageCreator>
  | ReturnType<typeof updateNewMessageBodyCreator>;

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
    if (action.type === ADD_POST) {
      let newPost: PostType = {
        id: "5",
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagePage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagePage.newMessageBody;
      this._state.messagePage.newMessageBody = "";
      this._state.messagePage.messagesData.push({
        id: "4",
        messages: body,
        sender: true,
      });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostCreator = () =>
  ({
    type: ADD_POST,
  } as const);
export const updateNewPostTextCreator = (text: string) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);
export const sendMessageCreator = () =>
  ({
    type: SEND_MESSAGE,
  } as const);
export const updateNewMessageBodyCreator = (body: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  } as const);
