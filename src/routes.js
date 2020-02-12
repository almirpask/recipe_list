import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import TopBar from './components/TopBar'
export default function Routes() {
  return (
    <Fragment>    
      <Switch>
        <TopBar/>
      </Switch>
      <Switch>        
        <Route path="/" exact component={Home} />
        <Route path="/recipe/:id" exact component={Recipe} />               
      </Switch>
    </Fragment>
  );
}