import axios from "axios";
import { AppStateType } from "../../Redux/redux-store";
import { UserType } from "../../Redux/users-reduser";
import s from "./users.module.css";
import { UsersPropsType } from "./UsersContainer";
import userPhoto from "./../../assets/images/user.png";
import React from "react";

class Users extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    return (
      <div>
        {this.props.users.map((u: any) => (
          <div key={u.id} className={s.flex}>
            <div className={s.photo}>
              <div>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={s.userPhoto} />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
  }
}

export default Users;
