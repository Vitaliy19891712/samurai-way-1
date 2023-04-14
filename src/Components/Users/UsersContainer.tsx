import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { unfollowSuccess, requestUsers, setCurrentPage, toogleIsFollowingProgress, followSuccess, UserType } from "../../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { compose } from "redux";
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from "../../Redux/users-selectors";

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<string>;
};

type MapDispatchPropsType = {
  followSuccess: (userId: string) => void;
  unfollowSuccess: (userId: string) => void;
  setCurrentPage: (page: number) => void;
  toogleIsFollowingProgress: (userId: string, isFetching: boolean) => void;
  requestUsers: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toogleIsFetching(true);
    // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //   this.props.toogleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  }

  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.requestUsers(page, this.props.pageSize);

    // this.props.setCurrentPage(page);
    // this.props.toogleIsFetching(true);
    // userAPI.getUsers(page, this.props.pageSize).then((data) => {
    //   this.props.toogleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
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
          unfollow={this.props.unfollowSuccess}
          follow={this.props.followSuccess}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = (state: AppStateType): MapStatePropsType => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toogleIsFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
