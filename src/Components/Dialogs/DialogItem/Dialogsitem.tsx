import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../App";

function DialogItem(props: DialogType) {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${props.id}`}>
        <img src={props.foto} alt="" className={s.foto}/>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
