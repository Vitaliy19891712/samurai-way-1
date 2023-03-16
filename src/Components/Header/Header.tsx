import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type HeaderPropsType = {
  isAuth: boolean | null;
  login: string | null;
};

export function Header(props: HeaderPropsType) {
  return (
    <header className={s.header}>
      <img
        src="https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg"
        alt="Logo"
      />
      <div className={s.loginBlock}>{props.isAuth ? <div>{props.login}</div> : <NavLink to={"/login"}>Login</NavLink>}</div>
    </header>
  );
}
