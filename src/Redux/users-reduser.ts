export type ActionUsersReduserType = ReturnType<typeof unfollowAC> | ReturnType<typeof followAC> | ReturnType<typeof setUsersAC>;

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

export const unfollowAC = (userId: string) => ({ type: UNFOLLOW, userId } as const);

export const followAC = (userId: string) => ({ type: FOLLOW, userId } as const);

export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);

export type InitialStateType = {
  users: Array<UserType>;
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
  users: [
    // {
    //   id: "1",
    //   photoURL: "https://vraki.net/sites/default/files/styles/news_full/public/inline/images/2_3.png?itok=Ahi7Mt2U",
    //   followed: true,
    //   fullName: "Vit",
    //   status: "Go home",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: "2",
    //   photoURL: "https://vraki.net/sites/default/files/styles/news_full/public/inline/images/2_3.png?itok=Ahi7Mt2U",
    //   followed: true,
    //   fullName: "Mur",
    //   status: "I will be back",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: "3",
    //   photoURL: "https://vraki.net/sites/default/files/styles/news_full/public/inline/images/2_3.png?itok=Ahi7Mt2U",
    //   followed: false,
    //   fullName: "Kat",
    //   status: "Better",
    //   location: { city: "Kiev", country: "Ykraine" },
    // },
  ],
};

const usersReduser = (state: InitialStateType = initialState, action: ActionUsersReduserType): InitialStateType => {
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
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};
export default usersReduser;
