import { MessagesDataType } from "../App";
import { ActionTypes } from "./store";

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessageCreator = () =>
  ({
    type: SEND_MESSAGE,
  } as const);

export const updateNewMessageBodyCreator = (body: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  } as const);

let initialState: MessagesDataType = {
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
};

const dialogsReduser = (
  state: MessagesDataType = initialState,
  action: ActionTypes
): MessagesDataType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({
        id: "4",
        messages: body,
        sender: true,
      });
      return state;
    default:
      return state;
  }
};
export default dialogsReduser;
