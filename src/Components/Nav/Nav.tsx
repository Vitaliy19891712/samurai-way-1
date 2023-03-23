import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

export function Navbar() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>
          Message
        </NavLink>
      </div>

      <div>
        <NavLink to="/users" className={s.item} activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>

      <div>
        <NavLink to="/news" className={s.item} activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/musics" className={s.item} activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      {/* <div>
              <Sidebar ikons={store.getState().sidebar.dialogsData} />
            </div> */}
    </nav>
  );
}
