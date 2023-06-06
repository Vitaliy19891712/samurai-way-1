import { ThunkDispatch } from "redux-thunk";
import { userAPI } from "../api/API";
import { AppActionsType, AppStateType, AppThunk } from "./redux-store";
import { updateObjectInArray } from "../utils/helpers";
// VARIABLES
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
export const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

// ACTION CREATORS
export const unfollowSuccess = (userId: string) => ({ type: UNFOLLOW, userId } as const);

export const followSuccess = (userId: string) => ({ type: FOLLOW, userId } as const);

export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);

export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page } as const);

export const setTotalUsersCount = (totalUsers: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsers } as const);

export const toogleIsFetching = (isFetching: boolean) => ({ type: TOOGLE_IS_FETCHING, isFetching } as const);

export const toogleIsFollowingProgress = (userId: string, isFetching: boolean) =>
  ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, userId, isFetching } as const);

//TIPIZATION
export type unfollowSuccessType = ReturnType<typeof unfollowSuccess>;
export type followSuccessType = ReturnType<typeof followSuccess>;

export type ActionUsersReducerType =
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toogleIsFetching>
  | ReturnType<typeof toogleIsFollowingProgress>
  | unfollowSuccessType
  | followSuccessType;

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
  photos: { small: string | null; large: string | null };
  followed: boolean;
  name: string;
  status: string;
  location: UserLocationType;
};

export type UserLocationType = {
  city: string;
  country: string;
};

// INITIAL STATE
let initialState: InitialStateType = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

// REDUSER
const usersReducer = (state: InitialStateType = initialState, action: ActionUsersReducerType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
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

// THUNK
export const requestUsers =
  (currentPage: number, pageSize: number): AppThunk =>
  async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toogleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };

const followUnfollowFlow = async (
  dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>,
  userId: string,
  apiMethod: (id: string) => Promise<any>,
  actionCreator: (userId: string) => ActionUsersReducerType
) => {
  dispatch(toogleIsFollowingProgress(userId, true));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toogleIsFollowingProgress(userId, false));
};

export const follow =
  (userId: string): AppThunk =>
  async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);
  };

export const unfollow =
  (userId: string): AppThunk =>
  async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess);
  };

export default usersReducer;
