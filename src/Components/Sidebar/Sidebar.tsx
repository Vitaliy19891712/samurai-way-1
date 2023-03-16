import React from "react";
import SideBarItem from "./SideBarItem/SideBarItem";
import s from "./Sidebar.module.css";
import { DialogType } from "../../Redux/dialogs-reducer";

export type NavbarPropsType = {
  ikons: Array<DialogType>;
};
function Sidebar(props: NavbarPropsType) {
  let ikon = props.ikons.map((i) => <SideBarItem foto={i.foto} name={i.name} id={i.id} />);

  return <div className={s.flex}>{ikon}</div>;
}

export default Sidebar;
