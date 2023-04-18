import React, { Component, ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { ConnectedComponent, connect } from "react-redux";
import { AppStateType } from "../Redux/redux-store";

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
});

export type MapStatePropsType = {
  isAuth: boolean;
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {

  
  const RedirectComponent = (props: MapStatePropsType) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to="/login" />;
    return <Component {...(restProps as T)} />;
  };

  let ConectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConectedAuthRedirectComponent;
}
