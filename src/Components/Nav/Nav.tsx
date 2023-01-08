import s from "./Nav.module.css";

export function Navbar() {
  return (
    <nav className={s.nav}>
      <div>
        <a href="#s" className={s.item}>
          Profile
        </a>
      </div>
      <div>
        <a href="#s" className={s.item}>
          Message
        </a>
      </div>
      <div>
        <a href="#s" className={s.item}>
          News
        </a>
      </div>
      <div>
        <a href="#s" className={s.item}>
          Music
        </a>
      </div>
      <div>
        <a href="#s" className={s.item}>
          Settings
        </a>
      </div>
    </nav>
  );
}
