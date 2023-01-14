import React from "react";
import PropTypes from "prop-types";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: string;
};

function DialogItem(props: DialogItemPropsType) {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

type MessagePropsType = {
  text: string;
};

function Message(props: MessagePropsType) {
  return <div className={s.message}>{props.text}</div>;
}

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name="Сергей" id="1" />
        <DialogItem name="Андрей" id="2" />
        <DialogItem name="Воробей" id="3" />
        <DialogItem name="Алена" id="4" />
        <DialogItem name="Настя" id="5" />
        <DialogItem name="Женя" id="6" />
      </div>
      <div className={s.messages}>
        <Message text="Hi" />
        <Message text="How are you?" />
        <Message text="What is your name?" />
      </div>
    </div>
  );
}

export default Dialogs;
