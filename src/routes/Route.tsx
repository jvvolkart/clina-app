import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  path,
  exact,
  ...rest
}: {
  component: any;
  isPrivate?: boolean;
  path?: string;
  exact?: boolean;
}) {

  const signed = localStorage.getItem('jwtToken');

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && path === '/login') {
    return <Redirect to="/" />;
  }

  if (signed && isPrivate) {
    return (
      <Route
        {...rest}
        exact={exact}
        path={path}
        render={props => (
          <Component {...props} />
        )}
      />
    );
  }

  return <Route  {...rest} exact={exact} path={path} component={Component} />; // eslint-disable-line
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  exact: false,
  path: '',
};
