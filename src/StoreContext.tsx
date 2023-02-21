import React from "react";
import { StoreType } from "./Redux/store";

export const StoreContext = React.createContext({} as StoreType);

type ProviderPropsType = {
  store: StoreType;
  children: React.ReactNode;
};

export const Provider: React.FC<ProviderPropsType> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
