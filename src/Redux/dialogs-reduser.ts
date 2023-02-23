export type MessagesDataType = {
  messagesData: Array<MessageType>;
  dialogsData: Array<DialogType>;
  newMessageBody: string;
};

export type DialogType = {
  id: string;
  name: string;
  foto: string;
};

export type MessageType = {
  id: string;
  messages: string;
  sender: boolean;
};

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

export type ActionDialogReduserTypes = ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>;

const dialogsReduser = (state: MessagesDataType = initialState, action: ActionDialogReduserTypes): MessagesDataType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [
          ...state.messagesData,
          {
            id: "4",
            messages: body,
            sender: true,
          },
        ],
      };

    default:
      return state;
  }
};
export default dialogsReduser;
