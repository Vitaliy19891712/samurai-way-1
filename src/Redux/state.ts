import { PostType, StateType } from "../App";

let rerenderEntireTree = (state: StateType) => {
  console.log("state change");
};

export let state: StateType = {
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
};

export const addPost = () => {
  let newPost: PostType = {
    id: "5",
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostYext = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer: (state: StateType) => void) => {
  rerenderEntireTree = observer;
};
