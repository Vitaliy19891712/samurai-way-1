import React, { ChangeEvent, LegacyRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { DialogType, MessagesDataType, MessageType } from "../../App";
import { ActionTypes, StoreType } from "../../Redux/store";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reduser";

export type DialogsPropsType = {
  onNewMessageChange: (body: string) => void;
  onSendMessageClick: () => void;
  messagePage: MessagesDataType;
};

function Dialogs(props: DialogsPropsType) {
  let dialogies = props.messagePage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} foto={d.foto} />
  ));

  let messagies = props.messagePage.messagesData.map((m) => (
    <Message messages={m.messages} id={m.id} sender={m.sender} />
  ));

  let newMessageElement = props.messagePage.newMessageBody;

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.onNewMessageChange(body);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogs_items}>{dialogies}</div>
        <div className={s.messages}>{messagies}</div>
        <div>
          <textarea
            value={newMessageElement}
            onChange={onNewMessageChange}
            placeholder="Введите сообщение"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
