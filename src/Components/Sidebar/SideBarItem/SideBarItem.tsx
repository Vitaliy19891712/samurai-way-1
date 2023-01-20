import React from "react";
import s from "./SideBarItem.module.css";
import { DialogType } from "../../../App";

function SideBarItem(props: DialogType) {
  return (
    <div className={s.grid}>
      <img src={props.foto} alt="" className={s.foto} />
      <div>{props.name}</div>
    </div>
  );
}

export default SideBarItem;
