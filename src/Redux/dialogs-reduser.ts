import { MessagesDataType } from "../App";
import { ActionTypes } from "./state";

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

const dialogsReduser = (state: MessagesDataType, action: ActionTypes) => {
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
