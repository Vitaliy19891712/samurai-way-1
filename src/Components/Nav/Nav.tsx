import { NavLink } from "react-router-dom";
import { DialogType } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import s from "./Nav.module.css";

export type NavbarPropsType = {
  ikons: Array<DialogType>;
};
export function Navbar(props: NavbarPropsType) {
  return (
    <nav className="nav">
      <div>
        <NavLink
          to="/profile"
          className={s.item}
          activeClassName={s.activeLink}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={s.item}
          activeClassName={s.activeLink}
        >
          Message{" "}
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={s.item} activeClassName={s.activeLink}>
          News{" "}
        </NavLink>
      </div>
      <div>
        <NavLink to="/musics" className={s.item} activeClassName={s.activeLink}>
          Music{" "}
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={s.item}
          activeClassName={s.activeLink}
        >
          Settings{" "}
        </NavLink>
      </div>
      <div>
        <Sidebar ikons={props.ikons}/>
      </div>
    </nav>
  );
}
