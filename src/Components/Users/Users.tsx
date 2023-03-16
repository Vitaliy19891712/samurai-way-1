import { UserType } from "../../Redux/users-reducer";
import s from "./users.module.css";
import userPhoto from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { followUnfollowAPI } from "../../API/API";

type PropsUsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
  users: Array<UserType>;
  unfollow: (id: string) => void;
  follow: (id: string) => void;
  toogleIsFollowingProgress: (userId: string, isFetching: boolean) => void;
  followingInProgress: Array<string>;
};

const Users = (props: PropsUsersType) => {
  let quantityPages = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= quantityPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            className={props.currentPage === p ? s.selectedPage : s.page}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u: any) => (
        <div key={u.id} className={s.flex}>
          <div className={s.photo}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={s.userPhoto} />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toogleIsFollowingProgress(u.id, true);
                    followUnfollowAPI.unfollow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toogleIsFollowingProgress(u.id, false);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toogleIsFollowingProgress(u.id, true);
                    followUnfollowAPI.follow(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toogleIsFollowingProgress(u.id, false);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.text}>
            <div className={s.flexCol}>
              <div className={s.word}>{u.name}</div>
              <div className={s.word}>{u.status}</div>
            </div>
            <div className={s.flexCol}>
              <div className={s.word}>{"u.location.country"}</div>
              <div className={s.word}>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
