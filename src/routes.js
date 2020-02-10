import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Recipe from './pages/Recipe'
export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipe/:id" exact component={Recipe} />       
    </Switch>
  );
}