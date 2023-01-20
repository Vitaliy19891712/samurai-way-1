import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogsitem";
import Message from "./Message/Message";
import { DialogType, MessageType } from "../../App";

type DialogsPropsType = {
  data: { dialogsData: Array<DialogType>; messagesData: Array<MessageType> };
};

function Dialogs(props: DialogsPropsType) {
  let dialogies = props.data.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} foto={d.foto} />
  ));

  let messagies = props.data.messagesData.map((m) => (
    <Message messages={m.messages} id={m.id} sender={m.sender} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogies}</div>
      <div className={s.messages}>{messagies}</div>
    </div>
  );
}

export default Dialogs;
