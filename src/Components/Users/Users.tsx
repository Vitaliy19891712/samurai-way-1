import { AppStateType } from "../../Redux/redux-store";
import { UserType } from "../../Redux/users-reduser";
import s from "./users.module.css";
import { UsersPropsType } from "./UsersContainer";

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: "1",
        photoURL: "https://vraki.net/sites/default/files/styles/news_full/public/inline/images/2_3.png?itok=Ahi7Mt2U",
        followed: true,
        fullName: "Vit",
        status: "Go home",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: "2",
        photoURL: "https://vraki.net/sites/default/files/styles/news_full/public/inline/images/2_3.png?itok=Ahi7Mt2U",
        followed: true,
        fullName: "Mur",
        status: "I will be back",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: "3",
        photoURL: "https://vraki.net/sites/default/files/styles/news_full/public/inline/images/2_3.png?itok=Ahi7Mt2U",
        followed: false,
        fullName: "Kat",
        status: "Better",
        location: { city: "Kiev", country: "Ykraine" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u: any) => (
        <div key={u.id} className={s.flex}>
          <div className={s.photo}>
            <div>
              <img src={u.photoURL} alt="" className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </div>
          <div className={s.text}>
            <div className={s.flexCol}>
              <div className={s.word}>{u.fullName}</div>
              <div className={s.word}>{u.status}</div>
            </div>
            <div className={s.flexCol}>
              <div className={s.word}>{u.location.country}</div>
              <div className={s.word}>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
