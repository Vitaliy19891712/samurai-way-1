import React from "react";
import { connect } from "react-redux";
import { userAPI } from "../../API/API";
import { AppStateType } from "../../Redux/redux-store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toogleIsFetching,
  toogleIsFollowingProgress,
  unfollow,
  UserType,
} from "../../Redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<string>;
};

type MapDispatchPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (page: number) => void;
  setTotalUsersCount: (totalUsers: number) => void;
  toogleIsFetching: (isFetching: boolean) => void;
  toogleIsFollowingProgress: (userId: string, isFetching: boolean) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.toogleIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.toogleIsFetching(true);
    userAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toogleIsFollowingProgress={this.props.toogleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
  toogleIsFollowingProgress,
})(UsersContainer);
