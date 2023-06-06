import { UserType } from "../../Redux/users-reducer";
import s from "./User.module.css";
import userPhoto from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";

type PropsUserType = {
  user: UserType;
  unfollow: (id: string) => void;
  follow: (id: string) => void;
  followingInProgress: Array<string>;
};

const User = ({ user, followingInProgress, follow, unfollow }: PropsUserType) => {
  return (
    <div key={user.id} className={s.flex}>
      <div className={s.photo}>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" className={s.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.text}>
        <div className={s.flexCol}>
          <div className={s.word}>{user.name}</div>
          <div className={s.word}>{user.status}</div>
        </div>
        <div className={s.flexCol}>
          <div className={s.word}>{"user.location.country"}</div>
          <div className={s.word}>{"user.location.city"}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
