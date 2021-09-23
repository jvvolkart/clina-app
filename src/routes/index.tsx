import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Public/Login/LoginView';
import RoomList from '../pages/Private/RoomsList/RoomListView';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" isPrivate exact component={RoomList} />
      <Route path="/login" component={Login} />
      <Route isPrivate component={RoomList} />
    </Switch>
  );
}
