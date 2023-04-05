import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { unfollowSuccess, getUsers, setCurrentPage, toogleIsFollowingProgress, followSuccess, UserType } from "../../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

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
  getUsers: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toogleIsFetching(true);
    // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //   this.props.toogleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  }

  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);

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

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toogleIsFollowingProgress,
    getUsers,
  })
)(UsersContainer);
