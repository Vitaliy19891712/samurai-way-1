import { MyPosts } from "./Myposts/MyPosts";
import { ProfileInfo } from "./PtofileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { ProfilePageType } from "../../App";
import { ActionTypes } from "../../Redux/state";

export type ProfilePropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionTypes) => void;
};

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.item}>
      <ProfileInfo />

      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
}
