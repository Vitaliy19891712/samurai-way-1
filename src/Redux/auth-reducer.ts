export type ActionUsersReduserType = ReturnType<typeof setAuthUserData>;
// | ReturnType<typeof unfollow>
// | ReturnType<typeof follow>
// | ReturnType<typeof setUsers>
// | ReturnType<typeof setTotalUsersCount>
// | ReturnType<typeof toogleIsFetching>;

// export const FOLLOW = "FOLLOW";
// export const UNFOLLOW = "UNFOLLOW";
// export const SET_USERS = "SET_USERS";
// export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

// export const unfollow = (userId: string) => ({ type: UNFOLLOW, userId } as const);

// export const follow = (userId: string) => ({ type: FOLLOW, userId } as const);

// export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);

// export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page } as const);

export const setAuthUserData = (data: InitialStateType) => ({ type: SET_AUTH_USER_DATA, data } as const);

export type InitialStateType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state: InitialStateType = initialState, action: ActionUsersReduserType): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};
export default authReducer;
