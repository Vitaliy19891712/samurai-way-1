import React from "react";
import { NavbarPropsType } from "../Nav/Nav";
import SideBarItem from "./SideBarItem/SideBarItem";
import s from "./Sidebar.module.css";

function Sidebar(props: NavbarPropsType) {
  let ikon = props.ikons.map((i) => (
    <SideBarItem foto={i.foto} name={i.name} id={i.id} />
  ));

  return <div className={s.flex}>{ikon}</div>;
}

export default Sidebar;
