import { ActionUsersReducerType, InitialStateType, followSuccessType, unfollowSuccessType } from "../Redux/users-reducer";

export const updateObjectInArray = (items: any, itemId: any, objectPropName: any, newObjectProps: any) =>
  items.map((i: any) => (i[objectPropName] === itemId ? { ...i, ...newObjectProps } : i));
