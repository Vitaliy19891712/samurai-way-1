export type ActionusersReducerType =
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof follow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toogleIsFetching>
  | ReturnType<typeof toogleIsFollowingProgress>;

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
export const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

export const unfollow = (userId: string) => ({ type: UNFOLLOW, userId } as const);

export const follow = (userId: string) => ({ type: FOLLOW, userId } as const);

export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);

export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page } as const);

export const setTotalUsersCount = (totalUsers: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsers } as const);

export const toogleIsFetching = (isFetching: boolean) => ({ type: TOOGLE_IS_FETCHING, isFetching } as const);

export const toogleIsFollowingProgress = (userId: string, isFetching: boolean) =>
  ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, userId, isFetching } as const);

export type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<string>;
};

export type UserType = {
  id: string;
  photoURL: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: UserLocationType;
};

export type UserLocationType = {
  city: string;
  country: string;
};

let initialState: InitialStateType = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state: InitialStateType = initialState, action: ActionusersReducerType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => (el.id === action.userId ? { ...el, followed: true } : el)),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => (el.id === action.userId ? { ...el, followed: false } : el)),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsers,
      };
    case TOOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOOGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
export default usersReducer;
