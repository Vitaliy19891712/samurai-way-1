import { UserType } from "../../Redux/users-reducer";
import { Paginator } from "../common/Paginator/Paginator";
import User from "./User";

type PropsUsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
  users: Array<UserType>;
  unfollow: (id: string) => void;
  follow: (id: string) => void;
  followingInProgress: Array<string>;
};

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, unfollow, follow, followingInProgress }: PropsUsersType) => {
  return (
    <div>
      <Paginator portionSize={10} totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
      {users.map((user) => (
        <User key={user.id} user={user} unfollow={unfollow} follow={follow} followingInProgress={followingInProgress} />
      ))}
    </div>
  );
};

export default Users;
