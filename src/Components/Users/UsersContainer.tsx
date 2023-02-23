import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../Redux/redux-store";
import { ActionUsersReduserType, followAC, setUsersAC, unfollowAC, UserType } from "../../Redux/users-reduser";
import Users from "./Users";

type MapStatePropsType = {
  users: Array<UserType>;
};

type MapDispatchPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: Array<UserType>) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return { users: state.usersPage.users };
};

let mapDispatchToProps = (dispatch: Dispatch<ActionUsersReduserType>): MapDispatchPropsType => {
  return {
    follow: (userId: string) => dispatch(followAC(userId)),
    unfollow: (userId: string) => dispatch(unfollowAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
