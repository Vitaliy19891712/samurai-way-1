import React, { ChangeEvent, LegacyRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { DialogType, MessageType } from "../../App";
import {
  sendMessageCreator,
  StoreType,
  updateNewMessageBodyCreator,
} from "../../Redux/state";

type DialogsPropsType = {
  store: StoreType;
};

function Dialogs(props: DialogsPropsType) {
  let dialogies = props.store._state.messagePage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} foto={d.foto} />
  ));

  let messagies = props.store._state.messagePage.messagesData.map((m) => (
    <Message messages={m.messages} id={m.id} sender={m.sender} />
  ));

  let newMessageElement = props.store._state.messagePage.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
