import React from "react";
import { DialogType } from "../../../Redux/dialogs-reducer";
import s from "./SideBarItem.module.css";

function SideBarItem(props: DialogType) {
  return (
    <div className={s.grid}>
      <img src={props.foto} alt="" className={s.foto} />
      <div>{props.name}</div>
    </div>
  );
}

export default SideBarItem;
