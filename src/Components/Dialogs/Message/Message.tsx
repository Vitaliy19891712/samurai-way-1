import React from "react";
import { MessageType } from "../../../Redux/dialogs-reducer";
import s from "./Message.module.css";

function Message(props: MessageType) {
  const className = props.sender ? s.senderMessage : s.myMessage;

  return <div className={`${className} ${s.message}`}> {props.messages}</div>;
}

export default Message;
